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
    slug: "pgames-cz",
    title: "Pgames.cz",
    summary: "Website for gaming server Pgames.",
    tags: ["Next.js", "React", "TypeScript"],
    url: "https://pgames.cz",
    repo: "https://github.com/your/repo",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "nextjs-portfolio",
    title: "Developer Portfolio",
    summary:
      "A modern, fast, and accessible portfolio site built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://example.com",
    repo: "https://github.com/your/repo",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "dashboard-analytics",
    title: "Analytics Dashboard",
    summary:
      "Interactive dashboard with charts and API integration for real-time insights.",
    tags: ["React", "Charts", "API"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "design-system",
    title: "Design System",
    summary:
      "Reusable component library with tokens, themes, and documentation.",
    tags: ["UI", "Storybook", "Design"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant POC",
    summary:
      "Prototype that integrates LLM APIs to automate workflows and answer questions.",
    tags: ["AI", "LLM", "Automation"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&crop=center",
  },
];
