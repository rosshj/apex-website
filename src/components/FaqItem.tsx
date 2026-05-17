"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  index?: number;
  staggerStep?: number;
  defaultOpen?: boolean;
}

export function FaqItem({
  question,
  answer,
  index = 0,
  staggerStep = 0.04,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const reactId = useId();
  const panelId = `faq-panel-${reactId}`;
  const buttonId = `faq-button-${reactId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * staggerStep }}
      className="group py-5"
    >
      <button
        type="button"
        id={buttonId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between text-left"
      >
        <span className="text-base sm:text-lg font-medium text-foreground pr-6">
          {question}
        </span>
        <span
          aria-hidden
          className={`ml-4 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
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
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.22, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
