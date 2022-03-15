/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org.'],
  },
}

module.exports = nextConfig
module.exports = {
  images: {
      domains: ['image.tmdb.org.'],
  },
}*/

module.exports = {
  reactStrictMode: true,
  images: {
      domains: ["image.tmdb.org."],
      formats: ["image/webp"],
  },
};

