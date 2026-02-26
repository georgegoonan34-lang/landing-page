"use client";

import { Clock, MessageSquare, ShieldCheck, AlertTriangle, CalendarCheck, Smartphone, Check, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    return (
        <section className="py-32 bg-[#09090b] relative border-t border-white/[0.05]" id="features">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-primary top-0text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent-primary" />
                        Capabilities
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6 max-w-3xl">
                        Everything you need. <span className="text-zinc-500">Nothing you don't.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: 24/7 Call Answering (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className={`p-8 md:p-10 rounded-[2rem] bg-[#0c0c0e] border border-white/[0.05] group overflow-hidden relative col-span-1 md:col-span-2 flex flex-col`}
                    >
                        <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        {/* Dashboard Visual */}
                        <div className="h-60 mb-8 mt-2 relative rounded-xl border border-white/5 bg-[#09090b] overflow-hidden flex flex-col font-sans">

                            <div className="h-8 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.02]">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Call Log</div>
                                </div>
                                <div className="text-[10px] text-zinc-500 font-mono">Today</div>
                            </div>

                            <div className="flex-1 p-4 flex flex-col gap-3 relative max-w-sm w-full mx-auto justify-end">
                                <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between opacity-30">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <Check className="h-4 w-4 text-zinc-400" />
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-medium">07911 654321</div>
                                            <div className="text-zinc-500 text-xs">Handled by AI • General Enquiry</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-zinc-500 font-mono">1h ago</div>
                                </div>

                                <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between opacity-50">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <Check className="h-4 w-4 text-zinc-400" />
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-medium">07899 123456</div>
                                            <div className="text-zinc-500 text-xs">Handled by AI • Booked Quote</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-zinc-500 font-mono">14m ago</div>
                                </div>

                                {/* Incoming Call Animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="bg-[#121214] border border-accent-primary/20 rounded-xl p-3 flex items-center justify-between shadow-xl relative z-10"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-primary/20">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-20 duration-1000"></span>
                                            <Clock className="h-4 w-4 text-accent-primary" />
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-medium">07700 900123</div>
                                            <div className="text-accent-primary flex items-center gap-1.5 text-xs"><span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" /> AI Agent Active</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-zinc-500 font-mono animate-pulse">00:12</div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-colors">
                                <Clock className="w-5 h-5 text-zinc-400 group-hover:text-accent-primary transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white tracking-tight mb-3">24/7 Call Answering</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">Never miss another enquiry, day or night. Your agent logs every call into a clean dashboard and speaks natively.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Lead Qualification (Standard) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className={`p-8 md:p-10 rounded-[2rem] bg-[#0c0c0e] border border-white/[0.05] group overflow-hidden relative col-span-1 flex flex-col`}
                    >
                        {/* Dashboard Visual */}
                        <div className="h-60 mb-8 mt-2 relative rounded-xl border border-white/5 bg-[#09090b] overflow-hidden flex flex-col font-sans">
                            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider ml-2 font-mono">Lead Analysis</div>
                            </div>

                            <div className="flex-1 p-4 flex flex-col justify-center">
                                <div className="bg-[#121214] border border-white/10 rounded-xl p-4 shadow-xl">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="text-white text-sm font-medium">David Smith</div>
                                            <div className="text-zinc-500 text-xs mt-0.5">"Boiler is leaking"</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-white bg-white/5">
                                            98
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-[10px]">
                                            <span className="text-zinc-500">Intent Score</span>
                                            <span className="text-accent-primary font-mono bg-accent-primary/10 px-1 rounded">High</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "95%" }}
                                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                                className="h-full bg-accent-primary rounded-full relative"
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1 }}
                                            className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-[10px] border border-red-500/20"
                                        >
                                            Emergency
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.2 }}
                                            className="px-2 py-1 rounded bg-white/5 text-zinc-300 text-[10px] border border-white/10"
                                        >
                                            Boilers
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.4 }}
                                            className="px-2 py-1 rounded bg-accent-primary/10 text-accent-primary text-[10px] border border-accent-primary/20"
                                        >
                                            Verified
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-colors">
                                <ShieldCheck className="w-5 h-5 text-zinc-400 group-hover:text-accent-primary transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white tracking-tight mb-3">Lead Qualification</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">Instantly scores and tags inbound calls so you know exactly what the job entails.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: SMS Handling (Standard) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className={`p-8 md:p-10 rounded-[2rem] bg-[#0c0c0e] border border-white/[0.05] group overflow-hidden relative col-span-1 flex flex-col`}
                    >
                        {/* Dashboard Visual - iMessage Style */}
                        <div className="h-60 mb-8 mt-2 relative rounded-xl border border-white/5 bg-[#09090b] overflow-hidden flex flex-col font-sans">
                            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider ml-2 font-mono">SMS System</div>
                            </div>

                            <div className="flex-1 p-5 flex flex-col gap-3 justify-end text-[11px] bg-gradient-to-b from-transparent to-white/[0.02]">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/10 text-zinc-300 py-2.5 px-3.5 rounded-2xl rounded-bl-sm self-start max-w-[85%]"
                                >
                                    Can I get a quote for a boiler service?
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 }}
                                    className="bg-accent-primary text-black font-medium py-2.5 px-3.5 rounded-2xl rounded-br-sm self-end max-w-[85%] shadow-lg shadow-accent-primary/20"
                                >
                                    We charge £80. A tech can come by tomorrow at 2PM. Confirm?
                                </motion.div>
                                <div className="text-zinc-600 self-start ml-2 flex gap-1.5 bg-white/5 px-3 py-2 rounded-full">
                                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-colors">
                                <MessageSquare className="w-5 h-5 text-zinc-400 group-hover:text-accent-primary transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white tracking-tight mb-3">SMS Handling</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">Automate text message follow-ups, appointment reminders, and quick quotes seamlessly.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Emergency Triage (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className={`p-8 md:p-10 rounded-[2rem] bg-[#0c0c0e] border border-white/[0.05] group overflow-hidden relative col-span-1 md:col-span-2 flex flex-col`}
                    >
                        <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="h-60 mb-8 mt-2 relative rounded-xl border border-white/5 bg-[#09090b] overflow-hidden flex flex-col font-sans">
                            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider ml-2 font-mono">Urgent Alert Module</div>
                            </div>

                            <div className="flex-1 flex items-center justify-center p-4">
                                <div className="bg-[#121214] border border-white/10 rounded-xl p-5 w-72 shadow-2xl relative z-10 group-hover:border-red-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0 animate-pulse">
                                            <AlertTriangle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-medium">Emergency Detected</div>
                                            <div className="text-zinc-500 text-xs text-red-500/80">Burst Pipe • Call Active</div>
                                        </div>
                                    </div>
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2.5 }}
                                            className="h-full bg-red-500 rounded-full"
                                        />
                                    </div>
                                    <div className="text-right text-[10px] text-zinc-500 mt-2.5 uppercase tracking-wider font-mono">Bypassing DND Mode...</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-colors">
                                <AlertTriangle className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white tracking-tight mb-3">Emergency Triage</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">Identifies highly urgent jobs (like active leaks) and alerts you immediately, bypassing silent mode.</p>
                        </div>
                    </motion.div>

                    {/* Card 5: Job Booking (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className={`p-8 md:p-10 rounded-[2rem] bg-[#0c0c0e] border border-white/[0.05] group overflow-hidden relative col-span-1 md:col-span-2 flex flex-col`}
                    >
                        <div className="h-60 mb-8 mt-2 relative rounded-xl border border-white/5 bg-[#09090b] overflow-hidden flex flex-col font-sans">
                            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider ml-2 font-mono">Calendar Integration</div>
                            </div>

                            <div className="flex-1 flex items-center justify-center p-6">
                                <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
                                    {[...Array(4)].map((_, colIndex) => (
                                        <div key={colIndex} className="space-y-2.5">
                                            <div className="text-[11px] text-zinc-500 font-mono text-center mb-2">
                                                {["Mon", "Tue", "Wed", "Thu"][colIndex]}
                                            </div>
                                            {[...Array(3)].map((_, rowIndex) => {
                                                const isBooked = colIndex === 2 && rowIndex === 1;
                                                return (
                                                    <div
                                                        key={rowIndex}
                                                        className={`h-10 rounded-lg border ${isBooked ? 'bg-accent-primary/20 border-accent-primary/50 flex items-center justify-center' : 'bg-white/5 border-white/5'}`}
                                                    >
                                                        {isBooked && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                whileInView={{ scale: 1 }}
                                                                transition={{ type: "spring", delay: 0.6 }}
                                                                className="flex items-center gap-1.5"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-accent-primary" />
                                                                <span className="text-[9px] font-mono text-accent-primary hidden sm:block">14:00</span>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-colors">
                                <CalendarCheck className="w-5 h-5 text-zinc-400 group-hover:text-accent-primary transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white tracking-tight mb-3">Calendar Job Booking</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">Captures customer details, confirms availability, and schedules directly into your Google or Apple Calendar.</p>
                        </div>
                    </motion.div>

                    {/* Card 6: Direct Phone Link (Standard) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className={`p-8 md:p-10 rounded-[2rem] bg-[#0c0c0e] border border-white/[0.05] group overflow-hidden relative col-span-1 flex flex-col`}
                    >
                        <div className="h-60 mb-8 mt-2 relative rounded-xl border border-white/5 bg-[#09090b] overflow-hidden flex flex-col font-sans">
                            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02] shrink-0">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider ml-2 font-mono">Call Routing</div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center p-4">
                                <div className="bg-[#121214] border border-white/10 rounded-xl p-4 w-full max-w-[240px] shadow-2xl text-[11px] flex flex-col gap-3 relative z-10 group-hover:border-accent-primary/30 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium">Call Forwarding</span>
                                        <div className="w-8 h-4 rounded-full bg-accent-primary flex items-center p-0.5 justify-end shadow-[0_0_10px_rgba(200,149,108,0.3)]">
                                            <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/5 w-full my-1" />

                                    <div className="flex items-center justify-between">
                                        <span className="text-zinc-500">From:</span>
                                        <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded">07700 900321</span>
                                    </div>

                                    <div className="flex items-center justify-center py-2 relative h-10 w-full">
                                        {/* Animated Path */}
                                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-white/10 via-accent-primary/50 to-white/10" />
                                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px overflow-hidden">
                                            <div
                                                className="w-full h-8 bg-gradient-to-b from-transparent via-accent-primary to-transparent"
                                                style={{ animation: 'call-routing-pulse 1.5s linear infinite' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-zinc-500">To:</span>
                                        <span className="text-accent-primary flex items-center gap-1.5 font-mono bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded">
                                            <Bot className="w-3 h-3" /> InvoxAI Agent
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-colors">
                                <Smartphone className="w-5 h-5 text-zinc-400 group-hover:text-accent-primary transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white tracking-tight mb-3">Use Existing Number</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">No new lines needed. We link directly to your existing business phone number effortlessly.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
