const http = require('http');

function getMapData(location, callback) {
    const endpoint = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;

    http.get(endpoint, (response) => {
        let rawData = '';

        response.on('data', (chunk) => {
            rawData += chunk;
        });

        response.on('end', () => {
            const locationData = JSON.parse(rawData)[0];
            const mapEndpoint = `https://api.openstreetmap.org/api/0.6/map?bbox=${locationData.boundingbox.join(',')}`;

            http.get(mapEndpoint, (mapResponse) => {
                let mapRawData = '';

                mapResponse.on('data', (mapChunk) => {
                    mapRawData += mapChunk;
                });

                mapResponse.on('end', () => {
                    const mapData = mapRawData;
                    callback(null, mapData);
                });
            }).on('error', (error) => {
                callback(error);
            });
        });
    }).on('error', (error) => {
        callback(error);
    });
}

module.exports = {
    getMapData,
};
