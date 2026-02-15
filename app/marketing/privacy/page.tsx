import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { getLegalMetadata, marketingNavConfig } from "@/data";

export const metadata = getLegalMetadata(
  marketingNavConfig.productName,
  "privacy",
  "/marketing/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/marketing"
      productName={marketingNavConfig.productName}
    />
  );
}
