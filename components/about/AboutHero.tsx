"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function AboutHero() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      {/* <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.4fr,1fr] gap-12 lg:gap-20 items-center"> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6"
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-[1.05]"
          >
            Engineer by trade,
            <br />
            <span className="text-neutral-400">craftsman by habit.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-4 text-neutral-300 leading-relaxed max-w-lg"
          >
            <p>
              I'm <strong className="text-white">Muhammad Azeem</strong> a
              full-stack developer who enjoys turning ideas into functional,
              well-crafted digital experiences.
            </p>
            <p>
              I work primarily with React, Next.js, and Node.js, building
              everything from responsive interfaces to the systems that power
              them. I care about writing maintainable code, understanding the
              problem before solving it, and making sure the final product feels
              just as good to use as it does to build.
            </p>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            {/* Replace with your real photo — /public/azeem.jpg */}
            <Image
              src="/icons/mazeem-hero.webp"
              alt="Muhammad Azeem"
              fill
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay to blend edges */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
          </div>
          {/* Decorative accent */}
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-violet-500/30 to-transparent blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}
