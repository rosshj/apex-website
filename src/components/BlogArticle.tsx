import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface HeroImageInput {
  /** Image source. When omitted, a styled placeholder is rendered. */
  src?: string;
  alt: string;
  caption?: string;
}

interface BlogArticleProps {
  post: BlogPostMeta;
  /** Optional hero image rendered between the meta line and the article body. */
  heroImage?: HeroImageInput;
  related?: BlogPostMeta[];
  children: React.ReactNode;
}

export function BlogArticle({
  post,
  heroImage,
  related = [],
  children,
}: BlogArticleProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-8">
      <nav className="flex items-center gap-3 text-sm" aria-label="Breadcrumb">
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Blog
        </Link>
        <span aria-hidden className="text-white/20">
          /
        </span>
        <span className="text-accent uppercase tracking-[0.18em] text-xs font-medium">
          {post.category}
        </span>
      </nav>

      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        {post.title}
      </h1>

      <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
        <time dateTime={post.date}>{post.dateLabel}</time>
        <span aria-hidden className="text-white/20">
          ·
        </span>
        <span>{post.readTime}</span>
      </div>

      {heroImage ? (
        <div className="mt-10">
          <BlogImage
            src={heroImage.src}
            alt={heroImage.alt}
            caption={heroImage.caption}
            aspect="16/9"
          />
        </div>
      ) : null}

      <div className="mt-10 apex-card rounded-3xl p-6 sm:p-10">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>

      {related.length > 0 ? (
        <aside className="mt-16">
          <h2 className="text-xl font-semibold text-foreground">Keep reading</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group apex-card rounded-2xl p-5 hover:-translate-y-0.5 transition-transform"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-medium">
                  {r.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {r.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}
    </article>
  );
}

export function BlogH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2 first:mt-0 text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
      {children}
    </h2>
  );
}

export function BlogH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
      {children}
    </h3>
  );
}

export function BlogP({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed">{children}</p>;
}

export function BlogUL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-orange-400/70">
      {children}
    </ul>
  );
}

export function BlogOL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal space-y-3 pl-6 marker:text-orange-400/70 marker:font-semibold">
      {children}
    </ol>
  );
}

interface BlogImageProps {
  /** Image source. When omitted, a styled placeholder is rendered instead. */
  src?: string;
  /** Required — also used as the visible label inside the placeholder. */
  alt: string;
  caption?: string;
  /** CSS aspect-ratio string (e.g. "16/9", "4/3", "1/1"). Defaults to "16/9". */
  aspect?: string;
}

export function BlogImage({
  src,
  alt,
  caption,
  aspect = "16/9",
}: BlogImageProps) {
  return (
    <figure className="my-2">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02]"
        style={{ aspectRatio: aspect }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 50%, rgba(255, 138, 43, 0.10) 0%, transparent 60%)",
              }}
            />
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="relative text-white/30"
              aria-hidden
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="9"
                cy="10"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 17l5-5 4 4 3-3 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="relative text-[10px] uppercase tracking-[0.22em] font-medium text-orange-400/90">
              Image placeholder
            </div>
            <div className="relative max-w-md text-xs text-muted-foreground/70">
              {alt}
            </div>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BlogCallout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl border border-orange-400/20 bg-orange-400/[0.06] px-5 py-4 text-sm text-white/85">
      {children}
    </aside>
  );
}

interface BlogTableProps {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
}

export function BlogTable({ caption, headers, rows }: BlogTableProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
      {caption ? (
        <div className="px-5 pt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
          {caption}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium text-muted-foreground border-b border-white/10"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-white/5 last:border-0">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      ci === 0
                        ? "px-5 py-3 text-foreground font-medium"
                        : "px-5 py-3 text-muted-foreground tabular-nums"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
