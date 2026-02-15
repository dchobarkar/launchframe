import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { creatorToolNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  creatorToolNavConfig.productName,
  "privacy",
  "/creator-tool/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/creator-tool"
      productName={creatorToolNavConfig.productName}
    />
  );
}
