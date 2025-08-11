"use client";

import { testimonials } from "@/data/testimonials";
import Container from "@/components/Container";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Quote Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 text-cyan-500/15 text-[10rem] font-bold transform -rotate-12">"</div>
        <div className="absolute bottom-40 left-1/4 text-cyan-300/15 text-[14rem] font-bold transform rotate-45">"</div>
        <div className="absolute bottom-20 right-16 text-cyan-400/15 text-[8rem] font-bold transform -rotate-30">"</div>
        <div className="absolute top-1/2 left-16 text-cyan-500/15 text-[16rem] font-bold transform rotate-90">"</div>
        <div className="absolute bottom-60 right-1/4 text-cyan-400/15 text-[11rem] font-bold transform rotate-12">"</div>
      </div>
      
      <Container>
        <SectionHeading>Testimonials</SectionHeading>
        <div className="mt-12 relative z-10">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="mb-8 last:mb-0"
            >
              {/* Funky comment-style bubble with darker color */}
              <div className="relative bg-black border border-gray-900 rounded-2xl p-8 max-w-4xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30">
                {/* Enhanced quote mark with glow effect */}
                <div className="absolute -top-4 left-8 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl font-bold drop-shadow-lg">"</span>
                </div>
                
                {/* Testimonial content with better styling */}
                <div className="pt-6">
                  <blockquote className="text-gray-100 leading-relaxed text-lg font-medium italic">
                    {t.quote}
                  </blockquote>
                  
                  {/* Author info with enhanced design */}
                  <div className="mt-8 flex items-center justify-end">
                    <div className="text-right mr-4">
                      <div className="font-bold text-white text-xl tracking-wide">
                        {t.author}
                      </div>
                      {t.role && (
                        <div className="text-sm text-cyan-400 font-medium">
                          {t.role}
                        </div>
                      )}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-gray-700 hover:scale-105 transition-transform duration-300">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced chat bubble tail with gradient */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-0 h-0 border-l-[24px] border-l-transparent border-t-[18px] border-t-gray-800 drop-shadow-md"></div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
