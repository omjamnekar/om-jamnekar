export type OpenSourceProject = {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  github: string;
  category: string;
  status: string;
  technologies: string[];
  forks?: string[];
};

// Featured open source projects for homepage preview

export const featuredProjects: OpenSourceProject[] = [
  {
    name: "hybrid_manager",
    description:
      "lightweight state management solution for Flutter that combines the best of GetX and Riverpod patterns. Use reactive programming, class-based state notifiers, dependency injection, and hot-reload-friendly APIs — all in one clean package.",
    language: "Dart",
    languageColor: "#0175C2",
    stars: 333,
    github: "https://github.com/omjamnekar/hybrid_manager",
    category: "Library",
    technologies: ["Flutter", "GitHub"],
    status: "Active",
  },
  {
    name: "gen_connect",
    description:
      "gen_connect is a cutting-edge package for integrating any AI model/provider (OpenAI, Gemini, Anthropic, Meta, Grok, DeepSeek, PaLM) into your Flutter app and call all methods like sendFile(), sendPrompt() etc. with type-safe, scalable connectors and unified error handling.",
    language: "Dart",
    languageColor: "#0175C2",
    stars: 120,
    github: "https://github.com/omjamnekar/gen-connect",
    category: "Library",
    status: "Active",
    technologies: ["Flutter", "GitHub"],
  },
];
