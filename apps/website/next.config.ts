import type { NextConfig } from "next";
const withMDX = require('@next/mdx')();

const nextConfig: NextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true, // enable MDX with the new Rust parser (recommended)
  },
});

export default nextConfig;
