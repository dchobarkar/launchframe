import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { fintechNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  fintechNavConfig.productName,
  "privacy",
  "/fintech/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/fintech"
      productName={fintechNavConfig.productName}
    />
  );
}
