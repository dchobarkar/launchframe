import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/metadata";
import { getSitemapRoutes } from "@/data/variants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getSitemapRoutes();
  return routes.map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.9 : 0.5,
  }));
}
