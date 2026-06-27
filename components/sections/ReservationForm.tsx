"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

const schema = z.object({
  date: z.string().min(1),
  time: z.string().min(1),
  party: z.coerce.number().min(1).max(20),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  notes: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const TIMES = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
const PARTY = [2, 3, 4, 5, 6, 7, 8];

export function ReservationForm() {
  const t = useTranslations("reservations_page");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState<"ok" | "err" | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { party: 2 },
  });

  const values = watch();

  const next = async () => {
    const fields: (keyof FormData)[][] = [
      ["date"],
      ["time"],
      ["party"],
      ["name", "email", "phone"],
    ];
    const ok = await trigger(fields[step]);
    if (ok) setStep((s) => Math.min(s + 1, 4));
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setDone(res.ok ? "ok" : "err");
    } catch {
      setDone("err");
    }
  };

  if (done === "ok") {
    return (
      <section className="section-dark">
        <Container className="py-24">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-gold text-bg-burgundy">
              <Check size={28} />
            </div>
            <h2 className="mt-8 font-display text-fluid-h2 font-medium text-fg-cream">{t("success_title")}</h2>
            <p className="mt-4 text-fg-bone">{t("success_body")}</p>
          </div>
        </Container>
      </section>
    );
  }

  const today = new Date().toISOString().split("T")[0];
  const totalSteps = 5;

  return (
    <section className="section-dark">
    <Container className="pb-32 pt-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto grid max-w-2xl gap-10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionLabel>
            {t("step")} {step + 1} {t("of")} {totalSteps}
          </SectionLabel>
          <div className="flex w-full max-w-[180px] gap-1.5 sm:ml-6 sm:flex-1">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span
                key={i}
                className={`h-px flex-1 transition-colors duration-500 ${
                  i <= step ? "bg-accent-gold" : "bg-line"
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            >
              {step === 0 && (
                <div>
                  <label className="label mb-3 block">{t("date")}</label>
                  <input
                    type="date"
                    min={today}
                    {...register("date")}
                    className="w-full border-b border-line bg-transparent py-3 text-2xl text-fg-cream focus:border-accent-gold focus:outline-none [color-scheme:dark]"
                  />
                  {errors.date && <p className="mt-2 text-xs text-accent-ember">Required</p>}
                </div>
              )}

              {step === 1 && (
                <div>
                  <label className="label mb-4 block">{t("time")}</label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {TIMES.map((tm) => (
                      <button
                        type="button"
                        key={tm}
                        onClick={() => setValue("time", tm, { shouldValidate: true })}
                        className={`rounded-sm border px-3 py-3 font-sans text-sm transition-colors duration-300 ${
                          values.time === tm
                            ? "border-accent-gold text-accent-gold"
                            : "border-line text-fg-cream hover:border-accent-gold/50"
                        }`}
                      >
                        {tm}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register("time")} />
                  {errors.time && <p className="mt-2 text-xs text-accent-ember">Choose a time</p>}
                </div>
              )}

              {step === 2 && (
                <div>
                  <label className="label mb-4 block">{t("party")}</label>
                  <div className="flex flex-wrap gap-2">
                    {PARTY.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setValue("party", p, { shouldValidate: true })}
                        className={`grid h-14 w-14 place-items-center rounded-full border font-display text-xl transition-colors duration-300 ${
                          Number(values.party) === p
                            ? "border-accent-gold text-accent-gold"
                            : "border-line text-fg-cream hover:border-accent-gold/50"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <Field label={t("name")} error={errors.name?.message}>
                    <input
                      type="text"
                      {...register("name")}
                      className="field-input"
                    />
                  </Field>
                  <Field label={t("email")} error={errors.email?.message}>
                    <input type="email" {...register("email")} className="field-input" />
                  </Field>
                  <Field label={t("phone")} error={errors.phone?.message}>
                    <input type="tel" {...register("phone")} className="field-input" />
                  </Field>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <Field label={t("notes")}>
                    <textarea
                      rows={4}
                      {...register("notes")}
                      className="field-input resize-none"
                    />
                  </Field>
                  <div className="border border-line p-6 text-sm">
                    <p className="label mb-3">Summary</p>
                    <ul className="space-y-1 text-fg-muted">
                      <li>{values.date} · {values.time}</li>
                      <li>{values.party} guests</li>
                      <li>{values.name} · {values.email}</li>
                    </ul>
                  </div>
                  {done === "err" && <p className="text-sm text-accent-ember">{t("error")}</p>}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(s - 1, 0))}
              disabled={step === 0}
              className="link-underline inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted disabled:opacity-30"
            >
              <ArrowLeft size={14} /> {t("back")}
            </button>
            {step < 4 ? (
              <button type="button" onClick={next} className="btn btn-primary ml-auto">
                {t("next")} <ArrowRight size={14} />
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting} className="btn btn-primary ml-auto disabled:opacity-60">
                {t("submit")} <ArrowRight size={14} />
              </button>
            )}
          </div>
        </form>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid rgba(243,237,228,0.16);
          padding: 0.75rem 0;
          color: #F3EDE4;
          font-size: 1.125rem;
        }
        .field-input:focus { outline: none; border-color: #CBA66A; }
      `}</style>
    </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label mb-2 block">{label}</label>
      {children}
      {error && <p className="mt-2 text-xs text-accent-ember">{error}</p>}
    </div>
  );
}
