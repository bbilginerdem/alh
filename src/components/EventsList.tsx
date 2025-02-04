interface Event {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	imageUrl?: string;
}

const EventsList: React.FC = () => {
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
			<h1 className="mb-8 text-center font-bold text-3xl text-gray-800">
				Upcoming Lindy Hop Events
			</h1>
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