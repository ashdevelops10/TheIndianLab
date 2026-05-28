import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { RevealImage } from "@/components/ui/RevealImage";
import { Ornament } from "@/components/ui/Ornament";
import { ArrowUpRight } from "lucide-react";
import { featuredCocktail, cocktails } from "@/content/cocktails";

export async function Cocktails({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "cocktails" });

  return (
    <section className="relative bg-bg-surface py-[clamp(6rem,14vw,12rem)]">
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

        {/* Featured cocktail */}
        <div className="mt-20 grid gap-10 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-6">
            <RevealImage
              src={featuredCocktail.image}
              alt={featuredCocktail.name}
              ratio="4/5"
            />
          </div>
          <div className="md:col-span-6 md:pt-12">
            <p className="marker text-accent-gold">N° 001 — Featured</p>
            <h3 className="mt-4 text-balance font-accent text-fluid-h2 text-accent-goldlight">
              {featuredCocktail.name}
            </h3>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
              Base · {featuredCocktail.base}
            </p>
            <p className="mt-8 max-w-md text-fluid-body text-fg-bone">{t("feature_note")}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="label mb-3">{t("ingredients")}</p>
                <ul className="space-y-1.5 font-mono text-[12px] text-fg-cream/85">
                  {featuredCocktail.ingredients.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="text-accent-gold">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-3">{t("method")}</p>
                <p className="font-mono text-[12px] leading-relaxed text-fg-cream/85">
                  {featuredCocktail.method}
                </p>
                <p className="mt-8 font-display text-2xl text-accent-gold">
                  ${featuredCocktail.price}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three-up grid */}
        <div className="mt-24 grid gap-10 md:grid-cols-3 md:gap-8">
          {cocktails.map((c, i) => (
            <article
              key={c.id}
              className="group relative flex flex-col border-t border-line-strong pt-7"
            >
              <div className="flex items-center justify-between">
                <span className="marker">N° 00{i + 2}</span>
                <Ornament size="sm" />
              </div>

              <div className="relative mt-7 aspect-[4/5] overflow-hidden bg-bg-velvet">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 to-transparent" />
              </div>

              <h4 className="mt-7 font-accent text-2xl text-fg-cream">{c.name}</h4>
              <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.28em] text-fg-muted">
                {c.base}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-fg-bone">{c.note}</p>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-muted">
                {c.ingredients.map((ing, k) => (
                  <li key={ing} className="flex items-center gap-2">
                    {k > 0 && <span className="text-accent-gold/60">·</span>}
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted sm:tracking-[0.28em]">
                  {c.method}
                </span>
                <span className="font-display text-xl text-accent-gold">${c.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href={`/${locale}/menu`}
            className="link-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-gold"
          >
            {t("cta")} <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
