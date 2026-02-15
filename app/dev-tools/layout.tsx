import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { devToolsNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/dev-tools.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["dev-tools"],
  "/dev-tools"
);

export default function DevToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="dev-tools">
      <Nav
        productName={devToolsNavConfig.productName}
        links={devToolsNavConfig.links}
      />
      {children}
      <Footer
        productName={devToolsNavConfig.productName}
        navLinks={devToolsNavConfig.links}
        legalLinks={devToolsNavConfig.legalLinks}
      />
    </div>
  );
}
