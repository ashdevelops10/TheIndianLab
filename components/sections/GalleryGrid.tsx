"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { gallery, type GalleryItem } from "@/content/gallery";
import { Container } from "@/components/ui/Container";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";

const FILTERS = ["all", "food", "interior", "events"] as const;
type Filter = (typeof FILTERS)[number];

export function GalleryGrid() {
  const t = useTranslations("gallery_page");
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState(-1);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section className="section-dark pb-32 pt-[clamp(3rem,6vw,5rem)]">
      <Container>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                f === filter ? "text-accent-gold" : "text-fg-muted hover:text-fg-cream",
              )}
            >
              {t(f)}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((g: GalleryItem, i) => (
            <button
              key={g.id}
              onClick={() => setOpen(i)}
              className="group mb-5 block w-full overflow-hidden rounded-sm bg-bg-surface"
              style={{ breakInside: "avoid" }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${g.width} / ${g.height}` }}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </Container>

      <Lightbox
        open={open >= 0}
        index={open >= 0 ? open : 0}
        close={() => setOpen(-1)}
        slides={items.map((g) => ({ src: g.src, alt: g.alt }))}
        styles={{ container: { backgroundColor: "rgba(11,11,12,0.96)" } }}
      />
    </section>
  );
}
