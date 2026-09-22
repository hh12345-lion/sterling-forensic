import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { FAQList } from "@/components/ui/FAQList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getBlogBySlug } from "@/lib/blog";
import { getBlogFaqs } from "@/lib/blog-faqs";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const meta = createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    openGraphType: "article",
  });

  if (post.image) {
    const images = [
      {
        url: `${SITE_URL}${post.image}`,
        width: 1600,
        height: 1067,
        alt: post.imageAlt || post.title,
      },
    ];
    return {
      ...meta,
      openGraph: {
        ...(typeof meta.openGraph === "object" ? meta.openGraph : {}),
        type: "article",
        images,
      },
      twitter: {
        ...(typeof meta.twitter === "object" ? meta.twitter : {}),
        images: [`${SITE_URL}${post.image}`],
      },
    };
  }

  return meta;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const { faqs, heading } = getBlogFaqs(post.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    url,
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageSchema(faqs)} />

      {post.image ? (
        <div className="relative mx-auto h-[min(26rem,50vw)] w-full max-w-5xl border-b border-border">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <PageHero
        title={post.title}
        subtitle={post.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <Section>
        <p className="text-xs text-body/70">
          <time dateTime={post.updated || post.date}>
            {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="mx-2">·</span>
          <span>{post.readingTime}</span>
        </p>
        <div
          className="blog-prose mt-8 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p className="mt-12 border-t border-border pt-8 text-sm">
          <Link
            href="/blog"
            className="font-medium text-highlight hover:underline"
          >
            ← Back to the blog
          </Link>
          <span className="mx-3 text-body/50">·</span>
          <Link
            href="/contact"
            className="font-medium text-highlight hover:underline"
          >
            Contact Sterling Forensic
          </Link>
        </p>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          {heading}
        </h2>
        <div className="mt-8 max-w-3xl">
          <FAQList items={faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
