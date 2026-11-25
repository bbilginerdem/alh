import type { Metadata } from "next";
import { EventsList } from "@/components/EventsList";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";
import { events } from "@/lib/data";
import { generateEventsStructuredData } from "@/lib/events";

// Keeps the DanceEvent JSON-LD's upcoming/past split accurate without giving up caching.
export const revalidate = 3600;

export const metadata: Metadata = {
	title: "Etkinlikler",
	description:
		"Ankara Lindy Hop topluluğunun yaklaşan dans partileri, atölyeleri ve swing etkinlikleri. Bize katılın ve dansın neşesini paylaşın.",
	openGraph: {
		title: "Etkinlikler | Ankara Lindy Hop",
		description: "Yaklaşan dans partileri, atölyeleri ve swing etkinliklerimizi takip edin.",
		url: "/etkinlikler",
	},
	alternates: {
		canonical: "/etkinlikler",
	},
};

const EventsPage: React.FC = () => {
	return (
		<CustomBlackLayout>
			<script
				id="events-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateEventsStructuredData(events)),
				}}
			/>
			<EventsList events={events} />
		</CustomBlackLayout>
	);
};

export default EventsPage;
