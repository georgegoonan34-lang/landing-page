import Link from "next/link";
import { PhoneCall } from "lucide-react";

const FOOTER_LINKS = {
    Service: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
    ],
    Company: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-background-primary pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="col-span-1 md:col-span-1 lg:border-r border-border-subtle/50 pr-8">
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                                <PhoneCall className="h-4 w-4" />
                            </div>
                            <span className="font-serif text-2xl tracking-wide text-foreground-primary">
                                InvoxAI
                            </span>
                        </Link>
                        <p className="text-foreground-secondary text-sm max-w-xs leading-relaxed">
                            24/7 AI Voice and SMS agents built specifically for UK tradesmen.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-foreground-primary mb-4 text-sm">Service</h4>
                            <ul className="space-y-3 text-sm">
                                {FOOTER_LINKS.Service.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-foreground-secondary hover:text-accent-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground-primary mb-4 text-sm">Company</h4>
                            <ul className="space-y-3 text-sm">
                                {FOOTER_LINKS.Company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-foreground-secondary hover:text-accent-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground-primary mb-4 text-sm">Legal</h4>
                            <ul className="space-y-3 text-sm">
                                {FOOTER_LINKS.Legal.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-foreground-secondary hover:text-accent-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-foreground-muted">
                        &copy; {new Date().getFullYear()} InvoxAI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-foreground-muted">
                        <span>Made in the UK</span>
                        <span className="w-1 h-1 rounded-full bg-border-emphasis"></span>
                        <span>Built for tradesmen</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
