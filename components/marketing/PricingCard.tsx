import { Check } from "lucide-react";

/** Single pricing plan card. Supports monthly/yearly display and optional onCtaClick. */
export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  priceYearly?: string;
  periodYearly?: string;
  priceYearlyTotal?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  billingPeriod?: "monthly" | "yearly";
  onCtaClick?: (planName: string, ctaLabel: string) => void;
}

export const PricingCard = ({
  name,
  price,
  period,
  priceYearly,
  periodYearly,
  priceYearlyTotal,
  description,
  features,
  ctaLabel,
  highlighted = false,
  billingPeriod = "monthly",
  onCtaClick,
}: PricingCardProps) => {
  const displayPrice =
    billingPeriod === "yearly" && priceYearly ? priceYearly : price;
  const displayPeriod =
    billingPeriod === "yearly" && periodYearly ? periodYearly : period;

  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick(name, ctaLabel);
    }
  };

  return (
    <div
      className={`pricing-toggle-transition p-5 sm:p-8 rounded-xl h-full flex flex-col ${
        highlighted
          ? "glass-card accent-border accent-bg-muted scale-[1.02]"
          : "glass-card"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-zinc-400 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <div>
          <span className="text-4xl font-bold">{displayPrice}</span>
          <span className="text-zinc-500 text-sm ml-1">{displayPeriod}</span>
        </div>
        {billingPeriod === "yearly" && priceYearlyTotal && (
          <p className="text-zinc-500 text-sm mt-1">
            {priceYearlyTotal}/yr total
          </p>
        )}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <Check className="w-5 h-5 accent-text shrink-0" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleClick}
        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all cursor-pointer ${
          highlighted
            ? "cta-glow accent-bg text-black hover:opacity-90"
            : "border border-zinc-600 hover:border-zinc-500 hover:bg-white/5"
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  );
};
