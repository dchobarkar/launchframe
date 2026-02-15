import Link from "next/link";

export interface HeroBlockProps {
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustBadges?: string[];
  announcementBanner?: string;
  productMockup?: React.ReactNode;
  variant?: "saas" | "ai" | "creator" | "agency" | "dev-tools" | "ecommerce" | "fintech" | "marketing";
}

export function HeroBlock({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  trustBadges = [],
  announcementBanner,
  productMockup,
}: HeroBlockProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)`,
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -z-10 opacity-30 blur-3xl accent-bg" />

      {announcementBanner && (
        <div
          className="mt-6 md:mt-8 mb-6 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit mx-auto text-sm"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <span className="text-zinc-400">{announcementBanner}</span>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up">
            <span className="block">{headline}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto animate-fade-up animate-fade-up-delay-1">
            {subtext}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-fade-up-delay-2">
            <Link
              href={primaryCta.href}
              className="cta-glow accent-bg inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-background transition-all"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-zinc-600 hover:border-zinc-500 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {trustBadges.length > 0 && (
            <div className="mt-12 animate-fade-up animate-fade-up-delay-3">
              <p className="text-sm text-zinc-500 mb-4">{trustBadges[0]}</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {trustBadges.slice(1).map((badge, i) => (
                  <span key={i} className="text-zinc-500 font-medium text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {productMockup && (
          <div className="mt-16 animate-fade-up animate-fade-up-delay-4">
            <div
              className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              style={{
                boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)`,
              }}
            >
              {productMockup}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
