import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { agencyNavConfig } from "@/data";

export const metadata = {
  title: "Privacy Policy — Lumina Studio",
  description: "Lumina Studio privacy policy.",
};

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
