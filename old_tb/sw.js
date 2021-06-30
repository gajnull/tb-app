var cacheName = 'shell-content_v0.1.1';
var filesToCache = [
    '/',
    '/index.html',
    '/data.js',
    '/main.css',
    '/reset.css',
    '/ot120.png',     
    '/ot128.png',     
    '/ot152.png',     
    '/ot256.png',     
    '/favicon.png'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            //console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
        //console.log('activate');
				if (key !== cacheName) {
					return caches.delete(key);
				}
			}));
		})
	);
});


self.addEventListener('fetch', function(e) {
  //console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      //console.log('response');
      return response || fetch(e.request);
    })
  );
});
