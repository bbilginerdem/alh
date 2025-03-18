// components/BlogList.tsx
import Link from "next/link";

interface Post {
	id: number;
	title: string;
	slug: string;
}

interface BlogListProps {
	posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
	return (
		<div className="space-y-4">
			{posts.map((post) => (
				<Link key={post.id} href={`/blog/${post.slug}`}>
					<div className="cursor-pointer rounded-lg border p-4 hover:bg-gray-50">
						<h2 className="font-semibold text-xl">{post.title}</h2>
					</div>
				</Link>
			))}
		</div>
	);
}
