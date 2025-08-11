export type Education = {
  institution: string;
  degree: string;
  field?: string;
  gpa?: string;
  period: string;
  location?: string;
};

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
  link?: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  type: "mobile" | "web" | "desktop" | "other";
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  profileImage?: string;
};

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Om Jamnekar",
  title: "Flutter Developer",
  bio: "I am not more socialize and cant do anything more then coding. no hobbies but mostly spend my day doing coding. I mostly love doing work contribute to a team where I can apply my problem-solving skills, learn new things, and communicate effectively",
  email: "omjjamnekar@gmail.com",
  phone: "91+7738314857",
  location: "Mumbai, Maharashtra, India",
  github: "https://github.com/omjamnekar",
  linkedin: "https://linkedin.com/in/om-jamnekar-961aa5256/",
};

// Education
export const education: Education[] = [
  {
    institution: "M. L. Dhahanukar College",
    degree: "BSc IT",
    gpa: "8.5 GPA",
    period: "2021 - 2024",
  },
  {
    institution: "M. L. Dhahanukar College",
    degree: "Commerce",
    gpa: "84.30%",
    period: "2019 - 2021",
  },
  {
    institution: "Vidya mandir school",
    degree: "High School",
    gpa: "84.40%",
    period: "2018 - 2019",
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    name: "Flutter and Dart -The Complete Guide",
    issuer: "Online Course",
  },
  {
    name: "Microsoft Azure Certifications",
    issuer: "Microsoft",
  },
  {
    name: "Understanding TypeScript",
    issuer: "Online Course",
  },
  {
    name: "The Complete Web Development",
    issuer: "Online Course",
  },
  {
    name: "Introduction to Programming Using HTML and CSS",
    issuer: "Online Course",
  },
  {
    name: "Go: The complete Developer's Guide (Golang)",
    issuer: "Online Course",
  },
  {
    name: "Ultimate Rust Crash Course",
    issuer: "Online Course",
  },
];

// Skills organized by category
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      "Dart",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Kotlin",
      "Python",
      "C++",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Flutter", "React.js", "Flask", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "gRPC",
      "JWT Authentication",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Gemini API",
      "Local LLaMA",
      "Copilot",
      "OLama",
      "RAG",
      "Cursor",
      "Windflow",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Figma",
      "Vercel",
      "Renderer",
      "Postman",
      "Firebase Studio",
    ],
  },
  {
    category: "Databases",
    skills: [
      "MongoDB",
      "Firebase",
      "Supabase",
      "SQLite",
      "SQL",
      "MicrosoftSQL server",
      "PostgreSQL",
    ],
  },
];

// Projects from resume
export const projects: Project[] = [
  {
    name: "Nutrito",
    description:
      "Food Product Analysis app using machine learning to evaluate food ingredients and compare with other products, providing alternative recommendations.",
    technologies: ["Machine Learning", "Mobile Development", "API Integration"],
    type: "mobile",
    github: "https://github.com/omjamnekar/nutrito", // You can update this
  },
  {
    name: "MealBook",
    description:
      "Pre-order app for food ordering before reaching the canteen. Features real-time updates on meals, payment gateway integration, and time-tracking functionality.",
    technologies: [
      "Flutter",
      "Payment Gateway",
      "Real-time Updates",
      "Time Tracking",
    ],
    type: "mobile",
    github: "https://github.com/omjamnekar/mealbook", // You can update this
  },
  {
    name: "Muvi",
    description:
      "Movies updates and trailers viewing app providing information about actors, movies and their trailers similar to IMDB functionality.",
    technologies: ["Flutter", "API Integration", "Media Streaming"],
    type: "mobile",
  },
  {
    name: "Go",
    description:
      "Time and place capture app that can capture images of moments and store them in memory with location data for easy access and retrieval.",
    technologies: [
      "Flutter",
      "Location Services",
      "Image Processing",
      "Local Storage",
    ],
    type: "mobile",
  },
  {
    name: "Virtual Note",
    description:
      "Cloud-based note-taking application for keeping all notes in the cloud with access from anywhere. Features synchronization across devices.",
    technologies: ["Cloud Storage", "Cross-platform", "Synchronization"],
    type: "web",
  },
];

// Work Experience (from existing data but enhanced)
export const workExperience = [
  {
    company: "WhatBytes",
    role: "Flutter developer",
    period: "June 2025 to Current",
    location: "Toronto, Canada (Remote)",
    description:
      "Built high-performance Flutter apps using clean architecture and responsive UI, WebSocket integration. Integrated with APIs and real-time data with sockets like Bloc and MethodChannel, like Riverpod and more often packages to build. Took part in code reviews, sprint meetings, and feature planning. Used Git, Figma, Slack, Postman for development and collaboration. Learned from mentors to improve code quality and app deployment. Contributed to each world, user-focused projects.",
    achievements: [
      "Built high-performance Flutter apps using clean architecture and responsive UI",
      "Integrated with APIs and real-time data with WebSocket",
      "Used modern state management solutions like Bloc and MethodChannel",
      "Implemented custom widgets, animations, and advanced routing/navigation patterns",
      "Participated in code reviews, sprint meetings, and feature planning",
      "Collaborated using Git, Figma, Slack, and Postman",
    ],
  },
];

// Additional sections you can fill out later
export const additionalSections = {
  interests: [
    // You can add your interests here
    "Coding",
    "Problem Solving",
    "Learning New Technologies",
    "Team Collaboration",
  ],
  languages: [
    // You can add languages you speak
    { name: "English", proficiency: "Professional" },
    { name: "Hindi", proficiency: "Native" },
    // Add more languages as needed
  ],
  achievements: [
    // You can add any achievements, awards, or recognitions
  ],
  volunteerWork: [
    // You can add any volunteer work or community involvement
  ],
};
