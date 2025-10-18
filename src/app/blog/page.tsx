"use client";

import { useState } from "react";
import { BlogList } from "@/components/BlogList";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { posts } from "@/lib/data";
import type { BlogMetadata } from "@/types/blog";

export default function BlogPage() {
	const [filteredPosts, setFilteredPosts] = useState<BlogMetadata[]>(posts);

	return (
		<section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<header className="mb-8 text-center">
				<h1 className="mb-4 font-bold text-3xl text-zinc-100 sm:text-4xl lg:text-5xl">
					Blog Yazıları
				</h1>
				<p className="mx-auto max-w-2xl text-lg text-zinc-300">
					Swing dansı, caz müziği ve dans kültürü hakkında derinlemesine yazılar
				</p>
			</header>

			<BlogFilters posts={posts} onFilteredPosts={setFilteredPosts} />
			<BlogList posts={filteredPosts} />
		</section>
	);
}
