const VERSION = 'v1.0.1';                    // ← bump ONLY when you want to release an update
const CACHE   = 'haemcount-' + VERSION;
const ASSETS  = [
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

// Only ever called when the user clicks "Check for update" in the About dialog.
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Navigations / documents: cache-first. This is an offline desktop app —
  // the cached app shell is the source of truth. A new version only reaches
  // the user when the SW file itself changes (i.e. VERSION is bumped) AND
  // the user explicitly clicks "Check for update".
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      caches.match(req).then(hit => hit || caches.match('/index.html'))
    );
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
