"use client";

import { Workflow, Bot, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const SERVICES = [
    {
        icon: Bot,
        title: "Agent Builds",
        description: "Tailored AI voice agents."
    },
    {
        icon: Workflow,
        title: "Workflow Ops",
        description: "Streamlined quoting systems."
    },
    {
        icon: Database,
        title: "CRM Sync",
        description: "Auto-logged call records."
    },
    {
        icon: Zap,
        title: "Automation",
        description: "Eliminate manual data entry."
    }
];

export function Freelance() {
    return (
        <section className="py-32 bg-[#09090b] relative border-t border-white/[0.05] overflow-hidden" id="services">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 top-0text-sm font-medium mb-8">
                            Beyond Answering
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6">
                            Ready to modernise <br className="hidden lg:block" /> your business?
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-sans">
                            We offer bespoke AI integration for trade businesses looking to join the AI revolution. From eliminating admin work to automating your invoices and CRM sync.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all bg-white text-black hover:bg-zinc-200 h-12 px-8 w-full sm:w-auto overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Discuss custom integration
                            </span>
                        </Link>
                    </motion.div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 w-full mt-8 lg:mt-0">
                        {SERVICES.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.15)" }}
                                className="bg-white/[0.01] border border-white/[0.05] p-6 lg:p-8 rounded-[1.5rem] transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#0c0c0e] flex items-center justify-center border border-white/[0.08] mb-6">
                                    <service.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-sans text-xl font-medium text-white mb-2">{service.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
