/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  compression: true,
  browserCache: true,
};

export default nextConfig;
