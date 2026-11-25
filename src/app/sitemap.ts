import type { MetadataRoute } from "next";
import { posts } from "@/lib/data";
import { absoluteUrl, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = SITE_URL;

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
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1 : 0.8,
		images: route === "" ? [absoluteUrl("/images/og-image.png")] : undefined,
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
