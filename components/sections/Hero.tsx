"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { RevealText } from "@/components/ui/RevealText";
import { ArrowRight } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";
import { Ornament } from "@/components/ui/Ornament";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const [isCompactViewport, setIsCompactViewport] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(max-width: 767px)").matches;
  });
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 135, damping: 32, mass: 0.24 });
  const detailStartClip = isCompactViewport
    ? "inset(58% 5% 18% 63%)"
    : "inset(38% 5% 18% 74%)";
  const y = useTransform(smoothScrollProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"]);
  const opacity = useTransform(smoothScrollProgress, [0, 0.4], [1, 0]);
  const detailClipPath = useTransform(
    smoothScrollProgress,
    [0, 0.08, 0.36],
    shouldReduceMotion ? [detailStartClip, detailStartClip, detailStartClip] : [detailStartClip, detailStartClip, "inset(0% 0% 0% 0%)"],
  );
  const detailImageScale = useTransform(
    smoothScrollProgress,
    [0, 0.08, 0.36],
    shouldReduceMotion ? [1, 1, 1] : [1.08, 1.08, 1],
  );
  const detailLabelOpacity = useTransform(smoothScrollProgress, [0, 0.12, 0.34], [1, 1, 0]);
  const detailShadowOpacity = useTransform(smoothScrollProgress, [0, 0.18, 0.34], [1, 0.7, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsCompactViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  const lp = (p: string) => `/${locale}${p}`;

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[700px] w-full bg-bg-base md:h-[200svh] md:min-h-[1240px] lg:min-h-[1360px]"
    >
      <div className="sticky top-0 h-[100svh] min-h-[700px] w-full overflow-hidden bg-bg-base md:min-h-[680px]">
      {/* Hero image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2400&q=88"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* cinematic dark overlay + bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-velvet/70 via-bg-base/52 to-bg-base" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(95,0,0,0.32),transparent_40%),radial-gradient(circle_at_80%_18%,rgba(212,175,55,0.10),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(95,0,0,0.20),transparent_50%)]" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="grain-overlay" />
        {/* curved bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-20 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0D0907" fillOpacity="0.85" />
          </svg>
        </div>
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

      {/* Floating detail image expands into the hero cover on scroll */}
      <motion.div
        aria-hidden
        style={{ clipPath: detailClipPath }}
        className="pointer-events-none absolute inset-0 z-20 hidden [will-change:clip-path] md:block"
      >
        <motion.div style={{ scale: detailImageScale }} className="absolute inset-0 origin-center will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=88"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-bg-base/20" />
        <div className="grain-overlay" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ opacity: detailShadowOpacity }}
        className="pointer-events-none absolute bottom-[18%] right-5 z-30 hidden h-[168px] w-[124px] border border-accent-gold/50 shadow-[0_34px_70px_-32px_rgba(37,2,2,0.9)] sm:right-8 sm:h-[210px] sm:w-[154px] md:block lg:right-[5%] lg:h-[260px] lg:w-[190px] xl:h-[300px] xl:w-[220px]"
      />
      <motion.span
        style={{ opacity: detailLabelOpacity }}
        className="pointer-events-none absolute bottom-[calc(18%+12px)] right-[calc(1.25rem+12px)] z-30 hidden max-w-[100px] font-mono text-[8px] uppercase tracking-[0.24em] text-fg-cream sm:right-[calc(2rem+12px)] sm:max-w-[128px] sm:text-[9px] sm:tracking-[0.3em] md:block lg:right-[calc(5%+12px)]"
      >
        The Dining Room
      </motion.span>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col">
        <div className="container-page flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-20 md:pt-32">
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
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10"
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
            <span className="h-px flex-1 bg-accent-gold/45" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-accent-gold/45" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-accent-gold/45" />
            <Ornament size="sm" />
            <span className="h-px flex-1 bg-accent-gold/45" />
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
      </div>
    </section>
  );
}
