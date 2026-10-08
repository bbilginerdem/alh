"use client";

import { useEffect } from "react";
import { type Toast, toast } from "react-hot-toast";

const renderUpdateToast = (t: Toast) => (
	<span>
		New version available!{" "}
		<button
			onClick={() => {
				window.location.reload();
				toast.dismiss(t.id);
			}}
			className="font-bold underline"
			type="button"
		>
			Refresh
		</button>
	</span>
);

export default function PWARegistration() {
	useEffect(() => {
		if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
			return;
		}

		const handleStateChange = (newWorker: ServiceWorker) => {
			if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
				toast(renderUpdateToast, {
					duration: Number.POSITIVE_INFINITY,
					id: "pwa-update-available",
				});
			}
		};

		const handleUpdateFound = (registration: ServiceWorkerRegistration) => {
			const newWorker = registration.installing;
			if (!newWorker) return;

			newWorker.addEventListener("statechange", () => handleStateChange(newWorker));
		};

		const registerServiceWorker = async () => {
			try {
				const registration = await navigator.serviceWorker.register("/sw.js");
				registration.addEventListener("updatefound", () => handleUpdateFound(registration));
			} catch {}
		};

		const handleLoad = () => {
			void registerServiceWorker();
		};

		if (document.readyState === "complete") {
			void registerServiceWorker();
		} else {
			window.addEventListener("load", handleLoad);
			return () => {
				window.removeEventListener("load", handleLoad);
			};
		}
	}, []);

	return null;
}
