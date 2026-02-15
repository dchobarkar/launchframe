import {
  HeroBlock,
  LogoCloud,
  FeatureCard,
  ProductShowcase,
  IntegrationGrid,
  PricingCard,
  TestimonialCard,
  FAQAccordion,
  CTASection,
} from "@/components/marketing";
import { VariantMockup } from "@/components/ui/VariantMockup";
import { ProductShowcaseMockup } from "@/components/ui/ProductShowcaseMockup";
import { aiStartupData } from "@/data";
import { getFeatureIcon } from "@/data/icons";

export default function AIStartupPage() {
  const { hero, logoCloud, features, productShowcase, integrations, pricing, testimonials, faq, cta } = aiStartupData;

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

      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {features.headline}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {features.subtext}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        headline={productShowcase.headline}
        subtext={productShowcase.subtext}
        mockup={<ProductShowcaseMockup variant={productShowcase.mockupVariant} />}
        features={productShowcase.features}
      />

      <div id="integrations">
        <IntegrationGrid
          headline={integrations.headline}
          subtext={integrations.subtext}
          integrations={integrations.items}
        />
      </div>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {pricing.headline}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {pricing.subtext}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 p-2 rounded-lg glass-card">
              <span className="text-sm text-zinc-500">Monthly</span>
              <div className="w-10 h-5 rounded-full bg-violet-500/30" />
              <span className="text-sm font-medium">Yearly</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.items.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                ctaLabel={plan.ctaLabel}
                ctaHref={plan.ctaHref}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
    </main>
  );
}
