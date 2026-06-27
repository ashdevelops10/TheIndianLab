"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { RevealText } from "@/components/ui/RevealText";
import { GinkgoLines } from "@/components/ui/GinkgoLines";
import { ArrowRight } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const lp = (p: string) => `/${locale}${p}`;

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: easeOutExpo, delay },
  });

  return (
    <section className="section-burgundy relative min-h-[100svh] w-full overflow-hidden">
      {/* botanical line art — floating top-right */}
      <GinkgoLines className="pointer-events-none absolute -right-20 -top-10 h-[520px] w-[640px] opacity-[0.28] md:right-[28%] md:h-[680px] md:w-[820px] lg:opacity-40" />
      {/* warm depth glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[60vh] w-[60vh] glow-wine" />
      <div aria-hidden className="grain-overlay" />

      <div className="container-page relative flex min-h-[100svh] flex-col">
        <div className="grid flex-1 items-center gap-12 pt-28 pb-20 md:grid-cols-12 md:gap-8 md:pt-32">
          {/* Left — editorial headline */}
          <div className="md:col-span-7 lg:col-span-6">
            <motion.p {...fade(0.1)} className="eyebrow mb-7">
              {t("vertical")}
            </motion.p>

            <RevealText
              as="h1"
              text={t("title")}
              className="max-w-full text-balance font-display text-fluid-hero font-medium leading-[1.02] text-fg-cream"
              delay={0.25}
            />

            <motion.p {...fade(0.9)} className="mt-9 max-w-md text-fluid-body leading-relaxed text-fg-bone">
              {t("subtitle")}
            </motion.p>

            <motion.div {...fade(1.1)} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={lp("/menu")} className="btn btn-primary group w-full sm:w-auto">
                <span>{t("cta_primary")}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                />
              </Link>
              <Link href={lp("/about")} className="btn btn-ghost w-full sm:w-auto">
                {t("cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right — cinematic food photo panel */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.4 }}
            className="relative md:col-span-5 lg:col-span-6 lg:pl-10"
          >
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-sm border border-accent-gold/30 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.85)]">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=88"
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-burgundy/50 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-fg-cream/90">
                The Dining Room
              </span>
            </div>
          </motion.div>
        </div>

        {/* baseline rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="relative flex flex-col items-start gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-fg-bone/70 animate-scroll-cue">
            ↓ {t("scroll")}
          </span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.26em] text-fg-bone/70">
            भारत · India · Reimagined
          </span>
        </motion.div>
      </div>
    </section>
  );
}
