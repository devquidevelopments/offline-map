let request = indexedDB.open('localDB', 1);
request.onerror = function (event) {
    console.log("Database error: " + event.target.errorCode);
};
request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");
};
request.onupgradeneeded = function (event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
    objectStore.createIndex("name", "name", { unique: false });
};