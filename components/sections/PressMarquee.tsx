import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export async function PressMarquee({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "press" });
  return (
    <section className="border-y border-line bg-bg-base py-14">
      <Container className="mb-7 flex items-center justify-between">
        <SectionLabel>{t("label")}</SectionLabel>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-fg-dim md:inline">
          As featured in
        </span>
      </Container>
      <Marquee items={siteConfig.press} speed={75} separator="✦" />
    </section>
  );
}
