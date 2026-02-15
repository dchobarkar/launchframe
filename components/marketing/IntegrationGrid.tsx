import { Plug } from "lucide-react";

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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-4">
            <Plug className="w-4 h-4" />
            Integrations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
          {subtext && (
            <p className="text-zinc-400 max-w-2xl mx-auto">{subtext}</p>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-xl flex items-center justify-center hover:border-cyan-500/20 transition-colors"
            >
              <span className="font-medium text-zinc-400">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
