import { BlogPageClient } from "@/components/blog/BlogPageClient";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Blog Yazıları",
	description:
		"Swing dansı, caz müziği ve dans kültürünü derinlemesine inceleyen makalelerimiz, dansçılarımızın hikayeleri ve Ankara'nın caz mirası hakkında yazılar.",
	keywords: [
		"Lindy Hop Blog",
		"Swing Dansı Makaleleri",
		"Caz Tarihi",
		"Ankara Lindy Hop Yazıları",
		"Dans Kültürü",
	],
	openGraph: {
		title: "Blog Yazıları | Ankara Lindy Hop",
		description:
			"Swing dansı, caz müziği ve dans kültürünü derinlemesine inceleyen makalelerimiz.",
		url: "https://ankaralindyhop.org/blog",
		type: "website",
	},
	alternates: {
		canonical: "/blog",
	},
};

export default function BlogPage() {
	return (
		<section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<header className="mb-8 text-center">
				<h1 className="mb-4 font-bold text-3xl text-zinc-100 sm:text-4xl lg:text-5xl">
					Blog Yazıları
				</h1>
				<p className="mx-auto max-w-2xl text-lg text-zinc-300">
					Swing dansı, caz müziği ve dans kültür hakkında derinlemesine yazılar
				</p>
			</header>

			<Suspense fallback={<div className="text-zinc-400">Yükleniyor...</div>}>
				<BlogPageClient />
			</Suspense>
		</section>
	);
}
