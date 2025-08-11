export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string;
};
export const projects = [
  // Frontend Projects
  {
    slug: "bluecs",
    title: "Bluecs Social Feed UI",
    summary:
      "Flutter-based social feed UI with polls, image posts, shorts, caching, and Riverpod state management.",
    tags: ["Flutter", "UI/UX", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "admin-portal",
    title: "Admin Portal",
    summary:
      "Cross-platform Flutter application inspired by Invoice Ninja, built for managing stock and trading information.",
    tags: ["Flutter", "Frontend", "Cross-platform"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=center",
  },

  // Backend Projects
  {
    slug: "grpc-chatmodel",
    title: "gRPC Chat Model",
    summary:
      "Python backend integrating Google's Gemini API via gRPC for session-based conversational context.",
    tags: ["Python", "gRPC", "LLM", "Backend"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "event-booking",
    title: "VentEase Event Booking Platform",
    summary:
      "Full-stack event booking platform with React + TypeScript frontend and Node.js + Express backend with MongoDB.",
    tags: ["React", "TypeScript", "Node.js", "Backend", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=450&fit=crop&crop=center",
  },
  {
    slug: "file-org-typescript",
    title: "File Organization Boilerplate",
    summary:
      "TypeScript backend architecture with feature-based structure, barrel exports, and scalable modular design.",
    tags: ["TypeScript", "Backend", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1603791452906-b6f6f2c27c8f?w=800&h=450&fit=crop&crop=center",
  },

  {
    slug: "book-store",
    title: "Bookstore REST API",
    summary:
      "Production-grade RESTful API to manage books in a bookstore. Built using TypeScript, Express, MongoDB, and Mongoose—includes Postman collection and REST Client support for testing.",
    tags: ["TypeScript", "Express", "REST API", "MongoDB", "Backend"],
    image:
      "https://raw.githubusercontent.com/omjamnekar/book-store/main/social-preview.png",
  },
  {
    slug: "nutrito-app",
    title: "Nutrito — Food Scanner & Nutrition Guide",
    summary:
      "A Flutter mobile app that analyzes product ingredients using image recognition, provides health alerts, alternative suggestions, smart shopping lists, and personalized nutrition insights.",
    tags: ["Flutter", "Dart", "Image Recognition", "AI", "Health"],
    image:
      "https://raw.githubusercontent.com/omjamnekar/nutrito-app/main/social-preview.png",
  },
];
