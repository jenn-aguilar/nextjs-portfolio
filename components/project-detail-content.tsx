import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/config/projects";
import { Markdown } from "@/components/markdown";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { TechChip } from "@/lib/tech-icons";

export function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <>
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
              <TechChip key={t} name={t} />
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
    </>
  );
}
