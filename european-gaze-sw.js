/* The European Gaze on India – offline PWA service worker
   v5: revised text and navigation; v4: OpenSeadragon deep-zoom assets and .dzi descriptors.
*/
const VERSION = "v9";
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
  "./js/openseadragon.min.js",
  "./js/plate-viewer.js",
  "./offline.html",
  "./404.html",
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

const MAX_IMAGE_ENTRIES = 400;
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);

    // A missing optional file must not prevent the service worker installing.
    await Promise.allSettled(APP_SHELL.map(async (url) => {
      const response = await fetch(new Request(url, { cache: "reload" }));
      if (response.ok) {
        await cache.put(url, response);
      }
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

  if (sameOrigin && url.pathname.endsWith(".dzi")) {
    event.respondWith(staleWhileRevalidate(request, PAGE_CACHE));
    return;
  }

  if (sameOrigin && request.destination === "image") {
    event.respondWith(imageResponse(request, event));
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
    if (response.ok) {
      try {
        await cache.put(request, response.clone());
      } catch (error) {
        // A cache quota/write error must not prevent the page loading online.
      }
    }
    return response;
  } catch (error) {
    return (
      (await cache.match(request)) ||
      (await caches.match(request)) ||
      (await caches.match("./offline.html"))
    );
  }
}

async function imageResponse(request, event) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);

  // Previously cached images remain available immediately, including offline.
  if (cached) return cached;

  try {
    // Do not attempt to cache partial/range responses.
    const response = await fetch(request);
    const length = Number(response.headers.get("content-length") || 0);
    const cacheable =
      response.ok &&
      response.status === 200 &&
      !request.headers.has("range") &&
      (!length || length <= MAX_IMAGE_BYTES);

    if (cacheable) {
      // Crucial: caching happens separately. A Cache API/quota failure on iOS
      // cannot turn a successfully fetched image into a broken image.
      event.waitUntil(cacheImageSafely(request, response.clone()));
    }

    return response;
  } catch (networkError) {
    return (
      (await cache.match(request)) ||
      new Response("", {
        status: 504,
        statusText: "Image unavailable offline"
      })
    );
  }
}

async function cacheImageSafely(request, response) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    await cache.put(request, response);
    await trimCache(IMAGE_CACHE, MAX_IMAGE_ENTRIES);
  } catch (error) {
    // Storage pressure, large responses and iOS Cache API failures are non-fatal.
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then(async (response) => {
      if (response.ok || response.type === "opaque") {
        try {
          await cache.put(request, response.clone());
        } catch (error) {
          // Serve the network response even if it cannot be cached.
        }
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
