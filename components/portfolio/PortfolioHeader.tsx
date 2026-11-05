"use client";

import { motion } from "motion/react";

export function PortfolioHeader() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-[1.05] max-w-3xl"
        >
          Work I've shipped,
          <br />
          <span className="text-neutral-400">and what I learned doing it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-neutral-400 leading-relaxed max-w-xl"
        >
          A working collection of full-stack products, 3D interfaces, and
          experiments. Some are live, some are still maturing — every one taught
          me something worth keeping.
        </motion.p>
      </div>
    </section>
  );
}
