/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath hata diya hai taaki site root domain par chale
  trailingSlash: true, // cPanel par har page ke liye clean folder/index.html banata hai
  images: {
    unoptimized: true,
  },
};

export default nextConfig;