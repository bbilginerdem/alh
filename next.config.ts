import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	poweredByHeader: false,

	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000,
		qualities: [85, 95],
	},

	compress: true,

	headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Strict-Transport-Security",
						value: "max-age=31536000; includeSubDomains; preload",
					},
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
			{
				source: "/sw.js",
				headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
			},
			{
				source: "/videos/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=604800, stale-while-revalidate=86400",
					},
				],
			},
		];
	},
};

export default nextConfig;
