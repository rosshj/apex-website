export type BlogCategory = "Guide" | "Training" | "Data";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date for <time datetime> and sitemap lastModified */
  date: string;
  /** Human-readable date for display */
  dateLabel: string;
  readTime: string;
  category: BlogCategory;
  /** Tailwind gradient classes for accent glow on cards */
  accent: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-to-use-apex",
    title:
      "How to use Apex: your first vert measurement in under a minute",
    excerpt:
      "A walkthrough from opening the app the first time to saving your first jump — plus the small things that make every reading more accurate.",
    date: "2026-05-13",
    dateLabel: "May 13, 2026",
    readTime: "4 min read",
    category: "Guide",
    accent: "from-orange-400/30 to-rose-500/20",
  },
  {
    slug: "exercises-to-increase-your-vertical",
    title:
      "Eight exercises that actually increase your vertical jump",
    excerpt:
      "Strength, plyometrics, and mobility work that move the needle — plus a simple four-week template you can run with two sessions a week.",
    date: "2026-05-10",
    dateLabel: "May 10, 2026",
    readTime: "7 min read",
    category: "Training",
    accent: "from-amber-300/30 to-orange-500/20",
  },
  {
    slug: "average-vertical-jump",
    title:
      "What's the average vertical jump? By age, sport, and skill level",
    excerpt:
      "How high the average adult, recreational baller, and NBA athlete jumps — and what counts as good, athletic, or elite at every level.",
    date: "2026-05-06",
    dateLabel: "May 6, 2026",
    readTime: "6 min read",
    category: "Data",
    accent: "from-blue-400/30 to-cyan-300/20",
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Returns the other posts, useful for "Keep reading" links. */
export function getRelatedPosts(slug: string, limit = 2): BlogPostMeta[] {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
}
