import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: FeatureCardProps) {
  return (
    <div
      className={`feature-card-hover p-6 rounded-xl ${
        highlighted
          ? "glass-card border-cyan-500/30 bg-cyan-500/5"
          : "glass-card"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          highlighted
            ? "bg-cyan-500/20 text-cyan-400"
            : "bg-white/5 text-zinc-400"
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
