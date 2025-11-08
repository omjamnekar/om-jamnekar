import { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import PageTransition from "@/core/animation/PageTransition";
import { workProject, WorkProject } from "@/data/workproject";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A curated selection of industry and freelance work including apps, websites, tools, and systems built with modern technologies.",
  icons: {
    icon: "/logo.svg",
  },
};


function TypeBadge({ type }: { type: WorkProject["type"] }) {
  const labelMap: Record<WorkProject["type"], string> = {
    app: "App",
    website: "Website",
    tool: "Tool",
    system: "System",
  };
  return (
    <span className="px-2 py-0.5 text-xs rounded bg-cyan-400/10 text-cyan-400 border border-cyan-500/20">
      {labelMap[type]}
    </span>
  );
}

function WorkCard({ item }: { item: WorkProject }) {
  return (
    <PageTransition>
      <article className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
        <header className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <div className="text-sm text-gray-400">
              <span className="text-white">{item.role}</span> • {item.company}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {item.startDate} – {item.endDate}
            </div>
          </div>
          <TypeBadge type={item.type} />
        </header>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {item.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">
              Responsibilities
            </h4>
            <ul className="space-y-1">
              {item.responsibilities.slice(0, 4).map((res) => (
                <li
                  key={res}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Impact</h4>
            <div className="text-gray-300 text-sm">
              <div className="mb-1">
                <span className="text-cyan-400">Metrics:</span>{" "}
                {item.impact.metrics}
              </div>
              <div>
                <span className="text-cyan-400">Business Value:</span>{" "}
                {item.impact.businessValue}
              </div>
            </div>
          </div>
        </div>

        {(item.links.liveDemo ||
          item.links.githubRepo ||
          item.links.appStore ||
          item.links.playStore ||
          item.links.caseStudy) && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {item.links.liveDemo && (
              <Link
                href={item.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Live Demo →
              </Link>
            )}
            {item.links.githubRepo && (
              <Link
                href={item.links.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                GitHub →
              </Link>
            )}
            {item.links.appStore && (
              <Link
                href={item.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                App Store →
              </Link>
            )}
            {item.links.playStore && (
              <Link
                href={item.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Play Store →
              </Link>
            )}
            {item.links.caseStudy && (
              <Link
                href={item.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Case Study →
              </Link>
            )}
          </div>
        )}
      </article>
    </PageTransition>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-2 pb-13">
        {/* Hero */}
        <section className="py-8">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Work</h1>
              <p className="text-gray-300">
                A selection of professional work across industry and freelance
                projects. Built with a focus on clarity, performance, and
                maintainability.
              </p>
            </div>
          </Container>
        </section>

        {/* Industry Work */}
        <section className="py-8">
          <Container>
            <SectionHeading>Industry Work</SectionHeading>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {workProject.map((item) => (
                <WorkCard key={item.title} item={item} />
              ))}
            </div>
          </Container>
        </section>

      
      </main>
    </div>
  );
}
