export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "WhatBytes",
    role: "Flutter developer",
    period: "June 2025 — Current",
    summary:
      "Built high-performance Flutter apps using clean architecture and responsive UI, WebSocket integration. Integrated with APIs and real-time data with sockets like Bloc and MethodChannel, like Riverpod and more often packages to build. Took part in code reviews, sprint meetings, and feature planning. Used Git, Figma, Slack, Postman for development and collaboration. Learned from mentors to improve code quality and app deployment. Contributed to each world, user-focused projects.",
    link: "https://www.whatbytes.com/",
  },
  {
    company: "Freelancer",
    role: "FullStack Flutter developer",
    period: "April 2023 — July 2024",
    summary:
      "Worked independently with clients to design and develop custom Flutter applications. Delivered end-to-end solutions, from requirements gathering to deployment. Integrated REST APIs, implemented responsive UIs, and ensured app performance. Managed project timelines, communicated directly with clients, and provided ongoing support and maintenance.",
    link: "https://www.freelancer.com/",
  },
];
