import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
    return (
        <>
            <Navigation />
            <main className="pt-32 pb-24 container mx-auto px-6 md:px-12 max-w-4xl min-h-screen">
                <h1 className="font-serif text-5xl mb-8 text-foreground-primary">Terms of Service</h1>
                <div className="space-y-6 text-foreground-secondary leading-relaxed">
                    <p className="text-sm">Last updated: February 2026</p>
                    <h2 className="text-2xl font-semibold text-foreground-primary mt-8 mb-4">1. Agreement to Terms</h2>
                    <p>By using InvoxAI's services, you agree to be bound by these Terms and Conditions. These terms govern your use of our AI voice and text agent platform.</p>
                    <h2 className="text-2xl font-semibold text-foreground-primary mt-8 mb-4">2. Service Provision</h2>
                    <p>We provide AI voice and text agent services as described on our website. We reserve the right to modify or discontinue services with reasonable notice to our active clients.</p>
                    <h2 className="text-2xl font-semibold text-foreground-primary mt-8 mb-4">3. Usage and Billing</h2>
                    <p>Our core services are billed based on a fixed monthly rate plus usage pricing per minute or message. You agree to pay all charges associated with your account as per your selected plan.</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
