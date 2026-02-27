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
  title: "InvoxAI — AI Phone Answering for Plumbers, Electricians & Tradesmen",
  description:
    "Never miss a job again. InvoxAI answers your calls 24/7 with AI voice agents built for UK tradesmen — qualifies leads, books jobs, and handles emergencies while you work.",
  metadataBase: new URL("https://invoxai.uk"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI phone answering",
    "AI receptionist for tradesmen",
    "AI voice agent UK",
    "plumber call answering",
    "electrician call answering",
    "tradesman virtual receptionist",
    "24/7 call answering service",
    "AI call handling",
    "InvoxAI",
    "Invox AI",
  ],
  openGraph: {
    title: "InvoxAI — AI Phone Answering for UK Tradesmen",
    description:
      "AI voice agents that answer calls 24/7, qualify enquiries, and book jobs for plumbers, electricians, builders and more. Never miss another customer again.",
    url: "https://invoxai.uk",
    siteName: "InvoxAI",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    title: "InvoxAI — AI Phone Answering for UK Tradesmen",
    description:
      "AI voice agents that answer calls 24/7, qualify enquiries, and book jobs. Built for UK tradesmen.",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured data is a static constant with no user input — safe to serialize directly
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "InvoxAI",
  url: "https://invoxai.uk",
  applicationCategory: "BusinessApplication",
  description:
    "AI-powered phone answering service for UK tradesmen. Answers calls 24/7, qualifies leads, and books jobs automatically.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "GBP",
  },
  operatingSystem: "Web",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-background-primary text-foreground-primary min-h-screen selection:bg-accent-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
