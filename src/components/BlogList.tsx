"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import { CornerDownLeft } from "lucide-react";
import { formatDate } from "@/lib/blog-utils";
import type { BlogMetadata } from "@/types/blog";

interface BlogListProps {
	posts: BlogMetadata[];
}
function BlogCard({
	post,
	setRef,
}: Readonly<{
	post: BlogMetadata;
	index: number;
	setRef: (el: HTMLDivElement | null) => void;
}>) {
	return (
		<Link
			href={`/blog/${post.slug}`}
			key={post.id}
			className="group block rounded-lg transition-transform duration-200 focus:outline-none"
			prefetch
			aria-label={`Read article: ${post.title}`}
		>
			<div
				ref={setRef}
				className="relative h-80 overflow-hidden rounded-lg border border-orange-300/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:border-orange-300/40 hover:bg-white/10"
			>
				{/* Featured Badge */}
				{post.featured && (
					<div className="absolute top-3 left-3 z-10 rounded-full bg-orange-500 px-2 py-1 font-medium text-white text-xs">
						Öne Çıkan
					</div>
				)}

				{/* Category Badge */}
				<div className="absolute top-3 right-3 z-10 rounded-full bg-zinc-800/80 px-2 py-1 font-medium text-xs text-zinc-200">
					{post.category}
				</div>

				{/* Image with gradient overlay */}
				{post.image ? (
					<div className="absolute inset-0">
						<Image
							src={post.image}
							alt={post.imageAlt || post.title}
							fill
							className="object-cover transition-transform duration-600 group-hover:scale-105"
							loading="lazy"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
					</div>
				) : (
					<div className="absolute inset-0 flex items-center justify-center bg-zinc-800/60">
						<span className="text-sm text-zinc-400">No image</span>
					</div>
				)}

				{/* Content */}
				<div className="relative flex h-full flex-col justify-end p-3 sm:px-5 sm:pt-2">
					{/* Meta info */}
					<div className="mb-3 flex items-center gap-3 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100">
						<span>{formatDate(post.publishDate)}</span>
					</div>

					<h2 className="mb-2 line-clamp-2 font-medium text-lg text-zinc-100 transition-colors duration-300 group-hover:text-orange-300 sm:text-xl">
						{post.title}
					</h2>

					{/* Excerpt */}
					<p className="mb-3 line-clamp-2 text-sm text-zinc-300">
						{post.excerpt}
					</p>

					{/* Tags */}
					<div className="mb-0 flex flex-wrap gap-1 opacity-0 transition-all duration-600 group-hover:mb-3 group-hover:translate-x-3 group-hover:opacity-100">
						{post.tags.slice(0, 2).map((tag) => (
							<span
								key={tag}
								className="rounded-md bg-zinc-800/60 px-2 py-1 text-xs text-zinc-300"
							>
								#{tag}
							</span>
						))}
						{post.tags.length > 2 && (
							<span className="rounded-md bg-zinc-800/60 px-2 py-1 text-xs text-zinc-400">
								+{post.tags.length - 2}
							</span>
						)}
						<CornerDownLeft className="translate-x-1 text-orange-300" />
					</div>
				</div>

				{/* Decorative elements */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
					<div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
				</div>
			</div>
		</Link>
	);
}

export function BlogList({ posts }: Readonly<BlogListProps>) {
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// Sync ref array with current posts
		cardsRef.current = posts.map((_, i) => cardsRef.current[i] || null);

		// Filter out null values and animate only valid elements
		const validCards = cardsRef.current.filter(
			(card): card is HTMLDivElement => card !== null,
		);

		const animations = validCards.map((card) => {
			gsap.set(card, { y: 20, opacity: 0 });

			const fadeIn = gsap.to(card, {
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});

			const hoverTl = gsap.timeline({ paused: true });
			hoverTl.to(card, {
				y: -8,
				duration: 0.4,
				ease: "power2.out",
			});

			const enter = () => hoverTl.play();
			const leave = () => hoverTl.reverse();

			card.addEventListener("mouseenter", enter);
			card.addEventListener("mouseleave", leave);

			return {
				trigger: fadeIn,
				cleanup: () => {
					card.removeEventListener("mouseenter", enter);
					card.removeEventListener("mouseleave", leave);
					fadeIn.kill();
				},
			};
		});

		return () => {
			for (const anim of animations) {
				anim.cleanup();
			}
			for (const trigger of ScrollTrigger.getAll()) {
				trigger.kill();
			}
		};
	}, [posts]);

	return (
		<section className="py-1 sm:py-2">
			<h2 className="sr-only">Blog Articles</h2>

			<ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
				{posts.map((post, index) => (
					<li key={post.id}>
						<BlogCard
							post={post}
							index={index}
							setRef={(el) => {
								cardsRef.current[index] = el;
							}}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
