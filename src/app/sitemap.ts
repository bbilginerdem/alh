import type { MetadataRoute } from "next";
import { posts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ankaralindyhop.org";

	// Static pages
	const staticPages = [
		"",
		"blog",
		"etkinlikler",
		"iletisim",
		"topluluk-ilkeleri",
		"gonullu-ol",
		"gizlilik-politikasi",
	];

	const routes = staticPages.map((route) => ({
		url: route ? `${baseUrl}/${route}` : baseUrl,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1 : 0.8,
		images:
			route === ""
				? ["https://ankaralindyhop.org/images/og-image.png"]
				: undefined,
	}));

	const blogRoutes = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.lastModified || post.publishDate),
		changeFrequency: "monthly" as const,
		priority: 0.7,
		images: post.image ? [`${baseUrl}${post.image}`] : undefined,
	}));

	return [...routes, ...blogRoutes];
}
