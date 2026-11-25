import type { Metadata } from "next";
import NotFoundClient from "@/components/NotFoundClient";

export const metadata: Metadata = {
	title: "Sayfa Bulunamadı (404)",
	description: "Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.",
	robots: { index: false, follow: false },
};

export default function NotFound() {
	return <NotFoundClient />;
}
