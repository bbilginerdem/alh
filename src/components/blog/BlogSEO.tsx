import Head from "next/head";
import { generateBlogStructuredData } from "@/lib/blog-utils";
import type { BlogMetadata } from "@/types/blog";

interface BlogSEOProps {
	post: BlogMetadata;
	siteName?: string;
	siteUrl?: string;
}

export function BlogSEO({
	post,
	siteName = "Ankara Lindy Hop",
	siteUrl = "https://ankaralindyhop.org",
}: Readonly<BlogSEOProps>) {
	const structuredData = generateBlogStructuredData(post);
	const fullImageUrl = post.image?.startsWith("http")
		? post.image
		: `${siteUrl}${post.image}`;

	return (
		<Head>
			{/* Basic Meta Tags */}
			<title>
				{post.title} | {siteName}
			</title>
			<meta name="description" content={post.seo.metaDescription} />
			<meta name="keywords" content={post.seo.keywords.join(", ")} />
			<meta name="author" content={post.author} />
			<meta name="robots" content="index, follow" />

			{/* Canonical URL */}
			{post.seo.canonicalUrl && (
				<link rel="canonical" href={post.seo.canonicalUrl} />
			)}

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={post.title} />
			<meta property="og:description" content={post.seo.metaDescription} />
			<meta property="og:type" content="article" />
			<meta
				property="og:url"
				content={post.seo.canonicalUrl || `${siteUrl}/blog/${post.slug}`}
			/>
			<meta property="og:site_name" content={siteName} />
			{post.image && <meta property="og:image" content={fullImageUrl} />}
			{post.imageAlt && (
				<meta property="og:image:alt" content={post.imageAlt} />
			)}
			<meta property="og:locale" content="tr_TR" />

			{/* Article Meta Tags */}
			<meta property="article:published_time" content={post.publishDate} />
			<meta
				property="article:modified_time"
				content={post.lastModified || post.publishDate}
			/>
			<meta property="article:author" content={post.author} />
			<meta property="article:section" content={post.category} />
			{post.tags.map((tag) => (
				<meta key={tag} property="article:tag" content={tag} />
			))}

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={post.title} />
			<meta name="twitter:description" content={post.seo.metaDescription} />
			{post.image && <meta name="twitter:image" content={fullImageUrl} />}
			{post.imageAlt && (
				<meta name="twitter:image:alt" content={post.imageAlt} />
			)}
			<meta name="twitter:creator" content="@ankaralindyhop" />
			<meta name="twitter:site" content="@ankaralindyhop" />

			{/* Additional SEO Meta Tags */}
			<meta name="theme-color" content="#f97316" />
			<meta name="msapplication-TileColor" content="#f97316" />

			{/* Reading Time and Word Count */}
			<meta name="reading-time" content={`${post.readingTime} minutes`} />
			<meta name="word-count" content={`${post.readingTime * 200}`} />

			{/* Language and Region */}
			<meta httpEquiv="content-language" content="tr" />
			<meta name="geo.region" content="TR-06" />
			<meta name="geo.placename" content="Ankara" />

			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>

			{/* Preload critical resources */}
			{post.image && <link rel="preload" as="image" href={fullImageUrl} />}
		</Head>
	);
}
