import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealImage } from "@/components/ui/RevealImage";
import { team } from "@/content/team";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about_page" });

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

      <section className="py-[clamp(4rem,10vw,8rem)]">
        <Container className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <RevealImage
              src="https://images.unsplash.com/photo-1543007354-66bb3df58e9d?auto=format&fit=crop&w=1600&q=85"
              alt="Kitchen scene"
              ratio="4/5"
            />
          </div>
          <div className="md:col-span-5 md:pt-12">
            <SectionLabel>01 / {t("philosophy_title")}</SectionLabel>
            <p className="mt-8 font-display text-fluid-h3 leading-snug text-fg-cream">
              {t("philosophy")}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-bg-surface py-[clamp(4rem,10vw,8rem)]">
        <Container>
          <SectionLabel>02 / {t("team_title")}</SectionLabel>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-bg-elevated">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover grayscale transition duration-[1200ms] ease-out-expo group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-display text-xl text-fg-cream">{m.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-saffron">
                    {m.role}
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
