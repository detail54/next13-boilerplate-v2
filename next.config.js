/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  customWorkerDir: 'src/worker',
  dest: 'public',
})

const nextConfig = {}

module.exports = withPWA(nextConfig)
