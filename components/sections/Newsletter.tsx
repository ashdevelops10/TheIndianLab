"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { Ornament } from "@/components/ui/Ornament";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative border-t border-accent-gold/25 bg-bg-surface py-[clamp(5rem,12vw,10rem)] section-gradient-center">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <SectionLabel>{t("label")}</SectionLabel>
            <RevealText
              as="h2"
              text={t("title")}
              className="mt-6 font-display text-fluid-h1 text-fg-cream"
            />
          </div>

          <div className="md:col-span-7">
            <p className="max-w-md text-fluid-body text-fg-bone">{t("body")}</p>

            <form
              onSubmit={onSubmit}
              className="mt-10 flex max-w-sm flex-col gap-4"
            >
              <label htmlFor="news-email" className="sr-only">
                Email
              </label>
              <div className="relative flex-1">
                <Ornament
                  size="sm"
                  className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-70"
                />
                <input
                  id="news-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("placeholder")}
                  className="w-full min-w-0 border-b border-line-strong bg-transparent px-7 pb-3 pt-1 text-base text-fg-cream placeholder:text-fg-dim focus:border-accent-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary group w-full disabled:opacity-60"
              >
                <span>{t("submit")}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-700 ease-out-expo group-hover:translate-x-1"
                />
              </button>
            </form>

            <div className="mt-4 h-5 text-sm">
              {status === "success" && <p className="text-accent-gold">{t("success")}</p>}
              {status === "error" && <p className="text-accent-ember">{t("error")}</p>}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
