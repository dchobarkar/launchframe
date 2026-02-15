"use client";

import { useState } from "react";

import { PricingCard } from "./PricingCard";
import { PricingToggle } from "./PricingToggle";
import PlanActivationModal from "@/components/ui/PlanActivationModal";
import type { PricingData } from "@/data/types";

export interface PricingSectionProps {
  headline: string;
  subtext?: string;
  items: PricingData[];
}

export const PricingSection = ({
  headline,
  subtext,
  items,
}: PricingSectionProps) => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [activationModal, setActivationModal] = useState<{
    planName: string;
    ctaLabel: string;
  } | null>(null);

  return (
    <section id="pricing" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{subtext}</p>
          {items.some((i) => i.priceYearly) && (
            <PricingToggle onToggle={(period) => setBillingPeriod(period)} />
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {items.map((plan, i) => (
            <PricingCard
              key={i}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              priceYearly={plan.priceYearly}
              periodYearly={plan.periodYearly}
              priceYearlyTotal={plan.priceYearlyTotal}
              description={plan.description}
              features={plan.features}
              ctaLabel={plan.ctaLabel}
              ctaHref={plan.ctaHref}
              highlighted={plan.highlighted}
              billingPeriod={billingPeriod}
              onCtaClick={(planName, ctaLabel) =>
                setActivationModal({ planName, ctaLabel })
              }
            />
          ))}
        </div>
      </div>

      {activationModal && (
        <PlanActivationModal
          planName={activationModal.planName}
          ctaLabel={activationModal.ctaLabel}
          onClose={() => setActivationModal(null)}
        />
      )}
    </section>
  );
};
