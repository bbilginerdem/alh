"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NewBadge } from "@/components/ui/NewBadge";
import { isNewContent } from "@/lib/blog-utils";

gsap.registerPlugin(ScrollTrigger);

interface DanceEvent {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
}

interface EventsListProps {
	events: DanceEvent[];
}

const INITIAL_BATCH_COUNT = 4;
const BATCH_SIZE = 3;

function generateWeeklyEvent(): DanceEvent {
	const nextWednesday = new Date();
	nextWednesday.setDate(nextWednesday.getDate() + ((3 - nextWednesday.getDay() + 7) % 7));
	nextWednesday.setHours(20, 0, 0, 0);

	const now = new Date();
	if (now.getDay() === 3 && now.getHours() >= 20) {
		nextWednesday.setDate(nextWednesday.getDate() + 7);
	}

	return {
		id: `weekly-${nextWednesday.getTime()}`,
		title: "Ankara Lindy Hop - Pratik & Parti",
		date: nextWednesday.toISOString(),
		location:
			"Rasa Brasserie, Meşrutiyet, Selanik Caddesi, Raymar Hotel No:74, 06420 Çankaya/Ankara",
		description:
			"Ankara Lindy Hop haftalık dans buluşması. Yeni başlayanlar ve tüm seviyeler davetlidir!",
		imageUrl: "/images/events/weekly-event.webp",
	};
}

