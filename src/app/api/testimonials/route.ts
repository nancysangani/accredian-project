import { NextResponse } from "next/server";

export async function GET() {
  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Head of Learning & Development",
      company: "Tech Innovations Corp",
      content:
        "Accredian completely transformed our learning strategy. Within the first month, we saw a 40% increase in employee engagement and tangible skill improvements across the board.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief HR Officer",
      company: "Growth Labs Inc",
      content:
        "The ROI we achieved with Accredian has been nothing short of remarkable. Our team development costs dropped by 35% while outcomes improved significantly.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Learning & Development Manager",
      company: "Innovation Systems LLC",
      content:
        "The personalized learning paths and AI-driven recommendations are exactly what our organization needed. Implementation was seamless and adoption rates exceeded expectations.",
      rating: 5,
      avatar: "👩‍🎓",
    },
    {
      id: 4,
      name: "David Park",
      role: "VP of Talent Development",
      company: "Global Tech Solutions",
      content:
        "Accredian helped us build a culture of continuous learning. The analytics dashboard is incredibly insightful and helps us make data-driven training decisions.",
      rating: 5,
      avatar: "👨‍🎓",
    },
  ];

  // Simulate a slight delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(testimonials);
}
