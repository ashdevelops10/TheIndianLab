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
        "group flex h-full flex-col overflow-hidden border border-line bg-bg-surface transition-colors duration-500 hover:border-accent-saffron/40",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-elevated">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
        />
        {dish.signature && (
          <span className="absolute left-4 top-4 label bg-bg-base/70 px-2 py-1 text-fg-cream backdrop-blur">
            Signature
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-fg-cream">{dish.name}</h3>
            {dish.nameHi && (
              <p className="mt-1 font-deva text-sm text-fg-muted">{dish.nameHi}</p>
            )}
          </div>
          <span className="font-mono text-sm text-accent-saffron">
            {formatPrice(dish.price)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{dish.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 text-[11px] uppercase tracking-[0.18em] text-fg-dim">
          <span className="font-mono">{dish.region}</span>
          <span className="h-1 w-1 rounded-full bg-fg-dim" />
          {dish.veg && <span className="font-mono">Veg</span>}
          {dish.vegan && <span className="font-mono">Vegan</span>}
          {dish.gf && <span className="font-mono">GF</span>}
          {dish.heat > 0 && (
            <span className="ml-auto inline-flex items-center gap-0.5 text-accent-ember">
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
