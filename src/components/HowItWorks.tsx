"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Set your baseline.",
    description:
      "Reach as high as you can while standing flat-footed. Apex captures your maximum overhead reach.",
  },
  {
    number: "02",
    title: "Drop the phone in your pocket.",
    description:
      "Or hold it. Either way, when Apex says Ready — jump.",
  },
  {
    number: "03",
    title: "Get your number.",
    description:
      "Sensors and a Kalman filter compute your jump height the moment you land. Save it. Share it. Beat it.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Three steps. Twenty seconds.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No accounts. No tutorials. Apex was designed so the first time you
            open it, you measure your vert before the lock screen times out.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative apex-card rounded-3xl p-6 sm:p-7"
            >
              <div className="text-sm font-mono tracking-wider text-orange-400/80">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
