import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

// Only the home page is announced to search engines. Sub-routes are
// disallowed in app/robots.ts and carry noindex metadata; they're
// intentionally omitted here so they don't leak in the sitemap either.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return [{ url: `${base}/`, lastModified: new Date() }];
}
