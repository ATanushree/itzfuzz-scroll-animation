/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/itzfuzz-scroll-animation' : '',
  assetPrefix: isProd ? '/itzfuzz-scroll-animation/' : ''
};

export default nextConfig;
