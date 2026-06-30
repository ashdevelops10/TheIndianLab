"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";
import { BrandSeal } from "@/components/ui/BrandSeal";
import { GinkgoLines } from "@/components/ui/GinkgoLines";

const navItems = [
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "gallery", href: "/gallery" },
  { key: "events", href: "/events" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled || open
            ? "border-b border-line bg-bg-burgundy/95 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-20 items-center justify-between md:h-24">
          {/* Logo — left */}
          <Link
            href={lp("")}
            className="flex items-center text-fg-cream"
            onClick={() => setOpen(false)}
            aria-label="The Indian Lab"
          >
            <BrandSeal variant="horizontal" size={76} className="transition-opacity hover:opacity-85 md:[--brand-size:92px]" />
          </Link>

          {/* Nav — center */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={lp(item.href)}
                className="link-underline font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-fg-bone transition-colors duration-300 hover:text-accent-gold"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* CTA — right */}
          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href={lp("/reservations")}
              className="btn btn-primary hidden h-11 px-7 py-0 text-[10px] md:inline-flex"
            >
              {t("reserve")}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center text-fg-cream lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="fixed inset-0 z-40 overflow-hidden bg-bg-burgundy lg:hidden"
          >
            {/* botanical decorative line art, bottom-right */}
            <GinkgoLines className="absolute -bottom-24 -right-24 h-[420px] w-[420px] opacity-[0.22]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-burgundy via-bg-burgundy/40 to-transparent" />

            <div className="container-page relative flex h-full flex-col justify-between pb-12 pt-28">
              <nav className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={lp(item.href)}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-5 border-b border-line py-5 transition-colors"
                    >
                      <span className="shrink-0 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-fg-dim">
                        N° 0{i + 1}
                      </span>
                      <span className="min-w-0 break-words font-display text-4xl text-fg-cream transition-colors duration-300 group-hover:text-accent-gold">
                        {t(item.key)}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.45 }}
                className="flex flex-col gap-6"
              >
                <Link
                  href={lp("/menu")}
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  {t("discover")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
