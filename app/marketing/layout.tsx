import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { marketingNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/marketing.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["marketing"],
  "/marketing"
);

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="marketing">
      <Nav
        productName={marketingNavConfig.productName}
        links={marketingNavConfig.links}
      />
      {children}
      <Footer
        productName={marketingNavConfig.productName}
        navLinks={marketingNavConfig.links}
        legalLinks={marketingNavConfig.legalLinks}
      />
    </div>
  );
}
