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
      className="border-y border-accent-gold/25 bg-bg-velvet/80 py-7 shadow-[inset_0_1px_0_rgba(255,231,196,0.06)]"
    >
      <Marquee items={items} speed={90} className="text-fg-cream" separator="✦" />
    </section>
  );
}
