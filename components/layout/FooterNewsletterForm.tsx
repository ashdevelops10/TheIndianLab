"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Ornament } from "@/components/ui/Ornament";

export function FooterNewsletterForm() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-8">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="footer-news-email" className="sr-only">
          Email
        </label>
        <div className="relative flex-1">
          <Ornament
            size="sm"
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-70"
          />
          <input
            id="footer-news-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t("placeholder")}
            className="w-full min-w-0 border-b border-line-strong bg-transparent px-7 pb-3 pt-1 text-base text-fg-cream placeholder:text-fg-dim focus:border-accent-gold focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-primary group w-full disabled:opacity-60 sm:w-auto"
        >
          <span>{t("submit")}</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-700 ease-out-expo group-hover:translate-x-1"
          />
        </button>
      </form>
      <div className="mt-3 min-h-5 text-sm">
        {status === "success" && <p className="text-accent-gold">{t("success")}</p>}
        {status === "error" && <p className="text-accent-ember">{t("error")}</p>}
      </div>
    </div>
  );
}
