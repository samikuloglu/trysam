/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/k-12',
        destination: '/private',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
