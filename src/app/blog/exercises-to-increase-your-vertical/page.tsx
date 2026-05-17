import type { Metadata } from "next";
import {
  BlogArticle,
  BlogCallout,
  BlogH2,
  BlogH3,
  BlogImage,
  BlogP,
  BlogTable,
  BlogUL,
} from "@/components/BlogArticle";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const SLUG = "exercises-to-increase-your-vertical";
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
            alt: "Athlete at the peak of a vertical jump on an outdoor basketball court against a clean sky",
            caption: "Replace with a strong jumping hero shot.",
          }}
        >
          <BlogP>
            Your vertical jump is a product of one thing: how much force you
            can put into the ground in a very short amount of time. Pure
            strength matters, but it&apos;s only useful if you can express it
            fast. That&apos;s why the best vert programs combine heavy strength
            work, fast plyometrics, and just enough mobility to let your hips
            and ankles cooperate.
          </BlogP>
          <BlogP>
            Below are eight movements that consistently move the needle for
            jumpers, plus a four-week template you can run with two sessions a
            week. None of them require fancy equipment.
          </BlogP>

          <BlogH2>Strength: build the force ceiling</BlogH2>
          <BlogP>
            Strength sets the upper limit for how much force you can produce.
            If you can&apos;t squat anything close to your bodyweight, your
            vert is being held back by raw force, not technique.
          </BlogP>

          <BlogH3>1. Back or front squat</BlogH3>
          <BlogP>
            The classic. Three to five sets of 3–6 reps at a hard but clean
            weight. Front squats are gentler on the back and force you to keep
            an upright torso, useful if your knees feel cranky.
          </BlogP>

          <BlogH3>2. Trap-bar deadlift</BlogH3>
          <BlogP>
            Trap-bar deadlifts let you lift heavy without the technical demand
            of a barbell deadlift. Three to four sets of 3–5 reps. Drive your
            feet hard into the floor. Your body should learn what &quot;put
            everything into the ground fast&quot; feels like.
          </BlogP>

          <BlogH3>3. Hip thrust</BlogH3>
          <BlogP>
            Hip thrusts develop the glutes, which are the primary engine of
            jump take-off. Three sets of 6–10. Pause at the top for a second
            so you actually feel the contraction.
          </BlogP>

          <BlogH3>4. Bulgarian split squat</BlogH3>
          <BlogP>
            Single-leg strength matters because most jumps in basketball start
            from one leg. Three sets of 6–8 per leg with dumbbells, focused on
            controlled descent and a powerful push-off.
          </BlogP>

          <BlogImage
            alt="Athlete performing a barbell back squat in a clean gym with strong knee tracking and an upright torso"
            caption="Strength foundations: heavy squats build the force ceiling."
          />

          <BlogH2>Plyometrics: turn strength into spring</BlogH2>
          <BlogP>
            Plyos teach your nervous system to apply that strength quickly.
            Quality matters far more than volume here. Stop the set the
            moment your jumps stop being your best. Five great reps beat
            twenty mediocre ones every time.
          </BlogP>

          <BlogH3>5. Depth jump</BlogH3>
          <BlogP>
            Step (don&apos;t leap) off a 30–45 cm box, land softly on two feet,
            and explode straight up into your highest possible jump. Three to
            four sets of 3–5 reps. The goal is minimum ground contact time.
          </BlogP>

          <BlogH3>6. Broad jump</BlogH3>
          <BlogP>
            Stand still, swing your arms, and jump as far forward as you can
            with both feet. Stick the landing. Three sets of 3–5 reps. Broad
            jumps build horizontal force production, which transfers
            surprisingly well to vertical.
          </BlogP>

          <BlogH3>7. Single-leg bounding</BlogH3>
          <BlogP>
            Bound forward off one leg, alternating left-right-left-right like
            exaggerated running. Three sets of 8–10 contacts per leg. Bounds
            are the single most basketball-specific plyo there is.
          </BlogP>

          <BlogImage
            alt="Athlete mid-air on a depth jump after stepping off a low wooden box, arms swinging upward"
            caption="A clean depth jump: short ground contact, full extension."
          />

          <BlogH2>Mobility: unlock the joints</BlogH2>
          <BlogP>
            Stiff ankles and tight hips will quietly cost you inches. You
            don&apos;t need yoga sessions. Five minutes of focused work twice
            a week is enough.
          </BlogP>

          <BlogH3>8. Eccentric calf raises + ankle dorsiflexion</BlogH3>
          <BlogP>
            Stand on a step, rise up on both feet, and slowly lower yourself
            on one leg over 3–4 seconds. Three sets of 8 per leg. Pair with a
            knee-to-wall ankle stretch held for 30 seconds. Springy ankles
            translate directly to jump height because they store and return
            energy on take-off.
          </BlogP>

          <BlogH2>The four-week template</BlogH2>
          <BlogP>
            Two sessions a week is enough to build vert without grinding
            yourself into the ground. Day A is strength-led, Day B is
            plyo-led. Take at least 48 hours between sessions.
          </BlogP>

          <BlogTable
            caption="Day A: strength"
            headers={["Exercise", "Sets × Reps"]}
            rows={[
              ["Back or front squat", "4 × 4"],
              ["Trap-bar deadlift", "3 × 5"],
              ["Bulgarian split squat", "3 × 6 / leg"],
              ["Eccentric calf raise", "3 × 8 / leg"],
            ]}
          />

          <BlogTable
            caption="Day B: plyometric"
            headers={["Exercise", "Sets × Reps"]}
            rows={[
              ["Broad jump", "3 × 4"],
              ["Depth jump (30–45 cm)", "3 × 4"],
              ["Single-leg bound", "3 × 8 / leg"],
              ["Hip thrust", "3 × 8"],
            ]}
          />

          <BlogCallout>
            Once a week, test your vert with Apex in the same conditions:
            same warm-up, same shoes, same room. Don&apos;t test on the same
            day as a heavy session; you&apos;ll underperform and read it as a
            regression when it&apos;s really just fatigue.
          </BlogCallout>

          <BlogH2>Recover like you mean it</BlogH2>
          <BlogUL>
            <li>
              Sleep seven-plus hours. The single biggest jump-recovery
              variable in every athlete study.
            </li>
            <li>
              Eat enough protein, roughly 1.6 grams per kilogram of bodyweight
              per day if you&apos;re actively training.
            </li>
            <li>
              On non-training days, walk, stretch, and stay loose. Save the
              ice baths for after games, not training.
            </li>
          </BlogUL>

          <BlogP>
            Most people who follow a plan like this and measure consistently
            see 1–2 inches of progress in four weeks and 3–5 inches over a
            full season. The trick is logging it. If you don&apos;t measure,
            you&apos;ll quietly stop trying.
          </BlogP>
        </BlogArticle>
      </main>
      <Footer />
    </>
  );
}
