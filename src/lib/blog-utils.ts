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
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: metadata.title,
		description: metadata.seo.metaDescription,
		image: metadata.image ? [metadata.image] : [],
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
				url: "/images/logo.png",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": metadata.seo.canonicalUrl || `https://ankaralindyhop.org/blog/${metadata.slug}`,
		},
		keywords: metadata.seo.keywords.join(", "),
		articleSection: metadata.category,
		wordCount: metadata.readingTime * 200,
		timeRequired: `PT${metadata.readingTime}M`,
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
