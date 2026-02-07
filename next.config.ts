import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
