"use client";

import { motion } from "motion/react";

/**
 * Marketing replica of the in-app DunkProgressCard. Standing reach + best
 * vert plotted against a clean-dunk target (10'6"). The numbers below are
 * an example for a fictional 6'1" jumper with a 28.4" vert.
 */
export function DunkProgressShowcase() {
  // Range start = 8'0" = 96", range end = 10'6" = 126"
  const RANGE_START = 96;
  const RANGE_END = 126;
  const RIM_INCHES = 120;
  const REACH_INCHES = 73 * 1.33 + 28.4; // ≈ 125.5

  const total = RANGE_END - RANGE_START;
  const progress = Math.max(0, Math.min(1, (REACH_INCHES - RANGE_START) / total));
  const rimProgress = (RIM_INCHES - RANGE_START) / total;
  const gap = Math.max(0, RANGE_END - REACH_INCHES); // inches from clean dunk

  return (
    <section id="dunk" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
            >
              How close are you to a dunk?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-muted-foreground leading-relaxed"
            >
              Apex combines your standing reach with your best vert and plots it
              against a regulation 10&apos; rim. Every time you set a new PR,
              the gap shrinks. It&apos;s the most addictive progress bar in
              basketball.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-3 text-sm text-muted-foreground"
            >
              <li className="flex items-start gap-3">
                <Dot className="text-orange-400" />
                Estimated standing reach from your height (1.33&times; ratio).
              </li>
              <li className="flex items-start gap-3">
                <Dot className="text-orange-400" />
                Real-time updates after every saved jump.
              </li>
              <li className="flex items-start gap-3">
                <Dot className="text-orange-400" />
                Share your progress card with one tap.
              </li>
            </motion.ul>
          </div>

          {/* Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative apex-card rounded-3xl p-6 sm:p-8 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-20 h-64 w-64 rounded-full opacity-50 blur-3xl bg-gradient-to-br from-orange-400/40 to-amber-500/20"
              />

              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                  <BasketballGlyph />
                  Dunk Progress
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl font-bold tabular-nums text-foreground"
                  >
                    {gap.toFixed(1)}
                  </motion.span>
                  <span className="text-2xl text-muted-foreground font-medium">in</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  from a clean dunk
                </p>

                {/* Scale bar */}
                <div className="mt-8">
                  <div className="relative h-2 rounded-full bg-white/[0.06] overflow-visible">
                    {/* Filled portion */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress * 100}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-500/80 to-orange-400"
                    />

                    {/* Rim tick */}
                    <div
                      className="absolute -top-1 h-4 w-px bg-white/30"
                      style={{ left: `${rimProgress * 100}%` }}
                    />

                    {/* Reach dot */}
                    <motion.div
                      initial={{ left: 0, opacity: 0 }}
                      whileInView={{ left: `calc(${progress * 100}% - 9px)`, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute -top-1.5 h-5 w-5 rounded-full bg-card border-2 border-orange-400 shadow-[0_0_12px_rgba(255,138,43,0.5)]"
                    />
                  </div>

                  <div className="mt-2 flex justify-between text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                    <span>8&apos;0&quot;</span>
                    <span style={{ marginLeft: `${rimProgress * 100 - 12}%` }}>RIM</span>
                    <span className="text-orange-400">DUNK</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                  <Stat label="Your reach" value={`${formatFeet(REACH_INCHES)}`} align="left" />
                  <Stat label="Rim" value={`${formatFeet(RIM_INCHES)}`} align="center" />
                  <Stat label="Dunk" value={`${formatFeet(RANGE_END)}`} align="right" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  align,
}: {
  label: string;
  value: string;
  align: "left" | "center" | "right";
}) {
  const alignment =
    align === "left" ? "items-start" : align === "right" ? "items-end" : "items-center";
  return (
    <div className={`flex flex-col ${alignment}`}>
      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
        {label}
      </span>
      <span className="mt-1 text-base font-semibold tabular-nums text-foreground">
        {value}
      </span>
    </div>
  );
}

function formatFeet(inches: number) {
  const totalTenths = Math.round(inches * 10);
  const totalWholeInches = Math.floor(totalTenths / 10);
  const tenths = totalTenths % 10;
  const feet = Math.floor(totalWholeInches / 12);
  const remInches = totalWholeInches - feet * 12;
  if (tenths === 0) return `${feet}'${remInches}"`;
  return `${feet}'${remInches}.${tenths}"`;
}

function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`mt-2 h-1.5 w-1.5 rounded-full bg-current ${className ?? ""}`}
    />
  );
}

function BasketballGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M1.6 7h10.8M7 1.6v10.8M3.2 3.2c1.7 1.7 6 6 7.6 7.6M10.8 3.2c-1.7 1.7-6 6-7.6 7.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
