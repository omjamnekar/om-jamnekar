"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I specialize in modern technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. I choose the best tech stack based on your project requirements and goals.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes! I offer maintenance packages that include regular updates, security monitoring, performance optimization, and technical support to keep your website running smoothly.",
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer:
      "Absolutely! I can help you choose the right hosting solution, set up your domain, and handle the entire deployment process. I work with platforms like Vercel, Netlify, and AWS.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "I offer flexible pricing based on project scope. This includes fixed-price projects for defined requirements and hourly rates for ongoing work. Contact me for a detailed quote tailored to your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with clients worldwide. I'm experienced in remote collaboration and use tools like Slack, Zoom, and project management platforms to ensure smooth communication.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Definitely! I can help modernize your existing website, improve its performance, enhance user experience, and ensure it's mobile-responsive and SEO-optimized.",
  },
  {
    question: "What if I need changes after the project is complete?",
    answer:
      "I provide a revision period after project completion. For ongoing changes, I offer maintenance packages or can work on an hourly basis for additional features and updates.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <Container>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <p className="text-gray-300 text-center mt-4 mb-12 max-w-2xl mx-auto">
          Got questions? Here are answers to the most common questions I receive
          from clients.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 bg-black text-white font-medium rounded-lg shadow-lg relative no-underline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-cyan-400 hover:bg-gray-900"
            style={{
              boxShadow: "0 4px 24px 0 rgba(0, 123, 255, 0.15)",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </div>
      </Container>
    </section>
  );
}
