import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { StoryTeaser } from "@/components/sections/StoryTeaser";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Cocktails } from "@/components/sections/Cocktails";
import { Pillars } from "@/components/sections/Pillars";
import { Ambience } from "@/components/sections/Ambience";
import { Testimonials } from "@/components/sections/Testimonials";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <StoryTeaser locale={locale} />
      <SignatureDishes />
      <Cocktails locale={locale} />
      <Pillars locale={locale} />
      <Ambience locale={locale} />
      <Testimonials />
    </>
  );
}
