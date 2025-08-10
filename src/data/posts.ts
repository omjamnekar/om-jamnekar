export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Kicking off my blog with a short introduction.",
    date: "2025-07-08",
  },
  {
    slug: "building-this-portfolio",
    title: "Building this portfolio",
    excerpt: "A quick tour of the stack and choices behind this site.",
    date: "2024-12-24",
  },
];
