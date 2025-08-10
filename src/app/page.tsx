import Link from "next/link";
import Container from "@/components/Container";
import { projects, type Project } from "@/data/projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import SectionHeading from "@/components/SectionHeading";
import Announcement from "@/components/Announcement";
import HeroCard from "@/components/HeroCard";
import WorkCard from "@/components/WorkCard";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div>
      <main>
        <section className="pt-6 sm:pt-8">
          <Announcement />
          <div className="mt-4">
            <HeroCard />
          </div>
        </section>

  <section id="work" className="py-12 bg-black/[.02] dark:bg-white/[.03]">
          <Container>
            <SectionHeading>My work</SectionHeading>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
          </Container>
        </section>

  <div id="experience"><Experience /></div>
  <div id="skills"><Skills /></div>
  <Testimonials />

        <section className="py-12">
          <Container>
            <SectionHeading>Latest posts</SectionHeading>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {posts.slice(0, 2).map((p) => (
                <Link key={p.slug} href={`/posts/${p.slug}`} className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:shadow-sm transition">
                  <h3 className="font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.excerpt}</p>
                  <p className="mt-2 text-xs text-black/60 dark:text-white/60">{new Date(p.date).toLocaleDateString()}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/posts" className="text-sm underline underline-offset-4">More…</Link>
            </div>
          </Container>
        </section>
  </main>
    </div>
  );
}
