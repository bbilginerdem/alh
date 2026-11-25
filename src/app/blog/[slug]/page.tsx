import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogNavigation } from "@/components/blog/BlogNavigation";
import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { generateBlogStructuredData, generateBreadcrumbStructuredData } from "@/lib/blog-utils";
import { posts } from "@/lib/data";
import { absoluteUrl, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: Readonly<{
	params: Promise<{ slug: string }>;
}>): Promise<Metadata> {
	const { slug } = await params;
	const post = posts.find((post) => post.slug === slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
		description: post.seo.metaDescription,
		keywords: post.seo.keywords,
		alternates: {
			canonical: post.seo.canonicalUrl || `/blog/${post.slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.seo.metaDescription,
			type: "article",
			url: post.seo.canonicalUrl || `${SITE_URL}/blog/${post.slug}`,
			images: post.image
				? [
						{
							url: absoluteUrl(post.image),
							alt: post.imageAlt || post.title,
						},
					]
				: [],
			publishedTime: post.publishDate,
			modifiedTime: post.lastModified || post.publishDate,
			authors: [post.author],
			tags: post.tags,
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.seo.metaDescription,
			images: post.image ? [absoluteUrl(post.image)] : [],
		},
	};
}

export default async function BlogPost({
	params,
}: Readonly<{
	params: Promise<{ slug: string }>;
}>) {
	const { slug } = await params;
	const post = posts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	const { Content, ...metadata } = post;
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [generateBlogStructuredData(post), generateBreadcrumbStructuredData(post)],
	};

	return (
		<>
			<script
				id="blog-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<BlogWrapper metadata={metadata}>
				<Content />
				<BlogNavigation currentPost={post} allPosts={posts} />
				<RelatedPosts posts={posts} currentPostId={post.id} />
			</BlogWrapper>
		</>
	);
}
