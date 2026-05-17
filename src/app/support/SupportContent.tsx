"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/site";
import { FaqItem } from "@/components/FaqItem";
import { SupportContactForm } from "@/components/SupportContactForm";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I measure my first jump?",
    a: (
      <>
        <p>
          Hold your iPhone in your hand and stretch your arm as high as you can,
          like you&apos;re reaching for the ceiling. Tap{" "}
          <strong>Set Baseline</strong> and keep the phone still while it
          calibrates (about 2 seconds). When it says{" "}
          <strong>Ready — Jump!</strong>, jump as high as you can. Tap{" "}
          <strong>Stop</strong> after you land.
        </p>
        <p className="mt-3">
          Apex measures the distance between your standing reach (the baseline)
          and the highest point you reach at the top of your jump. Same as a
          Vertec.
        </p>
      </>
    ),
  },
  {
    q: "Why does Apex need camera access?",
    a: "Apex uses your iPhone's camera to measure your jump accurately. The camera feed is never recorded, never saved, and never leaves your device. It's used only while you're taking a measurement.",
  },
  {
    q: "Calibration keeps failing. What do I do?",
    a: (
      <>
        <p>Tracking failures are almost always one of three things:</p>
        <ul className="list-disc space-y-2 pl-6 mt-3">
          <li>
            <strong>The room is too dark.</strong> Apex needs a well-lit
            environment with visible texture. Move somewhere brighter.
          </li>
          <li>
            <strong>The camera is pointed at a blank wall.</strong> Aim it so
            the bottom of the frame catches the floor or some textured surface.
          </li>
          <li>
            <strong>Your hand is covering the lens.</strong> Hold the phone by
            the edges so all rear cameras stay clear.
          </li>
        </ul>
        <p className="mt-3">
          If it still fails, force-quit Apex and try again. Occasionally the
          tracking session needs a clean restart.
        </p>
      </>
    ),
  },
  {
    q: "How accurate is the measurement?",
    a: "Accurate enough that the personal-best chase is real and progress over time stays reliable. In our testing Apex lines up with industry-standard measurement methods to within about an inch. It is not a lab-grade force plate, and we don't claim it is. Tracking quality varies with lighting, your camera's clarity, and how cleanly you hold the phone.",
  },
  {
    q: "What is the baseline and why does it matter?",
    a: "The baseline is your standing reach with your arm fully extended, captured during the calibration step. Apex measures jump height as the distance above this baseline, exactly like a Vertec. If your baseline is off (you didn't reach high enough during calibration), every measurement will be off. Use Settings → Reset Baseline if you want to recapture it.",
  },
  {
    q: "What iPhone do I need?",
    a: "Apex requires iOS 18 or later and an iPhone with an A12 chip or newer (iPhone XS, XR, or later, including all SE models from 2020 onward). Older devices don't have enough horsepower to measure jumps accurately.",
  },
  {
    q: "Where is my data stored?",
    a: (
      <>
        <p>
          Everything (your jumps, profiles, dunk progress, photos) lives on
          your device only. There are no accounts. There is no server. Nothing
          is sent to {siteConfig.developer} or anyone else.
        </p>
        <p className="mt-3">
          This also means: if you delete the app, your data is gone. If you get
          a new iPhone, your data does not automatically migrate yet (iCloud
          sync is on the roadmap as an opt-in).
        </p>
      </>
    ),
  },
  {
    q: "How do I delete all my data?",
    a: "Delete the profile from Settings → Profiles → swipe-to-delete (this removes the profile and every jump linked to it). To wipe everything at once, uninstall the app. iOS removes all local data with the app.",
  },
  {
    q: "Can I add multiple jumpers?",
    a: "Yes. Tap your profile picture at the top of the Jump tab, then choose Add Profile. Each profile keeps its own jumps, personal best, and dunk progress. Great for tracking siblings, training partners, or your team.",
  },
  {
    q: "What's the difference between a running and standing jump?",
    a: "Running (approach) jumps let you take steps before launching, typically a few inches higher. Standing (squat) jumps start from still, no steps. You can set the default jump type per profile in Settings → Jump Type, and it's tagged on every recorded jump so you can compare like-for-like.",
  },
  {
    q: "How do I share a jump?",
    a: "After a measurement, tap the Share button. Apex generates a 9:16 portrait card with your name, vertical, and a quick visual, then opens the standard iOS share sheet. Send it via iMessage, post to Instagram or TikTok, save to Photos, whatever. The share auto-saves the jump so you never lose a result.",
  },
  {
    q: "Is Apex free?",
    a: "Apex is a paid app: a one-time purchase, no subscription, no ads. Once you buy it, every feature is yours forever, including all future updates.",
  },
  {
    q: "I found a bug or have a feature request.",
    a: (
      <>
        Use the form at the bottom of this page. Please include your iPhone
        model and iOS version (Settings → General → About) so we can
        reproduce. We read every message.
      </>
    ),
  },
];

export function SupportContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
          Help &amp; Support
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
          How can we help?
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Common questions and quick fixes. If something isn&apos;t here, email
          us. We read every message.
        </p>
      </motion.div>

      <section className="mt-12 divide-y divide-white/5">
        {faqs.map((item, i) => (
          <FaqItem
            key={item.q}
            question={item.q}
            answer={item.a}
            index={i}
            staggerStep={0.03}
          />
        ))}
      </section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="apex-card mt-16 rounded-3xl p-8 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Still stuck?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Send us a message. Include your iPhone model, iOS version, and a
          short description of what you were doing when the issue happened. We
          typically reply within a couple of business days.
        </p>
        <div className="mt-8">
          <SupportContactForm />
        </div>
      </motion.section>
    </>
  );
}
