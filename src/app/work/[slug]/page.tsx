
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { workProject } from "@/data/workproject";

export function generateStaticParams() {
  return workProject.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = workProject.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    icons: {
      icon: "/logo.svg",
    },
  };
}

export default async function WorkProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = workProject.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="flex flex-row h-[calc(100vh-134px)] relative overflow-hidden">
      {/* Background Image - Full Screen */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${project.image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      />
      
      {/* Gradient Overlay - Black fading to transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      
      {/* Content Section */}
      <div className="relative z-10 flex-1 max-w-3xl p-14 flex items-start">
        <div className="space-y-8">
        

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

        

         
        </div>
      </div>
      
      {/* Empty space for image visibility */}
      <div className="flex-1" />
    </div>
  );
}
