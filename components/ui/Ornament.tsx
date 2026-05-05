import { cn } from "@/lib/utils";

/**
 * Inline SVG ornament — a minimal paisley/filigree mark used between sections
 * and as decorative bullet. Three sizes: sm (12), md (24), lg (40).
 */
export function Ornament({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const px = size === "sm" ? 12 : size === "lg" ? 40 : 24;
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("text-accent-gold", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M20 4 C 24 12, 28 14, 28 20 C 28 26, 24 28, 20 36 C 16 28, 12 26, 12 20 C 12 14, 16 12, 20 4 Z" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function OrnamentRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-4 text-accent-gold", className)}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line-strong to-line-strong" />
      <Ornament size="md" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-line-strong to-line-strong" />
    </div>
  );
}
