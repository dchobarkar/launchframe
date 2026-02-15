"use client";

import { useState } from "react";
import Image from "next/image";
import { Plug, Plus } from "lucide-react";
import {
  SiZapier,
  SiSnowflake,
  SiNotion,
  SiGmail,
  SiGoogledrive,
  SiFigma,
  SiLinear,
  SiVimeo,
  SiYoutube,
  SiGithub,
  SiBehance,
  SiDribbble,
} from "@icons-pack/react-simple-icons";
import { LOGO_ICON_MAP } from "@/data/logoMap";
import { IntegrationModal } from "@/components/ui/IntegrationModal";

export interface IntegrationGridProps {
  headline: string;
  subtext?: string;
  integrations: { name: string }[];
}

const ICON_COMPONENTS: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  SiZapier,
  SiSnowflake,
  SiNotion,
  SiGmail,
  SiGoogledrive,
  SiFigma,
  SiLinear,
  SiVimeo,
  SiYoutube,
  SiGithub,
  SiBehance,
  SiDribbble,
};

function IntegrationLogo({ name }: { name: string }) {
  const key = LOGO_ICON_MAP[name];
  const isDomain = key?.includes(".");
  const IconComponent = key && !isDomain ? ICON_COMPONENTS[key] : null;
  const [imgError, setImgError] = useState(false);

  if (isDomain && !imgError) {
    return (
      <div className="w-12 h-12 rounded-lg bg-white/95 flex items-center justify-center p-1.5 shadow-sm shrink-0">
        <Image
          src={`https://logo.clearbit.com/${key}`}
          alt={name}
          width={40}
          height={40}
          className="object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }
  if (IconComponent) {
    return (
      <div className="w-12 h-12 rounded-lg bg-white/95 flex items-center justify-center p-2 shadow-sm shrink-0">
        <IconComponent size={24} color="default" />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-lg bg-white/95 flex items-center justify-center shadow-sm shrink-0">
      <span className="font-bold text-lg text-zinc-600">{name.charAt(0)}</span>
    </div>
  );
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full accent-bg-muted accent-text text-sm mb-4">
            <Plug className="w-4 h-4" />
            Integrations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
          {subtext && (
            <p className="text-zinc-400 max-w-2xl mx-auto">{subtext}</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIntegration(integration.name)}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl glass-card hover:border-white/15 accent-hover-border transition-all text-center min-h-35 cursor-pointer"
            >
              <IntegrationLogo name={integration.name} />
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
