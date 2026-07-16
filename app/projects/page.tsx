import type { Metadata } from "next";
import { projectsConfig } from "@/lib/config/projects";
import { ProjectsFiltered } from "@/components/projects-filtered";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects across full-stack engineering, AI, data, and e-commerce.",
};

export default function ProjectsPage() {
  return (
    <div className="container-x section">
      <header className="mb-4 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent">Projects</p>
        <h1 className="h-section mt-2">{projectsConfig.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{projectsConfig.intro}</p>
      </header>

      <ProjectsFiltered />
    </div>
  );
}
