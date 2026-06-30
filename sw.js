/* ============================================
   鲜品小店 - Service Worker
   ============================================ */

const CACHE_NAME = 'eshop-v2';

self.addEventListener('install', event => {
  // 延迟激活，等页面加载完成后再缓存
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      // 有缓存则返回缓存（离线可用）
      if (cached) return cached;
      // 否则发起网络请求
      return fetch(event.request).then(response => {
        // 只缓存同源的 GET 请求成功响应
        if (event.request.method === 'GET' && response.status === 200) {
          const url = new URL(event.request.url);
          // 只缓存本站资源，不缓存外部 API
          if (url.origin === self.location.origin) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
        }
        return response;
      });
    })
  );
});