import Link from "next/link";

/** Final CTA section with primary and optional secondary button. */
export interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const CTASection = ({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
}: CTASectionProps) => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
        {subtext && (
          <p className="text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8">
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="cta-glow accent-bg inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-background"
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
      </div>
    </div>
  </section>
);
