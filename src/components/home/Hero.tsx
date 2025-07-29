"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navigation } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(1);
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoFrameRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * 4) + 1; // 1-4
		setCurrentVideoIndex(randomIndex);
	}, []);

	useGSAP(() => {
		if (!videoFrameRef.current) return;

		gsap.set(videoFrameRef.current, {
			clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
			borderRadius: "0% 0% 40% 10%",
		});

		gsap.from(videoFrameRef.current, {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			borderRadius: "0% 0% 0% 0%",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: videoFrameRef.current,
				start: "center center",
				end: "bottom center",
				scrub: true,
			},
		});
	});

	const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			<div
				ref={videoFrameRef}
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-zinc-50"
			>
				<div>
					<video
						ref={videoRef}
						src={getVideoSrc(currentVideoIndex)}
						autoPlay
						loop
						muted
						className="absolute top-0 left-0 size-full object-cover object-center"
					/>
				</div>

				<h1 className="hero-heading absolute right-5 bottom-5 z-30 font-almendra-sc text-zinc-100">
					<b>LINDY HOP</b>
				</h1>

				<div className="absolute top-0 left-0 z-30 size-full">
					<div className="mt-24 px-5 sm:px-10">
						<h1 className="hero-heading font-almendra-sc text-zinc-100">
							<b>ANKARA</b>
						</h1>

						<div className="relative my-3 max-w-fit rounded-md bg-black/40 px-3 py-2 shadow-inner backdrop-blur-xs">
							<p className="text-base text-zinc-100">
								Her çarşamba 20:00-00:00 arası <br /> Ücretsiz pratik alanı ve
								sosyal dans için <br />
								Rasa kafe & restoranındayız.
							</p>
						</div>
						<Link
							href="/topluluk-ilkeleri"
							passHref
							className="z-50 inline-flex"
						>
							<Button
								title="Topluluk İlkeleri"
								leftIcon={<Navigation />}
								containerClass="flex-center mt-5"
							/>
						</Link>
					</div>
				</div>
			</div>

			<h1 className="hero-heading absolute right-5 bottom-5 font-almendra-sc text-black">
				<b>LINDY HOP</b>
			</h1>
		</div>
	);
};

export default Hero;
