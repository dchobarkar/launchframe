import {
  HeroBlock,
  LogoCloud,
  FeatureCard,
  ProductShowcase,
  IntegrationGrid,
  PricingSection,
  TestimonialCard,
  ContactSection,
  FAQAccordion,
  CTASection,
} from "@/components/marketing";
import { VariantMockup } from "@/components/ui/VariantMockup";
import { ProductShowcaseMockup } from "@/components/ui/ProductShowcaseMockup";
import { aiStartupData } from "@/data";
import { getFeatureIcon } from "@/data/icons";

export default function AIStartupPage() {
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
  } = aiStartupData;

  return (
    <main className="pt-16">
      <HeroBlock
        variant="ai"
        headline={hero.headline}
        subtext={hero.subtext}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        trustBadges={hero.trustBadges}
        announcementBanner={hero.announcementBanner}
        productMockup={<VariantMockup variant={hero.mockupVariant} />}
      />

      <LogoCloud headline={logoCloud.headline} logos={logoCloud.logos} />

      <section id="features" className="py-16 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {features.headline}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {features.subtext}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.items.map((item, i) => (
              <FeatureCard
                key={i}
                icon={getFeatureIcon(item.iconKey)}
                title={item.title}
                description={item.description}
                highlighted={item.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductShowcase
        id="demo"
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

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {testimonials.headline}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {testimonials.subtext}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.items.map((item, i) => (
              <TestimonialCard
                key={i}
                quote={item.quote}
                author={item.author}
                role={item.role}
                company={item.company}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion headline={faq.headline} items={faq.items} />

      <CTASection
        headline={cta.headline}
        subtext={cta.subtext}
        primaryCta={cta.primaryCta}
        secondaryCta={cta.secondaryCta}
      />

      <ContactSection
        headline={contact.headline}
        subtext={contact.subtext}
      />
    </main>
  );
}
