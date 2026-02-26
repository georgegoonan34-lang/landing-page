import { z } from "zod";

export const TRADE_TYPES = [
    "Plumber",
    "Electrician",
    "Roofer",
    "Builder",
    "Carpenter",
    "Landscaper",
    "Other",
] as const;

export const INTEREST_OPTIONS = [
    "AI Call Answering",
    "SMS Automation",
    "Lead Qualification",
    "Full Package",
    "Just Exploring",
] as const;

export const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    business_name: z.string().min(1, "Business name is required").max(100),
    phone: z.string().min(1, "Phone is required").max(30),
    email: z.string().email("Invalid email address").max(200),
    trade_type: z.enum(TRADE_TYPES, { message: "Please select a trade" }),
    interest: z.enum(INTEREST_OPTIONS, { message: "Please select an interest" }),
    message: z.string().max(2000).optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;
