import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { ecommerceNavConfig } from "@/data";
import "@/styles/variants/ecommerce.css";

export const metadata: Metadata = {
  title: "Storefront — E-commerce Platform for Modern Brands",
  description:
    "The all-in-one platform for modern brands. Storefront, checkout, and fulfillment.",
  openGraph: {
    title: "Storefront — E-commerce Platform",
    description: "Sell more. Stress less.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storefront — E-commerce Platform",
    description: "Sell more. Stress less.",
  },
};

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
