import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:shadow-md hover:-translate-y-0.5 transition">
              <h3 className="font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-2">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
