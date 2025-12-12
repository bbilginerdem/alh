"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export default function NotFound() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();

			tl.fromTo(
				".not-found-code",
				{
					y: 100,
					opacity: 0,
					skewY: 10,
					clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
				},
				{
					y: 0,
					opacity: 1,
					skewY: 0,
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					duration: 1.2,
					ease: "power4.out",
				},
			);

			tl.fromTo(
				[".not-found-title", ".not-found-desc", ".not-found-btn"],
				{
					y: 40,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.1,
					ease: "power3.out",
				},
				"-=0.8",
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<CustomBlackLayout>
			<div
				ref={containerRef}
				className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4"
			>
				<div className="overflow-hidden">
					<h1 className="not-found-code mb-2 font-bold text-8xl text-orange-300 leading-none tracking-tighter md:text-9xl">
						404
					</h1>
				</div>
				<h2 className="not-found-title mt-6 mb-4 text-center font-bold text-2xl text-zinc-100 md:text-4xl">
					Sayfa Bulunamadı
				</h2>
				<p className="not-found-desc mb-10 max-w-md text-center text-lg text-zinc-400 leading-relaxed">
					Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
				</p>
				<Link
					href="/"
					className="not-found-btn group relative overflow-hidden rounded-full bg-orange-300 px-8 py-3 font-bold text-zinc-950 transition-transform duration-300 hover:scale-105"
				>
					<span className="relative z-10">Ana Sayfaya Dön</span>
					<div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</Link>
			</div>
		</CustomBlackLayout>
	);
}
