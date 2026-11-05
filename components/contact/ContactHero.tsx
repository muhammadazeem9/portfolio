"use client";

import { motion } from "motion/react";
import { LuMail, LuGithub, LuLinkedin, LuClock } from "react-icons/lu";

const CONTACT_LINKS = [
  {
    icon: LuMail,
    label: "Email",
    value: "hello@example.com", // ← change me
    href: "mailto:hello@example.com",
    external: false,
  },
  {
    icon: LuGithub,
    label: "GitHub",
    value: "@muhammadazeem", // ← change me
    href: "https://github.com/muhammadazeem9",
    external: true,
  },
  {
    icon: LuLinkedin,
    label: "LinkedIn",
    value: "Muhammad Azeem", // ← change me
    href: "https://linkedin.com/in/azeemdeveloper",
    external: true,
  },
];

export function ContactHero() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-6"
      >
        Contact
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-[1.05]"
      >
        Let's build something{" "}
        <span className="text-neutral-400">worth keeping.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 text-neutral-400 leading-relaxed max-w-md"
      >
        Have a project, a role, or an idea worth talking through? Drop a message
        I read every one and reply within a day or two.
      </motion.p>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-neutral-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <LuClock size={12} className="text-neutral-500" />
        Available for select projects
      </motion.div>

      {/* Direct links */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-12 space-y-1 border-t border-white/5 pt-8"
      >
        {CONTACT_LINKS.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 py-3 border-b border-white/5 last:border-none hover:text-white transition-colors"
            >
              <span className="flex items-center gap-3">
                <Icon
                  size={16}
                  className="text-neutral-500 group-hover:text-violet-400 transition-colors"
                />
                <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                  {label}
                </span>
              </span>
              <span className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors text-right">
                {value}
              </span>
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
