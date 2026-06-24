import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Ornament } from "@/components/ui/Ornament";
import { GinkgoLines } from "@/components/ui/GinkgoLines";
import { siteConfig } from "@/config/site";

export async function Pillars({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "pillars" });

  return (
    <section className="relative scroll-mt-24 py-[clamp(6rem,14vw,12rem)] section-gradient-top-left">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>{t("label")}</SectionLabel>
          <RevealText
            as="h2"
            text={t("title")}
            className="mt-6 font-display text-fluid-h1 text-fg-cream"
          />
        </div>

        {/* Mobile: scrollable cards */}
        <div className="mobile-loop-shell mt-14 sm:hidden">
          <div className="mobile-loop-fade" />
          <div className="mobile-loop-track animate-marquee-slow">
            {[...siteConfig.pillars, ...siteConfig.pillars].map((p, i) => (
              <article
                key={`${p.no}-${i}`}
                className={`mobile-loop-card flex w-[76vw] max-w-[320px] flex-col gap-6 rounded-xl bg-bg-base p-6 ${i % 2 ? "translate-y-5" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-accent text-5xl text-accent-gold">{p.no}.</span>
                  <Ornament size="sm" className="opacity-70" />
                </div>
                <h3 className="font-display text-3xl leading-tight text-fg-cream">{p.title}</h3>
                <p className="text-sm leading-relaxed text-fg-bone">{p.body}</p>
                <span className="mt-auto pt-4 font-mono text-[10.5px] uppercase tracking-[0.24em] text-fg-dim">
                  Pillar {String((i % siteConfig.pillars.length) + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet: 2-column responsive grid */}
        <div className="mt-14 hidden grid-cols-2 gap-4 sm:grid lg:hidden">
          {siteConfig.pillars.map((p, i) => (
            <article
              key={p.no}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-line bg-bg-base p-7 shadow-[0_8px_32px_-16px_rgba(95,0,0,0.3)] transition-all duration-700 ease-out-expo hover:border-accent-gold/30 hover:bg-[#5F0000]/20"
            >
              {/* GinkgoLines pattern — fades in on hover */}
              <GinkgoLines className="absolute -right-16 -top-16 h-[260px] w-[260px] opacity-0 transition-opacity duration-700 group-hover:opacity-30" />
              <div className="relative flex items-center justify-between">
                <span className="font-accent text-5xl text-accent-gold">{p.no}.</span>
                <Ornament size="sm" className="opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <h3 className="relative font-display text-2xl leading-tight text-fg-cream">{p.title}</h3>
              <p className="relative text-sm leading-relaxed text-fg-bone">{p.body}</p>
              <span className="relative mt-auto pt-4 font-mono text-[10.5px] uppercase tracking-[0.28em] text-fg-dim">
                Pillar {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        {/* Desktop: 3-column grid with wine red hover + GinkgoLines */}
        <div className="mt-20 hidden gap-4 lg:grid lg:grid-cols-3">
          {siteConfig.pillars.map((p, i) => (
            <article
              key={p.no}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-xl border border-line bg-bg-base p-8 shadow-[0_8px_40px_-16px_rgba(95,0,0,0.3)] transition-all duration-700 ease-out-expo hover:border-accent-gold/35 hover:bg-[#5F0000]/25 hover:shadow-[0_16px_56px_-16px_rgba(95,0,0,0.55)] md:p-12"
            >
              {/* Gold top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* GinkgoLines — slides up and fades in from bottom-right on hover */}
              <GinkgoLines className="absolute -bottom-20 -right-20 h-[340px] w-[340px] translate-y-8 opacity-0 transition-all duration-700 ease-out-expo group-hover:translate-y-0 group-hover:opacity-35" />

              <div className="relative flex items-center justify-between">
                <span className="font-accent text-5xl text-accent-gold md:text-6xl">
                  {p.no}.
                </span>
                <Ornament size="sm" className="opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              <h3 className="relative font-display text-fluid-h3 text-fg-cream">{p.title}</h3>
              <p className="relative text-fluid-body text-fg-bone">{p.body}</p>

              <span className="relative mt-auto pt-8 font-mono text-[10.5px] uppercase tracking-[0.32em] text-fg-dim">
                Pillar {String(i + 1).padStart(2, "0")} / {String(siteConfig.pillars.length).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
