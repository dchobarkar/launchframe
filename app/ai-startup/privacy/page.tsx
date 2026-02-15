import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { aiStartupNavConfig } from "@/data";

export const metadata = {
  title: "Privacy Policy — Copilot AI",
  description: "Copilot AI privacy policy. Learn how we collect, use, and protect your data.",
};

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
