"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { easeOutExpo } from "@/lib/motion";

const navItems = [
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "gallery", href: "/gallery" },
  { key: "events", href: "/events" },
  { key: "blog", href: "/blog" },
  { key: "reservations", href: "/reservations" },
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out-expo",
          scrolled || open
            ? "bg-bg-base/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
          <Link
            href={lp("")}
            className="flex items-baseline gap-2 font-display text-lg tracking-tight text-fg-cream"
            onClick={() => setOpen(false)}
          >
            <span>The Indian Lab</span>
            <span className="text-accent-gold">·</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-fg-muted sm:inline">
              EST · MMXXVI
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.key}
                href={lp(item.href)}
                className="link-underline font-mono text-[10.5px] uppercase tracking-[0.28em] text-fg-bone transition-colors hover:text-accent-gold"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <LocaleSwitcher className="hidden sm:flex" />
            <Link
              href={lp("/reservations")}
              className="btn btn-ghost hidden md:inline-flex"
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
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-page flex h-full flex-col justify-between pb-12 pt-24">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={lp(item.href)}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-line py-4 font-display text-3xl text-fg-cream transition-colors hover:text-accent-gold"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-fg-dim">
                          N° 0{i + 1}
                        </span>
                        {t(item.key)}
                      </span>
                      <span className="font-display italic text-base text-accent-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
                className="flex flex-col gap-6"
              >
                <Link
                  href={lp("/menu")}
                  onClick={() => setOpen(false)}
                  className="btn btn-primary self-start"
                >
                  {t("discover")}
                </Link>
                <LocaleSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
