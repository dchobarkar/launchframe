import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { agencyNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  agencyNavConfig.productName,
  "terms",
  "/agency/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/agency"
      productName={agencyNavConfig.productName}
    />
  );
}
