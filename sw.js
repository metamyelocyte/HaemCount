const VERSION = 'v1.1';
const CACHE = 'haemcount-' + VERSION;
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/js/chart.umd.min.js',
  '/icons/icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Apply updates when requested by the About dialog.
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Preserve offline-first navigation, but recover if cached HTML is missing.
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith((async () => {
      try {
        const cache = await caches.open(CACHE);
        const cached = (await cache.match(req)) ||
          (await cache.match('/index.html'));
        if (cached) return cached;
      } catch {
        // Storage restrictions must not prevent a network request.
      }

      try {
        const response = await fetch(req);
        if (response.ok && response.type === 'basic') {
          try {
            const cache = await caches.open(CACHE);
            await cache.put('/index.html', response.clone());
          } catch {
            // Return the live page even if caching is unavailable.
          }
        }
        return response;
      } catch {
        return new Response(
          'HaemCount is unavailable offline because its cached page is missing. Please reconnect and reload.',
          {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          }
        );
      }
    })());
    return;
  }

  // Static assets: cache-first.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }))
  );
});
