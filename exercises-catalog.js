// =================== ОТДЕЛЬНЫЙ КАТАЛОГ УПРАЖНЕНИЙ ===================
// Инвентарь: гантели, штанга, турник, вес тела
// weight: 0 добавлен во все упражнения, кроме Растяжки, Кардио, Зарядки, Пилатеса
//
// ★★★ ПОЛЕ equipment — определяет, какой инвентарь нужен ★★★
//   'none'      — без инвентаря (вес тела) — доступно всегда
//   'dumbbells' — нужны гантели
//   'barbell'   — нужна штанга
//   'pullup'    — нужен турник
//   'mat'       — нужен коврик (не фильтруется, всегда доступно)

const EXERCISES_CATALOG = [
    // ====================================================================
    // БЛОК 1: БЕЗ ИНВЕНТАРЯ (ВЕС ТЕЛА) — доступно всегда
    // ====================================================================

    // ===== ГРУДЬ =====
    { name: 'Отжимания от пола', category: 'Грудь', sets: 4, reps: 20, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания широким хватом', category: 'Грудь', sets: 4, reps: 15, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с хлопком', category: 'Грудь', sets: 4, reps: 10, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с ногами на возвышении', category: 'Грудь', sets: 4, reps: 15, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с коленей', category: 'Грудь', sets: 4, reps: 15, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания от стены', category: 'Грудь', sets: 4, reps: 20, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с узкой постановкой рук', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с паузой внизу', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания в алмаз', category: 'Грудь', sets: 4, reps: 10, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания на одной руке', category: 'Грудь', sets: 4, reps: 6, weight: 0, icon: 'breast', equipment: 'none' },

    // ===== СПИНА =====
    { name: 'Лодочка', category: 'Спина', sets: 4, reps: 15, weight: 0, icon: 'back', equipment: 'none' },
    { name: 'Лодочка с задержкой', category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'none' },
    { name: 'Супермен', category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'none' },

    // ===== НОГИ =====
    { name: 'Приседания без веса', category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Приседания с выпрыгиванием', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Приседания у стены', category: 'Ноги', sets: 4, reps: '45 сек', weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Приседания с задержкой', category: 'Ноги', sets: 4, reps: '30 сек', weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Выпады с прыжком', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Подъём на носки стоя', category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Ягодичный мостик', category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Ягодичный мостик на одной ноге', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Махи ногой назад', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'none' },

    // ===== ПЛЕЧИ =====
    { name: 'Отжимания в стойке у стены', category: 'Плечи', sets: 4, reps: 8, weight: 0, icon: 'shoulder', equipment: 'none' },
    { name: 'Отжимания в стойке с опорой', category: 'Плечи', sets: 4, reps: 8, weight: 0, icon: 'shoulder', equipment: 'none' },

    // ===== ПРЕСС =====
    { name: 'Скручивания лёжа', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Скручивания с вытянутыми руками', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Обратные скручивания', category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Подъём ног лёжа', category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Ножницы ногами', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Велосипед лёжа', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка на локтях', category: 'Пресс', sets: 4, reps: '30 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка на вытянутых руках', category: 'Пресс', sets: 4, reps: '30 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка с подъёмом ног', category: 'Пресс', sets: 4, reps: '30 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка с касанием плеч', category: 'Пресс', sets: 4, reps: 16, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка на коленях', category: 'Пресс', sets: 4, reps: '20 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка', category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка на правую сторону', category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка на левую сторону', category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка с подъёмом ноги', category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Твист сидя', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Русский твист', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Подъём таза лёжа', category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Вакуум живота стоя', category: 'Пресс', sets: 4, reps: '10 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Вакуум живота лёжа', category: 'Пресс', sets: 4, reps: '10 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Вакуум живота сидя', category: 'Пресс', sets: 4, reps: '10 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Книжка (складывание)', category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },

    // ===== РУКИ =====
    { name: 'Отжимания узким хватом', category: 'Руки', sets: 4, reps: 15, weight: 0, icon: 'bodybuilding', equipment: 'none' },
    { name: 'Алмазные отжимания', category: 'Руки', sets: 4, reps: 10, weight: 0, icon: 'bodybuilding', equipment: 'none' },
    { name: 'Отжимания на одной руке на правую руку', category: 'Руки', sets: 4, reps: 6, weight: 0, icon: 'bodybuilding', equipment: 'none' },
    { name: 'Отжимания на одной руке на левую руку', category: 'Руки', sets: 4, reps: 6, weight: 0, icon: 'bodybuilding', equipment: 'none' },

    // ===== ВСЁ ТЕЛО =====
    { name: 'Бёрпи', category: 'Всё тело', sets: 4, reps: 15, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Бёрпи с прыжком вверх', category: 'Всё тело', sets: 4, reps: 12, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Бёрпи упрощённые', category: 'Всё тело', sets: 4, reps: 15, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Прыжки из приседа', category: 'Всё тело', sets: 4, reps: 15, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Бег с высоким подниманием колен', category: 'Всё тело', sets: 4, reps: '20 сек', weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Джампинг Джек', category: 'Всё тело', sets: 4, reps: 20, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Горные лыжи', category: 'Всё тело', sets: 4, reps: 20, weight: 0, icon: 'WholeBody', equipment: 'none' },

    // ====================================================================
    // ФИТНЕС (без инвентаря)
    // ====================================================================

    // ===== КАРДИО =====
    { name: 'Бег на месте', category: 'Кардио', sets: 3, reps: '30 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Бег на месте с высокими коленями', category: 'Кардио', sets: 3, reps: '30 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', sets: 3, reps: '30 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки на месте', category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Горные лыжи', category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки со сменой ног', category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки ноги вместе-врозь', category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Бёрпи упрощённые', category: 'Кардио', sets: 3, reps: 10, icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки из приседа', category: 'Кардио', sets: 3, reps: 15, icon: 'cardio', equipment: 'none' },
    { name: 'Ходьба с высоким подниманием колен', category: 'Кардио', sets: 3, reps: '20 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Ходьба с захлёстом голеней', category: 'Кардио', sets: 3, reps: '20 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Степ-ап (шаги на платформу)', category: 'Кардио', sets: 3, reps: 15, icon: 'cardio', equipment: 'none' },
    { name: 'Звезда (прыжки с разведением рук и ног)', category: 'Кардио', sets: 3, reps: 15, icon: 'cardio', equipment: 'none' },

    // ===== РАСТЯЖКА =====
    { name: 'Наклоны к ногам сидя', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Наклоны к ногам стоя', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Глубокий наклон к ногам', category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка шеи', category: 'Растяжка', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка шеи с руками', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка шеи с сопротивлением', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка рук за спиной', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка трицепса', category: 'Растяжка', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка плеч (замок)', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка плеч за спиной', category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Наклоны в стороны', category: 'Растяжка', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Боковые наклоны с руками', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Боковые наклоны с захватом', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины (кошка-корова)', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины (скручивание)', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины на полу (скручивание)', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка позвоночника (мост)', category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка ног (шпагат)', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Продольный шпагат', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поперечный шпагат', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза голубя', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза верблюда', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза ребёнка', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Складка с захватом стоп', category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка задней поверхности бедра', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Бабочка', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Ягодичный мостик (статический)', category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза лука', category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },

    // ===== РАСТЯЖКА ПОЗВОНОЧНИКА =====
    { name: 'Наклоны вперёд сидя', category: 'Растяжка позвоночника', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Глубокий наклон вперёд с захватом ног', category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Глубокий наклон с захватом стоп', category: 'Растяжка позвоночника', sets: 3, reps: '35 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Кошка-корова', category: 'Растяжка позвоночника', sets: 3, reps: 10, icon: 'stretching', equipment: 'none' },
    { name: 'Кошка-корова с задержкой', category: 'Растяжка позвоночника', sets: 3, reps: 15, icon: 'stretching', equipment: 'none' },
    { name: 'Скручивание лёжа (позвоночник)', category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Скручивание позвоночника сидя', category: 'Растяжка позвоночника', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза верблюда', category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза лука', category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Мост (позвоночник)', category: 'Растяжка позвоночника', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Стойка на лопатках', category: 'Растяжка позвоночника', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Наклоны в стороны стоя', category: 'Растяжка позвоночника', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины на фитболе', category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'mat' },

    // ===== ЗАРЯДКА =====
    { name: 'Наклоны головы', category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Наклоны головы с сопротивлением', category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },
    { name: 'Вращение плечами', category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Наклоны туловища', category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },
    { name: 'Приседания', category: 'Зарядка', sets: 3, reps: 15, icon: 'charging', equipment: 'none' },
    { name: 'Махи ногами', category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },
    { name: 'Круговые движения тазом', category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Потягивание вверх', category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Планка', category: 'Зарядка', sets: 3, reps: '20 сек', icon: 'charging', equipment: 'none' },
    { name: 'Планка с подъемом рук', category: 'Зарядка', sets: 3, reps: '30 сек', icon: 'charging', equipment: 'none' },
    { name: 'Выпады на месте', category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Выпады с прыжком', category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },

    // ===== ПИЛАТЕС =====
    { name: 'Сотня (дыхание + руки)', category: 'Пилатес', sets: 3, reps: 10, icon: 'Pilates', equipment: 'none' },
    { name: 'Сотня с вытянутыми ногами', category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Скручивание с подъемом ног', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Скручивание с подъемом ног и рук', category: 'Пилатес', sets: 3, reps: 20, icon: 'Pilates', equipment: 'none' },
    { name: 'Подъем таза лёжа', category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Подъем таза на правую ногу', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Подъем таза на левую ногу', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Ножницы ногами', category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Мостик с подъемом ноги', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Мостик с подъемом ноги на правую ногу', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Мостик с подъемом ноги на левую ногу', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Планка на коленях', category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка на локтях', category: 'Пилатес', sets: 3, reps: '30 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка с подъемом ноги', category: 'Пилатес', sets: 3, reps: '35 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка с подъемом ноги на правую ногу', category: 'Пилатес', sets: 3, reps: '40 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка с подъемом ноги на левую ногу', category: 'Пилатес', sets: 3, reps: '40 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка', category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги', category: 'Пилатес', sets: 3, reps: '25 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пилатес', sets: 3, reps: '25 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пилатес', sets: 3, reps: '25 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Лодочка', category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Лодочка с задержкой', category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Боковые наклоны сидя', category: 'Пилатес', sets: 3, reps: 10, icon: 'Pilates', equipment: 'none' },
    { name: 'Растяжка позвоночника (кошка)', category: 'Пилатес', sets: 3, reps: 10, icon: 'Pilates', equipment: 'none' },
    { name: 'Растяжка в позе голубя', category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Стойка на лопатках', category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },

    // ====================================================================
    // БЛОК 2: ГАНТЕЛИ
    // ====================================================================

    // ===== ГРУДЬ =====
    { name: 'Жим гантелей лёжа', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Разводка гантелей лёжа', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Разводка гантелей на наклонной скамье', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Жим одной гантели лёжа', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Пуловер с гантелью', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Жим Свенда', category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },

    // ===== СПИНА =====
    { name: 'Тяга гантелей к поясу в наклоне', category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Тяга гантели к поясу', category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Тяга гантели к поясу с упором', category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Тяга двух гантелей к поясу', category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Шраги с гантелями', category: 'Спина', sets: 4, reps: 15, weight: 0, icon: 'back', equipment: 'dumbbells' },

    // ===== НОГИ =====
    { name: 'Приседания с гантелями', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Приседания с гантелями глубокие', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Приседания плие с гантелью', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Фронтальные приседания с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады с гантелями на правую ногу', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады с гантелями на левую ногу', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады назад с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады в стороны с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Румынская тяга с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Становая тяга с гантелями', category: 'Ноги', sets: 4, reps: 10, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Мёртвая тяга с гантелями', category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Подъём на носки с гантелями', category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик с гантелью', category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на правую ногу', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на левую ногу', category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },

    // ===== ПЛЕЧИ =====
    { name: 'Жим гантелей сидя', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим гантелей стоя', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим Арнольда', category: 'Плечи', sets: 4, reps: 10, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим Арнольда сидя', category: 'Плечи', sets: 4, reps: 10, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в стороны стоя', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в стороны сидя', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в наклоне', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в наклоне сидя', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Тяга к подбородку с гантелями', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Махи гантелями перед собой', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим одной гантели сидя', category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },

    // ===== ПРЕСС =====
    { name: 'Скручивания с гантелью', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'dumbbells' },
    { name: 'Твист сидя с гантелью', category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'dumbbells' },
    { name: 'Твист корпуса с гантелью', category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'dumbbells' },

    // ===== РУКИ =====
    { name: 'Сгибание рук с гантелями', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями стоя', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями сидя', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями на скамье Скотта', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Молотковые сгибания', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Французский жим с гантелью стоя', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Французский жим с гантелью сидя', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Французский жим с гантелями лёжа', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями хватом молот', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Разгибание рук с гантелью из-за головы', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Обратные отжимания от стула с весом', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Жим лёжа узким хватом', category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },

    // ===== ЗАРЯДКА (с гантелями) =====
    { name: 'Вращение плечами с гантелями', category: 'Зарядка', sets: 3, reps: 12, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', sets: 3, reps: 12, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Приседания с гантелями', category: 'Зарядка', sets: 3, reps: 15, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Вращение корпусом с гантелью', category: 'Зарядка', sets: 3, reps: 12, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Твист корпуса с гантелью', category: 'Зарядка', sets: 3, reps: 15, weight: 0, icon: 'charging', equipment: 'dumbbells' },

    // ===== ПИЛАТЕС (с гантелями) =====
    { name: 'Сотня с отягощением', category: 'Пилатес', sets: 3, reps: 20, weight: 0, icon: 'Pilates', equipment: 'dumbbells' },
    { name: 'Подъем таза с гантелью', category: 'Пилатес', sets: 3, reps: 15, weight: 0, icon: 'Pilates', equipment: 'dumbbells' },
    { name: 'Ножницы ногами с утяжелением', category: 'Пилатес', sets: 3, reps: 20, weight: 0, icon: 'Pilates', equipment: 'dumbbells' },

    // ====================================================================
    // БЛОК 3: ШТАНГА
    // ====================================================================

    { name: 'Жим штанги лёжа', category: 'Грудь', sets: 4, reps: 10, weight: 0, icon: 'breast', equipment: 'barbell' },
    { name: 'Становая тяга со штангой', category: 'Ноги', sets: 4, reps: 8, weight: 0, icon: 'legs', equipment: 'barbell' },
    { name: 'Приседания со штангой', category: 'Ноги', sets: 4, reps: 10, weight: 0, icon: 'legs', equipment: 'barbell' },
    { name: 'Жим штанги стоя', category: 'Плечи', sets: 4, reps: 10, weight: 0, icon: 'shoulder', equipment: 'barbell' },
    { name: 'Тяга штанги к поясу', category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'barbell' },
    { name: 'Сгибание рук со штангой', category: 'Руки', sets: 4, reps: 10, weight: 0, icon: 'bodybuilding', equipment: 'barbell' },

    // ====================================================================
    // БЛОК 4: ТУРНИК
    // ====================================================================

    // ===== СПИНА =====
    { name: 'Подтягивания', category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания широким хватом', category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания узким хватом', category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания обратным хватом', category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания нейтральным хватом', category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания с отягощением', category: 'Спина', sets: 4, reps: 8, weight: 0, icon: 'back', equipment: 'pullup' },

    // ===== ПРЕСС =====
    { name: 'Подъём ног в висе', category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'pullup' },
    { name: 'Подъём ног в висе с весом', category: 'Пресс', sets: 4, reps: 12, weight: 0, icon: 'press', equipment: 'pullup' },

    // ===== РАСТЯЖКА ПОЗВОНОЧНИКА =====
    { name: 'Вис на турнике', category: 'Растяжка позвоночника', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'pullup' },

    // ====================================================================
    // PREMIUM
    // ====================================================================

    // ===== КРОССФИТ =====
    { name: 'Бёрпи с отжиманием', category: 'Кроссфит', sets: 4, reps: 15, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Бёрпи с прыжком вверх', category: 'Кроссфит', sets: 4, reps: 12, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Отжимания с хлопком', category: 'Кроссфит', sets: 4, reps: 12, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Приседания с выпрыгиванием', category: 'Кроссфит', sets: 4, reps: 15, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Прыжки из приседа', category: 'Кроссфит', sets: 4, reps: 20, weight: 0, icon: 'crossfit', equipment: 'none' },

    // ===== МУЖСКАЯ СИЛА =====
    { name: 'Кегель для мужчин', category: 'Мужская сила', sets: 4, reps: 20, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Ягодичный мостик с гантелью', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на правую ногу', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Ягодичный мостик на левую ногу', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги', category: 'Мужская сила', sets: 4, reps: '25 сек', weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Болгарские сплит-приседания с гантелями', category: 'Мужская сила', sets: 4, reps: 12, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Румынская тяга с гантелями', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Выпады с прыжком на правую ногу', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Выпады с прыжком на левую ногу', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Боковые выпады с гантелью на правую ногу', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Боковые выпады с гантелью на левую ногу', category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },

    // ===== ЖЕНСКОЕ СЧАСТЬЕ =====
    { name: 'Кегель для женщин', category: 'Женское счастье', sets: 4, reps: 20, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Ягодичный мостик с гантелью', category: 'Женское счастье', sets: 4, reps: 20, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на правую ногу', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Ягодичный мостик на левую ногу', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Приседания плие с гантелью', category: 'Женское счастье', sets: 4, reps: 20, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Боковая планка на правую сторону', category: 'Женское счастье', sets: 4, reps: '30 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Боковая планка на левую сторону', category: 'Женское счастье', sets: 4, reps: '30 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Планка с подъемом ноги на правую ногу', category: 'Женское счастье', sets: 4, reps: '40 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Планка с подъемом ноги на левую ногу', category: 'Женское счастье', sets: 4, reps: '40 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Болгарские сплит-приседания с гантелями', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Выпады с прыжком на правую ногу', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Выпады с прыжком на левую ногу', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Румынская тяга с гантелями', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Боковые выпады с гантелью на правую ногу', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Боковые выпады с гантелью на левую ногу', category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
];

// =================== ФИЛЬТРАЦИЯ ПО ИНВЕНТАРЮ ===================
/**
 * Возвращает отфильтрованный список упражнений по инвентарю пользователя
 * @param {Array} userInventory — массив выбранного инвентаря, например ['dumbbells', 'mat']
 * @returns {Array} — отфильтрованный список
 */
function filterExercisesByInventory(userInventory) {
    const inventory = Array.isArray(userInventory) ? userInventory : [];
    
    return EXERCISES_CATALOG.filter(ex => {
        const eq = ex.equipment || 'none';
        
        // 'none' и 'mat' — доступно всегда
        if (eq === 'none' || eq === 'mat') {
            return true;
        }
        
        // Проверяем, есть ли нужный инвентарь
        return inventory.includes(eq);
    });
}

// =================== ПОЛУЧЕНИЕ ИНВЕНТАРЯ ПОЛЬЗОВАТЕЛЯ ===================
function getUserInventoryFromStorage() {
    try {
        const saved = localStorage.getItem('userInventory');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Ошибка чтения инвентаря:', e);
    }
    return [];
}

// =================== ГОТОВЫЕ ТРЕНИРОВКИ (АДАПТИВНЫЕ) ===================
// Структура тренировки:
// {
//   core: [упражнения без инвентаря — всегда],
//   pullup: [если есть турник],
//   barbell: [если есть штанга],
//   dumbbells: [если есть гантели],
//   noEquipment: [если нет ничего],
//   _restTime: 30,       // опционально
//   _premium: true,      // опционально
//   _gender: true        // опционально (для ГТО)
// }

const exercisesData = {
    'Силовые': {
        'Руки': {
            '1 LVL': {
                core: [
                    { name: 'Отжимания от стены', category: 'Руки', reps: '12', sets: '3', weight: 0, icon: 'bodybuilding' },
                    { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' },
                    { name: 'Отжимания от коленей', category: 'Грудь', reps: '10', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Отжимания узким хватом', category: 'Руки', reps: '10', sets: '3', weight: 0, icon: 'bodybuilding' },
                    { name: 'Алмазные отжимания', category: 'Руки', reps: '8', sets: '3', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Руки', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '12', sets: '3', weight: 0, icon: 'bodybuilding' },
                    { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '3', weight: 0, icon: 'bodybuilding' }
                ],
                noEquipment: [
                    { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' },
                    { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Французский жим с гантелями лёжа', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Обратные отжимания от стула', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Отжимания узким хватом', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Алмазные отжимания', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания узким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания обратным хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' }
                ],
                barbell: [
                    { name: 'Сгибание рук со штангой', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Жим штанги узким хватом', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Французский жим со штангой', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                dumbbells: [
                    { name: 'Сгибание рук с гантелями хватом молот', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Разгибание рук с гантелью из-за головы', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Обратные отжимания от стула с весом', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                noEquipment: [
                    { name: 'Отжимания от пола широким хватом', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Французский жим с гантелями лёжа', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Обратные отжимания от стула с весом', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Разгибание рук с гантелью из-за головы', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Сгибание рук с гантелями хватом молот', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Отжимания на одной руке на правую руку', category: 'Руки', reps: '6', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Отжимания на одной руке на левую руку', category: 'Руки', reps: '6', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания с отягощением', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания узким хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' }
                ],
                barbell: [
                    { name: 'Сгибание рук со штангой', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Жим штанги узким хватом', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Французский жим со штангой лёжа', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                dumbbells: [
                    { name: 'Сгибание рук с гантелями хватом молот', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Разгибание рук с гантелью из-за головы', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Сгибание рук с гантелями сидя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                noEquipment: [
                    { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' },
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' }
                ]
            }
        },
        'Плечи': {
            '1 LVL': {
                core: [
                    { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '8', sets: '3', weight: 0, icon: 'shoulder' },
                    { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                    { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                    { name: 'Планка на вытянутых руках', category: 'Плечи', reps: '20 сек', sets: '3', weight: 0, icon: 'shoulder' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Плечи', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                    { name: 'Разведение гантелей в стороны сидя', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' }
                ],
                noEquipment: [
                    { name: 'Планка с касанием плеч', category: 'Плечи', reps: '16', sets: '3', weight: 0, icon: 'shoulder' },
                    { name: 'Отжимания в стойке с опорой', category: 'Плечи', reps: '8', sets: '3', weight: 0, icon: 'shoulder' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Тяга к подбородку с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Жим Арнольда', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                pullup: [
                    { name: 'Подтягивания широким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания обратным хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Плечи', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Жим штанги стоя', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Тяга штанги к подбородку', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Жим штанги из-за головы', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                dumbbells: [
                    { name: 'Жим одной гантели сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Разводка гантелей в наклоне сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Жим Арнольда сидя', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                noEquipment: [
                    { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Отжимания в стойке с опорой', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Планка с касанием плеч', category: 'Плечи', reps: '20', sets: '4', weight: 0, icon: 'shoulder' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Тяга к подбородку с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Жим Арнольда', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Плечи', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Жим штанги стоя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Тяга штанги к подбородку', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Жим штанги из-за головы', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                dumbbells: [
                    { name: 'Жим одной гантели сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Разводка гантелей в наклоне сидя', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Жим Арнольда сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                noEquipment: [
                    { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Отжимания в стойке с опорой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                    { name: 'Планка с касанием плеч', category: 'Плечи', reps: '24', sets: '4', weight: 0, icon: 'shoulder' }
                ]
            }
        },
        'Пресс': {
            '1 LVL': {
                core: [
                    { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Подъём ног лёжа', category: 'Пресс', reps: '12', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Вакуум живота стоя', category: 'Пресс', reps: '10 сек', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Велосипед лёжа', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '8', sets: '3', weight: 0, icon: 'press' }
                ],
                dumbbells: [
                    { name: 'Скручивания с гантелью', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Твист сидя с гантелью', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' }
                ],
                noEquipment: [
                    { name: 'Боковая планка на коленях на правую сторону', category: 'Пресс', reps: '15 сек', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Боковая планка на коленях на левую сторону', category: 'Пресс', reps: '15 сек', sets: '3', weight: 0, icon: 'press' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём ног лёжа', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Ножницы ногами', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Планка на локтях', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Планка на вытянутых руках', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём таза лёжа', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Велосипед лёжа', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '10', sets: '4', weight: 0, icon: 'press' }
                ],
                dumbbells: [
                    { name: 'Скручивания с гантелью', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Твист сидя с гантелью', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Твист корпуса с гантелью', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' }
                ],
                noEquipment: [
                    { name: 'Планка с подъёмом ног', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём ног лёжа под углом 45°', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Ножницы ногами', category: 'Пресс', reps: '30', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Планка на локтях с подъёмом ног', category: 'Пресс', reps: '45 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Планка на руках с касанием плеч', category: 'Пресс', reps: '16', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём таза лёжа', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Велосипед лёжа', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Русский твист', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' }
                ],
                dumbbells: [
                    { name: 'Скручивания с гантелью', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Твист сидя с гантелью', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Твист корпуса с гантелью', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' }
                ],
                noEquipment: [
                    { name: 'Боковая планка с подъёмом ног на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Боковая планка с подъёмом ног на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Книжка (складывание)', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' }
                ]
            }
        },
        'Грудь': {
            '1 LVL': {
                core: [
                    { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Отжимания от стены', category: 'Грудь', reps: '15', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Отжимания от пола', category: 'Грудь', reps: '10', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Плечи', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' }
                ],
                noEquipment: [
                    { name: 'Отжимания широким хватом', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '10', sets: '3', weight: 0, icon: 'breast' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания широким хватом', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с узкой постановкой рук', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания широким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Плечи', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Жим штанги лёжа', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим штанги на наклонной скамье', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Разводка штанги лёжа', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' }
                ],
                dumbbells: [
                    { name: 'Разводка гантелей на наклонной скамье', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим одной гантели лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Пуловер с гантелью', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' }
                ],
                noEquipment: [
                    { name: 'Отжимания с паузой внизу', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания в алмаз', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания на одной руке на правую руку', category: 'Грудь', reps: '6', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания на одной руке на левую руку', category: 'Грудь', reps: '6', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с паузой внизу', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания в алмаз', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания с отягощением', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Плечи', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Жим штанги лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим штанги на наклонной скамье', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Жим штанги узким хватом', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' }
                ],
                dumbbells: [
                    { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Разводка гантелей на наклонной скамье', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Пуловер с гантелью', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' }
                ],
                noEquipment: [
                    { name: 'Отжимания с паузой внизу', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' }
                ]
            }
        },
        'Спина': {
            '1 LVL': {
                core: [
                    { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Гиперэкстензия', category: 'Спина', reps: '15', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Супермен', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Шраги с гантелями', category: 'Спина', reps: '15', sets: '3', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Лодочка с задержкой', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Планка на локтях', category: 'Пресс', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания широким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания узким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга двух гантелей к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Гиперэкстензия', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Шраги с гантелями', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' }
                ],
                pullup: [
                    { name: 'Подтягивания нейтральным хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания обратным хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Тяга штанги к поясу', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Становая тяга со штангой', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Шраги со штангой', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' }
                ],
                dumbbells: [
                    { name: 'Тяга гантелей к поясу в наклоне', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга гантели к поясу с упором', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Гиперэкстензия с весом', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Супермен', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга двух гантелей к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Гиперэкстензия с весом', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Шраги с гантелями', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' }
                ],
                pullup: [
                    { name: 'Подтягивания с отягощением', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подтягивания узким хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Становая тяга со штангой', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга штанги к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Шраги со штангой', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' }
                ],
                dumbbells: [
                    { name: 'Тяга гантелей к поясу в наклоне', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга гантели к поясу с упором', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Шраги с гантелями', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Супермен', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Планка на локтях с подъёмом рук', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' }
                ]
            }
        },
        'Ноги': {
            '1 LVL': {
                core: [
                    { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Приседания у стены', category: 'Ноги', reps: '30 сек', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Подъём на носки стоя', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Махи ногой назад', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'legs' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '8', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Подъём на носки с гантелями', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' }
                ],
                noEquipment: [
                    { name: 'Приседания с задержкой', category: 'Ноги', reps: '30 сек', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик на одной ноге', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Выпады с прыжком', category: 'Ноги', reps: '10', sets: '3', weight: 0, icon: 'legs' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Румынская тяга с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Подъём на носки с гантелями', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Мёртвая тяга с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '10', sets: '4', weight: 0, icon: 'press' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '8', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' }
                ],
                dumbbells: [
                    { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады в стороны с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады назад с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' }
                ],
                noEquipment: [
                    { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады с прыжком', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик на одной ноге', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Румынская тяга с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Мёртвая тяга с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Подъём на носки с гантелями', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады со штангой', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' }
                ],
                dumbbells: [
                    { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады в стороны с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
                ],
                noEquipment: [
                    { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады с прыжком', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Ягодичный мостик на одной ноге', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' }
                ]
            }
        },
        'Всё тело': {
            '1 LVL': {
                core: [
                    { name: 'Приседания без веса', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' },
                    { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', weight: 0, icon: 'press' },
                    { name: 'Бёрпи', category: 'Ноги', reps: '8', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Джампинг Джек', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'WholeBody' },
                    { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '8', sets: '3', weight: 0, icon: 'press' }
                ],
                dumbbells: [
                    { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '3', weight: 0, icon: 'legs' },
                    { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '3', weight: 0, icon: 'legs' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Отжимания от пола', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Джампинг Джек', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'WholeBody' },
                    { name: 'Скручивания лёжа', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '8', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Жим штанги стоя', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                dumbbells: [
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Подъём на носки с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                noEquipment: [
                    { name: 'Прыжки из приседа', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
                    { name: 'Выпады с прыжком', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                    { name: 'Планка с подъёмом ног', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Бёрпи', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'WholeBody' },
                    { name: 'Скручивания с гантелью', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Ягодичный мостик с гантелью', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
                ],
                pullup: [
                    { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Тяга штанги к поясу', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' }
                ],
                dumbbells: [
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' }
                ],
                noEquipment: [
                    { name: 'Бёрпи с прыжком вверх', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                    { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'WholeBody' },
                    { name: 'Выпады с прыжком', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
                ]
            }
        }
    },

    'Фитнес': {
        'Зарядка': {
            '1 LVL': [
                { name: 'Наклоны головы', category: 'Пресс', reps: '10', sets: '3', icon: 'press' },
                { name: 'Вращение плечами', category: 'Плечи', reps: '10', sets: '3', icon: 'shoulder' },
                { name: 'Наклоны туловища', category: 'Спина', reps: '12', sets: '3', icon: 'back' },
                { name: 'Приседания', category: 'Ноги', reps: '15', sets: '3', icon: 'legs' },
                { name: 'Махи ногами', category: 'Ноги', reps: '12', sets: '3', icon: 'legs' },
                { name: 'Круговые движения тазом', category: 'Ягодицы', reps: '10', sets: '3', icon: 'legs' },
                { name: 'Потягивание вверх', category: 'Спина', reps: '10', sets: '3', icon: 'back' }
            ],
            '2 LVL': [
                { name: 'Наклоны головы с сопротивлением', category: 'Пресс', reps: '12', sets: '4', icon: 'press' },
                { name: 'Вращение плечами с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Наклоны туловища с гантелями', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Планка', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Вращение корпусом с гантелью', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' }
            ],
            '3 LVL': [
                { name: 'Наклоны головы с отягощением', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                { name: 'Вращение плечами с гантелями', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Наклоны туловища с гантелями', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Планка с подъемом рук', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Твист корпуса с гантелью', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' }
            ]
        },
        'Кардио': {
            '1 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '30 сек', sets: '3', icon: 'cardio' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '20', sets: '3', icon: 'cardio' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '15', sets: '3', icon: 'cardio' },
                { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '8', sets: '3', icon: 'cardio' },
                { name: 'Ходьба с высоким подниманием колен', category: 'Ноги', reps: '20 сек', sets: '3', icon: 'cardio' },
                { name: 'Прыжки со сменой ног', category: 'Ноги', reps: '15', sets: '3', icon: 'cardio' }
            ],
            '2 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '45 сек', sets: '4', icon: 'cardio' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '30', sets: '4', icon: 'cardio' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', icon: 'cardio' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', icon: 'cardio' },
                { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4', icon: 'cardio' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4', icon: 'cardio' },
                { name: 'Прыжки ноги вместе-врозь', category: 'Ноги', reps: '20', sets: '4', icon: 'cardio' }
            ],
            '3 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '60 сек', sets: '5', icon: 'cardio' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '35', sets: '5', icon: 'cardio' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '30', sets: '5', icon: 'cardio' },
                { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5', icon: 'cardio' },
                { name: 'Скакалка (быстрая)', category: 'Ноги', reps: '45 сек', sets: '5', icon: 'cardio' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '25', sets: '5', icon: 'cardio' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5', icon: 'cardio' },
                { name: 'Берпи с прыжком вверх', category: 'Ноги', reps: '12', sets: '5', icon: 'cardio' }
            ]
        },
        'Пилатес': {
            '1 LVL': [
                { name: 'Сотня (дыхание + руки)', category: 'Пресс', reps: '10', sets: '3', icon: 'Pilates' },
                { name: 'Скручивание с подъемом ног', category: 'Пресс', reps: '12', sets: '3', icon: 'Pilates' },
                { name: 'Подъем таза лёжа', category: 'Ягодицы', reps: '15', sets: '3', icon: 'Pilates' },
                { name: 'Ножницы ногами', category: 'Ноги', reps: '15', sets: '3', icon: 'Pilates' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', icon: 'Pilates' },
                { name: 'Боковые наклоны сидя', category: 'Пресс', reps: '10', sets: '3', icon: 'Pilates' },
                { name: 'Растяжка позвоночника (кошка)', category: 'Спина', reps: '10', sets: '3', icon: 'Pilates' }
            ],
            '2 LVL': [
                { name: 'Сотня с вытянутыми ногами', category: 'Пресс', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Скручивание с подъемом ног', category: 'Пресс', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                { name: 'Ножницы ногами', category: 'Ноги', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '20 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '20 сек', sets: '4', icon: 'Pilates' },
                { name: 'Растяжка спины (скручивание)', category: 'Спина', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Мостик с подъемом ноги на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' },
                { name: 'Мостик с подъемом ноги на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' }
            ],
            '3 LVL': [
                { name: 'Сотня с отягощением', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                { name: 'Скручивание с подъемом ног и рук', category: 'Пресс', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                { name: 'Ножницы ногами с утяжелением', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'Pilates' },
                { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'Pilates' },
                { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'Pilates' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Растяжка в позе голубя', category: 'Ягодицы', reps: '20 сек', sets: '4', icon: 'Pilates' },
                { name: 'Стойка на лопатках', category: 'Спина', reps: '20 сек', sets: '4', icon: 'Pilates' }
            ]
        },
        'Растяжка': {
            '1 LVL': [
                { name: 'Наклоны к ногам сидя', category: 'Спина', reps: '25 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка шеи', category: 'Плечи', reps: '15 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка рук за спиной', category: 'Руки', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Наклоны в стороны', category: 'Спина', reps: '15 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка спины (кошка-корова)', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Ягодичный мостик (статический)', category: 'Ягодицы', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка трицепса', category: 'Руки', reps: '15 сек', sets: '3', icon: 'stretching' }
            ],
            '2 LVL': [
                { name: 'Глубокий наклон к ногам', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка шеи с руками', category: 'Плечи', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка плеч (замок)', category: 'Плечи', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Боковые наклоны с руками', category: 'Спина', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка спины (скручивание)', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка ног (шпагат)', category: 'Ноги', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза голубя', category: 'Ягодицы', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка задней поверхности бедра', category: 'Ноги', reps: '20 сек', sets: '4', icon: 'stretching' }
            ],
            '3 LVL': [
                { name: 'Глубокий наклон с захватом ног', category: 'Спина', reps: '40 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка шеи с сопротивлением', category: 'Плечи', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка плеч за спиной', category: 'Плечи', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Боковые наклоны с захватом', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка позвоночника (мост)', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Продольный шпагат', category: 'Ноги', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Поперечный шпагат', category: 'Ноги', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза верблюда', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Складка с захватом стоп', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' }
            ]
        }
    },

    'Особые': {
        'Кроссфит': {
            '1 LVL': {
                core: [
                    { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Прыжки на месте', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Джампинг Джек', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '10', sets: '4', weight: 0, icon: 'press' }
                ],
                dumbbells: [
                    { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'crossfit' }
                ],
                noEquipment: [
                    { name: 'Выпады с прыжком', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Бёрпи', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4', weight: 0, icon: 'crossfit' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Жим штанги стоя', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'crossfit' }
                ],
                dumbbells: [
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'crossfit' }
                ],
                noEquipment: [
                    { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                    { name: 'Прыжки из приседа', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Бёрпи с прыжком вверх', category: 'Ноги', reps: '12', sets: '5', weight: 0, icon: 'crossfit' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '5', weight: 0, icon: 'back' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '12', sets: '5', weight: 0, icon: 'press' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Тяга штанги к поясу', category: 'Спина', reps: '10', sets: '5', weight: 0, icon: 'crossfit' }
                ],
                dumbbells: [
                    { name: 'Выпады с гантелями', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '5', weight: 0, icon: 'crossfit' }
                ],
                noEquipment: [
                    { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                    { name: 'Бёрпи с прыжком вверх', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' }
                ]
            },
            '_premium': true
        },
        'Мужская сила': {
            '1 LVL': {
                core: [
                    { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Приседания с задержкой', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Планка с подъемом таза', category: 'Пресс', reps: '20 сек', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Махи ногами в сторону на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Махи ногами в сторону на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Подъем на носки', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'men' }
                ],
                dumbbells: [
                    { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'men' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '8', sets: '4', weight: 0, icon: 'men' }
                ],
                noEquipment: [
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Подъём на носки', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'men' }
                ],
                dumbbells: [
                    { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'men' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'men' }
                ],
                noEquipment: [
                    { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Приседания с задержкой', category: 'Ноги', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '25', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Болгарские сплит-приседания', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Боковые выпады на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Боковые выпады на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' }
                ],
                dumbbells: [
                    { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' }
                ],
                pullup: [
                    { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'men' }
                ],
                barbell: [
                    { name: 'Приседания со штангой', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Становая тяга со штангой', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'men' }
                ],
                noEquipment: [
                    { name: 'Боковые выпады на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Боковые выпады на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                    { name: 'Приседания с задержкой', category: 'Ноги', reps: '45 сек', sets: '4', weight: 0, icon: 'men' }
                ]
            },
            '_premium': true
        },
        'Женское счастье': {
            '1 LVL': {
                core: [
                    { name: 'Кегель для женщин', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Приседания плие', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Планка на коленях', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Махи ногой назад на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Махи ногой назад на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Отведение ноги в сторону стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Отведение ноги в сторону стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' }
                ],
                dumbbells: [
                    { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '8', sets: '4', weight: 0, icon: 'woman' }
                ],
                noEquipment: [
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Кегель для женщин', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Болгарские сплит-приседания', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Отведение ноги в сторону стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Отведение ноги в сторону стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' }
                ],
                dumbbells: [
                    { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'woman' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Вис на турнике', category: 'Спина', reps: '15 сек', sets: '4', weight: 0, icon: 'woman' }
                ],
                noEquipment: [
                    { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Приседания плие', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'woman' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Кегель для женщин', category: 'Ягодицы', reps: '25', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Болгарские сплит-приседания', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' }
                ],
                dumbbells: [
                    { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' }
                ],
                pullup: [
                    { name: 'Подъём ног в висе', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Подъём ног в висе с весом', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'woman' }
                ],
                noEquipment: [
                    { name: 'Боковые выпады на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Боковые выпады на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                    { name: 'Румынская тяга (без веса)', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' }
                ]
            },
            '_premium': true
        },
        'Растяжка позвоночника': {
            '1 LVL': {
                core: [
                    { name: 'Наклоны вперёд сидя', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                    { name: 'Кошка-корова', category: 'Спина', reps: '10', sets: '3', icon: 'stretching' },
                    { name: 'Растяжка спины на полу (скручивание)', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя', category: 'Спина', reps: '15 сек', sets: '3', icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Вис на турнике', category: 'Спина', reps: '15 сек', sets: '3', icon: 'stretching' },
                    { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Скручивание лёжа', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Ягодицы', reps: '20 сек', sets: '3', icon: 'stretching' }
                ]
            },
            '2 LVL': {
                core: [
                    { name: 'Глубокий наклон вперёд с захватом ног', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', category: 'Спина', reps: '15', sets: '4', icon: 'stretching' },
                    { name: 'Скручивание лёжа (позвоночник)', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Ягодицы', reps: '25 сек', sets: '4', icon: 'stretching' },
                    { name: 'Растяжка спины на фитболе', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Вис на турнике', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                    { name: 'Подтягивания', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' }
                ],
                dumbbells: [
                    { name: 'Наклоны с гантелью в стороны', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Скручивание позвоночника сидя', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                    { name: 'Поза лука', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' }
                ]
            },
            '3 LVL': {
                core: [
                    { name: 'Глубокий наклон с захватом стоп', category: 'Спина', reps: '35 сек', sets: '4', icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                    { name: 'Поза лука', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                    { name: 'Мост (позвоночник)', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                    { name: 'Стойка на лопатках (плечи)', category: 'Плечи', reps: '25 сек', sets: '4', icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Вис на турнике', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                    { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' }
                ],
                dumbbells: [
                    { name: 'Наклоны с гантелью в стороны', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Тяга гантели к поясу', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' }
                ],
                noEquipment: [
                    { name: 'Скручивание лёжа глубокое', category: 'Спина', reps: '35 сек', sets: '4', icon: 'stretching' },
                    { name: 'Поза голубя глубокая', category: 'Ягодицы', reps: '30 сек', sets: '4', icon: 'stretching' }
                ]
            },
            '_premium': true
        },
        'ГТО': {
            _gender: true,
            _premium: true,
            'Женский': {
                '1 СТУПЕНЬ': [ /* оставляем как есть — ГТО не адаптируем */ ],
                // ... остальные ступени без изменений
            },
            'Мужской': {
                '1 СТУПЕНЬ': [ /* оставляем как есть */ ],
                // ...
            }
        }
    }
};

// =================== ФУНКЦИЯ-СБОРЩИК ===================
/**
 * Собирает итоговый список упражнений для тренировки на основе инвентаря пользователя.
 * @param {Object} levelData — объект {core, pullup, barbell, dumbbells, noEquipment}
 * @param {Array} userInventory — массив ['dumbbells', 'mat', ...]
 * @returns {Array} — массив упражнений
 */
function buildWorkoutForUser(levelData, userInventory) {
    // Если это старый формат (просто массив) — возвращаем как есть
    if (Array.isArray(levelData)) {
        return levelData;
    }
    if (!levelData || !Array.isArray(levelData.core)) {
        return [];
    }

    const inventory = Array.isArray(userInventory) ? userInventory : [];
    const result = [...levelData.core];

    // ★★★ ОПРЕДЕЛЯЕМ ВЕТКУ ПО ПРИОРИТЕТУ ★★★
    let branch = null;

    if (inventory.includes('pullup') && Array.isArray(levelData.pullup) && levelData.pullup.length > 0) {
        branch = levelData.pullup;
    } else if (inventory.includes('barbell') && Array.isArray(levelData.barbell) && levelData.barbell.length > 0) {
        branch = levelData.barbell;
    } else if (inventory.includes('dumbbells') && Array.isArray(levelData.dumbbells) && levelData.dumbbells.length > 0) {
        branch = levelData.dumbbells;
    } else if (Array.isArray(levelData.noEquipment)) {
        branch = levelData.noEquipment;
    }

    if (branch) {
        result.push(...branch);
    }

    return result;
}