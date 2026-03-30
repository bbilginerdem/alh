"use client";

import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * 1. Olay Tipini Tanımlıyoruz
 */
interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed";
		platform: string;
	}>;
	prompt(): Promise<void>;
}

/**
 * 2. Global Window Olay Haritasını Genişletiyoruz
 * Bu kısım, window.addEventListener("beforeinstallprompt", ...) kullanımını
 * TypeScript için yerel bir standart haline getirir.
 */
declare global {
	interface WindowEventMap {
		beforeinstallprompt: BeforeInstallPromptEvent;
	}
}

export default function PWAInstallPrompt() {
	// State artık BeforeInstallPromptEvent tipini tam olarak tanıyor
	const [deferredPrompt, setDeferredPrompt] =
		useState<BeforeInstallPromptEvent | null>(null);
	const [showPrompt, setShowPrompt] = useState(false);

	useEffect(() => {
		// Tip artık otomatik olarak WindowEventMap'ten geliyor
		const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
			e.preventDefault();
			setDeferredPrompt(e);

			const hasDismissed = localStorage.getItem("pwa-install-dismissed");
			if (!hasDismissed) {
				setShowPrompt(true);
			}
		};

		// 'as any' kullanmaya gerek kalmadı, TS artık 'beforeinstallprompt'u tanıyor
		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

		return () => {
			window.removeEventListener(
				"beforeinstallprompt",
				handleBeforeInstallPrompt,
			);
		};
	}, []);

	const handleInstall = async () => {
		if (!deferredPrompt) return;

		setShowPrompt(false);

		// Yükleme istemini başlat
		await deferredPrompt.prompt();

		// Sonucu yakala
		const { outcome } = await deferredPrompt.userChoice;
		console.log(`[PWA] User response: ${outcome}`);

		setDeferredPrompt(null);
	};

	const handleDismiss = () => {
		setShowPrompt(false);
		localStorage.setItem("pwa-install-dismissed", "true");
	};

	if (!showPrompt) return null;

	return (
		<div className="fixed right-4 bottom-4 left-4 z-100 flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl md:right-8 md:bottom-8 md:left-auto md:w-96">
			<div className="flex-1 space-y-3">
				<div>
					<h3 className="font-semibold text-sm text-white">Uygulamayı Yükle</h3>
					<p className="mt-1 text-xs text-zinc-400">
						Ankara Lindy Hop&apos;u ana ekranınıza ekleyerek etkinliklerden ilk
						siz haberdar olun!
					</p>
				</div>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={handleInstall}
						className="flex flex-1 items-center justify-center gap-2 rounded-md bg-orange-300 px-3 py-2 font-semibold text-xs text-zinc-900 transition-colors hover:bg-orange-400"
					>
						<Download size={14} />
						Ana Ekrana Ekle
					</button>
				</div>
			</div>
			<button
				type="button"
				onClick={handleDismiss}
				className="text-zinc-500 transition-colors hover:text-zinc-300"
				aria-label="Kapat"
			>
				<X size={18} />
			</button>
		</div>
	);
}
