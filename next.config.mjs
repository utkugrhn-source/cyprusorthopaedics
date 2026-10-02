/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/webp"] },
  async redirects() {
    return [{ source: "/", destination: "/tr", permanent: false }];
  },
};
export default nextConfig;
