"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { BlogNavigation } from "@/components/blog/BlogNavigation";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { posts } from "@/lib/data";

export default function BlogPost({
	params,
}: Readonly<{
	params: Promise<{ slug: string }>;
}>) {
	const { slug } = use(params);
	const post = posts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<>
			<BlogSEO post={post} />
			<BlogWrapper metadata={post}>
				<post.Content />
				<BlogNavigation currentPost={post} allPosts={posts} />
				<RelatedPosts posts={posts} currentPostId={post.id} />
			</BlogWrapper>
		</>
	);
}
