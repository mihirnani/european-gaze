/* The European Gaze on India — offline PWA service worker */
const VERSION = "v1";
const PREFIX = "european-gaze-";
const APP_CACHE = `${PREFIX}app-${VERSION}`;
const PAGE_CACHE = `${PREFIX}pages-${VERSION}`;
const IMAGE_CACHE = `${PREFIX}images-${VERSION}`;
const FONT_CACHE = `${PREFIX}fonts-${VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./about.html",
  "./style.css",
  "./offline.html",
  "./european-gaze.webmanifest",
  "./european-gaze-icon-180.png",
  "./european-gaze-icon-192.png",
  "./european-gaze-icon-512.png",
  "./01_Antiquity-and-Renaissance.html",
  "./02_Baroque-Mughals-and-Companies.html",
  "./03_The-Survey-Turn.html",
  "./04_Home-Ground-Bombay-and-Deccan.html",
  "./05_Administered-Empire-and-Victorian-Atlas.html",
  "./06_The-Sea-and-the-Route.html",
  "./07_Last-Frontiers.html"
];

const MAX_IMAGE_ENTRIES = 30;
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);

    // Cache each file independently: one missing chapter must not prevent installation.
    await Promise.allSettled(APP_SHELL.map(async (url) => {
      const response = await fetch(new Request(url, { cache: "reload" }));
      if (response.ok) await cache.put(url, response);
    }));

    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keep = new Set([APP_CACHE, PAGE_CACHE, IMAGE_CACHE, FONT_CACHE]);
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter((key) => key.startsWith(PREFIX) && !keep.has(key))
        .map((key) => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (sameOrigin && request.destination === "image") {
    event.respondWith(cacheFirstImage(request));
    return;
  }

  if (
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  ) {
    event.respondWith(staleWhileRevalidate(request, FONT_CACHE));
    return;
  }

  if (
    sameOrigin &&
    (request.destination === "style" ||
      request.destination === "script" ||
      request.destination === "manifest")
  ) {
    event.respondWith(staleWhileRevalidate(request, APP_CACHE));
  }
});

async function networkFirstPage(request) {
  const cache = await caches.open(PAGE_CACHE);

  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached =
      (await cache.match(request)) ||
      (await caches.match(request)) ||
      (await caches.match("./offline.html"));

    return cached;
  }
}

async function cacheFirstImage(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    const length = Number(response.headers.get("content-length") || 0);

    if (
      response.ok &&
      (!length || length <= MAX_IMAGE_BYTES)
    ) {
      await cache.put(request, response.clone());
      await trimCache(IMAGE_CACHE, MAX_IMAGE_ENTRIES);
    }

    return response;
  } catch (error) {
    return new Response("", { status: 504, statusText: "Image unavailable offline" });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then(async (response) => {
      if (response.ok || response.type === "opaque") {
        await cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);

  return cached || network;
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  while (keys.length > maxEntries) {
    const oldest = keys.shift();
    await cache.delete(oldest);
  }
}
