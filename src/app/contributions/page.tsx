import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contributions" };

export default function ContributionsPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">Contributions</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">Open source and community work (coming soon).</p>
      </Container>
    </div>
  );
}
