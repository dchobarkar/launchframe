import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { ecommerceNavConfig, getLegalMetadata } from "@/data";

export const metadata = getLegalMetadata(
  ecommerceNavConfig.productName,
  "terms",
  "/ecommerce/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="February 15, 2025"
      sections={termsContent}
      backHref="/ecommerce"
      productName={ecommerceNavConfig.productName}
    />
  );
}
