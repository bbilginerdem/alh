"use client";

import Image from "next/image";
import { useMemo } from "react";

interface Event {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
}

const EventsList: React.FC = () => {
	// Static events data with proper unique IDs
	const staticEvents: Event[] = useMemo(
		() => [
			{
				id: "event-1",
				title: "Lindy Hop Workshop",
				date: "2023-12-15T18:00:00",
				location: "Swing Dance Studio, New York",
				description:
					"Join us for a fun-filled Lindy Hop workshop with live music!",
				imageUrl: "/images/hero-1.webp",
			},
			{
				id: "event-2",
				title: "Swing Dance Social",
				date: "2023-12-20T20:00:00",
				location: "The Jazz Club, Chicago",
				description: "Come dance the night away with fellow swing enthusiasts!",
				imageUrl: "/images/hero-2.webp",
			},
		],
		[],
	);

	const renderEventItem = (event: Event) => (
		<li
			key={event.id}
			className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.02]"
		>
			{event.imageUrl && (
				<div className="relative h-48 w-full">
					<Image
						src={event.imageUrl}
						alt={`${event.title} event cover`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority={event.id === "event-1"} // Only prioritize first static image
					/>
				</div>
			)}
			<div className="p-6">
				<h2 className="mb-2 font-semibold text-2xl text-gray-800">
					{event.title}
				</h2>
				<p className="mb-2 text-gray-600">
					<strong>Date:</strong>{" "}
					{event.date
						? new Date(event.date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})
						: "TBD"}
				</p>
				<p className="mb-2 text-gray-600">
					<strong>Location:</strong> {event.location || "To be announced"}
				</p>
				<p className="text-gray-700">{event.description}</p>
			</div>
		</li>
	);

	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-8 text-center font-bold text-3xl text-white">
				Gelecek Etkinlikler
			</h1>

			{/* Events List Section */}
			<h2 className="mb-4 font-semibold text-white text-xl">Upcoming Events</h2>
			{staticEvents.length > 0 ? (
				<ul className="space-y-6">{staticEvents.map(renderEventItem)}</ul>
			) : (
				<p className="text-center text-gray-300">No upcoming events.</p>
			)}
		</div>
	);
};

export default EventsList;
