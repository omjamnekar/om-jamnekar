import { testimonials } from "@/data/testimonials";
import Container from "@/components/Container";

export default function Testimonials() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-lg border border-black/10 dark:border-white/10 p-5 bg-black/5 dark:bg-white/5">
              <blockquote className="text-sm text-black/80 dark:text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-medium">{t.author}{t.role ? ` • ${t.role}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
