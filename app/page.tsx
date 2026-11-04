import { FeaturedProjects } from "@/components/layout/home/FeaturedProject";
import { Hero } from "@/components/layout/home/Hero";
import { Skills } from "@/components/layout/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
    </>
  );
}
