import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { variantLinks, homeContent } from "@/data";
import { getVariantIcon } from "@/data/icons";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)`,
        }}
      />
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {homeContent.title}
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          {homeContent.description}
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {variantLinks.map((variant) => {
            const Icon = getVariantIcon(variant.iconKey);
            return (
              <Link
                key={variant.slug}
                href={variant.href}
                className="group glass-card p-6 rounded-xl text-left hover:border-cyan-500/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-cyan-500 mb-4" />
                <h2 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {variant.name}
                </h2>
                <p className="text-sm text-zinc-500 mb-4">
                  {variant.description}
                </p>
                <span className="text-sm text-cyan-400 flex items-center gap-1">
                  View demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
