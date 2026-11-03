import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets phones on the same Wi-Fi or hotspot load dev assets, so the envelope can open.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
