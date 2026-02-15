import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { agencyNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/agency.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["agency"],
  "/agency"
);

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="agency">
      <Nav
        productName={agencyNavConfig.productName}
        links={agencyNavConfig.links}
      />
      {children}
      <Footer
        productName={agencyNavConfig.productName}
        navLinks={agencyNavConfig.links}
        legalLinks={agencyNavConfig.legalLinks}
      />
    </div>
  );
}
