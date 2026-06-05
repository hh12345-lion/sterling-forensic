import type { NextConfig } from "next";
import path from "node:path";

// Pin Turbopack root to this project. A stray package-lock.json in the user
// home directory otherwise makes Next.js treat the wrong folder as the workspace.
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: projectRoot,
  },
  serverExternalPackages: ["google-auth-library"],
  async redirects() {
    return [
      {
        source: "/expert-witness",
        destination: "/services/expert-witness",
        permanent: true,
      },
      {
        source: "/investigations",
        destination: "/services/fraud-investigation",
        permanent: true,
      },
      {
        source: "/fees",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
