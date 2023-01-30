/* eslint-disable */

const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = { ...nextConfig, ...nextTranslate() };
