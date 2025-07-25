import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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
	title: "Ankara Lindy Hop",
	description:
		"Ankara Lindy Hop, Ankara'nın Lindy Hop topluluğunun resmi web sitesi. Lindy Hop partileri ve etkinlikleri için bizi takip edin.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${almendraSC.variable} antialiased`}>
				<main className="min-h-screen w-screen overflow-x-hidden">
					{children}
					<Navbar />
					<Footer />
					<Toaster
						position="top-center"
						toastOptions={{
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
				</main>
			</body>
			<GoogleAnalytics gaId="G-VNQXR1K0BE" />
		</html>
	);
}
