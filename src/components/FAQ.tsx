"use client";

import { FaqItem } from "./FaqItem";

const faqs = [
  {
    q: "How accurate is Apex?",
    a: "Accurate enough that the personal-best chase is real and progress over time is reliable. Apex isn't a lab-grade force plate, and we don't pretend it is. In our testing it lines up with industry-standard measurement methods to within about an inch.",
  },
  {
    q: "Do I need to film myself?",
    a: "No. That's the whole point. Most jump apps make you film a slow-mo video and tap the take-off and landing frames. Apex skips all of that. Just jump and get a number.",
  },
  {
    q: "Does Apex work for running jumps?",
    a: "Yes. Both standing (squat) and running (approach) jumps are supported. You can pick the default jump type per profile.",
  },
  {
    q: "Does Apex track my data?",
    a: "No accounts, no servers, no analytics. Every jump and profile lives on your device only. iCloud sync may come later, opt-in if it does.",
  },
  {
    q: "Will it work on my iPhone?",
    a: "Apex requires iOS 18 or later and an iPhone with an A12 chip or newer (iPhone XS or later, including all SE models from 2020 on).",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. Apex was built for iPhone first so it feels native to the platform.",
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
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              index={i}
              staggerStep={0.04}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
