import Image from "next/image";
import Link from "next/link";
import { formatDate, formatReadingTime } from "@/lib/blog-utils";
import type { BlogMetadata } from "@/types/blog";

interface RelatedPostsProps {
	posts: BlogMetadata[];
	currentPostId: number;
}

export function RelatedPosts({
	posts,
	currentPostId,
}: Readonly<RelatedPostsProps>) {
	const relatedPosts = posts
		.filter((post) => post.id !== currentPostId)
		.slice(0, 3);

	if (relatedPosts.length === 0) {
		return null;
	}

	return (
		<section className="mt-10 border-zinc-700 border-t pt-12">
			<h2 className="mb-8 text-center font-bold text-2xl text-zinc-100">
				İlgili Yazılar
			</h2>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{relatedPosts.map((post) => (
					<Link
						key={post.id}
						href={`/blog/${post.slug}`}
						className="group block rounded-lg transition-transform duration-200 hover:scale-105"
					>
						<article className="overflow-hidden rounded-lg border border-zinc-700/50 bg-zinc-800/30 transition-colors duration-300 hover:border-orange-300/50">
							{post.image && (
								<div className="relative h-48 overflow-hidden">
									<Image
										src={post.image}
										alt={post.imageAlt || post.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-zinc-900/60 to-transparent" />

									{/* Category badge */}
									<div className="absolute top-3 right-3 rounded-full bg-orange-500/90 px-2 py-1 font-medium text-white text-xs">
										{post.category}
									</div>
								</div>
							)}

							<div className="p-4">
								<div className="mb-2 flex items-center gap-2 text-xs text-zinc-400">
									<time dateTime={post.publishDate}>
										{formatDate(post.publishDate)}
									</time>
									<span>•</span>
									<span>{formatReadingTime(post.readingTime)}</span>
								</div>

								<h3 className="mb-2 line-clamp-2 font-semibold text-zinc-100 transition-colors duration-300 group-hover:text-orange-300">
									{post.title}
								</h3>

								<p className="line-clamp-2 text-sm text-zinc-400">
									{post.excerpt}
								</p>

								{/* Tags */}
								<div className="mt-3 flex flex-wrap gap-1">
									{post.tags.slice(0, 2).map((tag) => (
										<span
											key={tag}
											className="rounded-md bg-zinc-700/50 px-2 py-1 text-xs text-zinc-300"
										>
											#{tag}
										</span>
									))}
								</div>
							</div>
						</article>
					</Link>
				))}
			</div>
		</section>
	);
}
