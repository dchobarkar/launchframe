import type { Metadata } from "next";

/** Base URL for the site. Update for production. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://launchframe.dev";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph: {
    title: string;
    description: string;
    type: "website";
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
  };
}

/** Root / home page metadata */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LaunchFrame — Modular Landing Page Framework",
    template: "%s | LaunchFrame",
  },
  description:
    "Modular landing page framework for SaaS, AI, agency, e-commerce, fintech, and marketing websites. High-converting templates for product launches.",
  keywords: [
    "landing page",
    "SaaS",
    "marketing website",
    "startup",
    "product launch",
    "Next.js",
    "React",
  ],
  authors: [{ name: "LaunchFrame" }],
  creator: "LaunchFrame",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LaunchFrame",
    title: "LaunchFrame — Modular Landing Page Framework",
    description:
      "Modular landing page framework for SaaS, AI, agency, e-commerce, fintech, and marketing websites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchFrame — Modular Landing Page Framework",
    description:
      "Modular landing page framework for SaaS, AI, agency, e-commerce, fintech, and marketing websites.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

/** Variant metadata keyed by route path */
export const variantMetadata: Record<string, PageMetadata> = {
  saas: {
    title: "MetricFlow — Analytics Platform for Modern Teams",
    description:
      "Real-time analytics, AI-powered insights, and beautiful dashboards. Built for developers and product teams who need to move fast.",
    keywords: ["analytics", "SaaS", "dashboards", "product analytics", "real-time"],
    openGraph: {
      title: "MetricFlow — Analytics Platform for Modern Teams",
      description:
        "Real-time analytics, AI-powered insights, and beautiful dashboards.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "MetricFlow — Analytics Platform for Modern Teams",
      description:
        "Real-time analytics, AI-powered insights, and beautiful dashboards.",
    },
  },
  "ai-startup": {
    title: "Copilot AI — Your AI-Powered Work Assistant",
    description:
      "Automate repetitive tasks, draft documents, and get answers in seconds. The AI copilot that works alongside you in every app.",
    keywords: ["AI", "copilot", "automation", "productivity", "assistant"],
    openGraph: {
      title: "Copilot AI — Your AI-Powered Work Assistant",
      description:
        "Automate repetitive tasks, draft documents, and get answers in seconds.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Copilot AI — Your AI-Powered Work Assistant",
      description:
        "Automate repetitive tasks, draft documents, and get answers in seconds.",
    },
  },
  "creator-tool": {
    title: "Portify — Portfolio Builder for Creators",
    description:
      "Build a stunning portfolio in minutes. No code required. Templates for designers, developers, photographers, and writers.",
    keywords: ["portfolio", "creator", "builder", "templates", "design"],
    openGraph: {
      title: "Portify — Portfolio Builder for Creators",
      description: "Build a stunning portfolio in minutes. No code required.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Portify — Portfolio Builder for Creators",
      description: "Build a stunning portfolio in minutes. No code required.",
    },
  },
  agency: {
    title: "Lumina Studio — Brand & Design Agency",
    description:
      "Strategy, design, and development for ambitious companies. From concept to launch.",
    keywords: ["agency", "brand", "design", "strategy", "development"],
    openGraph: {
      title: "Lumina Studio — Brand & Design Agency",
      description: "We build brands that move people.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lumina Studio — Brand & Design Agency",
      description: "We build brands that move people.",
    },
  },
  "dev-tools": {
    title: "APIbase — Developer-First API Platform",
    description:
      "The API that just works. REST, GraphQL, and real-time. Deploy in minutes.",
    keywords: ["API", "developer", "REST", "GraphQL", "platform"],
    openGraph: {
      title: "APIbase — Developer-First API Platform",
      description: "Build faster with our developer-first platform.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "APIbase — Developer-First API Platform",
      description: "Build faster with our developer-first platform.",
    },
  },
  ecommerce: {
    title: "Storefront — E-commerce Platform for Modern Brands",
    description:
      "The all-in-one platform for modern brands. Storefront, checkout, and fulfillment.",
    keywords: ["ecommerce", "storefront", "checkout", "retail", "brands"],
    openGraph: {
      title: "Storefront — E-commerce Platform",
      description: "Sell more. Stress less.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Storefront — E-commerce Platform",
      description: "Sell more. Stress less.",
    },
  },
  fintech: {
    title: "PayStack — Banking Infrastructure for the Future",
    description:
      "API-first payments, accounts, and compliance. Build financial products that scale.",
    keywords: ["fintech", "payments", "banking", "API", "compliance"],
    openGraph: {
      title: "PayStack — Banking Infrastructure",
      description: "Build financial products that scale with trust.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "PayStack — Banking Infrastructure",
      description: "Build financial products that scale with trust.",
    },
  },
  marketing: {
    title: "GrowthLab — Data-Driven Marketing Platform",
    description:
      "Campaigns, analytics, and automation in one platform. Turn visitors into customers.",
    keywords: ["marketing", "growth", "email", "automation", "analytics"],
    openGraph: {
      title: "GrowthLab — Data-Driven Marketing",
      description: "Grow faster with data-driven marketing.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "GrowthLab — Data-Driven Marketing",
      description: "Grow faster with data-driven marketing.",
    },
  },
};

/** Converts PageMetadata to Next.js Metadata with canonical URL */
export function toMetadata(
  meta: PageMetadata,
  path: string
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      ...meta.openGraph,
      url: path,
    },
    twitter: meta.twitter,
    alternates: {
      canonical: path,
    },
  };
}

/** Legal page metadata (privacy, terms) */
export function getLegalMetadata(
  productName: string,
  pageType: "privacy" | "terms",
  path: string
): Metadata {
  const title =
    pageType === "privacy"
      ? `Privacy Policy — ${productName}`
      : `Terms of Service — ${productName}`;
  const description =
    pageType === "privacy"
      ? `${productName} privacy policy. Learn how we collect, use, and protect your data.`
      : `${productName} terms of service. Read our terms and conditions.`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
