
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add this line to allow Sanity images
  },
  
}

module.exports = nextConfig
