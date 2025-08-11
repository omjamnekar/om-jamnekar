import Container from "@/components/Container";
import { site } from "@/data/site";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 mt-20">
      <Container>
        <div className="flex flex-col items-center space-y-6">
          {/* Made with section */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Made with
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
              <span>Next.js</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          {/* Source code link */}
          <a
            href="https://github.com/yourusername/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <Github size={16} />
            <span className="text-sm">Source code</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
