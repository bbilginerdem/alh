// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export default function BlogPost({ params }: { params: { slug: string } }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="container mx-auto p-4">
			<h1 className="mb-4 font-bold text-3xl">{post.title}</h1>
			<p className="text-gray-700">{post.content}</p>
		</div>
	);
}