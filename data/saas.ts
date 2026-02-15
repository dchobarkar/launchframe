import type { LandingPageData } from "./types";

export const saasData: LandingPageData = {
  variant: "saas",
  hero: {
    headline: "Analytics that move at your speed",
    subtext:
      "Real-time dashboards, AI-powered insights, and APIs built for developers. Ship faster with data you can trust.",
    primaryCta: { label: "Start free trial", href: "#pricing" },
    secondaryCta: { label: "View demo", href: "#features" },
    trustBadges: [
      "Trusted by 5,000+ teams",
      "Stripe",
      "Vercel",
      "Linear",
      "Notion",
    ],
    announcementBanner: "New: AI-powered anomaly detection — now in beta",
    mockupVariant: "saas",
  },
  logoCloud: {
    headline: "Trusted by teams at",
    logos: [
      { name: "Stripe" },
      { name: "Vercel" },
      { name: "Linear" },
      { name: "Notion" },
      { name: "Figma" },
      { name: "GitHub" },
    ],
  },
  features: {
    headline: "Built for the way you work",
    subtext:
      "Everything you need to understand your product, users, and business — in one place.",
    items: [
      {
        iconKey: "BarChart3",
        title: "Real-time dashboards",
        description:
          "See what matters as it happens. No more waiting for batch jobs or stale reports.",
        highlighted: true,
      },
      {
        iconKey: "Zap",
        title: "Lightning-fast queries",
        description:
          "Sub-second query performance on billions of events. Built on a columnar engine.",
      },
      {
        iconKey: "Shield",
        title: "Enterprise security",
        description:
          "SOC 2 Type II, GDPR compliant. Your data stays yours with role-based access.",
      },
      {
        iconKey: "TrendingUp",
        title: "AI-powered insights",
        description:
          "Automatically surface anomalies, trends, and opportunities in your data.",
      },
      {
        iconKey: "Database",
        title: "Flexible data model",
        description:
          "Track events, users, and custom properties. No rigid schemas required.",
      },
      {
        iconKey: "GitBranch",
        title: "Developer-first API",
        description:
          "REST and GraphQL APIs. SDKs for every major language. Deploy in minutes.",
      },
    ],
  },
  productShowcase: {
    headline: "One dashboard. Every metric.",
    subtext:
      "From acquisition to retention, see the full picture without switching tools.",
    mockupVariant: "saas",
    features: [
      {
        title: "Custom metrics",
        description:
          "Define exactly what you want to track. No limits on events or properties.",
      },
      {
        title: "Funnels & cohorts",
        description:
          "Understand conversion at every step. Build cohorts for targeted analysis.",
      },
    ],
  },
  integrations: {
    headline: "Connects with your stack",
    subtext:
      "Import data from anywhere. Export to your warehouse. Sync with your tools.",
    items: [
      { name: "Slack" },
      { name: "Notion" },
      { name: "Zapier" },
      { name: "Segment" },
      { name: "Snowflake" },
      { name: "BigQuery" },
    ],
  },
  pricing: {
    headline: "Simple, transparent pricing",
    subtext: "Start free. Scale as you grow. No hidden fees.",
    items: [
      {
        name: "Starter",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For side projects and experiments",
        features: [
          "10K events/month",
          "3 dashboards",
          "7-day data retention",
          "Community support",
        ],
        ctaLabel: "Get started free",
        ctaHref: "#pricing",
      },
      {
        name: "Pro",
        price: "$99",
        period: "/mo",
        priceYearly: "$79",
        periodYearly: "/mo",
        priceYearlyTotal: "$948",
        description: "For growing teams",
        features: [
          "1M events/month",
          "Unlimited dashboards",
          "90-day retention",
          "Email support",
          "Custom domains",
        ],
        ctaLabel: "Start free trial",
        ctaHref: "#pricing",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations",
        features: [
          "Unlimited events",
          "Unlimited retention",
          "Dedicated support",
          "SSO & SAML",
          "Custom contracts",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#faq",
      },
    ],
  },
  testimonials: {
    headline: "Loved by product teams",
    subtext: "See what founders and product leaders are saying.",
    items: [
      {
        quote: "We cut our time-to-insight by 80%. The dashboards just work.",
        author: "Sarah Chen",
        role: "Head of Product",
        company: "TechFlow",
      },
      {
        quote:
          "Finally, analytics that doesn't require a data team to maintain.",
        author: "Marcus Johnson",
        role: "Founder",
        company: "LaunchPad",
      },
      {
        quote: "The API is a dream. We had events flowing in under an hour.",
        author: "Elena Rodriguez",
        role: "CTO",
        company: "DataDriven",
      },
    ],
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "How fast can I launch?",
        answer:
          "Most teams are up and running within 15 minutes. Our SDKs support JavaScript, React, iOS, and Android. You can also send events via our REST API.",
      },
      {
        question: "Do you offer integrations?",
        answer:
          "Yes. We integrate with Slack, Notion, Zapier, Segment, and major data warehouses like Snowflake and BigQuery. More integrations are added every month.",
      },
      {
        question: "Is support included?",
        answer:
          "Pro plans include email support with 24-hour response times. Enterprise plans get dedicated support and a success manager.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Absolutely. You can export raw events anytime. We also support streaming to your data warehouse for full ownership.",
      },
    ],
  },
  cta: {
    headline: "Start your free trial",
    subtext: "No credit card required. 14 days free. Cancel anytime.",
    primaryCta: { label: "Get started free", href: "#pricing" },
    secondaryCta: { label: "Talk to sales", href: "#faq" },
  },
};
