import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactSection } from "@/components/contact-section";
import { ArrowIcon, OutIcon } from "@/components/icons";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { findFlagship, flagships } from "@/lib/projects";

export function generateStaticParams() {
  return flagships.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findFlagship(slug);
  if (!project) return {};
  const title = `${project.name} case study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      type: "article",
      locale: "en_SG",
      url: `/work/${project.slug}`,
      siteName: "Anselm Long",
      images: [{ url: project.image, width: 1600, height: 1000, alt: project.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [{ url: project.image, alt: project.alt }],
    },
  };
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-ink py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
      <h2 className="display text-[2rem] sm:text-[2.5rem] lg:col-span-4">{title}</h2>
      <div className="lg:col-span-8">{children}</div>
    </section>
  );
}

function Steps({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[1.25rem_1fr] gap-3 border-b border-rule py-4 first:pt-0 last:border-b-0">
          <span aria-hidden="true" className="mt-[0.6em] size-2 rounded-full bg-cobalt" />
          <span className="max-w-[62ch]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = findFlagship(slug);
  if (!project) notFound();
  const { caseStudy } = project;
  const index = flagships.indexOf(project);
  const next = flagships[(index + 1) % flagships.length];

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article>
          <header className="mx-auto max-w-[84rem] px-4 pt-12 sm:px-8 sm:pt-16">
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center gap-2 text-ink-soft hover:text-ink"
            >
              <ArrowIcon className="size-4 rotate-180" />
              All work
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
              <div className="lg:col-span-8">
                <h1 className="display rise text-[3.25rem] sm:text-[5rem] lg:text-[6rem]">
                  {project.name}
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-[1.25rem] leading-relaxed">{project.summary}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 font-medium text-paper transition-colors hover:bg-cobalt"
                >
                  Visit {project.host}
                  <OutIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[84rem] px-4 pt-14 sm:px-8 sm:pt-20">
            <div className="shot rise overflow-hidden rounded-xl bg-paper-deep">
              <Image
                src={project.image}
                alt={project.alt}
                width={1600}
                height={1000}
                priority
                sizes="(min-width: 1344px) 1280px, 100vw"
                className="aspect-[16/10] h-auto w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[84rem] px-4 py-20 sm:px-8 sm:py-28">
            <Block title="The problem">
              <p className="display max-w-[34ch] text-[1.6rem] leading-snug sm:text-[1.9rem]">
                {caseStudy.problem}
              </p>
            </Block>
            <Block title="What I built">
              <Steps items={caseStudy.built} />
            </Block>
            <Block title="How it works">
              <Steps items={caseStudy.howItWorks} />
            </Block>
            <Block title="What it enables">
              <p className="max-w-[62ch]">{caseStudy.enables}</p>
            </Block>
          </div>
        </article>

        <nav aria-label="Next case study" className="border-t border-rule">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-[84rem] flex-wrap items-end justify-between gap-6 px-4 py-16 sm:px-8 sm:py-20"
          >
            <span>
              <span className="block text-base text-ink-soft">Next case study</span>
              <span className="display mt-2 block text-[2.5rem] group-hover:text-cobalt sm:text-[3.5rem]">
                {next.name}
              </span>
            </span>
            <span className="inline-flex size-14 items-center justify-center rounded-full border border-ink transition-colors group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-paper">
              <ArrowIcon className="size-5" />
            </span>
          </Link>
        </nav>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
