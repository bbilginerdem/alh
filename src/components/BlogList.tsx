"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

export function BlogList({ posts }: BlogListProps) {
	const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		cardsRef.current.forEach((card) => {
			if (!card) return;

			gsap.set(card, { y: 20, opacity: 0 });
			gsap.to(card, {
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: card,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});

			const hoverTL = gsap.timeline({ paused: true });
			hoverTL.to(card, {
				y: -5,
				duration: 0.3,
				ease: "power2.out",
			});

			card.addEventListener("mouseenter", () => hoverTL.play());
			card.addEventListener("mouseleave", () => hoverTL.reverse());
		});

		return () => {
			cardsRef.current.forEach((card) => {
				if (!card) return;
				card.removeEventListener("mouseenter", () => {});
				card.removeEventListener("mouseleave", () => {});
			});
		};
	}, []);

	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{posts.map((post, index) => (
				<Link key={post.id} href={`/blog/${post.slug}`} passHref>
					<div
						ref={(el) => {
							cardsRef.current[index] = el;
						}}
						className="group relative h-64 cursor-pointer overflow-hidden rounded-lg border border-orange-300/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-orange-300/40 hover:bg-white/10"
					>
						{post.image && (
							<div className="absolute inset-0">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/30 to-transparent" />
							</div>
						)}

						<div className="relative flex h-full flex-col justify-end p-6">
							<h2 className="font-medium text-xl text-zinc-100 transition-colors duration-300 group-hover:text-orange-300">
								{post.title}
							</h2>
							<span className="mt-2 inline-flex items-center font-medium text-orange-300/80 text-sm transition-colors duration-300 group-hover:text-orange-300">
								Read more →
							</span>
						</div>

						{/* Decorative elements */}
						<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
							<div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
							<div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-orange-300 opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100" />
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
