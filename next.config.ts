import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Guardian thumbnails are served from media.guim.co.uk / i.guim.co.uk.
    remotePatterns: [{ protocol: "https", hostname: "**.guim.co.uk" }],
  },
};

export default nextConfig;
