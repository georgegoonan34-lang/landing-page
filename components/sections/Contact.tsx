"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { motion } from "framer-motion";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to submit");
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section className="py-32 bg-[#09090b] relative mt-px" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,149,108,0.1),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 pt-4"
                    >
                        <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6">
                            Let's get your <span className="text-zinc-500">phone sorted.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 font-sans">
                            Fill out the form below or skip the queue and book a 15-minute demo directly. We'll show you exactly how the agent handles your specific services.
                        </p>

                        <div className="space-y-10 text-white font-sans">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center bg-white/[0.02] shrink-0 group-hover:border-white/30 transition-colors">
                                    <span className="font-mono text-xs text-zinc-500 tracking-widest">01</span>
                                </div>
                                <div className="pt-3 flex-1 text-lg font-medium">Tell us about your business</div>
                            </div>

                            <div className="flex items-start gap-6 group relative">
                                <div className="absolute left-6 top-[-30px] bottom-[30px] w-px bg-white/10 -z-10" />
                                <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center bg-white/[0.02] shrink-0 group-hover:border-white/30 transition-colors">
                                    <span className="font-mono text-xs text-zinc-500 tracking-widest">02</span>
                                </div>
                                <div className="pt-3 flex-1 text-lg font-medium">Get a custom demo agent trained on your services</div>
                            </div>

                            <div className="flex items-start gap-6 group relative">
                                <div className="absolute left-6 top-[-30px] bottom-[30px] w-px bg-white/10 -z-10" />
                                <div className="w-12 h-12 rounded-2xl border border-accent-primary/50 flex items-center justify-center bg-accent-primary/10 shrink-0 shadow-[0_0_20px_rgba(200,149,108,0.2)]">
                                    <span className="font-mono text-xs text-accent-primary tracking-widest font-bold">03</span>
                                </div>
                                <div className="pt-3 flex-1 text-lg font-medium text-white">Never miss another job</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <Card className="rounded-[2rem] border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-2 shadow-2xl">
                            <CardHeader className="p-8 pb-4">
                                <CardTitle className="text-2xl text-white font-medium font-sans tracking-tight">Request a Demo</CardTitle>
                                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">No pushy sales calls. Just a demonstration of what we can build for you.</p>
                            </CardHeader>
                            <CardContent className="px-8 pb-8 pt-4">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="bg-success/10 border border-success/20 rounded-xl p-8 text-center"
                                    >
                                        <h3 className="text-success font-medium text-xl mb-2">Request Received</h3>
                                        <p className="text-success/80 text-sm mb-6">We'll be in touch shortly to set up your custom demo.</p>
                                        <button
                                            className="text-white hover:text-white/80 transition-colors text-sm underline underline-offset-4"
                                            onClick={() => setStatus("idle")}
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Name</label>
                                                <Input name="name" required placeholder="John Smith"
                                                    className="bg-white/[0.03] border-white/10 hover:border-white/20 focus-visible:border-white/30 rounded-xl h-12 placeholder:text-zinc-600 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Business Name</label>
                                                <Input name="business_name" required placeholder="Smith & Co Plumbing"
                                                    className="bg-white/[0.03] border-white/10 hover:border-white/20 focus-visible:border-white/30 rounded-xl h-12 placeholder:text-zinc-600 text-white" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Phone</label>
                                                <Input name="phone" type="tel" required placeholder="07700 900000"
                                                    className="bg-white/[0.03] border-white/10 hover:border-white/20 focus-visible:border-white/30 rounded-xl h-12 placeholder:text-zinc-600 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Email</label>
                                                <Input name="email" type="email" required placeholder="john@example.com"
                                                    className="bg-white/[0.03] border-white/10 hover:border-white/20 focus-visible:border-white/30 rounded-xl h-12 placeholder:text-zinc-600 text-white" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Trade type</label>
                                                <div className="relative">
                                                    <select
                                                        name="trade_type"
                                                        required
                                                        defaultValue=""
                                                        className="flex h-12 w-full rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] px-4 py-2 text-sm text-white transition-colors focus-visible:outline-none focus-visible:border-white/30 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                                    >
                                                        <option value="" disabled className="bg-[#0c0c0e] text-zinc-500">Select your trade...</option>
                                                        <option value="Plumber" className="bg-[#0c0c0e]">Plumber & Heating</option>
                                                        <option value="Electrician" className="bg-[#0c0c0e]">Electrician</option>
                                                        <option value="Roofer" className="bg-[#0c0c0e]">Roofer</option>
                                                        <option value="Builder" className="bg-[#0c0c0e]">Builder</option>
                                                        <option value="Carpenter" className="bg-[#0c0c0e]">Carpenter / Joiner</option>
                                                        <option value="Landscaper" className="bg-[#0c0c0e]">Landscaper / Gardener</option>
                                                        <option value="Other" className="bg-[#0c0c0e]">Other Trade</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Interested in</label>
                                                <div className="relative">
                                                    <select
                                                        name="interest"
                                                        required
                                                        defaultValue=""
                                                        className="flex h-12 w-full rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] px-4 py-2 text-sm text-white transition-colors focus-visible:outline-none focus-visible:border-white/30 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                                    >
                                                        <option value="" disabled className="bg-[#0c0c0e] text-zinc-500">What are you after?</option>
                                                        <option value="AI Call Answering" className="bg-[#0c0c0e]">AI Call Answering</option>
                                                        <option value="SMS Automation" className="bg-[#0c0c0e]">SMS Automation</option>
                                                        <option value="Lead Qualification" className="bg-[#0c0c0e]">Lead Qualification</option>
                                                        <option value="Full Package" className="bg-[#0c0c0e]">Full Package</option>
                                                        <option value="Just Exploring" className="bg-[#0c0c0e]">Just Exploring</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest pl-1">Message (Optional)</label>
                                            <Textarea name="message" placeholder="Any specific issues you're trying to solve?"
                                                className="bg-white/[0.03] border-white/10 hover:border-white/20 focus-visible:border-white/30 rounded-xl min-h-[100px] placeholder:text-zinc-600 text-white resize-none" />
                                        </div>

                                        {status === "error" && (
                                            <p className="text-destructive text-sm font-medium px-1">Something went wrong. Please try again or email us directly.</p>
                                        )}

                                        <Button type="submit" size="lg" className="w-full h-12 rounded-xl mt-4 bg-white text-black hover:bg-zinc-200" disabled={status === "submitting"}>
                                            {status === "submitting" ? "Sending..." : "Request Access"}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
