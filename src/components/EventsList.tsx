"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { NewBadge } from "@/components/ui/NewBadge";
import { isNewContent } from "@/lib/blog-utils";

gsap.registerPlugin(ScrollTrigger);

interface Event {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
}

interface EventsListProps {
	events: Event[];
}

export function EventsList({ events }: Readonly<EventsListProps>) {
	const containerRef = useRef<HTMLDivElement>(null);

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

	const generateWeeklyEvent = (): Event => {
		const nextWednesday = new Date();
		nextWednesday.setDate(
			nextWednesday.getDate() + ((3 - nextWednesday.getDay() + 7) % 7),
		);
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
	};

	const formatEventDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("tr-TR", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const renderEventItem = (event: Event, isPast: boolean) => (
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
				<h2 className="mb-2 font-bold text-xl text-zinc-100 tracking-tight transition-colors duration-300 group-hover:text-orange-300 sm:text-2xl">
					{event.title}
				</h2>
				<p className="mb-2 font-medium text-zinc-300">
					<strong className="text-orange-300">Tarih:</strong>{" "}
					{formatEventDate(event.date)}
				</p>
				<p className="mb-2 font-medium text-zinc-300">
					<strong className="text-orange-300">Konum:</strong> {event.location}
				</p>
				<p className="font-light text-zinc-400 leading-relaxed">
					{event.description}
				</p>
			</div>
		</li>
	);

	const currentDate = new Date();
	const pastEvents = events.filter(
		(event) => new Date(event.date) < currentDate,
	);
	const futureEvents = events.filter(
		(event) => new Date(event.date) >= currentDate,
	);

	const weeklyEvent = generateWeeklyEvent();
	const allFutureEvents = [...futureEvents, weeklyEvent];

	return (
		<div className="mx-auto max-w-4xl px-4 py-8" ref={containerRef}>
			<div className="mb-8 overflow-hidden">
				<h1 className="events-header text-center font-bold text-3xl text-zinc-100 uppercase tracking-tighter sm:text-4xl">
					Yaklaşan Etkinlikler
				</h1>
			</div>

			<ul className="future-events-list space-y-6">
				{allFutureEvents
					.toSorted(
						(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
					)
					.map((event) => renderEventItem(event, false))}
			</ul>

			<div className="calendar-link-card mt-8">
				<a
					href="https://www.swing-out.com/turkiye/ankara"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-orange-500/20 bg-linear-to-r from-orange-500/5 to-purple-500/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-orange-400/50 hover:bg-white/5 hover:shadow-2xl hover:shadow-orange-500/20"
				>
					<div className="absolute inset-0 bg-linear-to-r from-orange-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

					<div className="relative z-10 flex items-center gap-6">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-400/20 group-hover:text-orange-300">
							<Calendar className="h-6 w-6" />
						</div>
						<div>
							<h3 className="font-bold text-xl text-zinc-100 tracking-tight transition-colors group-hover:text-orange-300 sm:text-2xl">
								Ankara Dans Takvimi
							</h3>
							<p className="mt-1 font-medium text-zinc-400 transition-colors group-hover:text-zinc-300">
								Tüm swing etkinliklerini ve daha fazlasini görüntüleyin
							</p>
						</div>
					</div>

					<div className="relative z-10 ml-4 rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 group-hover:text-orange-300">
						<ExternalLink className="h-5 w-5" />
					</div>
				</a>
			</div>

			{pastEvents.length > 0 && (
				<section className="mt-16">
					<div className="mb-8 overflow-hidden">
						<h1 className="events-header text-center font-bold text-3xl text-zinc-100 uppercase tracking-tighter sm:text-4xl">
							Geçmiş Etkinlikler
						</h1>
					</div>
					<ul className="past-events-list space-y-6">
						{pastEvents.map((event) => renderEventItem(event, true))}
					</ul>
				</section>
			)}
		</div>
	);
}
