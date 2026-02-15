/**
 * Variant layout. Wraps all /[variant] routes with Nav, Footer, and variant-specific CSS.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import { getVariantConfig, VARIANT_SLUGS } from "@/data/variants";
import { toMetadata } from "@/data/metadata";

import "@/styles/variants/index.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ variant: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) return {};
  return toMetadata(config.metadata, `/${variant}`);
};

export const generateStaticParams = () => {
  return VARIANT_SLUGS.map((variant) => ({ variant }));
};

const Layout = async ({ children, params }: Props) => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) notFound();

  const { navConfig } = config;

  return (
    <div data-variant={variant}>
      <Nav productName={navConfig.productName} links={navConfig.links} />
      {children}
      <Footer
        productName={navConfig.productName}
        navLinks={navConfig.links}
        legalLinks={navConfig.legalLinks}
      />
    </div>
  );
};

export default Layout;
