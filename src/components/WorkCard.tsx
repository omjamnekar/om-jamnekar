"use client";

import Link from "next/link";

export interface WorkCardProps {
  href: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
}

export default function WorkCard({ 
  href, 
  title, 
  summary, 
  tags, 
  image 
}: WorkCardProps) {

  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden border border-gray-700 bg-gray-900 hover:border-gray-600 transition-all duration-500 min-h-[400px]">
        {/* Background Image with Zoom Effect */}
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Fallback background if no image */}
        {!image && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-gray-600 text-8xl opacity-20">🖼️</div>
          </div>
        )}

        {/* Dark overlay with gradient from bottom to top - maintain shade on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-500"></div>
        
        {/* Content at absolute bottom - no space below */}
        <div className="absolute bottom-0 left-0 right-0 pt-6 px-6 pb-0 z-10">
          {/* Main Content - lifts up slightly on hover */}
          <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-8">
            <h3 className="font-semibold text-xl text-white mb-2 transition-colors duration-300">
              {title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-black text-white rounded border border-gray-700 transition-all duration-300"
                >
                  {/* Tech Stack Icons - Simple white symbols */}
                  {tag === 'Next.js' && <span className="text-white text-[10px]">▲</span>}
                  {tag === 'React' && <span className="text-white text-[10px]">⚛</span>}
                  {tag === 'TypeScript' && <span className="text-white text-[10px]">TS</span>}
                  {tag === 'Tailwind' && <span className="text-white text-[10px]">◉</span>}
                  {tag === 'Charts' && <span className="text-white text-[10px]">📊</span>}
                  {tag === 'API' && <span className="text-white text-[10px]">🔗</span>}
                  {tag === 'UI' && <span className="text-white text-[10px]">UI</span>}
                  {tag === 'Storybook' && <span className="text-white text-[10px]">SB</span>}
                  {tag === 'Design' && <span className="text-white text-[10px]">✎</span>}
                  {tag === 'AI' && <span className="text-white text-[10px]">AI</span>}
                  {tag === 'LLM' && <span className="text-white text-[10px]">LLM</span>}
                  {tag === 'Automation' && <span className="text-white text-[10px]">⚙</span>}
                  {!['Next.js', 'React', 'TypeScript', 'Tailwind', 'Charts', 'API', 'UI', 'Storybook', 'Design', 'AI', 'LLM', 'Automation'].includes(tag) && <span className="text-white text-[10px]">●</span>}
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-200 text-sm leading-relaxed transition-colors duration-300 mb-0">
              {summary}
            </p>
          </div>

          {/* Learn More Button - with bottom spacing */}
          <div className="mb-3 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <Link 
              href={href}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white hover:text-gray-100 text-sm font-medium rounded border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:no-underline"
              style={{ textDecoration: 'none' }}
            >
              Learn more
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
