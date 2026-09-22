import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { FAQList } from "@/components/ui/FAQList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getAllBlogPosts } from "@/lib/blog";
import { getBlogFaqs } from "@/lib/blog-faqs";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata = createMetadata({
  title: "Blog | Sterling Forensic",
  description:
    "Practical notes for solicitors on instructing forensic accountants, letters of instruction, expert evidence and financial disputes in England and Wales.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const { faqs, heading } = getBlogFaqs();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd data={blogLd} />
      <JsonLd data={faqPageSchema(faqs)} />

      <PageHero
        title="Blog"
        subtitle="Practical notes for solicitors on instructing forensic accountants and preparing expert financial evidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <Section>
        {posts.length === 0 ? (
          <p className="text-body">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="overflow-hidden rounded-md border border-border bg-white shadow-card"
              >
                {post.image ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-56 w-full"
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 52rem"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="text-xs text-body/70">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <span className="mx-2">·</span>
                    <span>{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 font-heading text-2xl text-primary">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-highlight"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-body">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-highlight hover:underline"
                    >
                      Read article →
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
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
