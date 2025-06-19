"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navigation } from "lucide-react";
import { useId, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(1);
	const [hasClicked, setHasClicked] = useState<boolean>(false);

	const totalVideos: number = 4;
	const nextVdRef = useRef<HTMLVideoElement>(null);
	const currentVideoRef = useRef<HTMLVideoElement>(null);
	const videoFrameRef = useRef<HTMLDivElement>(null);

	// Generate unique IDs
	const videoFrameId = useId();
	const nextVideoId = useId();
	const currentVideoId = useId();

	const handleMiniVdClick = () => {
		setHasClicked(true);
		setCurrentIndex((prevIndex: number) => (prevIndex % totalVideos) + 1);
	};

	useGSAP(
		() => {
			if (hasClicked && nextVdRef.current && currentVideoRef.current) {
				gsap.set(nextVdRef.current, {
					visibility: "visible",
				});
				gsap.to(nextVdRef.current, {
					transformOrigin: "center center",
					scale: 1,
					width: "100%",
					height: "100%",
					duration: 1,
					ease: "power1.inOut",
					onStart: () => {
						const video = nextVdRef.current;
						if (video) {
							video.play().catch((error) => {
								console.error("Error playing video:", error);
							});
						}
					},
				});
				gsap.from(currentVideoRef.current, {
					transformOrigin: "center center",
					scale: 0,
					duration: 1.5,
					ease: "power1.inOut",
				});
			}
		},
		{
			dependencies: [currentIndex],
			revertOnUpdate: true,
		},
	);

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

	const getVideoSrc = (index: number): string => `videos/hero-${index}.webm`;

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			<div
				ref={videoFrameRef}
				id={videoFrameId}
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
			>
				<div>
					<div className="mask-clip-path absolute-center absolute z-40 size-64 cursor-pointer overflow-hidden rounded-lg">
						<VideoPreview>
							<div
								role="none"
								aria-hidden="true"
								onClick={handleMiniVdClick}
								className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
							>
								<video
									ref={currentVideoRef}
									id={currentVideoId}
									src={getVideoSrc((currentIndex % totalVideos) + 1)}
									loop
									muted
									className="size-64 origin-center scale-150 object-cover object-center"
								/>
							</div>
						</VideoPreview>
					</div>

					<video
						ref={nextVdRef}
						id={nextVideoId}
						src={getVideoSrc(currentIndex)}
						loop
						muted
						className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
					/>
					<video
						src={getVideoSrc(
							currentIndex === totalVideos - 1 ? 1 : currentIndex,
						)}
						autoPlay
						loop
						muted
						className="absolute top-0 left-0 size-full object-cover object-center"
					/>
				</div>

				<h1 className="special-font hero-heading absolute right-5 bottom-5 z-30 text-blue-75">
					<b>L</b>
					<b>I</b>
					<b>N</b>
					<b>D</b>
					<b>Y</b> <b>H</b>
					<b>O</b>
					<b>P</b>
				</h1>

				<div className="absolute top-0 left-0 z-30 size-full">
					<div className="mt-24 px-5 sm:px-10">
						<h1 className="special-font hero-heading text-blue-100">
							<b>A</b>
							<b>N</b>K<b>A</b>R<b>A</b>
						</h1>

						<div className="relative my-3 max-w-fit rounded-md bg-black/50 px-3 py-2 shadow-inner backdrop-blur-xs">
							<p className="text-base text-blue-100">
								Her çarşamba 20:00-00:00 arası <br /> Ücretsiz pratik alanı ve
								sosyal dans için <br />
								Rasa kafe & restoranındayız.
							</p>
						</div>

						<a
							href="https://drive.google.com/file/d/1uodTF9fP6MYnU0Vb_9Sup-2TxRPHnXk9/view"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								title="Topluluk İlkeleri"
								leftIcon={<Navigation />}
								containerClass="bg-yellow-300 flex-center gap-1"
							/>
						</a>
					</div>
				</div>
			</div>

			<h1 className="special-font hero-heading absolute right-5 bottom-5 text-black">
				<b>L</b>
				<b>I</b>
				<b>N</b>
				<b>D</b>
				<b>Y</b> <b>H</b>
				<b>O</b>
				<b>P</b>
			</h1>
		</div>
	);
};

export default Hero;
