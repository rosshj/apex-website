"use client";

import { motion } from "motion/react";

const VERT_VALUES = ["24.6", "28.4", "32.1", "34.8"] as const;
const LABELS = [
  { text: "EXCELLENT", color: "text-green-300" },
  { text: "ATHLETIC", color: "text-orange-300" },
  { text: "ELITE", color: "text-orange-400" },
  { text: "WORLD CLASS", color: "text-rose-400" },
] as const;

interface PhoneMockupProps {
  /** Index into VERT_VALUES; defaults to ELITE (index 2). */
  variant?: 0 | 1 | 2 | 3;
}

export function PhoneMockup({ variant = 2 }: PhoneMockupProps) {
  const value = VERT_VALUES[variant];
  const label = LABELS[variant];

  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px] aspect-[9/19] select-none">
      {/* Outer device frame */}
      <div className="absolute inset-0 rounded-[44px] bg-zinc-900 ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Screen */}
        <div className="absolute inset-[6px] rounded-[38px] overflow-hidden bg-black">
          {/* Mesh gradient background mimicking the iOS app result phase */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 60% at 50% 0%, rgba(34, 197, 94, 0.18) 0%, transparent 60%)," +
                "radial-gradient(80% 60% at 100% 80%, rgba(255, 138, 43, 0.18) 0%, transparent 60%)," +
                "radial-gradient(80% 60% at 0% 100%, rgba(80, 110, 255, 0.10) 0%, transparent 60%)," +
                "linear-gradient(180deg, #060709 0%, #0a0d10 100%)",
            }}
          />

          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black" />

          {/* Top bar — profile pill */}
          <div className="absolute top-12 left-0 right-0 px-5 flex">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="apex-glass mx-auto inline-flex items-center gap-2 rounded-full pl-1 pr-3 py-1"
              style={{ display: "inline-flex" }}
            >
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-[10px] font-bold text-white">
                R
              </div>
              <span className="text-[11px] font-medium text-white/80">Ross</span>
            </motion.div>
          </div>

          {/* Vert value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[10px] font-bold tracking-[0.25em] text-white/45 uppercase"
            >
              Your Vertical
            </motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex items-baseline gap-1 tabular-nums"
            >
              <span className="text-[68px] font-bold text-white leading-none">
                {value}
              </span>
              <span className="text-[28px] font-semibold text-white/55">″</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-1 text-[11px] text-white/35"
            >
              {(parseFloat(value) * 2.54).toFixed(1)} cm
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`mt-6 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] ${label.color}`}
              style={{
                background: "rgba(255, 138, 43, 0.12)",
                border: "1px solid rgba(255, 138, 43, 0.25)",
              }}
            >
              {label.text}
            </motion.div>
          </div>

          {/* Bottom action button (glass) */}
          <div className="absolute bottom-6 left-5 right-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="grid grid-cols-2 gap-2"
            >
              <div className="h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[11px] font-medium text-white/60">
                Retry
              </div>
              <div className="h-10 rounded-full bg-white text-black flex items-center justify-center text-[11px] font-semibold">
                Save
              </div>
            </motion.div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}
