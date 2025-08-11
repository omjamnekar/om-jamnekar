import Link from "next/link";
import Container from "@/components/Container";
import { projects, type Project } from "@/data/projects";
import Experience from "@/components/Experience";
import SectionHeading from "@/components/SectionHeading";
import HeroCard from "@/components/HeroCard";
import WorkCard from "@/components/WorkCard";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import LatestBlogPosts from "@/components/LatestBlogPosts";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero Section */}
        <HeroCard />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Experience Section */}
        <Experience />

        {/* My Work Section */}
        <section id="work" className="py-12">
          <Container>
            <SectionHeading>My work</SectionHeading>
            <div className="mt-8 space-y-6">
              {projects.slice(0, 4).map((p: Project) => (
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
            <div className="mt-8">
              <Link 
                href="/projects" 
                className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View all projects →
              </Link>
            </div>
          </Container>
        </section>

        {/* Personal Projects Section */}
        <section className="py-12">
          <Container>
            <SectionHeading>My personal projects</SectionHeading>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {projects.slice(4, 6).map((p: Project) => (
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

        {/* Testimonials Section */}
        <Testimonials />

        {/* Latest Blog Posts */}
        <LatestBlogPosts />
      </main>
    </div>
  );
}
