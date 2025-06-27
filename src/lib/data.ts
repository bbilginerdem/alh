import { FrankieManningArticle } from "@/components/blog-posts/FrankieManningArticle";

export const posts = [
	{
		id: 1,
		title: "Frankie Manning: Lindy Hop'un Efsanevi Öncüsü",
		slug: "frankie-manning-lindy-hop",
		Content: FrankieManningArticle,
		image: "/images/posts/1.jpg",
	},
	{
		id: 2,
		title: "Building a Blog with Tailwind CSS",
		slug: "building-a-blog-with-tailwind",
		Content: FrankieManningArticle,
		image: "/images/posts/2",
	},
	{
		id: 3,
		title: "Getting Started with TypeScript",
		slug: "getting-started-with-typescript",
		Content: FrankieManningArticle,
		image: "/images/posts/3",
	},
];

export const events = [
	{
		id: "event-1",
		title: "Lindy Hop Workshop",
		date: "2023-12-15T18:00:00",
		location: "Swing Dance Studio, New York",
		description: "Join us for a fun-filled Lindy Hop workshop with live music!",
		imageUrl: "/images/events/1",
	},
	{
		id: "event-2",
		title: "Swing Dance Social",
		date: "2023-12-20T20:00:00",
		location: "The Jazz Club, Chicago",
		description: "Come dance the night away with fellow swing enthusiasts!",
		imageUrl: "/images/events/2",
	},
];
