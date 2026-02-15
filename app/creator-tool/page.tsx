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
import { Layout, Palette, Zap, Share2, Image, BarChart3 } from "lucide-react";

export default function CreatorToolPage() {
  return (
    <main className="pt-16">
      <HeroBlock
        variant="creator"
        headline="Your portfolio, perfected"
        subtext="Build a stunning portfolio in minutes. No code, no design skills needed. Templates for designers, developers, and creators."
        primaryCta={{ label: "Start building free", href: "#" }}
        secondaryCta={{ label: "Browse templates", href: "#" }}
        trustBadges={[
          "50,000+ portfolios created",
          "Behance",
          "Dribbble",
          "GitHub",
          "Medium",
        ]}
        announcementBanner="New: AI-powered layout suggestions — design in half the time"
        productMockup={
          <ProductMockup>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded bg-linear-to-br from-pink-500/20 to-violet-500/20"
                  />
                ))}
              </div>
              <div className="h-24 rounded bg-zinc-800/50" />
            </div>
          </ProductMockup>
        }
      />

      <LogoCloud
        headline="Creators love Portify"
        logos={[
          { name: "Behance" },
          { name: "Dribbble" },
          { name: "GitHub" },
          { name: "Medium" },
          { name: "Substack" },
          { name: "YouTube" },
        ]}
      />

      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to stand out
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From drag-and-drop design to custom domains. Built for creators
              who mean business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Layout}
              title="Drag-and-drop builder"
              description="Arrange sections, add projects, and customize layouts. No coding required."
              highlighted
            />
            <FeatureCard
              icon={Palette}
              title="Beautiful templates"
              description="50+ templates for designers, devs, photographers, and writers. One click to apply."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning fast"
              description="Optimized for speed. Your portfolio loads in under a second, everywhere."
            />
            <FeatureCard
              icon={Share2}
              title="Custom domains"
              description="Use your own domain. Portify.how/yourname or yourname.com — your choice."
            />
            <FeatureCard
              icon={Image}
              title="Media-rich projects"
              description="Embed images, videos, and code. Show your work the way it deserves."
            />
            <FeatureCard
              icon={BarChart3}
              title="Built-in analytics"
              description="See who views your portfolio. Track projects and optimize for impact."
            />
          </div>
        </div>
      </section>

      <ProductShowcase
        headline="Design without limits"
        subtext="Full creative control. Change colors, fonts, and layouts. Or start from a template and make it yours."
        mockup={
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              {["#ec4899", "#8b5cf6", "#06b6d4"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white/20"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video rounded-lg bg-pink-500/20" />
              <div className="aspect-video rounded-lg bg-violet-500/20" />
            </div>
          </div>
        }
        features={[
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
        ]}
      />

      <div id="integrations">
        <IntegrationGrid
          headline="Connect your work"
          subtext="Import from your favorite platforms. Embed and showcase anywhere."
          integrations={[
            { name: "Behance" },
            { name: "Dribbble" },
            { name: "GitHub" },
            { name: "Figma" },
            { name: "Vimeo" },
            { name: "YouTube" },
          ]}
        />
      </div>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pricing that scales with you
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Start free. Upgrade when you&apos;re ready to go pro.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 p-2 rounded-lg glass-card">
              <span className="text-sm text-zinc-500">Monthly</span>
              <div className="w-10 h-5 rounded-full bg-pink-500/30" />
              <span className="text-sm font-medium">Yearly</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              name="Free"
              price="$0"
              period="/mo"
              description="For getting started"
              features={[
                "1 portfolio",
                "3 projects",
                "Portify subdomain",
                "Basic templates",
              ]}
              ctaLabel="Get started"
              ctaHref="#"
            />
            <PricingCard
              name="Pro"
              price="$12"
              period="/mo"
              description="For serious creators"
              features={[
                "Unlimited projects",
                "Custom domain",
                "All templates",
                "Analytics",
                "Remove branding",
              ]}
              ctaLabel="Start free trial"
              ctaHref="#"
              highlighted
            />
            <PricingCard
              name="Studio"
              price="$29"
              period="/mo"
              description="For agencies"
              features={[
                "Everything in Pro",
                "5 portfolios",
                "Client management",
                "White-label",
                "Priority support",
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
              Loved by creators
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From freelancers to agencies. See what they&apos;re saying.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              quote="I landed 3 clients in my first month. The portfolio just looks so professional."
              author="Alex Rivera"
              role="Freelance Designer"
              company="Rivera Studio"
            />
            <TestimonialCard
              quote="Finally, a portfolio tool that doesn't get in my way. Simple and powerful."
              author="Jordan Lee"
              role="Developer"
              company="Indie"
            />
            <TestimonialCard
              quote="We use Portify for all our client portfolios. Saves us hours every week."
              author="Morgan Taylor"
              role="Creative Director"
              company="Studio M"
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
        ]}
      />

      <CTASection
        headline="Build your portfolio today"
        subtext="Free forever. No credit card. Launch in minutes."
        primaryCta={{ label: "Start building free", href: "#" }}
        secondaryCta={{ label: "View templates", href: "#" }}
      />
    </main>
  );
}
