import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.28em] text-fg-muted",
        className,
      )}
    >
      {align === "left" && (
        <span aria-hidden="true" className="block h-px w-10 bg-accent-gold/70" />
      )}
      <span>{children}</span>
      {align === "right" && (
        <span aria-hidden="true" className="block h-px w-10 bg-accent-gold/70" />
      )}
    </span>
  );
}
