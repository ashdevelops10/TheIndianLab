"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { DishCard } from "@/components/ui/DishCard";
import { dishes, type Dish } from "@/content/dishes";
import { cn } from "@/lib/utils";

const categories: Dish["category"][] = [
  "starters",
  "tandoor",
  "mains",
  "biryani",
  "desserts",
  "drinks",
];

export function MenuExplorer() {
  const t = useTranslations("menu_page");
  const [active, setActive] = useState<Dish["category"]>("starters");
  const [filters, setFilters] = useState({ veg: false, vegan: false, gf: false });

  const filtered = useMemo(
    () =>
      dishes.filter(
        (d) =>
          d.category === active &&
          (!filters.veg || d.veg) &&
          (!filters.vegan || d.vegan) &&
          (!filters.gf || d.gf),
      ),
    [active, filters],
  );

  return (
    <section className="pb-32">
      <Container>
        <div className="sticky top-16 z-30 -mx-5 flex flex-col gap-4 border-b border-line bg-bg-base/85 px-5 py-4 backdrop-blur-xl md:top-20 md:mx-0 md:flex-row md:items-center md:justify-between md:px-0">
          <div className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 md:mx-0 md:px-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors",
                  c === active
                    ? "text-accent-saffron"
                    : "text-fg-muted hover:text-fg-cream",
                )}
              >
                {t(`categories.${c}`)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {(["veg", "vegan", "gf"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setFilters((f) => ({ ...f, [k]: !f[k] }))}
                className={cn(
                  "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                  filters[k]
                    ? "border-accent-saffron text-accent-saffron"
                    : "border-line text-fg-muted hover:border-fg-muted hover:text-fg-cream",
                )}
              >
                {t(k)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DishCard key={d.id} dish={d} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-16 text-center text-sm text-fg-muted">
              No dishes match these filters.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
