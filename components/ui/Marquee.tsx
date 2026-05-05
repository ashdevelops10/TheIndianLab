import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = 40,
  separator = "✦",
  size = "lg",
}: {
  items: string[];
  className?: string;
  speed?: number;
  separator?: string;
  size?: "sm" | "lg";
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <div
        className="flex w-max gap-10 whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "flex items-center gap-10",
              size === "lg"
                ? "font-display text-fluid-h2 text-fg-bone"
                : "font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted",
            )}
          >
            <span>{item}</span>
            <span className="text-accent-gold">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
