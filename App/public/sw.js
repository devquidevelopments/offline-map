const CACHE_NAME = 'fyp-cache';
// Declares files and libraries required to be cached by the service worker.
const toCache = [
    '/',
    '/home.html',
    '/res/dark-mode.png',
    '/res/globe-192.png',
    '/res/globe-512.png',
    '/res/globe-vector.svg',
    '/scripts/fyp.js',
    '/scripts/fyp.webmanifest',
    '/scripts/initDB.js',
    'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
    'https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css',
    'https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js',
    'https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css',
    'https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js'
];

// Event listener that installs the service worker and add the required files/libraries to the cache.
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(toCache)
            })
            .then(self.skipWaiting())
    )
})

// Event listener that gets cached files/libraries from the service worker if available.
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

// Event listener ensure the existing cache is up to date and deletes any that are out of date.
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