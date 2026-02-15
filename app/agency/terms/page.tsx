import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { agencyNavConfig } from "@/data";

export const metadata = {
  title: "Terms of Service — Lumina Studio",
  description: "Lumina Studio terms of service.",
};

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
