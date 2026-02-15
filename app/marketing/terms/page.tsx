import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { getLegalMetadata, marketingNavConfig } from "@/data";

export const metadata = getLegalMetadata(
  marketingNavConfig.productName,
  "terms",
  "/marketing/terms"
);

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
