import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Ornament } from "@/components/ui/Ornament";
import { BarProgramReveal } from "@/components/sections/BarProgramReveal";
import { CocktailScrollShowcase } from "@/components/sections/CocktailScrollShowcase";
import { ArrowUpRight } from "lucide-react";
import { featuredCocktail, cocktails } from "@/content/cocktails";

export async function Cocktails({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "cocktails" });
  const showcaseProducts = [featuredCocktail, ...cocktails.slice(0, 2)];

  return (
    <section className="section-burgundy relative overflow-hidden pb-[clamp(5rem,10vw,8rem)] pt-[clamp(5rem,12vw,10rem)]">
      <div className="pointer-events-none absolute -left-20 -bottom-10 h-[500px] w-[500px] opacity-[0.22]">
        <Image src="/assets/hero-bg.svg" alt="" fill sizes="500px" className="object-contain" />
      </div>
      <Container className="relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — label + headline + body */}
          <div>
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-6 font-display text-fluid-h1 font-medium leading-[1.05] text-fg-cream"
            />
            <p className="mt-8 max-w-md text-fluid-body leading-relaxed text-fg-bone">
              {t("body")}
            </p>
          </div>
          {/* Right — wine glass animation, vertically centred */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <BarProgramReveal />
            </div>
          </div>
        </div>

        <CocktailScrollShowcase
          products={showcaseProducts}
          ingredientsLabel={t("ingredients")}
          methodLabel={t("method")}
        />

        {/* Three-up card grid — hidden on all breakpoints */}
        <div className="hidden gap-10 md:gap-8">
          {cocktails.map((c, i) => (
            <article
              key={c.id}
              className="group relative flex flex-col border-t border-line-strong pt-7"
            >
              <div className="flex items-center justify-between">
                <span className="marker">N° 00{i + 2}</span>
                <Ornament size="sm" />
              </div>

              <div className="relative mt-7 aspect-[4/5] overflow-hidden rounded-sm bg-bg-velvet">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-burgundy/60 to-transparent" />
              </div>

              <h4 className="mt-7 font-display text-2xl font-medium text-fg-cream">{c.name}</h4>
              <p className="mt-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.26em] text-fg-muted">
                {c.base}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-fg-bone">{c.note}</p>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] text-fg-muted">
                {c.ingredients.map((ing, k) => (
                  <li key={ing} className="flex items-center gap-2">
                    {k > 0 && <span className="text-accent-gold/60">·</span>}
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-fg-muted sm:tracking-[0.24em]">
                  {c.method}
                </span>
                <span className="font-display text-lg text-accent-gold">${c.price}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href={`/${locale}/menu`}
            className="inline-flex items-center gap-3 rounded-full border border-accent-gold/60 px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-gold transition-all duration-300 hover:border-accent-gold hover:bg-accent-gold/10"
          >
            {t("cta")} <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
