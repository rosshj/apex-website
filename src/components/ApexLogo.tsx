import { cn } from "@/lib/utils";

interface ApexLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function ApexLogo({ className, showWordmark = true }: ApexLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <ApexMark className="h-6 w-6" />
      {showWordmark && (
        <span className="text-[1.05rem] font-semibold tracking-tight text-foreground">
          Apex
        </span>
      )}
    </div>
  );
}

function ApexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="apex-mark-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="55%" stopColor="#FF8A2B" />
          <stop offset="100%" stopColor="#FF4D6D" />
        </linearGradient>
      </defs>
      <path
        d="M16 3 L29 27 L21.5 27 L16 16 L10.5 27 L3 27 Z"
        fill="url(#apex-mark-grad)"
      />
    </svg>
  );
}
