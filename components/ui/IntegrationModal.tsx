"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Loader2 } from "lucide-react";
import {
  SiZapier,
  SiSnowflake,
  SiNotion,
  SiGmail,
  SiGoogledrive,
  SiFigma,
  SiLinear,
  SiVimeo,
  SiYoutube,
  SiGithub,
  SiBehance,
  SiDribbble,
  SiStripe,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { LOGO_ICON_MAP } from "@/data/logoMap";

const ICON_COMPONENTS: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  SiZapier,
  SiSnowflake,
  SiNotion,
  SiGmail,
  SiGoogledrive,
  SiFigma,
  SiLinear,
  SiVimeo,
  SiYoutube,
  SiGithub,
  SiBehance,
  SiDribbble,
  SiStripe,
  SiVercel,
};

interface IntegrationModalProps {
  name: string;
  onClose: () => void;
}

function IntegrationLogo({ name }: { name: string }) {
  const key = LOGO_ICON_MAP[name];
  const isDomain = key?.includes(".");
  const IconComponent = key && !isDomain ? ICON_COMPONENTS[key] : null;

  if (isDomain) {
    return (
      <div className="w-16 h-16 rounded-xl bg-white/95 flex items-center justify-center p-2">
        <Image
          src={`https://logo.clearbit.com/${key}`}
          alt={name}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
    );
  }
  if (IconComponent) {
    return (
      <div className="w-16 h-16 rounded-xl bg-white/95 flex items-center justify-center p-2.5">
        <IconComponent size={36} color="default" />
      </div>
    );
  }
  return (
    <div className="w-16 h-16 rounded-xl bg-white/95 flex items-center justify-center">
      <span className="font-bold text-xl text-zinc-600">{name.charAt(0)}</span>
    </div>
  );
}

export function IntegrationModal({ name, onClose }: IntegrationModalProps) {
  const [status, setStatus] = useState<"connecting" | "connected">(
    "connecting",
  );

  useEffect(() => {
    const timer = setTimeout(() => setStatus("connected"), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative glass-card rounded-2xl p-5 sm:p-8 max-w-md w-full border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <IntegrationLogo name={name} />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {status === "connecting" ? "Connecting to " : "Connected to "}
            {name}
          </h3>
          {status === "connecting" ? (
            <div className="flex items-center gap-2 text-zinc-400">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Syncing your data...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span className="text-sm">Integration active</span>
            </div>
          )}
          <p className="mt-4 text-zinc-500 text-sm">
            {status === "connecting"
              ? "This is a demo. In production, you would authorize access here."
              : "Your data will sync automatically. You can manage this in Settings."}
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2.5 rounded-lg accent-bg font-medium text-black hover:opacity-90 transition-opacity"
          >
            {status === "connected" ? "Done" : "Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
}
