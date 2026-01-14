"use client";

import { useState } from "react";
import { BlogList } from "@/components/BlogList";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { posts } from "@/lib/data";
import type { BlogMetadata } from "@/types/blog";

export function BlogPageClient() {
	const [filteredPosts, setFilteredPosts] = useState<BlogMetadata[]>(posts);

	return (
		<>
			<BlogFilters posts={posts} onFilteredPosts={setFilteredPosts} />
			<BlogList posts={filteredPosts} />
		</>
	);
}
