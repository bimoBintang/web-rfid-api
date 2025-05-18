import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: [/node_modules/, /Application Data/], // ✅ exclude folder yang error
    });
    return config;
  },
};

export default nextConfig;
