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
        "inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-gold",
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
