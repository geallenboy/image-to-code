import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",

      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],

  },
};

export default nextConfig;