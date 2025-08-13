"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@iconify/react";
import { technologies2, technologies1 } from "@/data/work"; 



export default function TechStack() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading>What I work with</SectionHeading>
        
        {/* Auto-scrolling tech stack - Two lines */}
        <div className="mt-8 space-y-4">
          {/* First line - scrolling left to right */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 scroll-left hover:paused"
              style={{
                width: 'max-content',
                animation: 'scrollLeft 30s linear infinite'
              }}
            >
              {[...technologies1, ...technologies1].map((tech, index) => (
                <div
                  key={`line1-${tech.name}-${index}`}
                  className="flex items-center gap-2 bg-transparent text-white text-sm rounded-lg px-4 py-2 border border-gray-700 whitespace-nowrap"
                >
                  <Icon 
                    icon={tech.icon} 
                    className="text-white w-4 h-4"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Second line - scrolling right to left */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 scroll-right hover:paused"
              style={{
                width: 'max-content',
                animation: 'scrollRight 35s linear infinite'
              }}
            >
              {[...technologies2, ...technologies2].map((tech, index) => (
                <div
                  key={`line2-${tech.name}-${index}`}
                  className="flex items-center gap-2 bg-transparent text-white text-sm rounded-lg px-4 py-2 border border-gray-700 whitespace-nowrap"
                >
                  <Icon 
                    icon={tech.icon} 
                    className="text-white w-4 h-4"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
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
            animation: scrollLeft 30s linear infinite;
          }
          
          .scroll-right {
            animation: scrollRight 35s linear infinite;
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
