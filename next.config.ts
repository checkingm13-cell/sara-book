import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sarapublication.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "sarapublication.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/img/:folder/:file",
        destination: "/api/img/:folder/:file",
      },
    ];
  },
};

export default nextConfig;
