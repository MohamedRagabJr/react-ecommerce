/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "avatar.vercel.sh",
      "ecommerce.routemisr.com" // ضفنا الدومين الجديد,
    ],
  },
};

export default nextConfig;
