"use client";

import { PhoneOff, Moon, FilterX, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const PROBLEMS = [
    {
        icon: PhoneOff,
        title: "Missed calls during jobs",
        description: "You're under a sink or on a roof. You can't answer. By the time you call back, they've found someone else."
    },
    {
        icon: Moon,
        title: "Lost emergency work",
        description: "Emergency calls happen at 2am. If you're asleep and miss the call, you lose the highest-margin jobs."
    },
    {
        icon: FilterX,
        title: "Time-wasting enquiries",
        description: "Spending 15 minutes on the phone just to realise the customer wants a service you don't even offer."
    },
    {
        icon: ClipboardList,
        title: "Scattered lead details",
        description: "Taking down addresses on scraps of paper or WhatsApp messages, leading to lost info and missed follow-ups."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
};

export function Problem() {
    return (
        <section className="py-32 bg-[#09090b] relative border-t border-white/[0.05]" id="problem">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white leading-[1.05] mb-6">
                        The cost of a missed call.
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-sans">
                        For tradesmen, your phone is your lifeline. But answering every call while trying to actually do the work is impossible.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {PROBLEMS.map((problem, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}
                            className="bg-white/[0.01] border border-white/[0.05] p-8 md:p-10 rounded-[2rem] transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute -inset-px bg-gradient-to-br from-accent-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10 blur-md" />

                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/[0.05] mb-8 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-colors">
                                <problem.icon className="w-6 h-6 text-zinc-400 group-hover:text-accent-primary transition-colors" />
                            </div>
                            <h3 className="font-sans text-2xl font-medium text-white mb-4 tracking-tight">{problem.title}</h3>
                            <p className="text-zinc-400 text-base leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
