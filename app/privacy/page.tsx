import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
    return (
        <>
            <Navigation />
            <main className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl min-h-screen">
                <h1 className="font-serif text-5xl mb-8 text-foreground-primary">Privacy Policy</h1>
                <div className="space-y-6 text-foreground-secondary leading-relaxed">
                    <p className="text-sm">Last updated: February 2026</p>
                    <h2 className="text-2xl font-semibold text-foreground-primary mt-8 mb-4">1. Introduction</h2>
                    <p>At InvoxAI, we take your privacy seriously. This policy describes how we collect, use, and handle your personal and business data when you use our website or services.</p>
                    <h2 className="text-2xl font-semibold text-foreground-primary mt-8 mb-4">2. Information We Collect</h2>
                    <p>We collect information you provide directly to us when using our services, including contact details, business information, and communication preferences.</p>
                    <h2 className="text-2xl font-semibold text-foreground-primary mt-8 mb-4">3. How We Use Information</h2>
                    <p>We use the information we collect to provide, maintain, and improve our AI agent services, to handle your leads securely, and to communicate with you regarding your account.</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
