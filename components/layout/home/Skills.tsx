"use client";

import { motion } from "motion/react";

type Skill = { name: string; level: 1 | 2 | 3 | 4 };
type Category = {
  title: string;
  subtitle: string;
  accent: string;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    title: "Frontend",
    subtitle: "Interfaces that feel alive",
    accent: "from-violet-500/20 to-fuchsia-500/5",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Three.js / R3F", level: 3 },
      { name: "Motion", level: 3 },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs built to scale",
    accent: "from-indigo-500/20 to-blue-500/5",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "REST / GraphQL", level: 3 },
      { name: "Python", level: 3 },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Ship with confidence",
    accent: "from-emerald-500/20 to-teal-500/5",
    skills: [
      { name: "Git / GitHub", level: 4 },
      { name: "VS Code", level: 4 },
      { name: "Postman", level: 4 },
      { name: "Vercel", level: 3 },
      { name: "Docker", level: 2 },
      { name: "Linux", level: 3 },
    ],
  },
];

function LevelDots({ level }: { level: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex gap-1" aria-label={`Proficiency ${level} of 4`}>
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            n <= level ? "bg-violet-400" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

function SkillCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-colors hover:border-white/20"
    >
      {/* Accent glow */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${category.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-space)]">
          {category.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">{category.subtitle}</p>
      </div>

      <ul className="space-y-3.5">
        {category.skills.map((skill, i) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.12 + i * 0.04 }}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-neutral-300">{skill.name}</span>
            <LevelDots level={skill.level} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-tight">
            The stack behind the <span className="text-violet-400">craft</span>.
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            A working toolkit refined over real projects — from type-safe
            frontends to scalable backends and 3D-heavy interfaces.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
