/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  publicRuntimeConfig: {
    API_URL: 'https://software-ing.herokuapp.com',
  },
}

module.exports = nextConfig
