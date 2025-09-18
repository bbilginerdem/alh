"use client";

import { notFound } from "next/navigation";
import { use } from "react";
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
		<div className="container mx-auto p-4">
			<div className="text-gray-700">{post.Content()}</div>
		</div>
	);
}
