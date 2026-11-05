import type { Metadata } from "next";
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects by Muhammad Azeem — full-stack apps, 3D interfaces, and interactive experiences.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      <PortfolioHeader />
      <ProjectGrid />
    </div>
  );
}
