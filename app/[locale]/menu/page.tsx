import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { MenuExplorer } from "@/components/sections/MenuExplorer";

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "menu_page" });
  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} lead={t("intro")} />
      <MenuExplorer />
    </>
  );
}
