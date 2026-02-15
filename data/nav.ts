import type { CtaLink } from "./types";

export interface NavConfig {
  productName: string;
  links: CtaLink[];
}

export const saasNavConfig: NavConfig = {
  productName: "MetricFlow",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
};

export const aiStartupNavConfig: NavConfig = {
  productName: "Copilot AI",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
};

export const creatorToolNavConfig: NavConfig = {
  productName: "Portify",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Templates", href: "#templates" },
  ],
};
