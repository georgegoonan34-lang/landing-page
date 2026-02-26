"use client";

import { motion } from "framer-motion";
import { Mic, Phone } from "lucide-react";

export function HeroAnimation() {
    return (
        <div className="relative w-full max-w-sm mx-auto aspect-[3/4] flex items-center justify-center">
            {/* Background radial glow */}
            <div className="absolute inset-0 bg-accent-primary/10 rounded-full blur-3xl scale-75" />

            {/* Phone Mockup Interface */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-64 h-[28rem] rounded-[2.5rem] bg-background-secondary border border-border-default shadow-2xl p-4 overflow-hidden flex flex-col items-center justify-center ring-1 ring-border-subtle"
            >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-background-primary rounded-b-xl" />

                <div className="flex flex-col items-center justify-center flex-1 w-full pt-8">
                    <motion.div
                        animate={{ boxShadow: ["0 0 0 0 rgba(200, 149, 108, 0)", "0 0 0 15px rgba(200, 149, 108, 0.1)", "0 0 0 0 rgba(200, 149, 108, 0)"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 rounded-full bg-background-elevated flex items-center justify-center border border-accent-primary/30 mb-6 relative"
                    >
                        <Mic className="w-8 h-8 text-accent-primary" />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background-elevated" />
                    </motion.div>

                    <h3 className="font-sans text-xl font-medium text-foreground-primary mb-1 tracking-tight">AI Agent Active</h3>
                    <p className="text-foreground-secondary text-sm mb-2">Handling Enquiries</p>
                    <p className="text-accent-primary text-xs font-mono mb-12">00:24</p>

                    {/* Voice Visualizer */}
                    <div className="flex items-center justify-center gap-1.5 mb-12 h-16 w-full">
                        {[0.8, 1.2, 0.5, 1.5, 0.9, 1.6, 1.1, 0.6].map((multiplier, i) => (
                            <motion.div
                                key={i}
                                className="w-1.5 rounded-full bg-accent-primary"
                                animate={{
                                    height: ["20%", `${multiplier * 60}%`, "20%"],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom indicators */}
                <div className="w-full flex justify-between items-center px-6 pb-4">
                    <div className="flex gap-1.5">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-border-emphasis" />
                        ))}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-background-elevated flex items-center justify-center border border-border-default">
                        <Phone className="w-4 h-4 text-destructive fill-destructive rotate-[135deg]" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
