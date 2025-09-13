"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Project, ProjectState } from "@/core/model/project";
import ApiConstant from "@/core/constants/api";
import { Link } from "lucide-react";

export default function MyProjectSection() {
  const [state, setState] = useState<ProjectState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(ApiConstant.getProjectUrl, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error("Failed to fetch projects");

        const json = await res.json();
        const data: Project[] = json["projects"];
        setState({ data, loading: false, error: null });
      } catch (err: unknown) {
        let message = "Unknown error";
        if (err instanceof Error) {
          message = err.message;
        }

        setState({
          data: null,
          loading: false,
          error: message,
        });
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Featured Projects</SectionHeading>

        {/* --- Loading State with Skeleton --- */}
        {state.loading && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 animate-pulse"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="h-5 w-32 bg-gray-800 rounded" />
                  <div className="h-5 w-12 bg-gray-800 rounded" />
                </div>
                <div className="h-4 w-full bg-gray-800 rounded mb-2" />
                <div className="h-4 w-2/3 bg-gray-800 rounded mb-4" />

                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <span
                      key={j}
                      className="px-6 py-2 bg-gray-800 rounded-full"
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <div className="h-4 w-16 bg-gray-800 rounded" />
                  <div className="h-4 w-20 bg-gray-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- Error State --- */}
        {state.error && (
          <div className="text-red-500 text-center py-8">{state.error}</div>
        )}

        {/* --- Data State --- */}
        {state.data && (
          <>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {state.data.slice(0, 4).map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {project.name}
                    </h3>
                    <span className="px-2 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View all projects →
              </Link>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
