import { WifiOff } from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Çevrimdışı",
	description: "İnternet bağlantınız bulunmamaktadır.",
};

export default function OfflinePage() {
	return (
		<div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
			<div className="mb-6 rounded-full bg-zinc-900 p-6">
				<WifiOff size={48} className="text-orange-300" />
			</div>
			<h1 className="mb-2 font-almendra-sc text-4xl text-white md:text-5xl">
				Bağlantı Yok
			</h1>
			<p className="mb-8 max-w-md text-zinc-400">
				Görünüşe göre internet bağlantınız kesilmiş. Lütfen bağlantınızı kontrol
				edip tekrar deneyin.
			</p>

			<Link
				href="/"
				className="rounded-full bg-orange-300 px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-orange-400"
			>
				Tekrar Dene
			</Link>
		</div>
	);
}
