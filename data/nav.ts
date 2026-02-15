import type { CtaLink } from "./types";

export interface NavConfig {
  productName: string;
  links: CtaLink[];
  legalLinks: CtaLink[];
}

export const saasNavConfig: NavConfig = {
  productName: "MetricFlow",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
  legalLinks: [
    { label: "Privacy", href: "#faq" },
    { label: "Terms", href: "#faq" },
  ],
};

export const aiStartupNavConfig: NavConfig = {
  productName: "Copilot AI",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
  legalLinks: [
    { label: "Privacy", href: "#faq" },
    { label: "Terms", href: "#faq" },
  ],
};

export const creatorToolNavConfig: NavConfig = {
  productName: "Portify",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Templates", href: "#templates" },
  ],
  legalLinks: [
    { label: "Privacy", href: "#faq" },
    { label: "Terms", href: "#faq" },
  ],
};
