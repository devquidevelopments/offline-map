const CACHE_NAME = 'fyp-cache';
const toCache = [
    '/',
    '/home.html',
    '/res/dark-mode.png',
    '/res/globe-192.png',
    '/res/globe-512.png',
    '/res/globe-vector.svg',
    '/scripts/fyp.js',
    '/scripts/fyp.webmanifest',
    '/scripts/osm.js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(toCache)
            })
            .then(self.skipWaiting())
    )
})

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