"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";
import type { BlogMetadata } from "@/types/blog";

interface BlogFiltersProps {
	posts: BlogMetadata[];
	onFilteredPosts: (posts: BlogMetadata[]) => void;
}

export function BlogFilters({
	posts,
	onFilteredPosts,
}: Readonly<BlogFiltersProps>) {
	const searchParams = useSearchParams();
	const initialTag = searchParams.get("tag") || "all";

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedTag, setSelectedTag] = useState(initialTag);
	const [sortBy, setSortBy] = useState("oldest");
	const sort = useId();
	const tag = useId();
	const category = useId();

	// Update selectedTag when URL parameter changes
	useEffect(() => {
		setSelectedTag(searchParams.get("tag") || "all");
	}, [searchParams]);

	// Get unique categories and tags
	const categories = useMemo(() => {
		const cats = Array.from(new Set(posts.map((post) => post.category)));
		return cats.sort((a, b) => a.localeCompare(b));
	}, [posts]);

	const tags = useMemo(() => {
		const allTags = posts.flatMap((post) => post.tags);
		const uniqueTags = Array.from(new Set(allTags));
		return uniqueTags.sort((a, b) => a.localeCompare(b));
	}, [posts]);

	// Filter and sort posts
	const filteredPosts = useMemo(() => {
		const filtered = posts.filter((post) => {
			const matchesSearch =
				searchTerm === "" ||
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.tags.some((tag) =>
					tag.toLowerCase().includes(searchTerm.toLowerCase()),
				);

			const matchesCategory =
				selectedCategory === "all" || post.category === selectedCategory;
			const matchesTag =
				selectedTag === "all" || post.tags.includes(selectedTag);

			return matchesSearch && matchesCategory && matchesTag;
		});

		// Sort posts
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "newest":
					return (
						new Date(b.publishDate).getTime() -
						new Date(a.publishDate).getTime()
					);
				case "oldest":
					return (
						new Date(a.publishDate).getTime() -
						new Date(b.publishDate).getTime()
					);
				case "title":
					return a.title.localeCompare(b.title, "tr");
				case "reading-time":
					return a.readingTime - b.readingTime;
				default:
					return 0;
			}
		});

		return filtered;
	}, [posts, searchTerm, selectedCategory, selectedTag, sortBy]);

	// Update parent component when filters change
	useEffect(() => {
		onFilteredPosts(filteredPosts);
	}, [filteredPosts, onFilteredPosts]);

	const clearFilters = () => {
		setSearchTerm("");
		setSelectedCategory("all");
		setSelectedTag("all");
		setSortBy("oldest");
	};

	const hasActiveFilters =
		searchTerm !== "" ||
		selectedCategory !== "all" ||
		selectedTag !== "all" ||
		sortBy !== "oldest";

	return (
		<div className="mb-10 space-y-5">
			{/* Search Bar */}
			<div className="relative">
				<div className="pointer-events-none absolute inset-0 flex items-center pl-3">
					<Search />
				</div>
				<input
					type="text"
					placeholder="Blog yazılarında ara..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 py-3 pr-4 pl-11 text-zinc-100 placeholder-zinc-400 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/20"
				/>
			</div>

			{/* Filters Row */}
			<div className="flex flex-wrap gap-4">
				{/* Category Filter */}
				<div className="min-w-50 flex-1">
					<label
						htmlFor={category}
						className="mb-2 block font-medium text-sm text-zinc-300"
					>
						Kategori
					</label>
					<select
						id={category}
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
						className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-zinc-100 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/20"
					>
						<option value="all">Tüm Kategoriler</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>

				{/* Tag Filter */}
				<div className="min-w-50 flex-1">
					<label
						htmlFor={tag}
						className="mb-2 block font-medium text-sm text-zinc-300"
					>
						Etiket
					</label>
					<select
						id={tag}
						value={selectedTag}
						onChange={(e) => setSelectedTag(e.target.value)}
						className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-zinc-100 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/20"
					>
						<option value="all">Tüm Etiketler</option>
						{tags.map((tag) => (
							<option key={tag} value={tag}>
								#{tag}
							</option>
						))}
					</select>
				</div>

				{/* Sort Filter */}
				<div className="min-w-50 flex-1">
					<label
						htmlFor={sort}
						className="mb-2 block font-medium text-sm text-zinc-300"
					>
						Sıralama
					</label>
					<select
						id={sort}
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-zinc-100 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/20"
					>
						<option value="newest">En Yeni</option>
						<option value="oldest">En Eski</option>
						<option value="title">Başlık (A-Z)</option>
						<option value="reading-time">Okuma Süresi</option>
					</select>
				</div>
			</div>

			{/* Results Summary and Clear Filters */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-zinc-400">
					{filteredPosts.length} yazı bulundu
					{posts.length !== filteredPosts.length && ` (${posts.length} toplam)`}
				</p>

				{hasActiveFilters && (
					<button
						type="button"
						onClick={clearFilters}
						className="rounded-lg bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300 transition-colors hover:bg-zinc-700/50 hover:text-orange-300"
					>
						Filtreleri Temizle
					</button>
				)}
			</div>
		</div>
	);
}
