import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { BlogMetadata } from "@/types/blog";

interface BlogNavigationProps {
	currentPost: BlogMetadata;
	allPosts: BlogMetadata[];
}

export function BlogNavigation({
	currentPost,
	allPosts,
}: Readonly<BlogNavigationProps>) {
	const currentIndex = allPosts.findIndex((post) => post.id === currentPost.id);
	const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
	const nextPost =
		currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

	if (!previousPost && !nextPost) {
		return null;
	}

	return (
		<nav className="mt-12 border-zinc-700 border-t pt-8">
			<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
				{/* Previous Post */}
				<div className="flex-1">
					{previousPost ? (
						<Link
							href={`/blog/${previousPost.slug}`}
							className="group flex items-center gap-3 rounded-lg border border-zinc-700/50 p-4 transition-all duration-300 hover:border-orange-300/50 hover:bg-zinc-800/30"
						>
							<div className="shrink-0">
								<ChevronLeft />
							</div>
							<div className="min-w-0 flex-1">
								<p className="text-xs text-zinc-400">Önceki Yazı</p>
								<h3 className="line-clamp-2 font-medium text-zinc-100 transition-colors duration-300 group-hover:text-orange-300">
									{previousPost.title}
								</h3>
							</div>
						</Link>
					) : (
						<div className="flex-1" />
					)}
				</div>

				{/* Next Post */}
				<div className="flex-1">
					{nextPost ? (
						<Link
							href={`/blog/${nextPost.slug}`}
							className="group flex items-center gap-3 rounded-lg border border-zinc-700/50 p-4 text-right transition-all duration-300 hover:border-orange-300/50 hover:bg-zinc-800/30"
						>
							<div className="min-w-0 flex-1">
								<p className="text-xs text-zinc-400">Sonraki Yazı</p>
								<h3 className="line-clamp-2 font-medium text-zinc-100 transition-colors duration-300 group-hover:text-orange-300">
									{nextPost.title}
								</h3>
							</div>
							<div className="shrink-0">
								<ChevronRight />
							</div>
						</Link>
					) : (
						<div className="flex-1" />
					)}
				</div>
			</div>
		</nav>
	);
}
