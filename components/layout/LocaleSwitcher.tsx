"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: string) => {
    if (next === locale) return;
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  return (
    <div className={cn("flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale}
            className={cn(
              "transition-colors duration-300",
              l === locale ? "text-fg-cream" : "text-fg-dim hover:text-fg-cream",
            )}
          >
            {l}
          </button>
          {i < locales.length - 1 && <span className="text-fg-dim">/</span>}
        </span>
      ))}
    </div>
  );
}
