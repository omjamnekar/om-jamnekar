"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ApiConstant from "@/core/constants/api";
import type { TechStack } from "@/core/model/techstack";
import { TechState } from "@/core/model/techstack";

export default function TechStack() {
  const [state, setState] = useState<TechState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(ApiConstant.getSkill, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch user details");
        }
        const json = await res.json();
        const skills = json["skillcategorys"].flatMap(
          (c: TechStack) => c.skills
        );
        const mid = Math.ceil(skills.length / 2);
        const list1 = skills.slice(0, mid);
        const list2 = skills.slice(mid);

        setState({
          data: [list1, list2],
          loading: false,
          error: null,
        });
      } catch (err: unknown) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : "Unknown error occurred",
        });
      }
    }
    fetchUser();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>What I work with</SectionHeading>

        {/* Loading and error handling */}
        {state.loading && <TechStackSkeleton />}
        {state.error && (
          <div className="text-center text-red-500 py-8">{state.error}</div>
        )}

        {/* Auto-scrolling tech stack - Two lines */}
        {!state.loading && !state.error && state.data && (
          <div className="mt-8 space-y-4">
            {/* First line - scrolling left to right */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 scroll-left hover:paused"
                style={{
                  width: "max-content",
                  animation: "scrollLeft 55s linear infinite",
                }}
              >
                {[...state.data[0], ...state.data[0]].map((tech, index) => (
                  <div
                    key={`line1-${tech}-${index}`}
                    className="flex items-center gap-2 bg-transparent text-white text-sm rounded-lg px-4 py-2 border border-gray-700 whitespace-nowrap"
                  >
                    <Icon
                      icon={`logos:${tech.toLowerCase()}`}
                      className="text-white w-4 h-4"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Second line - scrolling right to left */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 scroll-right hover:paused"
                style={{
                  width: "max-content",
                  animation: "scrollRight 60s linear infinite",
                }}
              >
                {[...state.data[1], ...state.data[1]].map((tech, index) => (
                  <div
                    key={`line2-${tech}-${index}`}
                    className="flex items-center gap-2 bg-transparent text-white text-sm rounded-lg px-4 py-2 border border-gray-700 whitespace-nowrap"
                  >
                    <Icon
                      icon={`logos:${tech.toLowerCase()}`}
                      className="text-white w-4 h-4"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scrollRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .scroll-left {
            animation: scrollLeft 60s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 70s linear infinite;
          }

          .scroll-left:hover {
            animation-play-state: paused;
          }

          .scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </Container>
    </section>
  );
}

// components/TechStackSkeleton.tsx
function TechStackSkeleton() {
  return (
    <div className="mt-8 space-y-4">
      {/* First line skeleton */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 scroll-left"
          style={{
            width: "max-content",
            animation: "scrollLeft 50s linear infinite",
          }}
        >
          {[...Array(8)].map((_, index) => (
            <div
              key={`skeleton-line1-${index}`}
              className="flex items-center gap-2 bg-transparent text-white text-sm rounded-lg px-4 py-2 border border-gray-700 whitespace-nowrap animate-pulse"
            >
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-3 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Second line skeleton */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 scroll-right"
          style={{
            width: "max-content",
            animation: "scrollRight 55s linear infinite",
          }}
        >
          {[...Array(8)].map((_, index) => (
            <div
              key={`skeleton-line2-${index}`}
              className="flex items-center gap-2 bg-transparent text-white text-sm rounded-lg px-4 py-2 border border-gray-700 whitespace-nowrap animate-pulse"
            >
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-3 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
