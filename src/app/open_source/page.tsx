import Container from "@/components/Container";
import PageTransition from "@/core/animation/PageTransition";
import { Metadata } from "next";
import Link from "next/link";
import { OpenSourceProject,featuredProjects } from "@/data/open_source";

export const metadata: Metadata = {
  title: "Open Source",
  description: "My contributions to open source projects and community-driven development.",
  icons: {
    icon: "/logo.svg",
  },
};



function CategoryBadge({ category }: { category: OpenSourceProject["category"] }) {
  const styles = {
    library: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    tool: "bg-green-500/10 text-green-400 border-green-500/20",
    app: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    template: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    other: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded border ${styles[category as keyof typeof styles]}`}>
      {category}
    </span>
  );
}

function StatusBadge({ status }: { status: OpenSourceProject["status"] }) {
  const styles = {
    active: "bg-green-500/10 text-green-400",
    archived: "bg-gray-500/10 text-gray-400",
    maintained: "bg-blue-500/10 text-blue-400",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  );
}

export default function OpenSourcePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <main className="py-12">
          {/* Hero Section */}
          <section className="py-12">
            <Container>
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Open Source{" "}
                  <span className="text-cyan-400">Contributions</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I believe in giving back to the community. Here are some of my
                  open source projects and contributions that others can use,
                  learn from, and build upon.
                </p>
              </div>
            </Container>
          </section>

          {/* Projects Section */}
          <section className="py-8">
            <Container>
          
              <div className="mt-12 space-y-16">
                {featuredProjects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative no-underline hover:no-underline"
                    style={{ textDecoration: "none" }}
                  >
                    {/* Animated line */}
                    <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/20 via-cyan-400/50 to-cyan-400/20 
                                  group-hover:w-2 transition-all duration-500 ease-out rounded-full" />
                    
                    {/* Content */}
                    <div className="pl-8 pb-1 group-hover:pl-10 transition-all duration-500"
                    
 
                    >
                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {project.name}
                            </h3>
                            {/* GitHub Icon */}
                            <svg
                              className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          
                          {/* Badges */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <CategoryBadge category={project.category} />
                            <StatusBadge status={project.status} />
                            {project.language && (
                              <span className="px-2 py-1 text-xs text-gray-400 border border-gray-700 rounded">
                                {project.language}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4 text-sm text-gray-500">
                          {project.stars !== undefined && (
                            <span className="flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {project.stars}
                            </span>
                          )}
                          {project.forks !== undefined && (
                            <span className="flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {project.forks}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-base leading-relaxed mb-4 max-w-4xl">
                        {project.description}
                      </p>

                      {/* Technologies - Flowing Pills */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 text-xs text-gray-400 bg-gray-900/50 rounded-full 
                                     border border-gray-800 group-hover:border-gray-700 
                                     group-hover:text-gray-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover Arrow Indicator */}
                      <div className="mt-4 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 
                                    -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <span className="text-sm font-medium">View Repository</span>
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
                      
                    {/* Bottom fade line */}
                    <div className="absolute bottom-0 left-8 right-0 h-px bg-gradient-to-r from-gray-800 via-gray-700 to-transparent 
                                  opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                ))}
              </div>
            </Container>
          </section>

                

        </main>
      </div>
    </PageTransition>
  );
}