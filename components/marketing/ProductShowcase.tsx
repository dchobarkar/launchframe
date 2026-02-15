import { Monitor } from "lucide-react";

export interface ProductShowcaseProps {
  headline: string;
  subtext?: string;
  mockup?: React.ReactNode;
  features?: { title: string; description: string }[];
}

export function ProductShowcase({
  headline,
  subtext,
  mockup,
  features = [],
}: ProductShowcaseProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
          {subtext && (
            <p className="text-zinc-400 max-w-2xl mx-auto">{subtext}</p>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {mockup ? (
              <div
                className="rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                {mockup}
              </div>
            ) : (
              <div className="aspect-video glass-card rounded-xl flex items-center justify-center">
                <Monitor className="w-24 h-24 text-zinc-600" />
              </div>
            )}
          </div>
          {features.length > 0 && (
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="glass-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
