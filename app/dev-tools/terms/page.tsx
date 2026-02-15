import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { devToolsNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  devToolsNavConfig.productName,
  "terms",
  "/dev-tools/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/dev-tools"
      productName={devToolsNavConfig.productName}
    />
  );
}
