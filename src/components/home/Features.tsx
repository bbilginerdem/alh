"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	type MouseEventHandler,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

gsap.registerPlugin(ScrollTrigger);

interface BentoTiltProps {
	children: React.ReactNode;
	className?: string;
}

interface BentoCardProps {
	src: string;
	title: ReactNode;
	description?: string;
	isComingSoon?: ReactNode;
	link?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
	children,
	className = "",
}) => {
	const [transformStyle, setTransformStyle] = useState<string>("");
	const itemRef = useRef<HTMLDivElement | null>(null);

	const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
		if (!itemRef.current) return;

		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();

		const relativeX = (event.clientX - left) / width;
		const relativeY = (event.clientY - top) / height;

		const tiltX = (relativeY - 0.5) * 5;
		const tiltY = (relativeX - 0.5) * -5;

		const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
		setTransformStyle(newTransform);
	};

	const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
		setTransformStyle("");
	};

	return (
		<div
			role="none"
			ref={itemRef}
			className={className}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform: transformStyle }}
		>
			{children}
		</div>
	);
};

export const BentoCard: React.FC<BentoCardProps> = ({
	src,
	title,
	description,
	isComingSoon,
	link,
}) => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [hoverOpacity, setHoverOpacity] = useState(0);
	const hoverButtonRef = useRef<HTMLDivElement | null>(null);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!hoverButtonRef.current) return;
		const rect = hoverButtonRef.current.getBoundingClientRect();

		setCursorPosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		});
	};

	const handleMouseEnter = () => setHoverOpacity(1);
	const handleMouseLeave = () => setHoverOpacity(0);

	return (
		<div className="relative size-full">
			<Image
				src={src}
				fill
				sizes="(max-width: 640px) 100vw, 50vw"
				alt={typeof title === "string" ? title : "Bento Card Image"}
				className="absolute top-0 left-0 size-full object-cover object-center"
			/>
			<div className="relative z-10 flex size-full flex-col justify-between p-8 text-zinc-50">
				<div className="flex flex-col gap-3">
					<h1 className="bento-title translate-y-4 font-bold text-3xl uppercase leading-none tracking-tight opacity-0">
						{title}
					</h1>
					{description && (
						<div className="bento-description relative max-w-fit translate-y-4 rounded-xl bg-black/40 px-3 py-2 opacity-0 shadow-inner backdrop-blur-sm">
							<p className="max-w-64 font-medium text-xs text-zinc-200 leading-relaxed md:text-sm">
								{description}
							</p>
						</div>
					)}
				</div>

				{isComingSoon && (
					<Link
						href={link || "#"}
						target={link ? "_blank" : undefined}
						rel={link ? "noopener noreferrer" : undefined}
						className="bento-btn w-fit translate-y-4 opacity-0 max-lg:pt-6 lg:self-end"
						aria-disabled={!link}
						onClick={(e) => !link && e.preventDefault()}
					>
						<div
							role="none"
							ref={hoverButtonRef}
							onMouseMove={handleMouseMove}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="relative flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-black/50 px-5 py-2.5 font-bold text-sm text-white/90 uppercase tracking-widest backdrop-blur-md transition-colors hover:bg-black/70"
						>
							{/* Radial gradient hover effect */}
							<div
								className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
								style={{
									opacity: hoverOpacity,
									background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.15), transparent)`,
								}}
							/>
							<Navigation size={14} className="relative z-20" />
							<span className="relative z-20">
								{isComingSoon}
								{!link && " (Coming Soon)"}
							</span>
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};

const Features = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const ctx = gsap.context(() => {
			// Swiss-style Text Reveal
			gsap.fromTo(
				".feature-header-text",
				{
					y: 100,
					opacity: 0,
					clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
				},
				{
					y: 0,
					opacity: 1,
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					duration: 1.2,
					stagger: 0.1,
					ease: "power4.out",
					scrollTrigger: {
						trigger: ".feature-text-container",
						start: "top 80%",
					},
				},
			);

			// Bento Grid Stagger
			gsap.fromTo(
				".bento-tilt",
				{
					y: 100,
					opacity: 0,
					filter: "blur(10px)",
				},
				{
					y: 0,
					opacity: 1,
					filter: "blur(0px)",
					duration: 1,
					stagger: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".bento-grid",
						start: "top 75%",
					},
					onComplete: () => {
						// Internal card animations triggered after card appears
						gsap.to([".bento-title", ".bento-description", ".bento-btn"], {
							y: 0,
							opacity: 1,
							duration: 0.6,
							stagger: 0.05,
							ease: "power2.out",
							overwrite: "auto",
						});
					},
				},
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className="bg-black" ref={containerRef}>
			<div className="container mx-auto px-3 md:px-10">
				<div className="feature-text-container flex flex-col gap-6 px-5 py-32">
					<h2 className="sr-only">Ankara Lindy Hop Features</h2>
					<p className="feature-header-text font-bold text-2xl text-zinc-50 tracking-tight md:text-4xl">
						Ankara Lindy Hop kimdir?
					</p>
					<p className="feature-header-text font-light text-lg text-zinc-400 leading-relaxed md:max-w-3xl">
						Evet, Ankara’nın sokakları denize çıkmaz; ama Ankara’da sokaklar
						Ankara Lindy Hop’a çıkar. Ankara Lindy Hop, Ankara’nın sokaklarında,
						parklarında ve bahçelerinde ortaya çıkmış, caz müziğinin din, dil,
						ırk ve cinsiyet gibi hiçbir ayrım gözetmeyen özgürlükçü felsefesini
						merkezine koymuş bir topluluktur. Başta Lindy Hop, Solo Jazz, Blues
						ve Swing dansı türlerini, Ankara’ya kar amacı gütmeden kazandırmayı
						amaçlayan bu dost grubu, 2018 yılında hayatın akışı içinde bir araya
						gelmiştir. O günden itibaren, kar amacı gütmeden ve Lindy Hop ruhunu
						yansıtmak amacıyla, dansı yaymak ve topluluğu büyütmek için çeşitli
						etkinlikler düzenlemeye devam etmiştir. Bir grup insanla başlayan bu
						yolculuk, bugün 470 üyeye ulaşan geniş ve dinamik bir topluluğa
						dönüşmüştür.
					</p>
				</div>

				<div className="bento-tilt relative mb-6 h-96 w-full overflow-hidden rounded-md border-hsla transition-transform duration-300 ease-out md:h-[65vh]">
					<BentoCard
						src="/images/features-1.webp"
						title="Stresini at, ritme katıl!"
						description="Günlük koşuşturmadan uzaklaş, dansın enerjisiyle yenilen!"
						isComingSoon="Ankara Etkinlik Takvimi"
						link="https://www.swing-out.com/turkiye/ankara"
					/>
				</div>

				<div className="bento-grid grid w-full grid-cols-1 gap-7 pb-10 sm:grid-cols-2 sm:grid-rows-2">
					<div className="bento-tilt relative h-full w-full overflow-hidden rounded-md border-hsla sm:row-span-2">
						<BentoCard
							src="/images/features-2.webp"
							title="Nerede?"
							description="Her Çarşamba Ankara Lindy Hop topluluğu olarak bir araya geliyoruz. Bu buluşmalarda iki birbiriyle bağlantılı etkinlik oluyor: pratik ve sosyal dans."
							isComingSoon={
								<>
									<span aria-hidden="true">Konum</span>
									<span className="sr-only">View location on map</span>
								</>
							}
							link="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14d34fabe83d28ad:0xebd21f53deab4a4a"
						/>
					</div>

					<div className="bento-tilt relative h-full w-full overflow-hidden rounded-md border-hsla">
						<BentoTilt className="h-full w-full">
							<BentoCard
								src="/images/features-3.webp"
								title="Sıcak bir topluluk"
								description="Caz, blues ve swing tutkunu yeni insanlarla tanışın."
							/>
						</BentoTilt>
					</div>

					<div className="bento-tilt relative h-full w-full overflow-hidden rounded-md border-hsla">
						<BentoTilt className="h-full w-full">
							<BentoCard
								src="/images/features-4.webp"
								title="Eğlenceli ve Sosyal"
								description="Yeni insanlarla tanış, müziğin ritmine bırak kendini!"
							/>
						</BentoTilt>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
