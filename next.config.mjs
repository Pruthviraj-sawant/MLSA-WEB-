/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "coek.dypgroup.edu.in",
        },
      ],
    },
  };

export default nextConfig;
