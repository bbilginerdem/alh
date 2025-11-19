import CountBasie from "@/components/blog/posts/CountBasie";
import DukeEllington from "@/components/blog/posts/DukeEllington";
import EarlHines from "@/components/blog/posts/EarlHines";
import FrankieManning from "@/components/blog/posts/FrankieManning";
import LindyHopHistory from "@/components/blog/posts/LindyHopHistory";
import NormaMiller from "@/components/blog/posts/NormaMiller";
import TommyDorsey from "@/components/blog/posts/TommyDorsey";
import type { BlogMetadata } from "@/types/blog";

export const posts: BlogMetadata[] = [
	{
		id: 1,
		title: "Frankie Manning: Lindy Hop'un Efsanevi Öncüsü",
		slug: "frankie-manning-lindy-hop",
		publishDate: "2025-01-15T10:00:00Z",
		author: "Behzat Bilgin Erdem",
		excerpt:
			"Dans tarihinin en etkileyici figürlerinden Frankie Manning'in hikayesi ve Lindy Hop'a kattığı devrimci aerial hareketleri keşfedin.",
		readingTime: 2,
		tags: [
			"Frankie Manning",
			"Lindy Hop",
			"Swing Dansı",
			"Dans Tarihi",
			"Savoy Ballroom",
		],
		category: "Dans Tarihi",
		image: "/images/blogs/1.jpg",
		imageAlt: "Frankie Manning Lindy Hop yaparken tarihi fotoğraf",
		seo: {
			metaDescription:
				"Frankie Manning'in Lindy Hop'a kattığı aerial hareketler ve dans tarihindeki etkisi. Savoy Ballroom'dan Hollywood'a uzanan efsanevi hikaye.",
			keywords: [
				"Frankie Manning",
				"Lindy Hop",
				"swing dansı",
				"aerial hareketler",
				"Savoy Ballroom",
				"dans tarihi",
				"Whitey's Lindy Hoppers",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/frankie-manning-lindy-hop",
		},
		lastModified: "2025-02-10T14:30:00Z",
		featured: true,
		Content: FrankieManning,
	},
	{
		id: 2,
		title: "Norma Miller: Lindy Hop'un Kraliçesi",
		slug: "norma-miller-lindy-hop",
		publishDate: "2025-01-20T09:00:00Z",
		author: "Behzat Bilgin Erdem",
		excerpt:
			"Lindy Hop'un kraliçesi Norma Miller'ın cesur kişiliği ve dans dünyasına kattığı yenilikçi yaklaşımı keşfedin.",
		readingTime: 3,
		tags: [
			"Norma Miller",
			"Lindy Hop",
			"Kadın Dansçılar",
			"Swing Era",
			"Harlem",
		],
		category: "Dans Tarihi",
		image: "/images/blogs/2.jpg",
		imageAlt: "Norma Miller dans ederken tarihi fotoğraf",
		seo: {
			metaDescription:
				"Norma Miller'ın Lindy Hop tarihindeki yeri ve kadın dansçıların swing dönemindeki rolü. Kraliçe'nin efsanevi hikayesi.",
			keywords: [
				"Norma Miller",
				"Lindy Hop kraliçesi",
				"kadın dansçılar",
				"swing era",
				"Harlem",
				"dans tarihi",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/norma-miller-lindy-hop",
		},
		Content: NormaMiller,
	},
	{
		id: 3,
		title: "Lindy Hop: Swing'in Efsanevi Dansının Tarihi",
		slug: "lindy-hop-tarihi",
		publishDate: "2025-01-25T11:00:00Z",
		author: "Behzat Bilgin Erdem",
		excerpt:
			"Harlem'in sokaklarından dünyaya yayılan Lindy Hop'un büyüleyici tarihini ve kültürel etkisini keşfedin.",
		readingTime: 2,
		tags: ["Lindy Hop", "Swing Tarihi", "Harlem", "Caz Müziği", "Dans Kültürü"],
		category: "Dans Tarihi",
		image: "/images/blogs/3.jpg",
		imageAlt: "Lindy Hop dansçıları tarihi fotoğraf",
		seo: {
			metaDescription:
				"Lindy Hop'un Harlem'den dünyaya yayılış hikayesi. Swing dansının kökenleri ve kültürel etkisi hakkında kapsamlı rehber.",
			keywords: [
				"Lindy Hop tarihi",
				"swing dansı",
				"Harlem",
				"caz müziği",
				"dans kültürü",
				"swing era",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/lindy-hop-tarihi",
		},
		featured: true,
		Content: LindyHopHistory,
	},
	{
		id: 4,
		title: "Duke Ellington: Cazın Efsanevi Bestecisi ve Lideri",
		slug: "duke-ellington",
		publishDate: "2025-02-01T10:30:00Z",
		author: "Neval",
		excerpt:
			"Duke Ellington'ın caz müziğine kattığı eşsiz katkılar ve swing dansına etkisini keşfedin.",
		readingTime: 3,
		tags: [
			"Duke Ellington",
			"Caz Müziği",
			"Swing Music",
			"Orkestra",
			"Besteci",
		],
		category: "Müzik",
		image: "/images/blogs/4.jpg",
		imageAlt: "Duke Ellington piyano başında",
		seo: {
			metaDescription:
				"Duke Ellington'ın caz müziğindeki yeri ve swing dansına etkisi. Efsanevi bestecinin hayatı ve eserleri.",
			keywords: [
				"Duke Ellington",
				"caz müziği",
				"swing music",
				"orkestra lideri",
				"besteci",
				"piyano",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/duke-ellington",
		},
		Content: DukeEllington,
	},
	{
		id: 5,
		title: "Earl Hines: Cazın Yenilikçi Piyano Devi",
		slug: "earl-hines",
		publishDate: "2025-02-05T09:15:00Z",
		author: "Ayça",
		excerpt:
			"Earl Hines'ın piyano tekniğindeki devrimci yaklaşımı ve swing müziğine kattığı yenilikler.",
		readingTime: 1,
		tags: ["Earl Hines", "Piyano", "Caz Müziği", "Swing", "Müzik Tekniği"],
		category: "Müzik",
		image: "/images/blogs/5.jpg",
		imageAlt: "Earl Hines piyano çalarken",
		seo: {
			metaDescription:
				"Earl Hines'ın piyano tekniğindeki yenilikler ve caz müziğine etkisi. Swing döneminin önemli piyanistlerinden biri.",
			keywords: [
				"Earl Hines",
				"caz piyanisti",
				"swing müziği",
				"piyano tekniği",
				"müzik yeniliği",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/earl-hines",
		},
		Content: EarlHines,
	},
	{
		id: 6,
		title: "Tommy Dorsey: Swing Döneminin Trombon Devi",
		slug: "tommy-dorsey",
		publishDate: "2025-02-10T08:45:00Z",
		author: "Behzat Bilgin Erdem",
		excerpt:
			"Tommy Dorsey'nin trombon ustalığı ve swing orkestrasının dans müziğine kattığı büyüleyici melodiler.",
		readingTime: 2,
		tags: [
			"Tommy Dorsey",
			"Trombon",
			"Swing Orkestra",
			"Big Band",
			"Dans Müziği",
		],
		category: "Müzik",
		image: "/images/blogs/6.jpg",
		imageAlt: "Tommy Dorsey trombon çalarken",
		seo: {
			metaDescription:
				"Tommy Dorsey'nin swing dönemindeki rolü ve trombon ustalığı. Big band müziğinin dans kültürüne etkisi.",
			keywords: [
				"Tommy Dorsey",
				"trombon",
				"swing orkestra",
				"big band",
				"dans müziği",
				"swing era",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/tommy-dorsey",
		},
		Content: TommyDorsey,
	},
	{
		id: 7,
		title: "Count Basie: Swing Kralı ve Caza Damga Vuran Müzikal Dev",
		slug: "count-basie",
		publishDate: "2025-11-07T08:30:00Z",
		author: "Neval",
		excerpt:
			"Count Basie'nin müzikal liderliği, orkestrasının özgün tarzı ve swing dansı kültürüne etkisi.",
		readingTime: 3,
		tags: [
			"Count Basie",
			"Swing Müzik",
			"Big Band",
			"Caz Efsanesi",
			"Caz Orkestrası",
		],
		category: "Müzik",
		image: "/images/blogs/7.webp",
		imageAlt: "Count Basie Orkestrası Performansı",
		seo: {
			metaDescription:
				"Count Basie'nin müzik kariyeri, orkestrasının özgün tarzı ve swing döneminin gelişimindeki rolü. Swing dansı için unutulmaz melodiler.",
			keywords: [
				"Count Basie",
				"swing müzik",
				"Big Band",
				"caz efsanesi",
				"swing dansı",
				"lindy hop müzik",
			],
			canonicalUrl: "https://ankaralindyhop.org/blog/count-basie",
		},
		Content: CountBasie,
	},
];

export const events = [
	{
		id: "event-8",
		title: "Cadılar Bayramı 2025",
		date: "2025-11-01T20:00:00",
		location: "Rasa Brasserie Cafe & Restaurant",
		description:
			"Cadılar Bayramı partimize davetlisiniz!🎃👻 1 Kasım Cumartesi günü @dukesswingband eşliğinde unutulmaz bir gece için kostümlerinizi hazırlayın🙌",
		imageUrl: "/images/events/halloween-2025.jpg",
	},
	{
		id: "event-7",
		title: "Vişnelik Yaz Partisi",
		date: "2025-08-15T20:00:00",
		location: "Vişnelik",
		description:
			"Yazın ışıltısını dansla kutluyoruz!✨💃 3 Ağustos Pazar akşamı, Rabarba Teras'ta yıldızların altında buluşuyoruz.",
		imageUrl: "/images/events/visnelik-2024.jpg",
	},
	{
		id: "event-6",
		title: "Lindy Hop Partisi",
		date: "2025-08-03T20:30:00",
		location: "Tunus Cad. No:50, Rabarba Teras",
		description:
			"Yazın ışıltısını dansla kutluyoruz!✨💃 3 Ağustos Pazar akşamı, Rabarba Teras'ta yıldızların altında buluşuyoruz.",
		imageUrl: "/images/events/rabarba-2025.png",
	},
	{
		id: "event-5",
		title: "Sarı Tema & DJ Battle",
		date: "2025-06-07T20:00:00",
		location: "Rasa Brasserie Cafe & Restaurant",
		description:
			"Sevgili ALH dostları, yeni yıla müzik ve dans dolu bir başlangıç yakışır",
		imageUrl: "/images/events/yilbasi-2025.jpg",
	},
	{
		id: "event-4",
		title: "Havuz Partisi",
		date: "2025-08-24T20:00:00",
		location: "Vişnelik",
		description:
			"Yazla vedalaşıp sezonu canlı müzikli parti ile açıyoruz!!! 🥳🥳",
		imageUrl: "/images/events/visnelik-2024.jpg",
	},
	{
		id: "event-3",
		title: "Sarı Tema & DJ Battle",
		date: "2025-06-07T20:00:00",
		location: "Rasa Brasserie Cafe & Restaurant",
		description:
			"Sevgili ALH ailesi, 7 Haziran Cuma günü Dj Battle ve SARI temalı partimiz ile karşınızdayız 💛🥳 🎶",
		imageUrl: "/images/events/sari-2024.jpg",
	},
	{
		id: "event-2",
		title: "Cadılar Bayramı 2024",
		date: "2023-11-03T20:00:00",
		location: "Rasa Brasserie Cafe & Restaurant",
		description:
			"Ve Halloween Party zamanı🥳🥳 @dukesswingband eşliğinde harika bir partiye davetlisiniz😍 3 Kasım Cuma günü her zaman olduğu gibi yine @rasacaferestaurant ‘ta görüşmek üzere, kostümlerinizi hazırlamayı unutmayın🙌",
		imageUrl: "/images/events/halloween-2023.jpg",
	},
	{
		id: "event-1",
		title: "Sonbahar Partisi",
		date: "2023-09-16T20:00:00",
		location: "Rasa Brasserie Cafe & Restaurant",
		description:
			"Yazla vedalaşıp sezonu canlı müzikli parti ile açıyoruz!!! 🥳🥳",
		imageUrl: "/images/events/sonbahar-2023.jpg",
	},
];
