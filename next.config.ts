import type { NextConfig } from "next";

/**
 * Next.js configuration for LaunchFrame.
 * - Images: Clearbit logos for integration/logo cloud components
 * - Headers: Security headers applied to all routes
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        pathname: "/**",
      }, // Clearbit logo API for brand logos
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // Prevent clickjacking
          { key: "X-Content-Type-Options", value: "nosniff" }, // Prevent MIME sniffing
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
