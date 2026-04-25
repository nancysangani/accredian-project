"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        // Fallback to static data if API fails
        setTestimonials([
          {
            id: 1,
            name: "Sarah Johnson",
            role: "Head of Learning",
            company: "Tech Corp",
            content:
              "Accredian transformed how we develop our team. The results were visible within the first month.",
            rating: 5,
            avatar: "👩‍💼",
          },
          {
            id: 2,
            name: "Michael Chen",
            role: "CEO",
            company: "Growth Labs",
            content:
              "Best investment we made for our workforce development. The ROI is incredible.",
            rating: 5,
            avatar: "👨‍💼",
          },
          {
            id: 3,
            name: "Emily Rodriguez",
            role: "Learning Manager",
            company: "Innovation Inc",
            content:
              "The personalized learning paths are game-changing. Our team loves it.",
            rating: 5,
            avatar: "👩‍🎓",
          },
          {
            id: 4,
            name: "David Park",
            role: "Operations Director",
            company: "Future Systems",
            content:
              "The platform is intuitive and powerful. Our employees are more engaged than ever.",
            rating: 5,
            avatar: "👨‍💼",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (!autoRotate || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  const handlePrev = () => {
    setAutoRotate(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoRotate(false);
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setAutoRotate(false);
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section id="testimonials" className="py-20 md:py-32 bg-white">
        <Container>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        </Container>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <Container>
        <div
          ref={ref}
          className="text-center space-y-4 mb-16"
          style={{
            animation: isVisible ? 'slideUp 0.6s ease-out both' : 'none',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
          style={{
            animation: isVisible ? 'slideUp 0.6s ease-out 0.1s both' : 'none',
          }}
        >
          {/* Main Testimonial Card */}
          <div className="group relative mb-8">
            {/* Animated gradient background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-gray-200 group-hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 rounded-t-2xl" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-8 leading-relaxed font-medium text-center text-lg group-hover:text-gray-900 transition-colors duration-300">
                "{currentTestimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-200 justify-center flex-col">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {currentTestimonial.avatar}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentTestimonial.role} @ {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between md:gap-4 mb-8">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicator Text */}
          <p className="text-center text-sm text-gray-500">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </Container>
    </section>
  );
}
