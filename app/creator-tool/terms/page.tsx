import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { creatorToolNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  creatorToolNavConfig.productName,
  "terms",
  "/creator-tool/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/creator-tool"
      productName={creatorToolNavConfig.productName}
    />
  );
}
