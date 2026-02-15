import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { getLegalMetadata, saasNavConfig } from "@/data";

export const metadata = getLegalMetadata(
  saasNavConfig.productName,
  "terms",
  "/saas/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/saas"
      productName={saasNavConfig.productName}
    />
  );
}
