import Link from "next/link";
import { ApexLogo } from "./ApexLogo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            <ApexLogo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Apex measures your vertical jump from your pocket. Built by{" "}
              {siteConfig.developer}.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#faq" className="hover:text-foreground transition-colors">
                FAQ
              </Link>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                TikTok
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} {siteConfig.developer}. Apex is a trademark of {siteConfig.developer}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
