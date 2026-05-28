import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export async function PressMarquee({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "press" });
  return (
    <section className="border-y border-accent-gold/25 bg-bg-velvet py-14">
      <Container className="mb-7 flex items-center justify-between">
        <SectionLabel>{t("label")}</SectionLabel>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-fg-muted md:inline">
          Seen, shared, and celebrated
        </span>
      </Container>
      <Marquee items={siteConfig.press} speed={75} separator="✦" />
    </section>
  );
}
