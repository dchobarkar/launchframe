import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { devToolsNavConfig } from "@/data";

export const metadata = {
  title: "Privacy Policy — APIbase",
  description: "APIbase privacy policy.",
};

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
