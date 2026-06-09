/* 媽媽的旅程 — Service Worker（離線快取） */
const VERSION = 'mom-v1';
const CORE = [
  './', './index.html', './tohoku.html', './nanjing.html', './brunei.html',
  './manifest.json', './icon-192.png', './icon-512.png', './icon-180.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSION).then(c => Promise.allSettled(CORE.map(u => c.add(u))))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* 同源 GET：cache-first，命中即用、未命中走網路並回填；離線時回退快取 */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // 外部資源(字型/地圖)不攔

  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
