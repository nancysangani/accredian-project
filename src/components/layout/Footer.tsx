import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#" },
      { name: "Integrations", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Support", href: "#" },
      { name: "Community", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 md:py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(33, 150, 243, .05) 25%, rgba(33, 150, 243, .05) 26%, transparent 27%, transparent 74%, rgba(33, 150, 243, .05) 75%, rgba(33, 150, 243, .05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Accredian
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed opacity-80 hover:opacity-100 transition-opacity">
              Transforming how organizations develop their workforce with
              AI-powered learning.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((linkItem) => (
                  <li key={linkItem.name}>
                    <Link
                      href={linkItem.href}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm group inline-block"
                    >
                      {linkItem.name}
                      <span className="block w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-gray-400 text-sm opacity-80 hover:opacity-100 transition-opacity">
              © {currentYear} Accredian. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-8">
              {/* LinkedIn Logo */}
              <a
                href="https://www.linkedin.com/company/accredian/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 group"
                aria-label="LinkedIn"
                title="Follow us on LinkedIn"
              >
                <svg
                  className="w-6 h-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* X Logo */}
              <a
                href="https://twitter.com/accredian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 group"
                aria-label="X"
                title="Follow us on X"
              >
                <svg
                  className="w-6 h-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694L2.306 21.75H-1.21l7.527-8.605L-1.424 2.25h6.67l4.872 6.434z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="h-1 bg-gradient-to-r from-blue-600/50 via-cyan-600/50 to-blue-600/50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Container>
    </footer>
  );
}
