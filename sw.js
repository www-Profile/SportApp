// ============================================================
// sw.js — Service Worker для SportApp
// ============================================================

const CACHE_VERSION = 'sportapp-v3';   // ← поменял версию, чтобы старый кэш сбросился
const CACHE_STATIC = `${CACHE_VERSION}-static`;

const PRECACHE_URLS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './firebase-config.js',
    './exercises-catalog.js',
    './manifest.json'
];

// ── Установка ──
self.addEventListener('install', (event) => {
    console.log('🔧 SW: установка');
    event.waitUntil(
        caches.open(CACHE_STATIC)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
            .catch(err => console.warn('SW precache error:', err))
    );
});

// ── Активация ──
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

// ── Безопасное кэширование (не падает на 206 / opaque / partial) ──
function safePut(request, response) {
    // ★ Кэшируем ТОЛЬКО полные 200 OK, не range, не opaque
    if (!response) return;
    if (response.status !== 200) return;
    if (response.type === 'opaqueredirect') return;

    try {
        const clone = response.clone();
        caches.open(CACHE_STATIC)
            .then(cache => cache.put(request, clone))
            .catch(err => {
                // тихо игнорим — это не критично
                console.warn('SW: cache.put failed (ignored):', err.message);
            });
    } catch (err) {
        console.warn('SW: clone failed (ignored):', err.message);
    }
}

// ── Fetch ──
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // ★ Не трогаем range-запросы (видео, аудио, lazy-картинки)
    if (request.headers.has('range')) return;

    // ★ Только GET
    if (request.method !== 'GET') return;

    // ★ Пропускаем Firebase, VK, CDN, сторонние API
    const bypass = [
        'firestore.googleapis.com',
        'identitytoolkit.googleapis.com',
        'securetoken.googleapis.com',
        'firebaseinstallations.googleapis.com',
        'firebaseapp.com',
        'api.vk.com',
        'cdnjs.cloudflare.com',
        'cdn.jsdelivr.net',
        'gstatic.com',
        'api.qrserver.com',
        'googleapis.com'
    ];
    if (bypass.some(host => url.hostname.includes(host))) return;

    // ★ Не кэшируем chrome-extension и прочее
    if (!url.protocol.startsWith('http')) return;

// ── Cache-first ТОЛЬКО для картинок и шрифтов ──
if (url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico|woff2?|ttf)$/)) {
    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).then(response => {
                safePut(request, response);
                return response;
            });
        })
    );
    return;
}

// ── Network-first для JS/CSS/HTML — чтобы правки подхватывались сразу ──
if (url.pathname.match(/\.(js|css|html)$/) || request.mode === 'navigate') {
    event.respondWith(
        fetch(request)
            .then(response => {
                safePut(request, response);
                return response;
            })
            .catch(() => caches.match(request))
    );
    return;
}

    // ── Network-first для HTML ──
    event.respondWith(
        fetch(request)
            .then(response => {
                safePut(request, response);
                return response;
            })
            .catch(() => caches.match(request))
    );
});

// ── Принудительное обновление ──
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});