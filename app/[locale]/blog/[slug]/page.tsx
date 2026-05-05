import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { posts } from "@/content/posts";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-32">
      <Container className="max-w-3xl">
        <Link
          href={`/${locale}/blog`}
          className="link-underline mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted"
        >
          <ArrowLeft size={14} /> Journal
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-saffron">
          {post.category} · {post.readingTime}
        </p>
        <h1 className="mt-4 font-display text-fluid-h1 text-fg-cream">{post.title}</h1>
        <p className="mt-6 text-fluid-body text-fg-muted">{post.excerpt}</p>
      </Container>

      <Container className="mt-16 max-w-5xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>

      <Container className="mt-16 max-w-2xl">
        <div className="space-y-6 text-fluid-body leading-relaxed text-fg-cream/90">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
