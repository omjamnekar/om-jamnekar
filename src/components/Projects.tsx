"use client";
import { Link } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { useEffect, useState } from "react";
import { Project, ProjectState } from "@/core/model/project";
import ApiConstant from "@/core/constants/api";

export default function ProjectSection() {
  const [state, setState] = useState<ProjectState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(ApiConstant.getProjectUrl);
        if (!res.ok) throw new Error("Failed to fetch projects");
        const json = await res.json();
        const data: Project[] = json["projects"];

        setState({ data, loading: false, error: null });
      } catch (err: unknown) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : "Unknown error occurred",
        });
      }
    };
    fetchdata();
  }, []);

  if (state.loading) {
    return (
      <section className="py-12">
        <Container>
          <SectionHeading>My personal projects</SectionHeading>
          <div className="mt-8">Loading...</div>
        </Container>
      </section>
    );
  }

  if (state.error) {
    return (
      <section className="py-12">
        <Container>
          <SectionHeading>My personal projects</SectionHeading>
          <div className="mt-8 text-red-500">{state.error}</div>
        </Container>
      </section>
    );
  }

  const projects = state.data ?? [];
  return (
    <section className="py-12">
      <Container>
        <SectionHeading>My personal projects</SectionHeading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p: Project) => (
            <WorkCard
              key={p._id}
              href={`/projects/${p._id}`}
              title={p.name}
              summary={p.description}
              tags={p.technologies}
              image={p.images[0]}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            More... →
          </Link>
        </div>
      </Container>
    </section>
  );
}
