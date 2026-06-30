import Image from "next/image";
import type { Dish } from "@/content/dishes";
import { formatPrice, cn } from "@/lib/utils";
import { Flame } from "lucide-react";

export function DishCard({
  dish,
  className,
}: {
  dish: Dish;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-bg-elevated md:rounded-[8px]">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover transition-transform duration-[800ms] ease-out-expo group-hover:scale-[1.05]"
        />
        {dish.signature && (
          <span className="absolute left-4 top-4 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-gold bg-bg-burgundy/70 px-3 py-1.5 backdrop-blur">
            Signature
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-3 border-b border-line pb-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl font-medium text-fg-cream transition-colors duration-300 group-hover:text-accent-gold">
              {dish.name}
            </h3>
            {dish.nameHi && (
              <p className="mt-1 font-deva text-sm text-fg-muted">{dish.nameHi}</p>
            )}
          </div>
          <span className="shrink-0 font-display text-lg text-accent-gold">
            {formatPrice(dish.price)}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-fg-bone">{dish.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5 font-sans text-[10.5px] font-medium uppercase tracking-[0.18em] text-fg-dim">
          <span>{dish.region}</span>
          <span className="h-1 w-1 rounded-full bg-fg-dim" />
          {dish.veg && <span>Veg</span>}
          {dish.vegan && <span>Vegan</span>}
          {dish.gf && <span>GF</span>}
          {dish.heat > 0 && (
            <span className="ml-auto inline-flex items-center gap-0.5 text-accent-terracotta">
              {Array.from({ length: dish.heat }).map((_, i) => (
                <Flame key={i} size={12} fill="currentColor" />
              ))}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
