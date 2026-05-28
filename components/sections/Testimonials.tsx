"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { testimonials } from "@/content/testimonials";
import { ArrowLeft, ArrowRight } from "lucide-react";

const portrait =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 6500, stopOnInteraction: false })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative py-[clamp(6rem,14vw,12rem)]">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          {/* portrait of the room */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-bg-velvet">
              <Image
                src={portrait}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-base/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.32em] text-fg-cream/85">
                The Room · 8 PM
              </span>
            </div>
          </div>

          {/* quote carousel */}
          <div className="md:col-span-7 md:pt-16">
            <div className="flex items-start justify-between gap-8">
              <div className="min-w-0">
                <SectionLabel>{t("label")}</SectionLabel>
                <RevealText
                  as="h2"
                  text={t("title")}
                  className="mt-6 text-balance font-display text-fluid-h2 text-fg-cream"
                />
              </div>
              <div className="hidden gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="grid h-12 w-12 place-items-center border border-line text-fg-cream transition-colors hover:border-accent-gold hover:text-accent-gold"
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  className="grid h-12 w-12 place-items-center border border-line text-fg-cream transition-colors hover:border-accent-gold hover:text-accent-gold"
                  aria-label="Next"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((tm, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_100%] pr-6">
                    <figure className="relative">
                      <span
                        aria-hidden
                        className="font-accent absolute -left-2 -top-10 select-none text-7xl leading-none text-accent-gold/30 md:text-8xl"
                      >
                        “
                      </span>
                      <blockquote className="font-accent text-2xl leading-snug text-fg-cream sm:text-3xl md:text-4xl">
                        {tm.quote}
                      </blockquote>
                      <figcaption className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
                        — {tm.author} · {tm.city}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-px w-10 transition-colors duration-700 ${
                    i === selected ? "bg-accent-gold" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
