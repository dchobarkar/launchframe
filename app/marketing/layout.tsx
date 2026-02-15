import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { marketingNavConfig } from "@/data";
import "@/styles/variants/marketing.css";

export const metadata: Metadata = {
  title: "GrowthLab — Data-Driven Marketing Platform",
  description:
    "Campaigns, analytics, and automation in one platform. Turn visitors into customers.",
  openGraph: {
    title: "GrowthLab — Data-Driven Marketing",
    description: "Grow faster with data-driven marketing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthLab — Data-Driven Marketing",
    description: "Grow faster with data-driven marketing.",
  },
};

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
