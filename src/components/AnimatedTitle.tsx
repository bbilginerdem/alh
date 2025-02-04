"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
	title: string;
	containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

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
			{title.split("<br />").map((line) => (
				<div
					key={uuidv4()}
					className="max-w-full flex-center flex-wrap gap-2 px-10 md:gap-3"
				>
					{line.split(" ").map((word) => (
						<span
							key={uuidv4()}
							className="animated-word"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: word }}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default AnimatedTitle;
