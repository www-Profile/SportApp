// ============================================================
// firebase-config.js
// ============================================================

const firebaseConfig = { 
  apiKey: "AIzaSyD6uUMfXa3MA6wa3RoatzYFex4M6QAo4Iw",
  authDomain: "sportapp-f3e54.firebaseapp.com",
  projectId: "sportapp-f3e54",
  storageBucket: "sportapp-f3e54.firebasestorage.app",
  messagingSenderId: "745194278905",
  appId: "1:745194278905:web:bce2b1780b25d6c2613728",
  measurementId: "G-LN032YHD0T"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

// ★★★ ВКЛЮЧАЕМ ПЕРСИСТЕНТНОСТЬ С ОБРАБОТКОЙ ОШИБОК ★★★
firebase.firestore().enablePersistence({ 
    synchronizeTabs: false 
})
.then(() => {
    console.log('✅ Офлайн-режим включён');
})
.catch((err) => {
    if (err.code === 'failed-precondition') {
        console.warn('⚠️ Офлайн-режим не включён (уже открыто в другой вкладке)');
    } else if (err.code === 'unimplemented') {
        console.warn('⚠️ Офлайн-режим не поддерживается этим браузером');
    } else {
        console.error('❌ Ошибка включения офлайн-режима:', err);
    }
});

console.log('✅ Firebase подключен!');