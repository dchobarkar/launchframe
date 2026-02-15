import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { getLegalMetadata } from "@/data/metadata";
import { getVariantConfig, VARIANT_SLUGS } from "@/data/variants";

type Props = { params: Promise<{ variant: string }> };

export const generateMetadata = async ({ params }: Props) => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) return {};
  return getLegalMetadata(
    config.navConfig.productName,
    "privacy",
    `/${variant}/privacy`
  );
};

export const generateStaticParams = () => {
  return VARIANT_SLUGS.map((variant) => ({ variant }));
};

const PrivacyPage = async ({ params }: Props) => {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) notFound();

  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref={`/${variant}`}
      productName={config.navConfig.productName}
    />
  );
};

export default PrivacyPage;
