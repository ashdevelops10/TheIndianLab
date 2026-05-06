import { cn } from "@/lib/utils";

/**
 * BrandSeal — inline SVG of The Indian Lab's lotus-in-oval mark.
 *
 * Variants:
 *  - "circle"     full circular seal with curved wordmark + ESTD year (used in hero, footer)
 *  - "horizontal" lotus mark beside set wordmark (used in header)
 *  - "mark"       lotus only (used as ornament / dividers)
 */
export function BrandSeal({
  variant = "circle",
  size,
  className,
}: {
  variant?: "circle" | "horizontal" | "mark";
  size?: number;
  className?: string;
}) {
  if (variant === "horizontal") {
    return (
      <span className={cn("inline-flex items-baseline gap-2.5", className)}>
        <LotusMark size={size ?? 28} className="self-center" />
        <span className="font-display text-lg leading-none tracking-tight text-fg-cream">
          The <span className="italic-display">Indian</span> Lab
        </span>
      </span>
    );
  }

  if (variant === "mark") {
    return <LotusMark size={size ?? 32} className={className} />;
  }

  // circle (full seal)
  const px = size ?? 220;
  return (
    <svg
      viewBox="0 0 220 220"
      width={px}
      height={px}
      aria-hidden="true"
      className={cn("text-accent-gold", className)}
      fill="none"
    >
      <defs>
        <path
          id="seal-top"
          d="M 30 110 A 80 80 0 0 1 190 110"
        />
        <path
          id="seal-bottom"
          d="M 30 110 A 80 80 0 0 0 190 110"
        />
      </defs>

      {/* outer oval */}
      <ellipse
        cx="110"
        cy="110"
        rx="98"
        ry="88"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* inner oval */}
      <ellipse
        cx="110"
        cy="110"
        rx="86"
        ry="76"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      {/* horizon line */}
      <line
        x1="24"
        y1="110"
        x2="196"
        y2="110"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      {/* lotus */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* center vertical petal */}
        <path d="M110 50 C 116 78, 116 100, 110 130 C 104 100, 104 78, 110 50 Z" />
        {/* left petal */}
        <path d="M110 130 C 86 122, 78 102, 80 80 C 90 96, 100 110, 110 130 Z" />
        {/* right petal */}
        <path d="M110 130 C 134 122, 142 102, 140 80 C 130 96, 120 110, 110 130 Z" />
        {/* outer left base */}
        <path d="M110 150 C 86 148, 70 132, 64 112 C 80 124, 96 138, 110 150 Z" />
        {/* outer right base */}
        <path d="M110 150 C 134 148, 150 132, 156 112 C 140 124, 124 138, 110 150 Z" />
      </g>

      {/* curved text */}
      <text
        fill="currentColor"
        fontFamily="var(--font-display), serif"
        fontSize="11"
        letterSpacing="3.4"
      >
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
          THE INDIAN LAB
        </textPath>
      </text>
      <text
        fill="currentColor"
        fontFamily="var(--font-mono), monospace"
        fontSize="9"
        letterSpacing="3"
      >
        <textPath href="#seal-bottom" startOffset="25%">
          ESTD
        </textPath>
        <textPath href="#seal-bottom" startOffset="75%" textAnchor="end">
          MMXXVI
        </textPath>
      </text>
    </svg>
  );
}

function LotusMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("text-accent-gold", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 C 23 14, 23 21, 20 28 C 17 21, 17 14, 20 6 Z" />
      <path d="M20 28 C 12 26, 8 19, 9 12 C 13 18, 17 23, 20 28 Z" />
      <path d="M20 28 C 28 26, 32 19, 31 12 C 27 18, 23 23, 20 28 Z" />
      <ellipse cx="20" cy="22" rx="14" ry="11" opacity="0.55" />
    </svg>
  );
}
