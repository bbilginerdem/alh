/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
