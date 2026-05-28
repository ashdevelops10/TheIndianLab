import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

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
    <section className="relative pt-36 pb-16 md:pt-48 md:pb-24">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-12">
          <SectionLabel>{eyebrow}</SectionLabel>
          <RevealText
            as="h1"
            text={title}
            className="mt-6 max-w-5xl text-balance font-display text-fluid-h1 text-fg-cream"
          />
          {lead && (
            <p className="mt-8 max-w-xl text-fluid-body text-fg-muted">{lead}</p>
          )}
        </div>
      </Container>
      <div className="hairline mt-16" />
    </section>
  );
}
