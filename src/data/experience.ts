export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  summary: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "Example Co.",
    role: "Full-Stack Developer",
    start: "Oct 2023",
    end: "Mar 2024",
    summary: "Contributed features and improvements to production websites.",
    link: "https://example.com",
  },
  {
    company: "Pixelnite",
    role: "Full-Stack Web Developer",
    start: "Jul 2024",
    summary: "Built a full-stack website with live stats, news, and admin tools.",
    link: "https://pixelnite.example.com",
  },
];
