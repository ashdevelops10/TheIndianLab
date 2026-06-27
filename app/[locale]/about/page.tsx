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

      <section className="section-cream py-[clamp(4rem,10vw,8rem)]">
        <Container className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <RevealImage
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=88"
              alt="Chef finishing a fine-dining plate"
              ratio="4/5"
            />
          </div>
          <div className="md:col-span-5 md:pt-12">
            <SectionLabel>01 / {t("philosophy_title")}</SectionLabel>
            <p className="mt-8 font-display text-fluid-h3 font-medium leading-snug text-fg-ink">
              {t("philosophy")}
            </p>
          </div>
        </Container>
      </section>

      <section className="section-dark border-t border-line py-[clamp(4rem,10vw,8rem)]">
        <Container>
          <SectionLabel>02 / {t("team_title")}</SectionLabel>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bg-elevated">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover grayscale transition duration-[800ms] ease-out-expo group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5">
                  <p className="font-display text-xl font-medium text-fg-cream">{m.name}</p>
                  <p className="mt-1 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent-gold">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-bone">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
