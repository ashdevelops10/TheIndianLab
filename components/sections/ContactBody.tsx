"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(8),
});
type Data = z.infer<typeof schema>;

export function ContactBody({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
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
    <section className="relative pt-36 pb-28 md:pt-48 md:pb-36">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-x-20">
        {/* Left — heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <SectionLabel>{eyebrow}</SectionLabel>
          <RevealText
            as="h1"
            text={title}
            className="mt-6 text-balance font-display text-fluid-h1 text-fg-cream"
          />
          {lead && (
            <p className="mt-8 max-w-sm text-fluid-body text-fg-muted">{lead}</p>
          )}
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 lg:col-span-7"
        >
          <div>
            <label className="label mb-2 block">{t("name")}</label>
            <input
              {...register("name")}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-fg-cream focus:border-accent-saffron focus:outline-none [font-family:Arial,Helvetica,sans-serif]"
            />
            {errors.name && <p className="mt-2 text-xs text-accent-ember">Required</p>}
          </div>
          <div>
            <label className="label mb-2 block">{t("email")}</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-fg-cream focus:border-accent-saffron focus:outline-none [font-family:Arial,Helvetica,sans-serif]"
            />
            {errors.email && <p className="mt-2 text-xs text-accent-ember">Valid email required</p>}
          </div>
          <div>
            <label className="label mb-2 block">{t("message")}</label>
            <textarea
              rows={6}
              {...register("message")}
              className="w-full resize-none border-b border-line bg-transparent py-3 text-lg text-fg-cream focus:border-accent-saffron focus:outline-none [font-family:Arial,Helvetica,sans-serif]"
            />
            {errors.message && <p className="mt-2 text-xs text-accent-ember">Tell us a bit more</p>}
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:opacity-60">
              {t("submit")}
            </button>
            <div className="mt-4 h-5 text-sm">
              {status === "ok" && <p className="text-accent-saffron">{t("success")}</p>}
              {status === "err" && <p className="text-accent-ember">{t("error")}</p>}
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}