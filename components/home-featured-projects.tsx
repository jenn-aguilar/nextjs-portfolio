"use client";

import Link from "next/link";
import { projectsConfig } from "@/lib/config/projects";
import { matchesRole } from "@/lib/roles";
import { useRole } from "./role-context";
import { ProjectCard } from "./project-card";

export function HomeFeaturedProjects() {
  const { role } = useRole();
  const featured = projectsConfig.projects
    .filter((p) => p.featured)
    .filter((p) => matchesRole(p.roles, role))
    .slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <h2 className="h-section">Featured work</h2>
          <Link href="/projects" className="link-underline text-sm text-ink-muted">
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
