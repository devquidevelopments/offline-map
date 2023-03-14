function onLocationFound(e) {
    var map = L.map('map');
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
map.locate({ setView: true, watch: true, maxZoom: 8 });