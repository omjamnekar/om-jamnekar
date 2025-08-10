import { experiences } from "@/data/experience";
import Container from "@/components/Container";

export default function Experience() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 relative">
          <div className="absolute left-[12px] top-1 bottom-1 w-px bg-black/25 dark:bg-white/20" aria-hidden />
          <ol className="pl-9 space-y-9">
            {experiences.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute left-[6px] top-1 inline-block size-3 rounded-full border border-black/50 dark:border-white/40 bg-background" aria-hidden />
                <div>
                  <a href={e.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline underline-offset-4">
                    {e.company}
                  </a>
                  <div className="mt-1 font-semibold">{e.role}</div>
                  <div className="text-xs text-black/60 dark:text-white/60 mt-1">{e.start} {e.end ? `– ${e.end}` : "– Present"}</div>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70 max-w-3xl">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
