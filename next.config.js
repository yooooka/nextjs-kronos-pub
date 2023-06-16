/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  //   distDir: "dist",
  assetPrefix: isProd ? "https://kronos-dx-support.graspstg.com/" : undefined,
};

module.exports = nextConfig;
