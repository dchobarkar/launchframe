import type { VariantLink } from "./types";

export const variantLinks: VariantLink[] = [
  {
    slug: "saas",
    name: "SaaS Product",
    description: "Analytics platform / AI tool / Dev product",
    iconKey: "BarChart3",
    href: "/saas",
  },
  {
    slug: "ai-startup",
    name: "AI Startup",
    description: "Copilot / automation / assistant tool",
    iconKey: "Bot",
    href: "/ai-startup",
  },
  {
    slug: "creator-tool",
    name: "Creator Tool",
    description: "Portfolio builder / productivity app",
    iconKey: "Palette",
    href: "/creator-tool",
  },
  {
    slug: "agency",
    name: "Agency",
    description: "Brand studio / design agency / consulting",
    iconKey: "Layout",
    href: "/agency",
  },
  {
    slug: "dev-tools",
    name: "Developer Tool",
    description: "API platform / dev tools / infrastructure",
    iconKey: "GitBranch",
    href: "/dev-tools",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description: "Storefront / marketplace / retail",
    iconKey: "Zap",
    href: "/ecommerce",
  },
  {
    slug: "fintech",
    name: "FinTech",
    description: "Payments / banking / financial infra",
    iconKey: "Shield",
    href: "/fintech",
  },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Growth / email / campaign platform",
    iconKey: "TrendingUp",
    href: "/marketing",
  },
];

export const homeContent = {
  title: "LaunchFrame",
  description:
    "Modular landing page framework for SaaS, AI, agency, e-commerce, fintech, and marketing websites.",
};
