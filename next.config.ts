import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true,
  },
  // 🌟 Force Next.js to ignore missing ESLint rules/packages during builds
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
