document.addEventListener('DOMContentLoaded', init, false);

// Registers the service worker.
function init() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then((reg) => {
                console.log('Service worker registered -->', reg);
            }, (err) => {
                console.error('Service worker not registered -->', err);
            });
    }
}