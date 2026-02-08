import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false, // Enforce no trailing slash for canonical URLs
  async rewrites() {
    return [
      {
        source: '/upload/:path*',
        destination: '/media/:path*',
      },
    ]
  },
};

export default nextConfig;
