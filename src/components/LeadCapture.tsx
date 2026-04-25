import Container from "./ui/Container";
import LeadCaptureForm from "./LeadCaptureForm";

export default function LeadCapture() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-10 -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-10 -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Start Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Free Trial Today
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join thousands of companies transforming their workforce. No
                credit card required.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {[
                {
                  icon: "✓",
                  title: "Instant Access",
                  description: "Start exploring all features immediately",
                },
                {
                  icon: "✓",
                  title: "No Payment Required",
                  description: "Full access without credit card",
                },
                {
                  icon: "✓",
                  title: "24/7 Support",
                  description: "Our team is here to help you succeed",
                },
              ].map((benefit) => (
                <div key={benefit.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="pt-4 space-y-2">
              <p className="text-sm font-medium text-gray-900">
                Trusted by industry leaders
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    >
                      {i}K+
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Happy customers worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            {/* Card background with glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-10 blur-2xl" />

            {/* Form card */}
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 rounded-t-3xl" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Started
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill in your details below and we'll send you access details
                  </p>
                </div>

                <LeadCaptureForm />
              </div>

              {/* Bottom accent */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
