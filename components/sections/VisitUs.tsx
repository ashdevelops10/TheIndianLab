import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export async function VisitUs({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "visit" });
  return (
    <section className="relative py-[clamp(6rem,14vw,12rem)] section-gradient-left">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-5">
          <SectionLabel>{t("label")}</SectionLabel>
          <RevealText
            as="h2"
            text={t("title")}
            className="mt-6 font-display text-fluid-h1 text-fg-cream"
          />
          <p className="mt-8 max-w-md text-fluid-body text-fg-bone">{t("lead")}</p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="label mb-4">{t("hours_title")}</p>
              <ul className="space-y-1.5 text-sm text-fg-bone">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex flex-wrap justify-between gap-x-3 gap-y-1 border-b border-line py-1.5">
                    <span className="min-w-0 flex-1 text-fg-muted">{h.day}</span>
                    <span className="text-right text-fg-cream">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label mb-4">{t("address_title")}</p>
              <address className="not-italic text-sm leading-relaxed text-fg-bone">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region}
                <br />
                {siteConfig.address.postal}
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${siteConfig.address.line1} ${siteConfig.address.city}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-gold"
              >
                {t("directions")} <ArrowUpRight size={12} />
              </a>

              <p className="label mt-10 mb-3">{t("contact_title")}</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="link-underline block max-w-full break-words text-sm text-fg-cream"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contact.reservations}`}
                className="link-underline mt-1 block max-w-full break-all text-sm text-fg-bone"
              >
                {siteConfig.contact.reservations}
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden border border-accent-gold/30 bg-bg-surface md:aspect-[5/6]">
            <iframe
              title="Map"
              src={siteConfig.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full opacity-90 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.7)_sepia(0.2)]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line-strong" />
            <span className="pointer-events-none absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.32em] text-accent-gold">
              48.45° N · 123.50° W
            </span>
            <span className="pointer-events-none absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.32em] text-accent-gold">
              Victoria · BC
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
