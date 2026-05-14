import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, training, and data on the vertical jump — from the team behind Apex.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${siteConfig.name}`,
    description:
      "Guides, training, and data on the vertical jump — from the team behind Apex.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden">
          <div className="apex-mesh-bg" />
          <div className="absolute inset-0 apex-hero-glow pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                Apex Blog
              </p>
              <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                Jump higher.
                <br />
                <span className="bg-gradient-to-br from-orange-300 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Measure smarter.
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Guides for getting the most out of Apex, training plans that
                actually move the needle, and honest data on where every kind
                of athlete stacks up.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative apex-card rounded-3xl p-6 overflow-hidden hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div
                    aria-hidden
                    className={`absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-60 blur-3xl bg-gradient-to-br ${post.accent}`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em]">
                      <span className="text-accent font-medium">
                        {post.category}
                      </span>
                      <span aria-hidden className="text-white/20">
                        ·
                      </span>
                      <span className="text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground/80">
                      <time dateTime={post.date}>{post.dateLabel}</time>
                      <span className="inline-flex items-center gap-1 text-foreground/80 group-hover:text-accent transition-colors">
                        Read
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
