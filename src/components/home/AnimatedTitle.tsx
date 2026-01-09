"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
	title: string;
	containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const lines = useMemo(() => {
		return title.split("<br />").map((line, i) => ({
			id: `line-${i}`,
			words: line.split(" ").map((word, j) => ({
				id: `word-${i}-${j}`,
				html: word,
			})),
		}));
	}, [title]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const titleAnimation = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "100 bottom",
					end: "center bottom",
					toggleActions: "play none none reverse",
				},
			});

			titleAnimation.to(
				".animated-word",
				{
					opacity: 1,
					transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
					ease: "power2.inOut",
					stagger: 0.02,
				},
				0,
			);
		}, containerRef);

		return () => ctx.revert(); // Clean up on unmount
	}, []);

	return (
		<div ref={containerRef} className={clsx("animated-title", containerClass)}>
			{lines.map((line) => (
				<div
					key={line.id}
					className="max-w-full flex-center flex-wrap gap-2 px-10 md:gap-3"
				>
					{line.words.map((word) => (
						<span
							key={word.id}
							className="animated-word"
							dangerouslySetInnerHTML={{ __html: word.html }}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default AnimatedTitle;
