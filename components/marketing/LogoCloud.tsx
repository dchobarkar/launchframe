"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SiStripe,
  SiVercel,
  SiLinear,
  SiNotion,
  SiFigma,
  SiGithub,
  SiGoogle,
  SiHubspot,
  SiAtlassian,
  SiDropbox,
  SiBehance,
  SiDribbble,
  SiMedium,
  SiSubstack,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { LOGO_ICON_MAP } from "@/data/logoMap";

export interface LogoCloudProps {
  headline: string;
  logos: { name: string; width?: number }[];
}

const ICON_COMPONENTS: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  SiStripe,
  SiVercel,
  SiLinear,
  SiNotion,
  SiFigma,
  SiGithub,
  SiGoogle,
  SiHubspot,
  SiAtlassian,
  SiDropbox,
  SiBehance,
  SiDribbble,
  SiMedium,
  SiSubstack,
  SiYoutube,
};

function LogoItem({ name }: { name: string }) {
  const key = LOGO_ICON_MAP[name];
  const isDomain = key?.includes(".");
  const [imgError, setImgError] = useState(false);

  /* Light background ensures dark logos (GitHub, Medium) are visible on dark theme */
  const logoContainerClass =
    "flex items-center justify-center w-14 h-14 flex-shrink-0 rounded-xl bg-white/95 shadow-sm";

  if (isDomain && !imgError) {
    return (
      <div className={`${logoContainerClass} p-2`}>
        <Image
          src={`https://logo.clearbit.com/${key}`}
          alt={name}
          width={48}
          height={48}
          className="object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  const IconComponent = key ? ICON_COMPONENTS[key] : null;
  if (IconComponent) {
    return (
      <div className={`${logoContainerClass} p-2.5`}>
        <IconComponent size={28} color="default" />
      </div>
    );
  }

  return (
    <div className={`${logoContainerClass} text-zinc-600 font-bold text-lg`}>
      {name.charAt(0)}
    </div>
  );
}

export function LogoCloud({ headline, logos }: LogoCloudProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-500 text-sm font-medium tracking-wider uppercase mb-12">
          {headline}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-3.5 rounded-xl glass-card hover:border-white/15 transition-all min-w-42.5"
            >
              <LogoItem name={logo.name} />
              <span className="text-zinc-300 font-medium text-sm">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
