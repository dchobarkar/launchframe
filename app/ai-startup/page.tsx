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
  Bot,
  Sparkles,
  Workflow,
  MessageSquare,
  Zap,
  Lock,
} from "lucide-react";

export default function AIStartupPage() {
  return (
    <main className="pt-16">
      <HeroBlock
        variant="ai"
        headline="Your AI copilot for work"
        subtext="Automate tasks, draft documents, and get instant answers. Copilot AI works alongside you in every app — no context switching."
        primaryCta={{ label: "Try Copilot free", href: "#" }}
        secondaryCta={{ label: "See how it works", href: "#" }}
        trustBadges={[
          "Used by 10,000+ professionals",
          "Google",
          "Microsoft",
          "Salesforce",
          "HubSpot",
        ]}
        announcementBanner="New: Multi-app workflows — connect your entire stack"
        productMockup={
          <ProductMockup>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-500/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-violet-400" />
                </div>
                <div className="flex-1 h-24 rounded-lg bg-zinc-800/50" />
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex-1 h-16 rounded-lg bg-violet-500/20 border border-violet-500/30" />
                <div className="w-10 h-10 rounded-full bg-zinc-700" />
              </div>
            </div>
          </ProductMockup>
        }
      />

      <LogoCloud
        headline="Trusted by teams at"
        logos={[
          { name: "Google" },
          { name: "Microsoft" },
          { name: "Salesforce" },
          { name: "HubSpot" },
          { name: "Atlassian" },
          { name: "Dropbox" },
        ]}
      />

      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              AI that actually helps
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Not another chatbot. A true assistant that learns your workflow
              and gets things done.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Bot}
              title="Context-aware assistance"
              description="Copilot understands your current task, open files, and recent activity. No copy-pasting needed."
              highlighted
            />
            <FeatureCard
              icon={Sparkles}
              title="One-click automation"
              description="Turn repetitive workflows into single commands. From email summaries to report generation."
            />
            <FeatureCard
              icon={Workflow}
              title="Multi-app workflows"
              description="Connect Slack, Notion, Gmail, and more. Copilot orchestrates across your entire stack."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Natural conversation"
              description="Ask in plain English. Get precise answers. Follow up with clarifications — it remembers."
            />
            <FeatureCard
              icon={Zap}
              title="Real-time execution"
              description="Actions happen in seconds. Draft a doc, send a message, update a spreadsheet — all from one prompt."
            />
            <FeatureCard
              icon={Lock}
              title="Enterprise-grade privacy"
              description="Your data never trains our models. SOC 2 compliant. Deploy in your own environment."
            />
          </div>
        </div>
      </section>

      <ProductShowcase
        headline="Works where you work"
        subtext="Copilot lives in your browser, your IDE, and your favorite apps. One assistant, everywhere."
        mockup={
          <div className="p-6">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 p-4">
              <p className="text-sm text-violet-200 mb-2">
                &ldquo;Summarize my unread emails and draft responses for the
                top 3&rdquo;
              </p>
              <div className="h-2 w-24 rounded bg-violet-500/50 animate-pulse" />
            </div>
            <div className="mt-4 space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 rounded bg-zinc-800/50" />
              ))}
            </div>
          </div>
        }
        features={[
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
        ]}
      />

      <div id="integrations">
        <IntegrationGrid
          headline="Connects to your tools"
          subtext="One copilot. Every app. We integrate with 50+ tools and growing."
          integrations={[
            { name: "Slack" },
            { name: "Notion" },
            { name: "Gmail" },
            { name: "Google Drive" },
            { name: "Figma" },
            { name: "Linear" },
          ]}
        />
      </div>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple pricing for everyone
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Start free. Upgrade when you need more.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 p-2 rounded-lg glass-card">
              <span className="text-sm text-zinc-500">Monthly</span>
              <div className="w-10 h-5 rounded-full bg-violet-500/30" />
              <span className="text-sm font-medium">Yearly</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              name="Free"
              price="$0"
              period="/mo"
              description="For trying Copilot"
              features={[
                "50 tasks/month",
                "Basic integrations",
                "Email support",
                "Community access",
              ]}
              ctaLabel="Get started"
              ctaHref="#"
            />
            <PricingCard
              name="Pro"
              price="$29"
              period="/mo"
              description="For power users"
              features={[
                "Unlimited tasks",
                "All integrations",
                "Priority support",
                "Custom workflows",
                "API access",
              ]}
              ctaLabel="Start free trial"
              ctaHref="#"
              highlighted
            />
            <PricingCard
              name="Team"
              price="$79"
              period="/mo"
              description="For teams"
              features={[
                "Everything in Pro",
                "Team management",
                "Shared workflows",
                "Admin controls",
                "SSO",
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
              What teams are saying
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Copilot has changed how we work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              quote="I save 2 hours every day. Copilot handles my email triage and draft responses."
              author="James Park"
              role="VP Operations"
              company="ScaleUp"
            />
            <TestimonialCard
              quote="The multi-app workflows are a game-changer. One prompt, five tools updated."
              author="Nina Patel"
              role="Product Lead"
              company="FlowTech"
            />
            <TestimonialCard
              quote="Finally, AI that doesn't feel like a toy. This is production-ready."
              author="David Kim"
              role="CTO"
              company="AI Labs"
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
        ]}
      />

      <CTASection
        headline="Launch your AI assistant today"
        subtext="Free forever for individuals. No credit card required."
        primaryCta={{ label: "Try Copilot free", href: "#" }}
        secondaryCta={{ label: "Watch demo", href: "#" }}
      />
    </main>
  );
}
