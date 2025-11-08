"use client";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
// import "@/app/styles/timeline.css";
import { experiences } from "@/data/experience";



import { useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8">
          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className="timeline-item group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`timeline-dot transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'scale-125 shadow-[0_0_15px_rgba(34,211,238,0.6)]' 
                    : 'scale-100'
                }`} />
                <div className={`timeline-content transition-all duration-300 ${
                  hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'
                }`}>
                  <h3>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-xl text-cyan-400 hover:text-cyan-300 transition-all duration-300 
                                 inline-flex items-center gap-2 no-underline hover:no-underline
                                 group-hover:gap-3"
                      >
                        {exp.company}
                        <svg 
                          className={`w-4 h-4 transition-all duration-300 ${
                            hoveredIndex === index 
                              ? 'opacity-100 translate-x-0 rotate-0' 
                              : 'opacity-0 -translate-x-2 -rotate-45'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </a>
                    ) : (
                      <span className="font-medium text-xl text-cyan-400">
                        {exp.company}
                      </span>
                    )}
                  </h3>
                  <h4 className={`text-white font-bold text-lg transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-gray-100' : 'text-white'
                  }`}>
                    {exp.role}
                  </h4>
                  <div className={`date text-gray-400 text-sm mt-2 font-medium transition-all duration-300 ${
                    hoveredIndex === index ? 'text-cyan-300' : 'text-gray-400'
                  }`}>
                   {exp.period}
                  </div>
                  <div className={`description text-gray-300 mt-3 leading-relaxed transition-all duration-300 ${
                    hoveredIndex === index ? 'text-gray-200' : 'text-gray-300'
                  }`}>
                    {exp.summary}
                  </div>
                  
                  {/* Animated bottom border */}
                  <div className={`mt-4 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 
                                transition-all duration-500 origin-left ${
                    hoveredIndex === index ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
