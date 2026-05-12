import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureGrid } from "@/components/FeatureGrid";
import { DunkProgressShowcase } from "@/components/DunkProgressShowcase";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <FeatureGrid />
        <DunkProgressShowcase />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
