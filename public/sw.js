/// <reference lib="webworker" />

// ============================================================================
// Ankara Lindy Hop - Service Worker
// Progressive Web App with offline support & push notifications
// ============================================================================

const CACHE_VERSION = "alh-v1";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

// Static assets to precache on install
const PRECACHE_URLS = [
	"/",
	"/offline",
	"/favicon/android-chrome-192x192.png",
	"/favicon/android-chrome-512x512.png",
	"/favicon/apple-touch-icon.png",
	"/favicon/favicon-32x32.png",
	"/favicon/favicon-16x16.png",
	"/favicon/favicon.ico",
	"/images/logo.png",
	"/manifest.json",
];

// Max items in dynamic cache
const DYNAMIC_CACHE_LIMIT = 50;
const IMAGE_CACHE_LIMIT = 100;

// ============================================================================
// INSTALL EVENT - Precache static assets
// ============================================================================
self.addEventListener("install", (event) => {
	console.log("[SW] Installing service worker...");

	event.waitUntil(
		caches
			.open(STATIC_CACHE)
			.then((cache) => {
				console.log("[SW] Precaching static assets");
				return cache.addAll(PRECACHE_URLS);
			})
			.then(() => {
				// Activate immediately without waiting
				return self.skipWaiting();
			})
			.catch((err) => {
				console.error("[SW] Precache failed:", err);
			}),
	);
});

// ============================================================================
// ACTIVATE EVENT - Clean old caches
// ============================================================================
self.addEventListener("activate", (event) => {
	console.log("[SW] Activating service worker...");

	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((name) => {
							// Delete caches that don't match current version
							return (
								name.startsWith("alh-") &&
								name !== STATIC_CACHE &&
								name !== DYNAMIC_CACHE &&
								name !== IMAGE_CACHE
							);
						})
						.map((name) => {
							console.log("[SW] Deleting old cache:", name);
							return caches.delete(name);
						}),
				);
			})
			.then(() => {
				// Take control of all clients immediately
				return self.clients.claim();
			}),
	);
});

// ============================================================================
// FETCH EVENT - Network-first for pages, Cache-first for assets
// ============================================================================
self.addEventListener("fetch", (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Skip non-GET requests
	if (request.method !== "GET") return;

	// Skip chrome-extension and other non-http(s) schemes
	if (!url.protocol.startsWith("http")) return;

	// Skip API routes and analytics
	if (
		url.pathname.startsWith("/api/") ||
		url.hostname.includes("vercel") ||
		url.hostname.includes("analytics")
	) {
		return;
	}

	// Strategy: Images → Cache-first
	if (
		request.destination === "image" ||
		url.pathname.match(/\.(png|jpg|jpeg|webp|avif|gif|svg|ico)$/i)
	) {
		event.respondWith(cacheFirst(request, IMAGE_CACHE, IMAGE_CACHE_LIMIT));
		return;
	}

	// Strategy: Static assets (JS, CSS, fonts) → Stale-while-revalidate
	if (
		request.destination === "script" ||
		request.destination === "style" ||
		request.destination === "font" ||
		url.pathname.match(/\.(js|css|woff|woff2)$/i)
	) {
		event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
		return;
	}

	// Strategy: Pages (navigation) → Network-first with offline fallback
	if (request.mode === "navigate") {
		event.respondWith(networkFirst(request));
		return;
	}

	// Everything else → Stale-while-revalidate
	event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
});

// ============================================================================
// CACHING STRATEGIES
// ============================================================================

/**
 * Network-first: Try network, fallback to cache, then offline page
 */
async function networkFirst(request) {
	try {
		const networkResponse = await fetch(request);

		if (networkResponse.ok) {
			const cache = await caches.open(DYNAMIC_CACHE);
			cache.put(request, networkResponse.clone());
			await trimCache(DYNAMIC_CACHE, DYNAMIC_CACHE_LIMIT);
		}

		return networkResponse;
	} catch {
		const cachedResponse = await caches.match(request);
		if (cachedResponse) return cachedResponse;

		// If navigating, show offline page
		if (request.mode === "navigate") {
			const offlinePage = await caches.match("/offline");
			if (offlinePage) return offlinePage;
		}

		return new Response("Offline", {
			status: 503,
			statusText: "Service Unavailable",
			headers: { "Content-Type": "text/plain" },
		});
	}
}

/**
 * Cache-first: Try cache, fallback to network
 */
