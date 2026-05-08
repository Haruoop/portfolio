/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // Generates a static /out folder
  images: {
    unoptimized: true,     // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
