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
import { ProductMockup } from "@/components/ui/ProductMockup";
import {
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Database,
  GitBranch,
} from "lucide-react";

export default function SaaSPage() {
  return (
    <main className="pt-16">
      <HeroBlock
        variant="saas"
        headline="Analytics that move at your speed"
        subtext="Real-time dashboards, AI-powered insights, and APIs built for developers. Ship faster with data you can trust."
        primaryCta={{ label: "Start free trial", href: "#" }}
        secondaryCta={{ label: "View demo", href: "#" }}
        trustBadges={[
          "Trusted by 5,000+ teams",
          "Stripe",
          "Vercel",
          "Linear",
          "Notion",
        ]}
        announcementBanner="New: AI-powered anomaly detection — now in beta"
        productMockup={
          <ProductMockup>
            <div className="p-6 grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 rounded bg-zinc-800/50 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
              <div className="col-span-4 h-32 rounded bg-zinc-800/50 flex items-end p-4 gap-2">
                {[40, 65, 45, 80, 55, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-cyan-500/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </ProductMockup>
        }
      />

      <LogoCloud
        headline="Trusted by teams at"
        logos={[
          { name: "Stripe" },
          { name: "Vercel" },
          { name: "Linear" },
          { name: "Notion" },
          { name: "Figma" },
          { name: "Vercel" },
        ]}
      />

      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for the way you work
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Everything you need to understand your product, users, and
              business — in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BarChart3}
              title="Real-time dashboards"
              description="See what matters as it happens. No more waiting for batch jobs or stale reports."
              highlighted
            />
            <FeatureCard
              icon={Zap}
              title="Lightning-fast queries"
              description="Sub-second query performance on billions of events. Built on a columnar engine."
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise security"
              description="SOC 2 Type II, GDPR compliant. Your data stays yours with role-based access."
            />
            <FeatureCard
              icon={TrendingUp}
              title="AI-powered insights"
              description="Automatically surface anomalies, trends, and opportunities in your data."
            />
            <FeatureCard
              icon={Database}
              title="Flexible data model"
              description="Track events, users, and custom properties. No rigid schemas required."
            />
            <FeatureCard
              icon={GitBranch}
              title="Developer-first API"
              description="REST and GraphQL APIs. SDKs for every major language. Deploy in minutes."
            />
          </div>
        </div>
      </section>

      <ProductShowcase
        headline="One dashboard. Every metric."
        subtext="From acquisition to retention, see the full picture without switching tools."
        mockup={
          <div className="p-6 space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 h-20 rounded bg-zinc-800/50" />
              <div className="flex-1 h-20 rounded bg-zinc-800/50" />
              <div className="flex-1 h-20 rounded bg-zinc-800/50" />
            </div>
            <div className="h-48 rounded bg-zinc-800/30 border border-cyan-500/20" />
          </div>
        }
        features={[
          {
            title: "Custom metrics",
            description:
              "Define exactly what you want to track. No limits on events or properties.",
          },
          {
            title: "Funnels & cohorts",
            description:
              "Understand conversion at every step. Build cohorts for targeted analysis.",
          },
        ]}
      />

      <div id="integrations">
        <IntegrationGrid
          headline="Connects with your stack"
          subtext="Import data from anywhere. Export to your warehouse. Sync with your tools."
          integrations={[
            { name: "Slack" },
            { name: "Notion" },
            { name: "Zapier" },
            { name: "Segment" },
            { name: "Snowflake" },
            { name: "BigQuery" },
          ]}
        />
      </div>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 p-2 rounded-lg glass-card">
              <span className="text-sm text-zinc-500">Monthly</span>
              <div className="w-10 h-5 rounded-full bg-cyan-500/30" />
              <span className="text-sm font-medium">Yearly</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price="$0"
              period="/mo"
              description="For side projects and experiments"
              features={[
                "10K events/month",
                "3 dashboards",
                "7-day retention",
                "Community support",
              ]}
              ctaLabel="Get started"
              ctaHref="#"
            />
            <PricingCard
              name="Pro"
              price="$99"
              period="/mo"
              description="For growing teams"
              features={[
                "1M events/month",
                "Unlimited dashboards",
                "90-day retention",
                "Email support",
                "Custom domains",
              ]}
              ctaLabel="Start free trial"
              ctaHref="#"
              highlighted
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              period=""
              description="For large organizations"
              features={[
                "Unlimited events",
                "Unlimited retention",
                "Dedicated support",
                "SSO & SAML",
                "Custom contracts",
              ]}
              ctaLabel="Contact sales"
              ctaHref="#"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by product teams
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              See what founders and product leaders are saying.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              quote="We cut our time-to-insight by 80%. The dashboards just work."
              author="Sarah Chen"
              role="Head of Product"
              company="TechFlow"
            />
            <TestimonialCard
              quote="Finally, analytics that doesn't require a data team to maintain."
              author="Marcus Johnson"
              role="Founder"
              company="LaunchPad"
            />
            <TestimonialCard
              quote="The API is a dream. We had events flowing in under an hour."
              author="Elena Rodriguez"
              role="CTO"
              company="DataDriven"
            />
          </div>
        </div>
      </section>

      <FAQAccordion
        headline="Frequently asked questions"
        items={[
          {
            question: "How fast can I launch?",
            answer:
              "Most teams are up and running within 15 minutes. Our SDKs support JavaScript, React, iOS, and Android. You can also send events via our REST API.",
          },
          {
            question: "Do you offer integrations?",
            answer:
              "Yes. We integrate with Slack, Notion, Zapier, Segment, and major data warehouses like Snowflake and BigQuery. More integrations are added every month.",
          },
          {
            question: "Is support included?",
            answer:
              "Pro plans include email support with 24-hour response times. Enterprise plans get dedicated support and a success manager.",
          },
          {
            question: "Can I export my data?",
            answer:
              "Absolutely. You can export raw events anytime. We also support streaming to your data warehouse for full ownership.",
          },
        ]}
      />

      <CTASection
        headline="Start your free trial"
        subtext="No credit card required. 14 days free. Cancel anytime."
        primaryCta={{ label: "Get started free", href: "#" }}
        secondaryCta={{ label: "Talk to sales", href: "#" }}
      />
    </main>
  );
}
