var mapContainer = document.getElementById('map');
// Create a new Leaflet map instance and center it around the user's current location
function initMap() {
    var map = L.map('map', { zoomControl: false });
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            map.setView([lat, lng], 13);
            L.marker({ lat, lng }).addTo(map);
        });
    } else {
        alert('Geolocation is not available');
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    // map.locate({
    //     setView: true,
    //     watch: true,
    //     maxZoom: 8
    // })
}

// Wait for the DOM to load before initializing the map
document.addEventListener('DOMContentLoaded', initMap);
