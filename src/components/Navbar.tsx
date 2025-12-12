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
	const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	const navContainerRef = useRef<HTMLDivElement | null>(null);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);

	const hasNewBlog = posts.some((post) => isNewContent(post.publishDate));
	const hasNewEvent = events.some(
		(event) => isNewContent(event.date) && !event.id.startsWith("weekly-"),
	);

	useEffect(() => {
		if (!navContainerRef.current) return;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const isScrollingDown = currentScrollY > lastScrollY;

			setLastScrollY(currentScrollY);

			if (isDropdownOpen) {
				setIsNavVisible(true);
				navContainerRef.current?.classList.remove("floating-nav");
				return;
			}

			if (currentScrollY === 0) {
				setIsNavVisible(true);
				navContainerRef.current?.classList.remove("floating-nav");
			} else if (isScrollingDown && currentScrollY > 50) {
				setIsNavVisible(false);
				navContainerRef.current?.classList.add("floating-nav");
			} else if (!isScrollingDown) {
				setIsNavVisible(true);
				navContainerRef.current?.classList.add("floating-nav");
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY, isDropdownOpen]);

	useEffect(() => {
		if (!navContainerRef.current) return;

		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2,
		});
	}, [isNavVisible]);

	useEffect(() => {
		if (mobileMenuRef.current) {
			gsap.killTweensOf(mobileMenuRef.current);
			gsap.killTweensOf(".mobile-nav-item");
		}

		if (isDropdownOpen) {
			document.body.style.overflow = "hidden";

			const tl = gsap.timeline();

			tl.to(mobileMenuRef.current, {
				display: "block",
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				duration: 0.5,
				ease: "power4.inOut",
			});

			tl.fromTo(
				".mobile-nav-item",
				{
					y: 50,
					opacity: 0,
					skewY: 5,
				},
				{
					y: 0,
					opacity: 1,
					skewY: 0,
					duration: 0.4,
					stagger: 0.1,
					ease: "power3.out",
				},
				"-=0.2",
			);
		} else {
			document.body.style.overflow = "auto";

			const tl = gsap.timeline();

			tl.to(".mobile-nav-item", {
				y: 50,
				opacity: 0,
				duration: 0.3,
				stagger: 0.05,
				ease: "power3.in",
			});

			tl.to(
				mobileMenuRef.current,
				{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
					duration: 0.5,
					ease: "power4.inOut",
					onComplete: () => {
						if (mobileMenuRef.current) {
							mobileMenuRef.current.style.display = "none";
						}
					},
				},
				"-=0.1",
			);
		}
	}, [isDropdownOpen]);

	const toggleMenu = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div
			ref={navContainerRef}
			className={`fixed inset-x-0 top-0 z-50 h-24 border-none transition-colors duration-300 ${isDropdownOpen ? "bg-zinc-950" : ""}`}
		>
			<div className="-translate-y-1/2 absolute top-1/2 w-full">
				<nav className="relative z-50 flex size-full items-center justify-between px-8 lg:px-10 xl:px-16">
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

					<div className="flex h-full items-center">
						<button
							onClick={toggleMenu}
							className="relative z-50 md:hidden"
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

				<div
					ref={mobileMenuRef}
					className="absolute top-0 left-0 hidden h-screen w-screen bg-zinc-950 md:hidden"
					style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
				>
					<div className="flex h-full w-full flex-col items-center justify-center gap-6">
						{navItems.map((item: string) => {
							const showBadge =
								(item === "etkinlikler" && hasNewEvent) ||
								(item === "blog" && hasNewBlog);

							return (
								<Link
									key={generateSecureRandomId()}
									href={`/${navbarDirection(item).toLowerCase()}`}
									className="mobile-nav-item relative block font-bold text-4xl text-orange-300 tracking-tighter transition-colors hover:text-orange-200"
									onClick={() => setIsDropdownOpen(false)}
								>
									{item}
									{showBadge && (
										<span className="-right-4 -top-1 absolute flex h-3 w-3">
											<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
											<span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
										</span>
									)}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
