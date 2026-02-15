import type { Metadata } from "next";
import { Nav, Footer } from "@/components/marketing";
import { agencyNavConfig } from "@/data";
import "@/styles/variants/agency.css";

export const metadata: Metadata = {
  title: "Lumina Studio — Brand & Design Agency",
  description:
    "Strategy, design, and development for ambitious companies. From concept to launch.",
  openGraph: {
    title: "Lumina Studio — Brand & Design Agency",
    description: "We build brands that move people.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Studio — Brand & Design Agency",
    description: "We build brands that move people.",
  },
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-variant="agency">
      <Nav
        productName={agencyNavConfig.productName}
        links={agencyNavConfig.links}
      />
      {children}
      <Footer
        productName={agencyNavConfig.productName}
        navLinks={agencyNavConfig.links}
        legalLinks={agencyNavConfig.legalLinks}
      />
    </div>
  );
}
