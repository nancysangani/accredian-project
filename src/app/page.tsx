import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import LeadCapture from "@/components/LeadCapture";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Stats />
      <Testimonials />
      <LeadCapture />
      <CTA />
      <Footer />
    </main>
  );
}
