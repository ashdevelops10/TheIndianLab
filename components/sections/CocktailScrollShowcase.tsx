"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { Cocktail } from "@/content/cocktails";
import { easeOutExpo } from "@/lib/motion";

export function CocktailScrollShowcase({
  products,
  ingredientsLabel,
  methodLabel,
  children,
}: {
  products: Cocktail[];
  ingredientsLabel: string;
  methodLabel: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.28 });
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [1, 1.035, 1]);
  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const nextIndex = Math.min(
      products.length - 1,
      Math.max(0, Math.round(value * (products.length - 1))),
    );
    setActiveIndex(nextIndex);
  });

  const activeProduct = products[activeIndex] ?? products[0];
  const loopedProducts = [...products, ...products];

  return (
    <div ref={ref} className="relative mt-14 md:mt-0 md:h-[200svh] md:min-h-[1280px]">
      <div className="mobile-loop-shell md:hidden">
        <div className="mobile-loop-fade" />
        <div className="mobile-loop-track animate-marquee-slow">
          {loopedProducts.map((product, index) => (
            <article
              key={`${product.id}-${index}`}
              className={`mobile-loop-card w-[78vw] max-w-[330px] ${index % 2 ? "translate-y-5" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-bg-velvet">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="78vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/72 via-bg-base/12 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-cream/85">
                  N° 00{(index % products.length) + 1}
                </span>
              </div>
              <div className="border-x border-b border-line bg-bg-base/92 p-5">
                <p className="label">Featured</p>
                <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-fg-cream">
                  {product.name}
                </h3>
                <p className="mt-3 font-sans text-[10.5px] font-medium uppercase tracking-[0.2em] text-fg-muted">
                  {product.base} · ${product.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg-bone">{product.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="sticky top-0 hidden min-h-[100svh] items-center gap-10 py-14 md:grid md:grid-cols-12 md:gap-x-16 md:py-20">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-bg-velvet">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="absolute inset-0"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0 origin-center will-change-transform">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/45 via-transparent to-transparent" />
            </motion.div>
            <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.32em] text-fg-cream/85">
              N° 00{activeIndex + 1}
            </span>
          </div>
        </div>

        <div className="relative md:col-span-6 md:pt-8">
          <div className="absolute -right-2 top-0 hidden h-full w-px bg-line md:block">
            <motion.span className="block w-px bg-accent-gold" style={{ height: progressHeight }} />
          </div>

          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
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

          <div className="mt-10 flex gap-2">
            {products.map((product, index) => (
              <span
                key={product.id}
                className={`h-1.5 flex-1 transition-colors duration-500 ${
                  index === activeIndex ? "bg-accent-gold" : "bg-line-strong"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {children && (
        <div className="hidden md:block">{children}</div>
      )}
    </div>
  );
}
