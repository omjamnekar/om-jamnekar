type WorkItem = {
  impact: {
    metrics: string;
    businessValue: string;
  };
  links: {
    liveDemo?: string;
    githubRepo?: string;
    appStore?: string;
    playStore?: string;
    caseStudy?: string;
  };
  screenshots: { url: string; caption: string }[];
};
export type WorkProject = {
  slug: string;
  role: string;
  type: "app" | "website" | "tool" | "system";
  title: string;
  summary: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string;
  company: string;
  solutions: string[];
  startDate: string;
  endDate: string;
  technologies: string[];
  responsibilities: string[];
  features: string[];
  challenges: string[];
  impact: {
    metrics: string;
    businessValue: string;
  };
  links: {
    liveDemo?: string;
    githubRepo?: string;
    appStore?: string;
    playStore?: string;
    caseStudy?: string;
  };
  screenshots?: { url: string; caption: string }[];
};
export const workProject: WorkProject[] = [
  {
    slug: "moms",
    title: "Moms — Community & Parenting Platform",
    summary:
      "A community-driven Flutter app designed for parents to connect, share experiences, and access parenting resources. Implemented custom widgets, animations, and advanced navigation flows to enhance user engagement and deliver an intuitive onboarding experience.",
    tags: ["Flutter", "Dart", "UI/UX", "Animations", "Community"],
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop",
    type: "app",
    role: "Application Developer",
    company: "TechParent Inc.",
    solutions: [
      "Custom widget library",
      "Animation framework",
      "Navigation state management",
    ],
    startDate: "2022-01-01",
    endDate: "2022-06-01",
    technologies: ["Flutter", "Dart", "Firebase"],
    responsibilities: [
      "Develop UI components",
      "Implement animations",
      "Handle state management",
    ],
    features: ["User onboarding", "Community forums", "Resource sharing"],
    challenges: [
      "had to understand existing implementations",
      "Revise whole data layer and re-implement Bloc state management of application",
      "Search system in integration in already production ready application",
    ],
    impact: {
      metrics: "Increased user engagement by 30%",
      businessValue: "Enhanced community growth and retention",
    },
    links: {
      liveDemo: "https://momsapp.com/demo",
      githubRepo: "https://github.com/example/moms",
      appStore: "https://apps.apple.com/app/moms",
      playStore: "https://play.google.com/store/apps/details?id=com.moms",
    },
    screenshots: [
      {
        url: "https://example.com/screenshot1.jpg",
        caption: "Onboarding screen",
      },
      { url: "https://example.com/screenshot2.jpg", caption: "Community feed" },
    ],
  },
  {
    slug: "dailyiq",
    title: "DailyIQ — Real-time Community Lounge",
    summary:
      "A Flutter app featuring real-time community interactions and discussion lounges. Integrated Riverpod for state management and WebSocket for instant data updates, achieving 1,000+ daily interactions while optimizing UI performance by 20%.",
    tags: ["Flutter", "Dart", "Riverpod", "WebSocket", "Real-time"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    type: "app",
    role: "Application Developer",
    company: "IQTech Solutions",
    solutions: [
      "Real-time data synchronization",
      "Puzzle logic engine",
      "User post integration",
    ],
    startDate: "2021-09-01",
    endDate: "2022-03-01",
    technologies: ["Flutter", "Dart", "Riverpod", "WebSocket"],
    responsibilities: [
      "Implement puzzle features",
      "Integrate WebSocket",
      "Optimize UI performance",
    ],
    features: ["Real-time lounges", "Puzzle challenges", "User interactions"],
    challenges: ["puzzle logic implementation", "user Post via puzzle"],
    impact: {
      metrics: "1,000+ daily interactions",
      businessValue: "Boosted community engagement and app popularity",
    },
    links: {
      liveDemo: "https://dailyiq.com/demo",
      githubRepo: "https://github.com/example/dailyiq",
      appStore: "https://apps.apple.com/app/dailyiq",
      playStore: "https://play.google.com/store/apps/details?id=com.dailyiq",
    },
    screenshots: [
      {
        url: "https://example.com/screenshot3.jpg",
        caption: "Lounge interface",
      },
      { url: "https://example.com/screenshot4.jpg", caption: "Puzzle screen" },
    ],
  },
  {
    slug: "kraftsolar",
    title: "KraftSolar — Smart Energy Management",
    summary:
      "A Flutter app built for managing and monitoring solar energy systems. Implemented secure authentication with BLoC, RESTful API integration, and responsive UI across devices, ensuring data reliability and smooth performance.",
    tags: ["Flutter", "Dart", "BLoC", "API Integration", "EnergyTech"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
    type: "app",
    role: "Application Developer",
    company: "SolarTech Corp.",
    solutions: ["Secure auth system", "API data fetching", "Responsive design"],
    startDate: "2020-05-01",
    endDate: "2020-11-01",
    technologies: ["Flutter", "Dart", "BLoC", "REST API"],
    responsibilities: [
      "Develop authentication",
      "Integrate APIs",
      "Ensure UI responsiveness",
    ],
    features: ["Energy monitoring", "System management", "Data visualization"],
    challenges: ["Secure data handling", "Cross-device compatibility"],
    impact: {
      metrics: "Improved energy efficiency by 15%",
      businessValue: "Reduced operational costs for users",
    },
    links: {
      liveDemo: "https://kraftsolar.com/demo",
      githubRepo: "https://github.com/example/kraftsolar",
      appStore: "https://apps.apple.com/app/kraftsolar",
      playStore: "https://play.google.com/store/apps/details?id=com.kraftsolar",
    },
    screenshots: [
      { url: "https://example.com/screenshot5.jpg", caption: "Dashboard view" },
      { url: "https://example.com/screenshot6.jpg", caption: "Energy stats" },
    ],
  },
];
