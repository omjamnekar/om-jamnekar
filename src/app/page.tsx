import Experience from "@/components/Experience";
import HeroCard from "@/components/HeroCard";
import TechStack from "@/components/TechStack";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import CTABanner from "@/components/CTABanner";
import MyWorkHomeSection from "@/components/MyWorkHome";
import ProjectSection from "@/components/Projects";

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
        <MyWorkHomeSection />

        {/* Personal Projects Section */}

        <ProjectSection />

        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* Latest Blog Posts */}
        <LatestBlogPosts />

        {/* CTA Banner */}
        <CTABanner />
      </main>
    </div>
  );
}
