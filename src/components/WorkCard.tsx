"use client";

import Link from "next/link";
import { useState } from "react";

export interface WorkCardProps {
  href: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
}

// Generate a consistent placeholder image
const getPlaceholderImage = () => {
  return `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80&auto=format`;
};

export default function WorkCard({ 
  href, 
  title, 
  summary, 
  tags, 
  image 
}: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const displayImage = image || getPlaceholderImage();

  return (
    <Link 
      href={href}
      className="group block no-underline hover:no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        {/* Image Container - Takes full card */}
        <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-gray-950">
          {/* Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={displayImage}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
                      ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Dark Overlay - stronger at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            {/* Tags at top - only visible on hover */}
            <div className={`absolute top-6 left-6 right-6 flex flex-wrap gap-2 transition-all duration-500
                          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full
                           bg-white/10 backdrop-blur-sm text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title and Description */}
            <div className="space-y-3">
              <h3 className={`text-2xl font-bold text-white transition-all duration-300
                            ${isHovered ? 'transform -translate-y-2' : ''}`}>
                {title}
              </h3>
              
                <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 line-clamp-3
                       ${isHovered 
                       ? 'opacity-100 translate-y-0 max-h-20' 
                       : 'opacity-0 translate-y-4 max-h-0'
                       } overflow-hidden`}>
                {summary}
                </p>

              {/* View Project Button */}
              <div className={`flex items-center gap-2 text-cyan-400 font-medium text-sm
                            transition-all duration-500
                            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span>View Project</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Glowing Border on Hover */}
          <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500
                        ${isHovered 
                          ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]' 
                          : 'border-transparent'
                        }`} />
        </div>
      </div>
    </Link>
  );
}
