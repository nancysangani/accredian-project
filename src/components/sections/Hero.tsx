import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-20 left-10 -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Workforce
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empower your team with AI-driven learning solutions that drive
                real business impact and skill development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 pt-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>4.9/5 rating (500+)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>10,000+ companies</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-300 rounded-3xl opacity-15 blur-3xl animate-pulse" />

              {/* Main card with refined styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border border-white overflow-hidden">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400" />

                {/* Content */}
                <div className="h-full flex flex-col items-center justify-center space-y-6 p-8">
                  {/* Animated icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-2">
                    <p className="text-lg font-semibold text-gray-900">
                      AI-Powered Learning
                    </p>
                    <p className="text-sm text-gray-500 max-w-xs">
                      Personalized paths tailored to your team's unique needs
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
