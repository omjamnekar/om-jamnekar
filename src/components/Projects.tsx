"use client";


import Container from "./Container";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import { Project, projects } from "@/data/personal_projects";

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Extract unique categories from tags
  const allTags = projects.flatMap(p => p.tags);
  const categories = ["all", ...Array.from(new Set(allTags))];

  const getCurrentFilterLabel = () => {
    return activeFilter === "all" ? "All Projects" : activeFilter;
  };

  return (
    <section id="work" className="py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <SectionHeading>Project</SectionHeading>
                <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                  A selection of projects I've worked on, ranging from full-stack applications
                  to design systems and developer tools.
                </p>
              </div>
            </div>

            {/* Filter Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="group inline-flex w-full sm:w-auto items-center justify-between gap-3 px-6 py-3 text-sm font-medium
                         bg-gray-900/50 border border-gray-800 rounded-xl
                         hover:border-gray-700 hover:bg-gray-800/50
                         transition-all duration-300 transform hover:scale-105
                         text-gray-300 hover:text-white backdrop-blur-sm"
              >
                <Filter className="w-4 h-4 text-cyan-400" />
                <span>{getCurrentFilterLabel()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />

                  {/* Dropdown Content */}
                  <div className="absolute top-full mt-2 left-0 right-0 sm:right-auto z-50 w-full sm:w-64
                                bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-xl
                                shadow-2xl shadow-black/50 overflow-hidden">
                    <div className="py-2 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-thumb-gray-600">
                      {categories.map((category, index) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveFilter(category);
                            setIsDropdownOpen(false);
                          }}
                          className={`
                            w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200
                            hover:bg-cyan-400/10 hover:text-cyan-400
                            ${activeFilter === category
                              ? 'bg-cyan-400/10 text-cyan-400 border-l-4 border-cyan-400'
                              : 'text-gray-300 hover:text-cyan-400'
                            }
                            ${index === 0 ? 'border-t-0' : ''}
                          `}
                        >
                          <div className="flex items-center gap-3">
                            {activeFilter === category && (
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            )}
                            <span className={ activeFilter === category ? 'ml-0' : 'ml-5' }>
                              {category === "all" ? "All Projects" : category}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => 
                activeFilter === "all" || p.tags.includes(activeFilter)
              )
              .slice(0, 4)
              .map((p: Project) => (
                <WorkCard
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  title={p.title}
                  summary={p.summary}
                  tags={p.tags}
                  image={p.image}
                />
              ))}
          </div>

          {/* View All CTA */}
            <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View all projects →
                </Link>
              </div>    
        </div>
      </Container>

    </section>
  );
}