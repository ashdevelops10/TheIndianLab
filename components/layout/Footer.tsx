import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Ornament, OrnamentRule } from "@/components/ui/Ornament";
import { BrandSeal } from "@/components/ui/BrandSeal";
import { GinkgoLines } from "@/components/ui/GinkgoLines";
import { FooterNewsletterForm } from "./FooterNewsletterForm";

export async function Footer({ locale }: { locale: string }) {
  const tF = await getTranslations({ locale, namespace: "footer" });
  const tV = await getTranslations({ locale, namespace: "visit" });
  const tN = await getTranslations({ locale, namespace: "newsletter" });

  const lp = (p: string) => `/${locale}${p}`;
  const directionsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postal}, ${siteConfig.address.country}`,
  )}`;

  return (
    <footer className="section-burgundy relative overflow-hidden border-t border-accent-gold/20">
      {/* botanical line art — bottom-right */}
      <GinkgoLines className="pointer-events-none absolute -bottom-20 -right-16 h-[460px] w-[520px] opacity-[0.16]" />
      <Container className="relative py-14 md:py-[clamp(5rem,10vw,8rem)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <Link
              href={lp("")}
              aria-label="The Indian Lab"
              className="inline-flex text-fg-cream/95 transition-opacity duration-300 ease-out-expo hover:opacity-80"
            >
              <BrandSeal variant="circle" size={132} className="h-auto w-[112px] sm:w-[132px]" />
            </Link>

            <p className="mt-5 max-w-md text-fluid-body leading-relaxed text-fg-bone">{tF("tagline")}</p>
            <p className="label mt-8 mb-4 md:mt-10">{tN("label")}</p>
            <h2 className="max-w-lg font-display text-fluid-h3 font-medium text-fg-cream">{tN("title").replace(/\*/g, "")}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-fg-bone">{tN("body")}</p>
            <FooterNewsletterForm />
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] min-h-[240px] overflow-hidden border border-accent-gold/30 bg-bg-surface sm:min-h-[320px]">
              <iframe
                title="Map"
                src={siteConfig.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full opacity-90 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.7)_sepia(0.2)]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line-strong" />
              <span className="pointer-events-none absolute bottom-5 right-5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
                Langford · BC
              </span>
            </div>
          </div>
        </div>

        <OrnamentRule className="my-10 md:my-14" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <p className="label mb-4">{tV("hours_title")}</p>
            <ul className="space-y-1 text-sm">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-line py-1.5"
                >
                  <span className="min-w-0 flex-1 text-fg-muted">{h.day}</span>
                  <span className="text-right text-fg-cream">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">{tV("address_title")}</p>
            <address className="not-italic text-sm leading-relaxed text-fg-bone">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region}
              <br />
              {siteConfig.address.postal}
              <br />
              {siteConfig.address.country}
            </address>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-sm text-accent-gold link-underline"
            >
              {tV("directions")}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="mt-4 block text-sm text-fg-cream link-underline"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-1 block text-sm text-fg-bone link-underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">Explore</p>
            <ul className="space-y-2 text-sm text-fg-bone">
              <li><Link href={lp("/menu")} className="link-underline">Menu</Link></li>
              <li><Link href={lp("/about")} className="link-underline">About</Link></li>
              <li><Link href={lp("/gallery")} className="link-underline">Gallery</Link></li>
              <li><Link href={lp("/events")} className="link-underline">Private Events</Link></li>
              <li><Link href={lp("/reservations")} className="link-underline">Reservations</Link></li>
              <li><Link href={lp("/contact")} className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">Follow</p>
            <ul className="space-y-2 text-sm text-fg-bone">
              <li>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="link-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="link-underline">
                  Facebook
                </a>
              </li>
            </ul>
            <p className="label mt-8 mb-3">Order</p>
            <ul className="space-y-2 text-sm text-fg-muted">
              <li><a href={siteConfig.ordering.uberEats} target="_blank" rel="noreferrer" className="link-underline">Uber Eats</a></li>
              <li><a href={siteConfig.ordering.doorDash} target="_blank" rel="noreferrer" className="link-underline">DoorDash</a></li>
              <li><a href={siteConfig.ordering.skip} target="_blank" rel="noreferrer" className="link-underline">SkipTheDishes</a></li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="relative flex flex-col items-start justify-between gap-3 border-t border-accent-gold/20 py-6 text-xs text-fg-muted md:flex-row md:items-center">
        <div className="flex max-w-full items-start gap-3">
          <Ornament size="sm" />
          <p>{tF("rights")}</p>
        </div>
        <p className="max-w-full font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] sm:tracking-[0.26em]">{tF("made")}</p>
      </Container>
    </footer>
  );
}
