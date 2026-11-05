"use client";

import { motion } from "motion/react";
import {
  FaCode,
  FaTerminal,
  FaPalette,
  FaMagic,
  FaCodeBranch,
  FaDatabase,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TOOLS = [
  { icon: FaCode, label: "VS Code", note: "Daily driver editor" },
  { icon: FaTerminal, label: "Warp / zsh", note: "Terminal workflow" },
  { icon: FaCodeBranch, label: "Git + GitHub", note: "Version control & CI" },
  { icon: FaPalette, label: "Figma", note: "Design handoff" },
  { icon: FaDatabase, label: "Postman", note: "API testing" },
  { icon: FaMagic, label: "AI copilots", note: "Pair-programming" },
];

export function Toolbox() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              What I reach for{" "}
              <span className="text-violet-400">every day</span>.
            </>
          }
          description="The behind-the-scenes stack that keeps the work fast and the feedback loop tight."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {TOOLS.map(({ icon: Icon, label, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-violet-400/30 transition-colors"
            >
              <Icon
                size={20}
                className="text-neutral-400 group-hover:text-violet-400 transition-colors"
              />
              <p className="mt-4 text-sm font-medium text-white">{label}</p>
              <p className="mt-1 text-xs text-neutral-500">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
