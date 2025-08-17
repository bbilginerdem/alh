// app/not-found.tsx

import Link from "next/link";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export default function NotFound() {
	return (
		<CustomBlackLayout>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<h1 className="mb-4 font-bold text-4xl text-orange-300 md:text-6xl">
					404
				</h1>
				<h2 className="mb-6 text-center font-semibold text-2xl md:text-3xl">
					Üzgünüz, aradığınız sayfa bulunamadı.
				</h2>
				<p className="mb-8 max-w-md text-center text-lg">
					Adresi yanlış yazmış olabilirsiniz veya sayfa kaldırılmış olabilir.
				</p>
				<Link
					href="/"
					className="rounded-md bg-orange-300 px-6 py-3 font-medium text-zinc-950 transition-colors duration-200 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
				>
					Ana Sayfaya Dön
				</Link>
			</div>
		</CustomBlackLayout>
	);
}
