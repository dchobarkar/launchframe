import { notFound } from "next/navigation";

import { HeroBlock } from "@/components/marketing/HeroBlock";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { IntegrationGrid } from "@/components/marketing/IntegrationGrid";
import { PricingSection } from "@/components/marketing/PricingSection";
import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { ContactSection } from "@/components/marketing/ContactSection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { CTASection } from "@/components/marketing/CTASection";
import { SectionWithHeadline } from "@/components/marketing/SectionWithHeadline";
import VariantMockup from "@/components/ui/VariantMockup";
import ProductShowcaseMockup from "@/components/ui/ProductShowcaseMockup";
import { getVariantConfig } from "@/data/variants";
import { getFeatureIcon } from "@/data/icons";

type Props = { params: Promise<{ variant: string }> };

const Page = async ({ params }: Props) => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) notFound();

  const { data, productShowcaseId } = config;
  const {
    hero,
    logoCloud,
    features,
    productShowcase,
    integrations,
    pricing,
    testimonials,
    contact,
    faq,
    cta,
  } = data;

  return (
    <main className="pt-16">
      <HeroBlock
        variant={hero.mockupVariant}
        headline={hero.headline}
        subtext={hero.subtext}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        trustBadges={hero.trustBadges}
        announcementBanner={hero.announcementBanner}
        productMockup={<VariantMockup variant={hero.mockupVariant} />}
      />

      <LogoCloud headline={logoCloud.headline} logos={logoCloud.logos} />

      <SectionWithHeadline
        id="features"
        headline={features.headline}
        subtext={features.subtext}
        contentClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {features.items.map((item, i) => (
          <FeatureCard
            key={i}
            icon={getFeatureIcon(item.iconKey)}
            title={item.title}
            description={item.description}
            highlighted={item.highlighted}
          />
        ))}
      </SectionWithHeadline>

      <ProductShowcase
        id={productShowcaseId ?? "demo"}
        headline={productShowcase.headline}
        subtext={productShowcase.subtext}
        mockup={
          <ProductShowcaseMockup variant={productShowcase.mockupVariant} />
        }
        features={productShowcase.features}
      />

      <div id="integrations" className="scroll-mt-20">
        <IntegrationGrid
          headline={integrations.headline}
          subtext={integrations.subtext}
          integrations={integrations.items}
        />
      </div>

      <PricingSection
        headline={pricing.headline}
        subtext={pricing.subtext}
        items={pricing.items}
      />

      <SectionWithHeadline
        headline={testimonials.headline}
        subtext={testimonials.subtext}
        contentClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {testimonials.items.map((item, i) => (
          <TestimonialCard
            key={i}
            quote={item.quote}
            author={item.author}
            role={item.role}
            company={item.company}
          />
        ))}
      </SectionWithHeadline>

      <FAQAccordion headline={faq.headline} items={faq.items} />

      <CTASection
        headline={cta.headline}
        subtext={cta.subtext}
        primaryCta={cta.primaryCta}
        secondaryCta={cta.secondaryCta}
      />

      <ContactSection headline={contact.headline} subtext={contact.subtext} />
    </main>
  );
};

export default Page;
