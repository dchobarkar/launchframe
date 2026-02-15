import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { aiStartupNavConfig } from "@/data";

export const metadata = {
  title: "Terms of Service — Copilot AI",
  description: "Copilot AI terms of service. Read our terms and conditions.",
};

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
