import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export async function PressMarquee({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "press" });
  return (
    <section className="section-burgundy border-y border-accent-gold/20 py-14">
      <Container className="mb-7 flex items-center justify-between">
        <SectionLabel>{t("label")}</SectionLabel>
        <span className="hidden font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-fg-muted md:inline">
          Seen, shared, and celebrated
        </span>
      </Container>
      <Marquee items={siteConfig.press} speed={75} separator="✦" />
    </section>
  );
}
