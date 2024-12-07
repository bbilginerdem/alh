"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vw",
			borderRadius: 0,
		});
	});

	return (
		<div id="about" className="min-h-screen w-screen">
			<div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
				<h2 className="font-general text-sm uppercase md:text-[10px]">
					Welcome To Ankara Lindy Hop
				</h2>

				<AnimatedTitle
					title={"Discover the magic of Ankara Lindy Hop"}
					containerClass={"mt-5 !text-black text-center"}
				/>

				<div className="about-subtext">
					<p>Dancing is what we do.</p>
					<p>What we do is what we dance.</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id="clip">
				<div className="mask-clip-path about-image">
					<Image
						src="/img/about.webp"
						alt="about"
						fill
						className="absolute top-0 left-0"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
