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