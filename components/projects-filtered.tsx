"use client";

import { useCallback, useEffect, useState } from "react";
import { RoleProvider, useRole } from "@/components/role-context";
import { RoleSelector } from "@/components/role-selector";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
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

  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Initialize from URL (?p=slug) and keep in sync with back/forward navigation
  useEffect(() => {
    const readFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setOpenSlug(params.get("p"));
    };
    readFromUrl();
    window.addEventListener("popstate", readFromUrl);
    return () => window.removeEventListener("popstate", readFromUrl);
  }, []);

  const openProject = useCallback((slug: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("p", slug);
    window.history.pushState({ p: slug }, "", url.toString());
    setOpenSlug(slug);
  }, []);

  const closeProject = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("p");
    window.history.pushState({}, "", url.toString());
    setOpenSlug(null);
  }, []);

  const active = openSlug
    ? projectsConfig.projects.find((p) => p.slug === openSlug)
    : null;

  if (projects.length === 0) {
    return (
      <div className="card p-8 text-center text-ink-muted">
        No projects tagged for this role — try another.
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={openProject} />
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={closeProject} />}
    </>
  );
}
