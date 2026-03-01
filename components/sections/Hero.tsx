"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Fade out text as we scroll down
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.4], [0, 50]);

    // Scale up and bring the "dashboard" forward as we scroll
    const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05]);
    const dashboardY = useTransform(scrollYProgress, [0, 0.5], [50, -50]);
    const dashboardRotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const dashboardOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

    return (
        <section
            ref={containerRef}
            className="relative pb-24 md:pb-0 md:min-h-[140vh] bg-[#09090b] pt-24 md:pt-32 overflow-hidden flex flex-col items-center"
            id="hero"
        >
            {/* Cobalt-style Radial Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,149,108,0.15),transparent_50%)] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Text Content */}
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-10 md:mt-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-foreground-secondary text-sm font-medium mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                        Built for UK Tradesmen
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-tight text-white mb-8 [text-shadow:0_4px_24px_rgba(255,255,255,0.1)]"
                >
                    Never miss <br className="hidden md:block" />
                    <span className="text-white/60">another job again.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed font-sans"
                >
                    AI-powered voice agents that answer calls, qualify leads, and book jobs 24/7. Simple, reliable, and invisible to your customers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all bg-white text-black hover:bg-zinc-200 h-12 px-8 w-full sm:w-auto overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Demo
                        </span>
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all bg-white/5 border border-white/10 text-white hover:bg-white/10 h-12 px-8 w-full sm:w-auto"
                    >
                        See how it works
                    </Link>
                </motion.div>
            </motion.div>

            {/* The "Dashboard/Command Center" Visual that scales up */}
            <div className="relative mt-24 md:mt-0 md:absolute md:top-[60vh] lg:top-[70vh] w-full flex justify-center perspective-[2000px] px-4 sm:px-6">
                <motion.div
                    style={{
                        scale: dashboardScale,
                        y: dashboardY,
                        rotateX: dashboardRotateX,
                        opacity: dashboardOpacity
                    }}
                    className="w-full max-w-5xl rounded-2xl border border-white/[0.08] bg-[#0c0c0e] shadow-[0_0_80px_rgba(200,149,108,0.1)] overflow-hidden relative"
                >
                    {/* Dashboard Header Bar */}
                    <div className="h-12 border-b border-white/[0.05] flex items-center px-4 gap-2 bg-white/[0.02]">
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="ml-4 px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">
                            InvoxAI Agent Command
                        </div>
                    </div>

                    {/* Dashboard Grid Content */}
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Active Call UI Component */}
                        <div className="col-span-1 md:col-span-2 rounded-xl border border-white/[0.05] bg-white/[0.01] p-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-primary/20">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-20"></span>
                                        <PhoneCall className="h-4 w-4 text-accent-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium text-sm">Active Call</h3>
                                        <p className="text-zinc-500 text-xs">Emergency Plumbing Enquiry</p>
                                    </div>
                                </div>
                                <div className="font-mono text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">01:42</div>
                            </div>

                            {/* Audio Waveform - CSS animated for performance */}
                            <div className="h-12 flex items-center gap-[3px] my-6 relative z-10 mx-auto w-full max-w-[80%]">
                                {[...Array(16)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-full rounded-full bg-accent-primary/60 animate-waveform"
                                        style={{
                                            animationDelay: `${i * 0.08}s`,
                                            height: '10%',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Side Stats Component */}
                        <div className="col-span-1 flex flex-col gap-6">
                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-5 flex-1 hover:bg-white/[0.02] transition-colors">
                                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Calls Handled</p>
                                <div className="font-serif text-3xl text-white mb-1">142</div>
                                <div className="text-success text-xs flex items-center gap-1">+12% this week</div>
                            </div>
                            <div className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-5 flex-1 hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-primary/10 rounded-full blur-xl" />
                                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2 relative z-10">Jobs Booked</p>
                                <div className="font-serif text-3xl text-white mb-1 relative z-10">28</div>
                                <div className="text-zinc-400 text-xs relative z-10">Estimated £4,200 value</div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
