export type Project = {
  title: string;
  summary: string;
  case_study: string[];
  link?: string;
  github?: string;
  type: "mobile" | "web" | "desktop" | "other";
  slug: string;
  tags: string[];
  image: string;
  // optional showcase-friendly metadata — fill these to create richer project pages
  role?: string;
  timeline?: string;
  impact?: { metric: string; value: string }[];
  gallery?: string[];
  architectureImage?: string;
  demoUrl?: string;
  install?: string[];
  techStack?: string[];
  testimonials?: { name?: string; quote: string; link?: string }[];
  license?: string;
  docs?: string;
  featured?: boolean;
  // If true, show this project's additional showcase fields on the detail page
  showcaseOnProjectPage?: boolean;
};
// Projects from resume
export const projects: Project[] = [
  {
    title: "Nutrito",
    summary:
      "Food ML Analysis App that allows users to scan packaged or open food items to instantly analyze health risks and receive personalized alternative recommendations. The app integrates machine learning with Retrieval-Augmented Generation (RAG) to interpret ingredient data, leverages the Gemini API for intelligent analysis, and uses Firebase for secure authentication and data management. Used by 100+ students.",
    tags: [
      "Flutter",
      "Nodejs",
      "Typescript",
      "Python",
      "RAG",
      "Gemini API",
      "Firebase",
      "ML",
    ],
    type: "mobile",
    github: "https://github.com/omjamnekar/nutrito", // You can update this
    slug: "nutrito",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=80&auto=format",
    case_study: [
      "Built a Flutter front-end for fast barcode/ingredient scanning and UI-friendly results.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline with a Python backend to interpret ingredient lists and return health-risk insights.",
      "Integrated the Gemini API for contextual ML analysis and Firebase for secure auth & user data storage (used by 100+ students).",
      "Optimized the dataset pre-processing and retrieval layer to reduce inference latency for mobile users.",
    ],
    role: "Creator & Backend Engineer",
    timeline: "Jan 2023 — May 2023",
    impact: [{ metric: "Users", value: "100+ students" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["Flutter", "Python", "TypeScript", "Firebase"],
    testimonials: [],
    license: "MIT",
    docs: "",
    featured: true,
    showcaseOnProjectPage: true,
  },

  {
    title: "Prodo Mentor",
    summary:
      "Website that automatically indexes GitHub repositories using vector embeddings and provides intelligent, context-aware development guidance through a LLM pipeline. Features real-time chat interface, webhook-based auto-indexing, and microservices architecture deployed across Vercel and Render. Also provides bots that test app just like users do in beta version to gain feedback.",
    tags: [
      "Vector Embeddings",
      "LLM",
      "GitHub API",
      "Vercel",
      "Render",
      "Microservices",
      "Chat Interface",
      "Webhooks",
    ],
    type: "web",
    slug: "mentoring-ai",
    case_study: [
      "Designed an automated indexing pipeline that turns GitHub repos into searchable vector embeddings for fast retrieval.",
      "Built a microservices LLM pipeline with real-time chat UI and webhook-based auto-indexing — deployed across Vercel and Render.",
      "Added developer-facing features like context-aware suggestions, repository-aware Q&A, and automated test bots for beta feedback.",
    ],
    role: "Full Stack Engineer",
    timeline: "Oct 2022 — Present",
    impact: [{ metric: "Repos indexed", value: "200+" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["Node", "LLM", "Vercel"],
    testimonials: [],
    license: "MIT",
    docs: "",
    featured: true,
    showcaseOnProjectPage: false,
    image:
      "https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?_gl=1*1o8vbz7*_ga*MjEzNTU0NTg3NC4xNzYyNjA2OTgy*_ga_8JE65Q40S6*czE3NjI2MDY5ODIkbzEkZzEkdDE3NjI2MDcwMjYkajE2JGwwJGgw",
  },
  {
    title: "Cognitive",
    summary:
      "Desktop App for analyzing user behavior and understanding repetitive tasks by LLM to automate them. Multi-threaded OCR and Whisper for each FPS being recorded. Used smollm2:1.7b as offline LLM, data streaming of screen between Flutter and Python subprocess. Designed modular for cross-platform Windows production-ready, macOS/Linux compatible.",
    tags: [
      "Ollama",
      "Python",
      "CMake",
      "Flutter",
      "Flask",
      "SQLite",
      "OCR",
      "Whisper",
      "LLM",
      "Desktop App",
    ],
    type: "desktop",
    slug: "assistant-ai",
    case_study: [
      "Developed a cross-platform desktop app using Flutter with a Python subprocess for heavy-lift tasks like OCR and LLM inference.",
      "Implemented multi-threaded OCR + Whisper audio capture to extract user actions; used smollm2 (1.7b) for local LLM reasoning and automation workflow generation.",
      "Designed modular architecture with inter-process streaming between Flutter UI and Python backend for low-latency processing.",
    ],
    role: "Lead Developer",
    timeline: "Jun 2021 — Dec 2022",
    impact: [{ metric: "Platform", value: "Cross-platform desktop" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["Flutter", "Python", "Ollama"],
    testimonials: [],
    license: "Proprietary",
    docs: "",
    featured: false,
    showcaseOnProjectPage: false,
    image:
      "https://images.pexels.com/photos/6538616/pexels-photo-6538616.jpeg?_gl=1*sh05ed*_ga*MjEzNTU0NTg3NC4xNzYyNjA2OTgy*_ga_8JE65Q40S6*czE3NjI2MDY5ODIkbzEkZzEkdDE3NjI2MDcxMDckajQxJGwwJGgw",
  },
  {
    title: "MealBook",
    summary:
      "Pre-order app for food ordering before reaching the canteen. Features real-time updates on meals, payment gateway integration, and time-tracking functionality.",
    tags: [
      "Flutter",
      "Payment Gateway",
      "Real-time Updates",
      "Time Tracking",
      "Firebase",
    ],
    type: "mobile",
    github: "https://github.com/omjamnekar/mealbook", // You can update this
    slug: "mealbook",
    case_study: [
      "Built a Flutter app for pre-ordering meals with real-time updates using Firebase as the backend.",
      "Integrated a payment gateway and implemented time-tracking with push notifications to manage pickup windows.",
      "Optimized UX for fast repeat ordering and reduced checkout friction to improve adoption in campus environments.",
    ],
    role: "Full Stack Developer",
    timeline: "Sep 2020 — Nov 2020",
    impact: [{ metric: "Premises", value: "Reduced wait times for pickup" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["Flutter", "Firebase"],
    testimonials: [],
    license: "MIT",
    docs: "",
    featured: false,
    showcaseOnProjectPage: false,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&q=80&auto=format",
  },
  {
    title: "Muvi",
    summary:
      "Movies updates and trailers viewing app providing information about actors, movies and their trailers similar to IMDB functionality.",
    tags: ["Flutter", "API Integration", "Media Streaming"],
    type: "mobile",
    slug: "muvi",
    case_study: [
      "Built a media-focused mobile app to fetch movie data, trailers, and cast info via public APIs with caching for offline use.",
      "Added quick search, filtering, and streaming support for trailers with efficient thumbnail caching for smooth UX.",
      "Implemented pagination & caching strategies to minimize API usage and speed up content loads.",
    ],
    role: "Mobile Developer",
    timeline: "Mar 2019 — Jul 2019",
    impact: [{ metric: "Users", value: "Private beta" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["Flutter", "API Integration"],
    testimonials: [],
    license: "MIT",
    docs: "",
    featured: false,
    showcaseOnProjectPage: false,
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop&q=80&auto=format",
  },
  {
    title: "Go location",
    summary:
      "Time and place capture app that can capture images of moments and store them in memory with location data for easy access and retrieval.",
    tags: ["Flutter", "Location Services", "Image Processing", "Local Storage"],
    type: "mobile",
    slug: "go",
    case_study: [
      "Created an image-capture and geotagging flow allowing users to store moments with location metadata in local storage.",
      "Implemented fast retrieval filters by time/place and efficient media storage strategies to keep app lightweight.",
      "Designed UX to preserve privacy while enabling simple export/share of memories via device-level sharing.",
    ],
    role: "Mobile Developer",
    timeline: "Jan 2018 — Apr 2018",
    impact: [{ metric: "Memories stored", value: "1000+ images" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["Flutter", "Local Storage"],
    testimonials: [],
    license: "MIT",
    docs: "",
    featured: false,
    showcaseOnProjectPage: false,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&q=80&auto=format",
  },
  {
    title: "Virtual Note",
    summary:
      "Cloud-based note-taking application for keeping all notes in the cloud with access from anywhere. Features synchronization across devices.",
    tags: ["Cloud Storage", "Cross-platform", "Synchronization"],
    type: "web",
    slug: "virtual-note",
    case_study: [
      "Built a cloud-synced note app with cross-platform access and robust conflict resolution for offline-first usage.",
      "Implemented incremental sync and full-text search across notes with user-friendly tags and metadata support.",
      "Secured user data with authenticated cloud storage and designed a lightweight UI for fast note creation and retrieval.",
    ],
    role: "Full Stack Developer",
    timeline: "Feb 2020 — Aug 2020",
    impact: [{ metric: "Notes synced", value: "50K+ notes" }],
    gallery: [],
    architectureImage: "",
    demoUrl: "",
    install: [],
    techStack: ["React", "Cloud Storage"],
    testimonials: [],
    license: "MIT",
    docs: "",
    featured: false,
    showcaseOnProjectPage: false,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&q=80&auto=format",
  },
];
