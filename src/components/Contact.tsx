import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Button from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse",
				},
			});

			// Crazy Image reveal animation
			tl.fromTo(
				imageRef.current,
				{
					clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
					scale: 1.5,
					rotate: -10,
				},
				{
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					scale: 1,
					rotate: 0,
					duration: 1.5,
					ease: "expo.inOut",
				},
			);

			// Text stagger animation with skew and rotation
			tl.fromTo(
				".contact-text",
				{
					y: 100,
					opacity: 0,
					skewY: 10,
					rotateX: 45,
				},
				{
					y: 0,
					opacity: 1,
					skewY: 0,
					rotateX: 0,
					duration: 1.2,
					stagger: 0.15,
					ease: "elastic.out(1, 0.5)",
				},
				"-=1.2",
			);

			// Continuous floating animation for text
			gsap.to(".contact-text", {
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				stagger: 0.1,
			});

			// Mouse move parallax effect
			const handleMouseMove = (e: MouseEvent) => {
				if (!containerRef.current) return;
				const { left, top, width, height } =
					containerRef.current.getBoundingClientRect();
				const x = (e.clientX - left) / width - 0.5;
				const y = (e.clientY - top) / height - 0.5;

				gsap.to(imageRef.current, {
					x: x * 30,
					y: y * 30,
					rotateY: x * 10,
					rotateX: -y * 10,
					duration: 1,
					ease: "power2.out",
				});

				gsap.to(".contact-text", {
					x: -x * 20,
					y: -y * 20,
					duration: 1,
					ease: "power2.out",
				});
			};

			containerRef.current?.addEventListener("mousemove", handleMouseMove);

			return () => {
				containerRef.current?.removeEventListener("mousemove", handleMouseMove);
			};
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="perspective-1000 relative my-32 min-h-120 w-full px-4 sm:px-8 lg:my-40"
		>
			<div className="relative mx-auto max-w-7xl rounded-2xl bg-zinc-200 py-24 text-zinc-50 sm:overflow-hidden">
				<div
					ref={imageRef}
					className="absolute inset-0 overflow-hidden rounded-2xl"
				>
					<Image
						src="/images/contact.jpg"
						alt="Contact Image"
						className="h-full w-full object-cover brightness-75 contrast-125 saturate-150 transition-transform duration-700"
						fill
						loading="lazy"
						style={{ objectPosition: "right center" }}
					/>
					<div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/70 to-transparent mix-blend-multiply" />
					<div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
				</div>

				<div
					ref={textRef}
					className="relative z-10 flex flex-col items-start px-6 text-left sm:px-12 md:px-16 lg:w-2/3"
				>
					<div className="contact-text mb-8 flex flex-col items-start">
						<p className="font-bold font-general text-orange-400 text-sm uppercase tracking-[0.3em] drop-shadow-lg">
							Bize Ulaşın
						</p>
						<h1 className="mt-4 bg-linear-to-br from-zinc-100 to-zinc-500 bg-clip-text font-black font-zentry text-6xl text-transparent uppercase leading-[0.85] drop-shadow-2xl md:text-8xl">
							Sorunuz <br /> Mı Var?
						</h1>
					</div>

					<div className="contact-text max-w-xl font-circular-web font-medium text-lg text-zinc-300 leading-relaxed drop-shadow-md md:text-2xl">
						Partilerimizin tarih ve saatleri için takvimimizi, instagram'ımızı
						ve web sitemizi takip edin. Dans gecelerini kaçırmayın!
					</div>

					<Link href="/iletisim" passHref className="contact-text pt-12">
						<Button
							title="İletişim Formu"
							containerClass="bg-orange-300 text-zinc-950 hover:bg-zinc-50 transition-all duration-300 hover:scale-110"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Contact;
