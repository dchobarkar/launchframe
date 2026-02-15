import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { agencyNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  agencyNavConfig.productName,
  "privacy",
  "/agency/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/agency"
      productName={agencyNavConfig.productName}
    />
  );
}
