export type Education = {
  institution: string;
  degree: string;
  field?: string;
  gpa?: string;
  period: string;
  location?: string;
};
export type Certification = {
  _id: string;
  name: string;
  issuer?: string;
  expired?: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  description?: string;
  certificateUrl?: string;
  displayOrder?: number;
  isActive?: boolean;
  updatedAt?: string;
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
    _id: "689c759d95e713fcd6b32e91",
    name: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    issueDate: "2024-05-01T00:00:00.000Z",
    expired: "2024-12-01T00:00:00.000Z",
    credentialId: "UC-fd3ffbf0-4b7b-4159-8f3d-f6d4bbb06251",
    skills: ["Nodejs", "MongoDB", "Express", "React"],
    description: "Instructors Dr. Angela Yu, Developer and Lead Instructor",
    credentialUrl: "https://ude.my/UC-fd3ffbf0-4b7b-4159-8f3d-f6d4bbb06251a",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-fd3ffbf0-4b7b-4159-8f3d-f6d4bbb06251.jpg",
    displayOrder: 0,
    isActive: true,
    updatedAt: "2025-08-15T16:59:32.263Z",
  },
  {
    _id: "689c75aa95e713fcd6b32e92",
    name: "Understanding TypeScript",
    issuer: "Udemy",
    issueDate: "2024-05-01T00:00:00.000Z",
    expired: "2024-12-01T00:00:00.000Z",
    credentialId: "UC-f3514347-8fc8-45b9-ad7a-f6485575e045",
    skills: ["Typerscript"],
    description: "Maximilian Schwarzmüller",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-f3514347-8fc8-45b9-ad7a-f6485575e045/",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-f3514347-8fc8-45b9-ad7a-f6485575e045.jpg",
  },
  {
    _id: "689c75bf95e713fcd6b32e93",
    name: "Complete Web Design: From Figma to Webflow to Freelancing",
    issuer: "Udemy",
    issueDate: "2023-11-01T00:00:00.000Z",
    expired: "2024-04-01T00:00:00.000Z",
    credentialId: "UC-89f95dc6-63e0-4901-8ffe-93b27b97dbf7",
    skills: [
      "Web Design",
      "Figma (Software)",
      "Webflow",
      "Wireframing",
      "UI",
      "Lean UX",
      "Layout Design",
      "Page Layout",
      "Landing Pages",
      "Visual Hierarchy",
      "Content Management Systems (CMS)",
      "Dynamic Page",
    ],
    description: "",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-89f95dc6-63e0-4901-8ffe-93b27b97dbf7.jpg",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-7e24a7b2-ff04-4b63-8dcf-ef2930a1a5de/",
  },
  {
    _id: "689c75d195e713fcd6b32e94",
    name: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy",
    issueDate: "2023-05-01T00:00:00.000Z",
    expired: "2023-10-01T00:00:00.000Z",
    credentialId: "UC-af342ff6-fa57-4419-b563-69acba3289d4",
    credentialUrl: "http://ude.my/UC-af342ff6-fa57-4419-b563-69acba3289d4",
    skills: [
      "Google Cloud Platform (GCP)",
      "Firebase",
      "Android Studio",
      "flutter",
      "http",
      "Geo Map",
      "Dart",
    ],
    description: "Academind by Maximilian Schwarzmüller",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-af342ff6-fa57-4419-b563-69acba3289d4.jpg",
  },
  {
    _id: "689c75e295e713fcd6b32e95",
    name: "Flutter Advanced Course - Clean Architecture with MVVM",
    issuer: "Udemy",
    issueDate: "2023-11-01T00:00:00.000Z",
    expired: "2024-04-01T00:00:00.000Z",
    credentialId: "UC-8d037eca-dd14-472f-900e-9d39eb78a906",
    skills: ["LVVM", "Flutter Advance"],
    description: "Mina Farid",
    credentialUrl:
      "https://udemy.com/certificate/UC-8d037eca-dd14-472f-900e-9d39eb78a906/",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-8d037eca-dd14-472f-900e-9d39eb78a906.jpg",
  },
  {
    _id: "689c75f095e713fcd6b32e96",
    name: "Go :The complete Developers Guide to Golang",
    issuer: "Udemy",
    issueDate: "2023-11-01T00:00:00.000Z",
    expired: "2023-11-01T00:00:00.000Z",
    credentialId: "UC-cb2eb5c7-1538-4296-aebc-b8ff421da70f",
    skills: [
      "Pointers Management",
      "Threads",
      "Goroutine",
      "HTTP",
      "References",
      "Go (Programming Language)",
    ],
    description: "Academind by Maximilian Schwarzmüller",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-cb2eb5c7-1538-4296-aebc-b8ff421da70f/",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-cb2eb5c7-1538-4296-aebc-b8ff421da70f.jpg",
  },
  {
    _id: "689c75ff95e713fcd6b32e97",
    name: "Ultimate Rust Crash Course",
    issuer: "Udemy",
    issueDate: "2023-10-01T00:00:00.000Z",
    expired: "2023-10-01T00:00:00.000Z",
    credentialId: "UC-ff829002-5fa7-4dff-add7-13f8ded1600",
    credentialUrl: "http://ude.my/UC-ff829002-567-4dff-add7-13f8ded160e0",
    skills: ["Cargo", "Referancing"],
    description: "Nethan Stocks",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-f4aa3d0f-46a1-4a13-bdc0-bb1a9ec65e7b/",
  },
  {
    _id: "689c760f95e713fcd6b32e98",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "2023-07-01T00:00:00.000Z",
    expired: "2023-08-01T00:00:00.000Z",
    credentialId: "",
    skills: ["fundamental of machine learning", "fundamental of AI"],
    description: "",
    certificateUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/OmJamnekar/CE7F8138C2F3E8C9",
  },
  {
    _id: "689c761d95e713fcd6b32e99",
    name: "Introduction to Programming Using HTML and CSS",
    issuer: "Udemy",
    expired: "2022-02-01T00:00:00.000Z",
    issueDate: "2023-07-01T00:00:00.000Z",
    credentialId: "UC-76ec8bb6-3c70-4eb4-bab6-7aa7b8834dfe",
    credentialUrl: "http://ude.my/UC-76ec8bb6-3c70-4eb4-bab6-7aa7b8834dfe",
    skills: ["HTML", "CSS", "Web Development", "Frontend", "Responsive Design"],
    description: "Jonas Schmedtmann",
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-76ec8bb6-3c70-4eb4-bab6-7aa7b8834dfe.jpg",
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
    role: "Flutter developer Intern",
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

  {
    company: "Freelancer",
    role: "Fullstack Flutter Developer",
    period: "Jan 2023 to May 2025",
    location: "Remote",
    description:
      "Worked with multiple clients to deliver custom mobile and web applications using Flutter. Responsible for full project lifecycle including requirements gathering, UI/UX design, development, testing, deployment, and maintenance.",
    achievements: [
      "Delivered 5+ cross-platform apps for clients in e-commerce, education, and healthcare domains",
      "Implemented RESTful API integrations, push notifications, and payment gateways",
      "Provided ongoing support and feature enhancements based on client feedback",
      "Managed project timelines and communicated directly with clients to ensure satisfaction",
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
