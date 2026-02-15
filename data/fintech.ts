import type { LandingPageData } from "./types";

export const fintechData: LandingPageData = {
  variant: "fintech",
  hero: {
    headline: "Banking infrastructure for the future",
    subtext:
      "API-first payments, accounts, and compliance. Build financial products that scale with trust.",
    primaryCta: { label: "Start building", href: "#pricing" },
    secondaryCta: { label: "See the platform", href: "#features" },
    trustBadges: [
      "SOC 2 Type II certified",
      "Stripe",
      "Plaid",
      "Mercury",
      "Ramp",
    ],
    announcementBanner: "New: Instant bank verification — reduce drop-off by 25%",
    mockupVariant: "fintech",
  },
  logoCloud: {
    headline: "Trusted by leading fintechs",
    logos: [
      { name: "Stripe" },
      { name: "Vercel" },
      { name: "Linear" },
      { name: "Notion" },
      { name: "Slack" },
      { name: "Figma" },
    ],
  },
  features: {
    headline: "Built for compliance",
    subtext:
      "Security and trust at every layer. Ship faster without the regulatory headache.",
    items: [
      {
        iconKey: "Shield",
        title: "SOC 2 Type II",
        description:
          "Audited annually. Your customers' data is protected to the highest standards.",
        highlighted: true,
      },
      {
        iconKey: "Lock",
        title: "Bank-grade encryption",
        description:
          "AES-256 at rest. TLS 1.3 in transit. Keys never leave our HSM.",
      },
      {
        iconKey: "Zap",
        title: "Instant verification",
        description:
          "Connect bank accounts in seconds. Plaid-powered. 99.9% success rate.",
      },
      {
        iconKey: "Database",
        title: "Ledger & reconciliation",
        description:
          "Double-entry accounting. Real-time balances. Audit trail for every transaction.",
      },
      {
        iconKey: "GitBranch",
        title: "Developer API",
        description:
          "REST and webhooks. Sandbox and production. Full documentation.",
      },
      {
        iconKey: "BarChart3",
        title: "Compliance dashboard",
        description:
          "KYC status, transaction monitoring, and regulatory reporting. All in one place.",
      },
    ],
  },
  productShowcase: {
    headline: "One platform. Full stack.",
    subtext:
      "Payments, accounts, and compliance. Integrate once, scale forever.",
    mockupVariant: "fintech",
    features: [
      {
        title: "White-label ready",
        description:
          "Your brand, your UX. We power the backend. You own the experience.",
      },
      {
        title: "Global from day one",
        description:
          "Multi-currency, multi-country. Cards, ACH, SEPA, and more.",
      },
    ],
  },
  integrations: {
    headline: "Connects with your ecosystem",
    subtext:
      "Banks, processors, and data providers.",
    items: [
      { name: "Stripe" },
      { name: "Slack" },
      { name: "Notion" },
      { name: "Zapier" },
      { name: "Segment" },
      { name: "Snowflake" },
    ],
  },
  pricing: {
    headline: "Transparent pricing",
    subtext: "Pay for what you use. No hidden fees.",
    items: [
      {
        name: "Starter",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For development",
        features: [
          "1,000 transactions/mo",
          "Sandbox environment",
          "Community support",
          "Full API access",
        ],
        ctaLabel: "Get started",
        ctaHref: "#pricing",
      },
      {
        name: "Growth",
        price: "$299",
        period: "/mo",
        priceYearly: "$249",
        periodYearly: "/mo",
        priceYearlyTotal: "$2,988",
        description: "For launching",
        features: [
          "50K transactions/mo",
          "Production access",
          "Email support",
          "Compliance dashboard",
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
          "Unlimited transactions",
          "Dedicated support",
          "Custom SLA",
          "On-prem option",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#contact",
      },
    ],
  },
  testimonials: {
    headline: "Trusted by fintech leaders",
    subtext: "From startups to unicorns.",
    items: [
      {
        quote: "We went from idea to live in 3 months. The compliance piece alone would have taken a year.",
        author: "Rachel Kim",
        role: "CEO",
        company: "PayFlow",
      },
      {
        quote: "Bank-grade security without the bank-grade timeline. Game changer.",
        author: "Michael Torres",
        role: "CTO",
        company: "FinanceOS",
      },
      {
        quote: "Their support team knows fintech inside out. Saved us countless compliance headaches.",
        author: "Lisa Chen",
        role: "Compliance Lead",
        company: "MoneyHub",
      },
    ],
  },
  contact: {
    headline: "Get in touch",
    subtext:
      "Questions about compliance or integration? Our team is here.",
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. We're SOC 2 Type II certified and use bank-grade encryption. All data is stored in compliant infrastructure.",
      },
      {
        question: "What about regulatory compliance?",
        answer:
          "We handle the heavy lifting: KYC, AML, transaction monitoring. You get a compliance dashboard and we work with your legal team.",
      },
      {
        question: "How long does integration take?",
        answer:
          "Most teams are live in 2-4 weeks. We provide sandbox access, documentation, and dedicated onboarding for Growth+ plans.",
      },
      {
        question: "Do you support international?",
        answer:
          "Yes. We support 50+ countries with local payment methods, currencies, and compliance requirements.",
      },
    ],
  },
  cta: {
    headline: "Build the future of finance",
    subtext: "Start in sandbox. Go live when you're ready.",
    primaryCta: { label: "Start building", href: "#pricing" },
    secondaryCta: { label: "Talk to sales", href: "#contact" },
  },
};
