"use client";

import { useGSAP } from "@gsap/react"; // Modern standard
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AnimatedTitleProps {
	title: string;
	containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	// Memoize the string splitting to prevent re-calculating on unrelated re-renders
	const lines = useMemo(() => {
		return title.split("<br />").map((line, i) => ({
			id: `line-${i}`,
			words: line.split(" ").map((word, j) => ({
				id: `word-${i}-${j}`,
				text: word,
			})),
		}));
	}, [title]);

	// useGSAP handles cleanup (revert) automatically!
	useGSAP(
		() => {
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
		},
		{ scope: containerRef, dependencies: [lines] }, // Re-run if lines change
	);

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
							className="animated-word inline-block opacity-0"
							style={{ willChange: "transform, opacity" }}
						>
							{word.text}
						</span>
					))}
				</div>
			))}
		</div>
	);
};

export default AnimatedTitle;
