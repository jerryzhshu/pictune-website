import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/jerrycode-website',
  assetPrefix: '/jerrycode-website/',
};

export default nextConfig;
