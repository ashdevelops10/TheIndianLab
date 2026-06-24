import { cn } from "@/lib/utils";

/**
 * GinkgoLines — flowing gold ginkgo/wave linework recreated from the brand
 * handbook "Pattern Thought" page. Used as ambient background ornament on
 * burgundy or near-black surfaces.
 */
export function GinkgoLines({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 800"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none text-accent-gold", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
    >
      {/* upper sweep */}
      <g>
        {Array.from({ length: 22 }).map((_, i) => {
          const offset = i * 9;
          return (
            <path
              key={`u-${i}`}
              d={`M ${-50 + offset} ${120 + i * 4}
                   C ${180 + offset * 0.6} ${20 + i * 2}, ${360 + offset * 0.4} ${60 + i * 3}, ${520 + offset * 0.3} ${180 + i * 5}
                   S ${720 + offset * 0.2} ${320 + i * 6}, ${860} ${260 + i * 5}`}
              opacity={0.85 - i * 0.025}
            />
          );
        })}
      </g>

      {/* lower sweep */}
      <g>
        {Array.from({ length: 24 }).map((_, i) => {
          const offset = i * 8;
          return (
            <path
              key={`l-${i}`}
              d={`M ${-80} ${480 + i * 6}
                   C ${160 + offset} ${600 - i * 3}, ${360 + offset * 0.6} ${540 + i * 4}, ${540 + offset * 0.4} ${640 + i * 5}
                   S ${740 + offset * 0.2} ${720 + i * 4}, ${880} ${680 + i * 4}`}
              opacity={0.8 - i * 0.022}
            />
          );
        })}
      </g>

      {/* loose tendrils */}
      <g opacity="0.6">
        <path d="M 60 320 C 160 260, 280 280, 360 360 S 540 460, 660 420" />
        <path d="M 100 360 C 200 300, 320 320, 400 400 S 580 500, 700 460" />
        <path d="M 140 400 C 240 340, 360 360, 440 440 S 620 540, 740 500" />
      </g>
    </svg>
  );
}
