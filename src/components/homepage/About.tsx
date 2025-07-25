"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useId } from "react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	// Generate unique IDs
	const clipId = useId();
	const aboutSectionId = useId();

	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: `#${clipId}`,
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
		});
	}, [clipId]); // Add clipId as dependency

	return (
		<section id={aboutSectionId} className="min-h-screen w-screen">
			<div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
				<p className="font-inter text-sm uppercase max-md:text-[10px]">
					Ankara Lindy Hop
				</p>
				<AnimatedTitle
					title="Ankara’nın ilk <br /> Lindy Hop Topluluğu"
					containerClass="mt-5 text-black! text-center"
				/>

				<div className="about-subtext">
					<p>
						Bu coşkulu dansı yaymak ve keyifli bir topluluk oluşturmak için
						buradayız.
					</p>
					<p className="text-gray-500">
						Dans geçmişiniz ne olursa olsun, kapımız herkese açık! Canlı müzikli
						dans geceleri ve unutulmaz swing etkinlikleri sizi bekliyor.
					</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id={clipId}>
				<div className="mask-clip-path about-image">
					<Image
						src="/images/about.jpg"
						alt="ALH parti sonu"
						fill
						priority
						quality={100}
						sizes="100vw"
						className="absolute top-0 left-0"
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
