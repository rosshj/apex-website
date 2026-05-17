"use client";

import { motion } from "motion/react";
import { AppStoreButton } from "./AppStoreButton";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 apex-hero-glow pointer-events-none" />
      <div className="apex-mesh-bg" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Coming soon to iPhone
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
            >
              Measure your vert.
              <br />
              <span className="bg-gradient-to-br from-orange-300 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                Track your dunk.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed"
            >
              Apex turns your iPhone into a vertical jump tester. Set your
              reach, jump, and watch the gap to a dunk shrink.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3"
            >
              <AppStoreButton />
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-foreground hover:bg-white/[0.08] transition-all duration-200 hover:scale-[1.02] min-h-[48px]"
              >
                See how it works
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-xs text-muted-foreground/70"
            >
              <span>iPhone only</span>
              <span aria-hidden>·</span>
              <span>iOS 18+</span>
              <span aria-hidden>·</span>
              <span>No account required</span>
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <PhoneMockup variant={2} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
