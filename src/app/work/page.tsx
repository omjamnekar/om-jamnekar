import { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import PageTransition from "@/core/animation/PageTransition";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A curated selection of industry and freelance work including apps, websites, tools, and systems built with modern technologies.",
};

type WorkItem = {
  title: string;
  type: "app" | "website" | "tool" | "system";
  description: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  responsibilities: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: {
    metrics: string;
    businessValue: string;
  };
  links: {
    liveDemo?: string;
    githubRepo?: string;
    appStore?: string;
    playStore?: string;
    caseStudy?: string;
  };
  screenshots: { url: string; caption: string }[];
};

// Industry work (dummy data based on your backend schema)
const industryItems: WorkItem[] = [
  {
    title: "FleetOps Dispatch",
    type: "system",
    description:
      "A real-time dispatch and tracking platform for logistics operations with role-based access, live maps, and analytics dashboards.",
    role: "Full Stack Engineer",
    company: "LogiTech",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "WebSockets",
    ],
    responsibilities: [
      "Led development of core dispatch workflows",
      "Implemented real-time communications",
      "Designed and tuned database schema",
    ],
    features: [
      "Live vehicle tracking",
      "Route planning",
      "Role-based permissions",
    ],
    challenges: [
      "Consistency across concurrent updates",
      "Balancing real-time UX and performance",
    ],
    solutions: [
      "Optimistic updates with conflict resolution",
      "Pub/Sub updates with granular subscriptions",
    ],
    impact: {
      metrics: "~28% faster dispatch, ~35% fewer failed assignments",
      businessValue: "Improved operational visibility, reduced delays",
    },
    links: {
      liveDemo: "#",
      githubRepo: "#",
      caseStudy: "#",
    },
    screenshots: [],
  },
  {
    title: "ShopWave",
    type: "app",
    description:
      "A commerce companion app that streamlines catalog browsing, cart building, and order tracking across devices.",
    role: "Frontend Engineer",
    company: "RetailWorks",
    startDate: "May 2022",
    endDate: "Mar 2023",
    technologies: [
      "Next.js",
      "React Query",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
    ],
    responsibilities: [
      "Built responsive UI and design primitives",
      "Integrated checkout and subscriptions",
      "Added analytics for funnel tracking",
    ],
    features: ["Universal search", "Saved carts", "Order history"],
    challenges: ["Reducing bundle size for mobile", "Minimizing CLS"],
    solutions: [
      "Code-splitting, prefetching",
      "Skeletons + image ratio handling",
    ],
    impact: {
      metrics: "~22% conversion lift, ~18% faster TTI on mobile",
      businessValue: "Higher sales conversion and UX",
    },
    links: {
      liveDemo: "#",
      githubRepo: "#",
      playStore: "#",
    },
    screenshots: [],
  },
  {
    title: "InsightForge",
    type: "tool",
    description:
      "Internal developer tooling that generates service templates, CI configs, and dashboards to standardize delivery.",
    role: "Platform Engineer",
    company: "Acme Corp",
    startDate: "Jan 2022",
    endDate: "Aug 2022",
    technologies: ["Next.js", "Node.js", "GraphQL", "TypeScript"],
    responsibilities: [
      "Authored generators and service blueprints",
      "Built web UI for templates and metrics",
      "Documented workflows and onboarded teams",
    ],
    features: ["Template library", "CI scaffolding", "Metrics widgets"],
    challenges: ["Aligning templates across teams"],
    solutions: ["Composable templates + guardrails"],
    impact: {
      metrics: "~40% faster project bootstrap",
      businessValue: "Consistency and reduced maintenance",
    },
    links: {
      githubRepo: "#",
      caseStudy: "#",
    },
    screenshots: [],
  },
];

// Freelance work (dummy data based on your backend schema)
const freelanceItems: WorkItem[] = [
  {
    title: "SaaS Landing Revamp",
    type: "website",
    description:
      "Redesigned a B2B SaaS marketing site to improve messaging clarity, accessibility, and conversion performance.",
    role: "Freelance Frontend Developer",
    company: "Freelance",
    startDate: "Feb 2024",
    endDate: "Apr 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    responsibilities: [
      "Rebuilt UI with accessible components",
      "Added SEO and Open Graph enhancements",
      "Integrated analytics and event tracking",
    ],
    features: ["A/B test hooks", "Component library", "Blog templates"],
    challenges: ["Maintain speed with rich visuals"],
    solutions: ["Optimized images, MDX for content"],
    impact: {
      metrics: "+15% lead form submissions",
      businessValue: "Improved top-of-funnel conversions",
    },
    links: { liveDemo: "#", githubRepo: "#", caseStudy: "#" },
    screenshots: [],
  },
  {
    title: "Fitness Tracker Lite",
    type: "app",
    description:
      "A minimal cross-device fitness tracking app with goal planning and progress insights.",
    role: "Solo Developer",
    company: "Freelance",
    startDate: "Sep 2023",
    endDate: "Nov 2023",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    responsibilities: [
      "Architected schema and auth",
      "Implemented tracking flows",
      "Shipped PWA + offline states",
    ],
    features: ["Goals", "Progress charts", "Reminders"],
    challenges: ["Offline sync and conflict handling"],
    solutions: ["Background sync with optimistic UI"],
    impact: {
      metrics: "~35% weekly active retention (M1)",
      businessValue: "Stickier engagement for early users",
    },
    links: { liveDemo: "#", githubRepo: "#" },
    screenshots: [],
  },
  {
    title: "Portfolio CMS Toolkit",
    type: "tool",
    description:
      "Headless CMS starter with content models, preview, and asset pipeline aimed at freelancers and creators.",
    role: "Freelance Developer",
    company: "Freelance",
    startDate: "Jun 2023",
    endDate: "Jul 2023",
    technologies: ["Next.js", "TypeScript", "Contentful", "Tailwind CSS"],
    responsibilities: [
      "Wrote content model scaffolds",
      "Built preview + draft flows",
      "Automated deployments via CI",
    ],
    features: ["Draft previews", "Image pipeline", "MDX blocks"],
    challenges: ["Model flexibility vs simplicity"],
    solutions: ["Composable schema presets"],
    impact: {
      metrics: "~50% faster content publishing",
      businessValue: "Reduced time-to-publish for creators",
    },
    links: { githubRepo: "#", caseStudy: "#" },
    screenshots: [],
  },
];

function TypeBadge({ type }: { type: WorkItem["type"] }) {
  const labelMap: Record<WorkItem["type"], string> = {
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

function WorkCard({ item }: { item: WorkItem }) {
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
          {item.description}
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
      <main className="pt-16 pb-20">
        {/* Hero */}
        <section className="py-12">
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
              {industryItems.map((item) => (
                <WorkCard key={item.title} item={item} />
              ))}
            </div>
          </Container>
        </section>

        {/* Freelance Work */}
        <section className="py-8">
          <Container>
            <SectionHeading>Freelance Work</SectionHeading>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {freelanceItems.map((item) => (
                <WorkCard key={item.title} item={item} />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
