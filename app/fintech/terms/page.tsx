import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { fintechNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  fintechNavConfig.productName,
  "terms",
  "/fintech/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/fintech"
      productName={fintechNavConfig.productName}
    />
  );
}
