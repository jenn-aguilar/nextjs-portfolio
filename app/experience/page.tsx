import type { Metadata } from "next";
import { experienceConfig } from "@/lib/config/experience";
import { ExperienceFiltered } from "@/components/experience-filtered";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A single career narrative: full-stack engineering, engineering leadership, data science, and e-commerce operations.",
};

export default function ExperiencePage() {
  return (
    <div className="container-x section">
      <header className="mb-4 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent">Experience</p>
        <h1 className="h-section mt-2">{experienceConfig.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{experienceConfig.summary}</p>
      </header>

      <ExperienceFiltered />
    </div>
  );
}
