// app/blog/page.tsx
import { BlogList } from "@/components/BlogList";
import { posts } from "@/lib/db/posts";
export default function BlogPage() {
	return (
		<section className="container mx-auto">
			<h1 className="mb-8 font-bold text-3xl">Blog Posts</h1>
			<BlogList posts={posts} />
		</section>
	);
}
