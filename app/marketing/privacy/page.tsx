import { LegalPage } from "@/components/legal/LegalPage";
import { privacyContent } from "@/data/legal";
import { marketingNavConfig } from "@/data";

export const metadata = {
  title: "Privacy Policy — GrowthLab",
  description: "GrowthLab privacy policy.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="February 15, 2025"
      sections={privacyContent}
      backHref="/marketing"
      productName={marketingNavConfig.productName}
    />
  );
}
