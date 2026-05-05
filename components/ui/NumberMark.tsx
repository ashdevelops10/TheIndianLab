import { cn } from "@/lib/utils";

/**
 * Editorial corner marker — used in section corners and at the top of hero.
 * Renders as a small monospaced mark "N° 001 — Heritage" with a hairline.
 */
export function NumberMark({
  no,
  label,
  align = "left",
  className,
}: {
  no: string;
  label?: string;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.28em] text-fg-muted",
        align === "right" ? "justify-end" : "justify-start",
        className,
      )}
    >
      {align === "left" && <span aria-hidden="true" className="block h-px w-8 bg-accent-gold/60" />}
      <span>
        N<span className="align-super text-[0.65em]">o</span> {no}
        {label ? <span className="text-fg-dim"> — {label}</span> : null}
      </span>
      {align === "right" && <span aria-hidden="true" className="block h-px w-8 bg-accent-gold/60" />}
    </span>
  );
}
