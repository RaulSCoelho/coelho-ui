/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@coelho-ui/react', '@coelho-ui/theme'],
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: false
}

module.exports = nextConfig
