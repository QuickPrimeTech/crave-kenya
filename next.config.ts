import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/quick-prime-tech/**", // Allow all paths from Cloudinary
      },
      {
        protocol: "https",
        hostname: "cravekenya.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
