"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { site } from "@/data/site";
import { Mail, Github, MapPin, MoreVertical, Linkedin } from "lucide-react";

export default function HeroCard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="pt-16 pb-12">
      <Container>
        <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/20">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-white">
                {site.name}
              </h1>
              <a
                href="https://www.google.com/maps?q=Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm mb-6 flex items-center gap-2 hover:underline"
                aria-label="View location on map"
              >
                <MapPin className="w-4 h-4 text-white" /> Mumbai, India
              </a>
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                I&apos;m a 21-year-old {site.title}. I have been programming for
                more than 3 years. I create professional Apps.
              </p>
            </div>

            {/* Social Links for large screens */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group  relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-300" />
                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-gray-300" />
                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="X"
              >
                {/* X (Twitter) SVG logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-gray-300"
                >
                  <path
                    d="M17.53 3H21.5L14.42 10.73L22.75 21H16.44L11.38 14.62L5.72 21H1.75L9.23 12.73L1.25 3H7.74L12.36 9.67L17.53 3ZM16.41 19.13H18.13L7.66 4.77H5.82L16.41 19.13Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  X
                </span>
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="Linkedin"
              >
                <Linkedin className="w-4 h-4 text-gray-300" />
                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </a>
              <a
                href={site.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="LeetCode"
              >
                {/* Add LeetCode SVG icon directly */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-4 h-4 text-gray-300"
                >
                  <path
                    d="M21.7 7.8c-2.2-2.2-5.8-2.2-8 0l-7.1 7.1c-2.2 2.2-2.2 5.8 0 8l7.1 7.1c2.2 2.2 5.8 2.2 8 0l2.7-2.7a1.25 1.25 0 1 0-1.8-1.8l-2.7 2.7c-1.3 1.3-3.4 1.3-4.7 0l-7.1-7.1c-1.3-1.3-1.3-3.4 0-4.7l7.1-7.1c1.3-1.3 3.4-1.3 4.7 0l2.7 2.7a1.25 1.25 0 1 0 1.8-1.8l-2.7-2.7zm-2.8 8.2a1.25 1.25 0 1 0 0 2.5h6a1.25 1.25 0 1 0 0-2.5h-6z"
                    fill="currentColor"
                  />
                </svg>

                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Leetcode
                </span>
              </a>
            </div>

            {/* Dropdown for small screens */}
            <div className="sm:hidden relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="More"
              >
                <MoreVertical className="w-4 h-4 text-gray-300" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-10">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-t-lg"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={site.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800"
                    aria-label="X"
                  >
                    {/* X (Twitter) SVG logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 text-primary"
                    >
                      <path
                        d="M17.53 3H21.5L14.42 10.73L22.75 21H16.44L11.38 14.62L5.72 21H1.75L9.23 12.73L1.25 3H7.74L12.36 9.67L17.53 3ZM16.41 19.13H18.13L7.66 4.77H5.82L16.41 19.13Z"
                        fill="currentColor"
                      />
                    </svg>
                    X
                  </a>
                  <a
                    href={site.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800"
                    aria-label="LeetCode"
                  >
                    {/* Add LeetCode SVG icon directly */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="w-4 h-4 text-primary"
                    >
                      <path
                        d="M21.7 7.8c-2.2-2.2-5.8-2.2-8 0l-7.1 7.1c-2.2 2.2-2.2 5.8 0 8l7.1 7.1c2.2 2.2 5.8 2.2 8 0l2.7-2.7a1.25 1.25 0 1 0-1.8-1.8l-2.7 2.7c-1.3 1.3-3.4 1.3-4.7 0l-7.1-7.1c-1.3-1.3-1.3-3.4 0-4.7l7.1-7.1c1.3-1.3 3.4-1.3 4.7 0l2.7 2.7a1.25 1.25 0 1 0 1.8-1.8l-2.7-2.7zm-2.8 8.2a1.25 1.25 0 1 0 0 2.5h6a1.25 1.25 0 1 0 0-2.5h-6z"
                        fill="currentColor"
                      />
                    </svg>
                    Leetcode
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
