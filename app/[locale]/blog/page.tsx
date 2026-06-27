import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { posts } from "@/content/posts";
import { ArrowUpRight } from "lucide-react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog_page" });

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />
      <section className="section-dark pb-32 pt-[clamp(4rem,8vw,6rem)]">
        <Container className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/blog/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bg-surface">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[800ms] ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-fg-muted">
                <span className="text-accent-gold">{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-fg-dim" />
                <span>{p.readingTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-medium text-fg-cream transition-colors duration-300 group-hover:text-accent-gold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-bone">{p.excerpt}</p>
              <span className="link-underline mt-4 inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-cream">
                {t("read")} <ArrowUpRight size={12} />
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
