"use client";

import clsx from "clsx";
import gsap from "gsap";
import { Navigation } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

interface NavBarProps {
	logoSrc: string;
	audioSrc: string;
	productButtonTitle: string;
}

const NavBar: React.FC<NavBarProps> = ({
	logoSrc,
	audioSrc,
	productButtonTitle,
}) => {
	// State for toggling audio and visual indicator
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const [isIndicatorActive, setIsIndicatorActive] = useState(false);

	// Refs for audio and navigation container
	const audioElementRef = useRef<HTMLAudioElement | null>(null);
	const navContainerRef = useRef<HTMLDivElement | null>(null);

	const { y: currentScrollY } = useWindowScroll();
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	// Toggle audio and visual indicator
	const toggleAudioIndicator = () => {
		setIsAudioPlaying((prev) => !prev);
		setIsIndicatorActive((prev) => !prev);
	};

	// Manage audio playback
	useEffect(() => {
		if (isAudioPlaying) {
			audioElementRef.current?.play();
		} else {
			audioElementRef.current?.pause();
		}
	}, [isAudioPlaying]);

	useEffect(() => {
		if (currentScrollY === 0) {
			// Topmost position: show navbar without floating-nav
			setIsNavVisible(true);
			navContainerRef.current?.classList.remove("floating-nav");
		} else if (currentScrollY > lastScrollY) {
			// Scrolling down: hide navbar and apply floating-nav
			setIsNavVisible(false);
			navContainerRef.current?.classList.add("floating-nav");
		} else if (currentScrollY < lastScrollY) {
			// Scrolling up: show navbar with floating-nav
			setIsNavVisible(true);
			navContainerRef.current?.classList.add("floating-nav");
		}

		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2,
		});
	}, [isNavVisible]);

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
		>
			<header className="-translate-y-1/2 absolute top-1/2 w-full">
				<nav className="flex size-full items-center justify-between p-4">
					{/* Logo and Product button */}
					<div className="flex items-center gap-7">
						<img src={logoSrc} alt="logo" className="w-10" />

						<Button
							id="product-button"
							title={productButtonTitle}
							rightIcon={<Navigation />}
							containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
						/>
					</div>

					{/* Navigation Links and Audio Button */}
					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((item) => (
								<a
									key={uuidv4()}
									href={`#${item.toLowerCase()}`}
									className="nav-hover-btn"
								>
									{item}
								</a>
							))}
						</div>

						<button
							onClick={toggleAudioIndicator}
							type="button"
							className="ml-10 flex items-center space-x-0.5"
						>
							{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
							<audio
								ref={audioElementRef}
								className="hidden"
								src={audioSrc}
								loop
							/>
							{[1, 2, 3, 4].map((bar) => (
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
			</header>
		</div>
	);
};

export default NavBar;
