"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS, type Project } from "@/lib/projects";

// Preferred filter order — anything not listed gets appended alphabetically
const PREFERRED_ORDER = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "R3F",
];

function buildFilters(projects: Project[]): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.stack.forEach((s) => set.add(s)));

  const known = PREFERRED_ORDER.filter((s) => set.has(s));
  const unknown = Array.from(set)
    .filter((s) => !PREFERRED_ORDER.includes(s))
    .sort();

  return ["All", ...known, ...unknown];
}

function ProjectCard({ project }: { project: Project }) {
  const hasLive = Boolean(project.liveUrl);
  const hasRepo = Boolean(project.repoUrl);

  return (
    <motion.article
      layout
      id={project.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-violet-400/30 transition-colors"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

        {/* Year chip */}
        <span className="absolute top-4 left-4 rounded-full bg-neutral-950/70 backdrop-blur-sm px-3 py-1 text-xs text-neutral-300 border border-white/10">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-2">
          {project.tagline}
        </p>
        <h3 className="text-xl font-semibold tracking-tight font-[family-name:var(--font-space)]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        {/* Stack */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-neutral-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          {hasLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 hover:bg-violet-500 transition px-4 py-1.5 text-xs font-medium"
            >
              Live <FiArrowUpRight size={12} />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 text-xs text-neutral-500">
              Live — soon
            </span>
          )}

          {hasRepo ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 transition px-4 py-1.5 text-xs"
            >
              Code <FiArrowUpRight size={12} />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/5 px-4 py-1.5 text-xs text-neutral-600">
              Code — soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectGrid() {
  const filters = useMemo(() => buildFilters(PROJECTS), []);
  const [active, setActive] = useState<string>("All");

  const visible = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.stack.includes(active));
  }, [active]);

  return (
    <section className="relative px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-white/5">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-filter"
                    className="absolute inset-0 rounded-full bg-violet-600"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="text-center py-24 text-neutral-500">
            <p className="text-sm">No projects match this filter yet.</p>
            <button
              onClick={() => setActive("All")}
              className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
