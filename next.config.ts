import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for static export if needed for some hosts, 
  // but Netlify usually handles this.
  trailingSlash: true,
};

export default nextConfig;
