"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { LuCheck, LuCircleAlert, LuLoader } from "react-icons/lu";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { sendContactMessage } from "@/app/contact/actions";

type Status = "idle" | "pending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("pending");
    setServerError(null);

    const result = await sendContactMessage(data);

    if (result.ok) {
      setStatus("success");
      reset();
      // Auto-reset the success state after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="py-16 text-center"
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500/15 grid place-items-center mb-6">
                <LuCheck className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-space)]">
                Message sent.
              </h3>
              <p className="mt-2 text-sm text-neutral-400 max-w-sm mx-auto">
                Thanks — I'll get back to you within a day or two.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full rounded-xl bg-neutral-900/60 border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 ${
                    errors.name
                      ? "border-red-500/50"
                      : "border-white/10 focus:border-violet-400/50"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-xl bg-neutral-900/60 border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 ${
                    errors.email
                      ? "border-red-500/50"
                      : "border-white/10 focus:border-violet-400/50"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full rounded-xl bg-neutral-900/60 border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/50 ${
                    errors.message
                      ? "border-red-500/50"
                      : "border-white/10 focus:border-violet-400/50"
                  }`}
                  placeholder="Tell me about the project, role, or idea…"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Server error */}
              {serverError && (
                <div className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-300">
                  <LuCircleAlert size={14} className="mt-0.5 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "pending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/50 disabled:cursor-not-allowed transition px-6 py-3 text-sm font-medium"
              >
                {status === "pending" ? (
                  <>
                    <LuLoader size={14} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </button>

              <p className="text-[11px] text-neutral-600 text-center pt-2">
                Your email is only used to reply — no newsletters, no spam.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
