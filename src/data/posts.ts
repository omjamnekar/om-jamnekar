export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  summary: string;
  date: string; // ISO string
  readTime: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Kicking off my blog with a short introduction.",
    summary:
      "Kicking off my blog with a short introduction and overview of what to expect.",
    date: "2025-07-08",
    readTime: "3 min read",
    tags: ["intro", "personal", "blog"],
  },
  {
    slug: "building-this-portfolio",
    title: "Building this portfolio",
    excerpt: "A quick tour of the stack and choices behind this site.",
    summary:
      "A detailed walkthrough of the technologies and design decisions that went into creating this portfolio.",
    date: "2024-12-24",
    readTime: "5 min read",
    tags: ["nextjs", "typescript", "web development"],
  },
];
