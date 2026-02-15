import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { marketingNavConfig } from "@/data";

export const metadata = {
  title: "Terms of Service — GrowthLab",
  description: "GrowthLab terms of service.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/marketing"
      productName={marketingNavConfig.productName}
    />
  );
}
