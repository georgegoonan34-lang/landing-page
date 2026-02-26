import nodemailer from "nodemailer";
import type { ContactFormData } from "./validation";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactFormData) {
    const to = process.env.CONTACT_EMAIL || process.env.GMAIL_USER;
    const { name, business_name, phone, email, trade_type, interest, message } = data;

    const safeName = escapeHtml(name);
    const safeBusiness = escapeHtml(business_name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeTrade = escapeHtml(trade_type);
    const safeInterest = escapeHtml(interest);
    const safeMessage = message ? escapeHtml(message) : "";

    const text = [
        `New Demo Request`,
        ``,
        `Name: ${name}`,
        `Business: ${business_name}`,
        `Trade: ${trade_type}`,
        `Interest: ${interest}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        message ? `Message: ${message}` : "",
    ].filter(Boolean).join("\n");

    const html = `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
            <h2 style="color:#1a1a1a;margin-bottom:24px;">New Demo Request</h2>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;width:120px;">Name</td><td style="padding:10px 14px;border-bottom:1px solid #eee;"><strong>${safeName}</strong></td></tr>
                <tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;">Business</td><td style="padding:10px 14px;border-bottom:1px solid #eee;"><strong>${safeBusiness}</strong></td></tr>
                <tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;">Trade</td><td style="padding:10px 14px;border-bottom:1px solid #eee;">${safeTrade}</td></tr>
                <tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;">Interest</td><td style="padding:10px 14px;border-bottom:1px solid #eee;">${safeInterest}</td></tr>
                <tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;">Phone</td><td style="padding:10px 14px;border-bottom:1px solid #eee;"><a href="tel:${safePhone}">${safePhone}</a></td></tr>
                <tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;">Email</td><td style="padding:10px 14px;border-bottom:1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
                ${safeMessage ? `<tr><td style="padding:10px 14px;color:#666;border-bottom:1px solid #eee;">Message</td><td style="padding:10px 14px;border-bottom:1px solid #eee;">${safeMessage}</td></tr>` : ""}
            </table>
            <p style="color:#999;font-size:12px;margin-top:24px;">Sent from invoxai.uk contact form</p>
        </div>
    `;

    await transporter.sendMail({
        from: `"InvoxAI Website" <${process.env.GMAIL_USER}>`,
        to,
        replyTo: email,
        subject: `New Demo Request — ${business_name} (${trade_type})`,
        text,
        html,
    });
}
