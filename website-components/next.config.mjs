/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/not-found",
        permanent: false,
      },
    ];
  }
}


export default nextConfig
