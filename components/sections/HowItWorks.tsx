"use client";

import { Settings, PhoneIncoming, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
    {
        num: "01",
        icon: Settings,
        title: "We learn your business",
        description: "We configure the voice agent specifically for your trade, learning your services, pricing guidelines, and coverage area."
    },
    {
        num: "02",
        icon: PhoneIncoming,
        title: "Calls get handled 24/7",
        description: "Your new agent answers every call instantly, responding with a natural AI voice to qualify and capture the enquiry."
    },
    {
        num: "03",
        icon: Briefcase,
        title: "You get the jobs",
        description: "Qualified leads are delivered to your phone with full details (name, address, issue) ready for you to quote."
    }
];

export function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

    return (
        <section ref={ref} className="py-32 bg-[#09090b] relative" id="how-it-works">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20 md:mb-32"
                >
                    <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6">
                        How it works.
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                        A simple, set-and-forget system that works entirely in the background, without requiring you to download any new apps.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative">

                    {/* Animated SVG Connecting Line */}
                    <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-[2px] -z-10">
                        <svg
                            className="w-full h-full absolute"
                            viewBox="0 0 100 1"
                            preserveAspectRatio="none"
                            style={{ overflow: "visible" }}
                        >
                            <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="2 4" />
                            <motion.line
                                x1="0" y1="0.5" x2="100" y2="0.5"
                                stroke="#C8956C"
                                strokeWidth="2"
                                style={{ pathLength }}
                            />
                        </svg>
                    </div>

                    {STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="text-accent-primary font-mono text-xs font-bold tracking-widest mb-6 px-3 py-1 rounded bg-accent-primary/10 border border-accent-primary/20">
                                STEP {step.num}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
                                className="w-24 h-24 rounded-3xl bg-[#0c0c0e] border border-white/[0.08] flex items-center justify-center mb-8 shadow-2xl relative z-10 transition-colors duration-500 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                                <step.icon className="w-10 h-10 text-white group-hover:text-accent-primary transition-colors duration-500 relative z-10" />
                            </motion.div>

                            <h3 className="font-sans text-2xl font-medium text-white mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-zinc-400 text-base leading-relaxed max-w-[16rem]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
