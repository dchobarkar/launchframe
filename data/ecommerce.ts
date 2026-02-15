import type { LandingPageData } from "./types";

export const ecommerceData: LandingPageData = {
  variant: "ecommerce",
  hero: {
    headline: "Sell more. Stress less.",
    subtext:
      "The all-in-one platform for modern brands. Storefront, checkout, and fulfillment — built for growth.",
    primaryCta: { label: "Start free trial", href: "#pricing" },
    secondaryCta: { label: "See how it works", href: "#features" },
    trustBadges: [
      "$2B+ in sales processed",
      "Shopify",
      "Stripe",
      "Mailchimp",
      "Klaviyo",
    ],
    announcementBanner: "New: One-click checkout — increase conversions by 30%",
    mockupVariant: "ecommerce",
  },
  logoCloud: {
    headline: "Powering brands everywhere",
    logos: [
      { name: "Stripe" },
      { name: "Shopify" },
      { name: "Mailchimp" },
      { name: "Notion" },
      { name: "Slack" },
      { name: "Figma" },
    ],
  },
  features: {
    headline: "Everything to run your store",
    subtext:
      "From first sale to repeat customer. We've got you covered.",
    items: [
      {
        iconKey: "Layout",
        title: "Beautiful storefronts",
        description:
          "Drag-and-drop builder. Mobile-first. No code required. 100+ themes.",
        highlighted: true,
      },
      {
        iconKey: "Zap",
        title: "One-click checkout",
        description:
          "Faster than Amazon. Guest checkout, saved cards, and buy now pay later.",
      },
      {
        iconKey: "BarChart3",
        title: "Smart analytics",
        description:
          "Revenue, conversion, and cohort reports. Know what's working.",
      },
      {
        iconKey: "TrendingUp",
        title: "Marketing tools",
        description:
          "Email, SMS, and ads. Abandoned cart, win-back, and loyalty built in.",
      },
      {
        iconKey: "Database",
        title: "Inventory & orders",
        description:
          "Multi-location, dropshipping, and fulfillment. Sync with 3PLs.",
      },
      {
        iconKey: "Shield",
        title: "Secure payments",
        description:
          "PCI compliant. Stripe, PayPal, and 20+ gateways. Global currencies.",
      },
    ],
  },
  productShowcase: {
    headline: "Your store, your way",
    subtext:
      "Customize everything. Or use a template and go live today.",
    mockupVariant: "ecommerce",
    features: [
      {
        title: "Mobile-first",
        description:
          "Every store looks perfect on phone, tablet, and desktop. Zero extra work.",
      },
      {
        title: "SEO built in",
        description:
          "Meta tags, structured data, and sitemaps. Rank from day one.",
      },
    ],
  },
  integrations: {
    headline: "Connects with your tools",
    subtext:
      "Payments, email, shipping, and more.",
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
    headline: "Pricing that scales",
    subtext: "Start free. Grow when you're ready.",
    items: [
      {
        name: "Starter",
        price: "$0",
        period: "/mo",
        priceYearly: "$0",
        periodYearly: "/yr",
        description: "For testing the waters",
        features: [
          "100 products",
          "1 staff account",
          "Basic themes",
          "Community support",
        ],
        ctaLabel: "Start free",
        ctaHref: "#pricing",
      },
      {
        name: "Growth",
        price: "$79",
        period: "/mo",
        priceYearly: "$59",
        periodYearly: "/mo",
        priceYearlyTotal: "$708",
        description: "For growing brands",
        features: [
          "Unlimited products",
          "5 staff accounts",
          "Advanced themes",
          "Email support",
          "Abandoned cart",
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
        description: "For serious sellers",
        features: [
          "Everything in Growth",
          "Unlimited staff",
          "Priority support",
          "Custom checkout",
          "API access",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#contact",
      },
    ],
  },
  testimonials: {
    headline: "Loved by sellers",
    subtext: "From first sale to seven figures.",
    items: [
      {
        quote: "We 3x'd our revenue in 6 months. The checkout alone was a game-changer.",
        author: "Emma Wilson",
        role: "Founder",
        company: "Bloom Co",
      },
      {
        quote: "Finally, a platform that doesn't nickel-and-dime you. Transparent and powerful.",
        author: "James Park",
        role: "E-commerce Director",
        company: "Urban Goods",
      },
      {
        quote: "Migration was painless. We were live in a weekend. Support was incredible.",
        author: "Sofia Martinez",
        role: "Operations Lead",
        company: "Craft & Co",
      },
    ],
  },
  contact: {
    headline: "Get in touch",
    subtext:
      "Questions about selling online? We're here to help.",
  },
  faq: {
    headline: "Frequently asked questions",
    items: [
      {
        question: "Can I migrate my existing store?",
        answer:
          "Yes. We offer free migration from Shopify, WooCommerce, and others. Our team handles the heavy lifting.",
      },
      {
        question: "What about transaction fees?",
        answer:
          "Starter: 2.9% + 30¢. Growth: 2.5% + 25¢. Scale: custom. Payment processing is separate.",
      },
      {
        question: "Do you support international sales?",
        answer:
          "Yes. Multi-currency, multi-language, and 100+ payment methods. Tax automation included.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Our storefronts are fully responsive. We also have iOS and Android apps for managing your store on the go.",
      },
    ],
  },
  cta: {
    headline: "Start selling today",
    subtext: "Free to start. No credit card. Launch in 24 hours.",
    primaryCta: { label: "Start free trial", href: "#pricing" },
    secondaryCta: { label: "See a demo", href: "#features" },
  },
};
