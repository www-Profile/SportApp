// ============================================================
// sw.js — Service Worker для SportApp
// ============================================================

const CACHE_VERSION = 'sportapp-v1';
const CACHE_STATIC = `${CACHE_VERSION}-static`;

// ★★★ Что кэшируем при установке ★★★
const PRECACHE_URLS = [
    '/SportApp/',
    '/SportApp/index.html',
    '/SportApp/style.css',
    '/SportApp/app.js',
    '/SportApp/firebase-config.js',
    '/SportApp/exercises-catalog.js',
    '/SportApp/manifest.json'
];

// ── Установка: кладём в кэш статику ──
self.addEventListener('install', (event) => {
    console.log('🔧 SW: установка');
    event.waitUntil(
        caches.open(CACHE_STATIC)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())  // активируемся сразу
            .catch(err => console.warn('SW precache error:', err))
    );
});

// ── Активация: чистим старые кэши ──
self.addEventListener('activate', (event) => {
    console.log('✅ SW: активация');
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => !key.startsWith(CACHE_VERSION))
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// ── Fetch: перехватываем запросы ──
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // ★ Firestore / Firebase Auth / VK / внешние API — НЕ трогаем, пусть идут в сеть
    const bypass = [
        'firestore.googleapis.com',
        'identitytoolkit.googleapis.com',
        'securetoken.googleapis.com',
        'firebaseinstallations.googleapis.com',
        'api.vk.com',
        'cdnjs.cloudflare.com',
        'cdn.jsdelivr.net',
        'gstatic.com',
        'api.qrserver.com'
    ];
    if (bypass.some(host => url.hostname.includes(host))) {
        return;
    }

    // Только GET-запросы кэшируем
    if (request.method !== 'GET') return;

    // ★★★ Стратегия: Network-first для HTML, Cache-first для картинок и шрифтов ★★★

    // Картинки, шрифты, CSS, JS — Cache-first
    if (
        url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico|woff2?|ttf|css|js)$/)
    ) {
        event.respondWith(
            caches.match(request).then(cached => {
                if (cached) return cached;
                return fetch(request).then(response => {
                    // Кэшируем свежий ответ
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_STATIC).then(cache => cache.put(request, clone));
                    }
                    return response;
                });
            })
        );
        return;
    }

    // Всё остальное (HTML-страницы) — Network-first, при офлайне — из кэша
    event.respondWith(
        fetch(request)
            .then(response => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_STATIC).then(cache => cache.put(request, clone));
                }
                return response;
            })
            .catch(() => caches.match(request))
    );
});

// ── Хук для принудительного обновления ──
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});