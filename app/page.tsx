/**
 * Home page. Lists all variant demos with links to /[variant].
 */
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { variantLinks, homeContent } from "@/data/home";
import { getVariantIcon } from "@/data/icons";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)`,
        }}
      />
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {homeContent.title}
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            {homeContent.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {variantLinks.map((variant) => {
            const Icon = getVariantIcon(variant.iconKey);
            return (
              <Link
                key={variant.slug}
                href={variant.href}
                className="group glass-card p-5 sm:p-6 rounded-xl text-left accent-hover-border transition-colors min-w-0"
              >
                <Icon className="w-8 h-8 accent-text mb-4" />
                <h2 className="font-semibold mb-2 group-hover-accent transition-colors">
                  {variant.name}
                </h2>
                <p className="text-sm text-zinc-500 mb-4">
                  {variant.description}
                </p>
                <span className="text-sm accent-text flex items-center gap-1">
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
};

export default Page;
