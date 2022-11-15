/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:() => {
    return [
      {
        source:'/api/',
        destination:'/404',
        permanent:false
      }
    ]
  }
}

module.exports = nextConfig
