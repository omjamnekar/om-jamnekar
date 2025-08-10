import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";
import SocialIcons from "@/components/SocialIcons";

const links = [
  { href: "/about", label: "About me" },
  { href: "/#work", label: "My work" },
  { href: "/projects", label: "Projects" },
  { href: "/contributions", label: "Contributions" },
  { href: "/pricing", label: "Price list" },
  { href: "/contact", label: "Contact me" },
  { href: "/en", label: "English" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold tracking-tight">{site.name}</Link>
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:underline underline-offset-4"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex sm:ml-6"><SocialIcons /></div>
        </nav>
      </Container>
    </header>
  );
}
