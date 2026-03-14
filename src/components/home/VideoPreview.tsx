"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";

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
				text: word,
			})),
		}));
	}, [title]);

	useGSAP(
		() => {
			const ctx = gsap.context(() => {
				const mm = gsap.matchMedia();

				mm.add("(prefers-reduced-motion: reduce)", () => {
					gsap.set(".animated-word", {
						opacity: 1,
						transform: "translate3d(0, 0, 0)",
						clearProps: "rotationX,rotationY",
					});
				});

				mm.add("(prefers-reduced-motion: no-preference)", () => {
					const wordCount = lines.reduce(
						(sum, line) => sum + line.words.length,
						0,
					);
					const stagger = Math.min(0.02, 0.5 / Math.max(1, wordCount));

					const titleAnimation = gsap.timeline({
						scrollTrigger: {
							trigger: containerRef.current,
							start: "100 bottom",
							end: "center bottom",
							toggleActions: "play none none reverse",
							fastScrollEnd: true,
							anticipatePin: 1,
						},
					});

					titleAnimation.to(
						".animated-word",
						{
							opacity: 1,
							transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
							ease: "power2.inOut",
							stagger: stagger,
						},
						0,
					);
				});
			}, containerRef);

			return () => ctx.revert?.();
		},
		{ scope: containerRef, dependencies: [lines] },
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
							style={{
								willChange: "transform, opacity",
								transform:
									"translate3d(0, 40px, 0) rotateY(15deg) rotateX(-15deg)",
							}}
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
