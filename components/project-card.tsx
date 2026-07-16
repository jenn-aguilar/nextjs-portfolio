import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/config/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card group block overflow-hidden p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
          {project.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-ink-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
      {project.role && (
        <p className="mt-1 text-xs uppercase tracking-wider text-ink-faint">{project.role}</p>
      )}
      <p className="mt-3 text-sm text-ink-muted">{project.summary}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
