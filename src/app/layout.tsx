import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Almendra_SC, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import PWARegistration from "@/components/PWARegistration";
import "./globals.css";

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
	formatDetection: { email: false, address: false, telephone: false },
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
	alternates: { canonical: "/" },
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Ankara Lindy Hop",
	url: "https://ankaralindyhop.org",
	logo: "https://ankaralindyhop.org/images/og-image.png",
	sameAs: ["https://www.instagram.com/ankaralindyhop", "https://www.facebook.com/ankaralindyhop"],
	contactPoint: {
		"@type": "ContactPoint",
		email: "iletisim@ankaralindyhop.org",
		contactType: "customer support",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr" data-scroll-behavior="smooth">
			<body className={`${inter.variable} ${almendraSC.variable} antialiased`}>
				<Script
					id="organization-ld-json"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<main className="min-h-screen w-full overflow-x-hidden">
					<Navbar />
					{children}
					<Footer />
					<SpeedInsights />
					<Analytics />
					<Toaster
						position="top-center"
						toastOptions={{
							style: { background: "#fdba74", color: "#18181b" },
							success: {
								style: { background: "#fdba74", color: "#18181b" },
								iconTheme: { primary: "#18181b", secondary: "#fdba74" },
							},
							error: {
								style: { background: "#f87171", color: "#18181b" },
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
