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
	const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoFrameRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Generate random index and set immediately
		const randomIndex = Math.floor(Math.random() * 4) + 1; // 1-4
		setCurrentVideoIndex(randomIndex);
	}, []);

	const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

	const handleVideoLoad = () => {
		setIsVideoLoaded(true);
	};

	const handleVideoError = () => {
		setHasError(true);
		// Fallback to a default video if the current one fails
		if (currentVideoIndex !== 1) {
			setCurrentVideoIndex(1);
		}
	};

	useGSAP(() => {
		if (!videoFrameRef.current || !isVideoLoaded) return;

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
	}, [isVideoLoaded]);

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			<div
				ref={videoFrameRef}
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-zinc-50"
			>
				<div className="relative size-full">
					{!isVideoLoaded && !hasError && (
						<div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
							<div className="text-center">
								{/* Turkish pattern inspired spinner */}
								<div className="relative mx-auto mb-4">
									<div className="three-body">
										<div className="three-body__dot" />
										<div className="three-body__dot" />
										<div className="three-body__dot" />
									</div>
								</div>

								<p className="mt-2 text-amber-200">Dans etmeye hazırlanın...</p>
							</div>
						</div>
					)}

					{!hasError && (
						<video
							ref={videoRef}
							src={getVideoSrc(currentVideoIndex)}
							autoPlay
							loop
							muted
							playsInline
							// Remove preload attribute and let browser handle it
							onLoadStart={handleVideoLoad}
							onCanPlay={handleVideoLoad}
							onLoadedData={handleVideoLoad}
							onError={handleVideoError}
							className="absolute top-0 left-0 size-full object-cover object-center"
						/>
					)}

					{hasError && (
						<div className="absolute inset-0 flex items-center justify-center bg-gray-300">
							<p className="text-gray-700">Video couldn't load</p>
						</div>
					)}
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
						<Link href="/topluluk-ilkeleri" passHref className="inline-flex">
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
