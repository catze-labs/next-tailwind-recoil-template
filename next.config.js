/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    const fallback = config.resolve.fallback;

    return config;
  },
};

module.exports = nextConfig;
