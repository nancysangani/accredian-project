import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 -z-10 animate-pulse" />
      <div className="absolute -bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-5 -z-10" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-500 to-transparent"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(33, 150, 243, .1) 25%, rgba(33, 150, 243, .1) 26%, transparent 27%, transparent 74%, rgba(33, 150, 243, .1) 75%, rgba(33, 150, 243, .1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Your Workforce?
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
            Join thousands of companies that are already using Accredian to
            accelerate team development and drive measurable business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" variant="primary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="light">
              Schedule Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 space-y-3 text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required. Start in 2 minutes.
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Access all features during trial period.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
