"use client";

import clsx from "clsx";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { v4 as uuidv4 } from "uuid";
import { navbarDirection } from "@/lib/utils";

const navItems: string[] = [
	"gönüllü ol",
	"topluluk ilkeleri",
	"etkinlikler",
	"blog",
	"iletişim",
];

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

	useEffect(() => {
		const attemptPlay = () => {
			if (audioElementRef.current) {
				audioElementRef.current
					.play()
					.then(() => {
						setIsAudioPlaying(true);
						setIsIndicatorActive(true);
					})
					.catch((error) => {
						console.warn("Audio autoplay was prevented:", error);
						// Optionally show a prompt to click to unmute
					});
			}
			// Remove listener after first attempt
			document.removeEventListener("click", attemptPlay);
			document.removeEventListener("touchstart", attemptPlay);
		};

		// Attach listeners
		document.addEventListener("click", attemptPlay);
		document.addEventListener("touchstart", attemptPlay);

		// Cleanup
		return () => {
			document.removeEventListener("click", attemptPlay);
			document.removeEventListener("touchstart", attemptPlay);
		};
	}, []);

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 top-2 z-40 h-16 border-none transition-all duration-700 sm:inset-x-5"
		>
			<header className="-translate-y-1/2 absolute top-1/2 w-full">
				<nav className="flex size-full items-center justify-between px-2 py-2 md:px-4 lg:px-8">
					{/* Logo and Home link */}
					<Link className="gap- flex items-center" href="/">
						<Image
							src="/images/logo.png"
							alt="Ankara Lindy Hop Logo"
							width={50}
							height={50}
							className="h-14 w-14 rounded-full"
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
						<div className="hidden md:flex md:items-center md:gap-3">
							{navItems.map((item: string) => (
								<Link
									key={uuidv4()}
									href={`/${navbarDirection(item).toLowerCase()}`}
									className="nav-hover-btn font-medium text-sm transition-colors hover:text-orange-300"
								>
									{item}
								</Link>
							))}
						</div>

						{/* Audio Button */}
						<button
							onClick={toggleAudioIndicator}
							className="ml-8 flex items-center space-x-0.5"
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
								loop
							>
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
								href={`/${navbarDirection(item).toLowerCase()}`}
								className="block px-3 py-4 font-medium text-orange-600 text-sm hover:bg-zinc-100"
								onClick={() => setIsDropdownOpen(false)}
							>
								{item}
							</Link>
						))}
					</div>
				)}
			</header>
		</div>
	);
};

export default NavBar;
