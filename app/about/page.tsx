import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { Toolbox } from "@/components/about/Toolbox";
import { BeyondCode } from "@/components/about/BeyondCode";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Azeem — full-stack developer. Background, journey, and the tools I use daily.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutHero />
      <Timeline />
      <Toolbox />
      <BeyondCode />
    </div>
  );
}
