"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FEATURED_PROJECTS, type Project } from "@/lib/projects";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* Image */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Gradient sheen on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-600/0 via-violet-600/0 to-violet-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      {/* Text */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">
          <span>{project.year}</span>
          <span className="h-px w-6 bg-violet-400/40" />
          <span className="text-neutral-500 normal-case tracking-normal">
            {project.tagline}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-[family-name:var(--font-space)]">
          {project.title}
        </h3>

        <p className="mt-4 text-neutral-400 leading-relaxed max-w-md">
          {project.description}
        </p>

        {/* Stack chips */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 hover:bg-violet-500 transition px-5 py-2 font-medium"
            >
              Live site <FaArrowUpRightFromSquare size={14} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2 text-neutral-500">
              Live site — coming soon
            </span>
          )}

          <Link
            href={`/portfolio#${project.slug}`}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition"
          >
            View case study <FaArrowUpRightFromSquare size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="featured"
      className="relative py-28 px-6 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-tight">
              Projects I'm proud <span className="text-violet-400">of</span>.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition"
          >
            See all projects <FaArrowUpRightFromSquare size={14} />
          </Link>
        </motion.div>

        {/* Rows */}
        <div className="space-y-24 lg:space-y-32">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
