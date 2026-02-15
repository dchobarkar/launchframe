import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: FeatureCardProps) => (
    <div
      className={`feature-card-hover p-5 sm:p-6 rounded-xl ${
        highlighted
          ? "glass-card accent-border-muted accent-bg-muted"
          : "glass-card"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          highlighted
            ? "accent-bg-muted-strong accent-text"
            : "bg-white/5 text-zinc-400"
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
);
