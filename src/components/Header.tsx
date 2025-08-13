'use client'

import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/posts", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
                  onClick={(e) => handleScrollToSection(e, l.href)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* <div className="text-gray-400 text-sm">
            Čeština
          </div> */}
        </nav>
      </Container>
    </header>
  );
}
