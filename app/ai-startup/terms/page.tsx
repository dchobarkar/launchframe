import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { aiStartupNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  aiStartupNavConfig.productName,
  "terms",
  "/ai-startup/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/ai-startup"
      productName={aiStartupNavConfig.productName}
    />
  );
}
