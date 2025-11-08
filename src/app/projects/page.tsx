import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/personal_projects";
import { ArrowRight, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  icons: {
    icon: "/logo.svg",
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of innovative solutions I&apos;ve built, from AI-powered applications to creative mobile experiences.
            </p>
          </div>

          {/* Projects Grid - Free Style Layout */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={`relative group ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row gap-8 items-start`}
              >
                {/* Image Section */}
                <div className={`relative flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Floating Type Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-lg" />
                </div>

                {/* Content Section */}
                <div className={`flex-1 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-800/50 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-xl text-cyan-400 font-medium hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

       
        </div>
      </Container>
    </div>
  );
}
