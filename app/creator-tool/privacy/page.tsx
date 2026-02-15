import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { creatorToolNavConfig } from "@/data";

export const metadata = {
  title: "Privacy Policy — Portify",
  description: "Portify privacy policy. Learn how we collect, use, and protect your data.",
};

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
