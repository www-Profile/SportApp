importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Вставь свой firebaseConfig из firebase-config.js
firebase.initializeApp({
  apiKey: "AIzaSyD6uUMfXa3MA6wa3RoatzYFex4M6QAo4Iw",
  authDomain: "sportapp-f3e54.firebaseapp.com",
  projectId: "sportapp-f3e54",
  storageBucket: "sportapp-f3e54.firebasestorage.app",
  messagingSenderId: "745194278905",
  appId: "1:745194278905:web:bce2b1780b25d6c2613728"
});

const messaging = firebase.messaging();

// Обработка push, когда приложение в фоне или закрыто
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Получено фоновое push:', payload);
  const title = payload.notification?.title || 'SportApp';
  const options = {
    body: payload.notification?.body || '',
    icon: '/images/icon-192.png',
    badge: '/images/icon-192.png'
  };
  self.registration.showNotification(title, options);
});