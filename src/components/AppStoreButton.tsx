import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "minimal";

interface AppStoreButtonProps {
  variant?: Variant;
  className?: string;
  label?: string;
  comingSoon?: boolean;
}

/**
 * App Store CTA. While the app is unreleased, render as a "Coming soon" pill
 * so we can ship the site without a live App Store URL. Flip `comingSoon` off
 * once the listing is live and the URL in `siteConfig.appStoreUrl` is real.
 */
export function AppStoreButton({
  variant = "primary",
  className,
  label,
  comingSoon = true,
}: AppStoreButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] min-h-[48px] whitespace-nowrap";

  const variantClasses: Record<Variant, string> = {
    primary:
      "bg-foreground text-background hover:bg-zinc-200",
    secondary:
      "border border-white/15 bg-white/[0.04] text-foreground hover:bg-white/[0.08]",
    minimal:
      "text-muted-foreground hover:text-foreground",
  };

  const content = (
    <>
      <AppleIcon className="h-5 w-5" />
      <span>{label ?? (comingSoon ? "Coming to the App Store" : "Get on the App Store")}</span>
    </>
  );

  if (comingSoon) {
    return (
      <button
        type="button"
        aria-disabled="true"
        className={cn(baseClasses, variantClasses[variant], "cursor-default opacity-90", className)}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {content}
    </Link>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3091 6.48971C13.8886 6.26249 14.614 6.00143 15.6913 6.00143C17.3749 6.00143 19.1523 6.89003 20.3404 8.35613L21.0976 9.29055L20.0406 9.86449C17.5093 11.2391 17.8608 14.8633 20.4912 15.8476L21.4953 16.2234L21.0506 17.199C20.5752 18.2418 20.3284 18.7499 19.6885 19.7119C18.7074 21.192 17.3565 22.9787 15.3958 22.997C14.1793 23.0084 13.2116 22.1656 12.0053 22.172C10.7909 22.1784 9.80329 23 8.57946 22.9999L8.57073 22.9999C6.64549 22.9829 5.31146 21.3315 4.3393 19.8664C1.80437 16.0461 1.46451 11.568 3.19812 8.92508C4.43251 7.04322 6.3164 6.00413 8.20878 6.00413C9.15354 6.00413 9.91949 6.26847 10.5172 6.47873C11.1502 6.70144 11.5462 6.84 11.9823 6.84C12.4376 6.84 12.7407 6.71256 13.3091 6.48971Z"
      />
      <path d="M15.3653 3.793C16.0815 2.87425 16.5703 1.63176 16.373 0.305766C15.203 0.386016 13.89 1.07576 13.0913 2.0455C12.3668 2.92525 11.7675 4.231 12 5.5C13.2765 5.53975 14.598 4.77775 15.3653 3.793Z" />
    </svg>
  );
}
