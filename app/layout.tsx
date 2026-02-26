import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvoxAI — 24/7 AI Voice Agents for UK Tradesmen",
  description: "AI-powered voice agents that answer your calls 24/7, qualify enquiries, and book jobs. Never miss another emergency call or customer enquiry again.",
  metadataBase: new URL("https://invoxai.uk"),
  openGraph: {
    title: "InvoxAI — 24/7 AI Voice Agents for UK Tradesmen",
    description: "Never miss another emergency call or customer enquiry again. InvoxAI provides AI voice agents that handle calls, texts, and bookings 24/7.",
    url: "https://invoxai.uk",
    siteName: "InvoxAI",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    title: "InvoxAI",
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-background-primary text-foreground-primary min-h-screen selection:bg-accent-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
