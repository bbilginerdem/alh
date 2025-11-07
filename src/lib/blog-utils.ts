/**
 * Utility functions for blog functionality
 */

import type { BlogMetadata } from "@/types/blog";

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("tr-TR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

/**
 * Format reading time
 */
export function formatReadingTime(minutes: number): string {
	if (minutes < 1) {
		return "1 dk okuma";
	}
	return `${Math.ceil(minutes)} dk okuma`;
}

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(text: string): number {
	const wordsPerMinute = 200;
	const words = text.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate structured data for SEO
 */
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
			"@id":
				metadata.seo.canonicalUrl ||
				`https://ankaralindyhop.org/blog/${metadata.slug}`,
		},
		keywords: metadata.seo.keywords.join(", "),
		articleSection: metadata.category,
		wordCount: metadata.readingTime * 200, // Approximate word count
		timeRequired: `PT${metadata.readingTime}M`,
	};
}
