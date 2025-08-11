"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";

const stats = [
  {
    number: 50,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    number: 6,
    label: "Years of Experience",
    suffix: ""
  },
  {
    number: 100,
    label: "Client Satisfaction",
    suffix: "%"
  },
  {
    number: 24,
    label: "Hour Support",
    suffix: "/7"
  }
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
