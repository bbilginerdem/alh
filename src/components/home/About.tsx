"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const clipRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: clipRef.current,
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
				invalidateOnRefresh: true,
			},
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100dvh",
			borderRadius: 0,
		});
	});

	return (
		<section id="about" className="min-h-screen w-screen">
			<div className="relative mt-20 mb-3 items-center gap-5 sm:mt-36 sm:mb-5 sm:gap-6 md:mb-6 lg:mb-7 xl:mb-8">
				<AnimatedTitle
					title="Ankara’nın ilk <br /> Lindy Hop Komünitesi"
					containerClass="mt-5 text-black! text-center"
				/>

				<div className="about-subtext pt-3 max-lg:hidden">
					<p>2018'den beri Ankara’da swing ritmini paylaşan bir topluluğuz</p>
					<p className="pt-3 text-zinc-600">
						Her seviyeden dansçıyı kucaklayan atölyelerimiz, sosyal dans
						gecelerimiz ve özel etkinliklerimizle Lindy Hop tutkusunu yaymaya
						devam ediyoruz.
					</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id="clip" ref={clipRef}>
				<div className="mask-clip-path about-image">
					<Image
						src="/images/about.webp"
						alt="ALH parti sonu"
						fill
						priority
						quality={100}
						sizes="(max-width: 768px) 60vw, (max-width: 1024px) 80vw, 100vw"
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
