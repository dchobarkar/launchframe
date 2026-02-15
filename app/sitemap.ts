import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/metadata";

const routes = [
  "",
  "/saas",
  "/saas/privacy",
  "/saas/terms",
  "/ai-startup",
  "/ai-startup/privacy",
  "/ai-startup/terms",
  "/creator-tool",
  "/creator-tool/privacy",
  "/creator-tool/terms",
  "/agency",
  "/agency/privacy",
  "/agency/terms",
  "/dev-tools",
  "/dev-tools/privacy",
  "/dev-tools/terms",
  "/ecommerce",
  "/ecommerce/privacy",
  "/ecommerce/terms",
  "/fintech",
  "/fintech/privacy",
  "/fintech/terms",
  "/marketing",
  "/marketing/privacy",
  "/marketing/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.9 : 0.5,
  }));
}
