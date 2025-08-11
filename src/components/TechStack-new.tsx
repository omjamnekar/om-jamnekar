import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const technologies1 = [
  { name: "HTML", color: "bg-orange-500", textColor: "text-white" },
  { name: "CSS", color: "bg-blue-500", textColor: "text-white" },
  { name: "JavaScript", color: "bg-yellow-500", textColor: "text-black" },
  { name: "TypeScript", color: "bg-blue-600", textColor: "text-white" },
  { name: "Hugo", color: "bg-pink-500", textColor: "text-white" },
  { name: "React", color: "bg-cyan-400", textColor: "text-black" },
  { name: "Next.js", color: "bg-black", textColor: "text-white" },
  { name: "Vite", color: "bg-purple-500", textColor: "text-white" },
];

const technologies2 = [
  { name: "Java", color: "bg-red-600", textColor: "text-white" },
  { name: "Spring", color: "bg-green-500", textColor: "text-white" },
  { name: "Express", color: "bg-gray-700", textColor: "text-white" },
  { name: "PostgreSQL", color: "bg-blue-700", textColor: "text-white" },
  { name: "MariaDB", color: "bg-blue-800", textColor: "text-white" },
  { name: "Node.js", color: "bg-green-600", textColor: "text-white" },
  { name: "Rust", color: "bg-orange-600", textColor: "text-white" },
  { name: "Git", color: "bg-red-500", textColor: "text-white" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-gray-900">
      <Container>
        <SectionHeading>What I work with</SectionHeading>
        
        {/* First row of tech badges */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-4 tech-scroll">
            {[...technologies1, ...technologies1, ...technologies1].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className={`flex items-center gap-3 ${tech.color} hover:scale-105 transition-all duration-300 rounded-lg px-5 py-3 min-w-fit shadow-lg border border-gray-700/30`}
              >
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className={`text-sm font-semibold whitespace-nowrap ${tech.textColor}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row in reverse */}
        <div className="mt-6 overflow-hidden">
          <div className="flex gap-4 tech-scroll-reverse">
            {[...technologies2, ...technologies2, ...technologies2].map((tech, index) => (
              <div
                key={`${tech.name}-reverse-${index}`}
                className={`flex items-center gap-3 ${tech.color} hover:scale-105 transition-all duration-300 rounded-lg px-5 py-3 min-w-fit shadow-lg border border-gray-700/30`}
              >
                <div className="w-2 h-2 rounded-full bg-white/60" />
                <span className={`text-sm font-semibold whitespace-nowrap ${tech.textColor}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
