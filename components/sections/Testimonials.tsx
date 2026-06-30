"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { testimonials } from "@/content/testimonials";
import { easeOutExpo } from "@/lib/motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const INTERVAL_MS = 6000;

const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=88",
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % testimonials.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => { setPaused(true); setActive((i) => (i - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setPaused(true); setActive((i) => (i + 1) % testimonials.length); };

  return (
    <section className="section-cream relative py-[clamp(5rem,12vw,10rem)]">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-16 md:items-stretch">

          {/* Left — image, smaller on mobile */}
          <div className="md:col-span-5">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[4px] md:aspect-[4/5] md:rounded-[8px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: easeOutExpo }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[active % images.length]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-burgundy/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              <span className="absolute bottom-4 left-4 z-10 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-fg-cream/80">
                The Room · 8 PM
              </span>
            </div>
          </div>

          {/* Right — label + heading + quote */}
          <div className="relative flex flex-col justify-center md:col-span-7">

            {/* decorative large quote mark — top-right of entire column */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 top-0 select-none font-display text-[10.5rem] leading-none text-accent-gold/10 md:-right-4 md:top-8 md:text-[18rem]"
            >
              &rdquo;
            </span>

            {/* Label + heading */}
            <div>
              <SectionLabel>{t("label")}</SectionLabel>
              <RevealText
                as="h2"
                text={t("title")}
                className="mt-[22px] md:mt-6 font-display text-fluid-h2 font-medium leading-[1.08] text-fg-ink"
              />
            </div>

            <div className="mt-10 md:mt-12">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                >
                  <blockquote className="font-display text-xl leading-snug text-fg-ink sm:text-2xl md:text-[2rem] md:leading-[1.35] md:tracking-[0.01em]">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="h-px w-8 bg-accent-gold/60" />
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-fg-muted">
                      {testimonials[active].author} · {testimonials[active].city}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Progress bars — desktop only */}
            <div className="mt-10 hidden gap-2 md:flex">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); setActive(i); }}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-px transition-all duration-700 ${
                    i === active ? "w-12 bg-accent-gold" : "w-8 bg-accent-gold/25"
                  }`}
                />
              ))}
            </div>

            {/* Arrows — mobile: below progress, desktop: bottom-right */}
            <div className="mt-8 flex gap-2 md:mt-10 md:justify-end">
              <button
                type="button"
                onClick={prev}
                className="grid h-10 w-10 place-items-center rounded-full border border-accent-bordeaux/25 text-accent-bordeaux transition-all duration-300 hover:bg-accent-bordeaux hover:text-white"
                aria-label="Previous"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={next}
                className="grid h-10 w-10 place-items-center rounded-full border border-accent-bordeaux/25 text-accent-bordeaux transition-all duration-300 hover:bg-accent-bordeaux hover:text-white"
                aria-label="Next"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
