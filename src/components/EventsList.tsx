"use client";

import Image from "next/image";

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
	// Generate next Wednesday event
	const generateWeeklyEvent = (): Event => {
		const nextWednesday = new Date();
		nextWednesday.setDate(
			nextWednesday.getDate() + ((3 - nextWednesday.getDay() + 7) % 7),
		);
		nextWednesday.setHours(20, 0, 0, 0);

		// If today is Wednesday and past 8 PM, get next Wednesday
		const now = new Date();
		if (now.getDay() === 3 && now.getHours() >= 20) {
			nextWednesday.setDate(nextWednesday.getDate() + 7);
		}

		return {
			id: `weekly-${nextWednesday.getTime()}`,
			title: "Haftalık Lindy Hop Buluşması",
			date: nextWednesday.toISOString(),
			location:
				"Rasa Brasserie, Meşrutiyet, Selanik Caddesi, Raymar Hotel No:74, 06420 Çankaya/Ankara",
			description:
				"Ankara Lindy Hop haftalık dans buluşması. Yeni başlayanlar ve tüm seviyeler davetlidir!",
			imageUrl: "/images/events/weekly-event.png",
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

	const renderEventItem = (event: Event) => (
		<li
			key={event.id}
			className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:flex-row"
		>
			{event.imageUrl && (
				<div className="relative h-48 w-full md:h-auto md:w-1/3">
					<Image
						src={event.imageUrl}
						alt={`${event.title} etkinlik görseli`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						quality={90}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
				</div>
			)}
			<div className="flex-1 p-4 sm:p-6">
				<h2 className="mb-2 font-semibold text-xl text-zinc-100 sm:text-2xl">
					{event.title}
				</h2>
				<p className="mb-2 text-zinc-300">
					<strong className="text-orange-300">Tarih:</strong>{" "}
					{formatEventDate(event.date)}
				</p>
				<p className="mb-2 text-zinc-300">
					<strong className="text-orange-300">Konum:</strong> {event.location}
				</p>
				<p className="text-zinc-200">{event.description}</p>
			</div>
		</li>
	);

	// Categorize events
	const currentDate = new Date();
	const pastEvents = events.filter(
		(event) => new Date(event.date) < currentDate,
	);
	const futureEvents = events.filter(
		(event) => new Date(event.date) >= currentDate,
	);

	// Add weekly event to future events
	const weeklyEvent = generateWeeklyEvent();
	const allFutureEvents = [...futureEvents, weeklyEvent];

	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-8 text-center font-bold text-2xl text-zinc-100 sm:text-3xl">
				Yaklaşan Etkinlikler
			</h1>

			<ul className="space-y-6">
				{allFutureEvents
					.toSorted(
						(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
					)
					.map(renderEventItem)}
			</ul>

			{pastEvents.length > 0 && (
				<section className="mt-16">
					<h2 className="mb-8 text-center font-bold text-2xl text-zinc-100 sm:text-3xl">
						Geçmiş Etkinlikler
					</h2>
					<ul className="space-y-6">{pastEvents.map(renderEventItem)}</ul>
				</section>
			)}
		</div>
	);
}
