/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true
};

const withMDX = require('@next/mdx')({
   extension: /\.mdx?$/,
   options: {
      remarkPlugins: [],
      rehypePlugins: [],
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
   }
});

module.exports = {
   nextConfig,
   withMDX
};
