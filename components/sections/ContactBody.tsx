"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(8),
});
type Data = z.infer<typeof schema>;

export function ContactBody() {
  const t = useTranslations("contact_page");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Data>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Data) => {
    try {
      const r = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(r.ok ? "ok" : "err");
      if (r.ok) reset();
    } catch {
      setStatus("err");
    }
  };

  return (
    <section className="pb-32">
      <Container className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label">Reach us</p>
          <ul className="mt-6 max-w-full space-y-4 text-fg-cream">
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className="link-underline max-w-full break-words">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="link-underline max-w-full break-all">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="text-fg-muted">
              {siteConfig.address.line1}, {siteConfig.address.city}
            </li>
          </ul>

          <div className="mt-12 aspect-[4/3] overflow-hidden border border-line">
            <iframe
              title="Map"
              src={siteConfig.mapsEmbed}
              loading="lazy"
              className="h-full w-full [filter:invert(0.92)_hue-rotate(180deg)_grayscale(0.5)] opacity-80"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-7 space-y-8">
          <div>
            <label className="label mb-2 block">{t("name")}</label>
            <input
              {...register("name")}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-fg-cream focus:border-accent-saffron focus:outline-none"
            />
            {errors.name && <p className="mt-2 text-xs text-accent-ember">Required</p>}
          </div>
          <div>
            <label className="label mb-2 block">{t("email")}</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-fg-cream focus:border-accent-saffron focus:outline-none"
            />
            {errors.email && <p className="mt-2 text-xs text-accent-ember">Valid email required</p>}
          </div>
          <div>
            <label className="label mb-2 block">{t("message")}</label>
            <textarea
              rows={5}
              {...register("message")}
              className="w-full resize-none border-b border-line bg-transparent py-3 text-lg text-fg-cream focus:border-accent-saffron focus:outline-none"
            />
            {errors.message && <p className="mt-2 text-xs text-accent-ember">Tell us a bit more</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
            {t("submit")}
          </button>
          <div className="h-5 text-sm">
            {status === "ok" && <p className="text-accent-saffron">{t("success")}</p>}
            {status === "err" && <p className="text-accent-ember">{t("error")}</p>}
          </div>
        </form>
      </Container>
    </section>
  );
}
