/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // providing the locales supported by your application
    locales: ["en-US", "ar-EG"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["."],
  },
};

const removeImports = require("next-remove-imports")();
module.exports = removeImports(nextConfig); // module.exports = nextConfig
