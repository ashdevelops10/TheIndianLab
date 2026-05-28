"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { RevealText } from "@/components/ui/RevealText";
import { ArrowRight } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";
import { Ornament } from "@/components/ui/Ornament";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const detailY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const lp = (p: string) => `/${locale}${p}`;

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-bg-base sm:min-h-[680px]"
    >
      {/* Hero image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=2400&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* wine lounge vignette + bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-velvet/55 via-bg-base/48 to-bg-base" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(221,100,95,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(255,231,196,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="grain-overlay" />
      </motion.div>

      {/* gold radial glow behind italic word — purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-[35%] glow-gold animate-glow-pulse"
      />

      {/* Vertical edge tag (right side, desktop) */}
      <motion.span
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: easeOutExpo, delay: 1.2 }}
        className="vertical-tag absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.36em] text-fg-bone/70 md:block"
      >
        {t("vertical")}
      </motion.span>

      {/* Floating detail card (desktop only) */}
      <motion.div
        style={{ y: detailY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: easeOutExpo, delay: 1.4 }}
        className="absolute bottom-[18%] right-[6%] z-10 hidden h-[300px] w-[220px] overflow-hidden border border-accent-gold/35 shadow-[0_34px_70px_-32px_rgba(37,2,2,0.9)] xl:block"
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85"
          alt=""
          fill
          sizes="220px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-base/20" />
        <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.3em] text-fg-cream">
          The Dining Room
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col">
        <div className="container-page flex flex-1 flex-col justify-end pb-14 pt-32 md:pb-20">
          <RevealText
            as="h1"
            text={t("title")}
            className="max-w-full text-balance font-display text-fluid-hero text-fg-cream"
            delay={0.5}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 1.3 }}
            className="mt-8 max-w-xl text-fluid-body text-fg-bone/85"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 1.5 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link href={lp("/menu")} className="btn btn-primary group w-full sm:w-auto">
              <span>{t("cta_primary")}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-700 ease-out-expo group-hover:translate-x-1"
              />
            </Link>
            <Link href={lp("/about")} className="btn btn-ghost w-full sm:w-auto">
              {t("cta_secondary")}
            </Link>
          </motion.div>
        </div>

        {/* Hero baseline ornament rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="container-page relative pb-7"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-accent-gold/35" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-accent-gold/35" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-accent-gold/35" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-accent-gold/35" />
          </div>
          <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-bone/70 animate-scroll-cue">
              ↓ {t("scroll")}
            </span>
            <span className="max-w-full text-left font-mono text-[10px] uppercase tracking-[0.24em] text-fg-bone/70 sm:text-right sm:tracking-[0.32em]">
              भारत · India · Reimagined
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
