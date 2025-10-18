"use client";

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
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const navContainerRef = useRef<HTMLDivElement | null>(null);

	const { y: currentScrollY } = useWindowScroll();
	const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

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
			className={`fixed inset-x-0 top-0 z-40 h-24 border-none ${
				isDropdownOpen ? "bg-zinc-950/90" : ""
			}`}
		>
			<div className="-translate-y-1/2 absolute top-1/2 w-full">
				<nav className="flex size-full items-center justify-between px-8 lg:px-10 xl:px-16">
					{/* Logo and Home link */}
					<Link className="flex items-center" href="/">
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
					</div>
				</nav>

				{/* Dropdown Menu for Small Screens */}
				{isDropdownOpen && (
					<div className="absolute z-50 w-full border-zinc-800/50 border-t bg-zinc-950/90 backdrop-blur-sm md:hidden">
						<div className="flex flex-col items-center justify-center">
							{navItems.map((item: string) => (
								<Link
									key={uuidv4()}
									href={`/${navbarDirection(item).toLowerCase()}`}
									className="block px-3 py-4 font-medium text-orange-300 text-sm hover:bg-zinc-800/50"
									onClick={() => setIsDropdownOpen(false)}
								>
									{item}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
