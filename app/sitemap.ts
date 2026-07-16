import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { getProjects, getPapers, getPosts } from "@/lib/queries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const staticRoutes = ["", "/experience", "/projects", "/papers", "/content", "/contact"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() })
  );

  return [
    ...staticRoutes,
    ...getProjects().map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
    ...getPapers().map((p) => ({ url: `${base}/papers/${p.slug}`, lastModified: new Date() })),
    ...getPosts().map((p) => ({ url: `${base}/content#${p.slug}`, lastModified: new Date() })),
  ];
}
