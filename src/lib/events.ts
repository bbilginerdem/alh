import { absoluteUrl, SITE_URL } from "@/lib/site";

export interface DanceEvent {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
}

export function generateWeeklyEvent(): DanceEvent {
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

export function getUpcomingEvents(events: DanceEvent[]): DanceEvent[] {
	const now = new Date();
	const scheduled = events.filter((event) => new Date(event.date) >= now);

	return [...scheduled, generateWeeklyEvent()].toSorted(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	);
}

// Dates in data.ts are local wall-clock times with no offset; Ankara is UTC+3 year-round.
function withAnkaraOffset(dateString: string): string {
	return /(Z|[+-]\d{2}:\d{2})$/.test(dateString) ? dateString : `${dateString}+03:00`;
}

export function generateEventsStructuredData(events: DanceEvent[]) {
	return getUpcomingEvents(events).map((event) => ({
		"@context": "https://schema.org",
		"@type": "DanceEvent",
		name: event.title,
		description: event.description,
		startDate: withAnkaraOffset(event.date),
		eventStatus: "https://schema.org/EventScheduled",
		eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
		location: {
			"@type": "Place",
			name: event.location,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Ankara",
				addressCountry: "TR",
			},
		},
		image: event.imageUrl ? [absoluteUrl(event.imageUrl)] : undefined,
		organizer: {
			"@type": "Organization",
			name: "Ankara Lindy Hop",
			url: SITE_URL,
		},
	}));
}
