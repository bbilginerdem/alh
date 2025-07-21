"use client";

import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	type MouseEventHandler,
	type ReactNode,
	useRef,
	useState,
} from "react";

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
			aria-hidden="true"
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
				alt={typeof title === "string" ? title : "Bento Card Image"}
				className="absolute top-0 left-0 size-full object-cover object-center"
			/>
			<div className="relative z-10 flex size-full flex-col justify-between p-10 text-zinc-50">
				<div>
					<h1 className="bento-title special-font">{title}</h1>
					{description && (
						<div className="relative my-3 max-w-fit rounded-xl bg-black/20 px-3 py-2 shadow-inner backdrop-blur-xs">
							<p className="max-w-64 text-xs text-zinc-100 md:text-base">
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
						className="w-fit"
						aria-disabled={!link}
						aria-label={!link ? "Coming soon" : undefined}
						onClick={(e) => !link && e.preventDefault()}
					>
						<div
							role="none"
							ref={hoverButtonRef}
							onMouseMove={handleMouseMove}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full border-hsla bg-black px-5 py-2 text-base text-white/60 tracking-wide"
						>
							{/* Radial gradient hover effect */}
							<div
								className="-inset-px pointer-events-none absolute opacity-0 transition duration-300"
								style={{
									opacity: hoverOpacity,
									background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
								}}
							/>
							<Navigation className="relative z-20" />
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

const Features = () => (
	<section className="bg-black">
		<div className="container mx-auto px-3 md:px-10">
			<div className="px-5 py-32">
				<h2 className="sr-only">Ankara Lindy Hop Features</h2>
				<p className="text-lg text-zinc-50">Ankara Lindy Hop nedir?</p>
				<p className="text-lg text-zinc-50 opacity-50">
					Evet, Ankara'nın sokakları denize çıkmadığı doğrudur... Çünkü
					Ankara'da sokaklar Ankara Lindy Hop'a çıkar. Ankara Lindy Hop,
					Ankara'nın sokaklarında, parklarında ve bahçelerinde ortaya çıkmış,
					jazz müziğin din, dil, ırk ve cinsiyet farkı gözetmeyen özgürlükçü
					temel felsefesini merkezine koymuş; başta lindy hop, solo jazz, blues
					ve swing dansı türevlerini Ankara'ya kar amacı gütmeden kazandırmaya
					çabalamış, hayatın olağan akışı içerisinde 2018 yılında bir araya
					gelmiş bir arkadaş grubudur.
				</p>
			</div>

			<BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-md border-hsla transition-transform duration-300 ease-out md:h-[65vh]">
				<BentoCard
					src="/images/features-1.jpg"
					title={<b>Stres Atmanın En Keyifli Yolu</b>}
					description="Günlük koşuşturmadan uzaklaş, dansın enerjisiyle yenilen!"
					isComingSoon="Ankara Etkinlik Takvimi"
					link="https://docs.google.com/spreadsheets/d/1ZiWU6a-0B4DFT4D91-KYt83-59HV7zsV/edit#gid=164835843"
				/>
			</BentoTilt>

			{/* Updated grid container */}
			<div className="grid w-full grid-cols-1 gap-7 pb-10 sm:grid-cols-2 sm:grid-rows-2">
				{/* First card - spans two rows on desktop */}
				<BentoTilt className="bento-tilt sm:row-span-2">
					<BentoCard
						src="/images/features-2.jpg"
						title={<b>Eğlenceli ve Sosyal</b>}
						description="Yeni insanlarla tanış, müziğin ritmine bırak kendini!"
						isComingSoon={
							<>
								<span aria-hidden="true">Konum</span>
								<span className="sr-only">View location on map</span>
							</>
						}
						link="https://g.co/kgs/hEpMUuf"
					/>
				</BentoTilt>

				{/* Second card - now properly aligned */}
				<BentoTilt className="bento-tilt">
					<BentoCard
						src="/images/features-3.jpg"
						title={<b>Sıcak bir topluluk</b>}
						description="Jazz, blues ve swing tutkunu yeni insanlarla tanışın."
					/>
				</BentoTilt>

				{/* Third card */}
				<BentoTilt className="bento-tilt">
					<BentoCard
						src="/images/features-4.jpg"
						title={<b>Nerede?</b>}
						description="Rasa Kafe, Ankara'nın en güzel mekanlarından biri!"
					/>
				</BentoTilt>
			</div>
		</div>
	</section>
);

export default Features;
