const createNextIntlPlugin = require('next-intl/plugin');
const { withContentlayer } = require('next-contentlayer');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "*.app.github.dev",
        "localhost:3000",
        "localhost:3001",
        "bigfive-web-delta.vercel.app",
      ],
    },
  },
};


module.exports = withContentlayer(withNextIntl(nextConfig));
