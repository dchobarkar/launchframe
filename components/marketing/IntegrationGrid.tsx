"use client";

import { useState } from "react";
import { Plug, Plus } from "lucide-react";
import { IntegrationLogo } from "@/components/ui/IntegrationLogo";
import { IntegrationModal } from "@/components/ui/IntegrationModal";

export interface IntegrationGridProps {
  headline: string;
  subtext?: string;
  integrations: { name: string }[];
}

export function IntegrationGrid({
  headline,
  subtext,
  integrations,
}: IntegrationGridProps) {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(
    null,
  );

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full accent-bg-muted accent-text text-sm mb-4">
            <Plug className="w-4 h-4" />
            Integrations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
          {subtext && (
            <p className="text-zinc-400 max-w-2xl mx-auto">{subtext}</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {integrations.map((integration, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIntegration(integration.name)}
              className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl glass-card hover:border-white/15 accent-hover-border transition-all text-center min-h-32 sm:min-h-35 cursor-pointer"
            >
              <IntegrationLogo name={integration.name} size="sm" />
              <span className="font-medium text-zinc-300 text-sm text-center group-hover:text-zinc-100 transition-colors">
                {integration.name}
              </span>
              <span className="flex items-center gap-1 text-xs text-zinc-500 group-hover-accent transition-colors">
                <Plus className="w-3.5 h-3.5" />
                Connect
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedIntegration && (
        <IntegrationModal
          name={selectedIntegration}
          onClose={() => setSelectedIntegration(null)}
        />
      )}
    </section>
  );
}
