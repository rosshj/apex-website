import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: May 11, 2026
            </p>

            <div className="mt-10 space-y-8 text-muted-foreground">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Introduction
                </h2>
                <p>
                  {siteConfig.developer} (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) respects your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard
                  information when you use {siteConfig.name}, our vertical jump
                  measurement application (the &quot;App&quot;).
                </p>
                <p>
                  By using the App, you agree to the collection and use of
                  information in accordance with this policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Information We Collect
                </h2>
                <h3 className="text-xl font-medium text-foreground">
                  Camera, Motion, and Jump Data
                </h3>
                <p>
                  The App uses your device&apos;s camera and motion data to
                  measure vertical jump height and related workout progress.
                  Camera access is used only during a measurement; the App
                  does not record photos or videos for jump measurement. Jump
                  measurements, profile details, and dunk progress are
                  processed locally on your device and are not transmitted to
                  our servers.
                </p>

                <h3 className="text-xl font-medium text-foreground">
                  Photo Library
                </h3>
                <p>
                  If you choose to add a profile picture, the App may ask for
                  access to your photo library so you can select an image. This
                  is optional and is used only for the profile picture you
                  choose.
                </p>

                <h3 className="text-xl font-medium text-foreground">
                  Device Information
                </h3>
                <p>
                  If you contact us for support, you may choose to share
                  non-personal device information such as device type, operating
                  system version, and app version so we can troubleshoot issues
                  and maintain compatibility.
                </p>

                <h3 className="text-xl font-medium text-foreground">
                  Usage Data
                </h3>
                <p>
                  The App is designed without accounts, tracking, or server-side
                  analytics. If we add optional diagnostics or sync features in
                  the future, we will update this policy and explain what data
                  is collected.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  How We Use Information
                </h2>
                <p>We use information only as needed to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide and maintain the App&apos;s jump measurement functionality</li>
                  <li>Display your saved jumps, profiles, and dunk progress on your device</li>
                  <li>Use camera and motion access for local jump measurement</li>
                  <li>Use selected photos for optional profile pictures</li>
                  <li>Improve app performance, reliability, and compatibility</li>
                  <li>Respond to support requests or questions you send us</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Data Storage and Security
                </h2>
                <p>
                  Your jump data and profile information are stored locally on
                  your device. We use reasonable technical and organizational
                  measures to protect any information we handle, but no
                  electronic storage or transmission method is completely
                  secure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Third-Party Services
                </h2>
                <p>
                  {siteConfig.name} currently does not require third-party
                  services to collect or process your jump data. If we introduce
                  optional features that use third-party services, such as cloud
                  sync, diagnostics, or advanced processing, we will disclose
                  those providers and update this Privacy Policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Children&apos;s Privacy
                </h2>
                <p>
                  The App is not intended for children under 13. We do not
                  knowingly collect personal information from children under 13.
                  If you believe a child has provided us with personal
                  information, please contact us.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Your Rights
                </h2>
                <p>
                  Depending on your location, you may have rights to access,
                  correct, delete, or restrict processing of your personal
                  information. Because {siteConfig.name} stores jump data
                  locally, you can delete App data by removing it from within
                  the App or uninstalling the App from your device.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. When we
                  do, we will post the updated policy on this page and revise
                  the &quot;Last updated&quot; date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or our data
                  practices, contact {siteConfig.developer} at hello [at] thea
                  [dot] app.
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
