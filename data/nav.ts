import type { CtaLink } from "./types";

export interface NavConfig {
  productName: string;
  links: CtaLink[];
  legalLinks: CtaLink[];
}

export const saasNavConfig: NavConfig = {
  productName: "MetricFlow",
  links: [
    { label: "Features", href: "/saas#features" },
    { label: "Pricing", href: "/saas#pricing" },
    { label: "Integrations", href: "/saas#integrations" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/saas/privacy" },
    { label: "Terms", href: "/saas/terms" },
  ],
};

export const aiStartupNavConfig: NavConfig = {
  productName: "Copilot AI",
  links: [
    { label: "Features", href: "/ai-startup#features" },
    { label: "Pricing", href: "/ai-startup#pricing" },
    { label: "Integrations", href: "/ai-startup#integrations" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/ai-startup/privacy" },
    { label: "Terms", href: "/ai-startup/terms" },
  ],
};

export const creatorToolNavConfig: NavConfig = {
  productName: "Portify",
  links: [
    { label: "Features", href: "/creator-tool#features" },
    { label: "Pricing", href: "/creator-tool#pricing" },
    { label: "Templates", href: "/creator-tool#templates" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/creator-tool/privacy" },
    { label: "Terms", href: "/creator-tool/terms" },
  ],
};
