import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { saasNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/saas.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["saas"],
  "/saas"
);

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="saas">
      <Nav
        productName={saasNavConfig.productName}
        links={saasNavConfig.links}
      />
      {children}
      <Footer
        productName={saasNavConfig.productName}
        navLinks={saasNavConfig.links}
        legalLinks={saasNavConfig.legalLinks}
      />
    </div>
  );
}
