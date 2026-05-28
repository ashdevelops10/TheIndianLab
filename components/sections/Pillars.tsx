import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Ornament } from "@/components/ui/Ornament";
import { siteConfig } from "@/config/site";

export async function Pillars({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "pillars" });

  return (
    <section className="relative py-[clamp(6rem,14vw,12rem)]">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>{t("label")}</SectionLabel>
          <RevealText
            as="h2"
            text={t("title")}
            className="mt-6 font-display text-fluid-h1 text-fg-cream"
          />
        </div>

        <div className="mt-20 grid gap-px bg-line-strong sm:grid-cols-3 sm:gap-px">
          {siteConfig.pillars.map((p, i) => (
            <article
              key={p.no}
              className="group relative flex flex-col gap-6 bg-bg-base p-8 transition-colors duration-700 ease-out-expo hover:bg-bg-surface md:p-12"
            >
              <div className="flex items-center justify-between">
                <span className="font-accent text-5xl text-accent-gold md:text-6xl">
                  {p.no}.
                </span>
                <Ornament size="sm" className="opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              <h3 className="font-display text-fluid-h3 text-fg-cream">{p.title}</h3>
              <p className="text-fluid-body text-fg-bone">{p.body}</p>

              <span className="mt-auto pt-8 font-mono text-[10.5px] uppercase tracking-[0.32em] text-fg-dim">
                Pillar {String(i + 1).padStart(2, "0")} / {String(siteConfig.pillars.length).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
