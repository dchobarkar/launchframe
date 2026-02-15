import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { getLegalMetadata, getVariantConfig, VARIANT_SLUGS } from "@/data";

type Props = { params: Promise<{ variant: string }> };

export async function generateMetadata({ params }: Props) {
  const { variant } = await params;
  const config = getVariantConfig(variant);
  if (!config) return {};
  return getLegalMetadata(
    config.navConfig.productName,
    "privacy",
    `/${variant}/privacy`
  );
}

export function generateStaticParams() {
  return VARIANT_SLUGS.map((variant) => ({ variant }));
}

export default async function PrivacyPage({ params }: Props) {
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
}
