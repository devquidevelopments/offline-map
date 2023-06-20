let request = indexedDB.open('mapTiles', 1);

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");
};

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("tiles", { keyPath: "url" });
};

request.onerror = function (event) {
    console.log("Database error: " + event.target.errorCode);
};