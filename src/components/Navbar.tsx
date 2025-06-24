"use client";

import clsx from "clsx";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { v4 as uuidv4 } from "uuid";
import { turkishToEnglish } from "@/lib/utils";

// const navItems: string[] = ["etkinlikler", "blog", "iletişim"];
const navItems: string[] = ["iletişim"];

const NavBar = () => {
	const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
	const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const audioElementRef = useRef<HTMLAudioElement | null>(null);
	const navContainerRef = useRef<HTMLDivElement | null>(null);

	const { y: currentScrollY } = useWindowScroll();
	const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	const toggleAudioIndicator = (): void => {
		setIsAudioPlaying((prev: boolean) => !prev);
		setIsIndicatorActive((prev: boolean) => !prev);
	};

	useEffect(() => {
		if (isAudioPlaying) {
			audioElementRef.current?.play();
		} else {
			audioElementRef.current?.pause();
		}
	}, [isAudioPlaying]);

	useEffect(() => {
		if (!navContainerRef.current) return;

		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove("floating-nav");
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add("floating-nav");
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add("floating-nav");
		}
		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		if (!navContainerRef.current) return;

		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2,
		});
	}, [isNavVisible]);

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 top-4 z-40 h-16 border-none transition-all duration-700 sm:inset-x-6"
		>
			<header className="-translate-y-1/2 absolute top-1/2 w-full">
				<nav className="flex size-full items-center justify-between p-4">
					{/* Logo and Home link */}
					<Link className="flex items-center gap-7" href="/">
						<Image
							src="/img/logo.png"
							alt="Ankara Lindy Hop Logo"
							width={40}
							height={40}
							className="w-10"
							priority
						/>
					</Link>

					{/* Navigation Links and Audio Button */}
					<div className="flex h-full items-center">
						{/* Hamburger Menu for Small Screens */}
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="md:hidden"
							aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
							aria-expanded={isDropdownOpen}
							type="button"
						>
							{isDropdownOpen ? (
								<X size={24} color="#fdba74" />
							) : (
								<Menu size={24} color="#fdba74" />
							)}
						</button>

						{/* Navigation Links (Desktop) */}
						<div className="hidden md:flex md:items-center md:gap-6">
							{navItems.map((item: string) => (
								<Link
									key={uuidv4()}
									href={`/${turkishToEnglish(item).toLowerCase()}`}
									className="nav-hover-btn font-medium text-sm transition-colors hover:text-orange-300"
								>
									{item}
								</Link>
							))}
						</div>

						{/* Audio Button */}
						<button
							onClick={toggleAudioIndicator}
							className="ml-10 flex items-center space-x-0.5"
							aria-label={
								isAudioPlaying
									? "Pause background music"
									: "Play background music"
							}
							type="button"
						>
							<audio
								ref={audioElementRef}
								className="hidden"
								src="/audio/loop.mp3"
								autoPlay
								loop
							>
								{/* Captions track for accessibility */}
								<track
									kind="captions"
									src="/audio/captions.vtt"
									srcLang="en"
									label="English"
									default
								/>
								Your browser does not support the audio element.
							</audio>
							{[1, 2, 3, 4].map((bar: number) => (
								<div
									key={bar}
									className={clsx("indicator-line", {
										active: isIndicatorActive,
									})}
									style={{
										animationDelay: `${bar * 0.1}s`,
									}}
								/>
							))}
						</button>
					</div>
				</nav>

				{/* Dropdown Menu for Small Screens */}
				{isDropdownOpen && (
					<div className="absolute right-0 left-0 z-50 w-full bg-white shadow-lg md:hidden">
						{navItems.map((item: string) => (
							<Link
								key={uuidv4()}
								href={`/${turkishToEnglish(item).toLowerCase()}`}
								className="block p-4 font-medium text-sm hover:bg-orange-50"
								onClick={() => setIsDropdownOpen(false)}
							>
								{turkishToEnglish(item).toLowerCase()}
							</Link>
						))}
					</div>
				)}
			</header>
		</div>
	);
};

export default NavBar;
