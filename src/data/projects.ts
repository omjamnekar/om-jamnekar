export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "nextjs-portfolio",
    title: "Developer Portfolio",
    summary:
      "A modern, fast, and accessible portfolio site built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://example.com",
    repo: "https://github.com/your/repo",
    image: "/projects/pgames.jpg",
  },
  {
    slug: "dashboard-analytics",
    title: "Analytics Dashboard",
    summary:
      "Interactive dashboard with charts and API integration for real-time insights.",
    tags: ["React", "Charts", "API"],
  },
  {
    slug: "design-system",
    title: "Design System",
    summary:
      "Reusable component library with tokens, themes, and documentation.",
    tags: ["UI", "Storybook", "Design"],
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant POC",
    summary:
      "Prototype that integrates LLM APIs to automate workflows and answer questions.",
    tags: ["AI", "LLM", "Automation"],
  },
];
