"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const INCLUDED = [
    "24/7 AI Voice Agent",
    "SMS text handling",
    "Emergency call triage",
    "Automated job booking",
    "Lead qualification filtering",
    "Direct phone integration"
];

export function Pricing() {
    return (
        <section className="py-32 bg-[#09090b] relative border-t border-white/[0.05]" id="pricing">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/5 rounded-t-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium mb-8">
                        Pricing
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6">
                        Simple, honest pricing.
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-sans">
                        One capable agent, not three watered-down tiers. You only pay for what you actually use.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Main Agent Pricing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="p-8 md:p-10 border border-white/[0.08] bg-white/[0.02] relative overflow-hidden flex flex-col h-full rounded-[2rem] transition-all duration-300"
                    >
                        {/* Top accent line */}
                        <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-50" />

                        <div className="mb-8 mt-2">
                            <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">AI Agent Plan</h3>
                            <p className="text-zinc-400 text-sm">Everything you need to handle your calls.</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="font-serif text-6xl text-white tracking-tighter leading-none">£49</span>
                            <span className="text-zinc-500 font-medium">/month base</span>
                        </div>

                        <div className="mb-10">
                            <div className="bg-[#0c0c0e] border border-white/[0.05] rounded-xl p-5 mb-8">
                                <p className="text-sm font-medium text-white mb-1">+ Usage rate</p>
                                <p className="text-zinc-400 text-sm">£0.15 per answered minute</p>
                            </div>

                            <ul className="space-y-4">
                                {INCLUDED.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-sm text-zinc-300">
                                        <div className="mt-0.5 w-[18px] h-[18px] rounded-full bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 shrink-0">
                                            <Check className="w-2.5 h-2.5 text-accent-primary stroke-[3]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <Link
                                href="#contact"
                                className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all bg-white text-black hover:bg-zinc-200 h-12 px-8 w-full overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start your free trial
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Custom Integration Pricing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.15)" }}
                        className="p-8 md:p-10 bg-[#0c0c0e] border border-white/[0.05] flex flex-col h-full rounded-[2rem] transition-all duration-300 relative overflow-hidden group"
                    >
                        {/* Subtle glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="mb-8 mt-2 relative z-10">
                            <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Integration & Ops</h3>
                            <p className="text-zinc-500 text-sm">For custom CRM and workflow builds.</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2 relative z-10">
                            <span className="font-serif text-5xl text-white tracking-tight">Custom Plan</span>
                        </div>

                        <div className="mb-10 relative z-10">
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                Every trade business operates differently. We scope bespoke integration projects based on your specific requirements and systems.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-baseline gap-4 text-sm text-zinc-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                                    One-time build fees
                                </li>
                                <li className="flex items-baseline gap-4 text-sm text-zinc-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                                    Optional ongoing maintenance
                                </li>
                                <li className="flex items-baseline gap-4 text-sm text-zinc-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                                    Full ownership of your tools
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto relative z-10">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all bg-white/5 border border-white/10 text-white hover:bg-white/10 h-12 px-8 w-full"
                            >
                                Get a quote
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
