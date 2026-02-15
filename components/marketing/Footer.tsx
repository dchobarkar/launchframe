import Link from "next/link";

import NewsletterForm from "@/components/ui/NewsletterForm";
import { SocialIconButton } from "@/components/ui/SocialIconButton";

/** Footer with product info, nav links, legal links, social icons, and newsletter. */
export interface FooterProps {
  productName: string;
  navLinks?: { label: string; href: string }[];
  legalLinks?: { label: string; href: string }[];
}

const defaultNavLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "Contact", href: "#contact" },
];

const defaultLegalLinks = [
  { label: "Privacy", href: "#faq" },
  { label: "Terms", href: "#faq" },
];

export const Footer = ({
  productName,
  navLinks = defaultNavLinks,
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  const socialLinks = [
    { iconKey: "Twitter" as const, href: "#", label: "Twitter" },
    { iconKey: "Github" as const, href: "#", label: "GitHub" },
    { iconKey: "Linkedin" as const, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-white/5 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">{productName}</h3>
            <p className="text-zinc-500 text-sm mb-6 max-w-sm">
              Build, launch, and scale your product with confidence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ iconKey, href, label }) => (
                <SocialIconButton
                  key={label}
                  iconKey={iconKey}
                  label={label}
                  href={href}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              {(navLinks?.length ?? 0) > 0
                ? navLinks!.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                : defaultNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              {(legalLinks?.length ?? 0) > 0
                ? legalLinks!.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                : defaultLegalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 md:mt-16 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} {productName}. All rights reserved.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
};
