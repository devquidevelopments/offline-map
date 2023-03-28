const locOptions = {
    enableHighAccuracy: true,
    timeout: 5000
}

navigator.geolocation.getCurrentPosition(showMap);

const canvas = document.getElementById('map-canvas');
const ctx = canvas.getContext('2d');

function showMap(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat,lon);

    // Make a request to the Overpass API
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:1000,${lat},${lon})[amenity=restaurant];out;`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Parse the response from the Overpass API to extract the data you need
            const nodes = data.elements.filter(element => element.type === 'node');
            const mapData = nodes.map(node => {
                return {
                    x: (node.lon - lon) * 100000,
                    y: (lat - node.lat) * 100000,
                    name: node.tags.name
                };
            });

            // Use the canvas API to draw the map on the canvas element
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#000000';
            mapData.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillText(node.name, node.x + 10, node.y - 10);
            });
        })
        .catch(error => console.error(error));
}

function error(err) {
    if (err.code === 1) {
        alert("Please enable location access");
    } else {
        alert("Cannot get current location");
    }
}