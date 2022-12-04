// Declares webapp's cache and the files to be added to application cache 
// for use by the service worker.
const CACHE_NAME = 'sw-cache-example';
const toCache = [
    '/',
    '/index.html',
    '/style.css',
    '/images/globe-512.png',
    '/js/pwa.js',
    '/js/pwa.webmanifest',
    '/js/status.js'
];

/**
 * Registers the service worker and adds items from toCache to the webapp's
 * cache.
 */
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(toCache)
            })
            .then(self.skipWaiting())
    )
})

/**
 * Tries to get requested file from the cache and if unavailable, returns from
 * server.
 */
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match(event.request)
                    })
            })
    )
})

/**
 * Activates up to date service worker and removes any existing ones from the
 * cache.
 */
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[ServiceWorker] Removing old cache', key)
                        return caches.delete(key)
                    }
                }))
            })
            .then(() => self.clients.claim())
    )
})