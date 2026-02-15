import Link from "next/link";
import { Check } from "lucide-react";

export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  priceYearly?: string;
  periodYearly?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  billingPeriod?: "monthly" | "yearly";
}

export function PricingCard({
  name,
  price,
  period,
  priceYearly,
  periodYearly,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  billingPeriod = "monthly",
}: PricingCardProps) {
  const displayPrice =
    billingPeriod === "yearly" && priceYearly ? priceYearly : price;
  const displayPeriod =
    billingPeriod === "yearly" && periodYearly ? periodYearly : period;

  return (
    <div
      className={`pricing-toggle-transition p-8 rounded-xl h-full flex flex-col ${
        highlighted
          ? "glass-card accent-border accent-bg-muted scale-[1.02]"
          : "glass-card"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-zinc-400 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{displayPrice}</span>
        <span className="text-zinc-500 text-sm ml-1">{displayPeriod}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <Check className="w-5 h-5 accent-text shrink-0" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
          highlighted
            ? "cta-glow accent-bg text-background"
            : "border border-zinc-600 hover:border-zinc-500"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
