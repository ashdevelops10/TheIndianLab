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
        {/* Hero background — SVG illustration over solid burgundy */}
        <div className="absolute inset-0 bg-[#4B1311]">
          <div className="absolute -right-8 -top-8 h-[45vh] w-[45vh] md:-right-16 md:-top-16 md:h-[70vh] md:w-[70vh]">
            <Image
              src="/assets/hero-bg.svg"
              alt=""
              fill
              priority
              sizes="70vh"
              className="object-contain opacity-25"
            />
          </div>
          <div className="grain-overlay" />
        </div>


        {/* Vertical edge tag — desktop only */}
        <motion.span
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.5 }}
          className="vertical-tag absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.36em] text-fg-bone/70 md:block"
        >
          {t("vertical")}
        </motion.span>

        {/* Detail image — clip-reveals on scroll, desktop only */}
        <motion.div
          aria-hidden
          style={{ clipPath: detailClipPath }}
          className="pointer-events-none absolute inset-0 z-20 hidden [will-change:clip-path] md:block"
        >
          <motion.div style={{ scale: detailImageScale }} className="absolute inset-0 origin-center overflow-hidden rounded-[8px] will-change-transform">
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

          {/* Frame + label — inside clip so they expand and disappear with the image */}
          <motion.div
            style={{ opacity: detailLabelOpacity }}
            className="absolute inset-0"
          >
            {/* inset frame border */}
            <div className="absolute inset-[10px] border border-accent-gold/60" />
            {/* label bottom-center */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-fg-cream/90">
                The Dining Room
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main content */}
        <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col">
          <div className="container-page flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-20 md:pt-32">
            <RevealText
              as="h1"
              text={t("title")}
              className="max-w-full text-balance font-display text-fluid-hero text-fg-cream"
              delay={0.1}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.55 }}
              className="mt-8 max-w-xl text-fluid-body text-fg-bone/85"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.7 }}
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
            transition={{ duration: 0.8, delay: 0.85 }}
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
            <div className="mt-3 flex justify-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-bone/70">
                भारत · India · Reimagined
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
