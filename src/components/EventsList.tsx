"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
	const [data, setData] = useState<string[][]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`Error fetching data: ${response.statusText}`);
				}

				const result: GoogleSheetsResponse = await response.json();
				setData(result.values || []);
			} catch (err) {
				setError((err as Error).message);
			}
		};

		fetchData();
	}, []);

	const events: Event[] = [
		{
			id: "1",
			title: "Lindy Hop Workshop",
			date: "2023-12-15T18:00:00",
			location: "Swing Dance Studio, New York",
			description:
				"Join us for a fun-filled Lindy Hop workshop with live music!",
			imageUrl: "/images/hero-1.webp", // Changed to local path
		},
		{
			id: "2",
			title: "Swing Dance Social",
			date: "2023-12-20T20:00:00",
			location: "The Jazz Club, Chicago",
			description: "Come dance the night away with fellow swing enthusiasts!",
			imageUrl: "/images/hero-2.webp", // Changed to local path
		},
	];

	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-8 text-center font-bold text-3xl text-white">
				Gelecek Etkinlikler
			</h1>

			{/* Google Sheets Data Section */}
			<div className="mb-8">
				<h2 className="mb-4 font-semibold text-white text-xl">
					Google Sheets Data
				</h2>
				{error ? (
					<p className="text-red-500">Error: {error}</p>
				) : (
					<ul className="space-y-2">
						{data.map((row, i) => (
							<li key={`row-${i}`} className="text-gray-300">
								{row.join(", ")}
							</li>
						))}
					</ul>
				)}
			</div>

			{/* Events List Section */}
			{events.length > 0 ? (
				<ul className="space-y-6">
					{events.map((event) => (
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
										priority={event.id === "1"} // Only prioritize first image
									/>
								</div>
							)}
							<div className="p-6">
								<h2 className="mb-2 font-semibold text-2xl text-gray-800">
									{event.title}
								</h2>
								<p className="mb-2 text-gray-600">
									<strong>Date:</strong>{" "}
									{new Date(event.date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
										hour: "2-digit",
										minute: "2-digit",
									})}
								</p>
								<p className="mb-2 text-gray-600">
									<strong>Location:</strong> {event.location}
								</p>
								<p className="text-gray-700">{event.description}</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p className="text-center text-gray-300">No upcoming events.</p>
			)}
		</div>
	);
};

export default EventsList;
