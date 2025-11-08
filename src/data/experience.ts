export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  link?: string;
  location: string;
  achievements: string[];
  description: string;
};

export const experiences: Experience[] = [
  {
    company: "BDO Rise",
    role: "Software Developer II",
    period: "Nov 2025 — Current",
    location: "Mumbai",
    summary:
      "As a fullstack developer, I designed and built scalable web applications using ASP.NET Core for the backend, creating RESTful APIs and integrating with SQL Server databases. On the frontend, I developed responsive user interfaces with React and TypeScript, ensuring seamless user experiences. I implemented authentication systems, optimized performance, and deployed applications to Azure. I collaborated in Agile teams, conducted code reviews, and used tools like Git, Jira, and Postman for efficient development and deployment.",
    link: "https://www.bdo.com/",
    description:
      "I led the design and implementation of scalable web applications, focusing on backend architecture with ASP.NET Core and RESTful APIs integrated with SQL Server. On the frontend, I crafted responsive UIs using React and TypeScript to deliver intuitive user experiences. Key responsibilities included implementing secure authentication, performance optimization, and seamless Azure deployments. I actively participated in Agile methodologies, code reviews, and utilized development tools like Git, Jira, and Postman to ensure efficient project delivery and collaboration.",
    achievements: [
      "Designed and built scalable web applications using ASP.NET Core for backend RESTful APIs and SQL Server integration",
      "Developed responsive user interfaces with React and TypeScript for seamless user experiences",
      "Implemented authentication systems and optimized application performance",
      "Deployed applications to Azure and collaborated in Agile teams with code reviews",
      "Utilized tools like Git, Jira, and Postman for efficient development and deployment",
    ],
  },
  {
    company: "WhatBytes",
    role: "Flutter developer Intern",
    period: "June 2025 — Sep 2025",
    location: "Toronto, Canada (Remote)",
    summary:
      "Built high-performance Flutter apps using clean architecture and responsive UI, WebSocket integration. Integrated with APIs and real-time data with sockets like Bloc and MethodChannel, like Riverpod and more often packages to build. Took part in code reviews, sprint meetings, and feature planning. Used Git, Figma, Slack, Postman for development and collaboration. Learned from mentors to improve code quality and app deployment. Contributed to each world, user-focused projects.",
    link: "https://www.whatbytes.com/",
    description:
      "Worked with multiple clients to deliver custom mobile and web applications using Flutter. Responsible for full project lifecycle including requirements gathering, UI/UX design, development, testing, deployment, and maintenance.",

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
    role: "FullStack Flutter developer",
    period: "April 2023 — July 2024",
    summary:
      "Worked independently with clients to design and develop custom Flutter applications. Delivered end-to-end solutions, from requirements gathering to deployment. Integrated REST APIs, implemented responsive UIs, and ensured app performance. Managed project timelines, communicated directly with clients, and provided ongoing support and maintenance.",
    link: "https://www.freelancer.com/",
    location: "Remote",
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
