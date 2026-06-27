import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { BrandSeal } from "@/components/ui/BrandSeal";
import { siteConfig } from "@/config/site";

export async function Pillars({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "pillars" });

  return (
    <section className="section-cream relative scroll-mt-24 py-[clamp(5rem,12vw,10rem)]">
      <Container>
        {/* Header — logo badge + editorial headline */}
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="flex justify-center md:col-span-3 md:justify-start">
            <div className="grid h-32 w-24 place-items-center rounded-[999px] border border-accent-gold/50 md:h-40 md:w-32">
              <BrandSeal variant="mark" size={56} />
            </div>
          </div>
          <div className="md:col-span-9">
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-5 font-display text-fluid-h1 font-medium leading-[1.05] text-fg-ink"
            />
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-accent-gold/30" />

        {/* Numbered pillar columns */}
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {siteConfig.pillars.map((p, i) => (
            <article
              key={p.no}
              className="group relative flex flex-col pt-12"
            >
              {/* thin gold divider above each, except first row */}
              <span className="absolute left-0 top-0 font-display text-4xl text-accent-gold/50 md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-fluid-h3 font-medium leading-snug text-fg-ink transition-colors duration-300 group-hover:text-accent-bordeaux">
                {p.title}
              </h3>
              <div className="mt-4 h-px w-10 bg-accent-gold transition-all duration-300 group-hover:w-20" />
              <p className="mt-5 text-fluid-body leading-relaxed text-fg-bone">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
