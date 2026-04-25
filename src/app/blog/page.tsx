import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Accredian - Enterprise Learning Platform",
  description:
    "Read the latest insights on AI-powered learning, employee development, and corporate training best practices.",
  openGraph: {
    title: "Blog | Accredian",
    description:
      "Read the latest insights on AI-powered learning and corporate training.",
    type: "website",
  },
};

export default function BlogPage() {
  const articles = getAllArticles();
  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200">
        <Container>
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Learning Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover best practices, industry trends, and actionable insights
              on AI-powered learning and employee development.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group h-full"
                >
                  <article className="h-full flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    {/* Colored header based on tags */}
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600" />

                    <div className="flex-1 p-8 flex flex-col">
                      {/* Tags */}
                      <div className="flex gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 flex-1">
                        {article.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <span>{article.author}</span>
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            All Articles
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {regularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <time>{new Date(article.date).toLocaleDateString()}</time>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
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
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <Container>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to transform your learning program?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Start a free 30-day trial of Accredian and see how AI-powered
              learning can drive real business results.
            </p>
            <div className="mt-8">
              <Link
                href="/#lead-capture"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
