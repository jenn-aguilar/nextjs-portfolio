"use client";

import { ModeProvider, useMode } from "@/components/mode-context";
import { ModeSelector } from "@/components/mode-selector";
import { ProjectCard } from "@/components/project-card";
import { projectsConfig } from "@/lib/config/projects";
import { matchesMode } from "@/lib/modes";

export function ProjectsFiltered() {
  return (
    <ModeProvider>
      <ModeSelector />
      <FilteredGrid />
    </ModeProvider>
  );
}

function FilteredGrid() {
  const { mode } = useMode();
  const projects = projectsConfig.projects
    .filter((p) => matchesMode(p.modes, mode))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  if (projects.length === 0) {
    return (
      <div className="card p-8 text-center text-ink-muted">
        No projects tagged for this mode — try another.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
