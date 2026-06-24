import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

export async function Ambience({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "ambience" });

  const tiles = [
    {
      key: "interior",
      img: u("photo-1514933651103-005eec06c04b"),
      label: t("interior_label"),
      caption: t("interior_caption"),
    },
    {
      key: "patio",
      img: u("photo-1552566626-52f8b828add9"),
      label: t("patio_label"),
      caption: t("patio_caption"),
    },
    {
      key: "music",
      img: u("photo-1414235077428-338989a2e8c0"),
      label: t("music_label"),
      caption: t("music_caption"),
    },
  ];

  return (
    <section className="relative bg-bg-surface py-[clamp(6rem,14vw,12rem)] section-gradient-top-left">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-6 font-display text-fluid-h1 text-fg-cream"
            />
          </div>
          <p className="md:col-span-5 md:col-start-8 max-w-md text-fluid-body text-fg-bone">
            {t("body")}
          </p>
        </div>

        <div className="mobile-loop-shell mt-14 md:hidden">
          <div className="mobile-loop-fade" />
          <div className="mobile-loop-track animate-marquee-slow">
            {[...tiles, ...tiles].map((tile, i) => (
              <figure
                key={`${tile.key}-${i}`}
                className={`mobile-loop-card w-[76vw] max-w-[320px] ${i % 2 ? "translate-y-5" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-velvet">
                  <Image
                    src={tile.img}
                    alt={tile.label}
                    fill
                    sizes="76vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/65 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-cream/85">
                    N° 00{(i % tiles.length) + 1}
                  </span>
                </div>
                <figcaption className="border-x border-b border-line bg-bg-base/92 p-5">
                  <p className="font-accent text-3xl leading-none text-accent-goldlight">{tile.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-bone">{tile.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 hidden gap-10 md:grid md:grid-cols-3 md:gap-8">
          {tiles.map((tile, i) => (
            <figure key={tile.key} className="group relative flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-bg-velvet">
                <Image
                  src={tile.img}
                  alt={tile.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/55 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.32em] text-fg-cream/85">
                  N° 00{i + 1}
                </span>
              </div>
              <figcaption className="mt-5 flex flex-1 flex-col">
                <p className="font-accent text-2xl text-accent-goldlight">{tile.label}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-bone">{tile.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
