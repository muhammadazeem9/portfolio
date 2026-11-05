"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Entry = {
  year: string;
  title: string;
  description: string;
};

const TIMELINE: Entry[] = [
  {
    year: "2025",
    title: "Full-Stack Developer — Present",
    description:
      "Building production web apps end-to-end: type-safe Next.js frontends, Node/Express APIs, and 3D interfaces when they earn their place.",
  },
  {
    year: "2024",
    title: "Backend Developer",
    description:
      "Started exploring backend development, learning how to build APIs, work with databases, and handle server-side logic. I became interested in what happens behind the scenes and how everything connects to make an application work beyond the interface.",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    description:
      "Started learning web development and quickly became interested in how websites come together. From writing my first HTML and CSS to exploring JavaScript and React, I enjoyed turning designs into interactive experiences and bringing ideas to life in the browser.",
  },
  {
    year: "2022",
    title: "Started BSCS",
    description:
      "Began my Computer Science journey, learning the fundamentals of programming, problem-solving, and how software works. Somewhere along the way, I became particularly interested in web development and building things for the browser.",
  },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              A path through code,{" "}
              <span className="text-violet-400">step by step</span>.
            </>
          }
          description="Not a straight line — but every step taught me something the previous one couldn't."
        />

        <div className="mt-16 relative">
          {/* Vertical line — desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          {/* Vertical line — mobile */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10 md:hidden" />

          <div className="space-y-12 md:space-y-20">
            {TIMELINE.map((entry, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* Dot */}
                  <span className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-2 h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />

                  {/* Card — mobile full width, desktop alternating */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      isRight
                        ? "md:col-start-2"
                        : "md:col-start-1 md:text-right"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-violet-400 mb-2">
                      {entry.year}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed max-w-md md:inline-block">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
