import type { Metadata } from "next";
import {
  BlogArticle,
  BlogCallout,
  BlogH2,
  BlogImage,
  BlogP,
  BlogTable,
  BlogUL,
} from "@/components/BlogArticle";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const SLUG = "average-vertical-jump";
const post = getPostBySlug(SLUG)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${SLUG}`,
    type: "article",
    publishedTime: post.date,
  },
};

export default function Page() {
  const related = getRelatedPosts(SLUG);
  return (
    <>
      <Nav />
      <main className="flex-1">
        <BlogArticle
          post={post}
          related={related}
          heroImage={{
            alt: "Side profile of a basketball player at the peak of their jump silhouetted against an orange sunset court",
            caption: "Replace with a hero shot conveying scale and height.",
          }}
        >
          <BlogP>
            &quot;Is my vertical jump good?&quot; is one of the most common
            questions in basketball — and one of the hardest to answer in
            isolation. A 24-inch vert is unremarkable for a college guard,
            extraordinary for a 40-year-old desk worker, and roughly average
            for a recreational pickup player. This piece gathers the numbers
            in one place so you can see where you actually stand.
          </BlogP>

          <BlogCallout>
            All numbers below are <em>standing</em> vertical jumps (no run-up)
            unless noted otherwise. Add roughly 2–4 inches for an approach
            jump. Ranges are typical, not absolute — every dataset has outliers
            in both directions.
          </BlogCallout>

          <BlogH2>The average adult</BlogH2>
          <BlogP>
            Across studies of healthy, untrained adults, average standing
            vertical jumps land in a narrow band:
          </BlogP>
          <BlogTable
            headers={["Group", "Typical standing vert"]}
            rows={[
              ["Untrained adult man", "16–20 in (41–51 cm)"],
              ["Untrained adult woman", "12–16 in (30–41 cm)"],
              ["Active / recreational man", "18–22 in (46–56 cm)"],
              ["Active / recreational woman", "14–18 in (36–46 cm)"],
            ]}
          />
          <BlogP>
            The average person who jumps regularly — recreational athletes who
            play pickup or train casually — tends to sit a few inches above
            the untrained baseline. Genetics matter, but training history
            matters more than people realize.
          </BlogP>

          <BlogH2>By age</BlogH2>
          <BlogP>
            Vertical jump follows the classic athletic-peak curve. It rises
            quickly through your teens, plateaus in your early 20s, holds
            relatively steady through your late 20s, and then declines slowly
            unless you keep training for explosiveness.
          </BlogP>
          <BlogTable
            caption="Typical standing vert by age (men, recreationally active)"
            headers={["Age", "Typical range"]}
            rows={[
              ["13–15", "14–20 in"],
              ["16–18", "18–24 in"],
              ["19–25", "20–26 in"],
              ["26–35", "18–24 in"],
              ["36–45", "15–21 in"],
              ["46+", "11–17 in"],
            ]}
          />
          <BlogP>
            For women, subtract roughly 3–5 inches from each row. The
            age-related decline is real but very trainable — masters athletes
            in their 40s and 50s routinely outjump untrained 20-year-olds.
          </BlogP>

          <BlogImage
            alt="NBA combine vertical jump testing — vert tester with hanging vanes and athlete in starting stance"
            caption="The classic Vertec setup used at the NBA combine."
          />

          <BlogH2>Basketball players</BlogH2>
          <BlogP>
            Basketball selects for verticality, so the averages climb the
            higher you go up the pyramid.
          </BlogP>
          <BlogTable
            headers={["Level (men)", "Typical standing vert"]}
            rows={[
              ["High school varsity", "20–26 in"],
              ["NCAA Division II", "24–28 in"],
              ["NCAA Division I guard", "28–32 in"],
              ["NCAA Division I forward", "26–30 in"],
              ["NBA combine (standing)", "29–33 in"],
              ["NBA combine (max approach)", "33–37 in"],
            ]}
          />
          <BlogP>
            Roughly 80% of NBA prospects measure between 30 and 36 inches on
            their max vertical at the combine. The genuine 40-plus inch
            jumpers are rare even at the very top of the sport — and they
            tend to make highlight reels for a reason.
          </BlogP>

          <BlogTable
            caption="WNBA / women's basketball — approximate ranges"
            headers={["Level (women)", "Typical standing vert"]}
            rows={[
              ["High school varsity", "14–20 in"],
              ["NCAA Division I", "18–24 in"],
              ["WNBA combine (standing)", "20–25 in"],
              ["WNBA combine (max approach)", "23–28 in"],
            ]}
          />

          <BlogH2>Where &quot;legends&quot; actually sit</BlogH2>
          <BlogP>
            Numbers attached to famous dunkers are often exaggerated, but a
            few well-documented standouts:
          </BlogP>
          <BlogUL>
            <li>
              <strong>Michael Jordan:</strong> ~46-inch max vertical at his
              peak, widely cited.
            </li>
            <li>
              <strong>Vince Carter:</strong> reportedly in the low 40s, with
              dunk-contest highlights to match.
            </li>
            <li>
              <strong>Zach LaVine:</strong> 46-inch max at the NBA combine,
              one of the highest ever recorded there.
            </li>
            <li>
              <strong>Spud Webb:</strong> reportedly a 46-inch vertical at
              5&apos;7&quot;, which is the more impressive part.
            </li>
            <li>
              <strong>Wilt Chamberlain:</strong> claimed in the high 40s,
              though those numbers predate modern testing.
            </li>
          </BlogUL>

          <BlogImage
            alt="Iconic silhouette of an athlete finishing a one-handed dunk above the rim"
            caption="The very top of the curve — a tiny fraction of all jumpers."
            aspect="3/2"
          />

          <BlogH2>How to read your own number</BlogH2>
          <BlogP>
            Here&apos;s a simple way to translate your standing vert into a
            tier. These are the bands Apex uses inside the app:
          </BlogP>
          <BlogTable
            headers={["Tier", "Men", "Women"]}
            rows={[
              ["Beginner", "< 16 in", "< 12 in"],
              ["Average", "16–22 in", "12–17 in"],
              ["Athletic", "22–28 in", "17–22 in"],
              ["Excellent", "28–32 in", "22–26 in"],
              ["Elite", "32–36 in", "26–30 in"],
              ["World class", "36+ in", "30+ in"],
            ]}
          />
          <BlogP>
            One last thing worth saying: a single number on a single day
            doesn&apos;t define your jump. The interesting story is the trend
            line — your weekly average over a season. Pick a tier you want to
            move into, train two days a week, and measure on the third. That&apos;s
            it. That&apos;s the whole game.
          </BlogP>
        </BlogArticle>
      </main>
      <Footer />
    </>
  );
}
