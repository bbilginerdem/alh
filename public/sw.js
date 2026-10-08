const CACHE_VERSION = "alh-v2";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

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

const DYNAMIC_CACHE_LIMIT = 50;
const IMAGE_CACHE_LIMIT = 100;

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(STATIC_CACHE)
			.then((cache) => {
				return cache.addAll(PRECACHE_URLS);
			})
			.then(() => {
				return self.skipWaiting();
			}),
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((name) => {
							return (
								name.startsWith("alh-") &&
								name !== STATIC_CACHE &&
								name !== DYNAMIC_CACHE &&
								name !== IMAGE_CACHE
							);
						})
						.map((name) => {
							return caches.delete(name);
						}),
				);
			})
			.then(() => {
				return self.clients.claim();
			}),
	);
});

self.addEventListener("fetch", (event) => {
	const { request } = event;
	const url = new URL(request.url);

	if (request.method !== "GET") return;

	if (!url.protocol.startsWith("http")) return;

	if (
		url.pathname.startsWith("/api/") ||
		url.hostname.includes("vercel") ||
		url.hostname.includes("analytics")
	) {
		return;
	}

	if (
		request.destination === "image" ||
		new RegExp(/\.(png|jpg|jpeg|webp|avif|gif|svg|ico)$/i).exec(url.pathname)
	) {
		event.respondWith(cacheFirst(request, IMAGE_CACHE, IMAGE_CACHE_LIMIT));
		return;
	}

	if (
		request.destination === "script" ||
		request.destination === "style" ||
		request.destination === "font" ||
		new RegExp(/\.(js|css|woff|woff2)$/i).exec(url.pathname)
	) {
		event.respondWith(staleWhileRevalidate(event, request, STATIC_CACHE));
		return;
	}

	if (request.mode === "navigate") {
		event.respondWith(networkFirst(request));
		return;
	}

	event.respondWith(staleWhileRevalidate(event, request, DYNAMIC_CACHE));
});

async function networkFirst(request) {
	try {
		const networkResponse = await fetch(request);

		if (networkResponse.ok) {
			const cache = await caches.open(DYNAMIC_CACHE);
			await cache.put(request, networkResponse.clone());
			await trimCache(DYNAMIC_CACHE, DYNAMIC_CACHE_LIMIT);
		}

		return networkResponse;
	} catch {
		const cachedResponse = await caches.match(request);
		if (cachedResponse) return cachedResponse;

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

async function cacheFirst(request, cacheName, limit) {
	const cachedResponse = await caches.match(request);
	if (cachedResponse) return cachedResponse;

	try {
		const networkResponse = await fetch(request);

		if (networkResponse.ok) {
			const cache = await caches.open(cacheName);
			await cache.put(request, networkResponse.clone());
			await trimCache(cacheName, limit);
		}

		return networkResponse;
	} catch {
		if (request.destination === "image") {
			return new Response("<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/>", {
				headers: { "Content-Type": "image/svg+xml" },
			});
		}

		return new Response("", { status: 408 });
	}
}

async function staleWhileRevalidate(event, request, cacheName) {
	const cache = await caches.open(cacheName);
	const cachedResponse = await cache.match(request);

	const networkPromise = fetch(request)
		.then(async (networkResponse) => {
			if (networkResponse.ok) {
				await cache.put(request, networkResponse.clone());
			}
			return networkResponse;
		})
		.catch(() => cachedResponse);

	if (cachedResponse) {
		event.waitUntil(networkPromise);
		return cachedResponse;
	}

	return networkPromise;
}

async function trimCache(cacheName, maxItems) {
	const cache = await caches.open(cacheName);
	const keys = await cache.keys();

	if (keys.length > maxItems) {
		await cache.delete(keys[0]);
		return trimCache(cacheName, maxItems);
	}
}

self.addEventListener("sync", (event) => {
	if (event.tag === "contact-form-sync") {
		event.waitUntil(syncContactForm());
	}
});

self.addEventListener("message", (event) => {
	if (event.origin !== self.location.origin) {
		return;
	}

	if (event.data?.type === "SKIP_WAITING") {
		self.skipWaiting();
	}

	if (event.data?.type === "GET_VERSION") {
		if (event.ports?.[0]) {
			event.ports[0].postMessage({ version: CACHE_VERSION });
		}
	}

	if (event.data?.type === "CLEAR_CACHE") {
		event.waitUntil(
			caches.keys().then((names) => Promise.all(names.map((name) => caches.delete(name)))),
		);
	}
});
