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
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-bg-base"
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
        {/* warm vignette + bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/35 via-bg-base/35 to-bg-base" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="grain-overlay" />
      </motion.div>

      {/* gold radial glow behind italic word — purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-[35%] glow-gold animate-glow-pulse"
      />

      {/* Top brand strip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
        className="container-page relative z-20 flex items-start justify-between pt-7 md:pt-9"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-bone/80">
          {t("stamp")}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-bone/80">
          {t("marker")}
        </span>
      </motion.div>

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
        className="absolute bottom-[18%] right-[6%] z-10 hidden h-[300px] w-[220px] overflow-hidden border border-line-strong shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] xl:block"
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85"
          alt=""
          fill
          sizes="220px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-base/15" />
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
            className="font-display text-fluid-hero text-fg-cream"
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
            <Link href={lp("/menu")} className="btn btn-primary group">
              <span>{t("cta_primary")}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-700 ease-out-expo group-hover:translate-x-1"
              />
            </Link>
            <Link href={lp("/about")} className="btn btn-ghost">
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
            <span className="h-px flex-1 bg-line-strong" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-line-strong" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-line-strong" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-line-strong" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-bone/70 animate-scroll-cue">
              ↓ {t("scroll")}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-bone/70">
              भारत · India · Reimagined
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
