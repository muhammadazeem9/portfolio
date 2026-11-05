"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const INTERESTS = [
  "Exploring new technologies and development approaches.",
  "Experimenting with interface design and visual details.",
  "Learning through side projects and experimentation.",
  "Finding inspiration in design, architecture, and everyday experiences.",
];

export function BeyondCode() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start">
        <SectionHeading
          eyebrow="Beyond the code"
          title={
            <>
              Off-screen, I'm{" "}
              <span className="text-violet-400">still curious</span>.
            </>
          }
        />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 text-neutral-300"
        >
          {INTERESTS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-none"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
