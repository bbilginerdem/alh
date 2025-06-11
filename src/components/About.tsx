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
			height: "100vh",
			borderRadius: 0,
		});
	});

	return (
		<div id="about" className="min-h-screen w-screen">
			<div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
				<p className="font-inter text-sm uppercase max-md:text-[10px]">
					Ankara Lindy Hop
				</p>
				{/* asf */}
				<AnimatedTitle
					title="Ankara'nın en muazzam <br /> lindy hop Kitlesi"
					containerClass="mt-5 !text-black text-center"
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

			<div className="h-dvh w-screen" id="clip">
				<div className="mask-clip-path about-image">
					<Image
						src="/img/about.jpg"
						alt="about"
						fill
						priority
						sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 90vw"
						className="absolute top-0 left-0"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
