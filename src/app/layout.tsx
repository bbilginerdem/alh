import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const zentry = localFont({
	src: "./fonts/zentry-regular.woff2",
	variable: "--font-zentry",
});

const general = localFont({
	src: "./fonts/general.woff2",
	variable: "--font-general",
});

const circularwebBook = localFont({
	src: "./fonts/circularweb-book.woff2",
	variable: "--font-circularweb-book",
});

const robertMedium = localFont({
	src: "./fonts/robert-medium.woff2",
	variable: "--font-robert-medium",
});

const robertRegular = localFont({
	src: "./fonts/robert-regular.woff2",
	variable: "--font-robert-regular",
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
			<body
				className={`${zentry.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${circularwebBook.variable} antialiased`}
			>
				<main className="relative min-h-screen w-screen overflow-x-hidden">
					{children}
					<Navbar />
					<Footer />
				</main>
			</body>
		</html>
	);
}
