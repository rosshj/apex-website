"use client";

import { motion } from "motion/react";

const faqs = [
  {
    q: "How accurate is Apex?",
    a: "Apex uses your iPhone's accelerometer plus a Kalman filter to estimate vertical jump height from flight time. In our testing it tracks within ±1 inch of camera-based methods like My Jump 2 — close enough that the personal-best chase is the same. It is not a lab-grade force plate.",
  },
  {
    q: "Do I need to film myself?",
    a: "No. That's the whole point. Most jump apps make you film a slow-mo video and tap the take-off and landing frames. Apex skips all of that — drop the phone in your pocket, jump, get a number.",
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
    a: "Apex requires iOS 26 or later. Any iPhone running iOS 26 has the sensors needed for accurate measurement.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. Apex was built for iPhone first to take advantage of the sensor stack and the system design language.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Frequently asked.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The short version: yes it works, no it doesn&apos;t track you, and
            yes it&apos;s real.
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/5">
          {faqs.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group py-5"
            >
              <summary className="flex cursor-pointer items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base sm:text-lg font-medium text-foreground pr-6">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="ml-4 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-transform group-open:rotate-45"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.5v9M1.5 6h9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
