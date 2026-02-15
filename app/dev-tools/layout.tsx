import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { devToolsNavConfig } from "@/data";
import "@/styles/variants/dev-tools.css";

export const metadata: Metadata = {
  title: "APIbase — Developer-First API Platform",
  description:
    "The API that just works. REST, GraphQL, and real-time. Deploy in minutes.",
  openGraph: {
    title: "APIbase — Developer-First API Platform",
    description: "Build faster with our developer-first platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APIbase — Developer-First API Platform",
    description: "Build faster with our developer-first platform.",
  },
};

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
