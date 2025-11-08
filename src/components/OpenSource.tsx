"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { useState } from "react";
import { OpenSourceProject, featuredProjects } from "@/data/open_source"; 

function ProjectCard({ project }: { project: OpenSourceProject }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block no-underline hover:no-underline"
    >
      <div
        className={`
        relative overflow-hidden
        bg-gradient-to-br from-gray-900 to-gray-950
        border border-gray-800
        rounded-xl p-6
        transition-all duration-300 ease-out
        ${
          isHovered
            ? "border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] -translate-y-1"
            : "hover:border-gray-700"
        }
      `}
      >
        {/* Animated background gradient */}
        <div
          className={`
          absolute inset-0 opacity-0 transition-opacity duration-300
          bg-gradient-to-br from-cyan-500/5 to-blue-500/5
          ${isHovered ? "opacity-100" : ""}
        `}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span
                  className="flex items-center gap-1.5"
                  style={{ color: project.languageColor }}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: project.languageColor }}
                  />
                  {project.language}
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center gap-1 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.stars}
                </span>
              </div>
            </div>

            {/* GitHub Icon */}
            <div
              className={`
              transition-transform duration-300
              ${isHovered ? "scale-110 rotate-12" : ""}
            `}
            >
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Hover indicator */}
          <div
            className={`
            mt-4 flex items-center gap-1.5 text-sm font-medium text-cyan-400
            transition-all duration-300
            ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
          `}
          >
            <span>View Repository</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>

        {/* Corner accent */}
        <div
          className={`
          absolute top-0 right-0 w-20 h-20
          bg-gradient-to-br from-cyan-400/10 to-transparent
          rounded-bl-full
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        />
      </div>
    </Link>
  );
}

export default function OpenSource() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <SectionHeading>Open Source</SectionHeading>
              <p className="text-gray-400 text-sm mt-2">
                Contributing to the community, one commit at a time
              </p>
            </div>
            <Link
              href="/open_source"
              className="hidden sm:flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group no-underline hover:no-underline"
            >
              <span>View all projects</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {/* Mobile "View All" Button */}
          <div className="mt-8 sm:hidden">
            <Link
              href="/open_source"
              className="flex items-center justify-center gap-2 w-full py-3 px-6 
                       bg-gray-900 border border-gray-800 rounded-lg
                       text-cyan-400 hover:border-cyan-400 transition-colors
                       no-underline hover:no-underline"
            >
              <span>View all projects</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

      
        </div>
      </Container>
    </section>
  );
}
