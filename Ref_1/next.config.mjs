/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: [
      "res.cloudinary.com",
      "cdn.shopify.com",
      "truewebcart.s3-accelerate.amazonaws.com",
    ],
  },
};

export default nextConfig;
