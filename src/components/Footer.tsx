import Container from "@/components/Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <Container>
        <div className="flex flex-col items-center space-y-3 text-gray-400 text-sm sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          {/* Copyright */}
          <div className="flex flex-col items-center space-y-1 sm:flex-row sm:space-x-1 sm:space-y-0">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <span className="hidden sm:inline">|</span>
            <span>All rights reserved</span>
          </div>

        
        </div>
      </Container>
    </footer>
  );
}
