import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { creatorToolNavConfig, toMetadata, variantMetadata } from "@/data";
import "@/styles/variants/creator-tool.css";

export const metadata: Metadata = toMetadata(
  variantMetadata["creator-tool"],
  "/creator-tool"
);

export default function CreatorToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="creator-tool">
      <Nav
        productName={creatorToolNavConfig.productName}
        links={creatorToolNavConfig.links}
      />
      {children}
      <Footer
        productName={creatorToolNavConfig.productName}
        navLinks={creatorToolNavConfig.links}
        legalLinks={creatorToolNavConfig.legalLinks}
      />
    </div>
  );
}
