import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProject, getProjects } from "@/lib/queries";
import { Markdown } from "@/components/markdown";
import { ScreenshotGallery } from "@/components/screenshot-gallery";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="container-x section max-w-3xl">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <header>
        {project.role && (
          <p className="text-sm uppercase tracking-widest text-accent">{project.role}</p>
        )}
        <h1 className="h-section mt-2">{project.title}</h1>
        <p className="mt-4 text-lg text-ink-muted">{project.summary}</p>

        {(project.links?.demo || project.links?.repo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                Live <ExternalLink size={14} />
              </a>
            )}
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-outline"
              >
                <Github size={14} /> Repo
              </a>
            )}
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {project.screenshots && project.screenshots.length > 0 && (
        <ScreenshotGallery screenshots={project.screenshots} />
      )}

      <div className="mt-12">
        <Markdown>{project.body}</Markdown>
      </div>
    </article>
  );
}
