import type { LandingPageData } from "./types";

export const creatorToolData: LandingPageData = {
  variant: "creator",
  hero: {
    headline: "Your portfolio, perfected",
    subtext:
      "Build a stunning portfolio in minutes. No code, no design skills needed. Templates for designers, developers, and creators.",
    primaryCta: { label: "Start building free", href: "#pricing" },
    secondaryCta: { label: "Browse templates", href: "#templates" },
    trustBadges: [
      "50,000+ portfolios created",
      "Behance",
      "Dribbble",
      "GitHub",
      "Medium",
    ],
    announcementBanner:
      "New: AI-powered layout suggestions — design in half the time",
    mockupVariant: "creator",
  },
  logoCloud: {
    headline: "Creators love Portify",
    logos: [
      { name: "Behance" },
      { name: "Dribbble" },
      { name: "GitHub" },
      { name: "Medium" },
      { name: "Substack" },
      { name: "YouTube" },
    ],
  },
  features: {
    headline: "Everything you need to stand out",
    subtext:
      "From drag-and-drop design to custom domains. Built for creators who mean business.",
    items: [
      {
        iconKey: "Layout",
        title: "Drag-and-drop builder",
        description:
          "Arrange sections, add projects, and customize layouts. No coding required.",
        highlighted: true,
      },
      {
        iconKey: "Palette",
        title: "Beautiful templates",
        description:
          "50+ templates for designers, devs, photographers, and writers. One click to apply.",
      },
      {
        iconKey: "Zap",
        title: "Lightning fast",
        description:
          "Optimized for speed. Your portfolio loads in under a second, everywhere.",
      },
      {
        iconKey: "Share2",
        title: "Custom domains",
        description:
          "Use your own domain. Portify.how/yourname or yourname.com — your choice.",
      },
      {
        iconKey: "Image",
        title: "Media-rich projects",
        description:
          "Embed images, videos, and code. Show your work the way it deserves.",
      },
      {
        iconKey: "BarChart3",
        title: "Built-in analytics",
        description:
          "See who views your portfolio. Track projects and optimize for impact.",
      },
    ],
  },
  productShowcase: {
    headline: "Design without limits",
    subtext:
      "Full creative control. Change colors, fonts, and layouts. Or start from a template and make it yours.",
    mockupVariant: "creator",
    features: [
      {
        title: "AI layout suggestions",
        description:
          "Stuck on design? Get AI-powered layout ideas based on your content.",
      },
      {
        title: "Responsive by default",
        description:
          "Every template looks great on mobile, tablet, and desktop.",
      },
    ],
  },
  integrations: {
    headline: "Connect your work",
    subtext:
      "Import from your favorite platforms. Embed and showcase anywhere.",
    items: [
      { name: "Behance" },
      { name: "Dribbble" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Vimeo" },
      { name: "YouTube" },
    ],
  },
  pricing: {
    headline: "Pricing that scales with you",
    subtext: "Start free. Upgrade when you're ready to go pro.",
    items: [
      {
        name: "Free",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For getting started",
        features: [
          "1 portfolio",
          "3 projects",
          "Portify subdomain",
          "Basic templates",
        ],
        ctaLabel: "Get started free",
        ctaHref: "#pricing",
      },
      {
        name: "Pro",
        price: "$12",
        period: "/mo",
        priceYearly: "$10",
        periodYearly: "/mo",
        priceYearlyTotal: "$120",
        description: "For serious creators",
        features: [
          "Unlimited projects",
          "Custom domain",
          "All templates",
          "Analytics",
          "Remove branding",
        ],
        ctaLabel: "Start free trial",
        ctaHref: "#pricing",
        highlighted: true,
      },
      {
        name: "Studio",
        price: "$29",
        period: "/mo",
        priceYearly: "$24",
        periodYearly: "/mo",
        priceYearlyTotal: "$288",
        description: "For agencies",
        features: [
          "Everything in Pro",
          "5 portfolios",
          "Client management",
          "White-label",
          "Priority support",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#faq",
      },
    ],
  },
  testimonials: {
    headline: "Loved by creators",
    subtext: "From freelancers to agencies. See what they're saying.",
    items: [
      {
        quote:
          "I landed 3 clients in my first month. The portfolio just looks so professional.",
        author: "Alex Rivera",
        role: "Freelance Designer",
        company: "Rivera Studio",
      },
      {
        quote:
          "Finally, a portfolio tool that doesn't get in my way. Simple and powerful.",
        author: "Jordan Lee",
        role: "Developer",
        company: "Indie",
      },
      {
        quote:
          "We use Portify for all our client portfolios. Saves us hours every week.",
        author: "Morgan Taylor",
        role: "Creative Director",
        company: "Studio M",
      },
    ],
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "How fast can I launch?",
        answer:
          "Most creators have a live portfolio within 30 minutes. Pick a template, add your projects, and publish. Custom domains take a few minutes to connect.",
      },
      {
        question: "Do you offer integrations?",
        answer:
          "Yes. Import projects from Behance, Dribbble, GitHub, and Figma. Embed videos from Vimeo and YouTube. More integrations coming soon.",
      },
      {
        question: "Is support included?",
        answer:
          "Free users get help via our community. Pro and Studio include email support. Studio gets priority support and a dedicated success contact.",
      },
      {
        question: "Can I use my own domain?",
        answer:
          "Yes. Pro and Studio plans include custom domain support. Point your domain to Portify and we handle the rest. SSL included.",
      },
    ],
  },
  cta: {
    headline: "Build your portfolio today",
    subtext: "Free forever. No credit card. Launch in minutes.",
    primaryCta: { label: "Start building free", href: "#pricing" },
    secondaryCta: { label: "View templates", href: "#templates" },
  },
};
