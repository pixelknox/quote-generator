self.addEventListener("install", e => {
   e.waitUntill(
       caches.open("static").then(cache => {
        return cache.addAll(["./","./css/style.css","./images/icon-192x192.png","./images/icon-512x512.png","./js/script.js"]);

       })
   );

});

self.addEventListener("fetch", e => {

        e.respondWith(caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
        );

});