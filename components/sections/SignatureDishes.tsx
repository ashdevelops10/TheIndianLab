"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { DishCard } from "@/components/ui/DishCard";
import { signatureDishes, dishes } from "@/content/dishes";

export function SignatureDishes() {
  const t = useTranslations("studies");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  const items = (
    signatureDishes.length >= 5
      ? signatureDishes
      : [...signatureDishes, ...dishes.slice(0, 7 - signatureDishes.length)]
  ).slice(0, 4);
  const loopedItems = [...items, ...items];

  return (
    <section className="relative scroll-mt-24 bg-bg-base py-[clamp(6rem,14vw,12rem)]">
      <Container>
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-6 font-display text-fluid-h1 text-fg-cream"
            />
          </div>
          <p className="max-w-lg text-fluid-body text-fg-bone">
            {t("body")}
          </p>
          <Link href={`/${locale}/menu`} className="btn btn-primary group">
            <span>{t("cta")}</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-700 ease-out-expo group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>

      {/* Mobile / tablet: smooth auto-loop rail */}
      <div className="mobile-loop-shell mt-14 lg:hidden">
        <div className="mobile-loop-fade" />
        <div className="mobile-loop-track animate-marquee-slow">
          {loopedItems.map((d, i) => (
            <div
              key={`${d.id}-${i}`}
              className={`w-[78vw] max-w-[320px] flex-shrink-0 sm:max-w-[340px] ${i % 2 ? "translate-y-5" : ""}`}
            >
              <p className="marker mb-3">Study N° 0{(i % items.length) + 1}</p>
              <DishCard dish={d} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: scroll-driven horizontal drift */}
      <div ref={ref} className="mt-16 hidden overflow-hidden lg:block">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {items.map((d, i) => (
            <div key={d.id} className="w-[360px] flex-shrink-0">
              <p className="marker mb-3">Study N° 0{i + 1}</p>
              <DishCard dish={d} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
