import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Almendra_SC, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const almendraSC = Almendra_SC({
	subsets: ["latin"],
	variable: "--font-almendra-sc",
	weight: "400",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Ankara Lindy Hop - Lindy Hop Dans Topluluğu",
		template: "%s | Ankara Lindy Hop",
	},
	description:
		"Ankara Lindy Hop, Ankara'nın en aktif Lindy Hop ve swing dans topluluğu. Etkinlikler, partiler, eğitimler ve dans kültürünü takip edin.",
	keywords: [
		"Ankara Lindy Hop",
		"Lindy Hop Ankara",
		"swing dans",
		"jazz dans",
		"dans partileri Ankara",
		"dans eğitimi Ankara",
		"swing dans topluluğu",
		"vintage dans Ankara",
	],
	authors: [{ name: "Ankara Lindy Hop Topluluğu" }],
	creator: "Ankara Lindy Hop",
	publisher: "Ankara Lindy Hop",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Ankara Lindy Hop - Lindy Hop Dans Topluluğu",
		description:
			"Ankara'nın en aktif Lindy Hop ve swing dans topluluğu. Etkinlikler, partiler ve dans kültürünü keşfedin.",
		url: "https://ankaralindyhop.org",
		siteName: "Ankara Lindy Hop",
		images: [
			{
				url: "https://ankaralindyhop.org/images/og-image.png",
				width: 942,
				height: 942,
				alt: "Ankara Lindy Hop Topluluğu",
			},
		],
		locale: "tr_TR",
		type: "website",
	},
	icons: {
		icon: [
			{ url: "/favicon/favicon.ico" },
			{ url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{
				url: "/favicon/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/favicon/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
	manifest: "/favicon/site.webmanifest",
	alternates: {
		canonical: "https://ankaralindyhop.org",
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<head>
				<link rel="preconnect" href="https://www.google-analytics.com" />
			</head>
			<body className={`${inter.variable} ${almendraSC.variable} antialiased`}>
				<main className="min-h-screen w-screen overflow-x-hidden">
					{children}
					## TODO Delete one of the analytics components
					<GoogleAnalytics gaId="G-VNQXR1K0BE" />
					<SpeedInsights />
					<Analytics />
					<Navbar />
					<Footer />
					<Toaster
						position="top-center"
						toastOptions={{
							success: {
								style: {
									background: "#fdba74", // orange-3200
									color: "#18181b", // zinc-900 for text
								},
								iconTheme: {
									primary: "#18181b", // zinc-900
									secondary: "#fdba74", // orange-300
								},
							},
							error: {
								style: {
									background: "#f87171", // red-400 (optional - keep error red)
									color: "#18181b",
								},
							},
						}}
					/>
				</main>
			</body>
		</html>
	);
}
