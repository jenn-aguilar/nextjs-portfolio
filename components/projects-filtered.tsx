"use client";

import { RoleProvider, useRole } from "@/components/role-context";
import { RoleSelector } from "@/components/role-selector";
import { ProjectCard } from "@/components/project-card";
import { projectsConfig } from "@/lib/config/projects";
import { matchesRole } from "@/lib/roles";

export function ProjectsFiltered() {
  return (
    <RoleProvider>
      <RoleSelector compact />
      <FilteredGrid />
    </RoleProvider>
  );
}

function FilteredGrid() {
  const { role } = useRole();
  const projects = projectsConfig.projects
    .filter((p) => matchesRole(p.roles, role))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  if (projects.length === 0) {
    return (
      <div className="card p-8 text-center text-ink-muted">
        No projects tagged for this role — try another.
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
