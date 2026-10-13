import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Phase 2: add { protocol: "https", hostname: "i.guim.co.uk" } for Guardian thumbnails.
  },
};

export default nextConfig;
