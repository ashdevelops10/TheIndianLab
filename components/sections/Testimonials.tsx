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
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=88";

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
    <section className="section-cream relative py-[clamp(5rem,12vw,10rem)]">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          {/* portrait of the room */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bg-velvet">
              <Image
                src={portrait}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-burgundy/45 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-fg-cream/90">
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
                  className="mt-6 text-balance font-display text-fluid-h2 font-medium leading-[1.08] text-fg-ink"
                />
              </div>
              <div className="hidden gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="grid h-12 w-12 place-items-center rounded-full border border-accent-bordeaux/30 text-accent-bordeaux transition-colors duration-300 hover:border-accent-bordeaux hover:bg-accent-bordeaux hover:text-fg-cream"
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  className="grid h-12 w-12 place-items-center rounded-full border border-accent-bordeaux/30 text-accent-bordeaux transition-colors duration-300 hover:border-accent-bordeaux hover:bg-accent-bordeaux hover:text-fg-cream"
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
                        className="font-display absolute -left-2 -top-12 select-none text-8xl leading-none text-accent-gold/40 md:text-9xl"
                      >
                        &ldquo;
                      </span>
                      <blockquote className="font-display text-2xl leading-snug text-fg-ink sm:text-3xl md:text-[2.5rem]">
                        {tm.quote}
                      </blockquote>
                      <figcaption className="mt-10 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-fg-muted">
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
