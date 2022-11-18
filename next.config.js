/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "cdn.pixabay.com",
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "images.pexels.com",
      "susmitadey.hashnode.dev",
    ],
  },
};

module.exports = nextConfig;
