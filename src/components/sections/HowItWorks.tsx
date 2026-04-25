"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Sign Up",
    description: "Create your account in seconds and set up your team.",
  },
  {
    id: 2,
    title: "Assess Skills",
    description: "Identify skill gaps with AI-powered assessments.",
  },
  {
    id: 3,
    title: "Create Paths",
    description: "Design personalized learning paths for your team.",
  },
  {
    id: 4,
    title: "Track & Improve",
    description: "Monitor progress and celebrate wins in real-time.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in four simple steps and see results in weeks, not
            months.
          </p>
        </div>

        {/* Steps with better spacing */}
        <div ref={ref} className="space-y-8 md:space-y-0">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col relative">
                {/* Step card */}
                <div
                  className="group bg-white rounded-2xl p-8 h-full shadow-sm border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    animation: isVisible
                      ? `slideUp 0.6s ease-out ${index * 0.1}s both`
                      : 'none',
                  }}
                >
                  {/* Top accent line - inside box */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number circle */}
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg mb-6 mx-auto shadow-lg group-hover:shadow-blue-300 group-hover:scale-110 transition-all duration-300">
                    {step.id}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow - positioned outside card */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/3 -right-10 w-10 h-10 flex items-center justify-center pointer-events-none">
                    <svg
                      className="w-6 h-6 text-blue-400 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Layout */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step card */}
                <div
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    animation: isVisible
                      ? `slideUp 0.6s ease-out ${index * 0.1}s both`
                      : 'none',
                  }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number circle */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg mb-4 mx-auto shadow-lg">
                    {step.id}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA below steps */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-gray-600 text-lg font-medium">
            Ready to transform your organization?
          </p>
          <Button size="lg" variant="primary">
            Start Your Free Trial
          </Button>
        </div>
      </Container>
    </section>
  );
}
