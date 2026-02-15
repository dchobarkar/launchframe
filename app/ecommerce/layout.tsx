import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { ecommerceNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/ecommerce.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["ecommerce"],
  "/ecommerce"
);

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="ecommerce">
      <Nav
        productName={ecommerceNavConfig.productName}
        links={ecommerceNavConfig.links}
      />
      {children}
      <Footer
        productName={ecommerceNavConfig.productName}
        navLinks={ecommerceNavConfig.links}
        legalLinks={ecommerceNavConfig.legalLinks}
      />
    </div>
  );
}
