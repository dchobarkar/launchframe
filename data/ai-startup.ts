import type { LandingPageData } from "./types";

export const aiStartupData: LandingPageData = {
  variant: "ai",
  hero: {
    headline: "Your AI copilot for work",
    subtext:
      "Automate tasks, draft documents, and get instant answers. Copilot AI works alongside you in every app — no context switching.",
    primaryCta: { label: "Try Copilot free", href: "#pricing" },
    secondaryCta: { label: "See how it works", href: "#features" },
    trustBadges: [
      "Used by 10,000+ professionals",
      "Google",
      "Microsoft",
      "Salesforce",
      "HubSpot",
    ],
    announcementBanner: "New: Multi-app workflows — connect your entire stack",
    mockupVariant: "ai",
  },
  logoCloud: {
    headline: "Trusted by teams at",
    logos: [
      { name: "Google" },
      { name: "Microsoft" },
      { name: "Salesforce" },
      { name: "HubSpot" },
      { name: "Atlassian" },
      { name: "Dropbox" },
    ],
  },
  features: {
    headline: "AI that actually helps",
    subtext:
      "Not another chatbot. A true assistant that learns your workflow and gets things done.",
    items: [
      {
        iconKey: "Bot",
        title: "Context-aware assistance",
        description:
          "Copilot understands your current task, open files, and recent activity. No copy-pasting needed.",
        highlighted: true,
      },
      {
        iconKey: "Sparkles",
        title: "One-click automation",
        description:
          "Turn repetitive workflows into single commands. From email summaries to report generation.",
      },
      {
        iconKey: "Workflow",
        title: "Multi-app workflows",
        description:
          "Connect Slack, Notion, Gmail, and more. Copilot orchestrates across your entire stack.",
      },
      {
        iconKey: "MessageSquare",
        title: "Natural conversation",
        description:
          "Ask in plain English. Get precise answers. Follow up with clarifications — it remembers.",
      },
      {
        iconKey: "Zap",
        title: "Real-time execution",
        description:
          "Actions happen in seconds. Draft a doc, send a message, update a spreadsheet — all from one prompt.",
      },
      {
        iconKey: "Lock",
        title: "Enterprise-grade privacy",
        description:
          "Your data never trains our models. SOC 2 compliant. Deploy in your own environment.",
      },
    ],
  },
  productShowcase: {
    headline: "Works where you work",
    subtext:
      "Copilot lives in your browser, your IDE, and your favorite apps. One assistant, everywhere.",
    mockupVariant: "ai",
    features: [
      {
        title: "Browser extension",
        description:
          "Access Copilot from any tab. Summarize pages, extract data, or draft replies.",
      },
      {
        title: "IDE integration",
        description:
          "Generate code, explain functions, and refactor with natural language.",
      },
    ],
  },
  integrations: {
    headline: "Connects to your tools",
    subtext: "One copilot. Every app. We integrate with 50+ tools and growing.",
    items: [
      { name: "Slack" },
      { name: "Notion" },
      { name: "Gmail" },
      { name: "Google Drive" },
      { name: "Figma" },
      { name: "Linear" },
    ],
  },
  pricing: {
    headline: "Simple pricing for everyone",
    subtext: "Start free. Upgrade when you need more.",
    items: [
      {
        name: "Free",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For trying Copilot",
        features: [
          "50 tasks/month",
          "Basic integrations",
          "Email support",
          "Community access",
        ],
        ctaLabel: "Get started free",
        ctaHref: "#pricing",
      },
      {
        name: "Pro",
        price: "$29",
        period: "/mo",
        priceYearly: "$23",
        periodYearly: "/mo",
        priceYearlyTotal: "$276",
        description: "For power users",
        features: [
          "Unlimited tasks",
          "All integrations",
          "Priority support",
          "Custom workflows",
          "API access",
        ],
        ctaLabel: "Start free trial",
        ctaHref: "#pricing",
        highlighted: true,
      },
      {
        name: "Team",
        price: "$79",
        period: "/mo",
        priceYearly: "$63",
        periodYearly: "/mo",
        priceYearlyTotal: "$756",
        description: "For teams",
        features: [
          "Everything in Pro",
          "Team management",
          "Shared workflows",
          "Admin controls",
          "SSO",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#faq",
      },
    ],
  },
  testimonials: {
    headline: "What teams are saying",
    subtext: "Copilot has changed how we work.",
    items: [
      {
        quote:
          "I save 2 hours every day. Copilot handles my email triage and draft responses.",
        author: "James Park",
        role: "VP Operations",
        company: "ScaleUp",
      },
      {
        quote:
          "The multi-app workflows are a game-changer. One prompt, five tools updated.",
        author: "Nina Patel",
        role: "Product Lead",
        company: "FlowTech",
      },
      {
        quote:
          "Finally, AI that doesn't feel like a toy. This is production-ready.",
        author: "David Kim",
        role: "CTO",
        company: "AI Labs",
      },
    ],
  },
  contact: {
    headline: "Get in touch",
    subtext:
      "Questions about Copilot? Our team is here to help. Reach out and we'll get back to you soon.",
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "How fast can I launch?",
        answer:
          "Sign up and you're ready in under a minute. Install the browser extension or connect your first integration to get started.",
      },
      {
        question: "Do you offer integrations?",
        answer:
          "Yes. We integrate with Slack, Notion, Gmail, Google Drive, Figma, Linear, and 50+ other tools. New integrations ship every week.",
      },
      {
        question: "Is support included?",
        answer:
          "Free users get community support. Pro includes priority email support. Team plans get dedicated success managers.",
      },
      {
        question: "Is my data secure?",
        answer:
          "We never train on your data. All processing is encrypted. Enterprise customers can deploy in their own environment.",
      },
    ],
  },
  cta: {
    headline: "Launch your AI assistant today",
    subtext: "Free forever for individuals. No credit card required.",
    primaryCta: { label: "Try Copilot free", href: "#pricing" },
    secondaryCta: { label: "Watch demo", href: "#demo" },
  },
};
