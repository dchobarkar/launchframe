"use client";

import { useState } from "react";

/** Social link with demo loading/success animation on click. */
import { Loader2, Check, Github, Twitter, Linkedin } from "lucide-react";

const ICON_MAP = {
  Twitter,
  Github,
  Linkedin,
} as const;

export type SocialIconKey = keyof typeof ICON_MAP;

export interface SocialIconButtonProps {
  iconKey: SocialIconKey;
  label: string;
  href?: string;
}

export const SocialIconButton = ({
  iconKey,
  label,
  href = "#",
}: SocialIconButtonProps) => {
  const Icon = ICON_MAP[iconKey];
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (state !== "idle") return;

    setState("loading");
    setTimeout(() => {
      setState("success");
      setTimeout(() => setState("idle"), 1500);
    }, 800);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={label}
      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-zinc-400 accent-hover transition-colors relative overflow-hidden"
    >
      {state === "idle" && <Icon className="w-5 h-5" />}
      {state === "loading" && (
        <Loader2 className="w-5 h-5 accent-text animate-spin" />
      )}
      {state === "success" && <Check className="w-5 h-5 accent-text" />}
    </a>
  );
};
