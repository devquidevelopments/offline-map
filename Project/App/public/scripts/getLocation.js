function initMap() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            const map = L.map("map").setView([latitude, longitude], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors",
                maxZoom: 18,
            }).addTo(map);

            // Add a marker to show the user's current location
            L.marker([latitude, longitude]).addTo(map);
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}
