import type { LandingPageData } from "./types";

export const devToolsData: LandingPageData = {
  variant: "dev-tools",
  hero: {
    headline: "The API that just works",
    subtext:
      "Build faster with our developer-first platform. REST, GraphQL, and real-time. Deploy in minutes, not days.",
    primaryCta: { label: "Get API key", href: "#pricing" },
    secondaryCta: { label: "Read docs", href: "#features" },
    trustBadges: ["10M+ API calls/day", "GitHub", "Vercel", "Stripe", "Linear"],
    announcementBanner: "New: Webhooks v2 with retry logic — now GA",
    mockupVariant: "dev-tools",
  },
  logoCloud: {
    headline: "Built by developers, for developers",
    logos: [
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Stripe" },
      { name: "Linear" },
      { name: "Figma" },
      { name: "Slack" },
    ],
  },
  features: {
    headline: "Developer experience first",
    subtext: "Everything you need to integrate, ship, and scale.",
    items: [
      {
        iconKey: "GitBranch",
        title: "REST & GraphQL",
        description:
          "Choose your style. Same data, same performance. OpenAPI spec included.",
        highlighted: true,
      },
      {
        iconKey: "Zap",
        title: "Real-time subscriptions",
        description:
          "WebSockets and SSE. Push data to your app the moment it changes.",
      },
      {
        iconKey: "Shield",
        title: "Type-safe SDKs",
        description:
          "TypeScript, Python, Go, Ruby. Auto-generated, always in sync.",
      },
      {
        iconKey: "Database",
        title: "Webhooks",
        description:
          "Reliable delivery with retries. Idempotency keys and signing.",
      },
      {
        iconKey: "Lock",
        title: "API keys & OAuth",
        description: "Scoped keys, team management, and full audit logs.",
      },
      {
        iconKey: "BarChart3",
        title: "Usage dashboard",
        description:
          "Monitor calls, latency, and errors. Set alerts and limits.",
      },
    ],
  },
  productShowcase: {
    headline: "Integrate in minutes",
    subtext: "Copy, paste, ship. Our SDKs handle the complexity.",
    mockupVariant: "dev-tools",
    features: [
      {
        title: "Quick start",
        description:
          "npm install, add your key, make your first request. Under 5 minutes.",
      },
      {
        title: "Local dev",
        description:
          "CLI for local testing. Mock server and fixture data included.",
      },
    ],
  },
  integrations: {
    headline: "Works with your stack",
    subtext: "SDKs, plugins, and native integrations.",
    items: [
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Stripe" },
      { name: "Linear" },
      { name: "Notion" },
      { name: "Slack" },
    ],
  },
  pricing: {
    headline: "Pricing for developers",
    subtext: "Free to start. Scale as you grow.",
    items: [
      {
        name: "Hobby",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For side projects",
        features: [
          "10K requests/month",
          "1 project",
          "Community support",
          "All core APIs",
        ],
        ctaLabel: "Get API key",
        ctaHref: "#pricing",
      },
      {
        name: "Pro",
        price: "$49",
        period: "/mo",
        priceYearly: "$39",
        periodYearly: "/mo",
        priceYearlyTotal: "$468",
        description: "For shipping products",
        features: [
          "500K requests/month",
          "10 projects",
          "Email support",
          "Webhooks",
          "Usage dashboard",
        ],
        ctaLabel: "Start free trial",
        ctaHref: "#pricing",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For scale",
        features: [
          "Unlimited requests",
          "Dedicated support",
          "SLA",
          "SSO & audit logs",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#contact",
      },
    ],
  },
  testimonials: {
    headline: "Loved by developers",
    subtext: "See what builders are saying.",
    items: [
      {
        quote: "Best API docs I've ever seen. We were live in an afternoon.",
        author: "Alex Chen",
        role: "Staff Engineer",
        company: "TechCorp",
      },
      {
        quote:
          "The TypeScript SDK is a game-changer. Full type safety out of the box.",
        author: "Sam Rivera",
        role: "Founder",
        company: "DevFlow",
      },
      {
        quote:
          "Webhooks that actually work. Retries, idempotency — they thought of everything.",
        author: "Jordan Lee",
        role: "CTO",
        company: "DataStack",
      },
    ],
  },
  contact: {
    headline: "Get in touch",
    subtext: "Questions about the API? Our devrel team is here to help.",
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Sign up, grab your API key from the dashboard, and run our quickstart. You can make your first request in under 5 minutes.",
      },
      {
        question: "Do you have a sandbox?",
        answer:
          "Yes. Every account gets a sandbox environment. Use test keys for development and switch to live keys when you're ready.",
      },
      {
        question: "What about rate limits?",
        answer:
          "Hobby: 10 req/s. Pro: 100 req/s. Enterprise: custom. We also offer burst capacity for traffic spikes.",
      },
      {
        question: "Can I self-host?",
        answer:
          "Enterprise plans can deploy in their own infrastructure. Contact sales for details.",
      },
    ],
  },
  cta: {
    headline: "Start building today",
    subtext: "Free API key. No credit card. 30-day trial for Pro.",
    primaryCta: { label: "Get API key", href: "#pricing" },
    secondaryCta: { label: "View docs", href: "#features" },
  },
};
