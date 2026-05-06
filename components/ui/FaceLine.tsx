import { cn } from "@/lib/utils";

/**
 * FaceLine — minimalist line-art profiles, recreated from the brand handbook
 * interior wallpaper. Used as a decorative accent in story / ambience moments.
 */
export function FaceLine({
  className,
  opacity = 0.7,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 420"
      aria-hidden="true"
      className={cn("pointer-events-none text-accent-gold", className)}
      style={{ opacity }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* hair sweep */}
      <path d="M 60 80 C 70 40, 130 20, 190 35 C 240 48, 270 90, 268 140 C 266 175, 250 200, 240 220" />
      <path d="M 70 110 C 90 70, 140 55, 188 70 C 230 84, 250 120, 248 160" />

      {/* forehead → nose */}
      <path d="M 110 140 C 110 175, 118 200, 132 222 C 142 238, 152 248, 150 264" />

      {/* lips */}
      <path d="M 140 280 C 152 286, 168 286, 180 280" />
      <path d="M 144 290 C 158 298, 172 298, 184 290" />

      {/* chin / jaw */}
      <path d="M 150 296 C 150 320, 168 348, 200 360" />
      <path d="M 200 360 C 220 365, 240 360, 252 348" />

      {/* neck */}
      <path d="M 200 360 L 210 410" />
      <path d="M 252 348 L 268 410" />

      {/* eye */}
      <path d="M 152 200 C 162 196, 178 196, 188 200" />
      <path d="M 188 200 C 178 206, 162 206, 152 200" />

      {/* eyebrow */}
      <path d="M 150 184 C 162 178, 180 178, 192 184" />

      {/* ear */}
      <path d="M 240 210 C 252 218, 256 232, 250 244" />
    </svg>
  );
}
