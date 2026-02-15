import type { LandingPageData } from "./types";
import type { NavConfig } from "./nav";
import type { PageMetadata } from "./metadata";
import { saasData } from "./saas";
import { aiStartupData } from "./ai-startup";
import { creatorToolData } from "./creator-tool";
import { agencyData } from "./agency";
import { devToolsData } from "./dev-tools";
import { ecommerceData } from "./ecommerce";
import { fintechData } from "./fintech";
import { marketingData } from "./marketing";
import {
  saasNavConfig,
  aiStartupNavConfig,
  creatorToolNavConfig,
  agencyNavConfig,
  devToolsNavConfig,
  ecommerceNavConfig,
  fintechNavConfig,
  marketingNavConfig,
} from "./nav";
import { variantMetadata } from "./metadata";

export const VARIANT_SLUGS = [
  "saas",
  "ai-startup",
  "creator-tool",
  "agency",
  "dev-tools",
  "ecommerce",
  "fintech",
  "marketing",
] as const;

export type VariantSlug = (typeof VARIANT_SLUGS)[number];

export interface VariantConfig {
  slug: VariantSlug;
  data: LandingPageData;
  navConfig: NavConfig;
  metadata: PageMetadata;
  /** ProductShowcase section id (default: "demo") */
  productShowcaseId?: string;
}

const productShowcaseIdMap: Partial<Record<VariantSlug, string>> = {
  "creator-tool": "templates",
  agency: "work",
};

const variantDataMap: Record<VariantSlug, LandingPageData> = {
  saas: saasData,
  "ai-startup": aiStartupData,
  "creator-tool": creatorToolData,
  agency: agencyData,
  "dev-tools": devToolsData,
  ecommerce: ecommerceData,
  fintech: fintechData,
  marketing: marketingData,
};

const variantNavMap: Record<VariantSlug, NavConfig> = {
  saas: saasNavConfig,
  "ai-startup": aiStartupNavConfig,
  "creator-tool": creatorToolNavConfig,
  agency: agencyNavConfig,
  "dev-tools": devToolsNavConfig,
  ecommerce: ecommerceNavConfig,
  fintech: fintechNavConfig,
  marketing: marketingNavConfig,
};

export function getVariantConfig(slug: string): VariantConfig | null {
  if (!VARIANT_SLUGS.includes(slug as VariantSlug)) return null;
  const key = slug as VariantSlug;
  const metadata = variantMetadata[key];
  if (!metadata) return null;
  return {
    slug: key,
    data: variantDataMap[key],
    navConfig: variantNavMap[key],
    metadata,
    productShowcaseId: productShowcaseIdMap[key] ?? "demo",
  };
}

export function getVariantData(slug: string): LandingPageData | null {
  return getVariantConfig(slug)?.data ?? null;
}

export function getNavConfig(slug: string): NavConfig | null {
  return getVariantConfig(slug)?.navConfig ?? null;
}

/** All sitemap routes derived from variant config */
export function getSitemapRoutes(): string[] {
  const routes: string[] = [""];
  for (const slug of VARIANT_SLUGS) {
    routes.push(`/${slug}`, `/${slug}/privacy`, `/${slug}/terms`);
  }
  return routes;
}
