import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { getProjects, getPapers, getPosts } from "@/lib/queries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const enabled = (href: string) =>
    siteConfig.navLinks.find((l) => l.href === href)?.enabled !== false;

  const staticRoutes = ["", ...siteConfig.navLinks.filter((l) => l.enabled !== false).map((l) => l.href)].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() })
  );

  return [
    ...staticRoutes,
    ...getProjects().map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
    ...(enabled("/papers")
      ? getPapers().map((p) => ({ url: `${base}/papers/${p.slug}`, lastModified: new Date() }))
      : []),
    ...(enabled("/content")
      ? getPosts().map((p) => ({ url: `${base}/content#${p.slug}`, lastModified: new Date() }))
      : []),
  ];
}
