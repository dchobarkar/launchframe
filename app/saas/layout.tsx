import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";

export const metadata: Metadata = {
  title: "MetricFlow — Analytics Platform for Modern Teams",
  description:
    "Real-time analytics, AI-powered insights, and beautiful dashboards. Built for developers and product teams who need to move fast.",
  openGraph: {
    title: "MetricFlow — Analytics Platform for Modern Teams",
    description:
      "Real-time analytics, AI-powered insights, and beautiful dashboards.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetricFlow — Analytics Platform for Modern Teams",
    description:
      "Real-time analytics, AI-powered insights, and beautiful dashboards.",
  },
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav
        productName="MetricFlow"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "#integrations" },
        ]}
      />
      {children}
      <Footer productName="MetricFlow" />
    </>
  );
}
