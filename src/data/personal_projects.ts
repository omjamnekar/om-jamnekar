export type Project = {
  title: string;
  summary: string;

  link?: string;
  github?: string;
  type: "mobile" | "web" | "desktop" | "other";
  slug: string;
  tags: string[];
  image: string;
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
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&q=80&auto=format",
  },
];
