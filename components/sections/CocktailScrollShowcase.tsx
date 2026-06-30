"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Cocktail } from "@/content/cocktails";
import { easeOutExpo } from "@/lib/motion";

const INTERVAL_MS = 3200;

export function CocktailScrollShowcase({
  products,
  ingredientsLabel,
  methodLabel,
}: {
  products: Cocktail[];
  ingredientsLabel: string;
  methodLabel: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [products.length, shouldReduceMotion]);

  const activeProduct = products[activeIndex] ?? products[0];

  return (
    <div className="relative mt-14 md:mt-0">
      {/* Mobile: auto-shuffle card */}
      <div className="mt-6 md:hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-bg-velvet md:rounded-[8px]">
          <AnimatePresence>
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: easeOutExpo }}
              className="absolute inset-0"
            >
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-bg-base/20 to-transparent" />
            </motion.div>
          </AnimatePresence>
          <span className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-cream/85">
            N° 00{activeIndex + 1}
          </span>
        </div>

        <div className="pt-5 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
            >
              <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-fg-cream">
                {activeProduct.name}
              </h3>
              <p className="mt-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.2em] text-fg-muted">
                {activeProduct.base} · ${activeProduct.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-bone">{activeProduct.note}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex gap-2">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${product.name}`}
                className="relative h-1 flex-1 overflow-hidden bg-line-strong"
              >
                {index === activeIndex && (
                  <motion.span
                    key={activeIndex}
                    className="absolute inset-y-0 left-0 bg-accent-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: auto-shuffle panel */}
      <div className="hidden items-center gap-10 py-14 md:grid md:grid-cols-12 md:gap-x-16 md:py-20">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-bg-velvet">
            <AnimatePresence>
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: easeOutExpo }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/45 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <span className="absolute left-5 top-5 z-10 font-mono text-[10px] uppercase tracking-[0.32em] text-fg-cream/85">
              N° 00{activeIndex + 1}
            </span>
          </div>
        </div>

        <div className="relative md:col-span-6 md:pt-8">
          <AnimatePresence>
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8, position: "absolute" } as any}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="w-full"
            >
              <p className="label">N° 00{activeIndex + 1} — Featured</p>
              <h3 className="mt-4 text-balance font-display text-fluid-h2 font-medium leading-[1.05] text-fg-cream">
                {activeProduct.name}
              </h3>
              <p className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-fg-muted">
                Base · {activeProduct.base}
              </p>
              <p className="mt-8 max-w-md text-fluid-body text-fg-bone">{activeProduct.note}</p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="label mb-3">{ingredientsLabel}</p>
                  <ul className="space-y-1.5 font-mono text-[12px] text-fg-cream/85">
                    {activeProduct.ingredients.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="text-accent-gold">·</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label mb-3">{methodLabel}</p>
                  <p className="font-mono text-[12px] leading-relaxed text-fg-cream/85">
                    {activeProduct.method}
                  </p>
                  <p className="mt-8 font-display text-3xl text-accent-gold">${activeProduct.price}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators — clickable, active one shows sweep animation */}
          <div className="mt-10 flex gap-2">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${product.name}`}
                className="relative h-1.5 flex-1 overflow-hidden bg-line-strong"
              >
                {index === activeIndex && (
                  <motion.span
                    key={activeIndex}
                    className="absolute inset-y-0 left-0 bg-accent-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                  />
                )}
                {index !== activeIndex && (
                  <span className="absolute inset-0 bg-line-strong" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
