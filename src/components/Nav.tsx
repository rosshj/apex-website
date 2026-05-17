"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ApexLogo } from "./ApexLogo";
import { AppStoreButton } from "./AppStoreButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Dunk", href: "/#dunk" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
          <div className="apex-glass relative flex items-center justify-between rounded-full pl-4 pr-2 py-2 backdrop-blur-[12px] backdrop-saturate-[1.4]">
            <Link
              href="/"
              aria-label="Apex home"
              className="flex shrink-0 items-center leading-none"
            >
              <ApexLogo />
            </Link>

            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-sm text-muted-foreground">
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

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((prev) => !prev)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
              >
                <HamburgerIcon open={open} className="h-5 w-5" />
              </button>

              <div className="hidden md:flex">
                <AppStoreButton
                  variant="primary"
                  className="!min-h-[40px] !py-2 !text-xs sm:!text-sm"
                  label="Coming soon"
                />
              </div>
            </div>
          </div>

          <div
            id="mobile-nav"
            className={cn(
              "md:hidden overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out",
              open ? "max-h-[80vh] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
            )}
          >
            <nav
              aria-label="Mobile"
              className="apex-glass rounded-2xl p-2"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-white/[0.06] pt-3 px-2 pb-2">
                <AppStoreButton
                  variant="primary"
                  className="w-full"
                  label="Coming soon"
                />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop sits below the header bar but above page content */}
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
    </>
  );
}

function HamburgerIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}
