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
    <section className="section-dark pb-32">
      <Container>
        <div className="sticky top-16 z-30 -mx-6 flex flex-col gap-4 border-b border-line bg-bg-base/90 px-6 py-5 backdrop-blur-xl md:top-20 md:mx-0 md:flex-row md:items-center md:justify-between md:px-0">
          <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 md:mx-0 md:px-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                  c === active
                    ? "text-accent-gold"
                    : "text-fg-muted hover:text-fg-cream",
                )}
              >
                {t(`categories.${c}`)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {(["veg", "vegan", "gf"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setFilters((f) => ({ ...f, [k]: !f[k] }))}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-center font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.16em] transition-colors duration-300",
                  filters[k]
                    ? "border-accent-gold text-accent-gold"
                    : "border-line text-fg-muted hover:border-accent-gold/50 hover:text-fg-cream",
                )}
              >
                {t(k)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
