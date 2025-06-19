"use client";

import { useEffect, useState } from "react";

const SPREADSHEET_ID = "1ZiWU6a-0B4DFT4D91-KYt83-59HV7zsV";
const API_KEY = "AIzaSyA5CjgkyyOAt4gi7j6UUa1OXJs2CinhJw0";
const RANGE = "Sheet1!A1:D10"; // Adjust range as needed

// Define the expected type for Google Sheets API response
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

				if (result.values) {
					setData(result.values);
				} else {
					throw new Error("No data found in the spreadsheet.");
				}
			} catch (err) {
				setError((err as Error).message);
			}
		};

		fetchData();
	});

	// Hardcoded events data
	const events: Event[] = [
		{
			id: "1",
			title: "Lindy Hop Workshop",
			date: "2023-12-15T18:00:00",
			location: "Swing Dance Studio, New York",
			description:
				"Join us for a fun-filled Lindy Hop workshop with live music!",
			imageUrl: "https://via.placeholder.com/600x400", // Placeholder image
		},
		{
			id: "2",
			title: "Swing Dance Social",
			date: "2023-12-20T20:00:00",
			location: "The Jazz Club, Chicago",
			description: "Come dance the night away with fellow swing enthusiasts!",
		},
	];

	return (
		<div className="mx-auto max-w-4xl px-4 py-8">
			<h1 className="mb-8 text-center font-bold text-3xl text-white">
				Gelecek Etkinlikler
			</h1>
			<div>
				<h2>Google Sheets Data</h2>
				{error ? (
					<p className="text-red-500">Error: {error}</p>
				) : (
					<ul>
						{data.map((row, index) => (
							<li key={index}>{row.join(", ")}</li>
						))}
					</ul>
				)}
			</div>

			{events.length > 0 ? (
				<ul className="space-y-6">
					{events.map((event) => (
						<li
							key={event.id}
							className="overflow-hidden rounded-lg bg-white shadow-lg"
						>
							{event.imageUrl && (
								<img
									src={event.imageUrl}
									alt={event.title}
									className="h-48 w-full object-cover"
								/>
							)}
							<div className="p-6">
								<h2 className="mb-2 font-semibold text-2xl text-gray-800">
									{event.title}
								</h2>
								<p className="mb-2 text-gray-600">
									<strong>Date:</strong>{" "}
									{new Date(event.date).toLocaleDateString()}
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
				<p className="text-center text-gray-600">No upcoming events.</p>
			)}
		</div>
	);
};

export default EventsList;
