import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogNavigation } from "@/components/blog/BlogNavigation";
import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { generateBlogStructuredData } from "@/lib/blog-utils";
import { posts } from "@/lib/data";

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
			canonical:
				post.seo.canonicalUrl || `https://ankaralindyhop.org/blog/${post.slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.seo.metaDescription,
			type: "article",
			url:
				post.seo.canonicalUrl || `https://ankaralindyhop.org/blog/${post.slug}`,
			images: post.image
				? [
						{
							url: post.image.startsWith("http")
								? post.image
								: `https://ankaralindyhop.org${post.image}`,
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
			images: post.image
				? [
						post.image.startsWith("http")
							? post.image
							: `https://ankaralindyhop.org${post.image}`,
					]
				: [],
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

	const structuredData = generateBlogStructuredData(post);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>
			<BlogWrapper metadata={post}>
				<post.Content />
				<BlogNavigation currentPost={post} allPosts={posts} />
				<RelatedPosts posts={posts} currentPostId={post.id} />
			</BlogWrapper>
		</>
	);
}
