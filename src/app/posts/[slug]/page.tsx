import Container from "@/components/Container";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm text-black/60 dark:text-white/60">{new Date(post.date).toLocaleDateString()}</p>
        <article className="prose prose-neutral dark:prose-invert mt-6 max-w-none">
          <p>{post.excerpt}</p>
          <p>Post body placeholder. Replace with content or MDX later.</p>
        </article>
      </Container>
    </div>
  );
}
