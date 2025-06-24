import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const zentry = localFont({
  src: "../../public/fonts/zentry-regular.woff2",
  variable: "--font-zentry",
});

const general = localFont({
  src: "../../public/fonts/general.woff2",
  variable: "--font-general",
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
        className={`${inter.variable} ${zentry.variable} ${general.variable} antialiased`}
      >
        <main className="min-h-screen w-screen overflow-x-hidden">
          {children}
          <Navbar />
          <Footer />
          <Toaster position="top-center" />
        </main>
      </body>
    </html>
  );
}
