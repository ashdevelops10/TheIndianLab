"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { formatPrice } from "@/lib/utils";
import { easeOutExpo, viewportOnce } from "@/lib/motion";
import { signatureDishes, dishes } from "@/content/dishes";

export function SignatureDishes() {
  const t = useTranslations("studies");
  const locale = useLocale();

  const items = (
    signatureDishes.length >= 5
      ? signatureDishes
      : [...signatureDishes, ...dishes.slice(0, 7 - signatureDishes.length)]
  ).slice(0, 4);

  return (
    <section className="section-dark relative scroll-mt-24 py-[clamp(5rem,12vw,10rem)]">
      <Container>
        {/* Header — editorial, offset */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-[22px] md:mt-6 font-display text-fluid-h1 font-medium leading-[1.05] text-fg-cream"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-sm text-fluid-body leading-relaxed text-fg-bone">{t("body")}</p>
            <Link
              href={`/${locale}/menu`}
              className="link-underline mt-6 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-gold"
            >
              {t("cta")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mobile — looping marquee */}
        <div className="mobile-loop-shell mt-14 md:hidden">
          <div className="mobile-loop-fade" />
          <div className="mobile-loop-track animate-marquee-slow">
            {[...items, ...items].map((d, i) => (
              <Link
                key={`${d.id}-${i}`}
                href={`/${locale}/menu`}
                className={`mobile-loop-card group flex w-[72vw] max-w-[300px] flex-col ${i % 2 ? "translate-y-5" : ""}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px]">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="72vw"
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-medium text-fg-cream transition-colors duration-300 group-hover:text-accent-gold">
                        {d.name}
                      </h3>
                      {d.nameHi && <p className="mt-1 font-deva text-sm text-fg-muted">{d.nameHi}</p>}
                      <p className="mt-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-fg-dim">
                        {d.region}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-xl text-accent-gold">
                      {formatPrice(d.price)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fg-bone">{d.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop — editorial rows */}
        <div className="mt-16 hidden border-t border-line md:block">
          {items.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeOutExpo, delay: i * 0.05 }}
            >
              <Link
                href={`/${locale}/menu`}
                className="group grid grid-cols-1 items-center gap-6 border-b border-line py-7 transition-colors md:grid-cols-12 md:gap-8 md:py-8"
              >
                <span className="hidden font-sans text-[15px] font-medium uppercase tracking-[0.24em] text-fg-dim md:col-span-1 md:block">
                  0{i + 1}
                </span>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] md:rounded-[8px] md:col-span-3 md:aspect-[5/4]">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.06]"
                  />
                </div>
                <div className="md:col-span-4 md:pl-8">
                  <h3 className="font-display text-fluid-h3 font-medium text-fg-cream transition-colors duration-300 group-hover:text-accent-gold">
                    {d.name}
                  </h3>
                  {d.nameHi && <p className="mt-1 font-deva text-sm text-fg-muted">{d.nameHi}</p>}
                  <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-fg-dim">
                    {d.region}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-fg-bone md:col-span-3">{d.description}</p>
                <span className="hidden font-display text-[32px] text-accent-gold md:col-span-1 md:block md:text-right">
                  {formatPrice(d.price)}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
