import { skills } from "@/data/skills";
import Container from "@/components/Container";

export default function Skills() {
  return (
    <section className="py-12">
      <Container>
  <h2 className="text-2xl font-semibold">What I work with</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s.name} className="text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
              {s.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
