import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealImage } from "@/components/ui/RevealImage";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const offerings = [
  {
    key: "private",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=88",
    capacity: "8 – 24",
    from: 95,
  },
  {
    key: "corporate",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=88",
    capacity: "20 – 60",
    from: 75,
  },
  {
    key: "celebrations",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=88",
    capacity: "30 – 80",
    from: 110,
  },
] as const;

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "events_page" });

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <section className="section-dark pb-32 pt-[clamp(4rem,8vw,6rem)]">
        <Container className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {offerings.map((o, i) => (
            <article
              key={o.key}
              className="group flex flex-col"
            >
              <RevealImage src={o.image} alt={t(o.key)} ratio="4/5" />
              <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="label">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-fg-cream">{t(o.key)}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{o.capacity} guests</p>
                </div>
                <p className="shrink-0 text-right font-sans text-xs font-medium uppercase tracking-[0.16em] text-accent-gold">
                  {t("from")} ${o.from}/pp
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="link-underline mt-6 inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-cream"
              >
                {t("inquire")} <ArrowUpRight size={12} />
              </Link>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
