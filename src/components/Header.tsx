"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";

const links = [
  { href: "/about", label: "About" },
  // { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/posts", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-black">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-white text-lg">
            {site.name}
          </Link>

          {/* Desktop links */}
          <ul className="hidden min-[651px]:flex gap-8 text-sm">
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

          {/* Mobile dropdown */}
          <div className="min-[651px]:hidden relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-white hover:text-blue-500 focus:outline-none"
              aria-label="Open menu"
            >
              {/* Hamburger icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded shadow-lg z-50">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={(e) => {
                        handleScrollToSection(e, l.href);
                        setMenuOpen(false);
                      }}
                      className="block px-4 py-2 text-white hover:text-blue-500 hover:bg-gray-800 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
