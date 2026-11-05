"use client";

import { motion } from "motion/react";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }
    >
      <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
