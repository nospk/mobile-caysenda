/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   disableStaticImages: true,
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: ['images.unsplash.com', 'source.unsplash.com'],
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'caysenda.vn'],
  },
}

module.exports = nextConfig
