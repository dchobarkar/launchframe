import type { CtaLink } from "./types";

/** Nav and footer link configuration per variant. */
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
    { label: "Contact", href: "/saas#contact" },
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
    { label: "Contact", href: "/ai-startup#contact" },
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
    { label: "Contact", href: "/creator-tool#contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/creator-tool/privacy" },
    { label: "Terms", href: "/creator-tool/terms" },
  ],
};

export const agencyNavConfig: NavConfig = {
  productName: "Lumina Studio",
  links: [
    { label: "Work", href: "/agency#features" },
    { label: "Services", href: "/agency#features" },
    { label: "Pricing", href: "/agency#pricing" },
    { label: "Contact", href: "/agency#contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/agency/privacy" },
    { label: "Terms", href: "/agency/terms" },
  ],
};

export const devToolsNavConfig: NavConfig = {
  productName: "APIbase",
  links: [
    { label: "Features", href: "/dev-tools#features" },
    { label: "Pricing", href: "/dev-tools#pricing" },
    { label: "Integrations", href: "/dev-tools#integrations" },
    { label: "Contact", href: "/dev-tools#contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/dev-tools/privacy" },
    { label: "Terms", href: "/dev-tools/terms" },
  ],
};

export const ecommerceNavConfig: NavConfig = {
  productName: "Storefront",
  links: [
    { label: "Features", href: "/ecommerce#features" },
    { label: "Pricing", href: "/ecommerce#pricing" },
    { label: "Integrations", href: "/ecommerce#integrations" },
    { label: "Contact", href: "/ecommerce#contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/ecommerce/privacy" },
    { label: "Terms", href: "/ecommerce/terms" },
  ],
};

export const fintechNavConfig: NavConfig = {
  productName: "PayStack",
  links: [
    { label: "Features", href: "/fintech#features" },
    { label: "Pricing", href: "/fintech#pricing" },
    { label: "Integrations", href: "/fintech#integrations" },
    { label: "Contact", href: "/fintech#contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/fintech/privacy" },
    { label: "Terms", href: "/fintech/terms" },
  ],
};

export const marketingNavConfig: NavConfig = {
  productName: "GrowthLab",
  links: [
    { label: "Features", href: "/marketing#features" },
    { label: "Pricing", href: "/marketing#pricing" },
    { label: "Integrations", href: "/marketing#integrations" },
    { label: "Contact", href: "/marketing#contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/marketing/privacy" },
    { label: "Terms", href: "/marketing/terms" },
  ],
};
