/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'img.sndimg.com'
            }
        ]

    },
    env: { API_URL: "https://nextjs-foodrecipe.vercel.app/"}
}

module.exports = nextConfig