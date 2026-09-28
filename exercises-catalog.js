// =================== ОТДЕЛЬНЫЙ КАТАЛОГ УПРАЖНЕНИЙ ===================
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
function filterExercisesByInventory(userInventory) {
    if (typeof EXERCISES_CATALOG === 'undefined') return [];
    
    return EXERCISES_CATALOG.filter(ex => {
        if (!ex.equipment || !Array.isArray(ex.equipment) || ex.equipment.length === 0) {
            return true;
        }
        
        if (userInventory.length === 0) {
            return ex.equipment.includes('bodyweight') || ex.equipment.includes('none');
        }
        
        return ex.equipment.some(item => 
            userInventory.includes(item) || item === 'bodyweight' || item === 'none'
        );
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
                none: [
                {name:'Отжимания от стены',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания от коленей',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула',category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом с коленей',category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках',category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч',category:'Руки',reps:'16',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Сгибание рук с гантелями стоя',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук хватом молот сидя',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью сидя',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула',category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках',category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Австралийские подтягивания',category:'Руки',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Руки',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Негативные подтягивания обратным хватом',category:'Руки',reps:'5',sets:'3',weight:0,icon:'back'},
                {name:'Отжимания от коленей',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула',category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках',category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Сгибание рук с гантелями стоя',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью сидя',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Австралийские подтягивания',category:'Руки',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Руки',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках',category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: вращение плечами и руками',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом',category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Алмазные отжимания',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула',category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания с ногами на возвышении',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках',category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч',category:'Руки',reps:'20',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания с касанием плеча',category:'Руки',reps:'16',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами с гантелями',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук с гантелями стоя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Концентрированные сгибания',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук хватом молот сидя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом',category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках',category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания обратным хватом',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания нейтральным хватом',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания',category:'Руки',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Негативные подтягивания',category:'Руки',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Руки',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом',category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках',category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами с гантелями',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук с гантелями стоя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания обратным хватом',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Концентрированные сгибания',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Вис на турнике',category:'Руки',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках',category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: вращение плечами',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: круговые вращения руками',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания на одной руке (негативные)',category:'Руки',reps:'5',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Псевдо-планш отжимания',category:'Руки',reps:'8',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Алмазные отжимания с ногами на возвышении',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула с ногами на возвышении',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу (глубоко)',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке',category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с подъёмом рук',category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания с касанием плеча (медленно)',category:'Руки',reps:'16',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: махи гантелями',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук с гантелями сидя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Концентрированные сгибания',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания (тяжёлые)',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук хватом молот сидя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания на одной руке (негативные)',category:'Руки',reps:'5',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Псевдо-планш отжимания',category:'Руки',reps:'8',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке',category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: махи руками',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания с отягощением',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом с паузой',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания обратным хватом',category:'Руки',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания нейтральным хватом',category:'Руки',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Руки',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)',category:'Руки',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания на одной руке (негативные)',category:'Руки',reps:'5',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Псевдо-планш отжимания',category:'Руки',reps:'8',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке',category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами',category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: махи гантелями',category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания с отягощением',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом с паузой',category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Руки',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Сгибание рук с гантелями сидя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания (тяжёлые)',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Концентрированные сгибания',category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы',category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке',category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Пресс': {
            '1 LVL': {
                none: [
                {name:'Скручивания лёжа',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Обратные скручивания',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Велосипед лёжа',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Планка на коленях',category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя',category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'},
                {name:'Подъём таза лёжа',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Ножницы ногами',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'}
                ],
                dumbbells: [
                {name:'Скручивания с гантелью',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Русский твист с гантелью',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Обратные скручивания',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Велосипед лёжа',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя',category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'}
                ],
                pullup: [
                {name:'Скручивания лёжа',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Подъём колен в висе',category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Вис на турнике',category:'Пресс',reps:'15 сек',sets:'3',weight:0,icon:'press'},
                {name:'Велосипед лёжа',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Обратные скручивания',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя',category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'}
                ],
                dumbbells_pullup: [
                {name:'Скручивания с гантелью',category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Подъём колен в висе',category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Русский твист с гантелью',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Вис на турнике',category:'Пресс',reps:'15 сек',sets:'3',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя',category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Скручивания с вытянутыми руками',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём прямых ног лёжа',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Велосипед лёжа',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём таза лёжа',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Ножницы ногами',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на левую',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Скручивания с гантелью',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист с гантелью',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Обратные скручивания с гантелью',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Велосипед лёжа',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на левую',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём колен в висе',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Скручивания с вытянутыми руками',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Велосипед лёжа',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Ножницы ногами',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Вис на турнике',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём ног в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Скручивания с гантелью',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист с гантелью',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём колен в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Вис на турнике',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Подъём прямых ног под 45°',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с подъёмом ног',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers лёжа',category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Подъём таза с опорой на руки',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке',category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка с подъёмом ноги',category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'V-складка с гантелью',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп под 45°',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с гантелью',category:'Пресс',reps:'25',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers лёжа',category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Подъём таза с опорой на руки',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке',category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём прямых ног в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног в висе с отягощением',category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers в висе',category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с подъёмом ног',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Вис на турнике',category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке',category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом',category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём прямых ног в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers в висе',category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка с гантелью',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с гантелью',category:'Пресс',reps:'25',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью',category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке',category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Ноги': {
            '1 LVL': {
                none: [
                {name:'Круговые движения тазом',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады на месте',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Ягодичный мостик',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём на носки',category:'Ноги',reps:'20',sets:'3',weight:0,icon:'legs'},
                {name:'Махи ногой назад',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания у стены',category:'Ноги',reps:'25 сек',sets:'3',weight:0,icon:'legs'}
                ],
                dumbbells: [
                {name:'Круговые движения тазом',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады с гантелями',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём на носки с гантелями',category:'Ноги',reps:'20',sets:'3',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'}
                ],
                pullup: [
                {name:'Круговые движения тазом',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады на месте',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём колен в висе',category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Ягодичный мостик',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём на носки',category:'Ноги',reps:'20',sets:'3',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Ноги',reps:'15 сек',sets:'3',weight:0,icon:'legs'}
                ],
                dumbbells_pullup: [
                {name:'Круговые движения тазом',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады с гантелями',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём колен в висе',category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Ягодичный мостик с гантелью',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Ноги',reps:'15 сек',sets:'3',weight:0,icon:'legs'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: круговые движения тазом и махи',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с прыжком',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки (медленно)',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания у стены',category:'Ноги',reps:'40 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки из приседа',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Махи ногой назад (медленно)',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells: [
                {name:'Разминка: круговые движения тазом и махи',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с гантелями (шагающие)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки с гантелями',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге (без веса)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'}
                ],
                pullup: [
                {name:'Разминка: круговые движения тазом и махи',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе',category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Выпады с прыжком',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания у стены',category:'Ноги',reps:'40 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки из приседа',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Ноги',reps:'25 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Махи ногой назад (медленно)',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые движения тазом и махи',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе',category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Болгарские сплит-приседания с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с гантелями (шагающие)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки с гантелями',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Ноги',reps:'25 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: круговые движения тазом',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Пистолетик (присед на одной ноге)',category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания с выпрыгиванием',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с прыжком',category:'Ноги',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с прыжком',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания у стены (глубоко)',category:'Ноги',reps:'60 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки на одной ноге',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны глубоко',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Махи ногой назад (медленно, амплитудно)',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells: [
                {name:'Разминка: круговые движения тазом',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями глубокие',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Становая тяга с гантелями',category:'Ноги',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с гантелями (тяжёлые)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с гантелями (шагающие)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга на одной ноге с гантелью',category:'Ноги',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой с гантелью',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью (тяжёлые)',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Пистолетик (с опорой)',category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'}
                ],
                pullup: [
                {name:'Разминка: круговые движения тазом',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Пистолетик (присед на одной ноге)',category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног в висе с отягощением',category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Приседания с выпрыгиванием',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с прыжком',category:'Ноги',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с прыжком',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Ноги',reps:'30 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки на одной ноге',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые движения тазом',category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями глубокие',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Становая тяга с гантелями',category:'Ноги',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с гантелями (тяжёлые)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём ног в висе с отягощением',category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Выпады с гантелями (шагающие)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга на одной ноге с гантелью',category:'Ноги',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Ноги',reps:'30 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой с гантелью',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ]
            }
        },
        'Плечи': {
            '1 LVL': {
                none: [
                {name:'Вращение плечами',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Отжимания от стены',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Отжимания от коленей',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания на коленях',category:'Плечи',reps:'8',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка на вытянутых руках',category:'Плечи',reps:'25 сек',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Вращение плечами с гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подъём рук перед собой с гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Махи гантелями перед собой',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Вращение плечами',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Австралийские подтягивания',category:'Плечи',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Плечи',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Pike-отжимания на коленях',category:'Плечи',reps:'8',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка на вытянутых руках',category:'Плечи',reps:'25 сек',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Вращение плечами с гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Австралийские подтягивания',category:'Плечи',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Плечи',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: вращение плечами и руками',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке с опорой',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с паузой',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания узким хватом',category:'Плечи',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'20',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка с подъёмом рук',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на прямых руках',category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами с гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим Арнольда',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в наклоне',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Тяга к подбородку с гантелями',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подъём рук перед собой с гантелями',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'20',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на прямых руках',category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания за голову',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания обратным хватом',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Pike-отжимания',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Австралийские подтягивания (широкий хват)',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Плечи',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч',category:'Плечи',reps:'20',sets:'4',weight:0,icon:'shoulder'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами с гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Жим Арнольда',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в наклоне',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подтягивания за голову',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Тяга к подбородку с гантелями',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике',category:'Плечи',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках',category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: вращение плечами',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: круговые вращения руками',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены (полная)',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с ногами на возвышении',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке с опорой одной ногой',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с паузой (глубоко)',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания на одной руке (негативные)',category:'Плечи',reps:'5',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч (медленная)',category:'Плечи',reps:'24',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на одной руке',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка с подъёмом рук',category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания с касанием плеча (медленно)',category:'Плечи',reps:'16',sets:'4',weight:0,icon:'shoulder'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: махи гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим Арнольда сидя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим одной гантели сидя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разводка гантелей в наклоне сидя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Тяга к подбородку с гантелями',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Махи гантелями перед собой',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены (полная)',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на одной руке',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: махи руками',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом с отягощением',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания за голову',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания с выходом',category:'Плечи',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Плечи',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания в стойке у стены (полная)',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с ногами на возвышении',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами',category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: махи гантелями',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом с отягощением',category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим Арнольда сидя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подтягивания за голову',category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разводка гантелей в наклоне сидя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Тяга к подбородку с гантелями',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Махи гантелями перед собой',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке',category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Грудь': {
            '1 LVL': {
                none: [
                {name:'Круговые вращения руками',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от стены',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от коленей',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от пола (частичные)',category:'Грудь',reps:'8',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания узким хватом от коленей',category:'Грудь',reps:'10',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках',category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Круговые вращения руками',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Жим одной гантели лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от коленей',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках',category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Круговые вращения руками',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от коленей',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания',category:'Грудь',reps:'10',sets:'3',weight:0,icon:'breast'},
                {name:'Вис на турнике',category:'Грудь',reps:'15 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от пола (частичные)',category:'Грудь',reps:'8',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках',category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Круговые вращения руками',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания',category:'Грудь',reps:'10',sets:'3',weight:0,icon:'breast'},
                {name:'Вис на турнике',category:'Грудь',reps:'15 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках',category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от пола',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания широким хватом',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с ногами на возвышении',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания узким хватом',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания от коленей медленные',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на прямых руках',category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Пуловер с гантелью',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим одной гантели лёжа',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания от пола',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на прямых руках',category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания с выходом',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания от пола',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с ногами на возвышении',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания широким хватом',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике',category:'Грудь',reps:'25 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на прямых руках',category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания с выходом',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Пуловер с гантелью',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике',category:'Грудь',reps:'25 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с ногами на возвышении (высоко)',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу (глубоко)',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания в алмаз',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания',category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук',category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на одной руке',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим одной гантели лёжа',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Пуловер с гантелью',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания',category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук',category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на одной руке',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания на брусьях с отягощением',category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания с выходом',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания',category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук',category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые вращения руками',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами',category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на брусьях с отягощением',category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Выход силой на перекладину',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Пуловер с гантелью',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания',category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на одной руке',category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Спина': {
            '1 LVL': {
                none: [
                {name:'Потягивание вверх',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Супермен',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Y-T-W подъёмы лёжа',category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Пловец',category:'Спина',reps:'15',sets:'3',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'25 сек',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Потягивание вверх',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга двух гантелей к поясу',category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Шраги с гантелями',category:'Спина',reps:'15',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'25 сек',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Потягивание вверх',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Австралийские подтягивания',category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Негативные подтягивания',category:'Спина',reps:'5',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Супермен',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'25 сек',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Потягивание вверх',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Австралийские подтягивания',category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Шраги с гантелями',category:'Спина',reps:'15',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Супермен с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу',category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Y-T-W подъёмы лёжа',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Reverse snow angel',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Пловец медленный',category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка с подъёмом рук',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу с упором',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Гиперэкстензия с весом',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Тяга одной гантели в упоре',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания обратным хватом',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу с упором',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия с задержкой',category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Reverse snow angel',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Y-T-W подъёмы с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Пловец медленный',category:'Спина',reps:'25',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Супермен с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Планка на одной руке',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка с подъёмом рук',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания с касанием плеча (медленно)',category:'Спина',reps:'16',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне (тяжёлые)',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Становая тяга с гантелями',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями (тяжёлые)',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Тяга одной гантели в упоре',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Гиперэкстензия с весом',category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Планка на одной руке',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания с отягощением',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой',category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания за голову',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на одной руке',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания с отягощением',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой',category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне (тяжёлые)',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Становая тяга с гантелями',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями (тяжёлые)',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд',category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ]
            }
        },
        'Всё тело': {
            '1 LVL': {
                none: [
                {name:'Потягивание вверх',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Отжимания от коленей',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Выпады на месте',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Планка на коленях',category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Джампинг Джек',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Лодочка',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Потягивание вверх',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Тяга гантели к поясу',category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Жим гантелей сидя',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка на вытянутых руках',category:'Пресс',reps:'25 сек',sets:'3',weight:0,icon:'press'},
                {name:'Джампинг Джек',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'}
                ],
                pullup: [
                {name:'Потягивание вверх',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Австралийские подтягивания',category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике',category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Выпады на месте',category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Планка на коленях',category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Джампинг Джек',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'}
                ],
                dumbbells_pullup: [
                {name:'Потягивание вверх',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания',category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Жим гантелей сидя',category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Вис на турнике',category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Джампинг Джек',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Отжимания от пола',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Выпады с прыжком',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Бёрпи',category:'Всё тело',reps:'12',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Джампинг Джек',category:'Всё тело',reps:'20',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Горные лыжи',category:'Всё тело',reps:'20',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Планка на локтях',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Подъём таза лёжа',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'}
                ],
                dumbbells: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Тяга гантелей к поясу в наклоне',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Выпады с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на прямых руках',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса',category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Отжимания от пола',category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Выпады с прыжком',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях',category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике',category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой',category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: круговые движения тазом и руками',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Пистолетик (присед на одной ноге)',category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Приседания с выпрыгиванием',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Бёрпи с прыжком вверх',category:'Всё тело',reps:'12',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Прыжки из приседа',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Горные лыжи (быстро)',category:'Всё тело',reps:'25',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка',category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: махи гантелями',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями глубокие',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Становая тяга с гантелями',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей на наклонной скамье',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Тяга гантелей к поясу в наклоне (тяжёлые)',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Болгарские сплит-приседания с гантелями (тяжёлые)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Разведение гантелей в стороны стоя',category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Выпады с гантелями (шагающие)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'V-складка с гантелью',category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Арка-холд',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: махи руками',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Пистолетик (присед на одной ноге)',category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Подтягивания с отягощением',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой',category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину',category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания с хлопком',category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)',category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Приседания с выпрыгиванием',category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Бёрпи с прыжком вверх',category:'Всё тело',reps:'12',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Вис на турнике',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой (10 сек)',category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: потягивания и наклоны туловища',category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: махи гантелями',category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями глубокие',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подтягивания с отягощением',category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Становая тяга с гантелями',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой',category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей на наклонной скамье',category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Тяга гантелей к поясу в наклоне (тяжёлые)',category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей стоя',category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Выход силой на перекладину',category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Болгарские сплит-приседания с гантелями (тяжёлые)',category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике',category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Dragon flag (негативные)',category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'}
                ]
            }
        }
    },
    'Фитнес': {
        'Зарядка': {
            '1 LVL': {
                none: [
                    { name: 'Наклоны головы', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вращение плечами', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища в стороны', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения тазом', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Приседания без веса', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' }
                ],
                dumbbells: [
                    { name: 'Наклоны головы', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вращение плечами с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вращение корпусом с гантелью', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Приседания с гантелями', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Махи гантелями перед собой', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' }
                ],
                pullup: [
                    { name: 'Наклоны головы', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вращение плечами', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища в стороны', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вис на турнике', category: 'Зарядка', reps: '15 сек', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Приседания без веса', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' }
                ],
                dumbbells_pullup: [
                    { name: 'Наклоны головы', category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вращение плечами с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Вис на турнике', category: 'Зарядка', reps: '15 сек', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Приседания с гантелями', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Махи гантелями перед собой', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и плечами', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища в стороны', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения тазом', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания без веса', category: 'Зарядка', reps: '20', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады на месте', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Махи ногами', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка', category: 'Зарядка', reps: '30 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и вращение плечами', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Вращение корпусом с гантелью', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Махи гантелями в стороны', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка с подъёмом рук', category: 'Зарядка', reps: '30 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и плечами', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища в стороны', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Вис на турнике', category: 'Зарядка', reps: '20 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания без веса', category: 'Зарядка', reps: '20', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады на месте', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Подъём колен в висе', category: 'Зарядка', reps: '10', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка', category: 'Зарядка', reps: '30 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и вращение плечами', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Вис на турнике', category: 'Зарядка', reps: '20 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Махи гантелями в стороны', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Подъём колен в висе', category: 'Зарядка', reps: '10', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Разминка: вращение плечами', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища в стороны', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения тазом', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания без веса', category: 'Зарядка', reps: '25', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания с выпрыгиванием', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады с прыжком', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Махи ногами', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка с подъёмом рук', category: 'Зарядка', reps: '40 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка с подъёмом ног', category: 'Зарядка', reps: '40 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Разминка: вращение плечами с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Вращение корпусом с гантелью', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания с гантелями глубокие', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Румынская тяга с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Махи гантелями в стороны', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Жим гантелей стоя', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка с подъёмом рук (с гантелями)', category: 'Зарядка', reps: '40 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Разминка: вращение плечами', category: 'Зарядка', reps: '15', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища в стороны', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Вис на турнике', category: 'Зарядка', reps: '25 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания с выпрыгиванием', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады с прыжком', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Подъём прямых ног в висе', category: 'Зарядка', reps: '10', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Австралийские подтягивания', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Махи ногами', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка с подъёмом ног', category: 'Зарядка', reps: '40 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Разминка: вращение плечами с гантелями', category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
                    { name: 'Круговые движения руками с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Наклоны туловища с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Вис на турнике', category: 'Зарядка', reps: '25 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Приседания с гантелями глубокие', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Выпады с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Подъём прямых ног в висе', category: 'Зарядка', reps: '10', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Румынская тяга с гантелями', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Жим гантелей стоя', category: 'Зарядка', reps: '12', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Планка с подъёмом рук (с гантелями)', category: 'Зарядка', reps: '40 сек', sets: '4', weight: 0, icon: 'charging' },
                    { name: 'Потягивание вверх с гантелями', category: 'Зарядка', reps: '15', sets: '4', weight: 0, icon: 'charging' }
                ]
            }
        },

        'Кардио': {
            '1 LVL': {
                none: [
                    { name: 'Бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки со сменой ног', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи упрощённые', category: 'Кардио', reps: '8', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки ноги вместе-врозь', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' }
                ],
                dumbbells: [
                    { name: 'Бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями перед собой', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен с гантелями', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки со сменой ног', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' }
                ],
                pullup: [
                    { name: 'Бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', category: 'Кардио', reps: '5', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', category: 'Кардио', reps: '15 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи упрощённые', category: 'Кардио', reps: '8', sets: '3', weight: 0, icon: 'cardio' }
                ],
                dumbbells_pullup: [
                    { name: 'Бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', category: 'Кардио', reps: '5', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями перед собой', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', category: 'Кардио', reps: '15 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки со сменой ног', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', category: 'Кардио', reps: '45 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', category: 'Кардио', reps: '30', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', category: 'Кардио', reps: '20', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Скакалка (без скакалки)', category: 'Кардио', reps: '30 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки ноги вместе-врозь', category: 'Кардио', reps: '20', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бег с захлёстом голеней', category: 'Кардио', reps: '30 сек', sets: '4', weight: 0, icon: 'cardio' }
                ],
                dumbbells: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями в стороны', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', category: 'Кардио', reps: '10', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Румынская тяга с гантелями', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте с гантелями', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Жим гантелей стоя', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' }
                ],
                pullup: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', category: 'Кардио', reps: '8', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', category: 'Кардио', reps: '45 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', category: 'Кардио', reps: '30', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с подтягиванием', category: 'Кардио', reps: '8', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', category: 'Кардио', reps: '20', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', category: 'Кардио', reps: '25 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Подъём колен в висе', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', category: 'Кардио', reps: '8', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями в стороны', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', category: 'Кардио', reps: '10', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями', category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', category: 'Кардио', reps: '25 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Подъём колен в висе', category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', category: 'Кардио', reps: '60 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', category: 'Кардио', reps: '35', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с отжиманием', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с прыжком вверх', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', category: 'Кардио', reps: '20', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек (быстро)', category: 'Кардио', reps: '30', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', category: 'Кардио', reps: '25', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Скакалка (быстрая)', category: 'Кардио', reps: '45 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен', category: 'Кардио', reps: '45 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки ноги вместе-врозь', category: 'Кардио', reps: '30', sets: '5', weight: 0, icon: 'cardio' }
                ],
                dumbbells: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх (быстро)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями в стороны', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями (быстро)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями (шагающие)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Румынская тяга с гантелями (быстро)', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Жим гантелей стоя', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа с гантелями', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек (быстро)', category: 'Кардио', reps: '30', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями перед собой (быстро)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' }
                ],
                pullup: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', category: 'Кардио', reps: '10', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Подтягивания с хлопком', category: 'Кардио', reps: '6', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выход силой на перекладину', category: 'Кардио', reps: '5', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', category: 'Кардио', reps: '60 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с подтягиванием', category: 'Кардио', reps: '10', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', category: 'Кардио', reps: '35', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с прыжком вверх', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Подъём прямых ног в висе', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', category: 'Кардио', reps: '25', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', category: 'Кардио', reps: '20', sets: '5', weight: 0, icon: 'cardio' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', category: 'Кардио', reps: '10', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх (быстро)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выход силой на перекладину', category: 'Кардио', reps: '5', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями (быстро)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с подтягиванием', category: 'Кардио', reps: '8', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями (шагающие)', category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Подъём прямых ног в висе', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Жим гантелей стоя', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа с гантелями', category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' }
                ]
            }
        },

        'Пилатес': {
            '1 LVL': {
                none: [
                    { name: 'Сотня (дыхание + руки)', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза лёжа', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', category: 'Пилатес', reps: '15', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на коленях', category: 'Пилатес', reps: '20 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Боковые наклоны сидя', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ],
                dumbbells: [
                    { name: 'Сотня с гантелью', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на коленях с гантелью', category: 'Пилатес', reps: '20 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Боковые наклоны сидя с гантелью', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ],
                pullup: [
                    { name: 'Сотня (дыхание + руки)', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', category: 'Пилатес', reps: '8', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', category: 'Пилатес', reps: '15 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', category: 'Пилатес', reps: '15', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на коленях', category: 'Пилатес', reps: '20 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ],
                dumbbells_pullup: [
                    { name: 'Сотня с гантелью', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', category: 'Пилатес', reps: '8', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', category: 'Пилатес', reps: '15 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с вытянутыми ногами', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза на правую ногу', category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза на левую ногу', category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Мостик с подъёмом ноги', category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на локтях', category: 'Пилатес', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на правую', category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на левую', category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с гантелью и вытянутыми ногами', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Мостик с подъёмом ноги и гантелью', category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью', category: 'Пилатес', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью на правую', category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью на левую', category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                pullup: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с вытянутыми ногами', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём ног в висе', category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', category: 'Пилатес', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на локтях', category: 'Пилатес', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на правую', category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на левую', category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с гантелью и вытянутыми ногами', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём ног в висе', category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью', category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', category: 'Пилатес', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью', category: 'Pilates', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью на правую', category: 'Pilates', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с отягощением', category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног и рук', category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка', category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с подъёмом ноги', category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами с подъёмом таза', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с подъёмом ноги', category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на одной руке', category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с подъёмом ноги', category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках', category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с двумя гантелями', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью и подъёмом ног', category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка с гантелью', category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью и подъёмом ноги', category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', category: 'Pilates', reps: '25', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью и подъёмом ноги', category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью и подъёмом ноги', category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой (гантель в руках)', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках с гантелью', category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                pullup: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём прямых ног в висе', category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Windshield wipers в висе', category: 'Pilates', reps: '8', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с отягощением', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног и рук', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка', category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с подъёмом ноги', category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на одной руке', category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках', category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: сотня', category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём прямых ног в висе', category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Windshield wipers в висе', category: 'Pilates', reps: '8', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с двумя гантелями', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка с гантелью', category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью и подъёмом ног', category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', category: 'Pilates', reps: '25', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью и подъёмом ноги', category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой (гантель в руках)', category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках с гантелью', category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ]
            }
        },

        'Растяжка': {
            '1 LVL': {
                none: [
                    { name: 'Наклоны к ногам сидя', category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Наклоны к ногам сидя с гантелью', category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной с гантелью', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Наклоны к ногам сидя', category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Наклоны к ногам сидя с гантелью', category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч (замок)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с руками', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка ног (шпагат)', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам с гантелью', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра с гантелью', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной с гантелью', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч (замок)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с руками', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам с гантелью', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра с гантелью', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с захватом ног', category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с сопротивлением', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч за спиной', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с захватом', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с сопротивлением', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью (глубоко)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп с гантелью', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание) с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с сопротивлением', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч за спиной', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны в висе', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью (глубоко)', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп с гантелью', category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            }
        },

        'Растяжка позвоночника': {
            '1 LVL': {
                none: [
                    { name: 'Наклоны вперёд сидя', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Наклоны вперёд сидя с гантелью', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Наклоны вперёд сидя', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Наклоны вперёд сидя с гантелью', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с захватом ног', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа (позвоночник)', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя глубоко', category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью в стороны', category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание) с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с захватом ног', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа (позвоночник)', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью в стороны', category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с захватом стоп', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя глубоко', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза плуга', category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью глубоко', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое с гантелью', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание) с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', category: 'Растяжка позвоночника', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с захватом стоп', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза плуга', category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', category: 'Растяжка позвоночника', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью глубоко', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое с гантелью', category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках с гантелью', category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            }
        }
    },
    'Особые': {
    'Кроссфит': {
        '1 LVL': {
            none: [
                { name: 'Джампинг Джек', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи упрощённые', category: 'Кроссфит', reps: '8', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания без веса', category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от коленей', category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки на месте', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ],
            dumbbells: [
                { name: 'Джампинг Джек', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', category: 'Кроссфит', reps: '8', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Махи гантелями перед собой', category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ],
            pullup: [
                { name: 'Джампинг Джек', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', category: 'Кроссфит', reps: '5', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания без веса', category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Австралийские подтягивания', category: 'Кроссфит', reps: '10', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки на месте', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Вис на турнике', category: 'Кроссфит', reps: '15 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ],
            dumbbells_pullup: [
                { name: 'Джампинг Джек', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', category: 'Кроссфит', reps: '5', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', category: 'Кроссфит', reps: '8', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Вис на турнике', category: 'Кроссфит', reps: '15 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ]
        },
        '2 LVL': {
            none: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от пола', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', category: 'Кроссфит', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания узким хватом', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Скакалка (без скакалки)', category: 'Кроссфит', reps: '30 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка на локтях', category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бег на месте (быстро)', category: 'Кроссфит', reps: '45 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            dumbbells: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', category: 'Кроссфит', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Махи гантелями перед собой', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Жим гантелей стоя', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа с гантелями', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью', category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            pullup: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с подтягиванием', category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Подъём колен в висе', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от пола', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', category: 'Кроссфит', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Вис на турнике', category: 'Кроссфит', reps: '25 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка на локтях', category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', category: 'Кроссфит', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с подтягиванием', category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Подъём колен в висе', category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью', category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ]
        },
        '3 LVL': {
            none: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с отжиманием', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с прыжком вверх', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', category: 'Кроссфит', reps: '20', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания с хлопком', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи (быстро)', category: 'Кроссфит', reps: '30', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с прыжком', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Скакалка (быстрая)', category: 'Кроссфит', reps: '60 сек', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с подъёмом рук', category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с подъёмом ног', category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Псевдо-планш отжимания', category: 'Кроссфит', reps: '8', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            dumbbells: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх (быстро)', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями (тяжёлые)', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Становая тяга с гантелями', category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Жим гантелей стоя', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа с гантелями', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Махи гантелями перед собой (быстро)', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            pullup: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Подтягивания с хлопком', category: 'Кроссфит', reps: '6', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выход силой на перекладину', category: 'Кроссфит', reps: '5', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с подтягиванием', category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Подъём прямых ног в висе', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания с хлопком', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', category: 'Кроссфит', reps: '20', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Windshield wipers в висе', category: 'Кроссфит', reps: '8', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи (быстро)', category: 'Кроссфит', reps: '30', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Псевдо-планш отжимания', category: 'Кроссфит', reps: '8', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: джампинг джек и прыжки', category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Подтягивания с хлопком', category: 'Кроссфит', reps: '6', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выход силой на перекладину', category: 'Кроссфит', reps: '5', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх (быстро)', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями (тяжёлые)', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Становая тяга с гантелями', category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Подъём прямых ног в висе', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа с гантелями', category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' }
            ]
        },
        '_premium': true
    },

    'Мужская сила': {
        '1 LVL': {
            none: [
                { name: 'Круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания без веса', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Выпады на месте (на каждую ногу)', category: 'Мужская сила', reps: '10', sets: '3', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Отведение ноги в сторону стоя', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ],
            dumbbells: [
                { name: 'Круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад с гантелью', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ],
            pullup: [
                { name: 'Круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания без веса', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', category: 'Мужская сила', reps: '8', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Выпады на месте', category: 'Мужская сила', reps: '10', sets: '3', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', category: 'Мужская сила', reps: '15 сек', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ],
            dumbbells_pullup: [
                { name: 'Круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', category: 'Мужская сила', reps: '8', sets: '3', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', category: 'Мужская сила', reps: '15 сек', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ]
        },
        '2 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногами в сторону', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Отведение ноги назад стоя на четвереньках', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с подъёмом ноги', category: 'Мужская сила', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания у стены', category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (глубокие)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями (тяжёлая)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад с гантелью', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Отведение ноги в сторону с гантелью', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Австралийские подтягивания', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', category: 'Мужская сила', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (глубокие)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями (тяжёлая)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', category: 'Мужская сила', reps: '25 сек', sets: '4', weight: 0, icon: 'men' }
            ]
        },
        '3 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи ногами', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Пистолетик (присед на одной ноге)', category: 'Мужская сила', reps: '6', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием (глубоко)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с прыжком', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком (глубоко)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Отведение ноги назад на четвереньках (медленно)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковые выпады глубокие', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания у стены (глубоко)', category: 'Мужская сила', reps: '60 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги (медленно)', category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с подъёмом ноги', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи гантелями', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (очень глубокие)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями (тяжёлая)', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга на одной ноге с гантелью', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями (тяжёлые)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью (медленно)', category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад с гантелью (медленно)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания плие с гантелью (тяжёлые)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с гантелью и подъёмом ноги', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи ногами', category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Пистолетик (присед на одной ноге)', category: 'Мужская сила', reps: '6', sets: '4', weight: 0, icon: 'men' },
                { name: 'Windshield wipers в висе', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с прыжком', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём ног в висе с отягощением', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком (глубоко)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания у стены (глубоко)', category: 'Мужская сила', reps: '60 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги (медленно)', category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи гантелями', category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (очень глубокие)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями (тяжёлая)', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга на одной ноге с гантелью', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Windshield wipers в висе', category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями (тяжёлые)', category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью (медленно)', category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' }
            ]
        },
        '_premium': true
    },

    'Женское счастье': {
        '1 LVL': {
            none: [
                { name: 'Круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону стоя', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Планка на коленях', category: 'Женское счастье', reps: '25 сек', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Скручивания лёжа', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' }
            ],
            dumbbells: [
                { name: 'Круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону с гантелью', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Планка на коленях', category: 'Женское счастье', reps: '25 сек', sets: '3', weight: 0, icon: 'woman' }
            ],
            pullup: [
                { name: 'Круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', category: 'Женское счастье', reps: '8', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', category: 'Женское счастье', reps: '15 сек', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Скручивания лёжа', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' }
            ],
            dumbbells_pullup: [
                { name: 'Круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', category: 'Женское счастье', reps: '8', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', category: 'Женское счастье', reps: '15 сек', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Скручивания с гантелью', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' }
            ]
        },
        '2 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие (глубоко)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногами в сторону', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка на правую', category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка на левую', category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги назад стоя на четвереньках', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Скручивания с вытянутыми руками', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (глубоко)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга с гантелями', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону с гантелью', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с гантелью', category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие (глубоко)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Австралийские подтягивания', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Скручивания с вытянутыми руками', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом и махи', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (глубоко)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга с гантелями', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' }
            ]
        },
        '3 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи ногами', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Пистолетик (присед на одной ноге)', category: 'Женское счастье', reps: '6', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с выпрыгиванием', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с прыжком', category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком (глубоко)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковые выпады глубокие', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Скручивания с подъёмом ног', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с подъёмом ноги', category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с подъёмом ноги на правую', category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с подъёмом ноги на левую', category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи гантелями', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (очень глубоко)', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга на одной ноге с гантелью', category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями (тяжёлые)', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью (медленно)', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью (медленно)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону с гантелью (медленно)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', category: 'Женское счастье', reps: '25', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с гантелью и подъёмом ноги', category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи ногами', category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Пистолетик (присед на одной ноге)', category: 'Женское счастье', reps: '6', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Windshield wipers в висе', category: 'Женское счастье', reps: '8', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с прыжком', category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём ног в висе с отягощением', category: 'Женское счастье', reps: '8', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с выпрыгиванием', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с подъёмом ноги', category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с подъёмом ноги', category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи гантелями', category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (очень глубоко)', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга на одной ноге с гантелью', category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Windshield wipers в висе', category: 'Женское счастье', reps: '8', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями (тяжёлые)', category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью (медленно)', category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', category: 'Женское счастье', reps: '25', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с гантелью и подъёмом ноги', category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' }
            ]
        },
        '_premium': true
    },

'ГТО': {
    _gender: true,
    _premium: true,

    'Женский': {
        '1 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', category: 'ГТО', reps: '5', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', category: 'ГТО', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '2 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '40 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', category: 'ГТО', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '3 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '50 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '20', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', category: 'ГТО', reps: '20', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', category: 'ГТО', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '4 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '60 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола (частичные)', category: 'ГТО', reps: '6', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '25', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки с места (выпрыгивания)', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '5 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '30', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '14', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка на локтях', category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на правую', category: 'ГТО', reps: '20 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на левую', category: 'ГТО', reps: '20 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '6 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '80 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '35', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '16', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка с подъёмом ноги', category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '7 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '40', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка с подъёмом ноги', category: 'ГТО', reps: '30 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '8 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', category: 'ГТО', reps: '8', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', category: 'ГТО', reps: '15', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '45 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', category: 'ГТО', reps: '6', sets: '5', weight: 0, icon: 'breast' }
        ],
        '9 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '16', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', category: 'ГТО', reps: '8', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног с задержкой', category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '40 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Боковая планка с подъёмом ноги', category: 'ГТО', reps: '25 сек', sets: '5', weight: 0, icon: 'press' }
        ],
        '10 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '90 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '35', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '35 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка', category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ]
    },

    'Мужской': {
        '1 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', category: 'ГТО', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '2 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '40 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '18', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', category: 'ГТО', reps: '20', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', category: 'ГТО', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '3 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '50 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола (частичные)', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '25', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', category: 'ГТО', reps: '25', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '4 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '60 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '30', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки с места (выпрыгивания)', category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', category: 'ГТО', reps: '35 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '5 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '35', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '10', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка на локтях', category: 'ГТО', reps: '45 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на правую', category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на левую', category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '6 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '80 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '40', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', category: 'ГТО', reps: '6', sets: '4', weight: 0, icon: 'breast' }
        ],
        '7 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '25', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', category: 'ГТО', reps: '10', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '22', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '45 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'breast' }
        ],
        '8 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '30', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', category: 'ГТО', reps: '25', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '25', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', category: 'ГТО', reps: '15', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '50 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', category: 'ГТО', reps: '10', sets: '5', weight: 0, icon: 'breast' }
        ],
        '9 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '25', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '45 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', category: 'ГТО', reps: '8', sets: '5', weight: 0, icon: 'breast' }
        ],
        '10 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'ГТО', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', category: 'ГТО', reps: '40', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка', category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ]
    }
}
}
}


// =================== ФУНКЦИЯ-СБОРЩИК ===================
/**
 * Собирает итоговый список упражнений для тренировки на основе инвентаря пользователя.
 * @param {Object} levelData — объект {core, pullup, barbell, dumbbells, noEquipment}
 * @param {Array} userInventory — массив ['dumbbells', 'mat', ...]
 * @returns {Array} — массив упражнений
 */
function buildWorkoutForUser(levelData, userInventory) {
    // Старый формат (просто массив) — возвращаем как есть
    if (Array.isArray(levelData)) {
        return levelData;
    }
    if (!levelData || typeof levelData !== 'object') {
        return [];
    }

    const inventory = Array.isArray(userInventory) ? userInventory : [];
    const hasDumbbells = inventory.includes('dumbbells');
    const hasPullup = inventory.includes('pullup');

    let list = [];

    if (hasDumbbells && hasPullup) {
        // Вес тела + гантели + турник
        list = levelData.dumbbells_pullup || levelData.none || [];
    } else if (hasDumbbells) {
        // Вес тела + гантели
        list = levelData.dumbbells || levelData.none || [];
    } else if (hasPullup) {
        // Вес тела + турник
        list = levelData.pullup || levelData.none || [];
    } else {
        // Только вес тела
        list = levelData.none || [];
    }

    console.log(`🏋️ buildWorkoutForUser: инвентарь=[${inventory.join(',')}] → упражнений=${list.length}`);
    return list;
}