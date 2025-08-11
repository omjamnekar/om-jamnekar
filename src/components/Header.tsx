import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/#work", label: "My work" },
  { href: "/projects", label: "Projects" },
  { href: "/posts", label: "Posts" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Me" },
];

export default function Header() {
  return (
    <header className="bg-black">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="font-semibold text-white text-lg"
          >
            {site.name}
          </Link>
          
          <ul className="hidden sm:flex gap-8 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="text-gray-400 text-sm">
            Čeština
          </div>
        </nav>
      </Container>
    </header>
  );
}
