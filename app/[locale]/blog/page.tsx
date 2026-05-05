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
      <section className="pb-32">
        <Container className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/blog/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-bg-surface">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                <span className="text-accent-saffron">{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-fg-dim" />
                <span>{p.readingTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl text-fg-cream">{p.title}</h2>
              <p className="mt-2 text-sm text-fg-muted">{p.excerpt}</p>
              <span className="link-underline mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-cream">
                {t("read")} <ArrowUpRight size={12} />
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
