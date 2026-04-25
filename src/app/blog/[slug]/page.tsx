import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import {
  getArticleBySlug,
  getRelatedArticles,
  getAllArticles,
} from "@/lib/blog";

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Accredian Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    authors: [{ name: article.author }],
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug, 3);
  const publishDate = new Date(article.date);
  const formattedDate = publishDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Simple markdown to HTML converter
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line, i) => {
        // Headings
        if (line.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("# ")) {
          return null; // Skip main title, already shown above
        }

        // Lists
        if (line.startsWith("- ")) {
          return (
            <li key={i} className="ml-4 text-gray-700 mb-2">
              {line.replace("- ", "")}
            </li>
          );
        }

        // Empty lines
        if (line.trim() === "") {
          return <div key={i} className="h-4" />;
        }

        // Regular paragraphs
        if (line.trim()) {
          return (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {line}
            </p>
          );
        }

        return null;
      })
      .filter(Boolean);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-gray-600 flex-wrap">
            <span className="font-medium">{article.author}</span>
            <span>•</span>
            <time>{formattedDate}</time>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Article Body */}
            <article className="prose prose-lg max-w-none mb-16">
              <div className="text-gray-800 leading-relaxed">
                {renderContent(article.content)}
              </div>
            </article>

            {/* Article Footer */}
            <div className="border-t border-b border-gray-200 py-8 my-12">
              <div className="flex items-center gap-4">
                <div className="text-3xl">👤</div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {article.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    Industry expert and thought leader on corporate learning and
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group"
                >
                  <article className="h-full flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 p-6">
                    {/* Tags */}
                    <div className="flex gap-2 mb-3">
                      {relatedArticle.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                      {relatedArticle.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 flex-1 text-sm line-clamp-3">
                      {relatedArticle.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <span>{relatedArticle.author}</span>
                      <span>•</span>
                      <span>{relatedArticle.readTime} min</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <Container>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to implement these practices?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Accredian makes it easy to apply learning best practices in your
              organization.
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
