import Link from "next/link";
import { Check } from "lucide-react";

export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`pricing-toggle-transition p-8 rounded-xl h-full flex flex-col ${
        highlighted
          ? "glass-card border-cyan-500/40 bg-cyan-500/5 scale-[1.02]"
          : "glass-card"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-zinc-400 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-zinc-500 text-sm ml-1">{period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <Check className="w-5 h-5 text-cyan-500 shrink-0" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
          highlighted
            ? "cta-glow text-background"
            : "border border-zinc-600 hover:border-zinc-500"
        }`}
        style={highlighted ? { background: "var(--neon-cyan)" } : undefined}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
