/** Icon maps for features and variants. Keys match iconKey in data. */
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
  Layout,
  GitBranch,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
};

/** Returns Lucide icon for feature iconKey. Falls back to Zap. */
export const getFeatureIcon = (key: string): LucideIcon =>
  FEATURE_ICONS[key] ?? Zap;

/** Returns Lucide icon for variant iconKey. Falls back to BarChart3. */
export const getVariantIcon = (key: string): LucideIcon =>
  VARIANT_ICONS[key] ?? BarChart3;
