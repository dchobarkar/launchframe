import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { fintechNavConfig } from "@/data";

export const metadata = {
  title: "Privacy Policy — PayStack",
  description: "PayStack privacy policy.",
};

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
