"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const SPREADSHEET_ID = "1ZiWU6a-0B4DFT4D91-KYt83-59HV7zsV";
const API_KEY = "AIzaSyA5CjgkyyOAt4gi7j6UUa1OXJs2CinhJw0";
const RANGE = "Sheet1!A1:D10";

interface GoogleSheetsResponse {
	values: string[][];
}

interface Event {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
}

const EventsList: React.FC = () => {
	const [sheetData, setSheetData] = useState<string[][]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`Error fetching data: ${response.statusText}`);
				}

				const result: GoogleSheetsResponse = await response.json();
				setSheetData(result.values || []);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	// Transform sheet data into events if needed
	const sheetEvents = useMemo(() => {
		if (!sheetData.length || sheetData.length <= 1) return []; // Skip header row
		return sheetData.slice(1).map((row, index) => ({
			id: `sheet-event-${index}-${row[0]?.substring(0, 5) || ""}`,
			title: row[0] || "No title",
			date: row[1] || "",
			location: row[2] || "",
			description: row[3] || "",
		}));
	}, [sheetData]);

	const allEvents = [...staticEvents, ...sheetEvents];

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

			{/* Google Sheets Data Section */}
			{isLoading ? (
				<div className="mb-8 text-center text-gray-300">Loading data...</div>
			) : error ? (
				<div className="mb-8">
					<h2 className="mb-4 font-semibold text-white text-xl">
						Google Sheets Data
					</h2>
					<p className="text-red-500">Error: {error}</p>
				</div>
			) : (
				sheetEvents.length > 0 && (
					<div className="mb-8">
						<h2 className="mb-4 font-semibold text-white text-xl">
							Google Sheets Data
						</h2>
						<ul className="space-y-4">{sheetEvents.map(renderEventItem)}</ul>
					</div>
				)
			)}

			{/* Events List Section */}
			<h2 className="mb-4 font-semibold text-white text-xl">Upcoming Events</h2>
			{allEvents.length > 0 ? (
				<ul className="space-y-6">{allEvents.map(renderEventItem)}</ul>
			) : (
				<p className="text-center text-gray-300">No upcoming events.</p>
			)}
		</div>
	);
};

export default EventsList;
