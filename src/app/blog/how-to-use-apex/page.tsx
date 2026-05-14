import type { Metadata } from "next";
import {
  BlogArticle,
  BlogCallout,
  BlogH2,
  BlogImage,
  BlogOL,
  BlogP,
  BlogUL,
} from "@/components/BlogArticle";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const SLUG = "how-to-use-apex";
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
            alt: "Apex on iPhone showing a measured vertical jump result, person standing in a sunlit gym in the background",
            caption: "Replace with a hero shot of Apex in use.",
          }}
        >
          <BlogP>
            Apex was designed so the first time you open it, you measure your
            vert before the lock screen times out. No accounts, no tutorials,
            no slow-motion video review. Point, jump, see your number. This is
            the quick walkthrough of doing exactly that — plus the small
            details that make every reading more accurate.
          </BlogP>

          <BlogH2>What you need</BlogH2>
          <BlogUL>
            <li>An iPhone running iOS 18 or newer.</li>
            <li>
              About a meter and a half of clearance around you so you can jump
              safely without hitting anything.
            </li>
            <li>
              A reasonably well-lit room. Apex uses your camera for spatial
              tracking — bright daylight or normal indoor lighting both work
              well.
            </li>
            <li>
              A flat surface to place your phone, or a tripod / stand if you
              have one.
            </li>
          </BlogUL>

          <BlogH2>1. Add your profile</BlogH2>
          <BlogP>
            The first time you open Apex, it asks for your name and your
            standing height. Height isn&apos;t used to estimate your jump — it
            powers the dunk progress feature, which measures the gap between
            your peak reach and a regulation 10-foot rim. If you want to share
            the phone with a friend or your kid, add multiple profiles. Apex
            doesn&apos;t use accounts, so each profile lives only on your
            device.
          </BlogP>

          <BlogImage
            alt="Person standing flat-footed against a wall, arm fully extended overhead — capturing standing reach"
            caption="Standing reach setup."
            aspect="4/3"
          />

          <BlogH2>2. Set your standing reach</BlogH2>
          <BlogP>
            Reach is the single most important number for accurate vert and
            dunk tracking. Stand flat-footed against a wall or under a doorway,
            stretch one arm straight up, and reach as high as you can. Apex
            captures the highest point your fingertips touch. Two tips:
          </BlogP>
          <BlogUL>
            <li>
              Don&apos;t go up on your toes. Reach with feet completely flat —
              that&apos;s the baseline your jump is measured from.
            </li>
            <li>
              Re-measure your reach if you change shoes. A thicker sole
              shifts your reach upward by half an inch or more.
            </li>
          </BlogUL>

          <BlogH2>3. Calibrate your space and jump</BlogH2>
          <BlogP>
            Prop your phone on a stable surface so the rear camera can see you
            from head to toe. Slowly tilt the phone left and right for a couple
            of seconds — Apex uses this to lock onto the space around you. When
            the screen says <em>Ready</em>, step back to your launch spot and
            jump.
          </BlogP>
          <BlogCallout>
            Pro tip: keep the phone roughly chest-height and angled slightly
            upward. Apex tracks best when it can see both your launch point on
            the floor and the highest point of your jump.
          </BlogCallout>

          <BlogImage
            alt="Close-up of the Apex results screen showing the vertical jump number, peak reach, and dunk gap"
            caption="The result screen — vert, peak reach, and dunk gap at a glance."
          />

          <BlogH2>4. Reading your number</BlogH2>
          <BlogP>
            The instant you land, Apex shows your jump height with the
            confidence band, plus your peak reach and how far you were from a
            dunk. The vertical jump number is the distance between your flat
            reach and the highest point your fingertips traveled at the top of
            the jump.
          </BlogP>
          <BlogUL>
            <li>
              <strong>Vertical jump:</strong> peak reach minus standing reach.
            </li>
            <li>
              <strong>Peak reach:</strong> the absolute highest point your
              fingertips hit.
            </li>
            <li>
              <strong>Dunk gap:</strong> how far you still need to gain to
              touch a 10-foot rim.
            </li>
          </BlogUL>

          <BlogH2>Tips for accurate, repeatable readings</BlogH2>
          <BlogOL>
            <li>
              <strong>Warm up first.</strong> A cold first jump is almost
              always your worst. Do a couple of submax efforts before recording
              your best.
            </li>
            <li>
              <strong>Same phone position every time.</strong> Mark the spot on
              your floor with tape so you can repeat the exact setup later in
              the week.
            </li>
            <li>
              <strong>Reach with the same hand every time.</strong> Your
              dominant arm tends to reach a touch higher; keep it consistent.
            </li>
            <li>
              <strong>Jump from a standing position, not a run-up.</strong>{" "}
              Apex measures standing vertical by default. If you want max vert
              with an approach, use the dedicated <em>Approach jump</em> mode.
            </li>
          </BlogOL>

          <BlogH2>Tracking progress over time</BlogH2>
          <BlogP>
            Every jump you save is added to your history. The trend line on
            your profile shows you weekly averages, your personal best, and the
            running gap to a dunk. Most people see their first inch of vert
            improvement within a few weeks of focused training. The next post
            in this series — <em>Eight exercises that actually increase your
            vertical jump</em> — has a four-week plan you can run with two
            short sessions a week.
          </BlogP>

          <BlogP>
            That&apos;s the whole loop: set your reach, jump, save the result,
            and watch the trend. The fewer reasons to fiddle with the app, the
            more you&apos;ll actually train. That&apos;s the point of Apex.
          </BlogP>
        </BlogArticle>
      </main>
      <Footer />
    </>
  );
}
