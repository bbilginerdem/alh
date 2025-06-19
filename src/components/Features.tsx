"use client";

import { Navigation } from "lucide-react";
import Image from "next/image";
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
	isComingSoon?: string;
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
			<div className="relative z-10 flex size-full flex-col justify-between p-10 text-blue-50">
				<div>
					<h1 className="bento-title special-font">{title}</h1>
					{description && (
						<p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
					)}
				</div>

				{isComingSoon && (
					<a
						href={link || "#"}
						target="_blank"
						rel="noopener noreferrer"
						className="w-fit"
					>
						<div
							role="none"
							aria-hidden="true"
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
							<p className="relative z-20">{isComingSoon}</p>
						</div>
					</a>
				)}
			</div>
		</div>
	);
};

const Features = () => (
	<section className="bg-black">
		<div className="container mx-auto px-3 md:px-10">
			<div className="px-5 py-32">
				<p className="text-blue-50 text-lg">Ankara Lindy Hop nedir?</p>
				<p className=" text-blue-50 text-lg opacity-50">
					Evet, Ankara'nın sokakları denize çıkmadığı doğrudur... Çünkü
					Ankara'da sokaklar Ankara Lindy Hop'a çıkar. Ankara Lindy Hop,
					Ankara'nın sokaklarında, parklarında ve bahçelerinde ortaya çıkmış,
					jazz müziğin din, dil, ırk ve cinsiyet farkı gözetmeyen özgürlükçü
					temel felsefesini merkezine koymuş; başta lindyhop, solo jazz, blues
					ve swing dansı türevlerini Ankara'ya kar amacı gütmeden kazandırmaya
					çabalamış, hayatın olağan akışı içerisinde 2018 yılında bir araya
					gelmiş bir arkadaş grubudur. Başta, 2018 yılında küçük bir arkadaş
					grubu olan Ankaralindyhop, yıllar içerisinde kendisine önce onlarca,
					sonra yüzlerce yeni arkadaş edinip, ilk günkü felsefesini koruyarak
					amacına ulaşmıştır; Ankara'da sokağı, jazz müziği, jazz danslarını ve
					dayanışmayı bir araya getirmiştir. Ankara'da ilk zamanlar sınırlı olan
					swing dansları öğrenim kaynaklarını geliştirmisinde baş aktör olup,
					bir çok park/pub/music hall ve türevlerinde onlarca pratik/sosyal dans
					geceleri düzenlemiştir. Başlarda öğretici kaynak sıkıntısı çekerken,
					kendi içerisinden öğretmen seviyesinde danscılar çıkarmış, sosyal dans
					gecelerinde eşlikci olarak çalacak jazz bandların kurulmasına
					vesile olmuştur.
				</p>
			</div>

			<BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-md border-hsla transition-transform duration-300 ease-out md:h-[65vh]">
				<BentoCard
					src="/img/85.jpg"
					title={<b>Stres Atmanın En Keyifli Yolu</b>}
					description="Günlük koşuşturmadan uzaklaş, dansın enerjisiyle yenilen!"
					isComingSoon="Ankara Etkinlik Takvimi"
					link="https://docs.google.com/spreadsheets/d/1ZiWU6a-0B4DFT4D91-KYt83-59HV7zsV/edit#gid=164835843"
				/>
			</BentoTilt>

			<div className="grid w-full grid-cols-2 grid-rows-3 gap-7">
				<BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
					<BentoCard
						src="/img/85.jpg"
						title={<b>Eğlenceli ve Sosyal</b>}
						description="Yeni insanlarla tanış, müziğin ritmine bırak kendini!"
						isComingSoon="Parti Fotografları"
						link="https://photos.app.goo.gl/EhKdqcuNAFyosLiYA"
					/>
				</BentoTilt>

				<BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
					<BentoCard
						src="/img/85.jpg"
						title={<b>Sıcak bir topluluk</b>}
						description="Jazz, blues ve swing tutkunu yeni insanlarla tanışın."
					/>
				</BentoTilt>

				<BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
					<BentoCard
						src="/img/85.jpg"
						title={<b>Nerede?</b>}
						description="Rasa Kafe, Ankara'nın en güzel mekanlarından biri!"
					/>
				</BentoTilt>
			</div>
		</div>
	</section>
);

export default Features;
