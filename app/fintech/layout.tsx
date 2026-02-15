import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { fintechNavConfig } from "@/data";
import "@/styles/variants/fintech.css";

export const metadata: Metadata = {
  title: "PayStack — Banking Infrastructure for the Future",
  description:
    "API-first payments, accounts, and compliance. Build financial products that scale.",
  openGraph: {
    title: "PayStack — Banking Infrastructure",
    description: "Build financial products that scale with trust.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayStack — Banking Infrastructure",
    description: "Build financial products that scale with trust.",
  },
};

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
