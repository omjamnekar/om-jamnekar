export type WorkProject = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string;
};
export const workProject: WorkProject[] = [
  {
    slug: "moms",
    title: "Moms — Community & Parenting Platform",
    summary:
      "A community-driven Flutter app designed for parents to connect, share experiences, and access parenting resources. Implemented custom widgets, animations, and advanced navigation flows to enhance user engagement and deliver an intuitive onboarding experience.",
    tags: ["Flutter", "Dart", "UI/UX", "Animations", "Community"],
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop", // Relevant: Parenting and community
  },
  {
    slug: "dailyiq",
    title: "DailyIQ — Real-time Community Lounge",
    summary:
      "A Flutter app featuring real-time community interactions and discussion lounges. Integrated Riverpod for state management and WebSocket for instant data updates, achieving 1,000+ daily interactions while optimizing UI performance by 20%.",
    tags: ["Flutter", "Dart", "Riverpod", "WebSocket", "Real-time"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop", // Relevant: Community discussion
  },
  {
    slug: "kraftsolar",
    title: "KraftSolar — Smart Energy Management",
    summary:
      "A Flutter app built for managing and monitoring solar energy systems. Implemented secure authentication with BLoC, RESTful API integration, and responsive UI across devices, ensuring data reliability and smooth performance.",
    tags: ["Flutter", "Dart", "BLoC", "API Integration", "EnergyTech"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop", // Relevant: Solar energy
  },
];
