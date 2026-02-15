import {
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Database,
  GitBranch,
  Bot,
  Sparkles,
  Workflow,
  MessageSquare,
  Lock,
  Layout,
  Palette,
  Share2,
  Image,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const FEATURE_ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Database,
  GitBranch,
  Bot,
  Sparkles,
  Workflow,
  MessageSquare,
  Lock,
  Layout,
  Palette,
  Share2,
  Image,
};

export const VARIANT_ICONS: Record<string, LucideIcon> = {
  BarChart3,
  Bot,
  Palette,
  ArrowRight,
};

export function getFeatureIcon(key: string): LucideIcon {
  return FEATURE_ICONS[key] ?? Zap;
}

export function getVariantIcon(key: string): LucideIcon {
  return VARIANT_ICONS[key] ?? BarChart3;
}
