import type { MetadataRoute } from "next";
import { legalLinks, quickLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ventures } from "@/data/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...quickLinks.map((link) => link.href),
    ...ventures.map((venture) => venture.href),
    ...legalLinks.map((link) => link.href),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
