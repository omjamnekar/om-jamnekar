import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/personal_projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div
      className="flex flex-row h-[calc(100vh-134px)] relative overflow-hidden"
      style={{
        backgroundImage: `
    linear-gradient(
      to right,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,1) 25%,
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0.6) 75%,
      rgba(0,0,0,0.8) 85%,
      rgba(0,0,0,0) 100%
    ),
    url(${project.image})
  `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <div className="relative z-10 flex-1  p-14 flex items-start overflow-y-scroll scrollbar-scroll">
        <div
          className="space-y-8"
          style={{
            maxWidth: "1260px",
          }}
        >
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-gray-200 text-xl leading-relaxed">
            {project.summary}
          </p>

          {/* Role & Timeline */}
          {
            (project.showcaseOnProjectPage &&
              (project.role || project.timeline)) && (
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                {project.role && (
                  <span className="px-2 py-1 rounded-full bg-gray-900/50 border border-gray-800">
                    {project.role}
                  </span>
                )}
                {project.timeline && (
                  <span className="text-gray-500">{project.timeline}</span>
                )}
              </div>
            )
          }

          {/* Tech stack */}
          {
            project.showcaseOnProjectPage &&
              project.techStack &&
              project.techStack.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs text-gray-400 bg-gray-900/50 rounded-full border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )
          }

          {/* Impact / metrics */}
          {
            project.showcaseOnProjectPage &&
              project.impact &&
              project.impact.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.impact.map((m) => (
                    <div
                      key={m.metric}
                      className="px-3 py-1 rounded-full bg-gray-900/30 border border-gray-800 text-xs text-gray-300"
                    >
                      {m.metric}:{" "}
                      <span className="text-cyan-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              )
          }

          {/* Actions */}
          <div className="mt-6 flex items-center gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 border border-gray-800 rounded-md text-cyan-400 hover:bg-gray-900/80 no-underline"
              >
                View Repository
              </Link>
            )}

            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-cyan-400/10 border border-cyan-400 rounded-md text-cyan-400 hover:bg-cyan-400/5 no-underline"
              >
                Try Demo
              </Link>
            )}
          </div>

          {/* Case Study */}
          {
            project.showcaseOnProjectPage &&
              project.case_study &&
              project.case_study.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">Case Study</h2>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.case_study.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
          }

          {/* Gallery */}
          {
            project.showcaseOnProjectPage &&
              project.gallery &&
              project.gallery.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="rounded-lg border border-gray-800"
                      />
                    ))}
                  </div>
                </div>
              )
          }

          {/* Architecture Image */}
          {
            project.showcaseOnProjectPage &&
              project.architectureImage && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">Architecture</h2>
                  <img
                    src={project.architectureImage}
                    alt="Project Architecture"
                    className="rounded-lg border border-gray-800"
                  />
                </div>
              )
          }

          {/* Installation Instructions */}
          {
            project.showcaseOnProjectPage &&
              project.install &&
              project.install.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">Installation</h2>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.install.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              )
          }

          {/* Testimonials */}
          {
            project.showcaseOnProjectPage &&
              project.testimonials &&
              project.testimonials.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">Testimonials</h2>
                  <div className="space-y-4">
                    {project.testimonials.map((testimonial, index) => (
                      <blockquote
                        key={index}
                        className="border-l-4 border-cyan-400 pl-4 text-gray-300"
                      >
                        <p>"{testimonial.quote}"</p>
                        {testimonial.name && (
                          <footer className="mt-2 text-sm text-gray-400">
                            — {testimonial.name}
                            {testimonial.link && (
                              <a
                                href={testimonial.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:underline ml-1"
                              >
                                (Source)
                              </a>
                            )}
                          </footer>
                        )}
                      </blockquote>
                    ))}
                  </div>
                </div>
              )
          }

          {/* License */}
          {
            project.showcaseOnProjectPage &&
              project.license && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">License</h2>
                  <p className="text-gray-300">{project.license}</p>
                </div>
              )
          }

          {/* Documentation */}
          {
            project.showcaseOnProjectPage &&
              project.docs && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white">Documentation</h2>
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    View Documentation
                  </a>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
}
