"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-ink-muted hover:text-accent sm:inline-flex"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
