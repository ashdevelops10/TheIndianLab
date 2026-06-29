import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { RevealImage } from "@/components/ui/RevealImage";
import { BrandSeal } from "@/components/ui/BrandSeal";
import { ArrowUpRight } from "lucide-react";

export async function StoryTeaser({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "story" });
  return (
    <section className="section-cream relative overflow-hidden py-[clamp(4rem,8vw,7rem)]">
      <Container className="grid items-center gap-8 md:grid-cols-12 md:gap-x-10 lg:gap-x-14">
        {/* Left — feature image with floating logo badge */}
        <div className="relative md:col-span-5">
          <RevealImage
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=88"
            alt="Chef finishing a fine-dining plate"
            ratio="4/5"
          />
          {/* floating logo badge */}
          <div className="absolute -bottom-6 right-4 grid h-24 w-24 place-items-center rounded-full border border-accent-bordeaux/30 bg-bg-cream shadow-[0_24px_60px_-30px_rgba(75,19,17,0.5)] md:h-28 md:w-28">
            <div
              style={{
                width: 48,
                height: Math.round(48 * (768 / 988)),
                backgroundColor: "#4B1311",
                maskImage: "url(/assets/logo.png)",
                WebkitMaskImage: "url(/assets/logo.png)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          </div>
        </div>

        {/* Right — editorial copy */}
        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <SectionLabel>{t("label")}</SectionLabel>
          <RevealText
            as="h2"
            text={t("title")}
            className="mt-6 font-display text-fluid-h1 font-medium leading-[1.05] text-fg-ink"
          />

          <div className="mt-6 h-px w-16 bg-accent-gold" />

          <p className="mt-6 text-fluid-body leading-relaxed text-fg-bone">{t("body")}</p>

          <figure className="mt-8 border-l-2 border-accent-gold pl-5">
            <blockquote className="font-display text-fluid-h3 italic leading-snug text-accent-bordeaux">
              &ldquo;{t("pullquote")}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.26em] text-fg-muted">
              {t("signoff")}
            </figcaption>
          </figure>

          <Link
            href={`/${locale}/about`}
            className="link-underline mt-10 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-bordeaux"
          >
            {t("cta")} <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
