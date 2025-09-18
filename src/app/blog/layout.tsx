import type { Metadata } from "next";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export const metadata: Metadata = {
	title: "Blog | Ankara Lindy Hop",
	description:
		"Ankara Lindy Hop topluluğunun en yeni haberleri, etkinlikleri ve swing dans kültürü hakkında bilgiler. Ankara'da canlı lindy hop sahnesine katılın!",
	keywords: [
		"Ankara",
		"Lindy Hop",
		"swing dans",
		"dans",
		"jazz dans",
		"Ankara dans etkinlikleri",
		"lindy hop Ankara",
		"swing dans Ankara",
	],
	authors: [{ name: "Ankara Lindy Hop Topluluğu" }],
	openGraph: {
		title: "Blog | Ankara Lindy Hop",
		description:
			"Ankara Lindy Hop topluluğundan en son güncellemeler - etkinlikler, eğitimler ve Türkiye'nin başkentindeki swing dans kültürü.",
		url: "https://ankaralindyhop.org/blog",
		siteName: "Ankara Lindy Hop",
		locale: "tr_TR",
		type: "website",
	},
};

export default function BlogLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <CustomBlackLayout>{children}</CustomBlackLayout>;
}
