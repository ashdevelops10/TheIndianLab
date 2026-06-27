import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Marquee } from "@/components/ui/Marquee";

export async function ManifestoMarquee({ locale }: { locale: string }) {
  // We render a slow ✦-separated phrase loop using the manifesto items.
  await getTranslations({ locale, namespace: "manifesto" });
  const items = siteConfig.manifesto;
  return (
    <section
      aria-label="Manifesto"
      className="section-dark border-y border-accent-gold/20 py-8"
    >
      <Marquee items={items} speed={90} className="text-fg-cream" separator="✦" />
    </section>
  );
}
