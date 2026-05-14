"use client";

import Link from "next/link";
import { ApexLogo } from "./ApexLogo";
import { AppStoreButton } from "./AppStoreButton";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Dunk", href: "/#dunk" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
        <div className="apex-glass flex items-center justify-between rounded-full pl-4 pr-2 py-2">
          <Link
            href="/"
            aria-label="Apex home"
            className="flex shrink-0 items-center leading-none"
          >
            <ApexLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-full hover:text-foreground hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <AppStoreButton
            variant="primary"
            className="!min-h-[40px] !py-2 !text-xs sm:!text-sm"
            label="Coming soon"
          />
        </div>
      </div>
    </header>
  );
}
