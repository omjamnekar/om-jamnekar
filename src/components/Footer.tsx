import Container from "@/components/Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-16">
      <Container>
        <p className="text-sm text-center text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
