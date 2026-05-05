import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { RevealImage } from "@/components/ui/RevealImage";
import { Ornament, OrnamentRule } from "@/components/ui/Ornament";
import { ArrowUpRight } from "lucide-react";

export async function StoryTeaser({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "story" });
  return (
    <section className="relative py-[clamp(6rem,14vw,12rem)]">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-x-16">
        {/* Left rail — eyebrow + title */}
        <div className="md:col-span-5 md:pt-20">
          <SectionLabel>{t("label")}</SectionLabel>
          <RevealText
            as="h2"
            text={t("title")}
            className="mt-6 font-display text-fluid-h1 text-fg-cream"
          />

          <Link
            href={`/${locale}/about`}
            className="link-underline mt-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-gold"
          >
            {t("cta")} <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Right rail — overlapping image then prose */}
        <div className="md:col-span-7 md:-translate-y-6">
          <RevealImage
            src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1600&q=85"
            alt="Tandoor flame in the kitchen"
            ratio="4/5"
            className="md:translate-x-6"
          />
        </div>

        {/* Editorial body — drop cap + pull quote, spans full width */}
        <div className="md:col-span-12 md:mt-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-2 md:pt-3">
              <Ornament size="md" />
              <p className="marker mt-6">A note from the kitchen</p>
            </div>
            <div className="md:col-span-7 md:col-start-3">
              <p className="font-display text-fluid-lead leading-relaxed text-fg-cream/90 drop-cap">
                {t("lead")}
              </p>

              <p className="mt-8 max-w-2xl text-fluid-body text-fg-bone">{t("body")}</p>

              <figure className="mt-14 border-l border-accent-gold/60 pl-7">
                <blockquote className="font-display italic text-fluid-h3 leading-snug text-accent-goldlight">
                  &ldquo;{t("pullquote")}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
                  {t("signoff")}
                </figcaption>
              </figure>
            </div>
          </div>

          <OrnamentRule className="mt-20" />
        </div>
      </Container>
    </section>
  );
}
