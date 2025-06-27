import { EventsList } from "@/components/EventsList";
import { events } from "@/lib/data";
import CustomBlackLayout from "../../components/ui/CustomBlackLayout";

const EventsPage: React.FC = () => {
	return (
		<CustomBlackLayout>
			<EventsList events={events} />
		</CustomBlackLayout>
	);
};

export default EventsPage;
