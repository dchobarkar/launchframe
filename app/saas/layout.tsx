import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { saasNavConfig } from "@/data";

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
        productName={saasNavConfig.productName}
        links={saasNavConfig.links}
      />
      {children}
      <Footer productName={saasNavConfig.productName} />
    </>
  );
}
