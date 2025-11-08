import Container from "@/components/Container";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/personal_projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return { 
    title: project.title, 
    description: project.summary,
    icons: {
      icon: "/logo.svg",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex gap-4">
          {project.image && (
            <a href={project.image} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-foreground text-background text-sm">Visit</a>
          )}
          {/* {project. && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/20 text-sm">Source</a>
          )} */}
        </div>
      </Container>
    </div>
  );
}
