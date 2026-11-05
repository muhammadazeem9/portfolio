"use server";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";

type ActionResult = { ok: true } | { ok: false; error: string };

export async function sendContactMessage(
  input: ContactInput,
): Promise<ActionResult> {
  // 1. Server-side validation — never trust the client
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid form data." };
  }

  // 2. Stub: log to server console. Replace with Resend when ready.
  console.log("📬 New contact message:", parsed.data);

  /*
  ─────────────── When you're ready for real email ───────────────

  1. npm install resend
  2. Add to .env.local:
       RESEND_API_KEY=re_xxxxxxxx
       CONTACT_TO_EMAIL=you@yourdomain.com
  3. Uncomment:

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // use verified domain later
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New message from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    });
    return { ok: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { ok: false, error: "Failed to send. Please try again." };
  }

  ───────────────────────────────────────────────────────────────
  */

  // Simulate a small delay so the UI can show its pending state
  await new Promise((r) => setTimeout(r, 500));

  return { ok: true };
}
