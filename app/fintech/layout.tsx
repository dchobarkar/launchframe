import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { fintechNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/fintech.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["fintech"],
  "/fintech"
);

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="fintech">
      <Nav
        productName={fintechNavConfig.productName}
        links={fintechNavConfig.links}
      />
      {children}
      <Footer
        productName={fintechNavConfig.productName}
        navLinks={fintechNavConfig.links}
        legalLinks={fintechNavConfig.legalLinks}
      />
    </div>
  );
}
