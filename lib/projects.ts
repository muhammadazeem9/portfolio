export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  image: string; // /projects/xxx.jpg in public/
  liveUrl?: string; // optional — fill later
  repoUrl?: string; // optional — fill later
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "Full-stack SaaS dashboard",
    description:
      "A real-time analytics dashboard with role-based access, websocket updates, and a 3D data visualization layer.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "R3F"],
    year: "2025",
    image: "/projects/project-one.jpg",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "E-commerce platform",
    description:
      "A headless commerce storefront with Stripe checkout, admin CMS, and server-rendered product pages tuned for SEO.",
    stack: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
    year: "2024",
    image: "/projects/project-two.jpg",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "3D portfolio experience",
    description:
      "An immersive WebGL portfolio with custom shaders, scroll-driven camera motion, and 60fps on mid-tier devices.",
    stack: ["React", "Three.js", "GLSL", "Motion"],
    year: "2024",
    image: "/projects/project-three.jpg",
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
