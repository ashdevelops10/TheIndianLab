import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactBody } from "@/components/sections/ContactBody";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact_page" });
  return <ContactBody eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />;
}
