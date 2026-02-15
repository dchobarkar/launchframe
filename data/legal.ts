/** Shared legal page content structure. */

export interface LegalSection {
  title: string;
  content: string[];
}

/** Privacy policy sections. Replace with your own content. */
export const privacyContent: LegalSection[] = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.",
      "We automatically collect certain information when you use our services, including device information, log data, and usage information to improve our products and services.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about updates and support.",
      "We may use aggregated or anonymized data for analytics and to improve our product experience.",
    ],
  },
  {
    title: "Data Sharing and Disclosure",
    content: [
      "We do not sell your personal information. We may share your information with service providers who assist us in operating our business, subject to strict confidentiality agreements.",
      "We may disclose information if required by law or to protect our rights, safety, or property.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may access, correct, or delete your personal information through your account settings. You may also opt out of marketing communications at any time.",
      "Depending on your location, you may have additional rights under applicable data protection laws.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy, please contact us at privacy@example.com.",
    ],
  },
];

/** Terms of service sections. Replace with your own content. */
export const termsContent: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    ],
  },
  {
    title: "Description of Service",
    content: [
      "We provide a platform that enables you to build, launch, and scale your product. The specific features and capabilities may vary based on your plan and usage.",
    ],
  },
  {
    title: "Account and Registration",
    content: [
      "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.",
    ],
  },
  {
    title: "Acceptable Use",
    content: [
      "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. You must comply with all applicable laws and regulations.",
      "We reserve the right to suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "Our services, including all content, features, and functionality, are owned by us and are protected by intellectual property laws. You retain ownership of content you create using our services.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "We may modify these terms from time to time. We will notify you of material changes by posting the updated terms on our website. Your continued use of our services constitutes acceptance of the modified terms.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For questions about these Terms of Service, please contact us at legal@example.com.",
    ],
  },
];
