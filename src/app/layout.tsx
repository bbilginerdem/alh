import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Almendra_SC, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import PWARegistration from "@/components/PWARegistration";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: true,
});

const almendraSC = Almendra_SC({
	subsets: ["latin"],
	variable: "--font-almendra-sc",
	weight: "400",
	display: "swap",
	preload: true,
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
		"jazz dansı",
		"caz dans",
		"caz dansı",
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
	manifest: "/manifest.json",
	metadataBase: new URL("https://ankaralindyhop.org"),
	alternates: {
		canonical: "/",
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
				{/* Preload the LCP image (video poster) */}
				<link
					rel="preload"
					as="image"
					href="/images/features-1.webp"
					fetchPriority="high"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Ankara Lindy Hop",
							url: "https://ankaralindyhop.org",
							logo: "https://ankaralindyhop.org/images/og-image.png",
							sameAs: [
								"https://www.instagram.com/ankaralindyhop",
								"https://www.facebook.com/ankaralindyhop",
							],
							contactPoint: {
								"@type": "ContactPoint",
								email: "iletisim@ankaralindyhop.org",
								contactType: "customer support",
							},
						}),
					}}
				/>
			</head>
			<body className={`${inter.variable} ${almendraSC.variable} antialiased`}>
				<main className="min-h-screen w-screen overflow-x-hidden">
					{children}
					<SpeedInsights />
					<Analytics />
					<Navbar />
					<Footer />
					<Toaster
						position="top-center"
						toastOptions={{
							style: {
								background: "#fdba74", // orange-300 - default for all toasts
								color: "#18181b", // zinc-900 for text
							},
							success: {
								style: {
									background: "#fdba74", // orange-300
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
					<CookieConsent />
					<PWARegistration />
					<PWAInstallPrompt />
				</main>
			</body>
		</html>
	);
}
