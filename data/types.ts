export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subtext: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  trustBadges: string[];
  announcementBanner?: string;
  mockupVariant: "saas" | "ai" | "creator";
}

export interface LogoItem {
  name: string;
  width?: number;
}

export interface FeatureData {
  iconKey: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface ProductShowcaseData {
  headline: string;
  subtext?: string;
  mockupVariant: "saas" | "ai" | "creator";
  features: { title: string; description: string }[];
}

export interface IntegrationData {
  name: string;
}

export interface PricingData {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface SectionHeadlineData {
  headline: string;
  subtext?: string;
}

export interface LandingPageData {
  variant: "saas" | "ai" | "creator";
  hero: HeroData;
  logoCloud: { headline: string; logos: LogoItem[] };
  features: SectionHeadlineData & { items: FeatureData[] };
  productShowcase: ProductShowcaseData;
  integrations: SectionHeadlineData & { items: IntegrationData[] };
  pricing: SectionHeadlineData & { items: PricingData[] };
  testimonials: SectionHeadlineData & { items: TestimonialData[] };
  faq: { headline: string; items: FAQItemData[] };
  cta: {
    headline: string;
    subtext?: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
  };
}

export interface VariantLink {
  slug: string;
  name: string;
  description: string;
  iconKey: string;
  href: string;
}
