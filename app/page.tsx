import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

// Dynamically import below-the-fold sections for performance
const Problem = dynamic(() => import("@/components/sections/Problem").then(mod => mod.Problem));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then(mod => mod.HowItWorks));
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features));
const Freelance = dynamic(() => import("@/components/sections/Freelance").then(mod => mod.Freelance));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Freelance />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
