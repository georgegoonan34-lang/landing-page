"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-32 bg-[#09090b] relative border-t border-white/[0.05] overflow-hidden" id="about">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,149,108,0.03),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-16 h-1 bg-accent-primary/50 mx-auto mb-12 rounded-full" />

                    <h2 className="font-serif text-5xl md:text-6xl lg:text-[5rem] tracking-tight text-white leading-[1.05] mb-12">
                        Built for the trades. <br /> <span className="text-zinc-600">Not Silicon Valley.</span>
                    </h2>

                    <div className="space-y-8 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-sans">
                        <p>
                            We noticed a pattern working with electricians, plumbers, and builders across the UK: the people who do the most essential work have the worst tools for managing it.
                        </p>
                        <p>
                            You're expected to be on the tools all day, then act as a receptionist, estimator, and admin assistant all evening. If you miss a call while working, it costs you money.
                        </p>
                        <p className="text-white font-medium">
                            We built InvoxAI to solve a very specific problem for practical businesses: making sure you never miss another job without having to hire an expensive call centre.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
