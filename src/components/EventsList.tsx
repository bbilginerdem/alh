"use client";

import Image from "next/image";

interface Event {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
	isRecurring?: boolean;
}

interface EventListProps {
	events: Event[];
}

export function EventsList({ events }: EventListProps) {
	// Generate next Wednesday event
	const getNextWednesdayEvent = (): Event | null => {
		const nextWednesday = new Date();
		nextWednesday.setDate(
			nextWednesday.getDate() + ((3 + 7 - nextWednesday.getDay()) % 7),
		);
		nextWednesday.setHours(20, 0, 0, 0);

		if (nextWednesday > new Date()) {
			return {
				id: `weekly-${nextWednesday.toISOString()}`,
				title: "Haftalık Lindy Hop Buluşması",
				date: nextWednesday.toISOString(),
				location:
					"Rasa Brasserie, Meşrutiyet, Selanik Caddesi, Raymar Hotel No:74, 06420 Çankaya/Ankara",
				description:
					"Ankara Lindy Hop haftalık dans buluşması. Yeni başlayanlar ve tüm seviyeler davetlidir!",
				imageUrl: "/images/events/weekly-event.png",
				isRecurring: true,
			};
		}
		return null;
	};

	const renderEventItem = (event: Event) => (
		<li
			key={event.id}
			className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.02] md:flex-row"
		>
			{event.imageUrl && (
				<div className="relative h-48 w-full md:h-auto md:w-1/3">
					<Image
						src={event.imageUrl}
						alt={`${event.title} etkinlik görseli`}
						fill
						className="object-cover"
						priority={event.id === "event-1"}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
				</div>
			)}
			<div className="flex-1 p-4 sm:p-6">
				<h2 className="mb-2 font-semibold text-xl text-zinc-100 sm:text-2xl">
					{event.title}
					{event.isRecurring && (
						<span className="ml-2 text-orange-300 text-sm">
							(Haftalık Etkinlik)
						</span>
					)}
				</h2>
				<p className="mb-2 text-zinc-300">
					<strong className="text-orange-300">Tarih:</strong>{" "}
					{new Date(event.date).toLocaleDateString("tr-TR", {
						year: "numeric",
						month: "long",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>
				<p className="mb-2 text-zinc-300">
					<strong className="text-orange-300">Konum:</strong> {event.location}
				</p>
				<p className="text-zinc-200">{event.description}</p>
			</div>
		</li>
	);

	const nextWednesdayEvent = getNextWednesdayEvent();
	const upcomingEvents = nextWednesdayEvent
		? [
				...events.filter((event) => new Date(event.date) > new Date()),
				nextWednesdayEvent,
			]
		: events.filter((event) => new Date(event.date) > new Date());

	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-8 text-center font-bold text-2xl text-zinc-100 sm:text-3xl">
				Yaklaşan Etkinlikler
			</h1>

			{upcomingEvents.length > 0 ? (
				<ul className="space-y-6">{upcomingEvents.map(renderEventItem)}</ul>
			) : (
				<p className="mb-12 text-center text-zinc-300">
					Yaklaşan etkinlik bulunmamaktadır.
				</p>
			)}

			{/* Add the featured events section */}
			<div className="mt-12">
				<h2 className="mb-8 text-center font-bold text-2xl text-zinc-100 sm:text-3xl">
					Öne Çıkan Etkinlikler
				</h2>
				<ul className="space-y-6">{events.map(renderEventItem)}</ul>
			</div>
		</div>
	);
}
