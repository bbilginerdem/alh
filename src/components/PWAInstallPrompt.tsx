"use client";

import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function PWAInstallPrompt() {
	const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
	const [showPrompt, setShowPrompt] = useState(false);

	useEffect(() => {
		const handleBeforeInstallPrompt = (e: Event) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Stash the event so it can be triggered later.
			setDeferredPrompt(e);
			// Show the install button/prompt

			// Optional: only show if they haven't dismissed it
			const hasDismissed = localStorage.getItem("pwa-install-dismissed");
			if (!hasDismissed) {
				setShowPrompt(true);
			}
		};

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
		deferredPrompt.prompt();

		const { outcome } = await deferredPrompt.userChoice;
		console.log(`[PWA] User response to the install prompt: ${outcome}`);

		// Clear prompt
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
