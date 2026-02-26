import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { contactSchema } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';

// In-memory rate limiting — 5 requests per IP per 15 minutes
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(req: Request) {
    try {
        const ip = req.headers.get('x-forwarded-for') || 'unknown-ip';
        const now = Date.now();

        const rateData = rateLimitMap.get(ip) || { count: 0, timestamp: now };

        if (rateData.timestamp < now - RATE_LIMIT_WINDOW_MS) {
            rateData.count = 0;
            rateData.timestamp = now;
        }

        if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
            return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }

        rateData.count++;
        rateLimitMap.set(ip, rateData);

        // Validate with Zod
        const body = await req.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            const firstError = result.error.issues[0]?.message || 'Invalid form data';
            return NextResponse.json({ error: firstError }, { status: 400 });
        }

        const data = result.data;

        // Save to Supabase
        const { error: dbError } = await supabase
            .from('contact_submissions')
            .insert([{
                name: data.name,
                business_name: data.business_name,
                trade_type: data.trade_type,
                phone: data.phone,
                email: data.email,
                message: data.message,
                status: 'new',
            }]);

        if (dbError) {
            console.error('Supabase error:', dbError);
            return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
        }

        // Send email notification
        try {
            await sendContactEmail(data);
        } catch (emailError) {
            console.error('Email error:', emailError);
            // Data is saved — don't fail the request
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
