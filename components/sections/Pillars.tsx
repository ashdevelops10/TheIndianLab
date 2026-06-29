import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Ornament } from "@/components/ui/Ornament";
import { GinkgoLines } from "@/components/ui/GinkgoLines";
import { BrandSeal } from "@/components/ui/BrandSeal";
import { siteConfig } from "@/config/site";

export async function Pillars({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "pillars" });

  return (
    <section className="section-cream relative scroll-mt-24 py-[clamp(5rem,12vw,10rem)]">
      <Container>
        {/* Header — logo badge + editorial headline */}
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="flex justify-start md:col-span-3 md:justify-start">
            <div className="grid h-36 w-28 place-items-center rounded-[999px] border border-accent-gold/50 md:h-44 md:w-36">
              <div
                style={{
                  width: 96,
                  height: Math.round(96 * (768 / 988)),
                  backgroundColor: "#CBA66A",
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

        {/* Mobile: manual swipe scroll */}
        <div className="-mx-6 mt-14 sm:hidden">
          <div className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ scrollSnapType: "x mandatory" }}>
            {siteConfig.pillars.map((p, i) => (
              <article
                key={p.no}
                className="flex w-[76vw] max-w-[320px] flex-none flex-col gap-6 rounded-xl border border-[rgba(30,26,20,0.12)] bg-[#EBE2D5] p-6 shadow-[0_4px_24px_-8px_rgba(30,26,20,0.08)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-accent text-5xl text-accent-gold">{p.no}.</span>
                  <Ornament size="sm" className="opacity-70" />
                </div>
                <h3 className="font-display text-3xl leading-tight text-fg-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-fg-bone">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet: 2-column responsive grid */}
        <div className="mt-14 hidden grid-cols-2 gap-4 sm:grid lg:hidden">
          {siteConfig.pillars.map((p, i) => (
            <article
              key={p.no}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-[rgba(30,26,20,0.12)] bg-[#EBE2D5] p-7 shadow-[0_4px_24px_-8px_rgba(30,26,20,0.08)] transition-all duration-700 ease-out hover:border-accent-gold/50 hover:-translate-y-1 hover:shadow-[0_8px_40px_-4px_rgba(203,166,106,0.28),0_2px_12px_-4px_rgba(203,166,106,0.18)]"
            >
              {/* GinkgoLines pattern — fades in on hover */}
              <GinkgoLines className="absolute -right-16 -top-16 h-[260px] w-[260px] opacity-0 transition-opacity duration-700 group-hover:opacity-[0.18]" />
              {/* Gold top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-accent-gold/70 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              {/* Subtle gold inner glow at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 rounded-b-xl bg-gradient-to-t from-accent-gold/[0.06] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="font-accent text-5xl text-accent-gold">{p.no}.</span>
                <Ornament size="sm" className="opacity-40 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />
              </div>
              <h3 className="relative font-display text-2xl leading-tight text-fg-ink">{p.title}</h3>
              <p className="relative text-sm leading-relaxed text-fg-bone">{p.body}</p>
            </article>
          ))}
        </div>

        {/* Desktop: 3-column grid with gold hover glow + GinkgoLines pattern */}
        <div className="mt-20 hidden gap-4 lg:grid lg:grid-cols-3">
          {siteConfig.pillars.map((p, i) => (
            <article
              key={p.no}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-xl border border-[rgba(30,26,20,0.12)] bg-[#EBE2D5] p-8 pb-10 shadow-[0_4px_24px_-8px_rgba(30,26,20,0.08)] transition-all duration-700 ease-out hover:border-accent-gold/50 hover:-translate-y-1.5 hover:shadow-[0_12px_56px_-4px_rgba(203,166,106,0.32),0_4px_16px_-4px_rgba(203,166,106,0.20)] md:p-12 md:pb-14"
            >
              {/* Gold top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-accent-gold/70 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Subtle gold inner glow at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 rounded-b-xl bg-gradient-to-t from-accent-gold/[0.07] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* GinkgoLines — slides up and fades in from bottom-right on hover */}
              <GinkgoLines className="absolute -bottom-20 -right-20 h-[340px] w-[340px] translate-y-8 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-[0.22]" />

              <div className="relative flex items-center justify-between">
                <span className="font-accent text-5xl text-accent-gold md:text-6xl">
                  {p.no}.
                </span>
                <Ornament size="sm" className="opacity-40 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />
              </div>

              <h3 className="relative font-display text-fluid-h3 text-fg-ink">{p.title}</h3>
              <p className="relative text-fluid-body text-fg-bone">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
