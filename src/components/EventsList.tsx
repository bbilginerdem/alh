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

interface EventListProps {
	events: Event[];
}

export function EventsList({ events }: EventListProps) {
	const renderEventItem = (event: Event) => (
		<li
			key={event.id}
			className="overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.02]"
		>
			{event.imageUrl && (
				<div className="relative h-48 w-full">
					<Image
						src={event.imageUrl}
						alt={`${event.title} etkinlik görseli`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority={event.id === "event-1"} // Sadece ilk statik görsele öncelik ver
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
				</div>
			)}
			<div className="p-6">
				<h2 className="mb-2 font-semibold text-2xl text-zinc-100">
					{event.title}
				</h2>
				<p className="mb-2 text-zinc-300">
					<strong className="text-orange-300">Tarih:</strong>{" "}
					{event.date
						? new Date(event.date).toLocaleDateString("tr-TR", {
								year: "numeric",
								month: "long",
								day: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})
						: "Belirlenecek"}
				</p>
				<p className="mb-2 text-zinc-300">
					<strong className="text-orange-300">Konum:</strong>{" "}
					{event.location || "Duyurulacak"}
				</p>
				<p className="text-zinc-200">{event.description}</p>
			</div>
		</li>
	);

	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-8 text-center font-bold text-3xl text-zinc-100">
				Yaklaşan Etkinlikler
			</h1>

			{/* Etkinlik Listesi Bölümü */}
			<h2 className="mb-4 font-semibold text-xl text-zinc-100">
				Yaklaşan Etkinlikler
			</h2>
			{events.length > 0 ? (
				<ul className="space-y-6">{events.map(renderEventItem)}</ul>
			) : (
				<p className="text-center text-zinc-300">
					Yaklaşan etkinlik bulunmamaktadır.
				</p>
			)}
		</div>
	);
}
