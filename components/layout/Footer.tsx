import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Ornament, OrnamentRule } from "@/components/ui/Ornament";

export async function Footer({ locale }: { locale: string }) {
  const tF = await getTranslations({ locale, namespace: "footer" });
  const tV = await getTranslations({ locale, namespace: "visit" });

  const lp = (p: string) => `/${locale}${p}`;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-base">
      <Container className="py-20">
        {/* Massive display wordmark */}
        <Link
          href={lp("")}
          aria-label="The Indian Lab"
          className="block font-display text-fluid-display leading-none text-fg-cream/95 hover:text-accent-goldlight transition-colors duration-700 ease-out-expo"
        >
          The Indian
          <span className="italic-display"> Lab</span>
          <span className="text-accent-gold">.</span>
        </Link>

        <p className="mt-6 max-w-md text-fluid-body text-fg-bone">{tF("tagline")}</p>

        <OrnamentRule className="my-16" />

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <p className="label mb-4">{tV("hours_title")}</p>
            <ul className="space-y-1 text-sm">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 border-b border-line py-1.5"
                >
                  <span className="text-fg-muted">{h.day}</span>
                  <span className="text-fg-cream">{h.time}</span>
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
            </address>
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

      <Container className="flex flex-col items-start justify-between gap-3 border-t border-line py-6 text-xs text-fg-dim md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Ornament size="sm" />
          <p>{tF("rights")}</p>
        </div>
        <p className="font-mono uppercase tracking-[0.28em]">{tF("made")}</p>
      </Container>
    </footer>
  );
}
