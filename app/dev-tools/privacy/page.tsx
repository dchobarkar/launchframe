import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { devToolsNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  devToolsNavConfig.productName,
  "privacy",
  "/dev-tools/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/dev-tools"
      productName={devToolsNavConfig.productName}
    />
  );
}
