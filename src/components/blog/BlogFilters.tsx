"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";
import type { BlogMetadata } from "@/types/blog";

interface BlogFiltersProps {
	posts: BlogMetadata[];
	/**
	 * Callback notified when filtered posts change.
	 * @param posts - The filtered and sorted post array
	 * @remarks Parent component MUST memoize this callback with `useCallback`
	 *          to prevent unnecessary re-renders of this component.
	 * @example
	 * const handleFilteredPosts = useCallback((posts) => {
	 *   setDisplayedPosts(posts);
	 * }, []);
	 */
	onFilteredPosts: (posts: BlogMetadata[]) => void;
}

export function BlogFilters({
	posts,
	onFilteredPosts,
}: Readonly<BlogFiltersProps>) {
	const searchParams = useSearchParams();

	const urlTag = searchParams.get("tag") || "all";
	const urlCategory = searchParams.get("category") || "all";
	const urlSort = searchParams.get("sort") || "oldest";
	const urlSearch = searchParams.get("search") || "";

	const [searchTerm, setSearchTerm] = useState(urlSearch);
	const [selectedCategory, setSelectedCategory] = useState(urlCategory);
	const [selectedTag, setSelectedTag] = useState(urlTag);
	const [sortBy, setSortBy] = useState(urlSort);

	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(urlSearch);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 300);
		return () => clearTimeout(timer);
	}, [searchTerm]);

	const sort = useId();
	const tag = useId();
	const category = useId();

	useEffect(() => {
		setSelectedTag(urlTag);
		setSelectedCategory(urlCategory);
		setSortBy(urlSort);
		setSearchTerm(urlSearch);
	}, [urlTag, urlCategory, urlSort, urlSearch]);

	const categories = useMemo(() => {
		const cats = Array.from(new Set(posts.map((post) => post.category)));
		return cats.sort((a, b) => a.localeCompare(b, "tr"));
	}, [posts]);

	const tags = useMemo(() => {
		const allTags = posts.flatMap((post) => post.tags);
		const uniqueTags = Array.from(new Set(allTags));
		return uniqueTags.sort((a, b) => a.localeCompare(b, "tr"));
	}, [posts]);

	const filteredPosts = useMemo(() => {
		const filtered = posts.filter((post) => {
			const searchLower = debouncedSearchTerm.toLowerCase();
			const matchesSearch =
				searchLower === "" ||
				post.title.toLowerCase().includes(searchLower) ||
				post.excerpt.toLowerCase().includes(searchLower) ||
				post.tags.some((t) => t.toLowerCase().includes(searchLower));

			const matchesCategory =
				selectedCategory === "all" || post.category === selectedCategory;
			const matchesTag =
				selectedTag === "all" || post.tags.includes(selectedTag);

			return matchesSearch && matchesCategory && matchesTag;
		});

		const sorted = [...filtered].sort((a, b) => {
			switch (sortBy) {
				case "newest": {
					const dateA = new Date(a.publishDate).getTime();
					const dateB = new Date(b.publishDate).getTime();
					if (Number.isNaN(dateA) || Number.isNaN(dateB)) return 0;
					return dateB - dateA;
				}
				case "oldest": {
					const dateA = new Date(a.publishDate).getTime();
					const dateB = new Date(b.publishDate).getTime();
					if (Number.isNaN(dateA) || Number.isNaN(dateB)) return 0;
					return dateA - dateB;
				}
				case "title":
					return a.title.localeCompare(b.title, "tr");
				case "reading-time":
					return (a.readingTime || 0) - (b.readingTime || 0);
				default:
					return 0;
			}
		});

		return sorted;
	}, [posts, debouncedSearchTerm, selectedCategory, selectedTag, sortBy]);

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
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Search className="h-5 w-5 text-zinc-400" aria-hidden="true" />
				</div>
				<input
					type="text"
					aria-label="Blog yazılarında ara"
					placeholder="Blog yazılarında ara..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 py-3 pr-4 pl-11 text-zinc-100 placeholder-zinc-400 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/20"
				/>
			</div>

			{/* Filters Row */}
			<div className="flex flex-wrap gap-4">
				{/* Category Filter */}
				<div className="min-w-[200px] flex-1">
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
						{categories.map((cat) => (
							<option key={cat} value={cat}>
								{cat}
							</option>
						))}
					</select>
				</div>

				{/* Tag Filter */}
				<div className="min-w-[200px] flex-1">
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
						{tags.map((t) => (
							<option key={t} value={t}>
								#{t}
							</option>
						))}
					</select>
				</div>

				{/* Sort Filter */}
				<div className="min-w-[200px] flex-1">
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
				<p
					className="text-sm text-zinc-400"
					aria-live="polite"
					aria-atomic="true"
				>
					{filteredPosts.length} yazı bulundu
					{posts.length !== filteredPosts.length && ` (${posts.length} toplam)`}
				</p>

				{hasActiveFilters && (
					<button
						type="button"
						onClick={clearFilters}
						className="rounded-lg bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300 transition-colors hover:bg-zinc-700/50 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300/20"
					>
						Filtreleri Temizle
					</button>
				)}
			</div>
		</div>
	);
}
