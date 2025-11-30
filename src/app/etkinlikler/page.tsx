import { EventsList } from "@/components/EventsList";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";
import { events } from "@/lib/data";

const EventsPage: React.FC = () => {
	return (
		<CustomBlackLayout>
			<EventsList events={events} />
		</CustomBlackLayout>
	);
};

export default EventsPage;
