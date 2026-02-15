import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav, Footer } from "@/components/marketing";
import { getVariantConfig, toMetadata, VARIANT_SLUGS } from "@/data";
import "@/styles/variants/index.css";

type Props = { children: React.ReactNode; params: Promise<{ variant: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) return {};
  return toMetadata(config.metadata, `/${variant}`);
}

export function generateStaticParams() {
  return VARIANT_SLUGS.map((variant) => ({ variant }));
}

export default async function VariantLayout({ children, params }: Props) {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) notFound();

  const { navConfig } = config;

  return (
    <div data-variant={variant}>
      <Nav
        productName={navConfig.productName}
        links={navConfig.links}
      />
      {children}
      <Footer
        productName={navConfig.productName}
        navLinks={navConfig.links}
        legalLinks={navConfig.legalLinks}
      />
    </div>
  );
}
