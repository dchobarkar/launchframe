import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { aiStartupNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  aiStartupNavConfig.productName,
  "privacy",
  "/ai-startup/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/ai-startup"
      productName={aiStartupNavConfig.productName}
    />
  );
}
