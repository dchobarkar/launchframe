import { LegalPage } from "@/components/legal/LegalPage";
import { termsContent } from "@/data/legal";
import { creatorToolNavConfig } from "@/data";

export const metadata = {
  title: "Terms of Service — Portify",
  description: "Portify terms of service. Read our terms and conditions.",
};

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
