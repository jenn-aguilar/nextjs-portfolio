import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { getPaper, getPapers } from "@/lib/queries";
import { CopyButton } from "@/components/copy-button";
import { Markdown } from "@/components/markdown";

export function generateStaticParams() {
  return getPapers().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) return {};
  return { title: paper.title, description: paper.abstract };
}

export default async function PaperDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  return (
    <article className="container-x section max-w-3xl">
      <Link
        href="/papers"
        className="mb-8 inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
      >
        <ArrowLeft size={14} /> All papers
      </Link>

      <header>
        <div className="flex items-center gap-2 text-sm text-ink-faint">
          {paper.venue && <span>{paper.venue}</span>}
          {paper.year && <span>· {paper.year}</span>}
        </div>
        <h1 className="h-section mt-2">{paper.title}</h1>
        {paper.authors && paper.authors.length > 0 && (
          <p className="mt-2 text-ink-muted">{paper.authors.join(", ")}</p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          {paper.pdfUrl && (
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary"
            >
              <Download size={14} /> PDF
            </a>
          )}
          {paper.bibtex && <CopyButton value={paper.bibtex} label="Copy BibTeX" />}
        </div>
      </header>

      {paper.abstract && (
        <section className="mt-10">
          <h2 className="font-display text-lg font-semibold">Abstract</h2>
          <p className="mt-3 text-ink-muted">{paper.abstract}</p>
        </section>
      )}

      {paper.body && (
        <div className="mt-12">
          <Markdown>{paper.body}</Markdown>
        </div>
      )}
    </article>
  );
}
