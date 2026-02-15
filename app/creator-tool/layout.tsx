import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { creatorToolNavConfig } from "@/data";
import "@/styles/variants/creator-tool.css";

export const metadata: Metadata = {
  title: "Portify — Portfolio Builder for Creators",
  description:
    "Build a stunning portfolio in minutes. No code required. Templates for designers, developers, photographers, and writers.",
  openGraph: {
    title: "Portify — Portfolio Builder for Creators",
    description: "Build a stunning portfolio in minutes. No code required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portify — Portfolio Builder for Creators",
    description: "Build a stunning portfolio in minutes. No code required.",
  },
};

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
