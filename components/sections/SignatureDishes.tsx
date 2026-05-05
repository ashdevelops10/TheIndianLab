"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { DishCard } from "@/components/ui/DishCard";
import { signatureDishes, dishes } from "@/content/dishes";

export function SignatureDishes() {
  const t = useTranslations("studies");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  const items =
    signatureDishes.length >= 5
      ? signatureDishes
      : [...signatureDishes, ...dishes.slice(0, 7 - signatureDishes.length)];

  return (
    <section className="relative py-[clamp(6rem,14vw,12rem)]">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-6 font-display text-fluid-h1 text-fg-cream"
            />
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-sm text-fluid-body text-fg-bone">
            {t("body")}
          </p>
        </div>
      </Container>

      {/* Mobile / tablet: snap-scroll carousel */}
      <div className="mt-14 lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-6">
          {items.map((d, i) => (
            <div key={d.id} className="w-[78vw] max-w-[360px] flex-shrink-0 snap-start">
              <p className="marker mb-3">Study N° 0{i + 1}</p>
              <DishCard dish={d} />
            </div>
          ))}
          <div className="w-1 flex-shrink-0" />
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
