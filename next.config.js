// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     esmExternals: 'loose'
//   },
//   webpack: (config) => {
//     config.externals = [...config.externals, { canvas: "canvas" }]; // required to make pdfjs work
//     return config;
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CyberPowerIndex',
  assetPrefix: '/CyberPowerIndex/',
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make pdfjs work
    return config;
  },
};

module.exports = nextConfig;
