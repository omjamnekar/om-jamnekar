import Container from "@/components/Container";
import { site } from "@/data/site";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 mt-20">
      <Container>
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright with year */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>{site.name}</span>
            <span>|</span>
            <span>Created in the Czech Republic</span>
          </div>

          {/* Built with section */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using</span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Next.js
            </a>
            <span>.</span>
            <span>Look at some of my projects on</span>
            <a 
              href={site.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
            <span>.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
