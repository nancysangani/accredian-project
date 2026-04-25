"use client";

import Container from "../ui/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Companies Using", value: "10,000+" },
  { label: "Hours of Content", value: "5,000+" },
  { label: "User Satisfaction", value: "98%" },
  { label: "Average ROI", value: "340%" },
];

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-5 -z-10" />

      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center text-white transform hover:scale-110 transition-all duration-300"
              style={{
                animation: isVisible
                  ? `slideUp 0.6s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl -z-10" />

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {stat.value}
                </div>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
