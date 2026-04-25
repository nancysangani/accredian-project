"use client";

import Container from "../ui/Container";
import Accordion from "../ui/Accordion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqItems = [
  {
    id: "faq-1",
    question: "How long does it take to see results with Accredian?",
    answer:
      "Most of our customers see measurable improvements in employee skill levels within 4-6 weeks. The platform uses AI to identify skill gaps and create personalized learning paths, so your team starts learning what they actually need right away. ROI improvements typically become visible within 3-4 months.",
  },
  {
    id: "faq-2",
    question:
      "Can Accredian integrate with our existing learning management system?",
    answer:
      "Yes! Accredian integrates seamlessly with popular LMS platforms including Canvas, Blackboard, Moodle, and Cornerstone OnDemand. We also support custom integrations via our REST API. Our integration team can typically complete setup in less than a week.",
  },
  {
    id: "faq-3",
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support through multiple channels: live chat, email, and phone. Each customer also has a dedicated success manager who helps you maximize ROI through regular check-ins, optimization recommendations, and training. We also provide comprehensive documentation and video tutorials.",
  },
  {
    id: "faq-4",
    question: "How do you handle data security and compliance?",
    answer:
      "Data security is our top priority. We are SOC 2 Type II certified, GDPR compliant, and HIPAA eligible. All data is encrypted in transit and at rest using industry-standard protocols. We conduct regular security audits and penetration testing. Your data is stored in isolated, secure environments.",
  },
  {
    id: "faq-5",
    question: "What happens if we want to export our data?",
    answer:
      "You own your data. You can export all learner data, progress reports, and custom content at any time in standard formats (CSV, JSON, PDF). We provide detailed data export tools in the admin dashboard, and our support team can assist with large exports.",
  },
  {
    id: "faq-6",
    question: "Can I customize the learning content for my organization?",
    answer:
      "Absolutely! Beyond our curated library of 5,000+ courses, you can upload custom content, create branded learning paths, and customize the platform interface to match your company branding. We also support content in multiple languages.",
  },
  {
    id: "faq-7",
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on your organization size and needs. Options include per-user pricing, flat-rate plans, and custom enterprise agreements. There are no setup fees or long-term contracts required. Most customers see ROI within the first 6 months based on improved productivity and reduced training costs.",
  },
  {
    id: "faq-8",
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 30-day free trial that includes full access to the platform. No credit card is required. You get to set up your organization, invite team members, and explore all features. Our onboarding team will help you get started and answer any questions.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <div ref={ref} className="text-center space-y-4 mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{
              animation: isVisible ? "slideUp 0.6s ease-out both" : "none",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{
              animation: isVisible ? "slideUp 0.6s ease-out 0.1s both" : "none",
            }}
          >
            Everything you need to know about Accredian. Can't find the answer
            you're looking for? Reach out to our team.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
          style={{
            animation: isVisible ? "slideUp 0.6s ease-out 0.2s both" : "none",
          }}
        >
          <Accordion items={faqItems} />
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@accredian.com"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
          >
            Contact our support team
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </Container>
    </section>
  );
}
