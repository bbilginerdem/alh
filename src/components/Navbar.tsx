"use client";

import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { isNewContent } from "@/lib/blog-utils";
import { events, posts } from "@/lib/data";
import { generateSecureRandomId, navbarDirection } from "@/lib/utils";

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

	// Check if there are new blogs or events
	const hasNewBlog = posts.some((post) => isNewContent(post.publishDate));
	const hasNewEvent = events.some(
		(event) => isNewContent(event.date) && !event.id.startsWith("weekly-"),
	);

	const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	useEffect(() => {
		if (!navContainerRef.current) return;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const isScrollingDown = currentScrollY > lastScrollY;

			// Update lastScrollY for next event
			setLastScrollY(currentScrollY);

			if (currentScrollY === 0) {
				setIsNavVisible(true);
				navContainerRef.current?.classList.remove("floating-nav");
			} else if (isScrollingDown && currentScrollY > 50) {
				// Add threshold
				setIsNavVisible(false);
				navContainerRef.current?.classList.add("floating-nav");
			} else if (!isScrollingDown) {
				setIsNavVisible(true);
				navContainerRef.current?.classList.add("floating-nav");
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

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
							{navItems.map((item: string) => {
								const showBadge =
									(item === "etkinlikler" && hasNewEvent) ||
									(item === "blog" && hasNewBlog);

								return (
									<Link
										key={generateSecureRandomId()}
										href={`/${navbarDirection(item).toLowerCase()}`}
										className="nav-hover-btn relative font-medium text-sm transition-colors hover:text-orange-300"
									>
										{item}
										{showBadge && (
											<span className="-top-1 -right-2 absolute flex h-2 w-2">
												<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-50 opacity-75" />
												<span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-100" />
											</span>
										)}
									</Link>
								);
							})}
						</div>
					</div>
				</nav>

				{/* Dropdown Menu for Small Screens */}
				{isDropdownOpen && (
					<div className="absolute z-50 w-full border-zinc-800/50 border-t bg-zinc-950/90 backdrop-blur-sm md:hidden">
						<div className="flex flex-col items-center justify-center">
							{navItems.map((item: string) => {
								const showBadge =
									(item === "etkinlikler" && hasNewEvent) ||
									(item === "blog" && hasNewBlog);

								return (
									<Link
										key={generateSecureRandomId()}
										href={`/${navbarDirection(item).toLowerCase()}`}
										className="relative block px-3 py-4 font-medium text-orange-300 text-sm hover:bg-zinc-800/50"
										onClick={() => setIsDropdownOpen(false)}
									>
										{item}
										{showBadge && (
											<span className="-right-1 absolute top-4 flex h-2 w-2">
												<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
												<span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
											</span>
										)}
									</Link>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
