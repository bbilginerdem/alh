import { CalendarFold } from "lucide-react";
import Link from "next/link";
import { formatDate, formatReadingTime } from "@/lib/blog-utils";
import type { BlogMetadata } from "@/types/blog";

interface BlogWrapperProps {
	metadata: BlogMetadata;
	children: React.ReactNode;
}

export function BlogWrapper({
	metadata,
	children,
}: Readonly<BlogWrapperProps>) {
	return (
		<article className="mx-auto max-w-4xl px-4 py-8">
			{/* Blog Header */}
			<header className="mb-8">
				{/* Category Badge */}
				<div className="mb-4">
					<span className="inline-block rounded-full bg-orange-500/20 px-3 py-1 font-medium text-orange-300 text-sm">
						{metadata.category}
					</span>
				</div>

				{/* Title */}
				<h1 className="mb-6 font-bold text-4xl text-zinc-100 leading-tight">
					{metadata.title}
				</h1>

				{/* Excerpt */}
				<p className="mb-8 text-lg text-zinc-300 leading-relaxed">
					{metadata.excerpt}
				</p>

				{/* Meta Information */}
				<div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
					{/* Author */}
					<div className="flex items-center gap-3">
						<div>
							<p className="font-medium text-zinc-200">{metadata.author}</p>
						</div>
					</div>

					{/* Divider */}
					<div className="h-4 w-px bg-zinc-600" />

					{/* Publish Date */}
					<div className="flex items-center gap-3">
						<CalendarFold size={20} />
						<time dateTime={metadata.publishDate}>
							{formatDate(metadata.publishDate)}
						</time>
					</div>

					{/* Reading Time */}
					<div className="flex items-center gap-2">
						<span>{formatReadingTime(metadata.readingTime)}</span>
					</div>
				</div>

				{/* Tags */}
				{metadata.tags.length > 0 && (
					<div className="mt-6 flex flex-wrap gap-2">
						{metadata.tags.map((tag) => (
							<Link
								key={tag}
								href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
								className="rounded-md bg-zinc-800/50 px-2 py-1 text-xs text-zinc-300 transition-colors hover:bg-zinc-700/50 hover:text-orange-300"
							>
								#{tag}
							</Link>
						))}
					</div>
				)}

				{/* Divider */}
				<div className="mx-auto mt-12 h-1 w-24 bg-orange-300" />
			</header>

			{/* Blog Content */}
			<div className="max-w-none text-zinc-100">{children}</div>
		</article>
	);
}
