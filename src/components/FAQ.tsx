"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    q: "How accurate is Apex?",
    a: "Apex uses camera-assisted motion tracking to estimate vertical jump height. It is built for personal training and progress tracking, not official combine testing or lab-grade measurement.",
  },
  {
    q: "Do I need to edit or review video?",
    a: "No. Apex uses the camera for spatial tracking, not manual slow-motion review. You do not need to tap takeoff and landing frames after every jump.",
  },
  {
    q: "Does Apex work for running jumps?",
    a: "Yes. Both standing (squat) and running (approach) jumps are supported. You can pick the default jump type per profile.",
  },
  {
    q: "Does Apex track my data?",
    a: "No accounts, no servers, no analytics. Every jump and profile lives on your device only. iCloud sync may come later — opt-in if it does.",
  },
  {
    q: "Will it work on my iPhone?",
    a: "Apex supports iOS 18 and later on ARKit-capable iPhones. On iOS 26, Apex uses newer Liquid Glass styling where supported.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. Apex was built for iPhone first to take advantage of the sensor stack and the system design language.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Frequently asked.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The short version: yes it works, no it doesn&apos;t track you, and
            yes it&apos;s real.
          </p>
        </div>

        <div className="divide-y divide-white/5">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="py-5"
            >
              <button
                type="button"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between text-left"
              >
                <span className="text-base sm:text-lg font-medium text-foreground pr-6">
                  {item.q}
                </span>
                <motion.span
                  aria-hidden
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="ml-4 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.5v9M1.5 6h9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