async function cacheFirst(request, cacheName, limit) {
	const cachedResponse = await caches.match(request);
	if (cachedResponse) return cachedResponse;

	try {
		const networkResponse = await fetch(request);

		if (networkResponse.ok) {
			const cache = await caches.open(cacheName);
			cache.put(request, networkResponse.clone());
			await trimCache(cacheName, limit);
		}

		return networkResponse;
	} catch {
		// Return a transparent 1x1 pixel for missing images
		if (request.destination === "image") {
			return new Response(
				"<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/>",
				{
					headers: { "Content-Type": "image/svg+xml" },
				},
			);
		}

		return new Response("", { status: 408 });
	}
}

/**
 * Stale-while-revalidate: Return cache immediately, update in background
 */
async function staleWhileRevalidate(request, cacheName) {
	const cache = await caches.open(cacheName);
	const cachedResponse = await cache.match(request);

	const fetchPromise = fetch(request)
		.then((networkResponse) => {
			if (networkResponse.ok) {
				cache.put(request, networkResponse.clone());
			}
			return networkResponse;
		})
		.catch(() => cachedResponse);

	return cachedResponse || fetchPromise;
}

/**
 * Trim cache to max number of items (FIFO)
 */
async function trimCache(cacheName, maxItems) {
	const cache = await caches.open(cacheName);
	const keys = await cache.keys();

	if (keys.length > maxItems) {
		await cache.delete(keys[0]);
		return trimCache(cacheName, maxItems);
	}
}

// ============================================================================
// PUSH NOTIFICATION EVENTS
// ============================================================================

self.addEventListener("push", (event) => {
	console.log("[SW] Push notification received");

	let data = {
		title: "Ankara Lindy Hop",
		body: "Yeni bir güncelleme var!",
		icon: "/favicon/android-chrome-192x192.png",
		badge: "/favicon/favicon-32x32.png",
		url: "/",
		tag: "alh-notification",
	};

	// Try to parse push data
	if (event.data) {
		try {
			const pushData = event.data.json();
			data = { ...data, ...pushData };
		} catch {
			data.body = event.data.text();
		}
	}

	const options = {
		body: data.body,
		icon: data.icon || "/favicon/android-chrome-192x192.png",
		badge: data.badge || "/favicon/favicon-32x32.png",
		image: data.image || undefined,
		vibrate: [200, 100, 200, 100, 200],
		tag: data.tag || "alh-notification",
		renotify: true,
		requireInteraction: false,
		actions: [
			{
				action: "open",
				title: "Aç",
			},
			{
				action: "close",
				title: "Kapat",
			},
		],
		data: {
			url: data.url || "/",
			dateOfArrival: Date.now(),
		},
	};

	event.waitUntil(self.registration.showNotification(data.title, options));
});

// Handle notification click
self.addEventListener("notificationclick", (event) => {
	console.log("[SW] Notification clicked:", event.action);

	event.notification.close();

	if (event.action === "close") return;

	const urlToOpen = event.notification.data?.url || "/";

	event.waitUntil(
		self.clients
			.matchAll({ type: "window", includeUncontrolled: true })
			.then((clientList) => {
				// If a window is already open, focus it
				for (const client of clientList) {
					if (client.url.includes(urlToOpen) && "focus" in client) {
						return client.focus();
					}
				}

				// Otherwise open a new window
				if (self.clients.openWindow) {
					return self.clients.openWindow(urlToOpen);
				}
			}),
	);
});

// Handle notification close
self.addEventListener("notificationclose", () => {
	console.log("[SW] Notification dismissed");
});

// ============================================================================
// BACKGROUND SYNC (for future offline form submissions)
// ============================================================================
self.addEventListener("sync", (event) => {
	console.log("[SW] Background sync event:", event.tag);

	if (event.tag === "contact-form-sync") {
		event.waitUntil(syncContactForm());
	}
});

async function syncContactForm() {
	// This can be implemented later for offline form submission
	console.log("[SW] Syncing contact form data...");
}

// ============================================================================
// MESSAGE HANDLER (for communication with main thread)
// ============================================================================
self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}

	if (event.data && event.data.type === "GET_VERSION") {
		event.ports[0].postMessage({ version: CACHE_VERSION });
	}

	if (event.data && event.data.type === "CLEAR_CACHE") {
		event.waitUntil(
			caches
				.keys()
				.then((names) => Promise.all(names.map((name) => caches.delete(name)))),
		);
	}
});
