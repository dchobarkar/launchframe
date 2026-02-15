import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Copilot AI — Your AI-Powered Work Assistant",
  description:
    "Automate repetitive tasks, draft documents, and get answers in seconds. The AI copilot that works alongside you in every app.",
  openGraph: {
    title: "Copilot AI — Your AI-Powered Work Assistant",
    description:
      "Automate repetitive tasks, draft documents, and get answers in seconds.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copilot AI — Your AI-Powered Work Assistant",
    description:
      "Automate repetitive tasks, draft documents, and get answers in seconds.",
  },
};

export default function AIStartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav
        productName="Copilot AI"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "#integrations" },
        ]}
      />
      {children}
      <Footer productName="Copilot AI" />
    </>
  );
}
