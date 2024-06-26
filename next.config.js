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
      "img.icons8.com",
      "cdn.pixabay.com",
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "images.pexels.com",
      "susmitadey.hashnode.dev",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
