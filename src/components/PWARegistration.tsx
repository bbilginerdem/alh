"use client";

import { useEffect } from "react";

export default function PWARegistration() {
	useEffect(() => {
		if (typeof window !== "undefined" && "serviceWorker" in navigator) {
			window.addEventListener("load", () => {
				navigator.serviceWorker
					.register("/sw.js")
					.then((registration) => {
						console.log(
							"[PWA] Service Worker registered successfully with scope:",
							registration.scope,
						);

						// Handle updates
						registration.addEventListener("updatefound", () => {
							const newWorker = registration.installing;
							if (newWorker) {
								newWorker.addEventListener("statechange", () => {
									if (
										newWorker.state === "installed" &&
										navigator.serviceWorker.controller
									) {
										// Notify user that a new version is available
										console.log("[PWA] Update available");
										// You can add a toast notification here to ask the user to refresh
									}
								});
							}
						});
					})
					.catch((error) => {
						console.error("[PWA] Service Worker registration failed:", error);
					});

				// Handle messages from service worker
				navigator.serviceWorker.addEventListener("message", (event) => {
					console.log("[PWA] Message from Service Worker:", event.data);
				});
			});
		}
	}, []);

	return null;
}
