import { cn } from "@/lib/utils";

/**
 * BrandSeal — renders The Indian Lab's original logo asset.
 *
 * Variants:
 *  - "circle"     full logo
 *  - "horizontal" compact logo for the header
 *  - "mark"       small logo mark
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
  const pixelSize = variant === "horizontal" ? size ?? 48 : variant === "mark" ? size ?? 34 : size ?? 160;
  const logoAspectRatio = 768 / 988;

  return (
    <span
      className={cn("inline-flex shrink-0 overflow-hidden", className)}
      style={{
        width: `var(--brand-size, ${pixelSize}px)`,
        height: `calc(var(--brand-size, ${pixelSize}px) * ${logoAspectRatio})`,
      }}
    >
      <img
        src="/assets/logo.png"
        alt="The Indian Lab logo"
        className="h-full w-full object-contain"
        loading={variant === "mark" ? "lazy" : "eager"}
        decoding="async"
      />
    </span>
  );
}
