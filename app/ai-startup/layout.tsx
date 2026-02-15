import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { aiStartupNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/ai-startup.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["ai-startup"],
  "/ai-startup"
);

export default function AIStartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="ai-startup">
      <Nav
        productName={aiStartupNavConfig.productName}
        links={aiStartupNavConfig.links}
      />
      {children}
      <Footer
        productName={aiStartupNavConfig.productName}
        navLinks={aiStartupNavConfig.links}
        legalLinks={aiStartupNavConfig.legalLinks}
      />
    </div>
  );
}
