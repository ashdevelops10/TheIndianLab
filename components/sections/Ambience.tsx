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
      img: u("photo-1517248135467-4c7edcad34c4"),
      label: t("interior_label"),
      caption: t("interior_caption"),
      ratio: "aspect-[3/4]",
    },
    {
      key: "patio",
      img: u("photo-1559339352-11d035aa65de"),
      label: t("patio_label"),
      caption: t("patio_caption"),
      ratio: "aspect-[4/5]",
    },
    {
      key: "music",
      img: u("photo-1514525253161-7a46d19cd819"),
      label: t("music_label"),
      caption: t("music_caption"),
      ratio: "aspect-[3/4]",
    },
  ];

  return (
    <section className="relative bg-bg-surface py-[clamp(6rem,14vw,12rem)]">
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

        <div className="mt-20 grid gap-10 md:grid-cols-12 md:gap-8">
          {tiles.map((tile, i) => (
            <figure
              key={tile.key}
              className={[
                "group relative",
                i === 0 ? "md:col-span-4 md:mt-24" : "",
                i === 1 ? "md:col-span-5" : "",
                i === 2 ? "md:col-span-3 md:mt-16" : "",
              ].join(" ")}
            >
              <div className={`relative ${tile.ratio} overflow-hidden bg-bg-velvet`}>
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
              <figcaption className="mt-5">
                <p className="font-display italic text-2xl text-accent-goldlight">{tile.label}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-bone">{tile.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
