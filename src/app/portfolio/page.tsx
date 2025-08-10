import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">Selected client work.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-lg border border-black/10 dark:border-white/10 p-5 hover:shadow-sm transition">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-2">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
