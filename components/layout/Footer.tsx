"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { NAV_LINKS } from "@/lib/constants";

const SOCIALS = [
  {
    href: "https://github.com/muhammadazeem9",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/azeemdeveloper",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "mailto:hello@example.com", label: "Email", icon: FaEnvelope },
];

export function Footer() {
  const year = 2025;

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 mt-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-violet-600/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: brand + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">
              Let's work together
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-space)] leading-tight">
              Have an idea?
              <br />
              <span className="text-neutral-400">Let's make it real.</span>
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 transition px-6 py-3 text-sm font-medium"
            >
              Start a conversation
            </Link>
          </motion.div>

          {/* Right: nav + socials */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
                Navigate
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5">
                {SOCIALS.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      <Icon
                        size={14}
                        className="text-neutral-500 group-hover:text-violet-400 transition-colors"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {year} Muhammad Azeem. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={backToTop}
              className="inline-flex items-center gap-1 text-white hover:text-violet-400 transition-colors"
              aria-label="Back to top"
            >
              Back to top <FaArrowUp size={25} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
