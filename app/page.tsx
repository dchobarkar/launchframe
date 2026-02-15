import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Palette } from "lucide-react";

const variants = [
  {
    slug: "saas",
    name: "SaaS Product",
    description: "Analytics platform / AI tool / Dev product",
    icon: BarChart3,
    href: "/saas",
  },
  {
    slug: "ai-startup",
    name: "AI Startup",
    description: "Copilot / automation / assistant tool",
    icon: Bot,
    href: "/ai-startup",
  },
  {
    slug: "creator-tool",
    name: "Creator Tool",
    description: "Portfolio builder / productivity app",
    icon: Palette,
    href: "/creator-tool",
  },
];

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
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">LaunchFrame</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Modular landing page framework for SaaS, AI, and product marketing
          websites.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {variants.map((variant) => (
            <Link
              key={variant.slug}
              href={variant.href}
              className="group glass-card p-6 rounded-xl text-left hover:border-cyan-500/30 transition-colors"
            >
              <variant.icon className="w-8 h-8 text-cyan-500 mb-4" />
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
          ))}
        </div>
      </div>
    </main>
  );
}
