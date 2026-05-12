"use client";

import { motion } from "motion/react";
import { AppStoreButton } from "./AppStoreButton";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center apex-card"
        >
          {/* Big radial accent */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 0%, rgba(255, 138, 43, 0.25) 0%, transparent 60%)," +
                "radial-gradient(60% 50% at 80% 100%, rgba(255, 209, 102, 0.18) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 apex-grain pointer-events-none"
          />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Find out how high
              <br />
              you can really jump.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Apex is built for iPhone. Free to try when it launches.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <AppStoreButton />
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-foreground hover:bg-white/[0.08] transition-all duration-200 hover:scale-[1.02] min-h-[48px]"
              >
                Read the FAQ
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
