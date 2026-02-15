import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { ecommerceNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  ecommerceNavConfig.productName,
  "privacy",
  "/ecommerce/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/ecommerce"
      productName={ecommerceNavConfig.productName}
    />
  );
}
