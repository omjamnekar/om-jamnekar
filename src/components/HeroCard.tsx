import Container from "@/components/Container";
import { site } from "@/data/site";
import { Mail, Github, Instagram, MapPin } from "lucide-react";

export default function HeroCard() {
  return (
    <section className="pt-16 pb-12">
      <Container>
        <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/20">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-white">
                {site.name}
              </h1>
              
              <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" /> {site.location}
              </p>
              
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                I&apos;m 16-year-old {site.title}. I have been programming for more than 6 years. I create professional websites.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
            <a 
              href={`mailto:${site.email}`} 
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-gray-300" />
            </a>
            <a 
              href={site.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-300" />
            </a>
            <a 
              href={site.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-300" />
            </a>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
