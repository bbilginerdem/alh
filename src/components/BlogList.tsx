"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface Post {
	id: number;
	title: string;
	slug: string;
	Content: React.ComponentType;
	image?: string;
}

interface BlogListProps {
	posts: Post[];
}
function BlogCard({
	post,
	setRef,
}: {
	post: Post;
	index: number;
	setRef: (el: HTMLDivElement | null) => void;
}) {
	return (
		<Link
			href={`/blog/${post.slug}`}
			key={post.id}
			className="group block rounded-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400/50"
			prefetch
			aria-label={`Read article: ${post.title}`}
		>
			<div
				ref={setRef}
				className="relative h-64 overflow-hidden rounded-lg border border-orange-300/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:border-orange-300/40 hover:bg-white/10"
			>
				{/* Image with gradient overlay */}
				{post.image ? (
					<div className="absolute inset-0">
						<Image
							src={post.image}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
							loading="lazy"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/20 to-transparent" />
					</div>
				) : (
					<div className="absolute inset-0 flex items-center justify-center bg-zinc-800/60">
						<span className="text-sm text-zinc-400">No image</span>
					</div>
				)}

				{/* Content */}
				<div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
					<h2 className="line-clamp-2 font-medium text-lg text-zinc-100 transition-colors duration-300 group-hover:text-orange-300 sm:text-xl">
						{post.title}
					</h2>
					<span className="mt-2 inline-flex items-center gap-1.5 font-medium text-orange-300/80 text-sm transition-colors duration-300 group-hover:text-orange-300">
						Devamı
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							role="img"
							aria-label="read more"
							className="translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</span>
				</div>

				{/* Decorative elements */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
					<div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
					<div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-orange-300 opacity-0 transition-opacity delay-150 duration-700 group-hover:opacity-100" />
				</div>
			</div>
		</Link>
	);
}

export function BlogList({ posts }: BlogListProps) {
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
		<section className="py-6 sm:py-8">
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
