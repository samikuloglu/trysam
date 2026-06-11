/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/k-12',
        destination: '/private',
        permanent: true,
      },
      // Reserved for future /demo/[slug] personalized demos; non-permanent
      // so the URL can change meaning later. (/demo.html is separate.)
      {
        source: '/demo',
        destination: '/',
        permanent: false,
      },
      ...[
        '/property',
        '/law',
        '/daycare',
        '/dental',
        '/venues',
        '/medical-aesthetics',
        '/widget',
      ].map((source) => ({
        source,
        destination: '/',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