export function EventsList({ events }: Readonly<EventsListProps>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const pastSentinelRef = useRef<HTMLDivElement>(null);
	const futureSentinelRef = useRef<HTMLDivElement>(null);

	const [visiblePastCount, setVisiblePastCount] = useState(INITIAL_BATCH_COUNT);
	const [isLoadingPast, setIsLoadingPast] = useState(false);
	const isLoadingPastRef = useRef(false);
	const prevPastCountRef = useRef(INITIAL_BATCH_COUNT);
	const pastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const [visibleFutureCount, setVisibleFutureCount] = useState(INITIAL_BATCH_COUNT);
	const [isLoadingFuture, setIsLoadingFuture] = useState(false);
	const isLoadingFutureRef = useRef(false);
	const prevFutureCountRef = useRef(INITIAL_BATCH_COUNT);
	const futureTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const { sortedFutureEvents, sortedPastEvents } = useMemo(() => {
		const currentDate = new Date();
		const past = events
			.filter((event) => new Date(event.date) < currentDate)
			.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		const future = events.filter((event) => new Date(event.date) >= currentDate);
		const weekly = generateWeeklyEvent();
		const allFuture = [...future, weekly].toSorted(
			(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
		);

		return {
			sortedFutureEvents: allFuture,
			sortedPastEvents: past,
		};
	}, [events]);

	// Initial GSAP context and entrance animations
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".events-header",
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
					ease: "power4.out",
				},
			);

			ScrollTrigger.batch(".future-event-item", {
				onEnter: (batch) => {
					gsap.fromTo(
						batch,
						{
							y: 60,
							opacity: 0,
							skewY: 5,
						},
						{
							y: 0,
							opacity: 1,
							skewY: 0,
							duration: 0.8,
							stagger: 0.15,
							ease: "expo.out",
							overwrite: true,
						},
					);
				},
				start: "top 90%",
				once: true,
			});

			gsap.fromTo(
				".calendar-link-card",
				{
					y: 60,
					opacity: 0,
					scale: 0.95,
				},
				{
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.8,
					ease: "back.out(1.7)",
					scrollTrigger: {
						trigger: ".calendar-link-card",
						start: "top 95%",
						once: true,
					},
				},
			);

			ScrollTrigger.batch(".past-event-item", {
				onEnter: (batch) => {
					gsap.fromTo(
						batch,
						{
							y: 60,
							opacity: 0,
							skewY: 5,
						},
						{
							y: 0,
							opacity: 1,
							skewY: 0,
							duration: 0.8,
							stagger: 0.15,
							ease: "expo.out",
							overwrite: true,
						},
					);
				},
				start: "top 90%",
				once: true,
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	// Animate newly added past events
	useEffect(() => {
		if (visiblePastCount > prevPastCountRef.current) {
			const container = containerRef.current;
			if (container) {
				const allPastItems = container.querySelectorAll(".past-event-item");
				const newItems = Array.from(allPastItems).slice(prevPastCountRef.current, visiblePastCount);
				if (newItems.length > 0) {
					gsap.fromTo(
						newItems,
						{
							y: 50,
							opacity: 0,
							skewY: 4,
						},
						{
							y: 0,
							opacity: 1,
							skewY: 0,
							duration: 0.7,
							stagger: 0.12,
							ease: "expo.out",
							overwrite: true,
						},
					);
				}
			}
			prevPastCountRef.current = visiblePastCount;
			ScrollTrigger.refresh();
		}
	}, [visiblePastCount]);

	// Animate newly added future events
	useEffect(() => {
		if (visibleFutureCount > prevFutureCountRef.current) {
			const container = containerRef.current;
			if (container) {
				const allFutureItems = container.querySelectorAll(".future-event-item");
				const newItems = Array.from(allFutureItems).slice(
					prevFutureCountRef.current,
					visibleFutureCount,
				);
				if (newItems.length > 0) {
					gsap.fromTo(
						newItems,
						{
							y: 50,
							opacity: 0,
							skewY: 4,
						},
						{
							y: 0,
							opacity: 1,
							skewY: 0,
							duration: 0.7,
							stagger: 0.12,
							ease: "expo.out",
							overwrite: true,
						},
					);
				}
			}
			prevFutureCountRef.current = visibleFutureCount;
			ScrollTrigger.refresh();
		}
	}, [visibleFutureCount]);

	// Load more past events handler
	const loadMorePast = useCallback(() => {
		if (isLoadingPastRef.current || visiblePastCount >= sortedPastEvents.length) return;
		isLoadingPastRef.current = true;
		setIsLoadingPast(true);

		pastTimeoutRef.current = setTimeout(() => {
			setVisiblePastCount((prev) => Math.min(prev + BATCH_SIZE, sortedPastEvents.length));
			isLoadingPastRef.current = false;
			setIsLoadingPast(false);
		}, 300);
	}, [visiblePastCount, sortedPastEvents.length]);

	// Infinite scroll observer for past events
	useEffect(() => {
		const sentinel = pastSentinelRef.current;
		if (!sentinel || visiblePastCount >= sortedPastEvents.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry?.isIntersecting) {
					loadMorePast();
				}
			},
			{
				rootMargin: "200px 0px",
				threshold: 0.1,
			},
		);

		observer.observe(sentinel);
		return () => {
			observer.disconnect();
		};
	}, [visiblePastCount, sortedPastEvents.length, loadMorePast]);

	// Load more future events handler
	const loadMoreFuture = useCallback(() => {
		if (isLoadingFutureRef.current || visibleFutureCount >= sortedFutureEvents.length) return;
		isLoadingFutureRef.current = true;
		setIsLoadingFuture(true);

		futureTimeoutRef.current = setTimeout(() => {
			setVisibleFutureCount((prev) => Math.min(prev + BATCH_SIZE, sortedFutureEvents.length));
			isLoadingFutureRef.current = false;
			setIsLoadingFuture(false);
		}, 300);
	}, [visibleFutureCount, sortedFutureEvents.length]);

	// Infinite scroll observer for future events
	useEffect(() => {
		const sentinel = futureSentinelRef.current;
		if (!sentinel || visibleFutureCount >= sortedFutureEvents.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry?.isIntersecting) {
					loadMoreFuture();
				}
			},
			{
				rootMargin: "200px 0px",
				threshold: 0.1,
			},
		);

		observer.observe(sentinel);
		return () => {
			observer.disconnect();
		};
	}, [visibleFutureCount, sortedFutureEvents.length, loadMoreFuture]);

	// Timeout cleanup on unmount
	useEffect(() => {
		return () => {
			if (pastTimeoutRef.current) clearTimeout(pastTimeoutRef.current);
			if (futureTimeoutRef.current) clearTimeout(futureTimeoutRef.current);
		};
	}, []);

	const formatEventDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("tr-TR", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const renderEventItem = (event: DanceEvent, isPast: boolean) => (
		<li
			key={event.id}
			className={`${
				isPast ? "past-event-item" : "future-event-item"
			} group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-orange-300/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-300/10 md:flex-row`}
		>
			{isNewContent(event.date) && !event.id.startsWith("weekly-") && (
				<div className="absolute top-4 right-4 z-10">
					<NewBadge />
				</div>
			)}

			{event.imageUrl && (
				<div className="relative h-48 w-full overflow-hidden md:h-auto md:w-1/3">
					<Image
						src={event.imageUrl}
						alt={`${event.title} etkinlik görseli`}
						fill
						className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, 33vw"
						quality={90}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:bg-linear-to-r" />
				</div>
			)}
			<div className="flex-1 p-4 sm:p-6">
				<h2 className="mb-2 text-xl font-bold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-orange-300 sm:text-2xl">
					{event.title}
				</h2>
				<p className="mb-2 font-medium text-zinc-300">
					<strong className="text-orange-300">Tarih:</strong> {formatEventDate(event.date)}
				</p>
				<p className="mb-2 font-medium text-zinc-300">
					<strong className="text-orange-300">Konum:</strong> {event.location}
				</p>
				<p className="leading-relaxed font-light text-zinc-400">{event.description}</p>
			</div>
		</li>
	);

	const visibleFutureEvents = sortedFutureEvents.slice(0, visibleFutureCount);
	const hasMoreFuture = visibleFutureCount < sortedFutureEvents.length;

	const visiblePastEvents = sortedPastEvents.slice(0, visiblePastCount);
	const hasMorePast = visiblePastCount < sortedPastEvents.length;

	return (
		<div className="mx-auto max-w-4xl px-4 py-8" ref={containerRef}>
			<div className="mb-8 overflow-hidden">
				<h1 className="events-header text-center text-3xl font-bold tracking-tighter text-zinc-100 uppercase sm:text-4xl">
					Yaklaşan Etkinlikler
				</h1>
			</div>

			<ul className="future-events-list space-y-6">
				{visibleFutureEvents.map((event) => renderEventItem(event, false))}
			</ul>

			{hasMoreFuture && (
				<div
					ref={futureSentinelRef}
					className="mt-6 flex flex-col items-center justify-center py-4"
				>
					{isLoadingFuture ? (
						<div className="flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2.5 text-orange-300 backdrop-blur-xs">
							<Loader2 className="h-5 w-5 animate-spin text-orange-400" />
							<span className="text-sm font-medium text-zinc-300">
								Daha fazla etkinlik yükleniyor...
							</span>
						</div>
					) : (
						<button
							type="button"
							onClick={loadMoreFuture}
							className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-xs transition-all duration-300 hover:border-orange-400/40 hover:bg-white/10 hover:text-orange-300 hover:shadow-lg hover:shadow-orange-500/10 focus:ring-2 focus:ring-orange-400/50 focus:outline-hidden"
						>
							<span>Daha Fazla Yaklaşan Etkinlik</span>
							<span className="text-xs text-zinc-500 group-hover:text-orange-300/80">
								({sortedFutureEvents.length - visibleFutureCount} kaldı)
							</span>
						</button>
					)}
				</div>
			)}

			<div className="calendar-link-card mt-8">
				<a
					href="https://swing-out.com/turkiye/ankara/calendar"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-orange-500/20 bg-linear-to-r from-orange-500/5 to-purple-500/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-orange-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/20"
				>
					<div className="absolute inset-0 bg-linear-to-r from-orange-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

					<div className="relative z-10 flex items-center gap-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-400/20 group-hover:text-orange-300">
							<Calendar className="h-6 w-6" />
						</div>
						<div>
							<h3 className="text-xl font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-orange-300 sm:text-2xl">
								Ankara Dans Takvimi
							</h3>
							<p className="mt-1 font-medium text-zinc-400 transition-colors group-hover:text-zinc-300">
								Tüm swing etkinliklerini ve daha fazlasını görüntüleyin
							</p>
						</div>
					</div>

					<div className="relative z-10 ml-4 rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 group-hover:text-orange-300">
						<ExternalLink className="h-5 w-5" />
					</div>
				</a>
			</div>

			{sortedPastEvents.length > 0 && (
				<section className="mt-16">
					<div className="mb-8 overflow-hidden">
						<h1 className="events-header text-center text-3xl font-bold tracking-tighter text-zinc-100 uppercase sm:text-4xl">
							Geçmiş Etkinlikler
						</h1>
					</div>
					<ul className="past-events-list space-y-6">
						{visiblePastEvents.map((event) => renderEventItem(event, true))}
					</ul>

					{hasMorePast && (
						<div
							ref={pastSentinelRef}
							className="mt-8 flex flex-col items-center justify-center py-6"
						>
							{isLoadingPast ? (
								<div className="flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2.5 text-orange-300 backdrop-blur-xs">
									<Loader2 className="h-5 w-5 animate-spin text-orange-400" />
									<span className="text-sm font-medium text-zinc-300">
										Daha fazla etkinlik yükleniyor...
									</span>
								</div>
							) : (
								<button
									type="button"
									onClick={loadMorePast}
									className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-xs transition-all duration-300 hover:border-orange-400/40 hover:bg-white/10 hover:text-orange-300 hover:shadow-lg hover:shadow-orange-500/10 focus:ring-2 focus:ring-orange-400/50 focus:outline-hidden"
								>
									<span>Daha Fazla Geçmiş Etkinlik</span>
									<span className="text-xs text-zinc-500 group-hover:text-orange-300/80">
										({sortedPastEvents.length - visiblePastCount} kaldı)
									</span>
								</button>
							)}
						</div>
					)}

					{!hasMorePast && sortedPastEvents.length > INITIAL_BATCH_COUNT && (
						<div className="mt-8 py-4 text-center">
							<p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
								Tüm geçmiş etkinlikler yüklendi
							</p>
						</div>
					)}
				</section>
			)}
		</div>
	);
}
