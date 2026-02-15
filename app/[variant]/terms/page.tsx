import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { getLegalMetadata } from "@/data/metadata";
import { getVariantConfig, VARIANT_SLUGS } from "@/data/variants";

type Props = { params: Promise<{ variant: string }> };

export const generateMetadata = async ({ params }: Props) => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) return {};
  return getLegalMetadata(
    config.navConfig.productName,
    "terms",
    `/${variant}/terms`,
  );
};

export const generateStaticParams = () => {
  return VARIANT_SLUGS.map((variant) => ({ variant }));
};

const Page = async ({ params }: Props) => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) notFound();

  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref={`/${variant}`}
      productName={config.navConfig.productName}
    />
  );
};

export default Page;
