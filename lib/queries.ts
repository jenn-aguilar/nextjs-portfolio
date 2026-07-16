import { projectsConfig, type Project } from "./config/projects";
import { papersConfig, type Paper } from "./config/papers";
import { contentConfig, type Post } from "./config/content";

const byOrder = <T extends { order?: number }>(a: T, b: T) =>
  (a.order ?? 999) - (b.order ?? 999);

export function getProjects(): Project[] {
  return [...projectsConfig.projects].sort(byOrder);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured).slice(0, 3);
}

export function getProject(slug: string): Project | null {
  return getProjects().find((p) => p.slug === slug) ?? null;
}

export function getPapers(): Paper[] {
  return [...papersConfig.papers].sort(
    (a, b) => Number(b.year ?? 0) - Number(a.year ?? 0)
  );
}

export function getPaper(slug: string): Paper | null {
  return getPapers().find((p) => p.slug === slug) ?? null;
}

export function getPosts(): Post[] {
  return [...contentConfig.posts].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? "")
  );
}
