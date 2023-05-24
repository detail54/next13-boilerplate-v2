const path = require('path')

/** @type {import('next-pwa').PWAConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  customWorkerDir: 'src/worker',
  buildExcludes: ['app-build-manifest.json'],
  runtimeCaching: require('next-pwa/cache'),
})

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve('next-pwa')
  const packageDirectory = path.dirname(packagePath)
  const registerJs = path.join(packageDirectory, 'register.js')

  return entry().then((entries) => {
    if (entries['main-app'] && !entries['main-app'].includes(registerJs)) {
      if (Array.isArray(entries['main-app'])) {
        entries['main-app'].unshift(registerJs)
      } else if (typeof entries['main-app'] === 'string') {
        entries['main-app'] = [registerJs, entries['main-app']]
      }
    }
    return entries
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const entry = generateAppDirEntry(config.entry)
    config.entry = () => entry

    return config
  },
}

module.exports = withPWA(nextConfig)
