"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import Link from "next/link";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-violet-500/10 animate-pulse" />
    </div>
  ),
});

const name = "Muhammad Azeem";

export function Hero() {
  return (
    <section className="pt-20 md:pt-25 lg:pt-0 relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-6"
          >
            Full-Stack Developer
          </motion.p>

          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-[1.05]">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-lg text-neutral-400 max-w-md leading-relaxed"
          >
            I build performant, immersive web experiences — from 3D interfaces
            to full-stack applications that feel as good as they look.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full bg-violet-600 hover:bg-violet-500 transition px-7 py-3 text-sm font-medium"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition px-7 py-3 text-sm font-medium"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Right: 3D Canvas */}
        <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full max-w-[650px] mx-auto">
            <HeroCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
