import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export const metadata: Metadata = {
	title: "İletişim",
	description:
		"Ankara Lindy Hop topluluğuna ulaşın. Dans kursları, etkinlikler ve iş birlikleri hakkında sorularınızı bekliyoruz.",
	openGraph: {
		title: "İletişim | Ankara Lindy Hop",
		description: "Bize ulaşın, sorularınızı yanıtlayalım.",
		url: "https://ankaralindyhop.org/iletisim",
	},
};

export default function Contact() {
	return (
		<CustomBlackLayout>
			<section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4">
				<ContactForm />
			</section>
		</CustomBlackLayout>
	);
}
