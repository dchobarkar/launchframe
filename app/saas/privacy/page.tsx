import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { getLegalMetadata, saasNavConfig } from "@/data";

export const metadata = getLegalMetadata(
  saasNavConfig.productName,
  "privacy",
  "/saas/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/saas"
      productName={saasNavConfig.productName}
    />
  );
}
