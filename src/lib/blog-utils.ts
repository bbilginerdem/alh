import { absoluteUrl, SITE_URL } from "@/lib/site";
import type { BlogMetadata } from "@/types/blog";

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("tr-TR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function formatReadingTime(minutes: number): string {
	if (minutes < 1) {
		return "1 dk okuma";
	}
	return `${Math.ceil(minutes)} dk okuma`;
}

export function calculateReadingTime(text: string): number {
	const wordsPerMinute = 200;
	const words = text.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

export function generateBlogStructuredData(metadata: BlogMetadata) {
	return {
		"@type": "BlogPosting",
		headline: metadata.title,
		description: metadata.seo.metaDescription,
		image: metadata.image ? [absoluteUrl(metadata.image)] : [],
		datePublished: metadata.publishDate,
		dateModified: metadata.lastModified || metadata.publishDate,
		author: {
			"@type": "Person",
			name: metadata.author,
		},
		publisher: {
			"@type": "Organization",
			name: "Ankara Lindy Hop",
			logo: {
				"@type": "ImageObject",
				url: absoluteUrl("/images/logo.png"),
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": metadata.seo.canonicalUrl || `${SITE_URL}/blog/${metadata.slug}`,
		},
		keywords: metadata.seo.keywords.join(", "),
		articleSection: metadata.category,
		wordCount: metadata.readingTime * 200,
		timeRequired: `PT${metadata.readingTime}M`,
	};
}

export function generateBlogIndexStructuredData(allPosts: BlogMetadata[]) {
	const ordered = allPosts.toSorted(
		(a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
	);

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${SITE_URL}/blog`,
				url: `${SITE_URL}/blog`,
				name: "Blog Yazıları | Ankara Lindy Hop",
				inLanguage: "tr-TR",
				isPartOf: { "@id": `${SITE_URL}/#website` },
			},
			{
				"@type": "ItemList",
				itemListElement: ordered.map((post, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: post.title,
					url: post.seo.canonicalUrl || `${SITE_URL}/blog/${post.slug}`,
				})),
			},
		],
	};
}

export function generateBreadcrumbStructuredData(metadata: BlogMetadata) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
			{
				"@type": "ListItem",
				position: 3,
				name: metadata.title,
				item: metadata.seo.canonicalUrl || `${SITE_URL}/blog/${metadata.slug}`,
			},
		],
	};
}

export function isNewContent(dateString: string | Date): boolean {
	try {
		const date = new Date(dateString);

		if (Number.isNaN(date.getTime())) {
			return false;
		}

		const now = new Date();
		const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
		const timeDiff = now.getTime() - date.getTime();

		return timeDiff >= 0 && timeDiff <= sevenDaysInMs;
	} catch {
		return false;
	}
}
