// Helper functions for Supabase Push Notification implementation

// Convert base64 url string to Uint8Array required by pushManager
const urlBase64ToUint8Array = (base64String: string) => {
	const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
};

// Requests permission and subscribes to push notifications
export async function subscribeToPushNotifications() {
	if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
		console.error("Push notifications are not supported by the browser");
		return false;
	}

	const registration = await navigator.serviceWorker.ready;

	try {
		const permission = await Notification.requestPermission();

		if (permission !== "granted") {
			console.log("Push notification permission denied.");
			return false;
		}

		// Check if already subscribed
		const existingSubscription =
			await registration.pushManager.getSubscription();
		if (existingSubscription) {
			console.log("Already subscribed to push notifications");
			// Optionally update it in DB
			await saveSubscriptionToBackend(existingSubscription);
			return true;
		}

		const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
		if (!vapidPublicKey) {
			console.error("VAPID public key is missing from env variables.");
			return false;
		}

		const subscription = await registration.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
		});

		// Save in our Supabase DB via API route
		const saved = await saveSubscriptionToBackend(subscription);
		return saved;
	} catch (error) {
		console.error("Failed to subscribe user:", error);
		return false;
	}
}

async function saveSubscriptionToBackend(
	subscription: PushSubscription,
): Promise<boolean> {
	try {
		const response = await fetch("/api/push", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(subscription),
		});

		if (!response.ok) {
			const errBody = await response.json();
			throw new Error(
				errBody.error || "Failed to save subscription to Supabase DB",
			);
		}

		console.log("Successfully saved push subscription");
		return true;
	} catch (error) {
		console.error("Error saving push subscription payload:", error);
		return false;
	}
}

export async function unsubscribeFromPushNotifications() {
	if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;

	const registration = await navigator.serviceWorker.ready;
	const subscription = await registration.pushManager.getSubscription();

	if (subscription) {
		const endpoint = subscription.endpoint;

		// Unsubscribe in browser
		await subscription.unsubscribe();

		// Remove from Supabase
		await fetch("/api/push", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ endpoint }),
		});
	}
}
