"use client";

import { useState } from "react";
import Image from "next/image";
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
  SiHubspot,
  SiShopify,
  SiSpotify,
  SiMedium,
  SiSubstack,
  SiGoogle,
  SiAtlassian,
  SiDropbox,
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
  SiHubspot,
  SiShopify,
  SiSpotify,
  SiMedium,
  SiSubstack,
  SiGoogle,
  SiAtlassian,
  SiDropbox,
};

export interface IntegrationLogoProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: { container: "w-12 h-12", icon: 24 }, md: { container: "w-14 h-14", icon: 28 }, lg: { container: "w-16 h-16", icon: 36 } };

export function IntegrationLogo({ name, size = "sm" }: IntegrationLogoProps) {
  const key = LOGO_ICON_MAP[name];
  const isDomain = key?.includes(".");
  const IconComponent = key && !isDomain ? ICON_COMPONENTS[key] : null;
  const [imgError, setImgError] = useState(false);
  const { container, icon } = sizeMap[size];
  const rounded = size === "lg" ? "rounded-xl" : "rounded-lg";
  const padding = size === "lg" ? "p-2.5" : size === "md" ? "p-2" : "p-1.5";

  if (isDomain && !imgError) {
    return (
      <div className={`${container} ${rounded} bg-white/95 flex items-center justify-center ${padding} shadow-sm shrink-0`}>
        <Image
          src={`https://logo.clearbit.com/${key}`}
          alt={name}
          width={icon}
          height={icon}
          className="object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }
  if (IconComponent) {
    return (
      <div className={`${container} ${rounded} bg-white/95 flex items-center justify-center ${padding} shadow-sm shrink-0`}>
        <IconComponent size={icon} color="default" />
      </div>
    );
  }
  return (
    <div className={`${container} ${rounded} bg-white/95 flex items-center justify-center shadow-sm shrink-0`}>
      <span className={`font-bold text-zinc-600 ${size === "lg" ? "text-xl" : size === "md" ? "text-lg" : "text-lg"}`}>
        {name.charAt(0)}
      </span>
    </div>
  );
}
