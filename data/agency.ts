import type { LandingPageData } from "./types";

export const agencyData: LandingPageData = {
  variant: "agency",
  hero: {
    headline: "We build brands that move people",
    subtext:
      "Strategy, design, and development for ambitious companies. From concept to launch, we help you stand out.",
    primaryCta: { label: "Start a project", href: "#pricing" },
    secondaryCta: { label: "View our work", href: "#features" },
    trustBadges: [
      "50+ brands launched",
      "Nike",
      "Airbnb",
      "Spotify",
      "Stripe",
    ],
    announcementBanner: "Now accepting Q2 2025 projects — limited slots",
    mockupVariant: "agency",
  },
  logoCloud: {
    headline: "Trusted by ambitious brands",
    logos: [
      { name: "Nike" },
      { name: "Airbnb" },
      { name: "Spotify" },
      { name: "Stripe" },
      { name: "ScaleUp" },
      { name: "Dropbox" },
    ],
  },
  features: {
    headline: "How we work",
    subtext:
      "A proven process that turns ideas into brands people love.",
    items: [
      {
        iconKey: "MessageSquare",
        title: "Discovery & strategy",
        description:
          "We dive deep into your vision, audience, and goals. No cookie-cutter approaches.",
        highlighted: true,
      },
      {
        iconKey: "Palette",
        title: "Brand & design",
        description:
          "Visual identity, UI/UX, and design systems that scale with your growth.",
      },
      {
        iconKey: "Zap",
        title: "Development",
        description:
          "Clean, fast, and maintainable. We build with modern tech that lasts.",
      },
      {
        iconKey: "TrendingUp",
        title: "Launch & grow",
        description:
          "Go-to-market support, analytics, and ongoing optimization.",
      },
      {
        iconKey: "Shield",
        title: "Ongoing partnership",
        description:
          "Retainers and support for brands that want to keep evolving.",
      },
      {
        iconKey: "Layout",
        title: "Case studies",
        description:
          "Every project is documented. See our process and results.",
      },
    ],
  },
  productShowcase: {
    headline: "Work that speaks",
    subtext:
      "From rebrands to product launches. Each project is crafted for impact.",
    mockupVariant: "agency",
    features: [
      {
        title: "Full-service delivery",
        description:
          "Strategy, design, and dev under one roof. No handoff headaches.",
      },
      {
        title: "Transparent process",
        description:
          "Weekly check-ins, shared docs, and clear milestones. You're always in the loop.",
      },
    ],
  },
  integrations: {
    headline: "Tools we use",
    subtext:
      "We work with the best platforms to deliver results.",
    items: [
      { name: "Figma" },
      { name: "Vercel" },
      { name: "Stripe" },
      { name: "Notion" },
      { name: "Linear" },
      { name: "Slack" },
    ],
  },
  pricing: {
    headline: "Project-based pricing",
    subtext: "Transparent packages. No surprises.",
    items: [
      {
        name: "Brand refresh",
        price: "$15K",
        period: "+",
        description: "Logo, guidelines, and core assets",
        features: [
          "Brand strategy workshop",
          "Visual identity",
          "Brand guidelines",
          "4-week delivery",
        ],
        ctaLabel: "Get a quote",
        ctaHref: "#contact",
      },
      {
        name: "Product launch",
        price: "$35K",
        period: "+",
        description: "Full design and development",
        features: [
          "Discovery & strategy",
          "UI/UX design",
          "Front-end development",
          "8–12 week delivery",
        ],
        ctaLabel: "Start a project",
        ctaHref: "#contact",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Ongoing partnership",
        features: [
          "Dedicated team",
          "Retainer model",
          "Priority support",
          "Flexible scope",
        ],
        ctaLabel: "Contact us",
        ctaHref: "#contact",
      },
    ],
  },
  testimonials: {
    headline: "What clients say",
    subtext: "From startups to enterprises.",
    items: [
      {
        quote: "They understood our vision from day one. The rebrand exceeded expectations.",
        author: "Jessica Park",
        role: "CEO",
        company: "Lumina",
      },
      {
        quote: "Best agency we've worked with. Fast, creative, and genuinely collaborative.",
        author: "David Kim",
        role: "Founder",
        company: "FlowTech",
      },
      {
        quote: "Our conversion rate jumped 40% after the redesign. Worth every penny.",
        author: "Maria Santos",
        role: "Head of Growth",
        company: "ScaleUp",
      },
    ],
  },
  contact: {
    headline: "Let's talk",
    subtext:
      "Tell us about your project. We respond within 24 hours.",
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "What's your typical timeline?",
        answer:
          "Brand refreshes: 4 weeks. Product launches: 8–12 weeks. Enterprise projects vary. We'll give you a detailed timeline in our proposal.",
      },
      {
        question: "Do you work with startups?",
        answer:
          "Yes. We work with funded startups and established brands. We offer flexible payment terms for early-stage companies.",
      },
      {
        question: "What's included in a project?",
        answer:
          "Every project includes strategy, design, development, and handoff. We provide source files, documentation, and training.",
      },
      {
        question: "Can you work with our existing team?",
        answer:
          "Absolutely. We often collaborate with in-house designers and developers. We're flexible with your workflow.",
      },
    ],
  },
  cta: {
    headline: "Ready to build something great?",
    subtext: "Let's turn your vision into reality.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "View case studies", href: "#features" },
  },
};
