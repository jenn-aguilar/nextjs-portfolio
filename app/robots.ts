import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

// Only the home page is exposed to search engines. Every other route
// (experience, projects, papers, content, contact, and the CV PDFs) is
// blocked so the site is findable — "senior AI engineer Auckland" surfaces
// the home page — without the detailed CV pages showing up in results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/experience",
          "/projects",
          "/papers",
          "/content",
          "/contact",
          "/cv.pdf",
          "/cv-ats.pdf",
        ],
      },
    ],
    sitemap: `${siteConfig.siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
