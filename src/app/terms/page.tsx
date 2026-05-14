import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-8">
          <div className="apex-card rounded-3xl p-6 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Legal
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: May 11, 2026
            </p>

            <div className="mt-10 space-y-8 text-muted-foreground">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Agreement to Terms
                </h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your access
                  to and use of {siteConfig.name}, a vertical jump measurement
                  application provided by {siteConfig.developer} (&quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;). By using the App, you
                  agree to these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, do not use the App.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Use of the App
                </h2>
                <p>
                  {siteConfig.name} is designed to estimate vertical jump
                  height and help you track dunk progress using your
                  iPhone&apos;s camera and motion sensors. You agree to use the
                  App only for lawful purposes and in a way that does not
                  interfere with the App or other users.
                </p>
                <p>
                  You are responsible for maintaining your device, following
                  applicable rules in any training environment, and deciding
                  whether a jump or workout is appropriate for your condition.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Fitness and Safety Disclaimer
                </h2>
                <p>
                  The App provides estimates and training-related information
                  for general fitness purposes only. It is not medical advice,
                  athletic coaching, a safety system, or a substitute for
                  professional evaluation.
                </p>
                <p>
                  Jump training can involve risk of injury. Stop using the App
                  and seek appropriate medical or professional guidance if you
                  experience pain, dizziness, discomfort, or any other concern.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Accuracy and Availability
                </h2>
                <p>
                  {siteConfig.name} uses camera-assisted motion tracking and
                  software estimates to calculate jump height. Results may vary
                  based on device model, placement, movement, lighting,
                  environment, and other factors. We do not guarantee that
                  measurements will be perfectly accurate or suitable for
                  official testing.
                </p>
                <p>
                  We may modify, suspend, or discontinue any part of the App at
                  any time without notice.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Your Data
                </h2>
                <p>
                  The App is designed so jump history and profile data are kept
                  on your device. You are responsible for managing, backing up,
                  or deleting data stored on your device. Our handling of
                  information is described in our Privacy Policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Intellectual Property
                </h2>
                <p>
                  The App, website, design, branding, text, graphics, and
                  software are owned by {siteConfig.developer} or our licensors
                  and are protected by intellectual property laws. You may not
                  copy, modify, distribute, sell, or reverse engineer any part
                  of the App except as permitted by law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  App Store Terms
                </h2>
                <p>
                  If you download the App through Apple&apos;s App Store, your
                  use of the App is also subject to Apple&apos;s applicable
                  terms and policies. Apple is not responsible for providing
                  maintenance or support for the App.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  No Warranties
                </h2>
                <p>
                  The App is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, whether
                  express or implied. We disclaim all warranties to the fullest
                  extent permitted by law, including implied warranties of
                  merchantability, fitness for a particular purpose, and
                  non-infringement.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, {siteConfig.developer}
                  will not be liable for indirect, incidental, special,
                  consequential, exemplary, or punitive damages, or for any loss
                  of data, profits, goodwill, or other intangible losses arising
                  from your use of or inability to use the App.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. When we do, we
                  will post the updated Terms on this page and revise the
                  &quot;Last updated&quot; date. Continued use of the App after
                  changes means you accept the updated Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Contact Us
                </h2>
                <p>
                  If you have questions about these Terms, contact{" "}
                  {siteConfig.developer} at hello [at] thea [dot] app.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
