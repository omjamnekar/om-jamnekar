import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-700/20" />
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="absolute top-1/2 right-1/4 opacity-10">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your ideas into reality. Get a free consultation and project estimate today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <div className="flex items-center space-x-4 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
