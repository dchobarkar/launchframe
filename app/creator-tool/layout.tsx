import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";

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
    <>
      <Nav
        productName="Portify"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Templates", href: "#templates" },
        ]}
      />
      {children}
      <Footer productName="Portify" />
    </>
  );
}
