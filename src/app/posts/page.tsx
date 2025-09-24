import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import PageTransition from "@/components/animation/PageTransition";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <PageTransition>
      <div className="py-16">
        <Container>
          <h1 className="text-3xl font-bold">Posts</h1>
          <div className="mt-8 grid gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/posts/${p.slug}`}
                className="block rounded-lg border border-black/10 dark:border-white/10 p-5 hover:shadow-sm transition"
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                  {p.excerpt}
                </p>
                <p className="mt-2 text-xs text-black/60 dark:text-white/60">
                  {new Date(p.date).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
