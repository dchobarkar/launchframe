"use client";

import { useState } from "react";

export type BillingPeriod = "monthly" | "yearly";

export interface PricingToggleProps {
  onToggle?: (period: BillingPeriod) => void;
}

export const PricingToggle = ({ onToggle }: PricingToggleProps) => {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  const handleToggle = () => {
    const next = period === "monthly" ? "yearly" : "monthly";
    setPeriod(next);
    onToggle?.(next);
  };

  return (
    <div className="mt-6 inline-flex items-center gap-2 p-2 rounded-lg glass-card">
      <span
        className={`text-sm transition-colors ${
          period === "monthly" ? "text-zinc-500" : "font-medium"
        }`}
      >
        Monthly
      </span>
      <button
        type="button"
        onClick={handleToggle}
        className="relative w-12 h-6 rounded-full bg-white/10 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
        aria-label={`Switch to ${period === "monthly" ? "yearly" : "monthly"} billing`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full accent-bg transition-all duration-200 ${
            period === "yearly" ? "left-7" : "left-1"
          }`}
        />
      </button>
      <span
        className={`text-sm transition-colors ${
          period === "yearly" ? "text-zinc-500" : "font-medium"
        }`}
      >
        Yearly
      </span>
      {period === "yearly" && (
        <span className="ml-2 text-xs accent-text font-medium">Save 20%</span>
      )}
    </div>
  );
}
