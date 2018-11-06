/** help from https://developers.google.com/web/fundamentals/primers/service-workers/ */
var CACHE_NAME = 'site-cache';
var urlsToCache = [
	'/',
	'/css/styles.css',
	'/css/styles-medium.css',
	'/css/styles-large.css',
	'/img/',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
  	caches.open(CACHE_NAME)
  	  .then(function(cache) {
  	  	console.log('Opened cache');
  	  	return cache.addAll(urlsToCache);
  	  })
  );
});