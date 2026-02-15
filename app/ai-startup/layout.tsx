import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { aiStartupNavConfig } from "@/data";
import "@/styles/variants/ai-startup.css";

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
