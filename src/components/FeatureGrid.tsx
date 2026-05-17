"use client";

import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const features: Feature[] = [
  {
    title: "Jump. Get your number.",
    description:
      "Skip the slow-mo footage and manual frame tapping. Apex gives you a real vertical the moment you land.",
    icon: <PocketIcon />,
    accent: "from-orange-400/30 to-rose-500/20",
  },
  {
    title: "See your dunk progress.",
    description:
      "Add your height once and Apex shows your peak reach against the rim. Watch the gap shrink, jump after jump.",
    icon: <BasketballIcon />,
    accent: "from-amber-300/30 to-orange-500/20",
  },
  {
    title: "Every jump tracked.",
    description:
      "Personal bests, history, and a clean trend line. See your progress over weeks, not just today.",
    icon: <ChartIcon />,
    accent: "from-blue-400/30 to-cyan-300/20",
  },
  {
    title: "Train with anyone.",
    description:
      "Multiple profiles per device: your friends, your team, your kid. No accounts, no sign-up.",
    icon: <PeopleIcon />,
    accent: "from-violet-400/30 to-pink-400/20",
  },
  {
    title: "Built for modern iPhone.",
    description:
      "Runs on iOS 18 and newer, with Liquid Glass polish on iOS 26 where supported. Apex feels native because it is.",
    icon: <SparkleIcon />,
    accent: "from-emerald-400/30 to-cyan-300/20",
  },
  {
    title: "Private by design.",
    description:
      "Your jumps stay on your device. No accounts, no tracking, no servers holding your data.",
    icon: <LockIcon />,
    accent: "from-zinc-400/20 to-zinc-500/10",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Built for the way you actually train.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Six things that make Apex feel less like an app and more like a
            permanent fixture in your gym bag.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative apex-card rounded-3xl p-6 overflow-hidden hover:-translate-y-0.5 transition-transform duration-300"
            >
              {/* Accent glow */}
              <div
                aria-hidden
                className={`absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-60 blur-3xl bg-gradient-to-br ${feature.accent}`}
              />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Icons ----------

function PocketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v3c0 4.14-3.36 7.5-7.5 7.5S2.5 11.64 2.5 7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M10 8v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BasketballIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.5 10h15M10 2.5v15M4.5 4.5c2.5 2.5 8.5 8.5 11 11M15.5 4.5c-2.5 2.5-8.5 8.5-11 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 15.5l4-5 3 2 7-8.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="13.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2 16c0-2.5 2.24-4 5-4s5 1.5 5 4M11.5 15.5c.25-1.8 1.9-3 4-3 1.4 0 2.5.8 3 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 2.5l1.6 4.4 4.4 1.6-4.4 1.6L10 14.5 8.4 10.1 4 8.5l4.4-1.6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M16 14.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" fill="currentColor" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 9V6.5a3.5 3.5 0 117 0V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
