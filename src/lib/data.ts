import FrankieManning from "@/components/blog-posts/FrankieManning";
import NormaMiller from "@/components/blog-posts/NormaMiller";

export const posts = [
	{
		id: 1,
		title: "Frankie Manning: Lindy Hop'un Efsanevi Öncüsü",
		slug: "frankie-manning-lindy-hop",
		Content: FrankieManning,
		image: "/images/posts/1.jpg",
	},
	{
		id: 2,
		title: "Norma Miller: Lindy Hop'un Kraliçesi",
		slug: "norma-miller-lindy-hop",
		Content: NormaMiller,
		image: "/images/posts/2.jpg",
	},
];

export const events = [
	{
		id: "event-1",
		title: "Lindy Hop Partisi",
		date: "2023-12-15T18:00:00",
		location: "Swing Dans Stüdyosu, Ankara",
		description:
			"Canlı müzik eşliğinde eğlenceli bir Lindy Hop partisine katılın!",
		imageUrl: "/images/events/1.jpg",
	},
	{
		id: "event-2",
		title: "Swing Dans Gecesi",
		date: "2023-12-20T20:00:00",
		location: "Caz Kulübü, Ankara",
		description: "Swing severlerle birlikte gece boyunca dans etmeye gelin!",
		imageUrl: "/images/events/2.jpg",
	},
];
