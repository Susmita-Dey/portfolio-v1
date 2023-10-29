/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.hashnode.com',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/blog",
                destination: "https://susmita-dey.vercel.app/blog",
            },
            {
                source: "/blog/:path*",
                destination: "https://susmita-dey.vercel.app/blog/:path*",
            },
        ];
    },
}

module.exports = nextConfig
