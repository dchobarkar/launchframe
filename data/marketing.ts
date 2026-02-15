import type { LandingPageData } from "./types";

export const marketingData: LandingPageData = {
  variant: "marketing",
  hero: {
    headline: "Grow faster with data-driven marketing",
    subtext:
      "Campaigns, analytics, and automation in one platform. Turn visitors into customers without the guesswork.",
    primaryCta: { label: "Start free trial", href: "#pricing" },
    secondaryCta: { label: "See how it works", href: "#features" },
    trustBadges: [
      "2M+ emails sent daily",
      "Mailchimp",
      "HubSpot",
      "Klaviyo",
      "Segment",
    ],
    announcementBanner: "New: AI-powered subject lines — 23% higher open rates",
    mockupVariant: "marketing",
  },
  logoCloud: {
    headline: "Trusted by growth teams",
    logos: [
      { name: "Stripe" },
      { name: "Slack" },
      { name: "Notion" },
      { name: "Zapier" },
      { name: "Segment" },
      { name: "HubSpot" },
    ],
  },
  features: {
    headline: "Everything for growth",
    subtext:
      "Email, ads, analytics, and automation. One platform to rule them all.",
    items: [
      {
        iconKey: "MessageSquare",
        title: "Email & SMS",
        description:
          "Drag-and-drop builder. Segmentation. A/B tests. Deliverability built in.",
        highlighted: true,
      },
      {
        iconKey: "BarChart3",
        title: "Campaign analytics",
        description:
          "Open rates, clicks, conversions. See what works and double down.",
      },
      {
        iconKey: "Zap",
        title: "Automation",
        description:
          "Welcome series, abandoned cart, win-back. Set it and forget it.",
      },
      {
        iconKey: "TrendingUp",
        title: "Ad management",
        description:
          "Meta, Google, LinkedIn. One dashboard. Unified reporting.",
      },
      {
        iconKey: "Database",
        title: "Audience sync",
        description:
          "Sync lists across platforms. Single source of truth for your CRM.",
      },
      {
        iconKey: "Sparkles",
        title: "AI copy assistant",
        description:
          "Generate subject lines, body copy, and ad creatives. Trained on winners.",
      },
    ],
  },
  productShowcase: {
    headline: "Your growth command center",
    subtext:
      "All your channels. All your data. One place to optimize.",
    mockupVariant: "marketing",
    features: [
      {
        title: "Funnel visibility",
        description:
          "From first touch to purchase. See the full journey and where to improve.",
      },
      {
        title: "Attribution that works",
        description:
          "Multi-touch, first-touch, or custom. Know what's actually driving revenue.",
      },
    ],
  },
  integrations: {
    headline: "Connects with your stack",
    subtext:
      "E-commerce, CRM, ads, and data warehouses.",
    items: [
      { name: "Stripe" },
      { name: "Slack" },
      { name: "Zapier" },
      { name: "Segment" },
      { name: "Snowflake" },
      { name: "BigQuery" },
    ],
  },
  pricing: {
    headline: "Pricing for growth",
    subtext: "Scale your plan as you scale your list.",
    items: [
      {
        name: "Starter",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For getting started",
        features: [
          "1,000 contacts",
          "500 emails/mo",
          "1 user",
          "Basic templates",
        ],
        ctaLabel: "Start free",
        ctaHref: "#pricing",
      },
      {
        name: "Growth",
        price: "$99",
        period: "/mo",
        priceYearly: "$79",
        periodYearly: "/mo",
        priceYearlyTotal: "$948",
        description: "For scaling",
        features: [
          "10K contacts",
          "Unlimited emails",
          "5 users",
          "Automation",
          "Analytics",
        ],
        ctaLabel: "Start free trial",
        ctaHref: "#pricing",
        highlighted: true,
      },
      {
        name: "Scale",
        price: "$299",
        period: "/mo",
        priceYearly: "$249",
        periodYearly: "/mo",
        priceYearlyTotal: "$2,988",
        description: "For teams",
        features: [
          "50K contacts",
          "Everything in Growth",
          "Ad management",
          "AI assistant",
          "Priority support",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#contact",
      },
    ],
  },
  testimonials: {
    headline: "Loved by growth teams",
    subtext: "From startups to enterprises.",
    items: [
      {
        quote: "We 2x'd our email revenue in 90 days. The automation alone paid for itself.",
        author: "Chris Moore",
        role: "Head of Growth",
        company: "ScaleUp",
      },
      {
        quote: "Finally, one tool for email, ads, and analytics. No more spreadsheet hell.",
        author: "Jennifer Lee",
        role: "Marketing Director",
        company: "GrowthLab",
      },
      {
        quote: "The AI subject lines are legit. Our open rates have never been higher.",
        author: "David Park",
        role: "Founder",
        company: "LaunchPad",
      },
    ],
  },
  contact: {
    headline: "Get in touch",
    subtext:
      "Questions about growing your audience? We're here to help.",
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "How do I migrate my list?",
        answer:
          "We support imports from Mailchimp, Klaviyo, HubSpot, and CSV. Our team can help with large migrations for Growth+ plans.",
      },
      {
        question: "What about deliverability?",
        answer:
          "We're on dedicated IPs, use best-in-class ESPs, and provide deliverability monitoring. Our average inbox rate is 98%.",
      },
      {
        question: "Can I use my own domain?",
        answer:
          "Yes. Add your domain, verify DNS, and you're good. We support custom sending domains and subdomains.",
      },
      {
        question: "Do you have a free plan?",
        answer:
          "Yes. Starter is free forever with 1K contacts and 500 emails/month. Perfect for testing before you scale.",
      },
    ],
  },
  cta: {
    headline: "Start growing today",
    subtext: "Free to start. No credit card. 14-day trial for Growth.",
    primaryCta: { label: "Start free trial", href: "#pricing" },
    secondaryCta: { label: "Watch demo", href: "#features" },
  },
};
