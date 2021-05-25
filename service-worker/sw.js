var cacheName = 'cache-v1';
var filesToCache = [
  '/index.css',
  '/index.js',
]

self.addEventListener('install', function (e) {
  console.log('install');
  e.waitUntil(caches.open(cacheName).then(function(cache) {
    return cache.addAll(filesToCache);
  }))
})

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      console.log(response)
      return response || fetch(e.request);
    })
  );
});