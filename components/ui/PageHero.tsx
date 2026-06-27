import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { GinkgoLines } from "@/components/ui/GinkgoLines";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="section-burgundy relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <GinkgoLines className="pointer-events-none absolute -right-24 -top-12 h-[440px] w-[560px] opacity-[0.2]" />
      <div aria-hidden className="grain-overlay" />
      <Container className="relative grid gap-10 md:grid-cols-12">
        <div className="md:col-span-10">
          <SectionLabel>{eyebrow}</SectionLabel>
          <RevealText
            as="h1"
            text={title}
            className="mt-6 max-w-4xl text-balance font-display text-fluid-h1 font-medium leading-[1.05] text-fg-cream"
          />
          {lead && (
            <p className="mt-8 max-w-xl text-fluid-body leading-relaxed text-fg-bone">{lead}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
