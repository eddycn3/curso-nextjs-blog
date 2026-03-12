// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  turbopack: {}, // <- adiciona isso
}

module.exports = withContentlayer(nextConfig)