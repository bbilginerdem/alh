import { BlogList } from "@/components/BlogList";
import { posts } from "@/lib/data";

export default function BlogPage() {
	return (
		<section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<h1 className="my-6 text-center font-bold text-xl sm:my-8 sm:text-2xl lg:my-12 lg:text-3xl">
				Blog Yazıları
			</h1>
			<BlogList posts={posts} />
		</section>
	);
}
