"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";

const links = [
  {
    href: "/about",
    label: "About",
    description: "Discover my journey, skills, and background.",
  },
  {
    href: "/services",
    label: "Services",
    description: "Explore the professional solutions I provide.",
  },
  // {
  //   href: "/posts",
  //   label: "Blog",
  //   description: "Read insights, tutorials, and industry updates.",
  // },
  {
    href: "/contact",
    label: "Contact",
    description: "Let’s collaborate—get in touch with me easily.",
  },
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
          {/* Logo / Name */}
          <Link href="/" className="font-semibold text-white text-lg">
            {site.name}
          </Link>

          {/* Desktop links */}
          <ul className="hidden min-[651px]:flex gap-8 text-sm">
            {links.map((l) => (
              <li key={l.href} className="relative group">
                <Link
                  href={l.href}
                  onClick={(e) => handleScrollToSection(e, l.href)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>

                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-black-900 border border-gray-700 text-white rounded-xl shadow-lg p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                  <h4 className="font-semibold text-sm mb-1">{l.label}</h4>
                  <p className="text-xs text-gray-400 leading-snug">
                    {l.description}
                  </p>
                </div>
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
              <ul className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={(e) => {
                        handleScrollToSection(e, l.href);
                        setMenuOpen(false);
                      }}
                      className="block px-4 py-3 hover:bg-gray-800 transition-colors"
                    >
                      <h4 className="text-white font-semibold">{l.label}</h4>
                      <p className="text-xs text-gray-400">{l.description}</p>
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
