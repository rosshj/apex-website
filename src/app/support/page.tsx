import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/site";
import { SupportContent } from "./SupportContent";

export const metadata: Metadata = {
  title: "Support",
  description: `Help, FAQ, and contact info for ${siteConfig.name}. Common questions, troubleshooting, and how to reach us.`,
  alternates: {
    canonical: `${siteConfig.url}/support`,
  },
};

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-8">
          <SupportContent />
        </article>
      </main>
      <Footer />
    </>
  );
}
