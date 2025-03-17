// app/blog/page.tsx
import { BlogList } from "@/components/BlogList";
import { posts } from "@/data/posts";
import CustomBlackLayout from "../custom-black-layout";

export default function BlogPage() {
	return (
		<CustomBlackLayout>
			<div className="container mx-auto">
				<h1 className="mb-8 font-bold text-3xl">Blog Posts</h1>
				<BlogList posts={posts} />
			</div>
		</CustomBlackLayout>
	);
}
