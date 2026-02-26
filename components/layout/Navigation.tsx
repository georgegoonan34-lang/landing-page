"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                        ? "bg-background-primary/80 backdrop-blur-md border-border-default/50 py-3"
                        : "bg-transparent border-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                            <PhoneCall className="h-4 w-4" />
                        </div>
                        <span className="font-serif text-2xl tracking-wide text-foreground-primary">
                            InvoxAI
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-foreground-secondary hover:text-foreground-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-px h-5 bg-border-default"></span>
                            <Link href="#contact" className="hidden lg:inline-flex">
                                <Button variant="tertiary" size="sm">
                                    Contact
                                </Button>
                            </Link>
                            <Link href="#contact">
                                <Button size="sm">
                                    Talk to Us
                                </Button>
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-foreground-primary p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background-primary pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xl font-medium text-foreground-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl font-medium text-foreground-primary"
                            >
                                Contact
                            </Link>
                            <div className="pt-6 mt-6 border-t border-border-default">
                                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full" size="lg">
                                        Talk to Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
