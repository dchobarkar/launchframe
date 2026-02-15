import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { devToolsNavConfig } from "@/data";

export const metadata = {
  title: "Terms of Service — APIbase",
  description: "APIbase terms of service.",
};

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
