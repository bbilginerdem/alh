import type { Metadata } from "next";
import { EventsList } from "@/components/EventsList";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";
import { events } from "@/lib/data";

export const metadata: Metadata = {
	title: "Etkinlikler",
	description:
		"Ankara Lindy Hop topluluğunun yaklaşan dans partileri, atölyeleri ve swing etkinlikleri. Bize katılın ve dansın neşesini paylaşın.",
	openGraph: {
		title: "Etkinlikler | Ankara Lindy Hop",
		description:
			"Yaklaşan dans partileri, atölyeleri ve swing etkinliklerimizi takip edin.",
		url: "https://ankaralindyhop.org/etkinlikler",
	},
	alternates: {
		canonical: "/etkinlikler",
	},
};

const EventsPage: React.FC = () => {
	return (
		<CustomBlackLayout>
			<EventsList events={events} />
		</CustomBlackLayout>
	);
};

export default EventsPage;
