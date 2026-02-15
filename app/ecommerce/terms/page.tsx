import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { ecommerceNavConfig } from "@/data";

export const metadata = {
  title: "Terms of Service — Storefront",
  description: "Storefront terms of service.",
};

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
