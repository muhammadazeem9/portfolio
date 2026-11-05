import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Azeem — freelance, collaboration, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20">
          <ContactHero />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
