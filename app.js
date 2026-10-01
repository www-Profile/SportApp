const exercisesData = {   
    // ===================СИЛОВЫЕ ===================
    'Силовые': { 
        'Руки': {
            '1 LVL': [
                { name: 'Отжимания от стены', category: 'Руки', reps: '12', sets: '3', weight: 0, icon: 'bodybuilding' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '10', sets: '3', weight: 0, icon: 'breast' },
                { name: 'Отжимания узким хватом', category: 'Руки', reps: '10', sets: '3', weight: 0, icon: 'bodybuilding' },
                { name: 'Алмазные отжимания', category: 'Руки', reps: '8', sets: '3', weight: 0, icon: 'bodybuilding' }
            ],
            '2 LVL': [
                { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Французский жим с гантелями лёжа', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Обратные отжимания от стула', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Обратные отжимания от стула с весом', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Сгибание рук с гантелями хватом молот', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Отжимания узким хватом', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Алмазные отжимания', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Отжимания от пола широким хватом', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' }
            ],
            '3 LVL': [
                { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Французский жим с гантелями лёжа', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Обратные отжимания от стула с весом', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Разгибание рук с гантелью из-за головы', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Сгибание рук с гантелями хватом молот', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Отжимания на одной руке на правую руку', category: 'Руки', reps: '6', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Отжимания на одной руке на левую руку', category: 'Руки', reps: '6', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' }
            ]
        },
        'Плечи': {
            '1 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны сидя', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', reps: '12', sets: '3', weight: 0, icon: 'shoulder' },
                { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '8', sets: '3', weight: 0, icon: 'shoulder' }
            ],
            '2 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Тяга к подбородку с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Жим Арнольда', category: 'Плечи', reps: '10', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Отжимания в стойке с опорой', category: 'Плечи', reps: '8', sets: '4', weight: 0, icon: 'shoulder' }
            ],
            '3 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Тяга к подбородку с гантелями', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Подъём рук перед собой с гантелями', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '15', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Жим Арнольда', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', weight: 0, icon: 'shoulder' },
                { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '8', sets: '4', weight: 0, icon: 'shoulder' }
            ]
        },
        'Пресс': {
            '1 LVL': [
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' },
                { name: 'Подъем ног лёжа', category: 'Пресс', reps: '12', sets: '3', weight: 0, icon: 'press' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', weight: 0, icon: 'press' },
                { name: 'Боковая планка на коленях на правую сторону', category: 'Пресс', reps: '15 сек', sets: '3', weight: 0, icon: 'press' },
                { name: 'Боковая планка на коленях на левую сторону', category: 'Пресс', reps: '15 сек', sets: '3', weight: 0, icon: 'press' },
                { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                { name: 'Вакуум живота стоя', category: 'Пресс', reps: '10 сек', sets: '3', weight: 0, icon: 'press' }
            ],
            '2 LVL': [
                { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъем ног в висе', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъем ног в висе с весом', category: 'Пресс', reps: '10', sets: '4', weight: 0, icon: 'press' },
                { name: 'Ножницы ногами', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Планка на вытянутых руках', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Планка с подъёмом ног', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Планка с касанием плеч', category: 'Пресс', reps: '16', sets: '4', weight: 0, icon: 'press' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Русский твист', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъём таза лёжа', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                { name: 'Твист сидя с гантелью', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Велосипед лёжа', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' }
            ],
            '3 LVL': [
                { name: 'Скручивания с гантелью', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъем ног в висе', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъем ног в висе с весом', category: 'Пресс', reps: '12', sets: '4', weight: 0, icon: 'press' },
                { name: 'Ножницы ногами', category: 'Пресс', reps: '30', sets: '4', weight: 0, icon: 'press' },
                { name: 'Планка на локтях с подъемом ног', category: 'Пресс', reps: '45 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Боковая планка с подъемом ног на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Боковая планка с подъемом ног на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Русский твист', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъём таза лёжа', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                { name: 'Твист сидя с гантелью', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
                { name: 'Твист корпуса с гантелью', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъем ног лёжа под углом 45°', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' },
                { name: 'Планка на руках с касанием плеч', category: 'Пресс', reps: '16', sets: '4', weight: 0, icon: 'press' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' }
            ]
        },
        'Грудь': {
            '1 LVL': [
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' },
                { name: 'Отжимания от стены', category: 'Грудь', reps: '15', sets: '3', weight: 0, icon: 'breast' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '10', sets: '3', weight: 0, icon: 'breast' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' }
            ],
            '2 LVL': [
                { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания широким хватом', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Разводка гантелей на наклонной скамье', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Жим одной гантели лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Пуловер с гантелью', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Жим Свенда', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания с узкой постановкой рук', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
            ],
            '3 LVL': [
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания на одной руке на правую руку', category: 'Грудь', reps: '6', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания на одной руке на левую руку', category: 'Грудь', reps: '6', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания с паузой внизу', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Отжимания в алмаз', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', reps: '10', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Разводка гантелей на наклонной скамье', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Пуловер с гантелью', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Жим Свенда', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' },
                { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4', weight: 0, icon: 'bodybuilding' }
            ]
        },
        'Спина': {
            '1 LVL': [
                { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                { name: 'Гиперэкстензия', category: 'Спина', reps: '15', sets: '3', weight: 0, icon: 'back' },
                { name: 'Супермен', category: 'Спина', reps: '12', sets: '3', weight: 0, icon: 'back' },
                { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', weight: 0, icon: 'bodybuilding' }
            ],
            '2 LVL': [
                { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                { name: 'Подтягивания широким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                { name: 'Подтягивания узким хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                { name: 'Подтягивания обратным хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                { name: 'Подтягивания нейтральным хватом', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга двух гантелей к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Гиперэкстензия', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' },
                { name: 'Гиперэкстензия с весом', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Шраги с гантелями', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга гантелей к поясу в наклоне', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' }
            ],
            '3 LVL': [
                { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                { name: 'Подтягивания с отягощением', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга гантели к поясу с упором', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга двух гантелей к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга гантелей к поясу в наклоне', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Гиперэкстензия с весом', category: 'Спина', reps: '20', sets: '4', weight: 0, icon: 'back' },
                { name: 'Шраги с гантелями', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
                { name: 'Планка на локтях с подъемом рук', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' }
            ]
        },
        'Ноги': {
            '1 LVL': [
                { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Приседания с задержкой', category: 'Ноги', reps: '30 сек', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Приседания у стены', category: 'Ноги', reps: '30 сек', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Подъем на носки стоя', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Ягодичный мостик', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Махи ногой назад', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '20', sets: '3', weight: 0, icon: 'legs' }
            ],
            '2 LVL': [
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады назад с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады в стороны с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с прыжком', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Румынская тяга с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Мёртвая тяга с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' }
            ],
            '3 LVL': [
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады в стороны с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Румынская тяга с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Становая тяга с гантелями', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Мёртвая тяга с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
            ]
        },
        'Всё тело': {
            '1 LVL': [
                { name: 'Приседания без веса', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3', weight: 0, icon: 'breast' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', weight: 0, icon: 'press' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Бёрпи', category: 'Ноги', reps: '8', sets: '3', weight: 0, icon: 'legs' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '15', sets: '3', weight: 0, icon: 'WholeBody' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '12', sets: '3', weight: 0, icon: 'WholeBody' },
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3', weight: 0, icon: 'press' }
            ],
            '2 LVL': [
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Выпады с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Выпады с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'WholeBody' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
            ],
            '3 LVL': [
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'breast' },
                { name: 'Планка с подъемом ног', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
                { name: 'Бёрпи', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Бёрпи с прыжком вверх', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'legs' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'WholeBody' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'WholeBody' },
                { name: 'Скручивания с гантелью', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'legs' }
            ]
        }
    },
    // ===================ФИТНЕС ===================
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
    // ===================ОСОБЫЕ (PREMIUM) ===================
    'Особые': {
        'Кроссфит': {
            '1 LVL': [
                { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            '2 LVL': [
                { name: 'Бёрпи', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '10', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            '3 LVL': [
                { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с прыжком вверх', category: 'Ноги', reps: '12', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            '_premium': true
        },
'ГТО': {
    _gender: true,
    _premium: true,
    'Женский': {
        '1 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '2', sets: '3', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '4', sets: '3', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '6', sets: '3', weight: 0, icon: 'bodybuilding' }
        ],
        '2 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '40 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '3', sets: '3', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '6', sets: '3', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '12', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '8', sets: '3', weight: 0, icon: 'bodybuilding' }
        ],
        '3 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '50 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '40 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '40 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '10', sets: '4', weight: 0, icon: 'bodybuilding' }
        ],
        '4 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '60 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '50 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '50 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '30', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '7', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '18', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
        ],
        '5 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '60 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '60 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '35', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '8', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '14', sets: '4', weight: 0, icon: 'bodybuilding' }
        ],
        '6 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '40', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '20', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '22', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '16', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' }
        ],
        '7 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '80 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '80 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '45', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '11', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '25', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '25', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '18', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '14', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '14', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '15', sets: '4', weight: 0, icon: 'press' }
        ],
        '8 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '110 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '90 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '90 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '50', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '28', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '28', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '20', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '16', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '30', sets: '4', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '16', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Отжимания широким хватом', category: 'Грудь', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' }
        ],
        '9 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '120 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '55', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '5', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '32', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '30', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '22', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '18', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '35', sets: '5', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '18', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '20', sets: '5', weight: 0, icon: 'press' },
            { name: 'Отжимания широким хватом', category: 'Грудь', reps: '18', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '25', sets: '5', weight: 0, icon: 'press' },
            { name: 'Подтягивания узким хватом', category: 'Спина', reps: '8', sets: '5', weight: 0, icon: 'back' },
            { name: 'Выпады с прыжком', category: 'Ноги', reps: '15', sets: '5', weight: 0, icon: 'legs' }
        ],
        '10 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '130 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '110 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '110 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '60', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '5', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '35', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '32', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '24', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '20', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '40', sets: '5', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '20', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '22', sets: '5', weight: 0, icon: 'press' },
            { name: 'Отжимания широким хватом', category: 'Грудь', reps: '20', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '28', sets: '5', weight: 0, icon: 'press' },
            { name: 'Подтягивания узким хватом', category: 'Спина', reps: '10', sets: '5', weight: 0, icon: 'back' },
            { name: 'Выпады с прыжком', category: 'Ноги', reps: '18', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Подтягивания широким хватом', category: 'Спина', reps: '8', sets: '5', weight: 0, icon: 'back' },
            { name: 'Бёрпи с прыжком вверх', category: 'Всё тело', reps: '12', sets: '5', weight: 0, icon: 'WholeBody' }
        ]
        
    },
    'Мужской': {
        '1 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '3', sets: '3', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '5', sets: '3', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '8', sets: '3', weight: 0, icon: 'bodybuilding' }
        ],
        '2 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '40 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '5', sets: '3', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '8', sets: '3', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '12', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '10', sets: '3', weight: 0, icon: 'bodybuilding' }
        ],
        '3 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '50 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '40 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '40 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '7', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', weight: 0, icon: 'bodybuilding' }
        ],
        '4 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '60 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '50 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '50 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '30', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '9', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '18', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '14', sets: '4', weight: 0, icon: 'bodybuilding' }
        ],
        '5 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '60 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '60 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '35', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '20', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '16', sets: '4', weight: 0, icon: 'bodybuilding' }
        ],
        '6 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '40', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '25', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '22', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '18', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '15', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' }
        ],
        '7 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '80 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '80 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '45', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '14', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '30', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '25', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '20', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '18', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '30', sets: '4', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '18', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '18', sets: '4', weight: 0, icon: 'press' }
        ],
        '8 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '110 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '90 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '90 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '50', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '15', sets: '4', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '35', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '28', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '22', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '20', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '35', sets: '4', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '20', sets: '4', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '20', sets: '4', weight: 0, icon: 'press' },
            { name: 'Отжимания широким хватом', category: 'Грудь', reps: '20', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '25', sets: '4', weight: 0, icon: 'press' }
        ],
        '9 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '120 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '55', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '15', sets: '5', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '40', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '30', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '24', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '22', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '40', sets: '5', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '22', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '22', sets: '5', weight: 0, icon: 'press' },
            { name: 'Отжимания широким хватом', category: 'Грудь', reps: '22', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '30', sets: '5', weight: 0, icon: 'press' },
            { name: 'Подтягивания узким хватом', category: 'Спина', reps: '10', sets: '5', weight: 0, icon: 'back' },
            { name: 'Выпады с прыжком', category: 'Ноги', reps: '18', sets: '5', weight: 0, icon: 'legs' }
        ],
        '10 СТУПЕНЬ': [
            { name: 'Бег на месте', category: 'Кардио', reps: '130 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с высокими коленями', category: 'Кардио', reps: '110 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Бег на месте с захлёстом голеней', category: 'Кардио', reps: '110 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Прыжки на месте', category: 'Кардио', reps: '60', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Подтягивания', category: 'Спина', reps: '14', sets: '5', weight: 0, icon: 'back' },
            { name: 'Отжимания от пола', category: 'Руки', reps: '45', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Наклоны к ногам стоя', category: 'Гибкость', reps: '32', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '26', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Сгибание рук с гантелями', category: 'Руки', reps: '24', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Скручивания лёжа', category: 'Пресс', reps: '45', sets: '5', weight: 0, icon: 'press' },
            { name: 'Молотковые сгибания', category: 'Руки', reps: '24', sets: '5', weight: 0, icon: 'bodybuilding' },
            { name: 'Подъём ног лёжа', category: 'Пресс', reps: '25', sets: '5', weight: 0, icon: 'press' },
            { name: 'Отжимания широким хватом', category: 'Грудь', reps: '25', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '35', sets: '5', weight: 0, icon: 'press' },
            { name: 'Подтягивания узким хватом', category: 'Спина', reps: '12', sets: '5', weight: 0, icon: 'back' },
            { name: 'Выпады с прыжком', category: 'Ноги', reps: '20', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '5', weight: 0, icon: 'back' },
            { name: 'Бёрпи с прыжком вверх', category: 'Всё тело', reps: '15', sets: '5', weight: 0, icon: 'WholeBody' }
        ]
    }
},
        'Мужская сила': {
            '1 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания с задержкой', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъемом таза', category: 'Пресс', reps: '20 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногами в сторону на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногами в сторону на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъем на носки', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'men' }
            ],
            '2 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', weight: 0, icon: 'men' }
            ],
            '3 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '25', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковые выпады с гантелью на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковые выпады с гантелью на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'men' }
            ],
            '_premium': true
        },
        'Женское счастье': {
            '1 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' }
            ],
            '2 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4', weight: 0, icon: 'woman' }
            ],
            '3 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '25', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковые выпады с гантелью на правую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковые выпады с гантелью на левую ногу', category: 'Ноги', reps: '15', sets: '4', weight: 0, icon: 'woman' }
            ],
            '_premium': true
        },
        'Растяжка позвоночника': {
            '1 LVL': [
                { name: 'Вис на турнике', category: 'Спина', reps: '15 сек', sets: '3', icon: 'stretching' },
                { name: 'Наклоны вперёд сидя', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Кошка-корова', category: 'Спина', reps: '10', sets: '3', icon: 'stretching' },
                { name: 'Растяжка спины на полу (скручивание)', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Поза ребёнка', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Наклоны в стороны стоя', category: 'Спина', reps: '15 сек', sets: '3', icon: 'stretching' }
            ],
            '2 LVL': [
                { name: 'Глубокий наклон вперёд с захватом ног', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Кошка-корова с задержкой', category: 'Спина', reps: '15', sets: '4', icon: 'stretching' },
                { name: 'Скручивание лёжа (позвоночник)', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза голубя', category: 'Ягодицы', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка спины на фитболе', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' }
            ],
            '3 LVL': [
                { name: 'Глубокий наклон с захватом стоп', category: 'Спина', reps: '35 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза верблюда', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Скручивание позвоночника сидя', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза лука', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Мост (позвоночник)', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Стойка на лопатках (плечи)', category: 'Плечи', reps: '25 сек', sets: '4', icon: 'stretching' }
            ],
            '_premium': true
        }
    }
};

// =================== МАППИНГ ИКОНОК В КАТЕГОРИИ ДЛЯ СТАТИСТИКИ ===================
const ICON_TO_CATEGORY = {
    'bodybuilding': 'Руки',
    'shoulder': 'Плечи',
    'press': 'Пресс',
    'breast': 'Грудь',
    'back': 'Спина',
    'legs': 'Ноги',
    'WholeBody': 'Всё тело',
    'cardio': 'Кардио',
    'stretching': 'Гибкость',
    'charging': 'Зарядка',
    'Pilates': 'Всё тело',
    'crossfit': 'Всё тело',
    'men': 'Ягодицы',
    'woman': 'Ягодицы'
};

const DISPLAY_CATEGORIES = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];

// =================== ПОЛУЧЕНИЕ ИКОНКИ ТРЕНИРОВКИ ===================
function getWorkoutIcon(workout) {
    // Если у тренировки есть icon — возвращаем его
    if (workout.icon) return workout.icon;
    
    // Если нет — возвращаем null (ничего не показываем)
    return null;
}

// ===================ЕДИНАЯ СИСТЕМА УПРАВЛЕНИЯ ВКЛАДКАМИ ===================
const TabManager = {
    // Ключ для localStorage
    STORAGE_KEY: 'sportapp_tabs',
    
    // Состояние
    state: {
        stats: 'personal',
        workouts: 'ready',
        profile: 'my'
    },
    
    // Загрузить состояние из localStorage
    load() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.state = { ...this.state, ...parsed };
            } catch (e) {
                console.warn('Ошибка загрузки вкладок:', e);
            }
        }
        return this.state;
    },
    
    // Сохранить состояние
    save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    },
    
    // Переключить вкладку статистики
stats(tab) {
    this.state.stats = tab;
    activeStatsTab = tab;
        // Обновляем UI
        document.querySelectorAll('#page-stats .tab-btn').forEach(btn => {
            btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
        });
        document.querySelectorAll('#page-stats .stats-tab-content').forEach(content => {
            content.classList.remove('stats-tab-content-active');
        });
        const target = document.getElementById('stats-' + tab);
        if (target) target.classList.add('stats-tab-content-active');
        this.save();
    },
    
    // Переключить вкладку тренировок
workouts(tab) {
    this.state.workouts = tab;
    activeWorkoutsTab = tab;
        // Обновляем UI
        document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
            btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
        });
        document.querySelectorAll('#page-workouts .tab-content').forEach(content => {
            content.classList.remove('tab-content-active');
        });
        document.getElementById('tab-' + tab).classList.add('tab-content-active');
        
        const resetBtn = document.getElementById('resetWorkoutsBtn');
        if (resetBtn) {
            const pagesEnabled = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
            resetBtn.style.display = (tab === 'ready' && pagesEnabled) ? 'block' : 'none';
        }
        this.save();
    },
    
    // Переключить вкладку профиля
profile(tab) {
    this.state.profile = tab;
    activeProfileTab = tab;
        // Обновляем UI
        const profileTabs = document.querySelectorAll('.profile-tab-btn');
        profileTabs.forEach(btn => {
            btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
        });
        const contents = document.querySelectorAll('.profile-tab-content');
        contents.forEach(content => {
            content.classList.remove('profile-tab-content-active');
        });
        const target = document.getElementById('profileTab-' + tab);
        if (target) {
            target.classList.add('profile-tab-content-active');
        }
        if (tab === 'friends') {
            setTimeout(() => renderFriendsInProfile(), 100);
        }
        this.save();
    },
    
    // Применить все сохранённые вкладки
    applyAll() {
        this.stats(this.state.stats);
        this.workouts(this.state.workouts);
        this.profile(this.state.profile);
        console.log('✅ Вкладки восстановлены:', this.state);
    }
};

// Загружаем состояние при инициализации
TabManager.load();

// =================== ЗВУКИ ===================
const soundCountdown = new Audio('sounds/3-2-1.mp3');
const soundTimerFinish = new Audio('sounds/timer-finisf.mp3');
const soundSms = new Audio('sounds/sms.mp3');
soundCountdown.preload = 'auto';
soundTimerFinish.preload = 'auto';
soundSms.preload = 'auto';
soundCountdown.volume = 0.5;
soundTimerFinish.volume = 0.5;
soundSms.volume = 0.5;

// ===================СОВМЕСТНЫЕ ТРЕНИРОВКИ ===================
let currentSessionId = null;
let isHost = false;
let sessionListener = null;
let inviteListener = null;
let coopExercises = [];
let sessionData = null;
let coopStarted = false;
let finishPageShown = false;

// app.js - в самом начале, после объявления констант
const DAILY_PROGRESS_KEY = 'sportapp_daily_progress';

// =================== СЧЁТЧИК ТРЕНИРОВОК ДЛЯ PREMIUM ===================
const WORKOUTS_COUNT_KEY = 'sportapp_workouts_count';
const PREMIUM_OFFER_SHOWN_KEY = 'sportapp_premium_offer_shown';

/**
 * Увеличивает счётчик завершённых тренировок и возвращает новое значение
 */
function incrementWorkoutsCount() {
    const current = parseInt(localStorage.getItem(WORKOUTS_COUNT_KEY) || '0');
    const newCount = current + 1;
    localStorage.setItem(WORKOUTS_COUNT_KEY, String(newCount));
    console.log(`📊 Счётчик тренировок: ${newCount}`);
    return newCount;
}

/**
 * Проверяет, нужно ли показать предложение PREMIUM
 * Показываем каждую 3-ю тренировку, если нет PREMIUM
 */
function shouldShowPremiumOffer() {
    // Если уже есть PREMIUM — не показываем
    if (hasPremium()) {
        return false;
    }
    
    const count = parseInt(localStorage.getItem(WORKOUTS_COUNT_KEY) || '0');
    
    // Показываем каждую 3-ю тренировку (3, 6, 9, 12...)
    if (count > 0 && count % 3 === 0) {
        // Проверяем, не показывали ли уже для этого значения
        const shownFor = localStorage.getItem(PREMIUM_OFFER_SHOWN_KEY);
        if (shownFor === String(count)) {
            return false;
        }
        return true;
    }
    
    return false;
}

/**
 * Помечает, что предложение PREMIUM было показано для текущего счётчика
 */
function markPremiumOfferShown() {
    const count = parseInt(localStorage.getItem(WORKOUTS_COUNT_KEY) || '0');
    localStorage.setItem(PREMIUM_OFFER_SHOWN_KEY, String(count));
}
// ===================СОВМЕСТНЫЕ ТРЕНИРОВКИ ===================
const SESSION_MAX_AGE_HOURS = 6; // Максимальное время жизни сессии в часах
const SESSION_MAX_AGE_MS = SESSION_MAX_AGE_HOURS * 60 * 60 * 1000; // в миллисекундах

// =================== ЛОГИРОВАНИЕ ДЛЯ СОВМЕСТНЫХ ТРЕНИРОВОК ===================
function logCoopState(label) {
    console.log(`%c📊 [${label}] СОСТОЯНИЕ СОВМЕСТНОЙ ТРЕНИРОВКИ`, 'font-weight:bold; font-size:14px;');
    const user = firebase.auth().currentUser;
    const currentUserId = user ? user.uid : null;
    console.log('  👤 Текущий пользователь:', currentUserId);
    console.log('  🆔 Session ID:', currentSessionId);
    console.log('  🏷️  Статус сессии:', sessionData?.status || 'нет данных');
    console.log('  📝 Всего упражнений:', coopExercises.length);
    console.log('  ✅ Выполнено упражнений (sessionCompleted.size):', sessionCompleted.size);
    console.log('  ⏱️  Время (сек):', sessionSeconds);
    console.log('  📦 sessionCompletedSets:', JSON.stringify(sessionCompletedSets));
    if (sessionData && sessionData.participants) {
        console.log('  👥 Участники:');
        sessionData.participants.forEach(p => {
            const isMe = p.id === currentUserId;
            const progress = sessionData.participantProgress?.[p.id] || 0;
            const finished = sessionData.participantFinished?.[p.id] || false;
            const time = sessionData.participantFinishedSeconds?.[p.id] || 0;
            const xp = sessionData.participantXp?.[p.id] || 0;
            const ready = sessionData.participantReady?.[p.id] || false;
            console.log(`    ${isMe ? '👉' : '   '} ${p.name} (${p.id}): progress=${progress}/${coopExercises.length}, finished=${finished}, time=${time}s, xp=${xp.toFixed(1)}, ready=${ready}`);
        });
    } else {
        console.warn('  ⚠️ sessionData.participants отсутствует');
    }
    const allFinished = sessionData?.participants?.every(p => sessionData.participantFinished?.[p.id] === true) || false;
    console.log('  🏁 Все завершили?', allFinished);
    console.log('--------------------------------------------------');
}

// =================== ПРОВЕРКА ВРЕМЕНИ СЕССИИ ===================
function isSessionExpired(createdAt) {
    if (!createdAt) return false;
    const createdTime = createdAt.seconds ? createdAt.seconds * 1000 : new Date(createdAt).getTime();
    const now = Date.now();
    const age = now - createdTime;
    const expired = age > SESSION_MAX_AGE_MS;
    if (expired) {
        console.log('⏰ Сессия старше ' + SESSION_MAX_AGE_HOURS + ' часов, удаляем');
    }
    return expired;
}

async function deleteSessionIfExpired(sessionId, docData) {
    if (!sessionId) return false;
    if (isSessionExpired(docData?.createdAt)) {
        try {
            await firebase.firestore()
                .collection('trainingSessions')
                .doc(sessionId)
                .delete();
            console.log('🗑️ Сессия ' + sessionId + ' удалена (истекло время)');
            
            // Удаляем уведомления
            const snapshot = await firebase.firestore()
                .collection('notifications')
                .where('sessionId', '==', sessionId)
                .get();
            const batch = firebase.firestore().batch();
            snapshot.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            
            return true;
        } catch (error) {
            console.error('❌ Ошибка удаления просроченной сессии:', error);
            return false;
        }
    }
    return false;
}

// =================== ФУНКЦИИ ДЛЯ СОВМЕСТНЫХ ТРЕНИРОВОК ===================
window.cancelInvite = async function() {
    if (!currentSessionId) return;
    try {
        await firebase.firestore()
            .collection('trainingSessions')
            .doc(currentSessionId)
            .delete();

        const snapshot = await firebase.firestore()
            .collection('notifications')
            .where('sessionId', '==', currentSessionId)
            .where('type', '==', 'train_invite')
            .get();
        const batch = firebase.firestore().batch();
        snapshot.forEach(doc => batch.delete(doc.ref));
        await batch.commit();

        if (sessionListener) {
            sessionListener();
            sessionListener = null;
        }
        currentSessionId = null;
        isHost = false;
        showToast('❌ Приглашение отменено');
        window.navigateTo('workouts');
        document.getElementById('bottomNav').style.display = 'block';
    } catch (error) {
        showToast('❌ Не удалось отменить приглашение');
    }
}

function listenForInvites() {
    firebase.auth().onAuthStateChanged(async (user) => {
        // ★★★ ОТПИСЫВАЕМСЯ ОТ СТАРОГО СЛУШАТЕЛЯ ★★★
        if (inviteListener) {
            inviteListener();
            inviteListener = null;
        }
        
        if (!user) {
            if (inviteListener) {
                inviteListener();
                inviteListener = null;
            }
            return;
        }
        
        inviteListener = firebase.firestore()
            .collection('notifications')
            .where('to', '==', user.uid)
            .where('type', '==', 'train_invite')
            .where('read', '==', false)
            .onSnapshot(async (snapshot) => {
                for (const change of snapshot.docChanges()) {
                    if (change.type === 'added') {
                        const data = change.doc.data();
                        if (!data.sessionId) {
                            await firebase.firestore()
                                .collection('notifications')
                                .doc(change.doc.id)
                                .delete();
                            continue;
                        }
                        try {
                            const doc = await firebase.firestore()
                                .collection('trainingSessions')
                                .doc(data.sessionId)
                                .get();
                            if (!doc.exists) {
                                await firebase.firestore()
                                    .collection('notifications')
                                    .doc(change.doc.id)
                                    .delete();
                                continue;
                            }
                            const sessionData = doc.data();
                            if (isSessionExpired(sessionData.createdAt)) {
                                await firebase.firestore()
                                    .collection('notifications')
                                    .doc(change.doc.id)
                                    .delete();
                                await firebase.firestore()
                                    .collection('trainingSessions')
                                    .doc(data.sessionId)
                                    .delete();
                                continue;
                            }
                            const participants = sessionData.participants || [];
                            const participantFinished = sessionData.participantFinished || {};
                            const allFinished = participants.every(p => participantFinished[p.id] === true);
                            if (sessionData.status === 'completed' || allFinished) {
                                await firebase.firestore()
                                    .collection('notifications')
                                    .doc(change.doc.id)
                                    .delete();
                                continue;
                            }
                        } catch (error) {}
                        
                        showNotification(
                            '🏋️',
                            `${data.fromName} приглашает вас на тренировку!`,
                            function() {
                                acceptInvite(data.sessionId, change.doc.id);
                            }
                        );
                    }
                }
            });
    });
}

function showInviteNotification(data, notificationId) {
    const id = 'invite_' + data.sessionId;
    if (isNotificationSeen(id)) return;
    
    // Вместо передачи actionCallback, сохраняем данные и показываем уведомление
    showNotificationWithAction(
        '🏋️',
        `${data.fromName} приглашает вас на "${data.workoutTitle}"!`,
        function() {
            acceptInvite(data.sessionId, notificationId);
        }
    );
    markNotificationSeen(id);
}

// =================== ИСПРАВЛЕННАЯ ФУНКЦИЯ ACCEPT INVITE ===================
async function acceptInvite(sessionId, notificationId) {
    try {
        const user = await getFirebaseUser();
        if (!user) {
            showToast('❌ Вы не авторизованы');
            return;
        }
        const doc = await firebase.firestore()
            .collection('trainingSessions')
            .doc(sessionId)
            .get();
        if (!doc.exists) {
            if (notificationId) {
                await firebase.firestore()
                    .collection('notifications')
                    .doc(notificationId)
                    .update({ read: true });
            }
            showToast('❌ Приглашение устарело или отменено');
            return;
        }
        const data = doc.data();
        if (isSessionExpired(data.createdAt)) {
            await firebase.firestore()
                .collection('trainingSessions')
                .doc(sessionId)
                .delete();
            if (notificationId) {
                await firebase.firestore()
                    .collection('notifications')
                    .doc(notificationId)
                    .delete();
            }
            showToast('⏰ Приглашение устарело');
            return;
        }
        if (data.status === 'completed') {
            showToast('❌ Тренировка уже завершена');
            return;
        }
        if (notificationId) {
            await firebase.firestore()
                .collection('notifications')
                .doc(notificationId)
                .update({ read: true });
        }
        
        const participants = data.participants || [];
        const existingIndex = participants.findIndex(p => p.id === user.uid);
        const userName = user.displayName || 'Пользователь';
        let updatedParticipants = [...participants];
        if (existingIndex !== -1) {
            if (updatedParticipants[existingIndex].name !== userName) {
                updatedParticipants[existingIndex] = { 
                    ...updatedParticipants[existingIndex], 
                    name: userName 
                };
            }
        } else {
            updatedParticipants.push({ id: user.uid, name: userName });
        }
        
        const updateData = {
            participants: updatedParticipants,
            [`participantProgress.${user.uid}`]: 0,
            [`participantFinished.${user.uid}`]: false,
            [`participantFinishedSeconds.${user.uid}`]: null,
            [`participantXp.${user.uid}`]: 0,
            [`participantReady.${user.uid}`]: true
        };
        
        await firebase.firestore()
            .collection('trainingSessions')
            .doc(sessionId)
            .update(updateData);
        
        currentSessionId = sessionId;
        isHost = false;
        
        sessionData = {
            participants: updatedParticipants,
            participantProgress: { [user.uid]: 0 },
            participantFinished: { [user.uid]: false },
            participantFinishedSeconds: { [user.uid]: null },
            participantXp: { [user.uid]: 0 },
            participantReady: { [user.uid]: true }
        };
        
        window.navigateTo('training-waiting');
        setTimeout(() => listenSession(sessionId), 500);
        showToast(`✅ Вы присоединились к тренировке`);
    } catch (error) {
        showToast('❌ Не удалось присоединиться к тренировке');
    }
}

// =================== ИСПРАВЛЕННАЯ ФУНКЦИЯ СЛУШАТЕЛЯ СЕССИИ ===================
function listenSession(sessionId) {
    if (sessionListener) {
        sessionListener();
        sessionListener = null;
    }
    
    firebase.firestore()
        .collection('trainingSessions')
        .doc(sessionId)
        .get()
        .then((doc) => {
            if (!doc.exists) return;
            sessionListener = firebase.firestore()
                .collection('trainingSessions')
                .doc(sessionId)
                .onSnapshot(
                    { includeMetadataChanges: true },
                    (doc) => handleSessionSnapshot(doc),
                    (error) => {
                        if (error.code === 'unavailable' || error.code === 'deadline-exceeded') {
                            setTimeout(() => {
                                if (currentSessionId) listenSession(currentSessionId);
                            }, 2000);
                        }
                    }
                );
        })
        .catch(() => {});
}

function handleSessionSnapshot(doc) {
    console.log('🔥 [handleSessionSnapshot] ПОЛУЧЕН СНАПШОТ');
    if (!doc.exists) {
        console.warn('⚠️ Документ сессии не существует');
        if (sessionListener) {
            sessionListener();
            sessionListener = null;
        }
        const coopFinishPage = document.getElementById('page-coop-finish');
        if (coopFinishPage && coopFinishPage.classList.contains('page-active')) {
            window.navigateTo('workouts');
            document.getElementById('bottomNav').style.display = 'block';
        }
        return;
    }
    
    const data = doc.data();
    console.log('📄 Данные из Firestore:', JSON.stringify(data, null, 2));
    
    if (isSessionExpired(data.createdAt)) {
        console.warn('⏰ Сессия истекла');
        deleteSessionIfExpired(currentSessionId, data);
        const isOnTrainingPage = document.getElementById('page-training-session').classList.contains('page-active');
        const isOnWaitingPage = document.getElementById('page-training-waiting').classList.contains('page-active');
        const isOnFinishPage = document.getElementById('page-coop-finish').classList.contains('page-active');
        if (isOnTrainingPage || isOnWaitingPage || isOnFinishPage) {
            showToast('⏰ Время сессии истекло');
            window.navigateTo('workouts');
            document.getElementById('bottomNav').style.display = 'block';
        }
        return;
    }
    
    // ★★★ ОБНОВЛЯЕМ ЛОКАЛЬНЫЕ ДАННЫЕ ★★★
    if (!sessionData) {
        sessionData = {
            hostId: data.hostId,
            workoutTitle: data.workoutTitle,
            exercises: data.exercises || [],
            totalExercises: data.totalExercises || 0,
            participants: data.participants || [],
            participantProgress: data.participantProgress || {},
            participantFinished: data.participantFinished || {},
            participantFinishedSeconds: data.participantFinishedSeconds || {},
            participantXp: data.participantXp || {},
            participantReady: data.participantReady || {},
            status: data.status || 'waiting'
        };
    } else {
        sessionData.participants = data.participants || [];
        sessionData.participantProgress = data.participantProgress || {};
        sessionData.participantFinished = data.participantFinished || {};
        sessionData.participantFinishedSeconds = data.participantFinishedSeconds || {};
        sessionData.participantXp = data.participantXp || {};
        sessionData.participantReady = data.participantReady || {};
        sessionData.status = data.status || sessionData.status;
    }
    
    if (data.exercises && data.exercises.length > 0) {
        coopExercises = data.exercises;
    }
    
    // ★★★ ОБНОВЛЯЕМ UI ★★★
    updateCoopUI();
    logCoopState('handleSessionSnapshot (после обновления)');
    
    // ★★★ ЕСЛИ МЫ НА СТРАНИЦЕ ОЖИДАНИЯ — ОБНОВЛЯЕМ СТАТУСЫ ДРУЗЕЙ ★★★
    const isWaitingPageActive = document.getElementById('page-coop-waiting')?.classList.contains('page-active');
    if (isWaitingPageActive) {
        renderCoopFriendsStatus();
        console.log('🔄 Обновлены статусы друзей на странице ожидания');
    }
    
    // ★★★ ПРОВЕРЯЕМ, ВСЕ ЛИ УЧАСТНИКИ ЗАВЕРШИЛИ ★★★
    const participants = sessionData.participants || [];
    const participantFinished = sessionData.participantFinished || {};
    const allFinished = participants.length > 0 && participants.every(p => participantFinished[p.id] === true);
    
    if (allFinished) {
        console.log('🎉 [handleSessionSnapshot] ВСЕ УЧАСТНИКИ ЗАВЕРШИЛИ!');
        stopSessionTimer();
        
        // ★★★ ВСЕГДА ОБНОВЛЯЕМ ДАННЫЕ НА СТРАНИЦЕ ФИНИША ★★★
        renderFinishPageData(sessionData);
        
        // ★★★ ПОКАЗЫВАЕМ СТРАНИЦУ ФИНИША, ЕСЛИ ОНА ЕЩЁ НЕ ПОКАЗАНА ★★★
        if (!finishPageShown) {
            finishPageShown = true;
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('page-active');
                p.style.display = 'none';
            });
            const target = document.getElementById('page-coop-finish');
            if (target) {
                target.classList.add('page-active');
                target.style.display = 'block';
            }
            document.getElementById('bottomNav').style.display = 'none';
        }
        return;
    }
    
    // ★★★ ПРОВЕРЯЕМ, НЕ ЗАПУЩЕНА ЛИ ТРЕНИРОВКА ★★★
    const participantReady = data.participantReady || {};
    const allReady = participants.every(p => participantReady[p.id] === true);
    
    if (data.status === 'waiting' && allReady && !coopStarted) {
        console.log('🚀 Все готовы, запускаем тренировку');
        firebase.firestore()
            .collection('trainingSessions')
            .doc(currentSessionId)
            .update({
                status: 'active',
                startedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        coopStarted = true;
        finishPageShown = false;
        startCoopTraining(data);
        return;
    }
    
    if (data.status === 'active' && !coopStarted) {
        console.log('🚀 Тренировка активна, запускаем');
        coopStarted = true;
        finishPageShown = false;
        startCoopTraining(data);
        return;
    }
}

// =================== ИСПРАВЛЕННАЯ ФУНКЦИЯ СТАРТА ТРЕНИРОВКИ ===================
function startCoopTraining(data) {
    console.log('🔥🔥🔥 [startCoopTraining] НАЧАЛО');
    finishPageShown = false;
    coopStarted = true;
    
    const user = firebase.auth().currentUser;
    const currentUserId = user ? user.uid : null;
    
    coopExercises = data.exercises || [];
    console.log('📊 Используем базовые упражнения для всех');
    
    sessionData = data;
    sessionData.participants = data.participants || [];
    sessionData.participantProgress = data.participantProgress || {};
    sessionData.participantFinished = data.participantFinished || {};
    sessionData.participantFinishedSeconds = data.participantFinishedSeconds || {};
    sessionData.participantXp = data.participantXp || {};
    sessionData.status = data.status || 'waiting';

    const title = data.workoutTitle || 'Совместная тренировка';
    const category = 'Совместная';

    const myProgress = currentUserId ? (data.participantProgress[currentUserId] || 0) : 0;

    const exercises = coopExercises.map((ex, index) => ({
        ...ex,
        completed: index < myProgress
    }));

    sessionExercises = exercises.map(ex => ({
        ...ex,
        icon: ex.icon || getExerciseIcon(ex.name)
    }));
    sessionCurrentIndex = myProgress;
    sessionCompleted = new Set();
    sessionCompletedSets = {};
    for (let i = 0; i < myProgress; i++) {
        sessionCompleted.add(i);
    }
    sessionSeconds = 0;
    sessionWorkoutTitle = title + ' (совместно)';
    sessionCategory = category;
    sessionWorkoutIcon = null;

    closeModal('sessionExitModal');
    window.navigateTo('training-session');

    renderSessionExercise();
    renderSessionProgress();
    updateSessionButtons();
    startSessionTimer();

    logCoopState('startCoopTraining');
    setTimeout(updateCoopUI, 500);
}

// =================== ИСПРАВЛЕННАЯ ФУНКЦИЯ ОБНОВЛЕНИЯ UI ===================
function updateCoopUI() {
    const total = coopExercises.length || 0;
    const participants = sessionData?.participants || [];
    const participantProgress = sessionData?.participantProgress || {};
    const participantFinished = sessionData?.participantFinished || {};
    const participantFinishedSeconds = sessionData?.participantFinishedSeconds || {};
    const participantXp = sessionData?.participantXp || {};
    
    const existingContainer = document.getElementById('participantsContainer');
    if (existingContainer) existingContainer.remove();
    
    const progressRow = document.querySelector('.session-progress-row');
    if (!progressRow) return;
    
    const container = document.createElement('div');
    container.id = 'participantsContainer';
    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        margin-top: 0.3rem;
        width: 100%;
    `;
    
    const user = firebase.auth().currentUser;
    const currentUserId = user ? user.uid : null;
    const otherParticipants = participants.filter(p => p.id !== currentUserId);
    
    otherParticipants.sort((a, b) => {
        const aFinished = participantFinished[a.id] || false;
        const bFinished = participantFinished[b.id] || false;
        if (aFinished && !bFinished) return -1;
        if (!aFinished && bFinished) return 1;
        const aProg = participantProgress[a.id] || 0;
        const bProg = participantProgress[b.id] || 0;
        return bProg - aProg;
    });
    
function formatTime(seconds) {
    if (!seconds) return '00:00';
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}
    
    otherParticipants.forEach(p => {
        const progress = participantProgress[p.id] || 0;
        const isComplete = participantFinished[p.id] || false;
        const timeText = isComplete && participantFinishedSeconds[p.id] ? formatTime(participantFinishedSeconds[p.id]) : null;
        const progressText = `${progress}/${total}`;
        
        const item = document.createElement('div');
        item.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.4rem 0.6rem;
            background: var(--accent-light);
            border-radius: 8px;
            font-size: 0.8rem;
        `;
        
        const leftPart = document.createElement('span');
        leftPart.style.cssText = 'display: flex; align-items: center; gap: 0.3rem;';
        let leftHtml = `
            <span style="font-size: 0.9rem;">👤</span>
            <span style="font-weight: 500; color: var(--slate);">${p.name}</span>
        `;
        if (timeText) {
            leftHtml += `
                <span style="color: var(--slate);">·</span>
                <span style="font-weight: 500; color: var(--slate);">${timeText}</span>
            `;
        }
        leftPart.innerHTML = leftHtml;
        item.appendChild(leftPart);
        
        const rightPart = document.createElement('span');
        rightPart.style.cssText = `font-weight: 600; color: var(--slate);`;
        rightPart.textContent = progressText;
        item.appendChild(rightPart);
        
        container.appendChild(item);
    });
    
    progressRow.appendChild(container);
}

function showCoopFinishPage() {
    console.log('🔥🔥🔥 [showCoopFinishPage] НАЧАЛО');
    
    // ★★★ ВСЕГДА ОБНОВЛЯЕМ ДАННЫЕ ★★★
    if (sessionData) {
        console.log('📊 [showCoopFinishPage] Вызываем renderFinishPageData с sessionData');
        renderFinishPageData(sessionData);
    } else {
        console.warn('⚠️ [showCoopFinishPage] sessionData пуст');
    }
    
    // ★★★ ПОКАЗЫВАЕМ СТРАНИЦУ, ЕСЛИ ОНА ЕЩЁ НЕ ПОКАЗАНА ★★★
    if (!finishPageShown) {
        finishPageShown = true;
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('page-active');
            p.style.display = 'none';
        });
        
        const target = document.getElementById('page-coop-finish');
        if (target) {
            target.classList.add('page-active');
            target.style.display = 'block';
        }
        document.getElementById('bottomNav').style.display = 'none';
    }
    
    console.log('✅ [showCoopFinishPage] ЗАВЕРШЕНА');
    
    // ★★★ ПРОВЕРЯЕМ ЕЖЕДНЕВНЫЕ ЗАДАНИЯ (СОВМЕСТНАЯ ТРЕНИРОВКА) ★★★
    if (sessionData && sessionData.exercises) {
        const completedCount = sessionCompleted ? sessionCompleted.size : 0;
        if (completedCount > 0) {
            const workoutData = {
                exercises: sessionData.exercises.map((ex, index) => ({
                    ...ex,
                    completed: sessionCompleted ? sessionCompleted.has(index) : false
                })),
                durationSeconds: sessionSeconds || 0,
                category: sessionCategory || 'Совместная'
            };
            checkDailyTasksAfterCoopWorkout(workoutData);
        }
    }
}

function renderFinishPageData(data) {
    console.log('🔥🔥🔥 [renderFinishPageData] НАЧАЛО');
    logCoopState('renderFinishPageData (перед рендером)');
    
    // ★★★ ПРОВЕРКА НА НАЛИЧИЕ ДАННЫХ ★★★
    if (!data || Object.keys(data).length === 0) {
        console.warn('⚠️ [renderFinishPageData] data пустая, используем sessionData');
        data = sessionData;
        if (!data) {
            console.error('❌ [renderFinishPageData] Нет данных для отображения!');
            const container = document.getElementById('coopAllParticipants');
            if (container) {
                container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Нет данных для отображения</div>';
            }
            return;
        }
    }

    const total = data?.totalExercises || 0;
    const participants = data?.participants || [];
    
    // ★★★ ПРОВЕРКА НА УЧАСТНИКОВ ★★★
    if (!participants || participants.length === 0) {
        console.warn('⚠️ [renderFinishPageData] Нет участников!');
        const container = document.getElementById('coopAllParticipants');
        if (container) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Нет участников в тренировке</div>';
        }
        return;
    }
    
    const participantProgress = data?.participantProgress || {};
    const participantFinished = data?.participantFinished || {};
    const participantFinishedSeconds = data?.participantFinishedSeconds || {};
    const participantXp = data?.participantXp || {};

    const user = firebase.auth().currentUser;
    const currentUserId = user ? user.uid : null;

    const sortedParticipants = [...participants].sort((a, b) => {
        if (a.id === currentUserId) return -1;
        if (b.id === currentUserId) return 1;
        return 0;
    });

    // ★★★ ПОЛУЧАЕМ ИЛИ СОЗДАЁМ КОНТЕЙНЕР (ТОЛЬКО ОДИН РАЗ) ★★★
    let container = document.getElementById('coopAllParticipants');
    if (!container) {
        container = document.createElement('div');
        container.id = 'coopAllParticipants';
        container.style.cssText = 'width:100%; display:flex; flex-direction:column; gap:0.5rem;';
        const finishContent = document.querySelector('.finish-content');
        if (finishContent) {
            const btn = document.getElementById('coopFinishDoneBtn');
            if (btn) {
                finishContent.insertBefore(container, btn);
            } else {
                finishContent.appendChild(container);
            }
        } else {
            console.error('❌ [renderFinishPageData] Не найден контейнер .finish-content');
            return;
        }
    } else {
        // ★★★ ОЧИЩАЕМ СОДЕРЖИМОЕ, НО НЕ УДАЛЯЕМ САМ КОНТЕЙНЕР ★★★
        container.innerHTML = '';
    }

    let html = '';
    sortedParticipants.forEach((p) => {
        const isMe = p.id === currentUserId;
        const progress = participantProgress[p.id] || 0;
        const time = participantFinishedSeconds[p.id] || 0;
        const xp = participantXp[p.id] || 0;
        const name = p.name || 'Пользователь';
        const icon = isMe ? 'fa-solid fa-user' : 'fa-solid fa-user';
        const xpDisplay = (isNaN(xp) ? 0 : xp).toFixed(1);
        
        console.log(`📊 Участник ${name}: progress=${progress}/${total}, time=${time}s, xp=${xpDisplay}`);

        html += `
            <div style="width:100%;">
                <div class="item-title" style="color:var(--slate); margin-left: 1rem; margin-bottom: 0.5rem;">
                    <i class="${icon}"></i> ${isMe ? 'Вы' : name}
                </div>
                <div class="finish-stats" style="margin-bottom: 0rem;">
                    <div class="finish-stat-item">
                        <span class="finish-stat-label">Упражнений</span>
                        <span class="finish-stat-value">${progress}/${total}</span>
                    </div>
                    <div class="finish-stat-item">
                        <span class="finish-stat-label">Время</span>
                        <span class="finish-stat-value">${formatTime(time)}</span>
                    </div>
                    <div class="finish-stat-item">
                        <span class="finish-stat-label">XP</span>
                        <span class="finish-stat-value">+${xpDisplay}</span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    console.log('✅ [renderFinishPageData] Все участники отрендерены');
}

// Вспомогательная функция для форматирования времени
function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

// =================== ИСПРАВЛЕННЫЙ markCurrentComplete ===================
markCurrentComplete = function() {
    const currentEx = sessionExercises[sessionCurrentIndex];
    const repsStr = String(currentEx?.reps || '');
    const isTimed = isTimeBased(repsStr);
    const key = sessionCurrentIndex;
    
    if (isTimed) {
        const completedSets = sessionCompletedSets[key] || 0;
        const totalSets = parseInt(currentEx?.sets) || 0;
        
        if (completedSets === 0) {
            showToast('⏱️ Нажмите СТАРТ, чтобы начать упражнение');
            return;
        }
        
        if (completedSets < totalSets) {
            showToast(`⏱️ Выполнено ${completedSets} из ${totalSets} подходов. Завершите все подходы.`);
            return;
        }
        
        sessionCompleted.add(sessionCurrentIndex);
        if (currentSessionId && sessionData) {
            updateCoopProgress(sessionCompleted.size, false);
        }
        logCoopState('markCurrentComplete (после завершения упражнения)');
        
        const isLast = sessionCurrentIndex === sessionExercises.length - 1;
        if (isLast) {
            finishTrainingSession();
        } else {
            startRest();
        }
        return;
    }
    
    const completedSets = sessionCompletedSets[key] || 0;
    const totalSets = parseInt(currentEx?.sets) || 0;
    
    if (completedSets > 0 && completedSets < totalSets) {
        showConfirmModal(
            'Упражнение не завершено',
            `Вы выполнили ${completedSets} из ${totalSets} подходов. Засчитать как выполненное?`,
            function() {
                sessionCompletedSets[key] = totalSets;
                sessionCompleted.add(sessionCurrentIndex);
                if (currentSessionId && sessionData) {
                    updateCoopProgress(sessionCompleted.size, false);
                }
                logCoopState('markCurrentComplete (после подтверждения)');
                const isLast = sessionCurrentIndex === sessionExercises.length - 1;
                if (isLast) {
                    finishTrainingSession();
                } else {
                    startRest();
                }
            },
            'Засчитать'
        );
        return;
    }
    
    if (sessionCompletedSets[key] === undefined || sessionCompletedSets[key] === 0) {
        sessionCompletedSets[key] = totalSets;
    }
    sessionCompleted.add(sessionCurrentIndex);
    if (currentSessionId && sessionData) {
        updateCoopProgress(sessionCompleted.size, false);
    }
    logCoopState('markCurrentComplete (после завершения упражнения)');
    
    const isLast = sessionCurrentIndex === sessionExercises.length - 1;
    if (isLast) {
        finishTrainingSession();
    } else {
        startRest();
    }
};

async function updateCoopProgress(completedCount, isFinishing = false) {
    console.log('🔥🔥🔥 [updateCoopProgress] НАЧАЛО');
    if (!currentSessionId) return;

    try {
        const user = firebase.auth().currentUser;
        if (!user) return;
        const userId = user.uid;
        const total = coopExercises.length || 0;
        const currentTime = sessionSeconds;

        console.log(`📤 Отправка прогресса: пользователь ${userId}, выполнено ${completedCount}/${total}, завершение=${isFinishing}`);

        // ★★★ XP ВЫЧИСЛЯЕМ ПРАВИЛЬНО ★★★
        const xpEarned = calculateWorkoutXp(coopExercises, sessionCompletedSets);
        console.log('📊 XP за тренировку (правильный):', xpEarned);

        const update = {};
        update[`participantProgress.${userId}`] = completedCount;
        
        // ★★★ XP ОБНОВЛЯЕМ ВСЕГДА ★★★
        update[`participantXp.${userId}`] = xpEarned;

        if (isFinishing || completedCount >= total) {
            update[`participantFinished.${userId}`] = true;
            update[`participantFinishedSeconds.${userId}`] = currentTime;
        }

        await firebase.firestore()
            .collection('trainingSessions')
            .doc(currentSessionId)
            .update(update);

        console.log('✅ Прогресс успешно обновлён в Firestore');

        // ★★★ ЛОКАЛЬНЫЕ ДАННЫЕ ОБНОВЛЯЕМ ВСЕГДА ★★★
        if (sessionData) {
            sessionData.participantProgress[userId] = completedCount;
            sessionData.participantXp[userId] = xpEarned;
            if (isFinishing || completedCount >= total) {
                sessionData.participantFinished[userId] = true;
                sessionData.participantFinishedSeconds[userId] = currentTime;
            }
        }

        updateCoopUI();
        logCoopState('updateCoopProgress (после обновления)');

    } catch (error) {
        console.error('❌ [updateCoopProgress] ОШИБКА:', error);
        showToast('❌ Ошибка сохранения прогресса');
    }
}

function showFriendSelectModal(friends) {
    const oldModal = document.getElementById('friendSelectModal');
    if (oldModal) oldModal.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'friendSelectModal';
overlay.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
                <div class="modal-title">Выберите друга</div>
                <div class="scroll-wrapper" style="max-height: 300px; overflow-y: auto; margin-bottom: 0.5rem;">
${friends.map(f => {
    const level = getCurrentLevel(f.totalXp || 0).id;
    const xp = Math.round(f.totalXp || 0); // ← ИСПРАВЛЕНО: используем f.totalXp
    return `
        <div class="friend-itemMOD" data-friend-id="${f.id}" onclick="selectFriendForCoop('${f.id}')" style="cursor: pointer; border: 1px solid #E2E8F0; transition: border-color 0.2s ease;">
            <div class="friend-avatar">${(f.displayName || 'П')[0].toUpperCase()}</div>
            <div class="friend-info">
                <strong>${f.displayName || 'Пользователь'}</strong>
                <span>Уровень ${level} · ${xp} XP</span>
            </div>
            <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    `;
}).join('')}
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="document.getElementById('friendSelectModal').remove()" style="flex: 1;">Закрыть</button>
                    <button class="btn btn-primary" id="sendInviteBtn" style="flex: 1;">Отправить</button>
                </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Массив выбранных друзей
    window._selectedFriends = [];
    
    document.getElementById('sendInviteBtn').addEventListener('click', function() {
        const selectedFriends = window._selectedFriends || [];
        const count = selectedFriends.length;
        
        // 1. Если никто не выбран
        if (count === 0) {
            showToast('⚠️ Выберите друга');
            return;
        }
        
        // 2. Если выбран 1 друг — всегда отправляем (без проверки Premium)
        if (count === 1) {
            const friendId = selectedFriends[0];
            overlay.remove();
            getUserProfile(friendId).then(result => {
                if (result.success) {
                    const friendName = result.data.displayName || 'Пользователь';
                    sendCoopInvite(friendId, friendName);
                } else {
                    showToast('❌ Не удалось загрузить данные друга');
                }
            });
            return;
        }
        
        // 3. Если выбрано 2+ друзей — проверяем Premium
        if (count >= 2) {
            if (hasPremium()) {
                // С Premium можно отправлять до 3 друзей
                if (count <= 3) {
                    overlay.remove();
                    const friendId = selectedFriends[0];
                    getUserProfile(friendId).then(result => {
                        if (result.success) {
                            const friendName = result.data.displayName || 'Пользователь';
                            sendCoopInvite(friendId, friendName);
                        } else {
                            showToast('❌ Не удалось загрузить данные друга');
                        }
                    });
                } else {
                    showToast(`⚠️ Можно выбрать не более 3 друзей`);
                }
            } else {
                // Нет Premium — показываем модалку
                overlay.remove();
                openModal('premiumModal');
            }
        }
    });
}

window.selectFriendForCoop = function(friendId) {
    const currentSelected = window._selectedFriends || [];
    
    // Проверяем, выбран ли уже этот друг
    const index = currentSelected.indexOf(friendId);
    
    if (index !== -1) {
        // Убираем выделение
        currentSelected.splice(index, 1);
        const el = document.querySelector(`.friend-itemMOD[data-friend-id="${friendId}"]`);
        if (el) {
            el.style.border = '1px solid #E2E8F0';
        }
    } else {
        // Добавляем выделение (без ограничений при выборе)
        currentSelected.push(friendId);
        const el = document.querySelector(`.friend-itemMOD[data-friend-id="${friendId}"]`);
        if (el) {
            el.style.border = '2px solid var(--accent)';
        }
    }
    
    window._selectedFriends = currentSelected;
};

async function sendCoopInvite(friendId, friendName) {
    console.log('🔥🔥🔥 [sendCoopInvite] НАЧАЛО');
    const workoutData = window._currentWorkoutForInvite;
    if (!workoutData || !workoutData.exercises || workoutData.exercises.length === 0) {
        showToast('❌ Сначала выберите тренировку');
        return;
    }
    try {
        const user = await getFirebaseUser();
        if (!user) {
            showToast('❌ Вы не авторизованы');
            return;
        }
        
        const selectedFriends = window._selectedFriends || [];
        console.log('🔥 Выбрано друзей:', selectedFriends.length);
        
        const maxFriends = hasPremium() ? 3 : 1;
        if (selectedFriends.length > maxFriends) {
            if (!hasPremium()) {
                showToast('⚠️ Без Premium можно пригласить только 1 друга');
                openModal('premiumModal');
                return;
            } else {
                showToast(`⚠️ Можно пригласить не более ${maxFriends} друзей`);
                return;
            }
        }
        
        const friendsWithNames = [];
        for (const id of selectedFriends) {
            const result = await getUserProfile(id);
            const name = result.success ? result.data.displayName : 'Пользователь';
            friendsWithNames.push({ id, name });
        }
        
        // Формируем участников: хост + все друзья
        const allParticipants = [
            { id: user.uid, name: user.displayName || 'Пользователь' },
            ...friendsWithNames
        ];
        
        // ★★★ СОЗДАЁМ ОБЪЕКТЫ ДЛЯ ВСЕХ УЧАСТНИКОВ ★★★
        const progressMap = {};
        const finishedMap = {};
        const secondsMap = {};
        const xpMap = {};
        const readyMap = {};
        
        allParticipants.forEach(p => {
            progressMap[p.id] = 0;
            finishedMap[p.id] = false;
            secondsMap[p.id] = null;
            xpMap[p.id] = 0;
            readyMap[p.id] = false;
        });
        
        // Хост готов сразу
        readyMap[user.uid] = true;
        
        // Создаём сессию
        const sessionRef = await firebase.firestore().collection('trainingSessions').add({
            hostId: user.uid,
            workoutTitle: workoutData.title,
            exercises: workoutData.exercises.map(ex => ({ ...ex, completed: false })),
            status: 'waiting',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            totalExercises: workoutData.exercises.length,
            participants: allParticipants,
            participantProgress: progressMap,
            participantFinished: finishedMap,
            participantFinishedSeconds: secondsMap,
            participantXp: xpMap,
            participantReady: readyMap,
            closedFinish: {}
        });
        
        currentSessionId = sessionRef.id;
        isHost = true;
        
        // ★★★ ОБНОВЛЯЕМ ЛОКАЛЬНЫЕ ДАННЫЕ ★★★
        sessionData = {
            hostId: user.uid,
            workoutTitle: workoutData.title,
            exercises: workoutData.exercises,
            totalExercises: workoutData.exercises.length,
            participants: allParticipants,
            participantProgress: progressMap,
            participantFinished: finishedMap,
            participantFinishedSeconds: secondsMap,
            participantXp: xpMap,
            participantReady: readyMap
        };
        
        coopExercises = workoutData.exercises;
        finishPageShown = false;
        
        // Отправляем приглашения
        for (const friend of friendsWithNames) {
            await firebase.firestore().collection('notifications').add({
                to: friend.id,
                from: user.uid,
                fromName: user.displayName || 'Пользователь',
                type: 'train_invite',
                sessionId: sessionRef.id,
                workoutTitle: workoutData.title,
                message: `${user.displayName || 'Пользователь'} приглашает вас на совместную тренировку!`,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                read: false
            });
        }
        
        showToast(`✅ Приглашения отправлены ${friendsWithNames.length} друзьям`);
        
        window.navigateTo('training-waiting');
        document.getElementById('bottomNav').style.display = 'none';
        
        setTimeout(() => {
            listenSession(currentSessionId);
        }, 500);
        
    } catch (error) {
        console.error('❌ [sendCoopInvite] ОШИБКА:', error);
        showToast('❌ Не удалось отправить приглашение');
    }
}

finishTrainingSession = async function() {
    soundTimerFinish.currentTime = 0;
    soundTimerFinish.play().catch(() => {});
    
    if (isResting) {
        if (restTimerInterval) {
            clearInterval(restTimerInterval);
            restTimerInterval = null;
        }
        isResting = false;
    }
   
    console.log('🔥🔥🔥 [finishTrainingSession] НАЧАЛО');
    
    // ЛОГ: проверяем все ключевые переменные
    console.log('📊 [finishTrainingSession] ПРОВЕРКА ПЕРЕМЕННЫХ:');
    console.log('  - currentSessionId:', currentSessionId);
    console.log('  - sessionData существует?', !!sessionData);
    console.log('  - sessionExercises.length:', sessionExercises.length);
    console.log('  - sessionCompleted.size:', sessionCompleted.size);
    console.log('  - sessionSeconds:', sessionSeconds);
    console.log('  - isHost:', isHost);
    console.log('  - sessionWorkoutTitle:', sessionWorkoutTitle);
    console.log('  - sessionCategory:', sessionCategory);

    // Если нет совместной сессии — обрабатываем как обычную тренировку
    if (!currentSessionId || !sessionData) {
        console.log('📌 [finishTrainingSession] Обычная тренировка (нет совместной сессии)');
        stopSessionTimer();
        const total = sessionExercises.length;
        const completed = sessionCompleted.size;
        const completedExercises = sessionExercises.filter((_, index) => sessionCompleted.has(index));
        const xpEarned = calculateWorkoutXp(sessionExercises, sessionCompletedSets);
        console.log('📊 [finishTrainingSession] Обычная тренировка: total=' + total + ', completed=' + completed + ', xp=' + xpEarned);

        // ★★★ ВСЕГДА ПОКАЗЫВАЕМ СТРАНИЦУ ФИНИША, ДАЖЕ ПРИ 0 УПРАЖНЕНИЙ ★★★
        showFinishPage(total, completed, sessionSeconds, xpEarned);
        console.log('✅ [finishTrainingSession] Обычная тренировка завершена');

        refreshFriendsHistory()
        
        // ЗАДАНИЕ 1: ПЕРВЫЙ ШАГ
        if (completed > 0 && !tasks[1]) {
            tasks[1] = true;
            saveTasks();
            updateTasksUI();
            showToast('✅ Задание "Первый шаг" выполнено!');
            addTaskXp();
        }
        
        // ПРОВЕРЯЕМ ЕЖЕДНЕВНЫЕ ЗАДАНИЯ
        if (completed > 0) {
            const workoutData = {
                exercises: sessionExercises.map((ex, index) => ({
                    ...ex,
                    completed: sessionCompleted.has(index)
                })),
                durationSeconds: sessionSeconds,
                category: sessionCategory || ''
            };
            checkDailyTasksAfterWorkout(workoutData);
        }
        
        return;
    }

    // Совместная тренировка
    console.log('📌 [finishTrainingSession] СОВМЕСТНАЯ тренировка');
    
    const completedCount = sessionCompleted.size;
    const total = sessionData.totalExercises || coopExercises.length || 0;
    
    console.log('📊 [finishTrainingSession] ДАННЫЕ СОВМЕСТНОЙ ТРЕНИРОВКИ:');
    console.log('  - completedCount (sessionCompleted.size):', completedCount);
    console.log('  - total (sessionData.totalExercises || coopExercises.length):', total);
    console.log('  - sessionData.totalExercises:', sessionData.totalExercises);
    console.log('  - coopExercises.length:', coopExercises.length);
    console.log('  - sessionData.participants:', JSON.stringify(sessionData.participants));
    console.log('  - sessionData.participantProgress:', JSON.stringify(sessionData.participantProgress));
    console.log('  - sessionData.participantFinished:', JSON.stringify(sessionData.participantFinished));

    // ★★★ ВЫЧИСЛЯЕМ XP ПРАВИЛЬНО ★★★
    const xpEarned = calculateWorkoutXp(coopExercises, sessionCompletedSets);
    console.log('📊 XP за тренировку (правильный):', xpEarned);

    // ОБНОВЛЯЕМ ПРОГРЕСС
    console.log('🔄 [finishTrainingSession] Вызов updateCoopProgress(' + completedCount + ', true)');
    await updateCoopProgress(completedCount, true);
    console.log('✅ [finishTrainingSession] updateCoopProgress выполнен');

    // ПРИНУДИТЕЛЬНО ОБНОВЛЯЕМ ЛОКАЛЬНЫЕ ДАННЫЕ
    const user = firebase.auth().currentUser;
    console.log('👤 [finishTrainingSession] Текущий пользователь:', user ? user.uid : 'null');
    
    if (user) {
        const userId = user.uid;
        console.log('🔄 [finishTrainingSession] Обновляем локальный sessionData для пользователя:', userId);
        if (sessionData) {
            sessionData.participantProgress[userId] = completedCount;
            sessionData.participantFinished[userId] = true;
            sessionData.participantFinishedSeconds[userId] = sessionSeconds;
            // ★★★ СОХРАНЯЕМ ПРАВИЛЬНЫЙ XP ★★★
            sessionData.participantXp[userId] = xpEarned;
        }
    }

    // ПРОВЕРЯЕМ, ВСЕ ЛИ ЗАВЕРШИЛИ
    const participants = sessionData.participants || [];
    const participantFinished = sessionData.participantFinished || {};
    
    console.log('📊 [finishTrainingSession] ПРОВЕРКА ЗАВЕРШЕНИЯ:');
    console.log('  - Всего участников:', participants.length);
    participants.forEach(p => {
        console.log('  - Участник ' + p.name + ' (' + p.id + '): finished=' + participantFinished[p.id]);
    });
    
    const allFinished = participants.every(p => participantFinished[p.id] === true);
    console.log('  - allFinished:', allFinished);

    if (!allFinished) {
        console.log('⏳ [finishTrainingSession] Не все завершили, показываем страницу ожидания...');
        stopSessionTimer();
        showCoopWaitingPage();
        console.log('✅ [finishTrainingSession] Страница ожидания показана');
        return;
    }

    console.log('🎉 [finishTrainingSession] Все участники завершили!');
    console.log('🔄 [finishTrainingSession] Вызов stopSessionTimer()');
    stopSessionTimer();
    console.log('🔄 [finishTrainingSession] Вызов showCoopFinishPage()');
    showCoopFinishPage();
    console.log('✅ [finishTrainingSession] ЗАВЕРШЕНА');

    refreshFriendsHistory()

    // ЗАДАНИЕ 1: ПЕРВЫЙ ШАГ
    if (completedCount > 0 && !tasks[1]) {
        tasks[1] = true;
        saveTasks();
        updateTasksUI();
        showToast('✅ Задание "Первый шаг" выполнено!');
        addTaskXp();
    }

    // ПРОВЕРЯЕМ ЕЖЕДНЕВНЫЕ ЗАДАНИЯ (СОВМЕСТНАЯ)
    if (completedCount > 0) {
        const workoutData = {
            exercises: coopExercises.map((ex, index) => ({
                ...ex,
                completed: index < completedCount
            })),
            durationSeconds: sessionSeconds,
            category: sessionCategory || ''
        };
        checkDailyTasksAfterCoopWorkout(workoutData);
    }
};

// =================== СТРАНИЦА ОЖИДАНИЯ ОСТАЛЬНЫХ ===================
function showCoopWaitingPage() {
    console.log('🔥🔥🔥 [showCoopWaitingPage] НАЧАЛО');
    logCoopState('showCoopWaitingPage (перед отображением)');
    
    const total = coopExercises.length || 0;
    const myExercises = sessionCompleted.size;
    
    // ★★★ ВЫЧИСЛЯЕМ XP ПРАВИЛЬНО ★★★
    const user = firebase.auth().currentUser;
    const userId = user ? user.uid : null;
    let myXpValue = 0;
    
    // Сначала проверяем sessionData
    if (sessionData && userId && sessionData.participantXp && sessionData.participantXp[userId] !== undefined) {
        myXpValue = sessionData.participantXp[userId];
        console.log(`📊 XP из sessionData: ${myXpValue}`);
    } else {
        // Вычисляем XP на основе выполненных упражнений и подходов
        myXpValue = calculateWorkoutXp(coopExercises, sessionCompletedSets);
        console.log(`📊 XP вычислен локально: ${myXpValue}`);
        // Обновляем sessionData, чтобы следующие вызовы использовали его
        if (sessionData && userId) {
            sessionData.participantXp[userId] = myXpValue;
        }
    }
    const myTime = sessionSeconds;
    
    document.getElementById('coopMyExercises').textContent = `${myExercises}/${total}`;
    document.getElementById('coopMyTime').textContent = formatTime(myTime);
    document.getElementById('coopMyXp').textContent = `+${(isNaN(myXpValue) ? 0 : myXpValue).toFixed(1)}`;
    
    renderCoopFriendsStatus();
    
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = 'none';
    });
    const target = document.getElementById('page-coop-waiting');
    if (target) {
        target.classList.add('page-active');
        target.style.display = 'block';
    }
    document.getElementById('bottomNav').style.display = 'none';
    
    console.log('✅ Страница ожидания показана');
}

function renderCoopFriendsStatus() {
    console.log('🔥 [renderCoopFriendsStatus] НАЧАЛО');
    const container = document.getElementById('coopFriendsStatus');
    if (!container) {
        console.error('❌ [renderCoopFriendsStatus] Контейнер coopFriendsStatus не найден');
        return;
    }
    
    const participants = sessionData?.participants || [];
    const participantProgress = sessionData?.participantProgress || {};
    const total = coopExercises.length || 0;
    
    const user = firebase.auth().currentUser;
    const currentUserId = user ? user.uid : null;
    
    const friends = participants.filter(p => p.id !== currentUserId);
    
    if (friends.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:var(--slate);padding:1rem;">Нет других участников</div>`;
        return;
    }
    
    let html = '';
    friends.forEach(p => {
        const progress = participantProgress[p.id] || 0;
        const name = p.name || 'Пользователь';
        html += `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; background:var(--white); border-radius:10px; border:1px solid #E2E8F0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
                <span style="font-weight:500; color:var(--dark);">
                    👤 ${name}
                </span>
                <span style="font-weight:600; color:var(--slate);">
                    ${progress}/${total}
                </span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

document.getElementById('coopFinishDoneBtn')?.addEventListener('click', async function() {
    console.log('🔥🔥🔥 [coopFinishDoneBtn] НАЖАТА КНОПКА');
    console.log('🔥 [coopFinishDoneBtn] currentSessionId:', currentSessionId);
    console.log('🔥 [coopFinishDoneBtn] isHost:', isHost);
    console.log('🔥 [coopFinishDoneBtn] sessionCompleted.size:', sessionCompleted.size);
    console.log('🔥 [coopFinishDoneBtn] sessionSeconds:', sessionSeconds);

    if (!preventDoubleClick('coopFinishDoneBtn', 3000)) {
        console.log('⏳ [coopFinishDoneBtn] Защита от двойного клика');
        showToast('⏳ Подождите, тренировка уже сохраняется...');
        return;
    }

    const btn = this;
    btn.disabled = true;
    console.log('📝 [coopFinishDoneBtn] Кнопка заблокирована');

    try {
        // 1. Подготовка данных тренировки из глобальных переменных
        console.log('📝 [coopFinishDoneBtn] Подготовка данных тренировки');
        const workoutExercises = sessionExercises.map((ex, index) => ({
            ...ex,
            icon: ex.icon || null,
            completed: sessionCompleted.has(index)
        }));
        console.log('🔥 [coopFinishDoneBtn] workoutExercises.length:', workoutExercises.length);

        const workoutIcon = sessionWorkoutIcon || null;
        const finalCategory = sessionCategory || 'Без категории';
        const xpEarned = calculateWorkoutXp(workoutExercises.filter((_, index) => sessionCompleted.has(index)));
        console.log('🔥 [coopFinishDoneBtn] workoutIcon:', workoutIcon);
        console.log('🔥 [coopFinishDoneBtn] finalCategory:', finalCategory);
        console.log('🔥 [coopFinishDoneBtn] xpEarned:', xpEarned);

        const workoutData = {
            title: sessionWorkoutTitle || 'Совместная тренировка',
            date: new Date().toISOString(),
            durationSeconds: sessionSeconds,
            exercises: workoutExercises,
            xpEarned: xpEarned,
            category: finalCategory,
            icon: workoutIcon
        };
        console.log('🔥 [coopFinishDoneBtn] workoutData:', workoutData);

        const user = await getFirebaseUser();
        console.log('🔥 [coopFinishDoneBtn] user:', user ? user.uid : 'null');

        // 2. Сохранение тренировки (в Firestore или локально)
        if (user) {
            console.log('📤 [coopFinishDoneBtn] Сохраняем тренировку в Firestore');
            const result = await saveWorkoutToFirestore(user.uid, workoutData);
            console.log('🔥 [coopFinishDoneBtn] result.success:', result.success);
            if (result.success) {
                const profileResult = await getUserProfile(user.uid);
                if (profileResult.success) {
                    const currentXp = profileResult.data.totalXp || 0;
                    console.log('🔥 [coopFinishDoneBtn] currentXp:', currentXp);
                    await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
                    console.log('✅ [coopFinishDoneBtn] Профиль обновлён, XP добавлен');
                }
                showToast('💾 Тренировка сохранена');
                // После сохранения или добавления в офлайн-очередь
await updateAchievementsAfterWorkout();
            } else {
                addPendingWorkout(workoutData);
                showToast('⚠️ Тренировка сохранена локально, синхронизация позже');
            }
        } else {
            addPendingWorkout(workoutData);
            showToast('⚠️ Тренировка сохранена локально');
        }

        // 3. Помечаем, что этот участник закрыл страницу финиша
        if (currentSessionId) {
            const user = firebase.auth().currentUser;
            if (user) {
                await firebase.firestore()
                    .collection('trainingSessions')
                    .doc(currentSessionId)
                    .update({
                        [`closedFinish.${user.uid}`]: true
                    });

                // 4. Проверяем, все ли закрыли финиш → удаляем сессию
                const doc = await firebase.firestore()
                    .collection('trainingSessions')
                    .doc(currentSessionId)
                    .get();
                if (doc.exists) {
                    const data = doc.data();
                    const participants = data.participants || [];
                    const closedFinish = data.closedFinish || {};
                    const allClosed = participants.every(p => closedFinish[p.id] === true);
                    if (allClosed) {
                        await firebase.firestore()
                            .collection('trainingSessions')
                            .doc(currentSessionId)
                            .delete();
                        console.log('🗑️ Сессия удалена (все закрыли финиш)');
                    } else {
                        console.log('👀 Ожидаем закрытия финиша другими участниками');
                    }
                }
            }
        }

 // 5. Сбрасываем все глобальные переменные
    console.log('🔄 [coopFinishDoneBtn] Сбрасываем все флаги');
    sessionExercises = [];
    sessionCompleted = new Set();
    sessionCompletedSets = {}; // ★★★ СБРАСЫВАЕМ ★★★
    sessionSeconds = 0;
    sessionWorkoutTitle = '';
    sessionCategory = '';
    sessionWorkoutIcon = null;
    currentSessionId = null;
    isHost = false;
    sessionData = null;
    coopExercises = [];
    coopStarted = false;
    finishPageShown = false;
    console.log('✅ [coopFinishDoneBtn] Все флаги сброшены');

        // 6. Отключаем слушатель, если есть
        if (sessionListener) {
            console.log('🔄 [coopFinishDoneBtn] Отключаем слушатель');
            sessionListener();
            sessionListener = null;
            console.log('✅ [coopFinishDoneBtn] Слушатель отключен');
        }

        // 7. Переход на страницу тренировок
        console.log('📍 [coopFinishDoneBtn] Переход на workouts');
        window.navigateTo('workouts');
        document.getElementById('bottomNav').style.display = 'block';
        console.log('✅ [coopFinishDoneBtn] navigateTo выполнен, меню показано');

        // ★★★ УВЕЛИЧИВАЕМ СЧЁТЧИК ТРЕНИРОВОК ★★★
        incrementWorkoutsCount();
        const showPremiumCoop = shouldShowPremiumOffer();

        // ★★★ ПОКАЗЫВАЕМ PREMIUM ЧЕРЕЗ НЕКОТОРОЕ ВРЕМЯ ★★★
        if (showPremiumCoop) {
            markPremiumOfferShown();
            setTimeout(() => {
                openPremiumModal();
            }, 800);
        }

    } catch (error) {
        console.error('❌ [coopFinishDoneBtn] ОШИБКА:', error);
        console.error('❌ [coopFinishDoneBtn] stack:', error.stack);
        showToast('❌ Ошибка сохранения тренировки');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Закончить';
        console.log('✅ [coopFinishDoneBtn] Кнопка разблокирована');
    }
    console.log('✅ [coopFinishDoneBtn] ЗАВЕРШЕНА');
});

// Создаём глобальные переменные для совместимости со старым кодом
let activeStatsTab = TabManager.state.stats;
let activeWorkoutsTab = TabManager.state.workouts;
let activeProfileTab = TabManager.state.profile;

// Обёртки для совместимости
function applyStatsTab(tab) { TabManager.stats(tab); activeStatsTab = tab; }
function applyWorkoutsTab(tab) { TabManager.workouts(tab); activeWorkoutsTab = tab; }
function switchProfileTab(tab) {
    TabManager.profile(tab);
    activeProfileTab = tab;
    
    // Обновляем UI
    const profileTabs = document.querySelectorAll('.profile-tab-btn');
    profileTabs.forEach(btn => {
        btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
    });
    const contents = document.querySelectorAll('.profile-tab-content');
    contents.forEach(content => {
        content.classList.remove('profile-tab-content-active');
    });
    const target = document.getElementById('profileTab-' + tab);
    if (target) {
        target.classList.add('profile-tab-content-active');
    }
    if (tab === 'friends') {
        setTimeout(() => {
            renderFriendsInProfile();
            // ★★★ ДОБАВЛЯЕМ РЕНДЕР ИСТОРИИ ★★★
            setTimeout(() => renderFriendsHistory(), 300);
        }, 100);
    }
    
    // ★★★ ОБНОВЛЯЕМ ВИДИМОСТЬ КНОПКИ РЕДАКТИРОВАНИЯ ДРУЗЕЙ ★★★
    updateFriendsEditButtonVisibility();
    
    TabManager.save();
}
function loadTabsState() { TabManager.load(); }
function saveTabsState() { TabManager.save(); }

// ===================ЗАЩИТА ОТ СПАМА КНОПОК ===================
const buttonCooldowns = new Map();

function preventDoubleClick(buttonId, cooldownMs = 2000) {
    const now = Date.now();
    const lastClick = buttonCooldowns.get(buttonId) || 0;
    if (now - lastClick < cooldownMs) {
        console.warn(`Кнопка ${buttonId} заблокирована (${cooldownMs}мс)`);
        return false;
    }
    buttonCooldowns.set(buttonId, now);
    return true;
}

function getButtonCooldown(buttonId) {
    const now = Date.now();
    const lastClick = buttonCooldowns.get(buttonId) || 0;
    return Math.max(0, 2000 - (now - lastClick));
}

// ===================ФОРМАТИРОВАНИЕ ПОВТОРЕНИЙ ===================
function formatSets(sets, short = false) {
    const num = parseInt(sets) || 0;
    if (short) return `${num} под`;
    let word = 'подходов';
    if (num === 1) word = 'подход';
    else if (num >= 2 && num <= 4) word = 'подхода';
    return `${num} ${word}`;
}

function formatReps(reps, short = false) {
    const repsStr = String(reps || '');
    if (repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд')) {
        const num = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
        if (short) return `${num} сек`;
        let word = 'секунд';
        if (num === 1) word = 'секунда';
        else if (num >= 2 && num <= 4) word = 'секунды';
        return `${num} ${word}`;
    }
    const num = parseInt(repsStr) || 0;
    if (short) return `${num} пов`;
    let word = 'повторений';
    if (num === 1) word = 'повторение';
    else if (num >= 2 && num <= 4) word = 'повторения';
    return `${num} ${word}`;
}

// ===================МАКСИМАЛЬНОЕ КОЛИЧЕСТВО УПРАЖНЕНИЙ ===================
function getMaxExercisesForLevel(level, isCustom) {
    if (isCustom) return 20;
    const maxMap = { '1 LVL': 10, '2 LVL': 15, '3 LVL': 20 };
    return maxMap[level] || 20;
}

// ===================СОХРАНЕНИЕ ДАННЫХ В localStorage ===================
const exercisesDataDefault = JSON.parse(JSON.stringify(exercisesData));
const STORAGE_KEY = 'sportapp_exercisesData';

function loadExercisesData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const category in parsed) {
                if (exercisesData[category]) {
                    for (const level in parsed[category]) {
                        exercisesData[category][level] = parsed[category][level];
                    }
                } else {
                    exercisesData[category] = parsed[category];
                }
            }
        } catch (e) {
            console.warn('Ошибка загрузки данных тренировок:', e);
        }
    }
}

function saveExercisesData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exercisesData));
}

loadExercisesData();

// ===================ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ===================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let isOfflineModalShown = false;
let isLoggingIn = false;
let isDataLoaded = false;

window._monthOffset = 0;

let editIsCustom = false;
let editWorkoutId = null;
let editExercises = [];
let editCategory = '';
let editingExerciseIndex = null;
let editLevel = '1 LVL';

window.statsEditor = null;
window.workoutsEditor = null;
window.worldStatsEditor = null;

let isEditingWorkout = false;
let isEditingProfile = false;

let dailyTasksList = [];
let dailyTasksCompleted = {};
let dailyTasksDate = '';

// Время отдыха по умолчанию (в секундах)
let sessionRestSeconds = 30;

// ===== ПЕРЕМЕННЫЕ ДЛЯ ТАЙМЕРА УПРАЖНЕНИЯ =====
let exerciseTimerInterval = null;
let exerciseTimeLeft = 0;
let exerciseTotalTime = 0;
let isExerciseTimerRunning = false;
let exerciseCurrentSet = 0;
let exerciseTotalSets = 0;
let isTimedExercise = false;
// Хранит количество выполненных подходов для каждого упражнения
let sessionCompletedSets = {};

let taskSessionData = null;
let taskSessionSeconds = 0;
let taskTimerInterval = null;
let taskExerciseTimerInterval = null;

// ===================СИСТЕМА УВЕДОМЛЕНИЙ ===================
const NOTIFICATIONS_KEY = 'notificationsSeen';
const LAST_VISIT_KEY = 'lastVisitDate';
const LAST_WORLD_RANK_KEY = 'lastWorldRank';
const LAST_FRIENDS_RANK_KEY = 'lastFriendsRank';

let notificationQueue = [];
let isNotificationShowing = false;
const shownThisSession = new Set();

const notificationContainer = document.getElementById('notificationContainer');
const notificationCard = document.getElementById('notificationCard');
const notificationIcon = document.getElementById('notificationIcon');
const notificationText = document.getElementById('notificationText');
const notificationOkBtn = document.getElementById('notificationOkBtn');

notificationContainer.style.display = 'block';

function showNotification(icon, text, actionCallback, autoClose = true, okAction = null) {
    // ★★★ ЗВУК SMS ДЛЯ ЛЮБОГО УВЕДОМЛЕНИЯ ★★★
    soundSms.currentTime = 0;
    soundSms.play().catch(() => {});
    
    const isInvite = text.includes('приглашает') || text.includes('пригласил');
    const isFriendRequest = text.includes('заявка в друзья');
    const isFriendAccepted = text.includes('новый друг');
    
    // ★★★ ЕСЛИ ЭТО УВЕДОМЛЕНИЕ ОТ ДРУГОГО ПОЛЬЗОВАТЕЛЯ — ПОКАЗЫВАЕМ ВСЕГДА ★★★
    if (isInvite || isFriendRequest || isFriendAccepted) {
        const uniqueId = 'user_action_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
        notificationQueue.push({ 
            icon, 
            text, 
            actionCallback, 
            id: uniqueId, 
            isInvite: true,
            isFriendRequest: isFriendRequest,
            isFriendAccepted: isFriendAccepted,
            autoClose: false,
            okAction: okAction,
            forceShow: true  // ★★★ ФЛАГ ДЛЯ ПРИНУДИТЕЛЬНОГО ПОКАЗА ★★★
        });
        if (!isNotificationShowing) {
            processNotificationQueue();
        }
        return;
    }
    
    // ★★★ ОБЫЧНЫЕ УВЕДОМЛЕНИЯ (СИСТЕМНЫЕ) — ПРОВЕРЯЕМ НА ПОВТОР ★★★
    const notificationId = text + icon;
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    if (seen.includes(notificationId)) {
        console.log('Уведомление уже показано:', text);
        return;
    }
    
    notificationQueue.push({ 
        icon, 
        text, 
        actionCallback, 
        id: notificationId,
        autoClose: autoClose,
        okAction: okAction,
        forceShow: false
    });
    if (!isNotificationShowing) {
        processNotificationQueue();
    }
}

function processNotificationQueue() {
    console.log('🔵 processNotificationQueue вызвана');
    console.log('📊 Очередь:', notificationQueue.length);
    console.log('📊 isNotificationShowing:', isNotificationShowing);
    
    if (notificationQueue.length === 0 || isNotificationShowing) {
        console.log('⏭️ Очередь пуста или уведомление уже показывается');
        return;
    }
    
    isNotificationShowing = true;
    const notification = notificationQueue.shift();
    console.log('📄 Уведомление:', notification);
    
    notificationIcon.textContent = notification.icon;
    notificationText.textContent = notification.text;
    
    const okBtn = document.getElementById('notificationOkBtn');
    console.log('🔍 Кнопка notificationOkBtn найдена?', okBtn ? 'Да' : 'Нет');
    
    if (notification.actionCallback) {
        console.log('🔵 Есть actionCallback, ставим кнопку "Принять"');
        okBtn.textContent = 'Принять';
        okBtn.onclick = function(e) {
            console.log('🔵 КНОПКА "ПРИНЯТЬ" НАЖАТА!');
            if (notification.actionCallback) {
                console.log('🔵 Вызываем actionCallback');
                try {
                    notification.actionCallback();
                    console.log('✅ actionCallback выполнен');
                } catch (error) {
                    console.error('❌ Ошибка в actionCallback:', error);
                }
            }
            hideNotification();
            
            if (!notification.forceShow && !notification.isInvite && notification.id) {
                markNotificationSeen(notification.id);
            }
        };
        
        // ★★★ АВТО-ЗАКРЫТИЕ ДЛЯ "ПРИНЯТЬ" — 10 СЕКУНД ★★★
        if (notification.autoClose !== false) {
            console.log('⏰ Уведомление с "Принять" закроется через 10 секунд');
            setTimeout(() => {
                if (isNotificationShowing) {
                    console.log('⏰ Авто-закрытие уведомления с "Принять"');
                    hideNotification();
                    
                    if (!notification.forceShow && !notification.isInvite && notification.id) {
                        markNotificationSeen(notification.id);
                    }
                }
            }, 10000);  // ← 10 СЕКУНД
        }
        
    } else {
        console.log('🔵 Нет actionCallback, ставим кнопку "ОК"');
        okBtn.textContent = 'ОК';
        okBtn.onclick = function() {
            console.log('🔵 Кнопка "ОК" нажата');
            
            if (notification.okAction) {
                try {
                    notification.okAction();
                    console.log('✅ okAction выполнен');
                } catch (error) {
                    console.error('❌ Ошибка в okAction:', error);
                }
            }
            
            hideNotification();
            
            if (notification.isFriendRequest && notification.requestId) {
                const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
                if (!shownRequests.includes(notification.requestId)) {
                    shownRequests.push(notification.requestId);
                    localStorage.setItem('shownFriendRequests', JSON.stringify(shownRequests));
                }
                shownThisSession.delete(notification.requestId);
            }
            
            if (!notification.forceShow && !notification.isInvite && notification.id) {
                markNotificationSeen(notification.id);
            }
        };
    }
    
    notificationCard.classList.remove('show');
    notificationCard.style.transform = 'translateY(-120px)';
    notificationCard.style.opacity = '0';
    
    setTimeout(() => {
        notificationCard.classList.add('show');
        notificationCard.style.transform = '';
        notificationCard.style.opacity = '';
        console.log('✅ Уведомление показано');
        
        // ★★★ АВТО-ЗАКРЫТИЕ ДЛЯ "ОК" — 5 СЕКУНД ★★★
        if (!notification.actionCallback && notification.autoClose !== false) {
            console.log('⏰ Уведомление закроется через 5 секунд');
            setTimeout(() => {
                if (isNotificationShowing) {
                    console.log('⏰ Авто-закрытие уведомления');
                    hideNotification();
                    
                    if (!notification.forceShow && !notification.isInvite && notification.id) {
                        markNotificationSeen(notification.id);
                    }
                }
            }, 5000);  // ← 5 СЕКУНД
        }
    }, 100);
}

function hideNotification() {
    console.log('🔵 hideNotification вызвана');
    notificationCard.classList.remove('show');
    isNotificationShowing = false;
    notificationOkBtn.onclick = null;
    
    setTimeout(() => {
        if (notificationQueue.length > 0) {
            console.log('🔄 Показываем следующее уведомление');
            processNotificationQueue();
        }
    }, 400);
}

function showFriendRequestNotification(icon, text, requestId) {
    const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
    if (shownRequests.includes(requestId) || shownThisSession.has(requestId)) {
        console.log('⚠️ Уведомление для заявки уже было показано:', requestId);
        return;
    }
    
    shownThisSession.add(requestId);
    
    notificationQueue.push({ 
        icon, 
        text, 
        actionCallback: null,
        okAction: function() {
            TabManager.profile('friends');
            window.navigateTo('profile');
            setTimeout(() => renderFriendsInProfile(), 300);
        },
        id: null, 
        isFriendRequest: true,
        requestId: requestId,
        autoClose: true
    });
    
    if (!isNotificationShowing) {
        processNotificationQueue();
    }
}

function markNotificationSeen(id) {
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    if (!seen.includes(id)) {
        seen.push(id);
        localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(seen));
    }
}

function isNotificationSeen(id) {
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    return seen.includes(id);
}

function clearSeenNotifications() {
    localStorage.removeItem(NOTIFICATIONS_KEY);
    localStorage.removeItem('shownFriendRequests');
    console.log('✅ История уведомлений очищена');
}

// ===================ДЕФОЛТНЫЕ ЛЕЙАУТЫ ===================
function getDefaultStatsLayout() {
    return {
        statsSummary: ['minutes', 'workouts', 'exercises'],
        statsBlocksContainer: ['muscles', 'categories', 'calendar', 'weekly-load', 'history', 'world-leaderboard', 'friends-leaderboard'],
        exerciseMuscleStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы'],
        categoriesStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'],
        globalStatsContainer: ['minutes', 'workouts', 'exercises'],  // ★ ДОБАВИЛИ
        worldStatsBlocksContainer: ['community-goal', 'community-achievements', 'world-leaderboard', 'friends-leaderboard']
    };
}

function getDefaultWorkoutsLayout() {
    return {
        workoutsBlocksContainer: ['strength', 'fitness', 'premium'],
catalogGridStrength: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Всё тело'],
catalogGridFitness: ['Зарядка', 'Кардио', 'Пилатес'],
catalogGridPremium: ['Кроссфит', 'Мужская сила', 'Женское счастье', 'ГТО', 'Растяжка позвоночника'],
        myWorkoutsList: []
    };
}

function saveStatsLayout(layout) {
    localStorage.setItem('statsLayout', JSON.stringify(layout));
}

function saveWorkoutsLayout(layout) {
    localStorage.setItem('workoutsLayout', JSON.stringify(layout));
}

function applySavedWorkoutsOrder() {
    const layout = JSON.parse(localStorage.getItem('workoutsLayout'));
    if (!layout) return;

    const blocksContainer = document.getElementById('workoutsBlocksContainer');
    if (blocksContainer && layout.workoutsBlocksContainer) {
        const blockMap = {};
        blocksContainer.querySelectorAll('.section-block').forEach(b => {
            const id = b.dataset.blockId;
            if (id) blockMap[id] = b;
        });
        layout.workoutsBlocksContainer.forEach(id => {
            if (blockMap[id]) blocksContainer.appendChild(blockMap[id]);
        });
    }

    const containers = [
        { id: 'catalogGridStrength', dataAttr: 'category' },
        { id: 'catalogGridFitness', dataAttr: 'category' },
        { id: 'catalogGridPremium', dataAttr: 'category' },
        { id: 'myWorkoutsList', dataAttr: 'workoutId' }
    ];
    containers.forEach(({ id, dataAttr }) => {
        const list = document.getElementById(id);
        if (!list) return;
        const items = layout[id] || [];
        if (items.length === 0) return;
        const childMap = {};
        list.querySelectorAll('.item-card').forEach(el => {
            const key = el.dataset[dataAttr];
            if (key) childMap[key] = el;
        });
        items.forEach(key => {
            if (childMap[key]) list.appendChild(childMap[key]);
        });
    });
}

function applySavedStatsOrder() {
    const layout = JSON.parse(localStorage.getItem('statsLayout'));
    if (!layout) return;

    const summary = document.getElementById('statsSummary');
    if (summary && layout.statsSummary) {
        const childMap = {};
        summary.querySelectorAll('.stat-card').forEach(el => {
            const id = el.dataset.statId;
            if (id) childMap[id] = el;
        });
        layout.statsSummary.forEach(id => {
            if (childMap[id]) summary.appendChild(childMap[id]);
        });
    }

    const blocksContainer = document.getElementById('statsBlocksContainer');
    if (blocksContainer && layout.statsBlocksContainer) {
        const blockMap = {};
        blocksContainer.querySelectorAll('.section-block').forEach(b => {
            const id = b.dataset.blockId;
            if (id) blockMap[id] = b;
        });
        layout.statsBlocksContainer.forEach(id => {
            if (blockMap[id]) blocksContainer.appendChild(blockMap[id]);
        });
    }

    const lists = [
        { id: 'exerciseMuscleStats', dataAttr: 'muscleName' },
        { id: 'categoriesStats', dataAttr: 'categoryName' }
    ];
    lists.forEach(({ id, dataAttr }) => {
        const list = document.getElementById(id);
        if (!list) return;
        const items = layout[id] || [];
        if (items.length === 0) return;
        const childMap = {};
        list.querySelectorAll('.stat-item').forEach(el => {
            const name = el.querySelector('.stat-name')?.textContent;
            if (name) childMap[name] = el;
        });
        items.forEach(name => {
            if (childMap[name]) list.appendChild(childMap[name]);
        });
    });
}

function applySavedWorldStatsOrder() {
    const layout = JSON.parse(localStorage.getItem('worldStatsLayout'));
    if (!layout) return;

    const container = document.getElementById('worldStatsBlocksContainer');
    if (!container) return;

    const items = layout['worldStatsBlocksContainer'] || [];
    if (items.length === 0) return;

    const childMap = {};
    container.querySelectorAll('.section-block').forEach(el => {
        const id = el.dataset.blockId;
        if (id) childMap[id] = el;
    });

    items.forEach(id => {
        if (childMap[id]) {
            container.appendChild(childMap[id]);
        }
    });
}

// ===================ОФЛАЙН-ОЧЕРЕДЬ ===================
const PENDING_KEY = 'pendingWorkouts';

function getPendingWorkouts() {
    return JSON.parse(localStorage.getItem(PENDING_KEY)) || [];
}

function savePendingWorkouts(workouts) {
    localStorage.setItem(PENDING_KEY, JSON.stringify(workouts));
}

function addPendingWorkout(workoutData) {
    const pending = getPendingWorkouts();
    workoutData._localId = Date.now() + '_' + Math.random().toString(36).slice(2, 6);
    if (!workoutData.category) workoutData.category = 'Без категории';
workoutData.icon = workoutData.icon || null;
    pending.push(workoutData);
    savePendingWorkouts(pending);
}

function removePendingWorkout(localId) {
    let pending = getPendingWorkouts();
    pending = pending.filter(w => w._localId !== localId);
    savePendingWorkouts(pending);
}

async function syncPendingWorkouts() {
    const pending = getPendingWorkouts();
    if (pending.length === 0) return;
    const user = await getFirebaseUser();
    if (!user) {
        console.warn('Пользователь не авторизован, синхронизация отложена');
        return;
    }
    let syncedIds = [];
    let failedIds = [];
    for (const workout of pending) {
        try {
const result = await saveWorkoutToFirestore(user.uid, {
    title: workout.title,
    date: workout.date,
    durationSeconds: workout.durationSeconds,
    exercises: workout.exercises,
    xpEarned: workout.xpEarned,
    category: workout.category || 'Без категории',
    icon: workout.icon || null
});
            if (result.success) {
                const profileResult = await getUserProfile(user.uid);
                if (profileResult.success) {
                    const currentXp = profileResult.data.totalXp || 0;
                    await updateUserProfile(user.uid, { totalXp: currentXp + workout.xpEarned });
                }
                syncedIds.push(workout._localId);
            } else {
                failedIds.push(workout._localId);
                console.warn('Ошибка синхронизации тренировки:', result.error);
            }
        } catch (e) {
            failedIds.push(workout._localId);
            console.warn('Ошибка синхронизации, повторим позже:', e);
        }
    }
    if (syncedIds.length > 0) {
        let pendingAfter = getPendingWorkouts();
        pendingAfter = pendingAfter.filter(w => !syncedIds.includes(w._localId));
        savePendingWorkouts(pendingAfter);
        showToast(`✅ Синхронизировано ${syncedIds.length} тренировок`);
    }
    if (failedIds.length > 0) {
        console.log(`${failedIds.length} тренировок ожидают синхронизации`);
    }
}

// ===================УРОВНИ (15 УРОВНЕЙ) ===================
const levels = [
    { id: 1, name: 'НОВИЧОК', minXp: 0, maxXp: 99 },
    { id: 2, name: 'ЛЮБИТЕЛЬ', minXp: 100, maxXp: 249 },
    { id: 3, name: 'УЧЕНИК', minXp: 250, maxXp: 449 },
    { id: 4, name: 'ПРОДВИНУТЫЙ', minXp: 450, maxXp: 699 },
    { id: 5, name: 'ЭКСПЕРТ', minXp: 700, maxXp: 999 },
    { id: 6, name: 'ПРОФЕССИОНАЛ', minXp: 1000, maxXp: 1499 },
    { id: 7, name: 'МАСТЕР', minXp: 1500, maxXp: 1999 },
    { id: 8, name: 'ГРАНДМАСТЕР', minXp: 2000, maxXp: 2599 },
    { id: 9, name: 'ЧЕМПИОН', minXp: 2600, maxXp: 3299 },
    { id: 10, name: 'ЮНОШЕСКИЙ РАЗРЯД', minXp: 3300, maxXp: 4199 },
    { id: 11, name: 'СПОРТИВНЫЙ РАЗРЯД', minXp: 4200, maxXp: 5299 },
    { id: 12, name: 'КАНДИДАТ В МАСТЕРЫ СПОРТА', minXp: 5300, maxXp: 6599 },
    { id: 13, name: 'МАСТЕР СПОРТА', minXp: 6600, maxXp: 8199 },
    { id: 14, name: 'МЕЖДУНАРОДНЫЙ МАСТЕР СПОРТА', minXp: 8200, maxXp: 9999 },
    { id: 15, name: 'ЗАСЛУЖЕННЫЙ МАСТЕР СПОРТА', minXp: 10000, maxXp: Infinity }
];

function getCurrentLevel(xp) {
    let currentLevel = levels[0];
    for (let i = levels.length - 1; i >= 0; i--) {
        if (xp >= levels[i].minXp) {
            currentLevel = levels[i];
            break;
        }
    }
    return currentLevel;
}

function getNextLevel(xp) {
    for (let i = 0; i < levels.length; i++) {
        if (xp < levels[i].minXp) {
            return levels[i];
        }
    }
    return null;
}

function getXpProgress(xp) {
    const current = getCurrentLevel(xp);
    const next = getNextLevel(xp);
    if (!next) return 100;
    const total = next.minXp - current.minXp;
    const earned = xp - current.minXp;
    return Math.min(100, Math.round((earned / total) * 100));
}

// =================== НОВАЯ СИСТЕМА РАСЧЁТА XP ===================
// =================== ИСПРАВЛЕННАЯ СИСТЕМА РАСЧЁТА XP ===================

function isTimeBased(reps) {
    const repsStr = String(reps || '');
    return repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
}

function hasWeight(exercise) {
    if (!exercise) return false;
    const weight = exercise.weight;
    return weight !== undefined && weight !== null && !isNaN(parseFloat(weight)) && parseFloat(weight) > 0;
}

function getWeightValue(exercise) {
    if (!hasWeight(exercise)) return 0;
    return parseFloat(exercise.weight) || 0;
}

function getRepsValue(exercise) {
    const repsStr = String(exercise?.reps || '');
    return parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
}

function getSetsValue(exercise) {
    return parseInt(exercise?.sets) || 0;
}

function calculateExerciseXP(exercise, completedSets) {
    const sets = getSetsValue(exercise);
    const repsStr = String(exercise?.reps || '');
    const isTime = isTimeBased(repsStr);
    const value = getRepsValue(exercise);
    const weight = getWeightValue(exercise);
    
    // ★★★ ЕСЛИ НЕТ ВЫПОЛНЕННЫХ ПОДХОДОВ — XP = 0 ★★★
    if (completedSets === undefined || completedSets === null || completedSets === 0) {
        return 0;
    }
    
    // ★★★ ИСПОЛЬЗУЕМ РЕАЛЬНОЕ КОЛИЧЕСТВО ВЫПОЛНЕННЫХ ПОДХОДОВ ★★★
    const actualSets = Math.min(completedSets, sets);
    
    if (actualSets === 0 || value === 0) return 0;
    
    let xp = 0;
    if (isTime) {
        // ★★★ ФОРМУЛА ДЛЯ ВРЕМЕННЫХ УПРАЖНЕНИЙ ★★★
        // XP = (подходы × секунды) / 20
        xp = (actualSets * value) / 20;
        
        // ★★★ ДОБАВЛЯЕМ БОНУС ЗА ВЕС ★★★
        if (weight > 0) {
            xp = xp * (1 + weight / 20);
        }
    } else {
        // Для упражнений с повторениями
        xp = (actualSets * value) / 10;
        if (weight > 0) {
            xp = xp * (1 + weight / 20);
        }
    }
    
    // Округление до 0.1
    return isNaN(xp) ? 0 : Math.round(xp * 10) / 10;
}


function calculateWorkoutXp(exercises, completedSetsMap) {
    if (!exercises || !Array.isArray(exercises) || exercises.length === 0) return 0;
    
    let total = 0;
    exercises.forEach((ex, index) => {
        // ★★★ ПОЛУЧАЕМ КОЛИЧЕСТВО ВЫПОЛНЕННЫХ ПОДХОДОВ ★★★
        let completedSets = 0;
        if (completedSetsMap && completedSetsMap[index] !== undefined && completedSetsMap[index] > 0) {
            completedSets = completedSetsMap[index];
        } else {
            // Если данных нет — значит упражнение НЕ выполнено
            completedSets = 0;
        }
        
        // ★★★ РАССЧИТЫВАЕМ XP ЗА УПРАЖНЕНИЕ ★★★
        total += calculateExerciseXP(ex, completedSets);
    });
    
    return isNaN(total) ? 0 : Math.round(total * 10) / 10;
}

function resolveWorkoutCategory(category, parentCategory, isPremium) {
    if (!parentCategory) {
        return 'Личные';
    }

// ДОБАВИТЬ:
if (parentCategory === 'Особые') {
    if (category === 'Мужская сила' || category === 'Женское счастье') {
        return 'Ягодицы';
    }
    if (category === 'Кроссфит') {
        return 'Всё тело';
    }
    if (category === 'Растяжка позвоночника') {
        return 'Гибкость';  // ← ДОБАВИТЬ
    }
    if (category === 'ГТО') {
        return 'Всё тело';  // ← ДОБАВИТЬ
    }
    return category;
}

if (parentCategory === 'Фитнес') {
    if (category === 'Кардио') return 'Кардио';
    if (category === 'Растяжка') return 'Гибкость';
    if (category === 'Растяжка позвоночника') return 'Гибкость'; // ← ДОБАВИТЬ
    if (category === 'Пилатес') return 'Всё тело';
    if (category === 'Зарядка') return 'Зарядка';
    return category;
}

if (parentCategory === 'PREMIUM') {
    return category;
}

    if (parentCategory === 'Силовые') {
        if (category === 'Всё тело') return 'Всё тело';
        return category;
    }

    return category;
}

// ===================FIREBASE ===================
function getFirebaseUser() {
    return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        });
    });
}

// ===================ПРОФИЛЬ ===================
async function saveUserProfile(userId, data) {
    try {
        await firebase.firestore().collection('users').doc(userId).set(data, { merge: true });
        return { success: true };
    } catch (error) {
        console.error('Ошибка сохранения профиля:', error);
        showToast('❌ Не удалось сохранить профиль. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

async function getUserProfile(userId) {
    try {
        const doc = await firebase.firestore().collection('users').doc(userId).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        } else {
            return { success: false, error: 'Профиль не найден' };
        }
    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        showToast('❌ Не удалось загрузить профиль. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function updateUserProfile(userId, updates) {
    try {
        await firebase.firestore().collection('users').doc(userId).update(updates);
        return { success: true };
    } catch (error) {
        console.error('Ошибка обновления профиля:', error);
        showToast('❌ Не удалось обновить профиль. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

async function syncUserProfile() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Пользователь не авторизован' };
    const profileResult = await getUserProfile(user.uid);
    if (!profileResult.success) {
        const newProfile = {
            displayName: user.displayName || user.email?.split('@')[0] || 'Пользователь',
            avatar: 'bodybuilding',
            level: 1,
            totalXp: 0,
            createdAt: new Date().toISOString(), // ← ЗАПЯТАЯ!
            tutorialCompleted: false
        };
        await saveUserProfile(user.uid, newProfile);
        return { success: true, data: newProfile, isNew: true };
    }
    return { success: true, data: profileResult.data, isNew: false };
}

// ===================ТРЕНИРОВКИ В FIRESTORE ===================
async function saveWorkoutToFirestore(userId, workoutData) {
    try {
        const docRef = await firebase.firestore().collection('workouts').add({
            userId: userId,
            title: workoutData.title,
            date: workoutData.date || new Date().toISOString(),
            durationSeconds: workoutData.durationSeconds || 0,
            exercises: workoutData.exercises || [],
            xpEarned: workoutData.xpEarned || 0,
            category: workoutData.category || 'Без категории',
            icon: workoutData.icon || null,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Ошибка сохранения тренировки:', error);
        showToast('❌ Не удалось сохранить тренировку. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function getUserWorkoutsFromFirestore(userId) {
    try {
        const snapshot = await firebase.firestore()
            .collection('workouts')
            .where('userId', '==', userId)
            .orderBy('date', 'desc')
            .get();
        
        const workouts = [];
        snapshot.forEach(doc => {
            workouts.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, data: workouts };
    } catch (error) {
        console.error('Ошибка получения тренировок:', error);
        
        // ★★★ ЕСЛИ ОШИБКА ИЗ-ЗА ОТСУТСТВИЯ ИНДЕКСА ★★★
        if (error.code === 'failed-precondition' && error.message.includes('index')) {
            console.warn('⚠️ Требуется создать индекс в Firebase Console');
            showToast('⚠️ Требуется создать индекс для сортировки тренировок');
            
            // ★★★ ПЫТАЕМСЯ ПОЛУЧИТЬ БЕЗ СОРТИРОВКИ ★★★
            try {
                const fallbackSnapshot = await firebase.firestore()
                    .collection('workouts')
                    .where('userId', '==', userId)
                    .get();
                
                const workouts = [];
                fallbackSnapshot.forEach(doc => {
                    workouts.push({ id: doc.id, ...doc.data() });
                });
                // Сортируем вручную
                workouts.sort((a, b) => new Date(b.date) - new Date(a.date));
                return { success: true, data: workouts };
            } catch (fallbackError) {
                console.error('❌ Ошибка fallback запроса:', fallbackError);
                return { success: false, error: fallbackError.message };
            }
        }
        
        showToast('❌ Не удалось загрузить тренировки. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function deleteWorkoutFromFirestore(workoutId) {
    try {
        await firebase.firestore().collection('workouts').doc(workoutId).delete();
        return { success: true };
    } catch (error) {
        console.error('Ошибка удаления тренировки:', error);
        showToast('❌ Не удалось удалить тренировку. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

// ===================УПРАВЛЕНИЕ ЦВЕТОМ ===================
let tempColor = null;

function selectColor(color) {
    // ★★★ СОХРАНЯЕМ ТОЛЬКО В ВРЕМЕННУЮ ПЕРЕМЕННУЮ ★★★
    tempColor = color;
    
    // ★★★ ПРИМЕНЯЕМ ВИЗУАЛЬНО (НО НЕ СОХРАНЯЕМ) ★★★
    document.body.style.removeProperty('--accent');
    document.body.style.removeProperty('--accent-dark');
    document.body.style.removeProperty('--accent-light');
    
    const isDarkMode = document.body.classList.contains('theme-dark-mode') ||
                      localStorage.getItem('appThemeMode') === 'dark' ||
                      (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.body.className = 'theme-' + color;
    if (isDarkMode) {
        document.body.classList.add('theme-dark-mode');
    }
    
    // ★★★ ОБНОВЛЯЕМ АКТИВНУЮ КНОПКУ ★★★
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('color-btn-active', btn.dataset.color === color);
    });
    
    // ★★★ ОБНОВЛЯЕМ СТАТУС (НО НЕ СОХРАНЯЕМ) ★★★
    updateColorStatus(color);
}

function applySelectedColor(color) {
    // ★★★ УБИРАЕМ ВСЕ КАСТОМНЫЕ CSS-ПЕРЕМЕННЫЕ ★★★
    document.body.style.removeProperty('--accent');
    document.body.style.removeProperty('--accent-dark');
    document.body.style.removeProperty('--accent-light');
    
    // ★★★ УДАЛЯЕМ ФЛАГ КАСТОМНОГО ЦВЕТА ★★★
    localStorage.removeItem('themeColorCustom');
    
    // ★★★ ПРИМЕНЯЕМ СТАНДАРТНЫЙ ЦВЕТ ЧЕРЕЗ КЛАСС ★★★
    const isDarkMode = document.body.classList.contains('theme-dark-mode') ||
                      localStorage.getItem('appThemeMode') === 'dark' ||
                      (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.body.className = 'theme-' + color;
    if (isDarkMode) {
        document.body.classList.add('theme-dark-mode');
    }
    
    // ★★★ СОХРАНЯЕМ В localStorage ★★★
    localStorage.setItem('themeColor', color);
    
    updateColorButtons(color);
    updateColorStatus(color);
}

function applyColor() {
    if (!tempColor) {
        showToast('⚠️ Выберите цвет');
        return;
    }
    
    const currentColor = localStorage.getItem('themeColor') || 'red';
    const isCustom = localStorage.getItem('themeColorCustom') === 'true';
    
    // ★★★ ПРОВЕРЯЕМ, ИЗМЕНИЛСЯ ЛИ ЦВЕТ ★★★
    const colorChanged = tempColor !== currentColor;
    
    if (colorChanged) {
        // ★★★ ПРИМЕНЯЕМ ЦВЕТ ★★★
        localStorage.setItem('themeColor', tempColor);
        localStorage.removeItem('themeColorCustom');
        
        // ★★★ ПРИМЕНЯЕМ ВИЗУАЛЬНО ★★★
        document.body.style.removeProperty('--accent');
        document.body.style.removeProperty('--accent-dark');
        document.body.style.removeProperty('--accent-light');
        
        const isDarkMode = document.body.classList.contains('theme-dark-mode') ||
                          localStorage.getItem('appThemeMode') === 'dark' ||
                          (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.body.className = 'theme-' + tempColor;
        if (isDarkMode) {
            document.body.classList.add('theme-dark-mode');
        }
        
        // ★★★ ПОКАЗЫВАЕМ ТОСТ ★★★
        const colorNames = {
            'red': 'Красный', 'orange': 'Оранжевый', 'yellow': 'Желтый',
            'green': 'Зеленый', 'darkgreen': 'Темно-зеленый', 'blue': 'Голубой',
            'darkblue': 'Синий', 'purple': 'Фиолетовый', 'pink': 'Розовый', 'gray': 'Серый'
        };
        showToast(`✅ Акцентный цвет изменён на ${colorNames[tempColor] || tempColor}`);
        
        // ★★★ ЗАДАНИЕ 5: ОФОРМЛЕНИЕ ★★★
        if (!tasks[5]) {
            tasks[5] = true;
            saveTasks();
            updateTasksUI();
            showToast('✅ Задание "Оформление" выполнено!');
            addTaskXp();
        }
    } else {
        // ★★★ ЦВЕТ НЕ ИЗМЕНИЛСЯ ★★★
    }
    
    // ★★★ ОБНОВЛЯЕМ СТАТУС ★★★
    updateColorStatus(tempColor);
    
    closeModal('colorModal');
}

function updateColorButtons(color) {
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('color-btn-active', btn.dataset.color === color);
    });
}

function updateColorStatus(color) {
    const colorNames = {
        'red': 'Красный', 'orange': 'Оранжевый', 'yellow': 'Желтый',
        'green': 'Зеленый', 'darkgreen': 'Темно-зеленый', 'blue': 'Голубой',
        'darkblue': 'Синий', 'purple': 'Фиолетовый', 'pink': 'Розовый', 'gray': 'Серый'
    };
    const statusEl = document.getElementById('colorStatus');
    if (statusEl) {
        statusEl.textContent = colorNames[color] || 'Красный';
    }
}

// ★★★ ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ★★★
const savedColor = localStorage.getItem('themeColor') || 'red';
const isCustom = localStorage.getItem('themeColorCustom') === 'true';

if (isCustom && savedColor && savedColor.startsWith('#')) {
    // Кастомный цвет — применяем через CSS-переменные
    applyColorToTheme(savedColor);
} else {
    // Стандартный цвет — применяем через класс
    const isDarkMode = localStorage.getItem('appThemeMode') === 'dark' || 
                      (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.body.className = 'theme-' + savedColor;
    if (isDarkMode) {
        document.body.classList.add('theme-dark-mode');
    }
}

// ★★★ ОБНОВЛЯЕМ СТАТУС ★★★
updateColorStatus(savedColor);

// ★★★ ДОПОЛНИТЕЛЬНО: ОБНОВЛЯЕМ ПРИ ЗАГРУЗКЕ ★★★
document.addEventListener('DOMContentLoaded', function() {
    const savedColor2 = localStorage.getItem('themeColor') || 'red';
    const isCustom2 = localStorage.getItem('themeColorCustom') === 'true';
    
    if (!isCustom2) {
        // Если это НЕ кастомный цвет, убеждаемся, что классы правильные
        const isDarkMode = document.body.classList.contains('theme-dark-mode') ||
                          localStorage.getItem('appThemeMode') === 'dark' ||
                          (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.body.className = 'theme-' + savedColor2;
        if (isDarkMode) {
            document.body.classList.add('theme-dark-mode');
        }
    }
});

// ===================НАВИГАЦИЯ ===================
window.navigateTo = function(page, params) {
    // Проверки на блокировки
    if (isEditingWorkout) {
        const allowedPages = ['exercise-list', 'workout-edit', 'workout-detail'];
        if (allowedPages.includes(page)) {
        } else {
            showToast('⚠️ Сначала завершите редактирование тренировки');
            return;
        }
    }
    if (isEditingProfile) {
        showToast('⚠️ Сначала завершите редактирование профиля');
        return;
    }
    const modalIds = ['exerciseModal', 'createExerciseModal', 'quickEditModal'];
    for (const id of modalIds) {
        const modal = document.getElementById(id);
        if (modal && modal.style.display === 'flex') {
            showToast('⚠️ Сначала закройте модальное окно');
            return;
        }
    }
    if (window.statsEditor && window.statsEditor.isEditing) {
        showToast('⚠️ Сначала завершите редактирование страницы статистики');
        return;
    }
    if (window.workoutsEditor && window.workoutsEditor.isEditing) {
        showToast('⚠️ Сначала завершите редактирование страницы тренировок');
        return;
    }

    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = '';
    });

    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('page-active');
    }

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('nav-item-active', btn.dataset.page === page);
    });

    // ===== ВЫЗОВЫ СТРАНИЦ =====
if (page === 'profile') {
    loadProfile();
    setTimeout(() => TabManager.profile(TabManager.state.profile), 300);
}
if (page === 'level-select' && params) loadLevelSelect(params.category, params);
if (page === 'workout-detail' && params) {
    loadWorkoutDetail(
        params.category,
        params.level,
        params.isCustom,
        params.id,
        params.parentCategory,
        params.isPremium,
        params.gtoGender
    );
}
if (page === 'workout-edit' && params) {
    loadEditPage(
        params.category,
        params.isCustom,
        params.id,
        params.level,
        params.exercises
    );
}
if (page === 'workouts') {
    TabManager.workouts(TabManager.state.workouts);
    renderMyWorkouts();
}
    if (page === 'exercise-list') renderExerciseListPage();
if (page === 'stats') {
    const currentTab = TabManager.state.stats || 'personal';
    TabManager.stats(currentTab);
    updateStats(currentTab); // ← ЕДИНЫЙ ВЫЗОВ
}

if (page === 'training-session' || page === 'finish' || page === 'training-waiting' || page === 'coop-finish') {
    document.getElementById('bottomNav').style.display = 'none';
} else {
    document.getElementById('bottomNav').style.display = 'block';
}
};

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
        const page = this.dataset.page;
        if (page) window.navigateTo(page);
    });
});

// ===================УНИВЕРСАЛЬНЫЕ ФУНКЦИИ ДЛЯ МОДАЛОК ===================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// ===================ГЛОБАЛЬНАЯ ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК СТАТИСТИКИ ===================
window.switchStatsTab = function(tab) {
    // ★★★ ЕСЛИ ИДЁТ ТУТОРИАЛ — НЕ ВЫПОЛНЯЕМ ЗАДАНИЕ ★★★
    if (!tutorialActive) {
        if (!tasks[2]) {
            tasks[2] = true;
            saveTasks();
            updateTasksUI();
            showToast('✅ Задание "Статистика" выполнено!');
            addTaskXp();
        }
    } else {
        console.log('⏳ Обучение активно, задание "Статистика" не выполняется');
    }
    
    // Переключаем UI
    applyStatsTab(tab);
    
    // Обновляем данные
    updateStats(tab);
};

// =================== ЕДИНАЯ ФУНКЦИЯ ОБНОВЛЕНИЯ СТАТИСТИКИ ===================
let statsUpdatePending = false;

function updateStats(tab) {
    // Если вкладка не передана — берём из TabManager
    const currentTab = tab || TabManager.state.stats || 'personal';
    
    // Защита от одновременных вызовов
    if (statsUpdatePending) {
        console.log('⏳ Обновление статистики уже выполняется, пропускаем');
        return;
    }
    
    statsUpdatePending = true;
    
    try {
if (currentTab === 'world') {
    loadGlobalStats();
    loadGlobalUsersCount();           // из прошлого шага
    loadCommunityAchievements();      // ← ★★★ ДОБАВИЛИ ★★★
    loadCommunityGoal();
    loadWorldLeaderboard();
    loadFriendsLeaderboard();
    setTimeout(() => {
        applySavedWorldStatsOrder();
        statsUpdatePending = false;
    }, 200);
} else {
            loadStats();
            loadPremiumStats
            setTimeout(() => {
                statsUpdatePending = false;
                console.log('✅ [updateStats] Личная статистика обновлена');
            }, 200);
        }
    } catch (error) {
        console.error('❌ [updateStats] Ошибка:', error);
        statsUpdatePending = false;
    }
}

// ===================КАТЕГОРИИ ТРЕНИРОВОК ===================
document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.dataset.category;
        if (!name) return;
        
        console.log('=== КЛИК ПО КАРТОЧКЕ ===');
        console.log('name:', name);
        console.log('dataset:', JSON.stringify(this.dataset));
        
        let parentCategory = null;
        let categoryData = null;
        
        for (const parent in exercisesData) {
            console.log('  проверяем parent:', parent, 'есть ли', name, ':', !!(exercisesData[parent] && exercisesData[parent][name]));
            if (exercisesData[parent] && exercisesData[parent][name]) {
                parentCategory = parent;
                categoryData = exercisesData[parent][name];
                break;
            }
        }
        
        console.log('parentCategory:', parentCategory);
        console.log('categoryData:', categoryData);
        console.log('_premium:', categoryData?._premium);
        console.log('_gender:', categoryData?._gender);
        
let isPremium = false;
if (categoryData && categoryData._premium === true) {
    isPremium = true;
}
if (parentCategory === 'Особые') {
    isPremium = true;
}

console.log('  isPremium:', isPremium);
console.log('  hasPremium():', hasPremium());

// ★★★ ПРОВЕРКА PREMIUM ДО ПРОВЕРКИ _gender ★★★
if (isPremium && !hasPremium()) {
    openModal('premiumModal');
    return;
}

if (categoryData && categoryData._gender === true) {
    window.navigateTo('gto-gender', { category: name });
    return;
}
        
        window.navigateTo('level-select', { category: name });
    });
});

// ===================СТРАНИЦА ВЫБОРА УРОВНЯ ===================
function loadLevelSelect(category, params = {}) {
    // ★★★ ЕСЛИ ЭТО ГТО И НЕ ВЫБРАН ПОЛ — ПЕРЕНАПРАВЛЯЕМ НА ВЫБОР ПОЛА ★★★
    if (category === 'ГТО' && !params.gtoGender) {
        window.navigateTo('gto-gender', { category: 'ГТО' });
        return;
    }

    let parentCategory = null;
    for (const parent in exercisesData) {
        if (exercisesData[parent] && exercisesData[parent][category]) {
            parentCategory = parent;
            break;
        }
    }
    if (parentCategory === 'Особые') {
        if (!hasPremium()) {
            openModal('premiumModal');
            window.navigateTo('workouts');
            return;
        }
    }
    const titleEl = document.getElementById('levelSelectTitle');
    if (titleEl) titleEl.textContent = 'ТРЕНИРОВКА';
let isPremium = false;
if (parentCategory && exercisesData[parentCategory] && exercisesData[parentCategory][category]) {
    isPremium = exercisesData[parentCategory][category]._premium || false;
}
    
    // ★★★ ОПРЕДЕЛЯЕМ СПИСОК УРОВНЕЙ ★★★
    let levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
    let levelDescs = ['Начинающий', 'Любитель', 'Профессионал'];
    
// ★★★ ДЛЯ ГТО — СВОИ УРОВНИ ★★★
if (category === 'ГТО' && params.gtoGender) {
    const gender = params.gtoGender;
if (exercisesData['Особые'] && exercisesData['Особые']['ГТО'] && exercisesData['Особые']['ГТО'][gender]) {
    levelsArr = Object.keys(exercisesData['Особые']['ГТО'][gender]).filter(k => !k.startsWith('_'));
    levelDescs = levelsArr.map(level => GTO_AGE_MAP[level] || 'Ступень ГТО');
}
}
    
    const CATEGORY_ICON_MAP = {
        'Руки': 'bodybuilding', 'Плечи': 'shoulder', 'Пресс': 'press',
        'Грудь': 'breast', 'Спина': 'back', 'Ноги': 'legs',
        'Всё тело': 'WholeBody', 'Кардио': 'cardio', 'Растяжка': 'stretching',
        'Зарядка': 'charging', 'Пилатес': 'Pilates', 'Кроссфит': 'crossfit',
        'Мужская сила': 'men', 'Женское счастье': 'woman',
        'Растяжка позвоночника': 'stretching', 'ГТО': 'bodybuilding'
    };
    const icon = CATEGORY_ICON_MAP[category] || null;

    const container = document.getElementById('levelsContainer');

    container.innerHTML = levelsArr.map((level, index) => {
        let exercises = [];
        let displayName = category + ' ' + level;

        let levelData = null;
if (category === 'ГТО' && params.gtoGender) {
    if (exercisesData['Особые'] && exercisesData['Особые']['ГТО'] && exercisesData['Особые']['ГТО'][params.gtoGender]) {
        levelData = exercisesData['Особые']['ГТО'][params.gtoGender][level];
    }
} else if (parentCategory && exercisesData[parentCategory] && exercisesData[parentCategory][category]) {
            levelData = exercisesData[parentCategory][category][level];
        } else if (exercisesData[category] && exercisesData[category][level]) {
            levelData = exercisesData[category][level];
        } else {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    levelData = exercisesData[parent][category][level];
                    if (levelData) break;
                }
            }
        }

        if (levelData) {
            if (Array.isArray(levelData)) {
                exercises = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercises = levelData._exercises;
                displayName = levelData._title || displayName;
            }
        }

        const count = exercises.length;
        return `
            <div class="item-card" onclick="window.navigateTo('workout-detail', {
                category: '${category}',
                level: '${level}',
                parentCategory: '${parentCategory || ''}',
                isPremium: ${isPremium},
                gtoGender: '${params.gtoGender || ''}'
            })">
                <div class="item-icon">${icon ? `<img src="images/${icon}.png">` : ''}</div>
                <div class="item-info">
                    <h3 class="item-title">${displayName}</h3>
                    <p class="item-desc">${levelDescs[index] || ''} · ${count} упражнений</p>
                </div>
                <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        `;
    }).join('');
}

// ===================СТРАНИЦА ДЕТАЛЕЙ ТРЕНИРОВКИ ===================
let currentCategory = '';
let currentLevel = '1 LVL';
let currentIsCustom = false;
let currentWorkoutId = null;

let _quickEditIndex = null;
let _quickEditExercises = null;
let _quickEditIsCustom = false;
let _quickEditCategory = '';
let _quickEditLevel = '';
let _quickEditParentCategory = '';
let _quickEditWorkoutId = null;

function loadWorkoutDetail(category, level, isCustom, id, parentCategory, isPremium, gtoGender) {
    let isPremiumWorkout = false;
    if (isPremium === true) isPremiumWorkout = true;
    if (parentCategory === 'Особые') isPremiumWorkout = true;
    if (!isPremiumWorkout) {
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category] && exercisesData[parent][category]._premium === true) {
                isPremiumWorkout = true;
                break;
            }
        }
    }
    if (isPremiumWorkout && !hasPremium()) {
        setTimeout(() => {
            openModal('premiumModal');
            window.navigateTo('workouts');
        }, 100);
        return;
    }
    currentCategory = category;
    currentLevel = level || '1 LVL';
    currentIsCustom = isCustom || false;
    currentWorkoutId = id || null;

    window._currentIsPremium = isPremiumWorkout;
    window._currentGtoGender = gtoGender || '';

    _quickEditCategory = category;
    _quickEditLevel = currentLevel;
    _quickEditIsCustom = isCustom;
    _quickEditParentCategory = parentCategory || '';
    _quickEditWorkoutId = id || null;

    let exercises = [];
    let displayTitle = '';
    let workoutIcon = null;

    if (isCustom && id) {
        const workout = getWorkoutById(id);
        if (workout) {
            exercises = workout.exercises || [];
            displayTitle = workout.title;
            currentCategory = workout.title;
            workoutIcon = workout.icon || null;
        } else {
            console.warn('⚠️ Тренировка не найдена по id:', id);
            showToast('⚠️ Тренировка не найдена');
            setTimeout(() => window.navigateTo('workouts'), 100);
            return;
        }
    } else {
        let found = false;
        let savedTitle = '';
        let levelData = null;

        // ★★★ ДЛЯ ГТО — ИЩЕМ В ПОДРАЗДЕЛЕ ПОЛА ★★★
if (category === 'ГТО' && gtoGender && exercisesData['Особые'] && exercisesData['Особые']['ГТО'] && exercisesData['Особые']['ГТО'][gtoGender]) {
    levelData = exercisesData['Особые']['ГТО'][gtoGender][currentLevel];
} else {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    levelData = exercisesData[parent][category][currentLevel];
                    if (levelData) break;
                }
            }
            if (!levelData && exercisesData[category] && exercisesData[category][currentLevel]) {
                levelData = exercisesData[category][currentLevel];
            }
        }

        if (levelData) {
            if (typeof levelData === 'object' && !Array.isArray(levelData)) {
                if (levelData._exercises) {
                    exercises = levelData._exercises;
                    found = true;
                }
                if (levelData._title) {
                    savedTitle = levelData._title;
                }
            } else if (Array.isArray(levelData) && levelData.length > 0) {
                exercises = levelData;
                found = true;
            }
        }

        if (!found) {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    const levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
                    for (const lvl of levelsArr) {
                        const data = exercisesData[parent][category][lvl];
                        if (data) {
                            if (typeof data === 'object' && !Array.isArray(data) && data._exercises) {
                                exercises = data._exercises;
                                if (data._title) savedTitle = data._title;
                            } else if (Array.isArray(data) && data.length > 0) {
                                exercises = data;
                            }
                            if (exercises.length > 0) {
                                found = true;
                                break;
                            }
                        }
                    }
                    if (found) break;
                }
            }
        }

        if (savedTitle) {
            displayTitle = savedTitle;
        } else if (category === 'ГТО' && gtoGender) {
            displayTitle = 'ГТО · ' + gtoGender + ' · ' + (level || '1 LVL');
        } else {
            displayTitle = category + ' ' + (level || '1 LVL');
        }

        const CATEGORY_ICON_MAP = {
            'Руки': 'bodybuilding',
            'Плечи': 'shoulder',
            'Пресс': 'press',
            'Грудь': 'breast',
            'Спина': 'back',
            'Ноги': 'legs',
            'Всё тело': 'WholeBody',
            'Кардио': 'cardio',
            'Растяжка': 'stretching',
            'Зарядка': 'charging',
            'Пилатес': 'Pilates',
            'Кроссфит': 'crossfit',
            'Мужская сила': 'men',
            'Женское счастье': 'woman',
            'Растяжка позвоночника': 'stretching',
            'ГТО': 'WholeBody'
        };
        workoutIcon = CATEGORY_ICON_MAP[category] || null;
    }

    _quickEditExercises = exercises;

    window._currentWorkoutForInvite = {
        title: displayTitle,
        exercises: exercises
    };

    // ★★★ ЗАГРУЖАЕМ ВРЕМЯ ОТДЫХА ★★★
    let restTime = 30;

    if (isCustom && id) {
        const workout = getWorkoutById(id);
        if (workout && workout.restTime) {
            restTime = workout.restTime;
        }
    } else {
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                const levelData = exercisesData[parent][category][currentLevel];
                if (levelData && levelData._restTime) {
                    restTime = levelData._restTime;
                    break;
                }
            }
        }
    }

    console.log('⏱️ Время отдыха для этой тренировки:', restTime, 'сек');

    const titleEl = document.getElementById('workoutDetailTitle');
    if (titleEl) {
        titleEl.textContent = 'ТРЕНИРОВКА';
    }

    const container = document.getElementById('exercisesContainer');
    if (container) {
        if (exercises.length === 0) {
            container.innerHTML = `<div class="empty-state"><span class="empty-icon">📋</span><h3 class="empty-title">Упражнения не найдены</h3><p class="empty-text">По вашему запросу ничего не нашлось.</p></div>`;
        } else {
            container.innerHTML = exercises.map((ex, index) => {
                const icon = ex.icon || getExerciseIcon(ex.name);
                let detailsText = `${formatSets(ex.sets)} × ${formatReps(ex.reps)}`;
                if (hasWeight(ex) && ex.weight > 0) {
                    detailsText += ` · ${ex.weight} кг`;
                }
                return `
                    <div class="item-card" id="exercise-${index}">
                        <div class="exercise-status" id="status-${index}">
                            <span class="exercise-number" id="number-${index}">${index + 1}</span>
                        </div>
                        <div class="item-info" style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem; flex:1; min-width:0;">
                            <div style="flex:1; min-width:0;">
                                <h3 class="item-title">${ex.name}</h3>
                                <p class="item-desc">${detailsText}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    const editWorkoutBtn = document.getElementById('editWorkoutBtn');
    const workoutEditEnabled = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';

    if (editWorkoutBtn) {
        if (isPremiumWorkout || !workoutEditEnabled) {
            editWorkoutBtn.style.display = 'none';
        } else {
            editWorkoutBtn.style.display = 'block';
            editWorkoutBtn.onclick = function() {
                const params = { category: currentCategory, isCustom: currentIsCustom, id: currentWorkoutId };
                if (!currentIsCustom && currentLevel) params.level = currentLevel;
                if (parentCategory) params.parentCategory = parentCategory;
                if (gtoGender) params.gtoGender = gtoGender;
                window.navigateTo('workout-edit', params);
            };
        }
    }

    const actionButton = document.getElementById('actionButton');
    if (actionButton) {
        actionButton.textContent = 'СТАРТ';
        actionButton.onclick = function() {
            if (!preventDoubleClick('startWorkoutBtn', 3000)) {
                showToast('⏳ Подождите, тренировка уже запускается...');
                return;
            }

            let sessionExercises = [];
            let finalWorkoutIcon = workoutIcon;
            let workoutId = null;
            let workoutTitle = '';
            let resolvedCategory = 'Без категории';

            if (currentIsCustom && currentWorkoutId) {
                const workout = getWorkoutById(currentWorkoutId);
                if (workout) {
                    sessionExercises = workout.exercises || [];
                    finalWorkoutIcon = workout.icon || null;
                    workoutId = currentWorkoutId;
                    workoutTitle = workout.title || currentCategory;
                }
            } else {
                sessionExercises = exercises;
                if (category === 'ГТО' && gtoGender) {
                    workoutTitle = 'ГТО · ' + gtoGender + ' · ' + currentLevel;
                } else {
                    workoutTitle = currentCategory + ' ' + currentLevel;
                }
            }

            if (sessionExercises.length === 0) {
                showToast('⚠️ Нет упражнений для тренировки');
                return;
            }

            if (currentIsCustom && currentWorkoutId) {
                resolvedCategory = finalWorkoutIcon ? (ICON_TO_CATEGORY[finalWorkoutIcon] || 'Всё тело') : 'Без категории';
            } else if (category === 'ГТО') {
                // ★★★ ГТО — относим к категории "ГТО" ★★★
                resolvedCategory = 'ГТО';
            } else {
                let parent = parentCategory || '';
                if (!parent) {
                    for (const p in exercisesData) {
                        if (exercisesData[p] && exercisesData[p][currentCategory]) {
                            parent = p;
                            break;
                        }
                    }
                }
                resolvedCategory = resolveWorkoutCategory(currentCategory, parent, isPremiumWorkout);
            }

            startTrainingSession(sessionExercises, workoutTitle, resolvedCategory, finalWorkoutIcon);
        };
    }

    const inviteBtn = document.getElementById('coopInviteBtn');
    if (inviteBtn) {
        inviteBtn.onclick = function() {
            getFriendsList().then(result => {
                if (!result.success || result.data.length === 0) {
                    showToast('⚠️ Сначала добавьте друзей в профиле');
                    TabManager.profile('friends');
                    return;
                }
                showFriendSelectModal(result.data);
            });
        };
    }

    if (actionButton) {
        actionButton.parentNode.insertBefore(inviteBtn, actionButton);
    }
}

// ========== ДОБАВЛЯЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
// (после объявления sessionWorkoutIcon)
let isResting = false;
let restTimerInterval = null;
let restSeconds = 30;

// ========== НОВЫЕ ФУНКЦИИ УПРАВЛЕНИЯ ОТДЫХОМ ==========

function startRest() {
    if (restTimerInterval) {
        clearInterval(restTimerInterval);
        restTimerInterval = null;
    }
    isResting = true;
    restSeconds = sessionRestSeconds || 30;  // ← ИСПОЛЬЗУЕМ ГЛОБАЛЬНУЮ ПЕРЕМЕННУЮ
    updateRestUI();
    startRestTimer();
}

function updateRestUI() {
    // Скрываем кнопку редактирования
    document.getElementById('sessionEditBtn').style.display = 'none';
    
    // Меняем название упражнения на "Отдых"
    document.getElementById('sessionExerciseName').textContent = 'Отдых';
    document.getElementById('sessionExerciseDetails').textContent = '';
    
    // Меняем текст главной кнопки
    document.getElementById('sessionMainBtn').textContent = 'ПРОПУСТИТЬ';
    
    // Показываем большой таймер, скрываем фоновый текст
    const bgText = document.querySelector('.session-bg-text');
    const restTimer = document.getElementById('sessionRestTimer');
    const restControls = document.getElementById('sessionRestControls');
    
    // ★★★ СКРЫВАЕМ СТРОКУ С ВЕСОМ ★★★
    const weightRow = document.getElementById('sessionWeightRow');
    if (weightRow) weightRow.style.display = 'none';
    
    if (bgText) bgText.style.display = 'none';
    if (restTimer) {
        restTimer.style.display = 'block';
        restTimer.textContent = formatTime(restSeconds);
    }
    if (restControls) {
        restControls.classList.add('visible');
    }
}

// Запуск таймера отдыха
function startRestTimer() {
    restTimerInterval = setInterval(() => {
        restSeconds--;
        const restTimer = document.getElementById('sessionRestTimer');
        if (restTimer) {
            restTimer.textContent = formatTime(restSeconds);
        }
        
        if (restSeconds === 3) {
            soundCountdown.currentTime = 0;
            soundCountdown.play().catch(() => {});
        }
        
        if (restSeconds <= 0) {
            finishRest();
        }
    }, 1000);
}

function finishRest() {
    if (restTimerInterval) {
        clearInterval(restTimerInterval);
        restTimerInterval = null;
    }
    isResting = false;
    
    // Восстанавливаем обычный вид
    const bgText = document.querySelector('.session-bg-text');
    const restTimer = document.getElementById('sessionRestTimer');
    const restControls = document.getElementById('sessionRestControls');
    const weightRow = document.getElementById('sessionWeightRow');
    
    if (bgText) bgText.style.display = 'block';
    if (restTimer) restTimer.style.display = 'none';
    if (restControls) restControls.classList.remove('visible');
    
    // ★★★ ВОССТАНАВЛИВАЕМ СТРОКУ С ВЕСОМ ★★★
    const ex = sessionExercises[sessionCurrentIndex];
    if (weightRow && hasWeight(ex)) {
        weightRow.style.display = 'flex';
    } else if (weightRow) {
        weightRow.style.display = 'none';
    }
    
    sessionCurrentIndex++;
    renderSessionExercise();
    renderSessionProgress();
    updateSessionButtons();
    document.getElementById('sessionEditBtn').style.display = 'block';
}

function skipRest() {
    if (restTimerInterval) {
        clearInterval(restTimerInterval);
        restTimerInterval = null;
    }
    isResting = false;
    
    const bgText = document.querySelector('.session-bg-text');
    const restTimer = document.getElementById('sessionRestTimer');
    const restControls = document.getElementById('sessionRestControls');
    const weightRow = document.getElementById('sessionWeightRow');
    
    if (bgText) bgText.style.display = 'block';
    if (restTimer) restTimer.style.display = 'none';
    if (restControls) restControls.classList.remove('visible');
    
    // ★★★ ВОССТАНАВЛИВАЕМ СТРОКУ С ВЕСОМ ★★★
    const ex = sessionExercises[sessionCurrentIndex];
    if (weightRow && hasWeight(ex)) {
        weightRow.style.display = 'flex';
    } else if (weightRow) {
        weightRow.style.display = 'none';
    }
    
    sessionCurrentIndex++;
    renderSessionExercise();
    renderSessionProgress();
    updateSessionButtons();
    document.getElementById('sessionEditBtn').style.display = 'block';
}

// ===================СТРАНИЦА ТРЕНИРОВКИ СЕССИЯ ===================
let sessionExercises = [];
let sessionCurrentIndex = 0;
let sessionCompleted = new Set();
let sessionTimerInterval = null;
let sessionSeconds = 0;
let sessionWorkoutTitle = '';
let sessionCategory = '';
let sessionWorkoutIcon = null;

function startTrainingSession(exercises, title, category, workoutIcon) {
    // Сброс совместных данных
    if (sessionListener) {
        sessionListener();
        sessionListener = null;
    }
    currentSessionId = null;
    isHost = false;
    sessionData = null;
    coopExercises = [];
    coopStarted = false;
    finishPageShown = false;
    
    const participantsContainer = document.getElementById('participantsContainer');
    if (participantsContainer) {
        participantsContainer.remove();
    }

    if (!exercises || exercises.length === 0) {
        showToast('⚠️ Нет упражнений для тренировки');
        return;
    }
    
    sessionExercises = exercises.map(ex => ({
        ...ex,
        icon: ex.icon || getExerciseIcon(ex.name)
    }));
    sessionCurrentIndex = 0;
    sessionCompleted = new Set();
    sessionCompletedSets = {};
    sessionSeconds = 0;
    sessionWorkoutTitle = title;
    sessionCategory = category || 'Без категории';
    sessionWorkoutIcon = workoutIcon || null;

    // Загружаем время отдыха
    let savedRestTime = 30;
    if (currentWorkoutId && currentIsCustom) {
        const workout = getWorkoutById(currentWorkoutId);
        if (workout && workout.restTime) {
            savedRestTime = workout.restTime;
        }
    } else {
        let found = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][currentCategory]) {
                const levelData = exercisesData[parent][currentCategory][currentLevel];
                if (levelData && levelData._restTime) {
                    savedRestTime = levelData._restTime;
                    found = true;
                    break;
                }
            }
        }
        if (!found && exercisesData[currentCategory] && exercisesData[currentCategory][currentLevel]) {
            const levelData = exercisesData[currentCategory][currentLevel];
            if (levelData && levelData._restTime) {
                savedRestTime = levelData._restTime;
            }
        }
    }

    sessionRestSeconds = savedRestTime;

    _isFromSession = false;
    _currentTrainingIndex = null;

    closeModal('sessionExitModal');
    window.navigateTo('training-session');

    renderSessionExercise();
    renderSessionProgress();
    updateSessionButtons();
    startSessionTimer();
}

function renderSessionExercise() {
    if (isResting) {
        updateRestUI();
        return;
    }
    const ex = sessionExercises[sessionCurrentIndex];
    if (!ex) return;
    
    document.getElementById('sessionExerciseName').textContent = ex.name;
    
    const repsStr = String(ex.reps || '');
    const isSeconds = isTimeBased(repsStr);
    const repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
    
    isTimedExercise = isSeconds;
    
    let details = '';
    let timerDisplay = '';
    
    if (isSeconds) {
        const mins = String(Math.floor(repsValue / 60)).padStart(2, '0');
        const secs = String(repsValue % 60).padStart(2, '0');
        details = `${ex.sets} × ${mins}:${secs}`;
        timerDisplay = `${mins}:${secs}`;
        
        exerciseTotalSets = parseInt(ex.sets) || 1;
        
        // ★★★ ВОССТАНАВЛИВАЕМ КОЛИЧЕСТВО ВЫПОЛНЕННЫХ ПОДХОДОВ ★★★
        const key = sessionCurrentIndex;
        const completedSets = sessionCompletedSets[key] || 0;
        exerciseCurrentSet = exerciseTotalSets - completedSets;
        
        exerciseTotalTime = repsValue;
        exerciseTimeLeft = repsValue;
        isExerciseTimerRunning = false;
        
        if (exerciseTimerInterval) {
            clearInterval(exerciseTimerInterval);
            exerciseTimerInterval = null;
        }
        
        const timerEl = document.getElementById('sessionExerciseTimer');
        if (timerEl) {
            timerEl.style.display = 'block';
            timerEl.textContent = timerDisplay;
        }
        
        const setCounter = document.getElementById('sessionSetCounter');
        const setCurrent = document.getElementById('sessionSetCurrent');
        const setTotal = document.getElementById('sessionSetTotal');
        if (setCounter) {
            setCounter.style.display = 'block';
        }
        if (setCurrent) {
            setCurrent.textContent = exerciseCurrentSet;
        }
        if (setTotal) {
            setTotal.textContent = exerciseTotalSets;
        }
        
        document.getElementById('sessionMainBtn').textContent = 'СТАРТ';
        
    } else {
        details = `${ex.sets} × ${repsValue}`;
        
        const timerEl = document.getElementById('sessionExerciseTimer');
        if (timerEl) {
            timerEl.style.display = 'none';
        }
        
        const setCounter = document.getElementById('sessionSetCounter');
        if (setCounter) {
            setCounter.style.display = 'none';
        }
        
        const total = sessionExercises.length;
        const isLast = sessionCurrentIndex === total - 1;
        document.getElementById('sessionMainBtn').textContent = isLast ? 'ФИНИШ' : 'ГОТОВО';
    }
    
    if (hasWeight(ex)) {
        details += ` · ${ex.weight || 0} кг`;
    }
    
    document.getElementById('sessionExerciseDetails').textContent = details;
    
    const editBtn = document.getElementById('sessionEditBtn');
    if (editBtn) {
        editBtn.style.display = 'block';
        editBtn.onclick = function() {
            openSessionEditExerciseModal(sessionCurrentIndex);
        };
    }
    
    const restControls = document.getElementById('sessionRestControls');
    if (restControls) {
        restControls.classList.remove('visible');
    }
}

// ★★★ КОРРЕКТИРОВКА ВЕСА В МОДАЛКЕ РЕДАКТИРОВАНИЯ ★★★
function adjustModalWeight(delta) {
    const display = document.getElementById('modalExerciseWeightDisplay');
    let val = parseFloat(display.textContent.replace(' кг', '')) || 0;
    val = val + delta;
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    display.textContent = val + ' кг';
}

function renderSessionProgress() {
    const container = document.getElementById('sessionProgress');
    const total = sessionExercises.length;
    const current = sessionCurrentIndex;

    container.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dash = document.createElement('div');
        dash.className = 'progress-dash';
        if (i < current) {
            dash.classList.add('progress-dash-active');
        } else if (i === current) {
            dash.classList.add('progress-dash-current');
        }
        container.appendChild(dash);
    }
}

function updateSessionButtons() {
    const total = sessionExercises.length;
    const isFirst = sessionCurrentIndex === 0;
    const isLast = sessionCurrentIndex === total - 1;
    const prevBtn = document.getElementById('sessionPrevBtn');
    const nextBtn = document.getElementById('sessionNextBtn');
    const mainBtn = document.getElementById('sessionMainBtn');

    // ★★★ УБРАЛИ БЛОК, СКРЫВАЮЩИЙ КНОПКИ ★★★
    // Всегда показываем кнопки навигации (они могут быть скрыты только если нет соседних упражнений)
    prevBtn.style.visibility = 'visible';
    prevBtn.style.pointerEvents = 'auto';
    nextBtn.style.visibility = 'visible';
    nextBtn.style.pointerEvents = 'auto';

    if (isResting) {
        prevBtn.style.pointerEvents = isFirst ? 'none' : 'auto';
        nextBtn.style.pointerEvents = 'auto';
        mainBtn.textContent = 'ПРОПУСТИТЬ';
        return;
    }

    prevBtn.style.pointerEvents = isFirst ? 'none' : 'auto';
    nextBtn.style.pointerEvents = 'auto';
    
    if (!isTimedExercise) {
        mainBtn.textContent = isLast ? 'ФИНИШ' : 'ГОТОВО';
    }
}

function goToPrevExercise() {
    if (isResting) {
        if (restTimerInterval) {
            clearInterval(restTimerInterval);
            restTimerInterval = null;
        }
        isResting = false;
        if (sessionCurrentIndex > 0) {
            sessionCurrentIndex--;
        }
        renderSessionExercise();
        renderSessionProgress();
        updateSessionButtons();
        document.getElementById('sessionEditBtn').style.display = 'block';
        return;
    }
    
    // ★★★ ЕСЛИ ТАЙМЕР ЗАПУЩЕН - ОСТАНАВЛИВАЕМ ★★★
    if (isExerciseTimerRunning) {
        clearInterval(exerciseTimerInterval);
        exerciseTimerInterval = null;
        isExerciseTimerRunning = false;
        document.getElementById('sessionMainBtn').textContent = 'СТАРТ';
    }
    
    if (sessionCurrentIndex > 0) {
        sessionCurrentIndex--;
        renderSessionExercise();
        renderSessionProgress();
        updateSessionButtons();
    }
}

function goToNextExercise() {
    if (isExerciseTimerRunning) {
        clearInterval(exerciseTimerInterval);
        exerciseTimerInterval = null;
        isExerciseTimerRunning = false;
        document.getElementById('sessionMainBtn').textContent = 'СТАРТ';
    }
    
    if (isResting) {
        skipRest();
        return;
    }
    
    const currentEx = sessionExercises[sessionCurrentIndex];
    const repsStr = String(currentEx?.reps || '');
    const isTimed = isTimeBased(repsStr);
    const hasNext = sessionCurrentIndex < sessionExercises.length - 1;
    const exerciseName = currentEx?.name || 'Упражнение';
    const key = sessionCurrentIndex;
    const completedSets = sessionCompletedSets[key] || 0;
    const totalSets = parseInt(currentEx?.sets) || 0;
    
    if (isTimed) {
        showConfirmModal(
            'Упражнение не завершено',
            `Вы выполнили ${completedSets} из ${totalSets} подходов. Пропустить остальные подходы?`,
            function() {
                sessionCompletedSets[key] = completedSets;
                if (hasNext) {
                    sessionCurrentIndex++;
                    renderSessionExercise();
                    renderSessionProgress();
                    updateSessionButtons();
                } else {
                    finishTrainingSession();
                }
            },
            'Пропустить'
        );
        return;
    }
    
    showConfirmModal(
        'Пропустить упражнение?',
        `Вы уверены, что хотите пропустить "${exerciseName}"? Оно не будет засчитано.`,
        function() {
            if (hasNext) {
                sessionCurrentIndex++;
                renderSessionExercise();
                renderSessionProgress();
                updateSessionButtons();
            } else {
                finishTrainingSession();
            }
        },
        'Пропустить'
    );
}

function markCurrentComplete() {
    const currentEx = sessionExercises[sessionCurrentIndex];
    const repsStr = String(currentEx?.reps || '');
    const isTimed = isTimeBased(repsStr);
    const key = sessionCurrentIndex;
    
    // ★★★ 1. ВРЕМЕННОЕ УПРАЖНЕНИЕ (ПОДХОДЫ × СЕКУНДЫ) ★★★
    if (isTimed) {
        const completedSets = sessionCompletedSets[key] || 0;
        const totalSets = parseInt(currentEx?.sets) || 0;
        
        if (completedSets === 0) {
            showToast('⏱️ Нажмите СТАРТ, чтобы начать упражнение');
            return;
        }
        
        if (completedSets < totalSets) {
            showToast(`⏱️ Выполнено ${completedSets} из ${totalSets} подходов. Завершите все подходы.`);
            return;
        }
        
        sessionCompleted.add(sessionCurrentIndex);
        const isLast = sessionCurrentIndex === sessionExercises.length - 1;
        if (isLast) {
            finishTrainingSession();
        } else {
            startRest();
        }
        return;
    }
    
    // ★★★ 2. ОБЫЧНОЕ УПРАЖНЕНИЕ (ПОДХОДЫ × ПОВТОРЕНИЯ) ★★★
    const completedSets = sessionCompletedSets[key] || 0;
    const totalSets = parseInt(currentEx?.sets) || 0;
    
    // ★★★ ЕСЛИ 0 ПОДХОДОВ — СПРАШИВАЕМ, НЕ ЗАСЧИТЫВАЕМ АВТОМАТИЧЕСКИ ★★★
    if (completedSets === 0) {
        showConfirmModal(
            'Упражнение не выполнено',
            `Вы не выполнили ни одного подхода. Засчитать как выполненное?`,
            function() {
                sessionCompletedSets[key] = totalSets;
                sessionCompleted.add(sessionCurrentIndex);
                
                if (currentSessionId && sessionData) {
                    updateCoopProgress(sessionCompleted.size, false);
                }
                
                const isLast = sessionCurrentIndex === sessionExercises.length - 1;
                if (isLast) {
                    finishTrainingSession();
                } else {
                    startRest();
                }
            },
            'Засчитать'
        );
        return;
    }
    
    // Если есть выполненные подходы, но не все
    if (completedSets > 0 && completedSets < totalSets) {
        showConfirmModal(
            'Упражнение не завершено',
            `Вы выполнили ${completedSets} из ${totalSets} подходов. Засчитать как выполненное?`,
            function() {
                sessionCompletedSets[key] = totalSets;
                sessionCompleted.add(sessionCurrentIndex);
                
                if (currentSessionId && sessionData) {
                    updateCoopProgress(sessionCompleted.size, false);
                }
                
                const isLast = sessionCurrentIndex === sessionExercises.length - 1;
                if (isLast) {
                    finishTrainingSession();
                } else {
                    startRest();
                }
            },
            'Засчитать'
        );
        return;
    }
    
    // ★★★ ВСЕ ПОДХОДЫ ВЫПОЛНЕНЫ ★★★
    sessionCompleted.add(sessionCurrentIndex);
    
    if (currentSessionId && sessionData) {
        updateCoopProgress(sessionCompleted.size, false);
    }
    
    const isLast = sessionCurrentIndex === sessionExercises.length - 1;
    if (isLast) {
        finishTrainingSession();
    } else {
        startRest();
    }
}

// ===================ТАЙМЕР ===================
function startSessionTimer() {
    if (sessionTimerInterval) return;
    sessionTimerInterval = setInterval(() => {
        sessionSeconds++;
        updateSessionTimerDisplay();
    }, 1000);
}

function stopSessionTimer() {
    if (sessionTimerInterval) {
        clearInterval(sessionTimerInterval);
        sessionTimerInterval = null;
    }
    if (restTimerInterval) {
        clearInterval(restTimerInterval);
        restTimerInterval = null;
        isResting = false;
        // Восстанавливаем вид
        const bgText = document.querySelector('.session-bg-text');
        const restTimer = document.getElementById('sessionRestTimer');
        const restControls = document.getElementById('sessionRestControls');
        
        if (bgText) bgText.style.display = 'block';
        if (restTimer) restTimer.style.display = 'none';
        // ★★★ СКРЫВАЕМ КНОПКИ УПРАВЛЕНИЯ (УБИРАЕМ КЛАСС visible) ★★★
        if (restControls) {
            restControls.classList.remove('visible');
        }
    }
}

function updateSessionTimerDisplay() {
    const mins = String(Math.floor(sessionSeconds / 60)).padStart(2, '0');
    const secs = String(sessionSeconds % 60).padStart(2, '0');
    document.getElementById('sessionTimer').textContent = `${mins}:${secs}`;
}

// ===================КНОПКИ СЕССИИ ===================
document.getElementById('sessionPrevBtn')?.addEventListener('click', goToPrevExercise);
document.getElementById('sessionNextBtn')?.addEventListener('click', goToNextExercise);
document.getElementById('sessionMainBtn')?.addEventListener('click', function() {
    if (isResting) {
        skipRest();
        return;
    }
    
    // ★★★ ЕСЛИ ВРЕМЕННОЕ УПРАЖНЕНИЕ ★★★
    if (isTimedExercise) {
        handleTimedExerciseClick();
        return;
    }
    
    // ★★★ ОБЫЧНОЕ УПРАЖНЕНИЕ (ПОВТОРЕНИЯ) ★★★
    markCurrentComplete();
});

function handleTimedExerciseClick() {
    const timerEl = document.getElementById('sessionExerciseTimer');
    const mainBtn = document.getElementById('sessionMainBtn');
    
    if (!isExerciseTimerRunning) {
        // ЗАПУСКАЕМ ТАЙМЕР
        if (exerciseTimeLeft <= 0) {
            exerciseTimeLeft = exerciseTotalTime;
        }
        isExerciseTimerRunning = true;
        mainBtn.textContent = 'СТОП';
        startExerciseTimer();
    } else {
        // ОСТАНАВЛИВАЕМ ТАЙМЕР
        isExerciseTimerRunning = false;
        mainBtn.textContent = 'СТАРТ';
        if (exerciseTimerInterval) {
            clearInterval(exerciseTimerInterval);
            exerciseTimerInterval = null;
        }
    }
}

// Добавьте в консоль браузера для проверки
function debugXP() {
    console.log('=== DEBUG XP ===');
    console.log('sessionExercises:', sessionExercises);
    console.log('sessionCompletedSets:', sessionCompletedSets);
    console.log('sessionCompleted:', sessionCompleted);
    console.log('sessionCurrentIndex:', sessionCurrentIndex);
    
    // Рассчитать XP
    const xp = calculateWorkoutXp(sessionExercises, sessionCompletedSets);
    console.log('Total XP:', xp);
    return xp;
}

function startExerciseTimer() {
    if (exerciseTimerInterval) {
        clearInterval(exerciseTimerInterval);
        exerciseTimerInterval = null;
    }
    
exerciseTimerInterval = setInterval(() => {
    exerciseTimeLeft--;
    updateExerciseTimerDisplay();
    
    if (exerciseTimeLeft === 3) {
        soundCountdown.currentTime = 0;
        soundCountdown.play().catch(() => {});
    }
    
    if (exerciseTimeLeft <= 0) {
            // ★★★ ПОДХОД ЗАВЕРШЁН ★★★
            clearInterval(exerciseTimerInterval);
            exerciseTimerInterval = null;
            isExerciseTimerRunning = false;
            
            // Уменьшаем количество подходов
            exerciseCurrentSet--;
            
            // ★★★ СОХРАНЯЕМ КОЛИЧЕСТВО ВЫПОЛНЕННЫХ ПОДХОДОВ ★★★
            const key = sessionCurrentIndex;
            if (!sessionCompletedSets[key]) {
                sessionCompletedSets[key] = 0;
            }
            sessionCompletedSets[key] = sessionCompletedSets[key] + 1;
            
            console.log('✅ Подход завершён! sessionCompletedSets:', sessionCompletedSets);
            
            const setCurrent = document.getElementById('sessionSetCurrent');
            if (setCurrent) {
                setCurrent.textContent = exerciseCurrentSet;
            }
            
            if (exerciseCurrentSet > 0) {
                // Ещё есть подходы
                exerciseTimeLeft = exerciseTotalTime;
                document.getElementById('sessionMainBtn').textContent = 'СТАРТ';
                updateExerciseTimerDisplay();
            } else {
                // ★★★ ВСЕ ПОДХОДЫ ВЫПОЛНЕНЫ ★★★
                sessionCompleted.add(sessionCurrentIndex);
                console.log('✅ Все подходы выполнены! Упражнение завершено.');
                
                const timerEl = document.getElementById('sessionExerciseTimer');
                if (timerEl) {
                    timerEl.style.display = 'none';
                }
                
                const setCounter = document.getElementById('sessionSetCounter');
                if (setCounter) {
                    setCounter.style.display = 'none';
                }
                
                const isLast = sessionCurrentIndex === sessionExercises.length - 1;
                if (isLast) {
                    finishTrainingSession();
                } else {
                    startRest();
                }
            }
        }
    }, 1000);
}

function updateExerciseTimerDisplay() {
    const timerEl = document.getElementById('sessionExerciseTimer');
    if (!timerEl) return;
    
    const mins = String(Math.floor(exerciseTimeLeft / 60)).padStart(2, '0');
    const secs = String(exerciseTimeLeft % 60).padStart(2, '0');
    timerEl.textContent = `${mins}:${secs}`;
}

// ★★★ КОРРЕКТИРОВКА ВРЕМЕНИ ОТДЫХА ★★★
function adjustRestTime(seconds) {
    if (!isResting) {
        showToast('⏳ Отдых не активен');
        return;
    }
    
    // Вычисляем новое время
    let newTime = restSeconds + seconds;
    
    // Ограничиваем минимальное и максимальное время
    if (newTime < 5) {
        newTime = 5;
        return;
    }
    if (newTime > 300) {
        newTime = 300;
        showToast('⏳ Максимум 5 минут');
        return;
    }
    
    // Обновляем время
    restSeconds = newTime;
    
    // Обновляем отображение таймера
    const restTimer = document.getElementById('sessionRestTimer');
    if (restTimer) {
        restTimer.textContent = formatTime(restSeconds);
    }
    
    // Показываем тост с новым временем
}

// ===================КРЕСТИК СЕССИИ ===================
document.getElementById('sessionCloseBtn')?.addEventListener('click', function() {
    const total = sessionExercises.length;
    const completed = sessionCompleted.size;
    const mins = String(Math.floor(sessionSeconds / 60)).padStart(2, '0');
    const secs = String(sessionSeconds % 60).padStart(2, '0');
    
    // ★★★ РАССЧИТЫВАЕМ XP НА ОСНОВЕ ВСЕХ ВЫПОЛНЕННЫХ ПОДХОДОВ ★★★
    let xpDisplay = '0 XP';
    
    // Проверяем, есть ли хоть один выполненный подход
    let hasAnyCompletedSets = false;
    for (const key in sessionCompletedSets) {
        if (sessionCompletedSets[key] > 0) {
            hasAnyCompletedSets = true;
            break;
        }
    }
    
    if (hasAnyCompletedSets) {
        const xpEarned = calculateWorkoutXp(sessionExercises, sessionCompletedSets);
        xpDisplay = (isNaN(xpEarned) ? 0 : xpEarned).toFixed(1) + ' XP';
    }

    document.getElementById('sessionExitTitle').textContent = 'ТРЕНИРОВКА';
    document.getElementById('exitExercises').textContent = `${completed}/${total}`;
    document.getElementById('exitMinutes').textContent = `${mins}:${secs}`;
    document.getElementById('exitXp').textContent = `+${xpDisplay}`;
    
    openModal('sessionExitModal');
});

document.getElementById('exitContinueBtn')?.addEventListener('click', function() {
    closeModal('sessionExitModal');
});

document.getElementById('exitFinishBtn')?.addEventListener('click', function() {
    closeModal('sessionExitModal');
    stopSessionTimer();
    
    // ★★★ ОБЫЧНАЯ ТРЕНИРОВКА — ВЫЗЫВАЕМ ФИНИШ ★★★
    finishTrainingSession();
});

// ===================БЫСТРОЕ РЕДАКТИРОВАНИЕ УПРАЖНЕНИЯ ===================
function openQuickEditModal(index) {
    _quickEditIndex = index;

    const ex = _quickEditExercises[index];
    if (!ex) return;

    document.getElementById('quickEditSets').value = ex.sets || 3;

    const repsStr = String(ex.reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    let repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 12;
    if (isNaN(repsValue) || repsValue < 1) repsValue = 12;
    if (repsValue > 60) repsValue = 60;
    document.getElementById('quickEditReps').value = repsValue;

    const label = document.getElementById('quickEditRepsLabel');
    if (label) label.textContent = isSeconds ? 'Секунды' : 'Повторения';

    document.querySelectorAll('#quickEditModal input').forEach(inp => {
        inp.classList.remove('error');
    });

    openModal('quickEditModal');
}

document.getElementById('quickEditSaveBtn')?.addEventListener('click', function() {
    if (_quickEditIndex === null || !_quickEditExercises) {
        showToast('⚠️ Ошибка: упражнение не найдено');
        return;
    }

    const sets = document.getElementById('quickEditSets').value.trim();
    const reps = document.getElementById('quickEditReps').value.trim();
    const setsInput = document.getElementById('quickEditSets');
    const repsInput = document.getElementById('quickEditReps');

    [setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    let hasError = false;
    let errorMessage = '';

    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) {
        setsInput.classList.add('error');
        hasError = true;
        errorMessage = 'Подходы должны быть от 1 до 5';
    }
    if (!reps || parseInt(reps) < 1 || parseInt(reps) > 60) {
        repsInput.classList.add('error');
        hasError = true;
        if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60';
    }
    if (hasError) {
        showToast('⚠️ ' + errorMessage);
        return;
    }

    const label = document.getElementById('quickEditRepsLabel');
    const isSeconds = label ? label.textContent === 'Секунды' : false;
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;

    _quickEditExercises[_quickEditIndex] = {
        ..._quickEditExercises[_quickEditIndex],
        sets: parseInt(sets),
        reps: repsDisplay
    };

    if (_quickEditIsCustom) {
        const allWorkouts = getMyWorkouts();
        const index = allWorkouts.findIndex(w => w._id === _quickEditWorkoutId);
        if (index !== -1) {
            allWorkouts[index].exercises = _quickEditExercises;
            saveMyWorkouts(allWorkouts);
        }
    } else {
        let saved = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][_quickEditCategory]) {
                const levelData = exercisesData[parent][_quickEditCategory][_quickEditLevel];
                if (levelData) {
                    if (typeof levelData === 'object' && !Array.isArray(levelData) && levelData._exercises) {
                        levelData._exercises = _quickEditExercises;
                    } else if (Array.isArray(levelData)) {
                        exercisesData[parent][_quickEditCategory][_quickEditLevel] = _quickEditExercises;
                    }
                    saved = true;
                    break;
                }
            }
        }
        if (saved) saveExercisesData();
    }

    closeModal('quickEditModal');
    const editedIndex = _quickEditIndex;
    _quickEditIndex = null;

    const infoDiv = document.querySelector(`#exercise-${editedIndex} .item-info`);
    if (infoDiv) {
        const p = infoDiv.querySelector('.item-desc');
        if (p) {
            p.textContent = `${formatSets(sets)} × ${formatReps(repsDisplay)}`;
        }
    }

    showToast('✅ Упражнение обновлено');
});

document.getElementById('quickEditCancelBtn')?.addEventListener('click', function() {
    closeModal('quickEditModal');
    _quickEditIndex = null;
});

// ===================ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ===================
function getExercisesForEdit(category, level, isCustom, id) {
    if (isCustom && id && id !== 'new') {
        const workout = getWorkoutById(id);
        if (workout) return JSON.parse(JSON.stringify(workout.exercises || []));
        return [];
    }
    if (!isCustom) {
        const targetLevel = level || '1 LVL';
        let exercisesFound = [];
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                const levelData = exercisesData[parent][category][targetLevel];
                if (levelData) {
                    if (Array.isArray(levelData)) {
                        exercisesFound = levelData;
                    } else if (typeof levelData === 'object' && levelData._exercises) {
                        exercisesFound = levelData._exercises;
                    }
                    break;
                }
            }
        }
        if (exercisesFound.length === 0 && exercisesData[category] && exercisesData[category][targetLevel]) {
            const levelData = exercisesData[category][targetLevel];
            if (Array.isArray(levelData)) {
                exercisesFound = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercisesFound = levelData._exercises;
            }
        }
        return JSON.parse(JSON.stringify(exercisesFound));
    }
    return [];
}

function saveWorkoutData(category, level, isCustom, id, title, icon, exercises) {
    // ★★★ ПОЛУЧАЕМ ВРЕМЯ ОТДЫХА ИЗ АКТИВНОЙ КНОПКИ ★★★
    const activeBtn = document.querySelector('.rest-time-btn.rest-time-active');
    const restTime = activeBtn ? parseInt(activeBtn.dataset.seconds) : 30;
    
    const exercisesToSave = editExercises;
    
    if (isCustom || id === 'new') {
        const allWorkouts = getMyWorkouts();
        const isDuplicate = allWorkouts.some(w => w._id !== id && w.title.toLowerCase() === title.toLowerCase());
        if (isDuplicate) {
            showConfirmModal(
                'Тренировка с таким названием уже существует',
                'Сохранить с дубликатом?',
                function() {},
                'Да, сохранить'
            );
        }
        if (id === 'new') {
            // ★★★ ГЕНЕРИРУЕМ ID ЗДЕСЬ И ВОЗВРАЩАЕМ ЕГО ★★★
            const newId = Date.now().toString();
            const newWorkout = {
                _id: newId,
                title: title,
                icon: icon,
                exercises: exercisesToSave,
                restTime: restTime
            };
            const workouts = getMyWorkouts();
            workouts.push(newWorkout);
            saveMyWorkouts(workouts);
            
            if (!tasks[3]) {
                tasks[3] = true;
                saveTasks();
                updateTasksUI();
                showToast('✅ Задание "Индивидуальность" выполнено!');
                addTaskXp();
            }
            
            localStorage.removeItem('temp_edit_name');
            localStorage.removeItem('temp_edit_exercises');
            localStorage.removeItem('temp_edit_category');
            localStorage.removeItem('temp_edit_level');
            localStorage.removeItem('temp_edit_isCustom');
            localStorage.removeItem('temp_edit_id');
            localStorage.removeItem('temp_edit_icon');
            localStorage.removeItem('temp_edit_rest_time');
            
            // ★★★ ВОЗВРАЩАЕМ ОБЪЕКТ С ID ★★★
            return { success: true, id: newId };
        } else {
            const allWorkouts = getMyWorkouts();
            const index = allWorkouts.findIndex(w => w._id === id);
            if (index !== -1) {
                allWorkouts[index] = {
                    ...allWorkouts[index],
                    title: title,
                    icon: icon,
                    exercises: exercisesToSave,
                    restTime: restTime
                };
                saveMyWorkouts(allWorkouts);
            }
            
            localStorage.removeItem('temp_edit_name');
            localStorage.removeItem('temp_edit_exercises');
            localStorage.removeItem('temp_edit_category');
            localStorage.removeItem('temp_edit_level');
            localStorage.removeItem('temp_edit_isCustom');
            localStorage.removeItem('temp_edit_id');
            localStorage.removeItem('temp_edit_icon');
            localStorage.removeItem('temp_edit_rest_time');
            
            return { success: true, id: id };
        }
    } else {
        const targetLevel = level || '1 LVL';
        let saved = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                if (exercisesData[parent][category][targetLevel]) {
                    if (Array.isArray(exercisesData[parent][category][targetLevel])) {
                        exercisesData[parent][category][targetLevel] = {
                            _title: title,
                            _exercises: JSON.parse(JSON.stringify(exercisesToSave)),
                            _restTime: restTime
                        };
                    } else {
                        exercisesData[parent][category][targetLevel]._title = title;
                        exercisesData[parent][category][targetLevel]._exercises = JSON.parse(JSON.stringify(exercisesToSave));
                        exercisesData[parent][category][targetLevel]._restTime = restTime;
                    }
                    saved = true;
                    break;
                }
            }
        }
        if (!saved) {
            if (exercisesData[category] && exercisesData[category][targetLevel]) {
                if (Array.isArray(exercisesData[category][targetLevel])) {
                    exercisesData[category][targetLevel] = {
                        _title: title,
                        _exercises: JSON.parse(JSON.stringify(exercisesToSave)),
                        _restTime: restTime
                    };
                } else {
                    exercisesData[category][targetLevel]._title = title;
                    exercisesData[category][targetLevel]._exercises = JSON.parse(JSON.stringify(exercisesToSave));
                    exercisesData[category][targetLevel]._restTime = restTime;
                }
                saved = true;
            }
        }
        if (saved) {
            saveExercisesData();
            localStorage.removeItem('temp_edit_rest_time');
            return { success: true };
        }
        showToast('❌ Ошибка: категория "' + category + '" не найдена');
        return { success: false };
    }
}

// ★★★ ОБНОВЛЕНИЕ UI ВРЕМЕНИ ОТДЫХА ★★★
function updateRestTimeUI(seconds) {
    document.querySelectorAll('.rest-time-btn').forEach(btn => {
        const val = parseInt(btn.dataset.seconds);
        btn.classList.toggle('rest-time-active', val === seconds);
    });
    
    // Сохраняем в глобальную переменную
    sessionRestSeconds = seconds;
}

// ★★★ ИНИЦИАЛИЗАЦИЯ ОБРАБОТЧИКОВ КНОПОК ВРЕМЕНИ ОТДЫХА ★★★
function initRestTimePicker() {
    const buttons = document.querySelectorAll('.rest-time-btn');
    
    buttons.forEach((btn) => {
        // Убираем старые обработчики
        const oldHandler = btn._restTimeHandler;
        if (oldHandler) {
            btn.removeEventListener('click', oldHandler);
        }
        
        // Создаём новый обработчик
        const handler = function(e) {
            e.stopPropagation();
            const seconds = parseInt(this.dataset.seconds);
            
            // Обновляем UI
            document.querySelectorAll('.rest-time-btn').forEach(b => {
                b.classList.remove('rest-time-active');
            });
            this.classList.add('rest-time-active');
            
            // Сохраняем в глобальную переменную
            sessionRestSeconds = seconds;
            
            // ★★★ СОХРАНЯЕМ ТОЛЬКО В localStorage КАК ВРЕМЕННОЕ ЗНАЧЕНИЕ ★★★
            localStorage.setItem('temp_edit_rest_time', String(seconds));
        };
        
        // Сохраняем обработчик
        btn._restTimeHandler = handler;
        btn.addEventListener('click', handler);
    });
}

function loadEditPage(category, isCustom, id, level, exercises) {
    isEditingWorkout = true;
    editCategory = category;
    editIsCustom = isCustom;
    editWorkoutId = id;
    editLevel = level || '1 LVL';

    // ★★★ УНИЧТОЖАЕМ СТАРЫЙ SORTABLE ★★★
    destroyEditSortable();

    const iconPickerBlock = document.getElementById('iconPickerBlock');
    if (iconPickerBlock) {
        if (isCustom || id === 'new') {
            iconPickerBlock.style.display = 'block';
        } else {
            iconPickerBlock.style.display = 'none';
        }
    }

    let savedName = null;
    let savedIcon = null;
    
    if (isCustom || id === 'new') {
        savedName = localStorage.getItem('temp_edit_name');
        savedIcon = localStorage.getItem('temp_edit_icon');
    } else {
        localStorage.removeItem('temp_edit_name');
        localStorage.removeItem('temp_edit_exercises');
        localStorage.removeItem('temp_edit_category');
        localStorage.removeItem('temp_edit_level');
        localStorage.removeItem('temp_edit_isCustom');
        localStorage.removeItem('temp_edit_id');
        localStorage.removeItem('temp_edit_icon');
        localStorage.removeItem('temp_edit_rest_time');
    }

    if (!exercises || exercises.length === 0) {
        if (isCustom || id === 'new') {
            const saved = localStorage.getItem('temp_edit_exercises');
            if (saved) {
                const parsed = JSON.parse(saved);
                const savedCategory = localStorage.getItem('temp_edit_category');
                const savedLevel = localStorage.getItem('temp_edit_level');
                if (savedCategory === category && savedLevel === level) {
                    exercises = parsed;
                }
            }
        }
    }

    const titleEl = document.getElementById('editTitle');
    if (titleEl) {
        titleEl.textContent = (id === 'new') ? 'СОЗДАНИЕ ТРЕНИРОВКИ' : 'РЕДАКТИРОВАТЬ';
    }
    const resetBtn = document.getElementById('resetWorkoutBtn');
    if (resetBtn) resetBtn.style.display = (isCustom || id === 'new') ? 'none' : 'block';

    const iconPicker = document.querySelector('.edit-header-block .icon-picker');
    const iconPickerLabel = document.querySelector('.edit-header-block label[for="iconPicker"]');
    if (iconPicker) {
        if (isCustom || id === 'new') {
            iconPicker.style.display = 'flex';
            if (iconPickerLabel) iconPickerLabel.style.display = 'block';
        } else {
            iconPicker.style.display = 'none';
            if (iconPickerLabel) iconPickerLabel.style.display = 'none';
        }
    }

    const nameInput = document.getElementById('editWorkoutName');
    if (nameInput) {
        if (savedName) {
            nameInput.value = savedName;
        } else if (isCustom && id && id !== 'new') {
            const workout = getWorkoutById(id);
            if (workout) nameInput.value = workout.title || category;
        } else if (!isCustom) {
            let savedTitle = '';
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    const levelData = exercisesData[parent][category][editLevel];
                    if (levelData && levelData._title) {
                        savedTitle = levelData._title;
                        break;
                    }
                }
            }
            if (!savedTitle && exercisesData[category] && exercisesData[category][editLevel] && exercisesData[category][editLevel]._title) {
                savedTitle = exercisesData[category][editLevel]._title;
            }
            nameInput.value = savedTitle || (category + ' ' + editLevel);
        } else {
            const workouts = getMyWorkouts();
            nameInput.value = 'Тренировка №' + (workouts.length + 1);
        }
    }

    // ★★★ ВСТАВЬ СЮДА ★★★
    if (nameInput && !nameInput._nameHandler) {
        const handler = function() {
            if (editIsCustom || editWorkoutId === 'new') {
                localStorage.setItem('temp_edit_name', this.value);
            }
        };
        nameInput._nameHandler = handler;
        nameInput.addEventListener('input', handler);
    }

    if (exercises && exercises.length > 0) {
        editExercises = exercises;
    } else {
        editExercises = getExercisesForEdit(category, editLevel, isCustom, id);
    }
    
    // ★★★ ПРИМЕНЯЕМ СОХРАНЁННЫЙ ПОРЯДОК ★★★
    const workoutIdForOrder = (isCustom || id === 'new') ? (id || 'temp_' + Date.now()) : (category + '_' + editLevel);
    editExercises = applySavedOrder(editExercises, workoutIdForOrder);

    if (isCustom || id === 'new') {
        const defaultIconMap = {
            'Руки': 'bodybuilding', 'Плечи': 'shoulder', 'Пресс': 'press',
            'Грудь': 'breast', 'Спина': 'back', 'Ноги': 'legs',
            'Всё тело': 'WholeBody', 'Кардио': 'cardio', 'Растяжка': 'stretching',
            'Зарядка': 'charging', 'Пилатес': 'Pilates', 'Кроссфит': 'crossfit',
            'Мужская сила': 'men', 'Женское счастье': 'woman',
            'Растяжка позвоночника': 'stretching'
        };
        
        let iconToSet = savedIcon;
        if (!iconToSet) {
            if (id && id !== 'new') {
                const workout = getWorkoutById(id);
                if (workout && workout.icon) {
                    iconToSet = workout.icon;
                }
            }
            if (!iconToSet) {
                iconToSet = defaultIconMap[category] || null;
            }
        }
        
        document.querySelectorAll('.icon-option').forEach(el => {
            el.classList.toggle('icon-option-active', el.dataset.icon === iconToSet);
        });
        
        localStorage.setItem('temp_edit_icon', iconToSet);
    }

    let savedRestTime = null;

    if (isCustom || id === 'new') {
        savedRestTime = localStorage.getItem('temp_edit_rest_time');
        if (!savedRestTime && id && id !== 'new') {
            const workout = getWorkoutById(id);
            if (workout && workout.restTime) {
                savedRestTime = String(workout.restTime);
                localStorage.setItem('temp_edit_rest_time', savedRestTime);
            }
        }
    } else {
        let found = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                const levelData = exercisesData[parent][category][editLevel];
                if (levelData && levelData._restTime) {
                    savedRestTime = String(levelData._restTime);
                    found = true;
                    break;
                }
            }
        }
        if (!found && exercisesData[category] && exercisesData[category][editLevel]) {
            const levelData = exercisesData[category][editLevel];
            if (levelData && levelData._restTime) {
                savedRestTime = String(levelData._restTime);
            }
        }
    }

    const restTime = savedRestTime ? parseInt(savedRestTime) : 30;
    updateRestTimeUI(restTime);

    setTimeout(() => {
        initRestTimePicker();
        updateRestTimeUI(restTime);
    }, 200);

    // ★★★ РЕНДЕРИМ И ИНИЦИАЛИЗИРУЕМ SORTABLE ★★★
    setTimeout(() => {
        renderEditExercises();
        setTimeout(() => {
            if (editExercises.length > 1) {
                initEditSortable();
            }
        }, 300);
    }, 300);
}

// ===================ВЫБОР ЗНАЧКА ===================
document.querySelectorAll('.icon-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.icon-option').forEach(e => e.classList.remove('icon-option-active'));
        this.classList.add('icon-option-active');
        
        // ★★★ СОХРАНЯЕМ ВЫБРАННЫЙ ЗНАЧОК ★★★
        if (editIsCustom || editWorkoutId === 'new') {
            localStorage.setItem('temp_edit_icon', this.dataset.icon);
        }
    });
});

// =================== SORTABLE ДЛЯ УПРАЖНЕНИЙ В РЕДАКТИРОВАНИИ ===================

let editSortableInstance = null;

function initEditSortable() {
    const container = document.getElementById('editExercisesContainer');
    if (!container) return;
    
    const items = container.querySelectorAll('.edit-exercise-item');
    if (items.length < 2) return;
    if (editSortableInstance) return;
    
    editSortableInstance = new Sortable(container, {
        animation: 150,
        handle: '.edit-drag-handle',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        forceFallback: true,
        delay: 200,
        delayOnTouchOnly: true,
        touchStartThreshold: 10,
        scroll: true,
        scrollSensitivity: 50,
        scrollSpeed: 15,
        onEnd: function(evt) {
            // ★★★ ПОЛУЧАЕМ НОВЫЙ ПОРЯДОК ИЗ SORTABLE ★★★
            const newOrder = this.toArray();
            
            // ★★★ ПЕРЕСТРАИВАЕМ МАССИВ СОГЛАСНО НОВОМУ ПОРЯДКУ ★★★
            const oldExercises = [...editExercises];
            editExercises = newOrder.map(id => {
                const index = parseInt(id);
                return oldExercises[index];
            }).filter(ex => ex !== undefined);
            
            // ★★★ ОБНОВЛЯЕМ data-index У ВСЕХ ЭЛЕМЕНТОВ ★★★
            const items = container.querySelectorAll('.edit-exercise-item');
            items.forEach((item, index) => {
                item.dataset.index = index;
                const editBtn = item.querySelector('.edit-btn');
                if (editBtn) {
                    editBtn.setAttribute('onclick', `openEditExerciseModal(${index})`);
                }
                const deleteBtn = item.querySelector('.delete-btn');
                if (deleteBtn) {
                    deleteBtn.setAttribute('onclick', `removeEditExercise(${index})`);
                }
            });
            
            saveEditExercisesState();
        }
    });
}

function destroyEditSortable() {
    if (editSortableInstance) {
        editSortableInstance.destroy();
        editSortableInstance = null;
    }
}

function reinitEditSortable() {
    destroyEditSortable();
    setTimeout(initEditSortable, 50);
}

function renderEditExercisesSilent() {
    const container = document.getElementById('editExercisesContainer');
    if (!container) return;
    
    const validExercises = editExercises.filter(ex => ex !== null && ex !== undefined);
    if (validExercises.length !== editExercises.length) {
        editExercises = validExercises;
        saveEditExercisesState();
    }
    
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    const currentCount = editExercises.length;
    
    let headerHtml = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0rem; padding:0 0.2rem;">
            <span class="section-title">Упражнения</span>
            <span class="section-title0-10">${currentCount}/${maxExercises}</span>
        </div>
    `;
    
    if (editExercises.length === 0) {
        container.innerHTML = headerHtml + `<div class="empty-state"><span class="empty-icon">📋</span><h3 class="empty-title">Нет упражнений</h3><p class="empty-text">Добавьте свое первое упражнение!</p></div>`;
        destroyEditSortable();
        return;
    }
    
    const exercisesHtml = editExercises.map((ex, index) => {
        const icon = ex.icon || getExerciseIcon(ex.name);
        let detailsText = `${formatSets(ex.sets, true)} × ${formatReps(ex.reps, true)}`;
        if (hasWeight(ex)) detailsText += ` · ${ex.weight} кг`;
        return `
            <div class="edit-exercise-item" data-index="${index}" data-id="${index}" style="cursor: grab; border: 2px dashed transparent;">
                <div class="edit-drag-handle" touch-action="none"><span>☰</span></div>
                <div class="item-icon">
                    ${icon ? `<img src="images/${icon}.png" class="edit-exercise-icon">` : ''}
                </div>
                <div class="edit-exercise-info">
                    <h4 class="edit-exercise-name">${ex.name}</h4>
                    <p class="edit-exercise-details">${detailsText}</p>
                </div>
                <div class="edit-exercise-actions">
                    <button class="edit-btn" onclick="openEditExerciseModal(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="delete-btn" onclick="removeEditExercise(${index})"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = headerHtml + exercisesHtml;
}

// Ключ для сохранения порядка упражнений
const EXERCISES_ORDER_KEY = 'sportapp_exercises_order';

// Сохранить порядок упражнений
function saveExercisesOrder(workoutId, order) {
    const allOrders = JSON.parse(localStorage.getItem(EXERCISES_ORDER_KEY) || '{}');
    allOrders[workoutId] = order;
    localStorage.setItem(EXERCISES_ORDER_KEY, JSON.stringify(allOrders));
}

// Загрузить порядок упражнений
function loadExercisesOrder(workoutId) {
    const allOrders = JSON.parse(localStorage.getItem(EXERCISES_ORDER_KEY) || '{}');
    return allOrders[workoutId] || null;
}

// Применить сохранённый порядок к массиву упражнений
function applySavedOrder(exercises, workoutId) {
    const savedOrder = loadExercisesOrder(workoutId);
    if (!savedOrder || savedOrder.length === 0) return exercises;
    if (savedOrder.length !== exercises.length) return exercises;
    
    const exerciseMap = {};
    exercises.forEach((ex, index) => {
        exerciseMap[index] = ex;
    });
    
    const reordered = [];
    savedOrder.forEach(oldIndex => {
        if (exerciseMap[oldIndex] !== undefined) {
            reordered.push(exerciseMap[oldIndex]);
        }
    });
    
    if (reordered.length !== exercises.length) {
        exercises.forEach((ex, index) => {
            if (!savedOrder.includes(index)) {
                reordered.push(ex);
            }
        });
    }
    
    return reordered;
}

function renderEditExercises() {
    renderEditExercisesSilent();
    if (editExercises.length > 1) {
        setTimeout(() => {
            destroyEditSortable();
            setTimeout(initEditSortable, 50);
        }, 50);
    } else {
        destroyEditSortable();
    }
}

function saveEditExercisesState() {
    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) localStorage.setItem('temp_edit_name', nameInput.value);
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
    } else {
        saveExercisesData();
    }
}

document.getElementById('sessionEditBtn')?.addEventListener('click', function() {
    const currentExerciseIndex = sessionCurrentIndex;
    if (currentExerciseIndex !== undefined && sessionExercises[currentExerciseIndex]) {
        // Открываем модалку редактирования через универсальную функцию
        openSessionEditExerciseModal(currentExerciseIndex);
    } else {
        showToast('⚠️ Упражнение не найдено');
    }
});

// =================== УПРАВЛЕНИЕ УПРАЖНЕНИЯМИ В РЕДАКТИРОВАНИИ ===================

function openEditExerciseModal(index) {
    if (index === undefined || index === null || !editExercises[index]) {
        showToast('⚠️ Упражнение не найдено');
        return;
    }
    openUniversalExerciseModal('edit', 'edit', index, editExercises, function(index, exercise) {
        editExercises[index] = exercise;
        renderEditExercises();
        saveEditExercisesState();
    });
}

window.addEditExercise = function() {
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    if (editExercises.length >= maxExercises) {
        showToast(`⚠️ Вы достигли максимума упражнений ${maxExercises}!`);
        return;
    }
    editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12, weight: 0 });
    renderEditExercises();
    openEditExerciseModal(editExercises.length - 1);
};

window.removeEditExercise = function(index) {
    showConfirmModal(
        'Удалить упражнение?',
        'Это действие нельзя отменить.',
        function() {
            editExercises.splice(index, 1);
            renderEditExercises();
            showToast('🗑️ Упражнение удалено');
        },
        'Удалить'
    );
};

// ===================СОХРАНЕНИЕ И ОТМЕНА В РЕДАКТИРОВАНИИ ===================
document.getElementById('saveEditBtn')?.addEventListener('click', function() {
    // ★★★ УНИЧТОЖАЕМ SORTABLE ★★★
    destroyEditSortable();
    
    if (!preventDoubleClick('saveEditBtn', 2000)) {
        showToast('⏳ Подождите, сохранение уже выполняется...');
        return;
    }
    
    if (editExercises.length === 0) {
        showToast('⚠️ Добавьте хотя бы одно упражнение');
        return;
    }
    const nameInput = document.getElementById('editWorkoutName');
    const title = nameInput ? nameInput.value.trim() : (editCategory || 'Моя тренировка');
    if (!title) { showToast('⚠️ Введите название тренировки'); return; }
    const selectedIcon = document.querySelector('.icon-option-active');
    const icon = selectedIcon ? selectedIcon.dataset.icon : null;
    
    // ★★★ ПОЛУЧАЕМ РЕЗУЛЬТАТ С ID ★★★
    const result = saveWorkoutData(editCategory, editLevel, editIsCustom, editWorkoutId, title, icon, editExercises);
    
    if (result && result.success) {
        isEditingWorkout = false;
        
        showToast('✅ Тренировка сохранена!');
        localStorage.removeItem('temp_edit_name');
        localStorage.removeItem('temp_edit_exercises');
        localStorage.removeItem('temp_edit_category');
        localStorage.removeItem('temp_edit_level');
        localStorage.removeItem('temp_edit_isCustom');
        localStorage.removeItem('temp_edit_id');
        localStorage.removeItem('temp_edit_icon');
        localStorage.removeItem('temp_edit_rest_time');
        
        // ★★★ ИСПОЛЬЗУЕМ ID ИЗ РЕЗУЛЬТАТА ★★★
        if (editIsCustom || editWorkoutId === 'new') {
            const id = result.id;
            if (id) {
                const workout = getWorkoutById(id);
                if (workout) {
                    // ★★★ ОБНОВЛЯЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ПЕРЕД ПЕРЕХОДОМ ★★★
                    currentCategory = workout.title;
                    currentIsCustom = true;
                    currentWorkoutId = id;
                    currentLevel = editLevel;
                    
                    window.navigateTo('workout-detail', { 
                        category: workout.title, 
                        isCustom: true, 
                        id: id,
                        level: editLevel
                    });
                    return;
                }
            }
            // Fallback
            window.navigateTo('workouts');
            return;
        }
        window.navigateTo('workout-detail', { category: editCategory, level: editLevel, parentCategory: '' });
    }
});

document.getElementById('cancelEditBtn')?.addEventListener('click', function() {
    // ★★★ УНИЧТОЖАЕМ SORTABLE ★★★
    destroyEditSortable();
    
    isEditingWorkout = false;
    
    localStorage.removeItem('temp_edit_name');
    localStorage.removeItem('temp_edit_exercises');
    localStorage.removeItem('temp_edit_category');
    localStorage.removeItem('temp_edit_level');
    localStorage.removeItem('temp_edit_isCustom');
    localStorage.removeItem('temp_edit_id');
    localStorage.removeItem('temp_edit_icon');
    localStorage.removeItem('temp_edit_rest_time');
    
    if (editIsCustom || editWorkoutId === 'new') {
        const id = editWorkoutId === 'new' ? null : editWorkoutId;
        if (id) {
            const workout = getWorkoutById(id);
            if (workout) {
                window.navigateTo('workout-detail', { category: workout.title, isCustom: true, id: id });
                return;
            }
        }
        window.navigateTo('workouts');
    } else {
        window.navigateTo('workout-detail', { category: editCategory, level: editLevel, parentCategory: '' });
    }
});

// ===================СБРОС ТРЕНИРОВКИ ===================
function resetWorkout() {
    if (!editCategory || editIsCustom) {
        showToast('⚠️ Эта функция только для готовых тренировок');
        return;
    }

    const oldModal = document.getElementById('resetConfirmModal');
    if (oldModal) oldModal.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'resetConfirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">Сбросить тренировку?</div>
            <p style="color:var(--slate); font-size:0.95rem; margin:0.5rem 0 1.5rem 0; text-align:center;">Тренировка вернется к исходному виду.</p>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-danger" id="resetConfirmYes" style="flex:1;">
                    Сбросить
                </button>
                <button class="btn btn-primary" id="resetConfirmNo" style="flex:1;">
                    Отмена
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('resetConfirmYes').addEventListener('click', function() {
        overlay.remove();
        // ★★★ УНИЧТОЖАЕМ SORTABLE ★★★
        destroyEditSortable();
        
        const category = editCategory;
        const level = editLevel || '1 LVL';
        let parentCategory = null;
        for (const parent in exercisesDataDefault) {
            if (exercisesDataDefault[parent] && exercisesDataDefault[parent][category]) {
                parentCategory = parent;
                break;
            }
        }
        if (parentCategory) {
            const defaultExercises = exercisesDataDefault[parentCategory][category][level];
            if (defaultExercises) {
                editExercises = JSON.parse(JSON.stringify(defaultExercises));
                const nameInput = document.getElementById('editWorkoutName');
                if (nameInput) nameInput.value = category + ' ' + level;
                renderEditExercises();
                showToast('✅ Тренировка сброшена');
                return;
            }
        }
        if (exercisesDataDefault[category] && exercisesDataDefault[category][level]) {
            const defaultExercises = exercisesDataDefault[category][level];
            if (defaultExercises) {
                editExercises = JSON.parse(JSON.stringify(defaultExercises));
                const nameInput = document.getElementById('editWorkoutName');
                if (nameInput) nameInput.value = category + ' ' + level;
                renderEditExercises();
                showToast('✅ Тренировка сброшена');
                return;
            }
        }
        showToast('❌ Не удалось найти исходные данные для этой тренировки');
    });

    document.getElementById('resetConfirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================МОИ ТРЕНИРОВКИ (localStorage) ===================
function getMyWorkouts() {
    return JSON.parse(localStorage.getItem('myCustomWorkouts')) || [];
}

function saveMyWorkouts(workouts) {
    localStorage.setItem('myCustomWorkouts', JSON.stringify(workouts));
}

function getWorkoutById(id) {
    const all = getMyWorkouts();
    return all.find(w => w._id === id);
}

function updateWorkout(id, data) {
    const all = getMyWorkouts();
    const index = all.findIndex(w => w._id === id);
    if (index !== -1) {
        all[index] = { ...all[index], ...data };
        saveMyWorkouts(all);
        return true;
    }
    return false;
}

function deleteWorkout(id) {
    const all = getMyWorkouts();
    const filtered = all.filter(w => w._id !== id);
    saveMyWorkouts(filtered);
}

function renderMyWorkouts() {
    const container = document.getElementById('myWorkoutsList');
    const workouts = getMyWorkouts();
    if (workouts.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📋</span><h3 class="empty-title">Нет своих тренировок</h3><p class="empty-text">Создайте свою первую тренировку!</p></div>`;
        return;
    }
    container.innerHTML = workouts.map(w => `
        <div class="item-card" data-workout-id="${w._id}" onclick="handleWorkoutClick('${w._id}', event)">
            ${w.icon ? `<div class="item-icon"><img src="images/${w.icon}.png"></div>` : ''}
            <div class="item-info">
                <h3 class="item-title">${w.title}</h3>
                <p class="item-desc">${w.exercises?.length || 0} упражнений</p>
            </div>
            <button class="item-action workout-delete" onclick="event.stopPropagation(); deleteCustomWorkout('${w._id}')"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `).join('');
}

function handleWorkoutClick(id, event) {
    const card = event.target.closest('.item-card');
if (card && card.classList.contains('sortable-chosen')) {
        return;
    }
    const workout = getWorkoutById(id);
    if (workout) {
        window.navigateTo('workout-detail', { 
            category: workout.title, 
            isCustom: true, 
            id: id
            // parentCategory НЕ ПЕРЕДАЁМ!
        });
    }
}

window.deleteCustomWorkout = function(id) {
    showConfirmModal(
        'Удалить тренировку?',
        'Это действие нельзя отменить.',
        function() {
            deleteWorkout(id);
            renderMyWorkouts();
            showToast('🗑️ Тренировка удалена');
        },
        'Удалить'
    );
};

function createNewWorkout() {
    window.navigateTo('workout-edit', { category: 'Новая тренировка', isCustom: true, id: 'new' });
};

// ===================СТАТИСТИКА ===================
async function loadStats() {
    const user = await getFirebaseUser();
    if (!user) return;
    const result = await getUserWorkoutsFromFirestore(user.uid);
    if (!result.success) return;
    
    // ★★★ ИСКЛЮЧАЕМ ЗАРЯДКУ И ОДИНОЧНЫЕ УПРАЖНЕНИЯ (ДЛЯ ТРЕНИРОВОК) ★★★
        const workouts = result.data.filter(w => {
            const icon = getWorkoutIcon(w);
            return icon && icon !== 'charging' && !w.isSingle;
        });

    // ★★★ ДЛЯ ПОДСЧЁТА УПРАЖНЕНИЙ БЕРЁМ ВСЕ, ВКЛЮЧАЯ ОДИНОЧНЫЕ ★★★
    const allWorkouts = result.data.filter(w => getWorkoutIcon(w) !== 'charging');

    // === ОБЩАЯ СТАТИСТИКА ===
    const total = workouts.length;
    const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalExercises = allWorkouts.reduce((sum, w) => {
        const completed = w.exercises?.filter(e => e.completed === true).length || 0;
        return sum + completed;
    }, 0);
    
    const totalWorkoutsEl = document.getElementById('totalWorkouts');
    const totalMinutesEl = document.getElementById('totalMinutes');
    const totalExercisesEl = document.getElementById('totalExercises');
    
    if (totalWorkoutsEl) totalWorkoutsEl.textContent = total;
    if (totalMinutesEl) totalMinutesEl.textContent = totalMinutes;
    if (totalExercisesEl) totalExercisesEl.textContent = totalExercises;

    // === УПРАЖНЕНИЯ ПО ГРУППАМ МЫШЦ (ТОЛЬКО ПО ИКОНКАМ) ===
    const exerciseCounts = {};
    allWorkouts.forEach(w => {
        (w.exercises || []).forEach(ex => {
            if (ex.completed) {
                const icon = ex.icon || getExerciseIcon(ex.name);
                const category = getCategoryByIcon(icon);
                if (category && category !== 'Зарядка') {
                    exerciseCounts[category] = (exerciseCounts[category] || 0) + 1;
                }
            }
        });
    });

    const exercisesContainer = document.getElementById('exerciseMuscleStats');
    if (exercisesContainer) {
        const displayCategories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        const maxCount = Math.max(1, ...Object.values(exerciseCounts));
        exercisesContainer.innerHTML = displayCategories.map(cat => {
            const count = exerciseCounts[cat] || 0;
            const percent = Math.round((count / maxCount) * 100);
            return `<div class="stat-item"><span class="stat-name">${cat}</span><div class="stat-bar"><div class="stat-fill" style="width:${percent}%;"></div></div><span class="stat-count">${count}</span></div>`;
        }).join('');
    }

    // === ТРЕНИРОВКИ ПО КАТЕГОРИЯМ (ТОЛЬКО ПО ИКОНКАМ) ===
    const categoryCounts = {};
workouts.forEach(w => {
    const icon = getWorkoutIcon(w);
    if (!icon) return;
    const category = getCategoryByIcon(icon);
    if (category && category !== 'Зарядка') {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
});

    const categoriesContainer = document.getElementById('categoriesStats');
    if (categoriesContainer) {
        const displayCategories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        const maxCount = Math.max(1, ...Object.values(categoryCounts));
        categoriesContainer.innerHTML = displayCategories.map(cat => {
            const count = categoryCounts[cat] || 0;
            const percent = Math.round((count / maxCount) * 100);
            return `<div class="stat-item"><span class="stat-name">${cat}</span><div class="stat-bar"><div class="stat-fill" style="width:${percent}%;"></div></div><span class="stat-count">${count}</span></div>`;
        }).join('');
    }

    // === КАЛЕНДАРЬ ===
    renderCalendar(currentMonth, currentYear);

    // === ИСТОРИЯ ТРЕНИРОВОК ===
    const historyContainer = document.getElementById('workoutHistory');
    if (historyContainer) {
        if (workouts.length === 0) {
            historyContainer.innerHTML = '<div class="empty-state"><span class="empty-icon">📋</span><h3 class="empty-title">Нет выполненных тренировок</h3><p class="empty-text">Выполните свою первую тренировку!</p></div>';
        } else {
            const sortedWorkouts = workouts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            historyContainer.innerHTML = sortedWorkouts.map(w => {
                const totalEx = w.exercises?.length || 0;
                const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
                const xpEarned = w.xpEarned || 0;
                const minutes = Math.floor((w.durationSeconds || 0) / 60);
                const detailsText = `${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned.toFixed(1)} XP`;
                return `<div class="history-item">
                    <div class="history-item-header">
                        <strong class="history-item-title">${w.title}</strong>
                        <span class="history-item-date">${new Date(w.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div class="history-item-details">${detailsText}</div>
                </div>`;
            }).join('');
        }
    }
    applyStatsTab(activeStatsTab);
    initAccordion();
    loadPremiumStats();
    
    // ★★★ ПРИМЕНЯЕМ ПОРЯДОК БЛОКОВ (ЕСЛИ НЕТ СОХРАНЁННОГО — ИСПОЛЬЗУЕТ ДЕФОЛТНЫЙ) ★★★
    applySavedStatsOrder();
}

// =================== КАЛЕНДАРЬ ===================
async function renderCalendar(month, year) {
    const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const monthYearEl = document.getElementById('currentMonthYear');
    if (monthYearEl) monthYearEl.textContent = `${monthNames[month]} ${year}`;
    
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfWeek = firstDay.getDay() || 7;
    const container = document.getElementById('calendarDays');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i < startDayOfWeek; i++) {
        const empty = document.createElement('div');
        empty.classList.add('calendar-empty');
        container.appendChild(empty);
    }
    
    const today = new Date();
    const user = await getFirebaseUser();
    
    // ★★★ ПОЛУЧАЕМ ДАТЫ ТРЕНИРОВОК ★★★
    let workoutDates = [];
    if (user) {
        const result = await getUserWorkoutsFromFirestore(user.uid);
        if (result.success) {
            workoutDates = result.data
                .filter(w => {
                    const icon = getWorkoutIcon(w);
                    return icon && icon !== 'charging';
                })
                .map(w => new Date(w.date));
        }
    }
    
    // ★★★ ПОДСЧИТЫВАЕМ КОЛИЧЕСТВО ТРЕНИРОВОК ПО ДНЯМ ★★★
    const workoutCount = {};
    workoutDates.forEach(d => {
        const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        workoutCount[key] = (workoutCount[key] || 0) + 1;
    });
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('calendar-day');
        dayEl.textContent = day;
        
        const key = `${year}-${month}-${day}`;
        const count = workoutCount[key] || 0;
        
        // ★★★ ВЫДЕЛЯЕМ В ЗАВИСИМОСТИ ОТ КОЛИЧЕСТВА ТРЕНИРОВОК ★★★
        if (count === 1) {
            dayEl.classList.add('calendar-day-has-workout-1');
        } else if (count >= 2) {
            dayEl.classList.add('calendar-day-has-workout-2');
        }
        
        // ★★★ ВЫДЕЛЯЕМ СЕГОДНЯШНИЙ ДЕНЬ ★★★
        if (day === today.getDate() && 
            month === today.getMonth() && 
            year === today.getFullYear()) {
            dayEl.classList.add('calendar-day-today');
        }
        
        // ★★★ ДОБАВЛЯЕМ ОБРАБОТЧИК КЛИКА ДЛЯ ОТКРЫТИЯ МОДАЛКИ С ТРЕНИРОВКАМИ ЗА ДЕНЬ ★★★
        dayEl.addEventListener('click', function() {
            openDayWorkoutsModal(year, month, day);
        });
        
        container.appendChild(dayEl);
    }
}

document.getElementById('prevMonth')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
});
document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar(currentMonth, currentYear);
});

// =================== ПРОФИЛЬ ===================
async function loadProfile() {
    const user = await getFirebaseUser();
    if (!user) return;
    const profileResult = await getUserProfile(user.uid);
    if (!profileResult.success) return;
    const profile = profileResult.data;
    const xp = profile.totalXp || 0;
    const currentLevel = getCurrentLevel(xp);
    const progress = getXpProgress(xp);
    const nextLevel = getNextLevel(xp);
    
    // ★★★ ОКРУГЛЯЕМ XP ДО ЦЕЛОГО ★★★
    const xpRounded = Math.round(xp);
    let progressText = nextLevel ? `${xpRounded}/${nextLevel.minXp} XP` : `${xpRounded}+ XP`;
    
    const profileName = document.getElementById('profileName');
    const profileInitials = document.getElementById('profileInitials');
    const profileEmailDisplay = document.getElementById('profileEmailDisplay');
    const profileDate = document.getElementById('profileDate');
    const editName = document.getElementById('editName');
    const levelLvl = document.getElementById('levelLvl');
    const levelTitle = document.getElementById('levelTitle');
    const levelProgressText = document.getElementById('levelProgressText');
    const levelFill = document.getElementById('levelFill');
    
    if (profileName) profileName.textContent = profile.displayName || 'Пользователь';
    if (profileInitials) profileInitials.textContent = (profile.displayName || 'П')[0].toUpperCase();
    if (profileEmailDisplay) profileEmailDisplay.textContent = user.email || '';
    if (profileDate && profile.createdAt) {
        const date = new Date(profile.createdAt);
        profileDate.textContent = date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
    }
    if (editName) editName.value = profile.displayName || '';
    if (levelLvl) levelLvl.textContent = currentLevel.id + ' LVL';
    if (levelTitle) levelTitle.textContent = currentLevel.name;
    if (levelProgressText) levelProgressText.textContent = progressText;
    if (levelFill) levelFill.style.width = progress + '%';
    
// ★★★ ПРОВЕРКА ПОВЫШЕНИЯ УРОВНЯ И СОХРАНЕНИЕ СОБЫТИЯ ★★★
const prevLevel = parseInt(localStorage.getItem('prevLevel') || '0');
if (currentLevel.id > prevLevel) {
    // Сохраняем событие о новом уровне
    await saveUserEvent(user.uid, 'level_up', {
        level: currentLevel.id,
        levelName: currentLevel.name
    });
        
        // Показываем уведомление
        if (currentLevel.id > 1) {
            const id = 'new_level_' + currentLevel.id;
            if (!isNotificationSeen(id)) {
                showNotification('🎉', `Поздравляем! Вы достигли ${currentLevel.id} уровня!`, null, true, function() {
                    TabManager.profile('my');
                    window.navigateTo('profile');
                    setTimeout(() => loadProfile(), 300);
                });
                markNotificationSeen(id);
            }
        }
        localStorage.setItem('prevLevel', String(currentLevel.id));
    }
    
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    if (lastVisit) {
        const daysDiff = Math.floor((Date.now() - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        if (daysDiff >= 7) {
            const id = 'welcome_back_' + Date.now();
            if (!isNotificationSeen(id)) {
                showNotification('👋', 'Давно не виделись, с возвращением!', null);
            }
        }
    }
    localStorage.setItem(LAST_VISIT_KEY, String(Date.now()));
    initProfileBlocks();
    switchProfileTab(activeProfileTab);

    await loadFriendsHistoryVisibilityFromProfile();

    renderAchievements();
    loadAchievementsVisibility();
    document.getElementById('profileLevelBlock')?.addEventListener('click', openLevelInfoModal);
    
await loadInventoryFromProfile();

    // ★★★ ОБНОВЛЯЕМ СЕРИЮ ★★★
    await updateProfileStreak();

    try {
        const results = await checkAllAchievements(user.uid);
        if (results) {
            renderAchievements();
        }
    } catch (error) {
        console.warn('Ошибка проверки достижений:', error);
    }
}

// ===================ПРОФИЛЬ - РЕДАКТИРОВАНИЕ ===================
document.getElementById('editProfileBtn')?.addEventListener('click', () => {
    isEditingProfile = true;
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('profileEdit').style.display = 'block';
    const currentName = document.getElementById('profileName').textContent;
    document.getElementById('editName').value = currentName;
});

document.getElementById('cancelProfileEditBtn')?.addEventListener('click', () => {
    isEditingProfile = false;
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
    loadProfile();
});

document.getElementById('saveProfileBtn')?.addEventListener('click', async () => {
    const nameInput = document.getElementById('editName');
    const name = nameInput.value.trim();
    const currentName = document.getElementById('profileName').textContent;

    if (!name) {
        showToast('⚠️ Введите имя и фамилию');
        nameInput.classList.add('error');
        return;
    }
    nameInput.classList.remove('error');

    if (name === currentName) {
        isEditingProfile = false;
        document.getElementById('profileView').style.display = 'block';
        document.getElementById('profileEdit').style.display = 'none';
        return;
    }

    const user = await getFirebaseUser();
    if (user) {
        await updateUserProfile(user.uid, { displayName: name });
        isEditingProfile = false;
        loadProfile();
        showToast('✅ Профиль обновлен');
    }
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
});

// ===================СЛУШАТЕЛЬ АВТОРИЗАЦИИ ===================
firebase.auth().onAuthStateChanged(async (user) => {
    // ★★★ ПРОВЕРЯЕМ ФЛАГ РЕГИСТРАЦИИ ★★★
    if (isRegistering) {
        console.log('⏳ Идёт регистрация, пропускаем onAuthStateChanged');
        return;
    }
    
    const bottomNav = document.getElementById('bottomNav');
    try {
        if (user) {
            try { 
                await user.reload(); 
            } catch (e) { 
                console.warn('Ошибка перезагрузки пользователя:', e); 
            }
            
            // ===== ПРОВЕРКА ПОДТВЕРЖДЕНИЯ ПОЧТЫ =====
            if (!user.emailVerified) {
                console.log('📧 Почта не подтверждена, проверяем таймер удаления...');
                
                // ★★★ ПРОВЕРЯЕМ В FIRESTORE ★★★
                try {
                    const pendingDoc = await firebase.firestore()
                        .collection('pendingDeletions')
                        .doc(user.uid)
                        .get();
                    
                    if (pendingDoc.exists) {
                        const data = pendingDoc.data();
                        const deleteAt = data.deleteAt?.toDate?.() || new Date(data.deleteAt);
                        
                        if (deleteAt && new Date() > deleteAt) {
                            // Прошло больше 5 минут - удаляем аккаунт
                            console.log('⏰ Время подтверждения истекло, удаляем аккаунт...');
                            try {
                                // Удаляем данные пользователя из Firestore
                                await firebase.firestore().collection('users').doc(user.uid).delete();
                                // Удаляем запись о pending
                                await pendingDoc.ref.delete();
                                // Удаляем сам аккаунт
                                await user.delete();
                                localStorage.removeItem('pendingVerification_' + user.uid);
                                showToast('⏰ Время подтверждения истекло. Зарегистрируйтесь заново.');
                                showHero();
                                return;
                            } catch (e) {
                                console.warn('Ошибка удаления просроченного аккаунта:', e);
                                // Если не удалось удалить - всё равно показываем страницу входа
                                showHero();
                                return;
                            }
                        } else {
                            console.log('⏳ Осталось времени:', Math.round((deleteAt - new Date()) / 1000), 'сек');
                        }
                    } else {
                        // ★★★ ЕСЛИ НЕТ ЗАПИСИ В FIRESTORE - СОЗДАЁМ ★★★
                        console.log('📝 Создаём запись о pending в Firestore');
                        scheduleAccountDeletion(user);
                    }
                } catch (error) {
                    console.error('❌ Ошибка проверки pending:', error);
                    // В случае ошибки - показываем страницу подтверждения
                }
                
                // ★★★ ПОКАЗЫВАЕМ СТРАНИЦУ ПРИВЕТСТВИЯ ★★★
                isDataLoaded = false;
                document.querySelectorAll('.page').forEach(p => {
                    p.style.display = 'none';
                    p.classList.remove('page-active');
                });
                if (bottomNav) bottomNav.style.display = 'none';
                
                showHero();
                clearAuthFields();
                return;
            }
            
            // ★★★ ПОЧТА ПОДТВЕРЖДЕНА - УДАЛЯЕМ ИЗ PENDING ★★★
            try {
                await firebase.firestore()
                    .collection('pendingDeletions')
                    .doc(user.uid)
                    .delete();
                localStorage.removeItem('pendingVerification_' + user.uid);
                console.log('✅ Запись о pending удалена (почта подтверждена)');
            } catch (e) {
                // Игнорируем ошибку, если записи нет
            }
            
            // ★★★ ПРОВЕРЯЕМ ФЛАГ ЗАГРУЗКИ ★★★
            if (isDataLoaded) {
                console.log('⚠️ Данные уже загружены, пропускаем');
                return;
            }
            
            // Проверяем, не загружена ли уже страница (для безопасности)
            const isPageLoaded = document.querySelector('#page-workouts.page-active') || 
                                document.querySelector('#page-stats.page-active') || 
                                document.querySelector('#page-profile.page-active');
            if (isPageLoaded) {
                isDataLoaded = true;
                console.log('⚠️ Страница уже загружена, пропускаем');
                return;
            }

            // ★★★ ПОКАЗЫВАЕМ СТРАНИЦУ ЗАГРУЗКИ ★★★
            document.querySelectorAll('.page').forEach(p => {
                p.style.display = 'none';
                p.classList.remove('page-active');
            });
            
            const loadingPage = document.getElementById('page-loading');
            if (loadingPage) {
                loadingPage.style.display = 'block';
                loadingPage.classList.add('page-active');
                console.log('📱 Страница загрузки показана');
            }
            if (bottomNav) bottomNav.style.display = 'none';

            console.log('📊 Загрузка данных...');
            const [profileResult, workoutsResult] = await Promise.all([
                getUserProfile(user.uid),
                getUserWorkoutsFromFirestore(user.uid)
            ]);

            let profile = null;
            if (profileResult.success) {
                profile = profileResult.data;
            } else {
                const newProfile = {
                    displayName: user.displayName || user.email?.split('@')[0] || 'Пользователь',
                    avatar: 'bodybuilding',
                    level: 1,
                    totalXp: 0,
                    createdAt: new Date().toISOString(),
                    tutorialCompleted: false
                };
                await saveUserProfile(user.uid, newProfile);
                profile = newProfile;
            }

            clearAuthFields();

            if (document.readyState !== 'complete') {
                await new Promise(resolve => {
                    window.addEventListener('load', resolve, { once: true });
                });
            }

            await new Promise(resolve => setTimeout(resolve, 200));

            console.log('📊 Загрузка профиля...');
            await loadProfile();
            console.log('📊 Загрузка статистики...');
            await loadStats();
            console.log('📊 Рендер тренировок...');
            renderMyWorkouts();
            await renderCalendar(currentMonth, currentYear);
            updatePremiumUI();
            initProfileBlocks();
            switchProfileTab('my');

            loadPremiumStats();

            window._tutorialNeeded = profile && profile.tutorialCompleted === false;

            if (typeof syncPendingWorkouts === 'function') {
                syncPendingWorkouts();
            }
            
            // ★★★ УСТАНАВЛИВАЕМ ФЛАГ, ЧТО ДАННЫЕ ЗАГРУЖЕНЫ ★★★
            isDataLoaded = true;
            
            // ★★★ ДАННЫЕ ЗАГРУЖЕНЫ, НО СТРАНИЦУ ЗАГРУЗКИ НЕ ЗАКРЫВАЕМ ★★★
            console.log('✅ Данные загружены, ждем нажатия кнопки');

            // ★★★ ПРОВЕРЯЕМ НАГРАДУ ЗА ОБЩУЮ ЦЕЛЬ ПРИ ВХОДЕ ★★★
checkAndGiveCommunityGoalReward();
         
        } else {
            // Пользователь не авторизован - сбрасываем флаг
            isDataLoaded = false;
            console.log('👤 Пользователь не авторизован');
            if (bottomNav) bottomNav.style.display = 'none';
            
            showHero();
            clearAuthFields();
        }
    } catch (error) {
        console.error('❌ Ошибка в onAuthStateChanged:', error);
        // При ошибке сбрасываем флаг
        isDataLoaded = false;
        if (bottomNav) bottomNav.style.display = 'none';
        
        document.querySelectorAll('.page').forEach(p => {
            p.style.display = 'none';
            p.classList.remove('page-active');
        });
        
        const loginPage = document.getElementById('page-login');
        if (loginPage) {
            loginPage.style.display = 'block';
            loginPage.classList.add('page-active');
            console.log('📱 Страница входа показана (ошибка)');
        }
        clearAuthFields();
    }
});

// ===================ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ ===================
function showHero() {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = '';
    });
    const heroPage = document.getElementById('page-hero');
    if (heroPage) {
        heroPage.classList.add('page-active');
        heroPage.style.display = 'block';
    }
    clearAuthFields();
}

// =================== РЕГИСТРАЦИЯ (ПОШАГОВАЯ) ===================

// Хранилище данных регистрации
let registerData = {
    name: '',
    email: '',
    password: ''
};

function switchToPage(pageId) {
    // Сначала скрываем ВСЕ страницы
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = 'none';
    });
    
    // Потом показываем нужную страницу
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('page-active');
        target.style.display = 'block';
    }
}

// Шаг 1: Имя
document.getElementById('registerFormStep1')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('regName');
    const name = nameInput.value.trim();
    
    if (!name) {
        nameInput.classList.add('error');
        showToast('⚠️ Введите ваше имя');
        return;
    }
    nameInput.classList.remove('error');
    
    registerData.name = name;
    
    switchToPage('page-register-email');
    document.getElementById('regEmail').focus();
});

// Шаг 2: Почта (регистрация)
document.getElementById('registerFormStep2')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('regEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        emailInput.classList.add('error');
        showToast('⚠️ Введите вашу почту');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        showToast('⚠️ Неверный формат email');
        return;
    }
    
    emailInput.classList.remove('error');
    registerData.email = email;
    
    switchToPage('page-register-password');
    document.getElementById('regPassword').focus();
});

// ★★★ ФЛАГ ДЛЯ ПРЕДОТВРАЩЕНИЯ СРАБАТЫВАНИЯ onAuthStateChanged ★★★
let isRegistering = false;

// Шаг 3: Пароль + создание аккаунта
document.getElementById('registerFormStep3')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const passwordInput = document.getElementById('regPassword');
    const password = passwordInput.value;
    const btn = document.getElementById('registerStep3Btn');
    
    if (!password || password.length < 6) {
        passwordInput.classList.add('error');
        showToast('⚠️ Пароль должен быть минимум 6 символов');
        return;
    }
    passwordInput.classList.remove('error');
    
    registerData.password = password;
    
    isRegistering = true;
    btn.disabled = true;
    
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(
            registerData.email, 
            registerData.password
        );
        
        await result.user.updateProfile({ displayName: registerData.name });
        
        await saveUserProfile(result.user.uid, {
            displayName: registerData.name,
            email: registerData.email,
            avatar: 'bodybuilding',
            level: 1,
            totalXp: 0,
            createdAt: new Date().toISOString(),
            tutorialCompleted: false
        });
        
        await result.user.sendEmailVerification();
        
        // ★★★ ЗАПУСКАЕМ ТАЙМЕР УДАЛЕНИЯ ★★★
        scheduleAccountDeletion(result.user);
        
        // ★★★ ПЕРЕХОДИМ НА ШАГ 4 (ПОДТВЕРЖДЕНИЕ ПОЧТЫ) ★★★
        switchToPage('page-register-verify');
        
        registerData = { name: '', email: '', password: '' };
        
    } catch (error) {
        let message = 'Ошибка регистрации';
        const emailInput = document.getElementById('regEmail');
        const passwordInputLocal = document.getElementById('regPassword');
        
        // ★★★ ОЧИЩАЕМ ОШИБКИ СО ВСЕХ ПОЛЕЙ ★★★
        emailInput.classList.remove('error');
        passwordInputLocal.classList.remove('error');
        
        switch (error.code) {
            case 'auth/email-already-in-use':
                message = 'Эта почта уже зарегистрирована. Войдите в аккаунт.';
                emailInput.classList.add('error');
                
                // Очищаем данные регистрации
                registerData = { name: '', email: '', password: '' };
                
                // Переключаемся на страницу входа
                setTimeout(() => {
                    // Скрываем все страницы
                    document.querySelectorAll('.page').forEach(p => {
                        p.classList.remove('page-active');
                        p.style.display = 'none';
                    });
                    
                    // Показываем страницу входа (шаг 1)
                    const loginPage = document.getElementById('page-login');
                    if (loginPage) {
                        loginPage.classList.add('page-active');
                        loginPage.style.display = 'block';
                    }
                    
                    // Очищаем поля входа
                    document.getElementById('loginEmail').value = '';
                    document.getElementById('loginPassword').value = '';
                    
                    // Устанавливаем email в поле входа для удобства
                    if (registerData.email) {
                        document.getElementById('loginEmail').value = registerData.email;
                    }
                    
                    clearAuthFields();
                }, 1500);
                
                break;
                
            case 'auth/invalid-email':
                message = 'Неверный формат почты';
                emailInput.classList.add('error');
                break;
                
            case 'auth/weak-password':
                message = 'Пароль должен быть минимум 6 символов';
                passwordInputLocal.classList.add('error');
                break;
                
            case 'auth/network-request-failed':
                message = 'Проверьте интернет-соединение';
                break;
                
            case 'auth/too-many-requests':
                message = 'Слишком много попыток. Подождите.';
                break;
                
            case 'auth/operation-not-allowed':
                message = 'Регистрация временно отключена';
                break;
                
            default:
                message = error.message || 'Произошла ошибка, попробуйте позже';
        }
        
        showToast('❌ ' + message);
        btn.disabled = false;
        
    } finally {
        isRegistering = false;
    }
});

// ★★★ ОБРАБОТЧИК ШАГА 4 (ПОДТВЕРЖДЕНИЕ ПОЧТЫ) ★★★
document.getElementById('registerVerifyBtn')?.addEventListener('click', async function() {
    const btn = this;
    
    if (btn.disabled) return;
    
    btn.disabled = true;
    
    try {
        const user = firebase.auth().currentUser;
        
        if (!user) {
            showToast('❌ Пользователь не найден');
            btn.disabled = false;
            return;
        }
        
        await user.reload();
        
        if (user.emailVerified) {
            // ★★★ ПОЧТА ПОДТВЕРЖДЕНА - УДАЛЯЕМ МЕТКУ ★★★
            localStorage.removeItem('pendingVerification_' + user.uid);
            
            // ★★★ ПЕРЕХОДИМ НА ШАГ 5 (ВЫБОР ИНВЕНТАРЯ) ★★★
            switchToPage('page-inventory');
            
            // Загружаем сохранённый выбор инвентаря
            setTimeout(() => {
                loadInventorySelection();
            }, 100);
            
            btn.disabled = false;
            
        } else {
            const sent = await resendVerificationEmail();
            if (sent) {
                showToast('⚠️ Подтвердите почту!');
            }
            btn.disabled = false;
        }
        
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            showToast('⚠️ Слишком много попыток');
        } else {
            showToast('❌ Ошибка проверки почты');
        }
        btn.disabled = false;
    }
});

// ★★★ ОБРАБОТЧИК ШАГА 5 (ВЫБОР ИНВЕНТАРЯ) ★★★
document.getElementById('inventoryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Сохраняем выбор
    localStorage.setItem('userInventory', JSON.stringify(selectedInventory));
    console.log('📦 Выбранный инвентарь:', selectedInventory);
    
    // ★★★ ПЕРЕХОДИМ НА СТРАНИЦУ ЗАГРУЗКИ ★★★
    switchToPage('page-loading');
    document.getElementById('bottomNav').style.display = 'none';
});

// =================== ПОВТОРНАЯ ОТПРАВКА ПИСЬМА ===================

async function resendVerificationEmail() {
    const user = firebase.auth().currentUser;
    
    if (!user) {
        showToast('❌ Пользователь не найден');
        return false;
    }
    
    await user.reload();
    
    if (user.emailVerified) {
        showToast('✅ Почта уже подтверждена');
        return false;
    }
    
    const lastSent = localStorage.getItem('lastVerificationSent');
    
    if (lastSent) {
        const timeDiff = Date.now() - parseInt(lastSent);
        if (timeDiff < 60000) {
            const remaining = Math.ceil((60000 - timeDiff) / 1000);
            showToast(`⏳ Подождите ${remaining} сек перед повторной отправкой`);
            return false;
        }
    }
    
    try {
        await user.sendEmailVerification();
        localStorage.setItem('lastVerificationSent', String(Date.now()));
        
        // ★★★ ОБНОВЛЯЕМ ТАЙМЕР УДАЛЕНИЯ В FIRESTORE ★★★
        refreshDeletionTimer(user);
        
        showToast('📧 Письмо отправлено на ' + user.email);
        return true;
        
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            showToast('⚠️ Слишком много запросов');
        } else if (error.code === 'auth/network-request-failed') {
            showToast('⚠️ Проверьте интернет-соединение');
        } else {
            showToast('❌ Не удалось отправить письмо');
        }
        return false;
    }
}

// =================== АВТОУДАЛЕНИЕ НЕПОДТВЕРЖДЁННЫХ АККАУНТОВ (ЧЕРЕЗ FIRESTORE) ===================

/**
 * Запускает механизм удаления аккаунта через 5 минут
 * Теперь удаление происходит через Firestore, даже если браузер закрыт
 */
function scheduleAccountDeletion(user) {
    if (!user) return;
    
    const creationTime = Date.now();
    const deleteAt = creationTime + 300000; // +5 минут
    
    // ★★★ СОХРАНЯЕМ ДАННЫЕ В FIRESTORE ★★★
    firebase.firestore().collection('pendingDeletions').doc(user.uid).set({
        userId: user.uid,
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        deleteAt: new Date(deleteAt),
        pendingVerification: true
    });
    
    // ★★★ ТАКЖЕ СОХРАНЯЕМ В LOCALSTORAGE ДЛЯ БЫСТРОЙ ПРОВЕРКИ ★★★
    localStorage.setItem('pendingVerification_' + user.uid, String(creationTime));
    
    console.log('⏰ Запланировано удаление аккаунта через 5 минут (сохранено в Firestore)');
}

/**
 * Проверяет и удаляет просроченные аккаунты
 * Вызывается при загрузке приложения и периодически
 */
async function checkAndDeleteExpiredAccounts() {
    try {
        const now = new Date();
        
        // ★★★ ИЩЕМ ПРОСРОЧЕННЫЕ ЗАПИСИ В FIRESTORE ★★★
        const snapshot = await firebase.firestore()
            .collection('pendingDeletions')
            .where('deleteAt', '<=', now)
            .get();
        
        if (snapshot.empty) {
            console.log('ℹ️ Нет просроченных аккаунтов для удаления');
            return;
        }
        
        console.log(`🗑️ Найдено ${snapshot.size} просроченных аккаунтов`);
        
        for (const doc of snapshot.docs) {
            const data = doc.data();
            const userId = data.userId;
            
            try {
                // ★★★ ПРОВЕРЯЕМ, НЕ ПОДТВЕРЖДЕНА ЛИ ПОЧТА ★★★
                const userRecord = await firebase.auth().getUser(userId);
                
                if (userRecord.emailVerified) {
                    // Почта подтверждена - удаляем запись о pending
                    await doc.ref.delete();
                    localStorage.removeItem('pendingVerification_' + userId);
                    console.log(`✅ Пользователь ${userId} подтвердил почту, запись удалена`);
                    continue;
                }
                
                // ★★★ УДАЛЯЕМ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ ★★★
                console.log(`🗑️ Удаляем просроченный аккаунт: ${userId}`);
                
                // Удаляем из Firestore
                await firebase.firestore().collection('users').doc(userId).delete();
                
                // Удаляем самого пользователя
                await firebase.auth().deleteUser(userId);
                
                // Удаляем запись о pending
                await doc.ref.delete();
                localStorage.removeItem('pendingVerification_' + userId);
                
                console.log(`✅ Аккаунт ${userId} удалён (почта не подтверждена за 5 минут)`);
                
            } catch (error) {
                if (error.code === 'auth/user-not-found') {
                    // Пользователь уже удалён - просто удаляем запись
                    await doc.ref.delete();
                    localStorage.removeItem('pendingVerification_' + userId);
                    console.log(`ℹ️ Пользователь ${userId} уже удалён, запись очищена`);
                } else {
                    console.error(`❌ Ошибка удаления аккаунта ${userId}:`, error);
                }
            }
        }
        
    } catch (error) {
        console.error('❌ Ошибка проверки просроченных аккаунтов:', error);
    }
}

/**
 * Обновляет таймер удаления при повторной отправке письма
 */
function refreshDeletionTimer(user) {
    if (!user) return;
    
    // Обновляем время в localStorage
    localStorage.setItem('pendingVerification_' + user.uid, String(Date.now()));
    
    // ★★★ ОБНОВЛЯЕМ В FIRESTORE ★★★
    const deleteAt = new Date(Date.now() + 300000);
    firebase.firestore().collection('pendingDeletions').doc(user.uid).update({
        deleteAt: deleteAt,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(() => {
        // Если документа нет - создаём
        firebase.firestore().collection('pendingDeletions').doc(user.uid).set({
            userId: user.uid,
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            deleteAt: deleteAt,
            pendingVerification: true
        });
    });
    
    console.log('🔄 Таймер удаления обновлён (сохранено в Firestore)');
}

// =================== ВХОД (ПОШАГОВЫЙ) ===================

// Хранилище данных входа
let loginData = {
    email: '',
    password: ''
};

// Шаг 1: Почта
document.getElementById('loginFormStep1')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('loginEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        emailInput.classList.add('error');
        showToast('⚠️ Введите вашу почту');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        showToast('⚠️ Неверный формат email');
        return;
    }
    
    emailInput.classList.remove('error');
    loginData.email = email;
    
    const forgotLink = document.getElementById('forgotPasswordLink');
    if (forgotLink) {
        forgotLink.style.visibility = 'hidden';
    }
    
    switchToPage('page-login-password');
    document.getElementById('loginPassword').focus();
});

// Шаг 2: Пароль + вход
document.getElementById('loginFormStep2')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const passwordInput = document.getElementById('loginPassword');
    const password = passwordInput.value;
    const btn = document.getElementById('loginStep2Btn');
    
    if (!password) {
        passwordInput.classList.add('error');
        showToast('⚠️ Введите пароль');
        return;
    }
    passwordInput.classList.remove('error');
    
    loginData.password = password;
    
    btn.disabled = true;
    
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(
            loginData.email,
            loginData.password
        );
        
        if (!result.user.emailVerified) {
            showToast('⚠️ Подтвердите почту! Письмо отправлено');
            await result.user.sendEmailVerification();
            btn.disabled = false;
            return;
        }
        
        switchToPage('page-loading');
        document.getElementById('bottomNav').style.display = 'none';
        
        showToast('✅ Вход выполнен!');
        loginData = { email: '', password: '' };
        
        // Ждём загрузки данных
        setTimeout(() => {
            // onAuthStateChanged сам переключит на workouts
        }, 500);
        
    } catch (error) {
        let message = '';
        let showForgotLink = false;
        
        if (error.code === 'auth/invalid-credential' || 
            error.code === 'auth/user-not-found' || 
            error.code === 'auth/wrong-password') {
            message = 'Неверный email или пароль.';
            showForgotLink = true;
        } else if (error.code === 'auth/invalid-email') {
            message = 'Неверный формат email.';
        } else if (error.code === 'auth/too-many-requests') {
            message = 'Слишком много попыток. Подождите.';
            showForgotLink = true;
        } else if (error.code === 'auth/network-request-failed') {
            message = 'Проверьте интернет-соединение';
        } else {
            message = 'Ошибка входа. Попробуйте позже';
        }
        
if (showForgotLink) {
    const forgotLink = document.getElementById('forgotPasswordLink');
    if (forgotLink) {
        forgotLink.style.visibility = 'visible';
    }
}
        
        passwordInput.classList.add('error');
        showToast('❌ ' + message);
        btn.disabled = false;
    }
});

// =================== ВОССТАНОВЛЕНИЕ ПАРОЛЯ (БЕЗ МОДАЛКИ) ===================

async function sendPasswordReset() {
    if (!loginData.email) {
        showToast('⚠️ Сначала введите почту');
        return;
    }
    
    const forgotLink = document.getElementById('forgotPasswordLink');
    const linkElement = forgotLink?.querySelector('a');
    
    if (linkElement) {
        linkElement.style.pointerEvents = 'none';
    }
    
    try {
        await firebase.auth().sendPasswordResetEmail(loginData.email);
        showToast('📧 Письмо для сброса пароля отправлено');
        
        if (forgotLink) {
            forgotLink.style.visibility = 'hidden';
        }
        
    } catch (error) {
        let message = 'Ошибка отправки';
        if (error.code === 'auth/invalid-email') {
            message = 'Неверный формат почты';
        } else if (error.code === 'auth/too-many-requests') {
            message = 'Слишком много попыток. Подождите.';
        }
        showToast('❌ ' + message);
    } finally {
        if (linkElement) {
            linkElement.style.pointerEvents = 'auto';
            linkElement.style.opacity = '1';
            linkElement.textContent = 'Восстановить';
        }
    }
}

// =================== ОБНОВЛЁННЫЕ ФУНКЦИИ НАВИГАЦИИ ===================

function showRegister() {
    // Показываем первый шаг регистрации
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = 'none';
    });
    const registerPage = document.getElementById('page-register');
    registerPage.classList.add('page-active');
    registerPage.style.display = 'block';
    
    // Очищаем поля
    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
    registerData = { name: '', email: '', password: '' };
    clearAuthFields();
}

function showLogin() {
    // Показываем первый шаг входа
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = 'none';
    });
    const loginPage = document.getElementById('page-login');
    loginPage.classList.add('page-active');
    loginPage.style.display = 'block';
    
    // Очищаем поля
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    loginData = { email: '', password: '' };
    clearAuthFields();
}

// ===================ОЧИСТКА ПОЛЕЙ ВВОДА ===================
function clearAuthFields() {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    if (loginEmail) {
        loginEmail.value = '';
        loginEmail.classList.remove('error');
    }
    if (loginPassword) {
        loginPassword.value = '';
        loginPassword.classList.remove('error');
    }

    const regName = document.getElementById('regName');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');

    if (regName) {
        regName.value = '';
        regName.classList.remove('error');
    }
    if (regEmail) {
        regEmail.value = '';
        regEmail.classList.remove('error');
    }
    if (regPassword) {
        regPassword.value = '';
        regPassword.classList.remove('error');
    }
}

// ===================ВЫХОД ===================
async function logout() {
    showConfirmWithPasswordModal(
        'Выйти из аккаунта?',
        'Введите пароль для подтверждения выхода из аккаунта.',
        function() {
            // ★★★ ОТПИСЫВАЕМСЯ ОТ ВСЕХ СЛУШАТЕЛЕЙ ★★★
            if (inviteListener) {
                inviteListener();
                inviteListener = null;
            }
            if (window._friendAcceptedListener) {
                window._friendAcceptedListener();
                window._friendAcceptedListener = null;
            }
            if (sessionListener) {
                sessionListener();
                sessionListener = null;
            }
            
            firebase.auth().signOut();
        },
        'Выйти'
    );
}

function enterApp() {
    // ★★★ ПРОВЕРЯЕМ ПРОСРОЧЕННЫЕ АККАУНТЫ ПРИ ВХОДЕ ★★★
    checkAndDeleteExpiredAccounts();
    
    // Закрываем страницу загрузки
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage) {
        loadingPage.style.display = 'none';
        loadingPage.classList.remove('page-active');
    }

    // Переходим на страницу тренировок
    window.navigateTo('workouts');
    document.getElementById('bottomNav').style.display = 'block';

    refreshNotificationData();

    // Раскрываем все блоки (аккордеоны)
    setTimeout(() => {
        document.querySelectorAll('.section-block').forEach(block => block.classList.add('open'));
        saveBlocksState();
    }, 100);

    // ★★★ ЗАПУСКАЕМ ТУТОРИАЛ ТОЛЬКО ПОСЛЕ НАЖАТИЯ КНОПКИ ★★★
    if (window._tutorialNeeded && !isTutorialCompleted()) {
        console.log('🎓 Запускаем обучение после нажатия кнопки "Начать тренироваться"');
        setTimeout(() => startTutorial(), 500);
    }

    if (!navigator.onLine) {
        setTimeout(() => {
            showOfflineModal();
        }, 1000);
    }
}

// ===================ПОВТОРНАЯ ОТПРАВКА ПИСЬМА ===================
async function resendVerification() {
    const user = firebase.auth().currentUser;
    if (!user) { showToast('❌ Вы не авторизованы'); return; }
    if (user.emailVerified) { showToast('✅ Почта уже подтверждена'); return; }
    try {
        await user.sendEmailVerification();
        showToast('📧 Письмо отправлено на ' + user.email);
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            showToast('⚠️ Слишком много попыток. Подождите несколько минут.');
        } else {
            showToast('❌ Ошибка: ' + error.message);
        }
    }
}

// ===================ДРУЗЬЯ ===================
async function getFriendshipStatus(targetUserId) {
    const user = await getFirebaseUser();
    if (!user) return 'none';
    const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
    const friends = userDoc.data()?.friends || [];
    if (friends.includes(targetUserId)) return 'friends';
    const sentSnapshot = await firebase.firestore()
        .collection('friendRequests')
        .where('from', '==', user.uid)
        .where('to', '==', targetUserId)
        .where('status', '==', 'pending')
        .get();
    if (!sentSnapshot.empty) return 'pending_sent';
    const receivedSnapshot = await firebase.firestore()
        .collection('friendRequests')
        .where('from', '==', targetUserId)
        .where('to', '==', user.uid)
        .where('status', '==', 'pending')
        .get();
    if (!receivedSnapshot.empty) return 'pending_received';
    return 'none';
}

async function searchUsers(query) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    if (!query || query.trim().length === 0) return { success: true, data: [] };
    try {
        const snapshot = await firebase.firestore()
            .collection('users')
            .where('displayName', '>=', query)
            .where('displayName', '<=', query + '\uf8ff')
            .limit(20)
            .get();
        const results = [];
        for (const doc of snapshot.docs) {
            if (doc.id !== user.uid) {
                const data = doc.data();
                const status = await getFriendshipStatus(doc.id);
                results.push({ id: doc.id, ...data, friendshipStatus: status });
            }
        }
        return { success: true, data: results };
    } catch (error) {
        console.error('Ошибка поиска:', error);
        return { success: false, error: error.message };
    }
}

async function sendFriendRequest(toUserId) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    const status = await getFriendshipStatus(toUserId);
    if (status !== 'none') return { success: false, error: 'Заявка уже отправлена или вы уже друзья' };
    try {
        await firebase.firestore().collection('friendRequests').add({
            from: user.uid,
            to: toUserId,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true };
    } catch (error) {
        console.error('Ошибка отправки заявки:', error);
        return { success: false, error: error.message };
    }
}

async function getFriendRequests() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    try {
        const snapshot = await firebase.firestore()
            .collection('friendRequests')
            .where('to', '==', user.uid)
            .where('status', '==', 'pending')
            .get();
        
        const requests = [];
        for (const doc of snapshot.docs) {
            const data = doc.data();
            const fromUser = await getUserProfile(data.from);
            requests.push({ id: doc.id, from: data.from, fromUser: fromUser.success ? fromUser.data : null, ...data });
        }
        return { success: true, data: requests };
    } catch (error) {
        console.error('Ошибка получения заявок:', error);
        return { success: false, error: error.message };
    }
}

async function acceptFriendRequest(requestId, fromUserId) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    try {
        // ПРОВЕРЯЕМ, СУЩЕСТВУЕТ ЛИ ЗАЯВКА
        const requestDoc = await firebase.firestore().collection('friendRequests').doc(requestId).get();
        if (!requestDoc.exists) {
            showToast('❌ Заявка уже обработана или удалена');
            return { success: false, error: 'Заявка не найдена' };
        }
        
        // ПРИНИМАЕМ ЗАЯВКУ
        await firebase.firestore().collection('friendRequests').doc(requestId).update({ status: 'accepted' });
        
        // ДОБАВЛЯЕМ ДРУГА ОБОИМ
        await firebase.firestore().collection('users').doc(user.uid).update({ 
            friends: firebase.firestore.FieldValue.arrayUnion(fromUserId) 
        });
        await firebase.firestore().collection('users').doc(fromUserId).update({ 
            friends: firebase.firestore.FieldValue.arrayUnion(user.uid) 
        });
        
        // ОЧИЩАЕМ УВЕДОМЛЕНИЕ О ЗАЯВКЕ
        const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
        const updated = shownRequests.filter(id => id !== requestId);
        localStorage.setItem('shownFriendRequests', JSON.stringify(updated));
        
        // ПОЛУЧАЕМ ДАННЫЕ ПОЛЬЗОВАТЕЛЕЙ
        const currentUserProfile = await getUserProfile(user.uid);
        const currentUserName = currentUserProfile.success ? currentUserProfile.data.displayName : 'Пользователь';
        
        const friendProfile = await getUserProfile(fromUserId);
        const friendName = friendProfile.success ? friendProfile.data.displayName : 'Пользователь';
        
        // ===== УВЕДОМЛЕНИЕ ДЛЯ ТОГО, КТО ПРИНЯЛ ЗАЯВКУ =====
        const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
        if (!shownFriendNotifications.includes(fromUserId)) {
            showNotification('👥', `У вас новый друг — ${friendName}!`, null);
            shownFriendNotifications.push(fromUserId);
            localStorage.setItem('shownFriendNotifications', JSON.stringify(shownFriendNotifications));
        }

        // ★★★ ПРОВЕРЯЕМ ЕЖЕДНЕВНОЕ ЗАДАНИЕ "ОБЩИТЕЛЬНЫЙ" ★★★
checkDailyTasksAfterAddFriend();
        
        // ★★★ ===== ЗАДАНИЕ 4: НОВЫЕ ЗНАКОМСТВА (ДЛЯ ТОГО, КТО ПРИНЯЛ) ===== ★★★
        const tasksData = JSON.parse(localStorage.getItem('sportapp_tasks') || '{}');
        if (!tasksData[4]) {
            tasksData[4] = true;
            localStorage.setItem('sportapp_tasks', JSON.stringify(tasksData));
            
            // ★★★ ОБНОВЛЯЕМ ГЛОБАЛЬНЫЙ МАССИВ tasks ★★★
            tasks[4] = true;
            
            // ★★★ ОБНОВЛЯЕМ UI ★★★
            updateTasksUI();
            
            showToast('✅ Задание "Новые знакомства" выполнено!');
            addTaskXp();
        }
        
        // ===== УВЕДОМЛЕНИЕ ДЛЯ ТОГО, КТО ОТПРАВИЛ ЗАЯВКУ =====
        await firebase.firestore().collection('notifications').add({
            to: fromUserId,
            from: user.uid,
            fromName: currentUserName,
            type: 'friend_accepted',
            message: `${currentUserName} принял(а) вашу заявку в друзья!`,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            read: false
        });
        
        await renderFriendsInProfile();
        
        // ПРОВЕРЯЕМ, ВСЕ ЛИ ЗАДАНИЯ ВЫПОЛНЕНЫ
        if (checkAllTasksCompleted()) {
            showNotification(
                '🎉',
                'Теперь вам доступны ежедневные задания!',
                null,
                true,
                function() {
                    window.navigateTo('profile');
                    TabManager.profile('my');
                    setTimeout(() => {
                        showDailyTasks();
                    }, 300);
                }
            );
        }
        
        return { success: true };
    } catch (error) {
        console.error('Ошибка принятия заявки:', error);
        
        if (error.code === 'not-found') {
            showToast('❌ Заявка уже была обработана');
            await renderFriendsInProfile();
            return { success: false, error: 'Заявка не найдена' };
        }
        
        showToast('❌ Ошибка при принятии заявки');
        return { success: false, error: error.message };
    }
}

function listenForFriendAcceptedNotifications() {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (window._friendAcceptedListener) {
            window._friendAcceptedListener();
            window._friendAcceptedListener = null;
        }
        
        if (!user) return;
        
        window._friendAcceptedListener = firebase.firestore()
            .collection('notifications')
            .where('to', '==', user.uid)
            .where('type', '==', 'friend_accepted')
            .where('read', '==', false)
            .onSnapshot(async (snapshot) => {
                for (const change of snapshot.docChanges()) {
                    if (change.type === 'added') {
                        const data = change.doc.data();
                        
                        const notificationId = 'friend_accepted_' + change.doc.id;
                        if (isNotificationSeen(notificationId)) continue;
                        
                        showNotification(
                            '👥',
                            data.message || `${data.fromName} принял(а) вашу заявку в друзья!`,
                            null
                        );
                        
                        // ★★★ ===== ЗАДАНИЕ 4: НОВЫЕ ЗНАКОМСТВА (ДЛЯ ОТПРАВИТЕЛЯ) ===== ★★★
                        const tasksData = JSON.parse(localStorage.getItem('sportapp_tasks') || '{}');
                        if (!tasksData[4]) {
                            tasksData[4] = true;
                            localStorage.setItem('sportapp_tasks', JSON.stringify(tasksData));
                            
                            // ★★★ ОБНОВЛЯЕМ ГЛОБАЛЬНЫЙ МАССИВ tasks ★★★
                            tasks[4] = true;
                            
                            // ★★★ ОБНОВЛЯЕМ UI ★★★
                            updateTasksUI();
                            
                            showToast('✅ Задание "Новые знакомства" выполнено!');
                            
                            // Начисляем XP
                            try {
                                const senderProfile = await getUserProfile(user.uid);
                                if (senderProfile.success) {
                                    const currentXp = senderProfile.data.totalXp || 0;
                                    await updateUserProfile(user.uid, { totalXp: currentXp + 10 });
                                }
                            } catch (error) {
                                console.error('Ошибка начисления XP:', error);
                            }
                        }
                        
                        await firebase.firestore()
                            .collection('notifications')
                            .doc(change.doc.id)
                            .update({ read: true });
                        
                        markNotificationSeen(notificationId);
                    }
                }
            });
    });
}

async function rejectFriendRequest(requestId) {
    try {
        const requestDoc = await firebase.firestore().collection('friendRequests').doc(requestId).get();
        const requestData = requestDoc.data();
        let senderName = 'Пользователь';
        
        if (requestData && requestData.from) {
            const senderProfile = await getUserProfile(requestData.from);
            if (senderProfile.success) {
                senderName = senderProfile.data.displayName || 'Пользователь';
            }
        }
        
        await firebase.firestore().collection('friendRequests').doc(requestId).delete();
        
        const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
        const updated = shownRequests.filter(id => id !== requestId);
        localStorage.setItem('shownFriendRequests', JSON.stringify(updated));
        
        await renderFriendsInProfile();
        
        showToast(`❌ Заявка от ${senderName} отклонена`);
        
        return { success: true };
    } catch (error) {
        console.error('Ошибка отклонения заявки:', error);
        showToast('❌ Ошибка при отклонении заявки');
        return { success: false, error: error.message };
    }
}

async function getFriendsList() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    try {
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const friendIds = userDoc.data()?.friends || [];
        if (friendIds.length === 0) return { success: true, data: [] };
        const friends = [];
        for (const id of friendIds) {
            const result = await getUserProfile(id);
            if (result.success) friends.push({ id, ...result.data });
        }
        return { success: true, data: friends };
    } catch (error) {
        console.error('Ошибка получения друзей:', error);
        return { success: false, error: error.message };
    }
}

// =================== РЕНДЕР ДРУЗЕЙ В ПРОФИЛЕ (ИСПРАВЛЕННЫЙ) ===================
async function renderFriendsInProfile() {
    const searchBtn = document.getElementById('searchFriendBtn') || document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('searchResults');
    const requestsDiv = document.getElementById('friendRequests');
    const friendsDiv = document.getElementById('friendsList');
    
    // ★★★ ПОИСК ДРУЗЕЙ ★★★
    if (searchBtn) {
        searchBtn.onclick = async () => {
            const query = searchInput.value.trim();
            resultsDiv.innerHTML = '';
            if (!query) {
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;text-align:center;padding:1rem;">Введите имя для поиска</p>';
                return;
            }
            const result = await searchUsers(query);
            if (!result.success) { 
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;text-align:center;padding:1rem;">Ошибка поиска</p>'; 
                return; 
            }
            if (result.data.length === 0) { 
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;text-align:center;padding:1rem;">Пользователи не найдены</p>'; 
                return; 
            }
            resultsDiv.innerHTML = result.data.map(u => {
                const initial = (u.displayName || 'П')[0].toUpperCase();
                const level = getCurrentLevel(u.totalXp || 0).id;
                const xp = Math.round(u.totalXp || 0);
                let buttonHtml = '';
                if (u.friendshipStatus === 'none') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" onclick="addFriend('${u.id}', this)">Добавить</button>`;
                } else if (u.friendshipStatus === 'pending_sent') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity:0.6;">Ждем ответа</button>`;
                } else if (u.friendshipStatus === 'pending_received') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity:0.6;">Входящая заявка</button>`;
                } else if (u.friendshipStatus === 'friends') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity:0.6;">В друзьях</button>`;
                }
                return `<div class="friend-result-item">
                    <div class="friend-avatar">${initial}</div>
                    <div class="friend-result-info">
                        <strong>${u.displayName || 'Пользователь'}</strong>
                        <span>Уровень ${level} · ${xp} XP</span>
                    </div>
                    ${buttonHtml}
                </div>`;
            }).join('');
        };
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => { 
                if (e.key === 'Enter') searchBtn.click(); 
            });
        }
    }

    // ★★★ ЗАГРУЖАЕМ ЗАЯВКИ ★★★
    const requests = await getFriendRequests();
    if (requests.success && requests.data.length > 0) {
        const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
        const newRequests = requests.data.filter(r => !shownRequests.includes(r.id));
        
        newRequests.forEach(r => {
            const fromUser = r.fromUser || {};
            const name = fromUser.displayName || 'Пользователь';
            showNotification('📧', `У вас новая заявка в друзья от ${name}`, null, true, function() {
                TabManager.profile('friends');
                window.navigateTo('profile');
                setTimeout(() => renderFriendsInProfile(), 300);
            });
        });
        
        const updatedShown = [...shownRequests, ...newRequests.map(r => r.id)];
        localStorage.setItem('shownFriendRequests', JSON.stringify(updatedShown));
        
        let requestsHtml = requests.data.map(r => {
            const fromUser = r.fromUser || {};
            const initial = (fromUser.displayName || 'П')[0].toUpperCase();
            const level = getCurrentLevel(fromUser.totalXp || 0).id;
            const xp = Math.round(fromUser.totalXp || 0);
            return `<div class="friend-request-item" onclick="openFriendRequestProfile('${r.id}','${r.from}')" style="cursor:pointer;">
                <div class="friend-avatar">${initial}</div>
                <div class="friend-result-info">
                    <strong>${fromUser.displayName || 'Пользователь'}</strong>
                    <span>Уровень ${level} · ${xp} XP</span>
                </div>
                <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
            </div>`;
        }).join('');
        if (requestsDiv) requestsDiv.innerHTML = requestsHtml;
    } else {
        if (requestsDiv) requestsDiv.innerHTML = '<div class="empty-state"><span class="empty-icon">📧</span><h3 class="empty-title">Нет заявок</h3><p class="empty-text">Здесь будут отображаться входящие заявки.</p></div>';
    }
    
    // ★★★ ЗАГРУЖАЕМ ДРУЗЕЙ ★★★
    const friends = await getFriendsList();
    let friendsHtml = '';
    if (friends.success && friends.data.length > 0) {
        // ★★★ УБИРАЕМ АВТОМАТИЧЕСКОЕ УВЕДОМЛЕНИЕ ПРИ РЕНДЕРЕ ★★★
        // Уведомления о новых друзьях теперь показываются ТОЛЬКО в acceptFriendRequest
        // и в listenForFriendAcceptedNotifications
        
friendsHtml = friends.data.map(f => {
    const initial = (f.displayName || 'П')[0].toUpperCase();
    const level = getCurrentLevel(f.totalXp || 0).id;
    const xp = Math.round(f.totalXp || 0); // ← ИСПРАВЛЕНО: используем f.totalXp
    return `<div class="friend-item" onclick="openFriendProfile('${f.id}')" style="cursor:pointer;">
        <div class="friend-avatar">${initial}</div>
        <div class="friend-info">
            <strong>${f.displayName || 'Пользователь'}</strong>
            <span>Уровень ${level} · ${xp} XP</span>
        </div>
        <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
    </div>`;
}).join('');
    } else {
        friendsHtml = '<div class="empty-state"><span class="empty-icon">👥</span><h3 class="empty-title">Нет друзей</h3><p class="empty-text">Добавьте друзей, чтобы соревноваться!</p></div>';
    }
    if (friendsDiv) friendsDiv.innerHTML = friendsHtml;
    // ★★★ БОЛЬШЕ НЕ СКРЫВАЕМ БЛОК ★★★
    // Просто рендерим историю с учётом видимости
    setTimeout(() => renderFriendsHistory(), 300);
}

// ===================ОТКРЫТИЕ ПРОФИЛЯ ЗАЯВКИ ===================
async function openFriendRequestProfile(requestId, fromUserId) {
    try {
        const result = await getUserProfile(fromUserId);
        if (!result.success) {
            showToast('❌ Не удалось загрузить данные пользователя');
            return;
        }
        
        const userData = result.data;
        
        const achievements = userData.achievements || {};
        updateAchievementsUI('friendRequestAchievements', achievements);
        
        const visible = getAchievementsVisibility();
        const container = document.getElementById('friendRequestAchievements');
        if (container) {
            container.classList.toggle('hidden', !visible);
        }
        
        let workouts = [];
        let totalSeconds = 0;
        let totalExercises = 0;
        
        try {
            const workoutsResult = await getUserWorkoutsFromFirestore(fromUserId);
            if (workoutsResult.success) {
                workouts = workoutsResult.data.filter(w => !(w.title || '').includes('Зарядка'));
                totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
                totalExercises = workouts.reduce((sum, w) => {
                    const completed = w.exercises?.filter(e => e.completed === true).length || 0;
                    return sum + completed;
                }, 0);
            }
        } catch (error) {
            console.warn('⚠️ Ошибка загрузки тренировок друга:', error);
        }
        
        const name = userData.displayName || 'Пользователь';
        document.getElementById('friendRequestName').textContent = name;
        document.getElementById('friendRequestEmail').textContent = userData.email || 'email не указан';
        document.getElementById('friendRequestAvatar').textContent = name[0].toUpperCase();
        
        const xp = userData.totalXp || 0;
        const currentLevel = getCurrentLevel(xp);
        const progress = getXpProgress(xp);
        const nextLevel = getNextLevel(xp);
        
        // ★★★ ОКРУГЛЯЕМ XP ДО ЦЕЛОГО ★★★
        const xpRounded = Math.round(xp);
        const progressText = nextLevel ? `${xpRounded}/${nextLevel.minXp} XP` : `${xpRounded}+ XP`;
        
        document.getElementById('friendRequestLevelLvl').textContent = currentLevel.id + ' LVL';
        document.getElementById('friendRequestLevelTitle').textContent = currentLevel.name;
        document.getElementById('friendRequestLevelProgressText').textContent = progressText;
        document.getElementById('friendRequestLevelFill').style.width = progress + '%';
        
        document.getElementById('friendRequestTotalWorkouts').textContent = workouts.length;
        document.getElementById('friendRequestTotalMinutes').textContent = Math.floor(totalSeconds / 60);
        document.getElementById('friendRequestTotalExercises').textContent = totalExercises;
        
        document.getElementById('friendRequestAcceptBtn').dataset.requestId = requestId;
        document.getElementById('friendRequestAcceptBtn').dataset.userId = fromUserId;
        document.getElementById('friendRequestRejectBtn').dataset.requestId = requestId;
        
        openModal('friendRequestProfileModal');
        
        checkDailyTasksAfterFriendProfile(fromUserId);
        
    } catch (error) {
        console.error('Ошибка загрузки профиля:', error);
        showToast('❌ Ошибка загрузки профиля');
    }
}

// ===================ОБРАБОТЧИКИ КНОПОК ЗАЯВКИ ===================
document.getElementById('friendRequestAcceptBtn')?.addEventListener('click', async function() {
    const requestId = this.dataset.requestId;
    const userId = this.dataset.userId;
    if (!requestId || !userId) {
        showToast('❌ Ошибка: данные не найдены');
        return;
    }
    
    const result = await acceptFriendRequest(requestId, userId);
    if (result.success) {
        closeModal('friendRequestProfileModal');
        await renderFriendsInProfile();
        showToast('✅ Заявка принята!');
    } else {
        showToast('❌ Ошибка при принятии заявки');
    }
});

document.getElementById('friendRequestRejectBtn')?.addEventListener('click', async function() {
    const requestId = this.dataset.requestId;
    if (!requestId) {
        showToast('❌ Ошибка: данные не найдены');
        return;
    }
    
    const result = await rejectFriendRequest(requestId);
    if (result.success) {
        closeModal('friendRequestProfileModal');
        await renderFriendsInProfile();
        showToast('❌ Заявка отклонена');
    } else {
        showToast('❌ Ошибка при отклонении заявки');
    }
});

document.getElementById('friendProfileCloseBtn')?.addEventListener('click', function() {
    closeModal('friendProfileModal');
    currentFriendId = null;
    currentFriendData = null;
});

// ===================ДРУЗЬЯ - ГЛОБАЛЬНЫЕ КНОПКИ ===================
window.addFriend = async function(userId, btnElement) {
    if (btnElement) { btnElement.textContent = 'Отправка...'; btnElement.disabled = true; btnElement.style.opacity = '0.6'; }
    const result = await sendFriendRequest(userId);
    if (!result.success) {
        if (btnElement) { btnElement.textContent = 'Добавить'; btnElement.disabled = false; btnElement.style.opacity = '1'; }
        console.error('Ошибка:', result.error);
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML += `<p style="color:#EF4444;font-size:0.8rem;">${result.error}</p>`;
        return;
    }
    if (btnElement) { btnElement.textContent = 'Ждем ответа'; btnElement.disabled = true; btnElement.style.opacity = '0.6'; }
    await renderFriendsInProfile();
};

window.acceptFriend = async function(requestId, fromUserId) {
    const result = await acceptFriendRequest(requestId, fromUserId);
    if (result.success) await renderFriendsInProfile();
    else console.error('Ошибка принятия:', result.error);
};

window.rejectFriend = async function(requestId) {
    const result = await rejectFriendRequest(requestId);
    if (result.success) await renderFriendsInProfile();
    else console.error('Ошибка отклонения:', result.error);
};

window.removeFriend = async function(friendId) {
    showConfirmModal(
        'Удалить друга?',
        'Вы больше не будете видеть его в списке друзей.',
        async function() {
            const user = await getFirebaseUser();
            if (!user) { 
                showToast('❌ Пользователь не авторизован'); 
                return; 
            }
            try {
                const friendProfile = await getUserProfile(friendId);
                const friendName = friendProfile.success ? friendProfile.data.displayName : 'Пользователь';
                
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
                const currentFriends = userDoc.data()?.friends || [];
                const updatedFriends = currentFriends.filter(id => id !== friendId);
                await firebase.firestore().collection('users').doc(user.uid).update({ friends: updatedFriends });
                
                const friendDoc = await firebase.firestore().collection('users').doc(friendId).get();
                const friendFriends = friendDoc.data()?.friends || [];
                const updatedFriendFriends = friendFriends.filter(id => id !== user.uid);
                await firebase.firestore().collection('users').doc(friendId).update({ friends: updatedFriendFriends });
                
                const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
                const updatedShown = shownFriendNotifications.filter(id => id !== friendId);
                localStorage.setItem('shownFriendNotifications', JSON.stringify(updatedShown));
                
                const prevFriends = JSON.parse(localStorage.getItem('prevFriendsList') || '[]');
                const updatedPrev = prevFriends.filter(f => f.id !== friendId);
                localStorage.setItem('prevFriendsList', JSON.stringify(updatedPrev));
                
                await renderFriendsInProfile();
                showToast(`✅ ${friendName} удалён из друзей`);
                await updateAchievementsAfterWorkout();
            } catch (error) {
                console.error('Ошибка удаления друга:', error);
                showToast('❌ Ошибка при удалении друга');
            }
        },
        'Удалить'
    );
};

// =================== ВСЕ УПРАЖНЕНИЯ ДЛЯ СПИСКА ===================
function getAllExercises() {
    // ★★★ ИСПОЛЬЗУЕМ ОТДЕЛЬНЫЙ КАТАЛОГ ★★★
    if (typeof EXERCISES_CATALOG === 'undefined') {
        console.warn('EXERCISES_CATALOG не найден, используем пустой список');
        return [];
    }
    
    // Маппинг категорий на иконки
    const categoryIconMap = {
        'Грудь': 'breast',
        'Спина': 'back',
        'Ноги': 'legs',
        'Плечи': 'shoulder',
        'Пресс': 'press',
        'Руки': 'bodybuilding',
        'Всё тело': 'WholeBody',
        'Кардио': 'cardio',
        'Растяжка': 'stretching',
        'Растяжка позвоночника': 'stretching',
        'Зарядка': 'charging',
        'Пилатес': 'Pilates',
        'Кроссфит': 'crossfit',
        'Мужская сила': 'men',
        'Женское счастье': 'woman'
    };
    
    // ★★★ ПОЛУЧАЕМ ИНВЕНТАРЬ ПОЛЬЗОВАТЕЛЯ ★★★
    const userInventory = getUserInventoryFromStorage();
    console.log('📦 Инвентарь пользователя:', userInventory);
    
    // ★★★ ФИЛЬТРУЕМ ПО ИНВЕНТАРЮ ★★★
    const filtered = filterExercisesByInventory(userInventory);
    console.log('📋 Упражнений после фильтрации:', filtered.length, 'из', EXERCISES_CATALOG.length);
    
    return filtered.map(ex => ({
        ...ex,
        // Если у упражнения нет icon - берём по категории
        icon: ex.icon || categoryIconMap[ex.category] || null,
        category: ex.category || 'Без категории',
        level: ex.level || '1 LVL'
    }));
}

let allExercisesList = [];
let currentCategoryFilter = 'all';
let currentSearchQuery = '';

function openExerciseList() {
    closeModal('addExerciseModal');
    
    // ★★★ СОХРАНЯЕМ НАЗВАНИЕ ПЕРЕД УХОДОМ ★★★
    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) {
            localStorage.setItem('temp_edit_name', nameInput.value);
        }
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
        const selectedIcon = document.querySelector('.icon-option-active');
        if (selectedIcon) localStorage.setItem('temp_edit_icon', selectedIcon.dataset.icon);
    }
    
    allExercisesList = getAllExercises();
    currentCategoryFilter = 'all';
    currentSearchQuery = '';
    document.getElementById('exerciseSearchInput').value = '';
    window.navigateTo('exercise-list');
}

// ===================РЕНДЕР СТРАНИЦЫ СПИСКА УПРАЖНЕНИЙ ===================
function renderExerciseListPage() {
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.classList.toggle('icon-option-active', el.dataset.category === currentCategoryFilter);
    });
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.onclick = function() {
            document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(e => e.classList.remove('icon-option-active'));
            this.classList.add('icon-option-active');
            currentCategoryFilter = this.dataset.category;
            renderExerciseListPageContent();
        };
    });
    
    // ★★★ НАСТРАИВАЕМ ПОИСК УПРАЖНЕНИЙ ★★★
    const searchInput = document.getElementById('exerciseSearchInput');
    const searchBtn = document.getElementById('searchExerciseBtn');
    
    if (searchBtn) {
        searchBtn.onclick = function() {
            currentSearchQuery = searchInput.value.trim().toLowerCase();
            renderExerciseListPageContent();
        };
    }
    
    if (searchInput) {
        searchInput.oninput = function() {
            currentSearchQuery = this.value.trim().toLowerCase();
            renderExerciseListPageContent();
        };
    }
    
    renderExerciseListPageContent();
}

function goBackToEditWorkout() {
    // ★★★ СОХРАНЯЕМ ВСЁ ПЕРЕД ВОЗВРАТОМ ★★★
    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) {
            localStorage.setItem('temp_edit_name', nameInput.value);
        }
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
        const selectedIcon = document.querySelector('.icon-option-active');
        if (selectedIcon) localStorage.setItem('temp_edit_icon', selectedIcon.dataset.icon);
    }
    
    window.navigateTo('workout-edit', {
        category: editCategory,
        isCustom: editIsCustom,
        id: editWorkoutId,
        level: editLevel,
        exercises: editExercises
    });
}

function renderExerciseListPageContent() {
    const container = document.getElementById('exerciseListContainer');
    const searchQuery = currentSearchQuery.toLowerCase();
    let filtered = allExercisesList;
    
    // Фильтр по категории
    if (currentCategoryFilter !== 'all') {
        filtered = filtered.filter(ex => ex.category === currentCategoryFilter);
    }
    
    // Поиск по названию
    if (searchQuery) {
        filtered = filtered.filter(ex => ex.name.toLowerCase().includes(searchQuery));
    }
    
    // ★★★ ФИЛЬТРУЕМ PREMIUM УПРАЖНЕНИЯ ★★★
    const premiumCategories = ['Кроссфит', 'Мужская сила', 'Женское счастье', 'Растяжка позвоночника', 'ГТО'];
    const hasPremiumAccess = hasPremium();  // ← проверяем актуальный статус
    
    if (!hasPremiumAccess) {
        filtered = filtered.filter(ex => !premiumCategories.includes(ex.category));
    }
    
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    if (filtered.length === 0) {
        let message = 'Упражнения не найдены';
        if (!hasPremiumAccess && currentCategoryFilter !== 'all' && premiumCategories.includes(currentCategoryFilter)) {
            message = 'PREMIUM упражнения недоступны. Купите PREMIUM, чтобы открыть их!';
        }
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📋</span><h3 class="empty-title">${message}</h3><p class="empty-text">По вашему запросу ничего не нашлось.</p></div>`;
        return;
    }
    
container.innerHTML = filtered.map(ex => {
    const icon = ex.icon || getExerciseIcon(ex.name);
    const isPremium = premiumCategories.includes(ex.category);
    const disabled = isPremium && !hasPremiumAccess;
    
    // ★★★ ФОРМИРУЕМ ОПИСАНИЕ С ВЕСОМ (ТОЛЬКО ЕСЛИ > 0) ★★★
    let detailsText = `${formatSets(ex.sets)} × ${formatReps(ex.reps)}`;
    if (hasWeight(ex) && ex.weight > 0) {
        detailsText += ` · ${ex.weight} кг`;
    }
    
    return `<div class="item-card ${disabled ? 'premium-locked' : ''}" onclick="${disabled ? 'openPremiumModal()' : `addExerciseFromList('${ex.name}', ${ex.sets}, '${ex.reps}')`}" style="${disabled ? 'opacity:0.6;' : ''}">
        <div class="item-icon" style="width:44px;height:44px;min-width:44px;border-radius:14px;display:flex;align-items:center;justify-content:center;${disabled ? 'background:#E2E8F0;' : ''}">
            ${icon ? `<img src="images/${icon}.png" style="width:28px;height:28px;object-fit:contain;${disabled ? 'filter:grayscale(1);' : ''}">` : ''}
        </div>
        <div class="item-info">
            <h3 class="item-title">${ex.name}</h3>
            <p class="item-desc">${detailsText}</p>
        </div>
        ${disabled ? '<span style="font-size:0.6rem;color:var(--gold);font-weight:700;padding:0.2rem 0.6rem;border:1px solid var(--gold);border-radius:4px;">PREMIUM</span>' : ''}
        <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
    </div>`;
}).join('');
}

// ===================ДОБАВЛЕНИЕ УПРАЖНЕНИЯ ===================
function openAddExerciseModal() {
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    if (editExercises.length >= maxExercises) {
        showToast(`⚠️ Вы достигли максимума упражнений ${maxExercises}!`);
        return;
    }
    
    // ★★★ СОХРАНЯЕМ СОСТОЯНИЕ ПЕРЕД ОТКРЫТИЕМ МОДАЛКИ ★★★
    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) {
            localStorage.setItem('temp_edit_name', nameInput.value);
        }
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
        const selectedIcon = document.querySelector('.icon-option-active');
        if (selectedIcon) localStorage.setItem('temp_edit_icon', selectedIcon.dataset.icon);
    }
    
    openModal('addExerciseModal');
}

function closeAddExerciseModal() {
    closeModal('addExerciseModal');
}

// ===================ДОБАВЛЕНИЕ УПРАЖНЕНИЯ ИЗ СПИСКА ===================
function addExerciseFromList(name, sets, reps) {
    const repsStr = String(reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    const repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
    const repsDisplay = isSeconds ? `${repsValue} секунд` : `${repsValue}`;
    
    let icon = null;
    let weight = 0; // ← ДОБАВЛЯЕМ ПЕРЕМЕННУЮ ДЛЯ ВЕСА
    
    if (typeof EXERCISES_CATALOG !== 'undefined') {
        const found = EXERCISES_CATALOG.find(e => e.name === name);
        if (found && found.icon) {
            icon = found.icon;
            weight = found.weight || 0; // ← ПОЛУЧАЕМ ВЕС ИЗ КАТАЛОГА
        } else if (found && found.category) {
            const categoryIconMap = {
                'Грудь': 'breast',
                'Спина': 'back',
                'Ноги': 'legs',
                'Плечи': 'shoulder',
                'Пресс': 'press',
                'Руки': 'bodybuilding',
                'Всё тело': 'WholeBody',
                'Кардио': 'cardio',
                'Растяжка': 'stretching',
                'Растяжка позвоночника': 'stretching',
                'Зарядка': 'charging',
                'Пилатес': 'Pilates',
                'Кроссфит': 'crossfit',
                'Мужская сила': 'men',
                'Женское счастье': 'woman'
            };
            icon = categoryIconMap[found.category] || null;
            weight = found.weight || 0; // ← ПОЛУЧАЕМ ВЕС ИЗ КАТАЛОГА
        }
    }
    
    // ★★★ ДОБАВЛЯЕМ ВЕС В УПРАЖНЕНИЕ ★★★
    editExercises.push({ 
        name: name, 
        sets: parseInt(sets) || 3, 
        reps: repsDisplay,
        icon: icon,
        weight: weight  // ← СОХРАНЯЕМ ВЕС
    });
    
    showToast('✅ Упражнение добавлено');

    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) localStorage.setItem('temp_edit_name', nameInput.value);
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
        
        const selectedIcon = document.querySelector('.icon-option-active');
        const iconToSave = selectedIcon ? selectedIcon.dataset.icon : 
                          (localStorage.getItem('temp_edit_icon') || null);
        localStorage.setItem('temp_edit_icon', iconToSave);
    }

    window.navigateTo('workout-edit', {
        category: editCategory,
        isCustom: editIsCustom,
        id: editWorkoutId,
        level: editLevel,
        exercises: editExercises
    });
}


// ===================ОФЛАЙН МОДАЛКА ===================
function showOfflineModal() {
    openModal('offlineModal');
}

function closeOfflineModal() {
    closeModal('offlineModal');
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('page-active')) {
        enterApp();
    }
}

window.addEventListener('offline', function() {
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('page-active')) return;
    const isInApp = document.getElementById('page-workouts').classList.contains('page-active') ||
                    document.getElementById('page-stats').classList.contains('page-active') ||
                    document.getElementById('page-profile').classList.contains('page-active');
    if (!isInApp) return;
    if (!isOfflineModalShown) {
        showOfflineModal();
        isOfflineModalShown = true;
    }
});

window.addEventListener('online', function() {
    closeOfflineModal();
    isOfflineModalShown = false;
    if (typeof syncPendingWorkouts === 'function') syncPendingWorkouts();
});

// ===================УВЕДОМЛЕНИЕ О РЕЙТИНГЕ ===================
function checkRankNotification(currentRank, type) {
    const key = type === 'world' ? LAST_WORLD_RANK_KEY : LAST_FRIENDS_RANK_KEY;
    const lastRank = parseInt(localStorage.getItem(key) || '0');
    
    // Проверяем, улучшился ли рейтинг
    if (currentRank < lastRank || lastRank === 0) {
        const rankText = currentRank <= 3 ? '🥇' : currentRank <= 10 ? '⭐' : '📈';
        const rankName = type === 'world' ? 'мировом' : 'дружеском';
        
        const id = `${type}_rank_${currentRank}_${Date.now()}`;
        if (!isNotificationSeen(id)) {
            // ★★★ ДЛЯ ОБОИХ ТИПОВ ОТКРЫВАЕМ СТАТИСТИКУ ★★★
            const okAction = function() {
                // Переключаемся на вкладку "world" в статистике
                switchStatsTab('world');
                window.navigateTo('stats');
                setTimeout(() => {
                    loadWorldLeaderboard();
                    loadFriendsLeaderboard();
                }, 300);
            };
            
            showNotification(
                rankText,
                `В ${rankName} рейтинге вы на ${currentRank} месте!`,
                null,
                true,  // autoClose
                okAction
            );
            markNotificationSeen(id);
        }
    }
    
    localStorage.setItem(key, String(currentRank));
}

// ===================МИРОВОЙ РЕЙТИНГ ===================
async function loadWorldLeaderboard() {
    const container = document.getElementById('worldLeaderboard');
    if (!container) return;
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Загрузка рейтинга...</div>';
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Авторизуйтесь, чтобы увидеть рейтинг</div>';
            return;
        }
        const snapshot = await firebase.firestore()
            .collection('users')
            .orderBy('totalXp', 'desc')
            .limit(30)
            .get();
        const users = [];
        snapshot.forEach(doc => { users.push({ id: doc.id, ...doc.data() }); });
        if (users.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Пока нет пользователей</div>';
            return;
        }
        
        const currentRank = users.findIndex(u => u.id === user.uid) + 1;
        if (currentRank > 0) {
            checkRankNotification(currentRank, 'world');
        }
        
        const visible = getAchievementsVisibility();
        
        container.innerHTML = users.map((userData, index) => {
            const position = index + 1;
            const achievements = userData.achievements || {};
            const isCurrentUser = userData.id === user.uid;
            const level = getCurrentLevel(userData.totalXp || 0).id;
            
            // ★★★ ОКРУГЛЯЕМ XP ДО ЦЕЛОГО ★★★
            const xpRounded = Math.round(userData.totalXp || 0);
            
            let infoHtml = '';
            if (visible) {
                const achievementIcons = [
                    { id: 'friendly', icon: 'fa-solid fa-user-group' },
                    { id: 'marathoner', icon: 'fa-solid fa-dumbbell' },
                    { id: 'unstoppable', icon: 'fa-solid fa-fire' },
                    { id: 'ironEndurance', icon: 'fa-solid fa-stopwatch' },
                    { id: 'masterOfStyles', icon: 'fa-solid fa-award' }
                ];
                infoHtml = achievementIcons.map(a => {
                    const unlocked = achievements[a.id] === true;
                    return `<span class="achievement-icon-top ${unlocked ? 'unlocked' : 'locked'}"><i class="${a.icon}"></i></span>`;
                }).join('');
            } else {
                infoHtml = `<span style="font-size:0.6rem; color:var(--slate);">Уровень ${level}</span>`;
            }
            
            return `<div class="item-card ${isCurrentUser ? 'current-user' : ''}">
                <div class="item-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:1rem;font-weight:700;color:var(--accent);">${position}</span>
                </div>
                <div class="item-info">
                    <h3 class="item-title">${userData.displayName || 'Пользователь'}</h3>
                    <p class="item-desc">${infoHtml}</p>
                </div>
                <div class="item-xp">${xpRounded} XP</div>
            </div>`;
        }).join('');
    } catch (error) {
        console.error('Ошибка загрузки рейтинга:', error);
        let message = 'Ошибка загрузки. Проверьте интернет.';
        if (error.code === 'failed-precondition' && error.message.includes('index')) {
            message = 'Для рейтинга требуется создать индекс в Firebase. Обратитесь к администратору.';
        }
        container.innerHTML = `<div style="text-align:center;color:#EF4444;padding:2rem 0;">${message}</div>`;
    }
}

// ===================РЕЙТИНГ ДРУЗЕЙ ===================
async function loadFriendsLeaderboard() {
    const container = document.getElementById('friendsLeaderboard');
    if (!container) {
        console.warn('Контейнер friendsLeaderboard не найден');
        return;
    }
    
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Загрузка рейтинга друзей...</div>';
    
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Авторизуйтесь, чтобы увидеть рейтинг друзей</div>';
            return;
        }

        const friendsResult = await getFriendsList();
        if (!friendsResult.success) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Ошибка загрузки друзей</div>';
            return;
        }

        const friends = friendsResult.data || [];

        const userProfileResult = await getUserProfile(user.uid);
        if (!userProfileResult.success) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Ошибка загрузки друзей</div>';
            return;
        }

        let allUsers = [
            { id: user.uid, ...userProfileResult.data, isCurrentUser: true }
        ];
        
        friends.forEach(friend => {
            allUsers.push({ ...friend, isCurrentUser: false });
        });

        allUsers.sort((a, b) => (b.totalXp || 0) - (a.totalXp || 0));

        const currentRank = allUsers.findIndex(u => u.id === user.uid) + 1;
        if (currentRank > 0) {
            checkRankNotification(currentRank, 'friends');
        }

        const visible = getAchievementsVisibility();

        let html = allUsers.map((userData, index) => {
            const position = index + 1;
            const isCurrentUser = userData.isCurrentUser;
            const name = userData.displayName || 'Пользователь';
            const achievements = userData.achievements || {};
            const level = getCurrentLevel(userData.totalXp || 0).id;
            
            // ★★★ ОКРУГЛЯЕМ XP ДО ЦЕЛОГО ★★★
            const xpRounded = Math.round(userData.totalXp || 0);
            
            let infoHtml = '';
            if (visible) {
                const achievementIcons = [
                    { id: 'friendly', icon: 'fa-solid fa-user-group' },
                    { id: 'marathoner', icon: 'fa-solid fa-dumbbell' },
                    { id: 'unstoppable', icon: 'fa-solid fa-fire' },
                    { id: 'ironEndurance', icon: 'fa-solid fa-stopwatch' },
                    { id: 'masterOfStyles', icon: 'fa-solid fa-award' }
                ];
                infoHtml = achievementIcons.map(a => {
                    const unlocked = achievements[a.id] === true;
                    return `<span class="achievement-icon-top ${unlocked ? 'unlocked' : 'locked'}"><i class="${a.icon}"></i></span>`;
                }).join('');
            } else {
                infoHtml = `<span style="font-size:0.6rem; color:var(--slate);">Уровень ${level}</span>`;
            }
            
            return `<div class="item-card ${isCurrentUser ? 'current-user' : ''}">
                <div class="item-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:1rem;font-weight:700;color:var(--accent);">${position}</span>
                </div>
                <div class="item-info">
                    <h3 class="item-title">${name}</h3>
                    <p class="item-desc">${infoHtml}</p>
                </div>
                <div class="item-xp">${xpRounded} XP</div>
            </div>`;
        }).join('');

        if (friends.length === 0) {
            html += `<div class="empty-state">
                <span class="empty-icon">👥</span>
                <h3 class="empty-title">Нет друзей</h3>
                <p class="empty-text">Добавьте друзей, чтобы соревноваться!</p>
            </div>`;
        }

        container.innerHTML = html;

    } catch (error) {
        console.error('Ошибка загрузки рейтинга друзей:', error);
        container.innerHTML = `<div style="text-align:center;color:#EF4444;padding:2rem 0;">Ошибка загрузки. Проверьте интернет.</div>`;
    }
}

// ===================ТОСТ ===================
function showToast(message, duration = 3000) {
    const oldToast = document.getElementById('toast');
    if (oldToast) oldToast.remove();
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}



// ===================ТУТОРИАЛ ===================
const TUTORIAL_KEY = 'tutorialCompleted';

function isTutorialCompleted() {
    return localStorage.getItem(TUTORIAL_KEY) === 'true';
}

function setTutorialCompleted() {
    localStorage.setItem(TUTORIAL_KEY, 'true');
}

let currentTutorialStep = 0;
let tutorialActive = false;

let _savedEditPagesState = true;
let _savedEditWorkoutState = true;

function startTutorial() {
    // ★★★ ПРОВЕРЯЕМ, НЕ ЗАВЕРШЕНО ЛИ ОБУЧЕНИЕ ★★★
    if (isTutorialCompleted()) {
        console.log('✅ Обучение уже завершено, пропускаем');
        return;
    }
    
    if (document.getElementById('tutorialOverlay')) return;

    // ★★★ УСТАНАВЛИВАЕМ ФЛАГ, ЧТОБЫ ЗАДАНИЯ НЕ ВЫПОЛНЯЛИСЬ ★★★
    tutorialActive = true;

    _savedEditPagesState = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    _savedEditWorkoutState = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';

    localStorage.setItem(EDIT_PAGES_KEY, 'true');
    localStorage.setItem(EDIT_WORKOUT_KEY, 'true');
    updateEditPagesUI(true);
    updateEditWorkoutUI(true);

    tutorialActive = true;
    document.addEventListener('click', blockClicksDuringTutorial, true);
    showTutorialStep(0);
}

// ★★★ НОВАЯ ФУНКЦИЯ ДЛЯ КНОПКИ ОБУЧЕНИЯ ★★★
function restartTutorial() {
    // Сбрасываем флаг завершения
    localStorage.removeItem(TUTORIAL_KEY);
    
    // Сбрасываем в Firestore
    const user = firebase.auth().currentUser;
    if (user) {
        firebase.firestore().collection('users').doc(user.uid).update({
            tutorialCompleted: false
        }).catch(() => {});
    }
    
    // Запускаем туториал
    startTutorial();
}

function blockClicksDuringTutorial(e) {
    if (!tutorialActive) return;
    const tooltip = document.querySelector('.tutorial-tooltip');
    if (tooltip && tooltip.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function scrollToElement(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - 100;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

function createTutorialOverlay(step) {
    const overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.className = 'tutorial-overlay';
    document.body.appendChild(overlay);

    let highlightElements = [];
    if (step.highlight) {
        if (Array.isArray(step.highlight)) {
            const elements = [];
            step.highlight.forEach(sel => {
                if (sel.startsWith('.')) {
                    document.querySelectorAll(sel).forEach(el => elements.push(el));
                } else {
                    const el = document.querySelector(sel);
                    if (el) elements.push(el);
                }
            });
            highlightElements = [...new Set(elements)];
        } else {
            const elements = document.querySelectorAll(step.highlight);
            highlightElements = Array.from(elements);
        }
        
        highlightElements.forEach(el => {
            el.classList.add('tutorial-highlight');
            
            // ★★★ ПРОХОДИМ ПО ВСЕМ РОДИТЕЛЯМ И УБИРАЕМ ОБРЕЗАНИЕ ★★★
            let parent = el.parentElement;
            while (parent && parent !== document.body) {
                parent.classList.add('tutorial-parent-visible');
                parent = parent.parentElement;
            }
        });
        
        setTimeout(() => {
            highlightElements.forEach(el => {
                el.classList.add('tutorial-highlight-active');
                setTimeout(() => el.classList.add('pulsing'), 100);
            });
        }, 50);
        overlay._highlightElements = highlightElements;
        if (highlightElements.length > 0) {
            setTimeout(() => scrollToElement(highlightElements[0]), 300);
        }
    }

    let dotsHtml = '';
    for (let i = 0; i < tutorialSteps.length; i++) {
        let dotClass = 'tutorial-dot';
        if (i < currentTutorialStep) {
            dotClass += ' tutorial-dot-active';
        } else if (i === currentTutorialStep) {
            dotClass += ' tutorial-dot-active';
        }
        dotsHtml += `<div class="${dotClass}"></div>`;
    }
    const isLast = step.isLast || false;
    const buttonText = isLast ? 'Начать тренироваться' : 'Понятно';

    const tooltip = document.createElement('div');
    tooltip.className = 'tutorial-tooltip';
    tooltip.id = 'tutorialTooltip';

    tooltip.style.position = 'fixed';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.zIndex = '10001';
    tooltip.style.maxWidth = '500px';
    tooltip.style.width = '90%';
    tooltip.style.bottom = '30px';
    tooltip.style.top = 'auto';

    tooltip.innerHTML = `
        <div class="tutorial-dots">${dotsHtml}</div>
        <p class="tutorial-text">${step.text}</p>
        <div class="tutorial-buttons">
            <button class="btn btn-primary" onclick="nextTutorialStep()">${buttonText}</button>
        </div>
    `;
    document.body.appendChild(tooltip);

    const autoSteps = [1, 9, 10, 14, 15, 16];
    const isAuto = autoSteps.includes(step.id) && highlightElements.length > 0;

    if (isAuto) {
        const targetEl = highlightElements[0];
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            const tooltipRect = tooltip.getBoundingClientRect();
            const tooltipHeight = tooltipRect.height;
            const rect = targetEl.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const isVisible = rect.top >= 0 && rect.bottom <= viewportHeight;
            if (!isVisible) {
                tooltip.style.bottom = '30px';
                tooltip.style.top = 'auto';
            } else {
                let topPosition = rect.top - tooltipHeight - 30;
                let fitsAbove = topPosition >= 10;
                if (fitsAbove) {
                    tooltip.style.top = topPosition + 'px';
                    tooltip.style.bottom = 'auto';
                } else {
                    tooltip.style.bottom = '30px';
                    tooltip.style.top = 'auto';
                }
            }
            tooltip.classList.add('tutorial-tooltip-active');
        }, 500);
    } else {
        setTimeout(() => {
            tooltip.classList.add('tutorial-tooltip-active');
        }, 200);
    }

    setTimeout(() => overlay.classList.add('tutorial-overlay-active'), 50);
}

function removeTutorialOverlay() {
    const overlay = document.getElementById('tutorialOverlay');
    if (overlay) {
        overlay.classList.remove('tutorial-overlay-active');
        if (overlay._highlightElements) {
            overlay._highlightElements.forEach(el => {
                el.classList.remove('tutorial-highlight-active', 'pulsing');
                setTimeout(() => el.classList.remove('tutorial-highlight'), 400);
            });
        }
        setTimeout(() => overlay.remove(), 500);
    }
    const tooltip = document.querySelector('.tutorial-tooltip');
    if (tooltip) {
        tooltip.classList.remove('tutorial-tooltip-active');
        setTimeout(() => tooltip.remove(), 400);
    }
}

function showTutorialStep(index) {
    if (index >= tutorialSteps.length) {
        finishTutorial();
        return;
    }
    const step = tutorialSteps[index];
    currentTutorialStep = index;
    if (step.page) window.navigateTo(step.page);
    if (step.action) setTimeout(() => step.action(), 600);
    setTimeout(() => createTutorialOverlay(step), 800);
}

function nextTutorialStep() {
    const nextIndex = currentTutorialStep + 1;
    removeTutorialOverlay();
    setTimeout(() => showTutorialStep(nextIndex), 400);
}

async function finishTutorial() {
    removeTutorialOverlay();
    setTutorialCompleted(); // ← Сохраняем в localStorage
    const user = await getFirebaseUser();
    if (user) await updateUserProfile(user.uid, { tutorialCompleted: true }); // ← Сохраняем в Firestore
    tutorialActive = false;
    document.removeEventListener('click', blockClicksDuringTutorial, true);

    localStorage.setItem(EDIT_PAGES_KEY, String(_savedEditPagesState));
    localStorage.setItem(EDIT_WORKOUT_KEY, String(_savedEditWorkoutState));
    updateEditPagesUI(_savedEditPagesState);
    updateEditWorkoutUI(_savedEditWorkoutState);

    setTimeout(showRulesModal, 600);
}

// =================== УМНЫЙ ШАГ ДЛЯ ТУТОРИАЛА ===================

function getTasksHighlight() {
    const isDaily = checkAllTasksCompleted();
    return isDaily 
        ? ['#daily-tasks-block', '#daily-tasks-block .section-header']
        : ['#tasks-block', '#tasks-block .section-header'];
}

function getTasksText() {
    const isDaily = checkAllTasksCompleted();
    return isDaily 
        ? 'Это ваши ежедневные задания.\nВыполняйте их каждый день, чтобы получать дополнительный опыт!\nЗадания обновляются ежедневно.'
        : 'Это ваши первые задания.\nВыполните все 5 заданий, чтобы открыть ежедневные задания!\nЗа каждое задание вы получаете +10 XP.';
}

const tutorialSteps = [
    {
        id: 1,
        page: 'workouts',
        highlight: '#bottomNav',
        text: 'Это главное меню, здесь есть три страницы:\nСтатистика, Тренировки и Профиль.',
        action: () => {
            activeWorkoutsTab = 'ready';
            applyWorkoutsTab('ready');
        }
    },
    {
        id: 2,
        page: 'stats',
        highlight: ['#page-stats .tab-btn[data-tab="personal"]', '#page-stats .tab-btn[data-tab="world"]'],
        text: 'Страница Статистики делится на два раздела:\nМировая и Личная.',
        action: () => { switchStatsTab('personal'); }
    },
    {
        id: 3,
        page: 'stats',
        highlight: ['#page-stats .tab-btn[data-tab="personal"]', '.stat-card'],
        text: 'В разделе "Личной статистики" собрана вся информация о ваших тренировках.\nКоличество тренировок, минут, упражнений, распределение по группам мышц и категориям, календарь и история - все в одном месте.'
    },
    {
        id: 4,
        page: 'stats',
        highlight: '#page-stats .tab-btn[data-tab="world"]',
        text: 'В разделе "Мировой статистики" вы можете увидеть рейтинг всех пользователей и отдельно рейтинг ваших друзей.',
        action: () => { switchStatsTab('world'); }
    },
    {
        id: 5,
        page: 'workouts',
        highlight: ['#page-workouts .tab-btn[data-tab="ready"]', '#page-workouts .tab-btn[data-tab="my"]'],
        text: 'Страница Тренировок делится на два раздела:\nГотовые и Личные.'
    },
    {
        id: 6,
        page: 'workouts',
        highlight: ['#page-workouts .tab-btn[data-tab="ready"]', '.item-card[data-category="Руки"]'],
        text: 'В разделе "Готовых тренировок" собраны тренировки для всех групп мышц.',
        action: () => {
            activeWorkoutsTab = 'ready';
            applyWorkoutsTab('ready');
        }
    },
    {
        id: 7,
        page: 'level-select',
        highlight: '.item-card',
        text: 'Каждая тренировка разделена на 3 уровня сложности.',
        action: () => {
            window.navigateTo('level-select', { category: 'Руки' });
        }
    },
    {
        id: 8,
        page: 'workout-detail',
        highlight: '.item-grid',
        text: 'После выбора уровня сложности вы видите полный список упражнений в этой тренировке.',
        action: () => {
            window.navigateTo('workout-detail', {
                category: 'Руки',
                level: '1 LVL',
                parentCategory: 'Силовые'
            });
        }
    },
    {
        id: 9,
        page: 'workout-detail',
        highlight: ['#coopInviteBtn', '#actionButton'],
        text: 'Вы можете начать тренировку один - кнопка "СТАРТ", или пригласить друзей для совместной тренировки - кнопка "Совместная".',
        action: () => {
            // Убедимся, что кнопки видны
            const inviteBtn = document.getElementById('coopInviteBtn');
            const actionBtn = document.getElementById('actionButton');
            if (inviteBtn) inviteBtn.style.display = 'block';
            if (actionBtn) actionBtn.style.display = 'block';
        }
    },
    {
        id: 10,
        page: 'workout-detail',
        highlight: '#editWorkoutBtn',
        text: 'Вы можете редактировать тренировку: менять ее название, добавлять новые упражнения, редактировать их и удалять.',
        action: () => {
            const editWorkoutBtn = document.getElementById('editWorkoutBtn');
            if (editWorkoutBtn) {
                editWorkoutBtn.style.display = 'block';
            }
        }
    },
    {
        id: 11,
        page: 'workouts',
        highlight: ['#page-workouts .tab-btn[data-tab="my"]', '.custom-workout .btn-primary'],
        text: 'В разделе "Личных тренировок" вы можете создавать свои собственные тренировки и редактировать их.',
        action: () => {
            activeWorkoutsTab = 'my';
            applyWorkoutsTab('my');
        }
    },
    {
        id: 12,
        page: 'profile',
        highlight: [ '.profile-tab-btn[data-tab="my"]', '.profile-tab-btn[data-tab="friends"]'],
        text: 'Страница Профиля делится на два раздела:\nМой и Друзья.'
    },
    {
        id: 13,
        page: 'profile',
        highlight: ['.profile-card'],
        text: 'Это ваш профиль, в нем есть система уровней.\nТренируйтесь, получайте XP и повышайте свой уровень.\nСоревнуйтесь с друзьями и другими пользователями!'
    },
{
    id: 14,
    page: 'profile',
    get highlight() {
        const isDaily = checkAllTasksCompleted();
        // ★★★ ВОЗВРАЩАЕМ CSS-СЕЛЕКТОР ДЛЯ НУЖНОГО БЛОКА ★★★
        return isDaily 
            ? '#daily-tasks-block .settings-block'
            : '#tasks-block .settings-block';
    },
    get text() {
        const isDaily = checkAllTasksCompleted();
        return isDaily 
            ? 'Это ваши ежедневные задания.\nВыполняйте их каждый день, чтобы получать дополнительный опыт!'
            : 'Это ваши первые задания.\nВыполните все 5 заданий, чтобы открыть ежедневные задания! За каждое задание вы получаете +10 XP.';
    },
    action: function() {
        const isDaily = checkAllTasksCompleted();
        
        if (isDaily) {
            // ★★★ РАСКРЫВАЕМ ЕЖЕДНЕВНЫЕ ЗАДАНИЯ ★★★
            const block = document.getElementById('daily-tasks-block');
            if (block) {
                block.classList.add('open');
                block.style.display = 'block';
                saveBlocksState();
            }
            // ★★★ СКРЫВАЕМ ПЕРВЫЕ ЗАДАНИЯ ★★★
            const tasksBlock = document.getElementById('tasks-block');
            if (tasksBlock) {
                tasksBlock.style.display = 'none';
            }
            renderDailyTasks();
        } else {
            // ★★★ РАСКРЫВАЕМ ПЕРВЫЕ ЗАДАНИЯ ★★★
            const block = document.getElementById('tasks-block');
            if (block) {
                block.classList.add('open');
                block.style.display = 'block';
                saveBlocksState();
            }
            // ★★★ СКРЫВАЕМ ЕЖЕДНЕВНЫЕ ЗАДАНИЯ ★★★
            const dailyBlock = document.getElementById('daily-tasks-block');
            if (dailyBlock) {
                dailyBlock.style.display = 'none';
            }
            updateTasksUI();
        }
    }
},
    
    {
        id: 15,
        page: 'profile',
        highlight: '#settings-block-main .settings-block',
        text: 'В дополнительных настройках вы можете настроить приложение под себя.'
    },
    {
        id: 16,
        page: 'profile',
        highlight: '#dangerSettings .settings-block',
        text: 'Здесь находятся важные настройки. Будьте внимательны - эти действия нельзя отменить.'
    },
    {
        id: 17,
        page: 'profile',
        highlight: ['.profile-tab-btn[data-tab="friends"]', '.friends-list-block'],
        text: 'Здесь вы можете находить друзей, отправлять им заявки и добавлять их в друзья. Также вы можете смотреть историю друзей, их выполненные тренировки и достижения.',
        action: () => {
            switchProfileTab('friends');
            renderFriendsInProfile();
        }
    },
    {
        id: 18,
        page: 'workouts',
        highlight: null,
        text: 'Желаем отличной тренировки! Если не знаете, с чего начать, начните с выполнения заданий.',
        isLast: true,
        action: () => {
            activeWorkoutsTab = 'ready';
            applyWorkoutsTab('ready');
        }
    }
];

// ===================PREMIUM ===================
const PREMIUM_KEY = 'sportapp_premium';

function hasPremium() {
    return localStorage.getItem(PREMIUM_KEY) === 'true';
}

// В функцию openPremiumModal() добавить:
function openPremiumModal() {
    // ★★★ ОБНОВЛЯЕМ СЧЕТЧИК ПРИ ОТКРЫТИИ МОДАЛКИ ★★★
    setTimeout(async () => {
        await updatePremiumCounter();
    }, 100);
    
    openModal('premiumModal');
}

function closePremiumModal() {
    closeModal('premiumModal');
}

function openPremiumActiveModal() {
    openModal('premiumActiveModal');
}

function closePremiumActiveModal() {
    closeModal('premiumActiveModal');
}

function buyPremium() {
    localStorage.setItem(PREMIUM_KEY, 'true');
    closePremiumModal();
    
    // ★★★ ОБНОВЛЯЕМ ВСЕ UI ЭЛЕМЕНТЫ ★★★
    updatePremiumUI();
    updateWeeklyLoadBlocks();
    
    // ★★★ ОБНОВЛЯЕМ СТРАНИЦУ ТРЕНИРОВОК (ЕСЛИ ОНА АКТИВНА) ★★★
    const workoutsPage = document.getElementById('page-workouts');
    if (workoutsPage && workoutsPage.classList.contains('page-active')) {
        if (typeof renderExerciseListPageContent === 'function') {
            renderExerciseListPageContent();
        }
        updatePremiumUI();
    }
    
    // ★★★ ОБНОВЛЯЕМ СТАТИСТИКУ (ЕСЛИ ОНА АКТИВНА) ★★★
    const statsPage = document.getElementById('page-stats');
    if (statsPage && statsPage.classList.contains('page-active')) {
        if (typeof loadPremiumStats === 'function') {
            loadPremiumStats();
        }
        updateWeeklyLoadBlocks();
    }
    
    // ★★★ ОБНОВЛЯЕМ СПИСОК УПРАЖНЕНИЙ (ЕСЛИ ОН ОТКРЫТ) ★★★
    const exerciseListPage = document.getElementById('page-exercise-list');
    if (exerciseListPage && exerciseListPage.classList.contains('page-active')) {
        if (typeof allExercisesList !== 'undefined') {
            allExercisesList = getAllExercises();
            renderExerciseListPageContent();
        }
    }
    
    // ★★★ СОХРАНЯЕМ PREMIUM В FIRESTORE И ОБНОВЛЯЕМ СЧЕТЧИК ★★★
    (async function() {
        const user = await getFirebaseUser();
        if (user) {
            await updateUserProfile(user.uid, { premium: true });
            console.log('✅ PREMIUM сохранен в Firestore');
            
            // ★★★ ОБНОВЛЯЕМ СЧЕТЧИК ★★★
            await updatePremiumCounter();
        }
    })();
    
    // ★★★ ПОКАЗЫВАЕМ УВЕДОМЛЕНИЕ ★★★
    showToast('👑 Поздравляем! PREMIUM активирован!');
    
    // ★★★ ОТКРЫВАЕМ МОДАЛКУ PREMIUM АКТИВИРОВАН ★★★
    setTimeout(() => openPremiumActiveModal(), 500);
}

function updatePremiumUI() {
    const premium = hasPremium();
    const statusEl = document.getElementById('premiumStatus');
    if (statusEl) {
        statusEl.textContent = premium ? 'Активирован' : 'Откройте все особые тренировки';
    }
    const icon = document.querySelector('.settings-item .fa-crown');
    if (icon) {
        icon.className = 'fa-solid fa-crown';
        icon.style.color = '#F7C948';
    }
    document.querySelectorAll('.item-card[data-premium="true"]').forEach(card => {
        card.style.display = 'flex';
    });
    updateWeeklyLoadBlocks();
}

function updateWeeklyLoadBlocks() {
    // Просто показываем блок, без проверки Premium
    const originalBlock = document.getElementById('weekly-load-block');
    if (originalBlock) {
        originalBlock.style.display = 'block';
    }
}

function checkPremiumAndNavigate(category) {
    if (!hasPremium()) {
        openModal('premiumModal');
        return;
    }
    window.navigateTo('level-select', { category: category });
}

function handlePremiumClick() {
    if (hasPremium()) {
        openModal('premiumActiveModal');
    } else {
        openModal('premiumModal');
    }
}

// ===================ВЫБОР ЦВЕТА ЧЕРЕЗ МОДАЛЬНОЕ ОКНО ===================
function openColorModal() {
    const currentColor = localStorage.getItem('themeColor') || 'red';
    const isCustom = localStorage.getItem('themeColorCustom') === 'true';
    
    // ★★★ СОХРАНЯЕМ ТЕКУЩИЙ ЦВЕТ КАК ВРЕМЕННЫЙ ★★★
    tempColor = currentColor;
    
    // ★★★ УБИРАЕМ КАСТОМНЫЕ CSS-ПЕРЕМЕННЫЕ ★★★
    document.body.style.removeProperty('--accent');
    document.body.style.removeProperty('--accent-dark');
    document.body.style.removeProperty('--accent-light');
    
    // ★★★ ПРИМЕНЯЕМ СТАНДАРТНЫЙ ЦВЕТ ЧЕРЕЗ КЛАСС ★★★
    if (!isCustom) {
        document.body.className = 'theme-' + currentColor;
    } else {
        // Если кастомный цвет - показываем его через переменные
        applyColorToTheme(currentColor);
    }
    
    const isDarkMode = localStorage.getItem('appThemeMode') === 'dark' || 
                      (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkMode) {
        document.body.classList.add('theme-dark-mode');
    }
    
    // ★★★ ОБНОВЛЯЕМ АКТИВНУЮ КНОПКУ ★★★
    document.querySelectorAll('.color-btn').forEach(btn => {
        const isActive = btn.dataset.color === currentColor;
        btn.classList.toggle('color-btn-active', isActive);
    });
    
    // ★★★ ОБНОВЛЯЕМ ПАЛИТРУ ★★★
    const picker = document.getElementById('customColorPicker');
    if (picker) {
        picker.value = currentColor.startsWith('#') ? currentColor : '#DC143C';
    }
    
    openModal('colorModal');
}

function closeColorModal() {
    closeModal('colorModal');
}

document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const color = this.dataset.color;
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('color-btn-active'));
        this.classList.add('color-btn-active');
        selectColor(color);  // ← ИСПРАВЛЕНО
        updateColorStatus(color);
    });
});

// ===================НАСТРОЙКИ РЕДАКТИРОВАНИЯ ===================
const EDIT_PAGES_KEY = 'editPagesEnabled';
const EDIT_WORKOUT_KEY = 'editWorkoutEnabled';

function loadEditSettings() {
    const pagesEnabled = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    updateEditPagesUI(pagesEnabled);

    const workoutEnabled = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';
    updateEditWorkoutUI(workoutEnabled);
}

function updateEditPagesUI(enabled) {
    const statusEl = document.getElementById('editPagesStatus');
    if (statusEl) statusEl.textContent = enabled ? 'Включено' : 'Выключено';

    const editStatsBtn = document.getElementById('editStatsBtn');
    const editWorkoutsBtn = document.getElementById('editWorkoutsBtn');
    
    if (editStatsBtn) editStatsBtn.style.display = enabled ? 'block' : 'none';
    if (editWorkoutsBtn) editWorkoutsBtn.style.display = enabled ? 'block' : 'none';
}

// ★★★ ФУНКЦИЯ ДЛЯ УПРАВЛЕНИЯ ВИДИМОСТЬЮ КНОПКИ РЕДАКТИРОВАНИЯ ДРУЗЕЙ ★★★
function updateFriendsEditButtonVisibility() {
    const pagesEnabled = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    const editFriendsBtn = document.getElementById('editFriendsBtn');
    if (!editFriendsBtn) return;
    
    if (!pagesEnabled) {
        editFriendsBtn.style.display = 'none';
        return;
    }
    
    const friendsTab = document.getElementById('profileTab-friends');
    if (friendsTab && friendsTab.classList.contains('profile-tab-content-active')) {
        editFriendsBtn.style.display = 'block';
    } else {
        editFriendsBtn.style.display = 'none';
    }
}

function updateEditWorkoutUI(enabled) {
    const statusEl = document.getElementById('editWorkoutStatus');
    if (statusEl) statusEl.textContent = enabled ? 'Включено' : 'Выключено';

    const editWorkoutBtn = document.getElementById('editWorkoutBtn');
    if (editWorkoutBtn) {
        const pageWorkoutDetail = document.getElementById('page-workout-detail');
        if (pageWorkoutDetail && pageWorkoutDetail.classList.contains('page-active')) {
            const isPremium = window._currentIsPremium || false;
            if (!enabled || isPremium) {
                editWorkoutBtn.style.display = 'none';
            } else {
                editWorkoutBtn.style.display = 'block';
            }
        }
    }
}

function toggleEditPages() {
    const current = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    const newState = !current;
    showConfirmModal(
        newState ? 'Включить ред. страниц?' : 'Выключить ред. страниц?',
        newState
            ? 'Кнопки "Редактировать страницу" снова появятся в статистике и тренировках.'
            : 'Кнопки "Редактировать страницу" будут скрыты в статистике и тренировках.',
        function() {
            localStorage.setItem(EDIT_PAGES_KEY, String(newState));
            updateEditPagesUI(newState);
            showToast(`✅ Редактирование страниц ${newState ? 'включено' : 'выключено'}`);
        },
        newState ? 'Включить' : 'Выключить'
    );
}

function toggleEditWorkout() {
    const current = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';
    const newState = !current;
    showConfirmModal(
        newState ? 'Включить ред. тренировок?' : 'Выключить ред. тренировок?',
        newState
            ? 'Кнопка "Редактировать тренировку" снова появится на странице деталей тренировки.'
            : 'Кнопка "Редактировать тренировку" будет скрыта на странице деталей тренировки.',
        function() {
            localStorage.setItem(EDIT_WORKOUT_KEY, String(newState));
            updateEditWorkoutUI(newState);
            showToast(`✅ Редактирование тренировок ${newState ? 'включено' : 'выключено'}`);
        },
        newState ? 'Включить' : 'Выключить'
    );
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('SportApp загружен!');
    
    // 1. Очистка сессионных данных
    shownThisSession.clear();
    
    // 2. PREMIUM UI
    updatePremiumUI();
    
    // 3. Синхронизация при наличии интернета
    if (navigator.onLine) {
        syncPendingWorkouts();
    }
    
    // ★★★ 4. ВОССТАНАВЛИВАЕМ КАСТОМНЫЙ ЦВЕТ ★★★
    const savedColor = localStorage.getItem('themeColor');
    const isCustom = localStorage.getItem('themeColorCustom') === 'true';
    
    if (isCustom && savedColor && savedColor.startsWith('#')) {
        applyColorToTheme(savedColor);
    } else {
        document.body.className = 'theme-' + (savedColor || 'red');
    }
    
    // ★★★ 5. ОБНОВЛЯЕМ СТАТУС ЦВЕТА ★★★
    const currentColor = localStorage.getItem('themeColor') || 'red';
    updateColorStatus(currentColor);

    // 6. Настройки редактирования
    loadEditSettings();
    
    // 7. Аккордеон
    initAccordion();

    // 8. Состояние блоков
    setTimeout(loadBlocksState, 1000);

    // 10. Применить сохраненный порядок
    applySavedWorldStatsOrder();
    
    // 11. Применяем сохранённые вкладки
    setTimeout(() => {
        TabManager.applyAll();
    }, 100);

    // ★★★ 12. ИНИЦИАЛИЗИРУЕМ ТЕМУ ★★★
    updateThemeUI();
    setupSystemThemeListener();

    // Загрузка настройки видимости достижений
    loadAchievementsVisibility();

    updateLanguageUI();

    // Загружаем задания
    loadTasks();
    loadDailyTasks();

    updateInventoryStatus();

    // Инициализация ежедневных заданий
    setTimeout(async () => {
        await initDailyTasks();
    }, 2000);

    setTimeout(() => {
        listenForInvites();
    }, 1000);
    
    setTimeout(() => {
        listenForFriendAcceptedNotifications();
    }, 1500);
    
    // ★★★ 13. ИНИЦИАЛИЗИРУЕМ ВЫБОР ВРЕМЕНИ ОТДЫХА ★★★
    initRestTimePicker();

    updateWeeklyLoadBlocks();

        // ★★★ ОБНОВЛЯЕМ СЧЕТЧИК ПРИ ЗАГРУЗКЕ ★★★
    setTimeout(async () => {
        await updatePremiumCounter();
    }, 3000);

        // ★★★ ПРОВЕРЯЕМ ПРОСРОЧЕННЫЕ АККАУНТЫ ПРИ ЗАГРУЗКЕ ★★★
    setTimeout(async () => {
        await checkAndDeleteExpiredAccounts();
    }, 2000);
    
    // ★★★ ПРОВЕРЯЕМ КАЖДЫЕ 60 СЕКУНД ★★★
    setInterval(async () => {
        await checkAndDeleteExpiredAccounts();
    }, 60000); // Каждую минуту
});

// ===================МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ С ПАРОЛЕМ ===================
function showConfirmWithPasswordModal(title, message, onConfirm, confirmText = 'Да') {
    const oldModal = document.getElementById('confirmModal');
    if (oldModal) oldModal.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">${title}</div>
            <p class="modal-text">${message}</p>
            <div class="form-group" style="text-align:left; margin-bottom:0.5rem;">
                <label class="form-label">Введите пароль</label>
                <input type="password" id="confirmPassword" class="form-input" placeholder="Пароль" autocomplete="new-password" />
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-danger" id="confirmYes" style="flex:1;">${confirmText}</button>
                <button class="btn btn-primary" id="confirmNo" style="flex:1;">Нет</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('confirmYes').addEventListener('click', async function() {
        const passwordInput = document.getElementById('confirmPassword');
        const password = passwordInput.value.trim();
        if (!password) {
            showToast('⚠️ Введите пароль');
            passwordInput.classList.add('error');
            return;
        }
        passwordInput.classList.remove('error');

        const user = await getFirebaseUser();
        if (!user) {
            showToast('❌ Пользователь не авторизован');
            overlay.remove();
            return;
        }

        try {
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
            await user.reauthenticateWithCredential(credential);
            overlay.remove();
            if (typeof onConfirm === 'function') onConfirm();
        } catch (error) {
            console.error('Ошибка аутентификации:', error);
            showToast('❌ Неверный пароль');
            overlay.remove();
        }
    });

    document.getElementById('confirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ (БЕЗ ПАРОЛЯ) ===================
function showConfirmModal(title, message, onConfirm, confirmText = 'Да') {
    const oldModal = document.getElementById('confirmModal');
    if (oldModal) oldModal.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirmModal';
    overlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-title">${title}</div>
            <p class="modal-text">${message}</p>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-danger" id="confirmYes" style="flex:1;">${confirmText}</button>
                <button class="btn btn-primary" id="confirmNo" style="flex:1;">Нет</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('confirmYes').addEventListener('click', function() {
        overlay.remove();
        if (typeof onConfirm === 'function') onConfirm();
    });

    document.getElementById('confirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================НЕВОЗВРАТНЫЕ НАСТРОЙКИ ===================
function confirmResetProgress() {
    showConfirmWithPasswordModal(
        'Сбросить прогресс?',
        'Это действие безвозвратно удалит статистику тренировок и обнулит прогресс.',
        resetProgress,
        'Сбросить'
    );
}

async function resetProgress() {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return;
    }

    try {
        showToast('✅ Прогресс сброшен');
        
        // ★★★ 1. Удаляем ВСЕ тренировки пользователя из Firestore ★★★
        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        if (workoutsResult.success) {
            const workouts = workoutsResult.data;
            for (const workout of workouts) {
                await firebase.firestore().collection('workouts').doc(workout.id).delete();
            }
            console.log(`✅ Удалено ${workouts.length} выполненных тренировок`);
        }

        // ★★★ 2. Удаляем ВСЕ активные сессии, где пользователь участник ★★★
        try {
            const sessionsSnapshot = await firebase.firestore()
                .collection('trainingSessions')
                .where('participants', 'array-contains', { id: user.uid })
                .get();
            
            const sessionDeletions = [];
            sessionsSnapshot.forEach(doc => {
                sessionDeletions.push(doc.ref.delete());
                console.log(`🗑️ Удалена сессия: ${doc.id}`);
            });
            
            if (sessionDeletions.length > 0) {
                await Promise.all(sessionDeletions);
                console.log(`✅ Удалено ${sessionDeletions.length} активных сессий`);
            } else {
                console.log('ℹ️ Нет активных сессий для удаления');
            }
        } catch (error) {
            console.warn('⚠️ Ошибка при удалении сессий:', error);
        }

        // ★★★ 3. Обнуляем XP в профиле ★★★
        await updateUserProfile(user.uid, { totalXp: 0 });

        // ★★★ 4. Сбрасываем достижения ★★★
        await updateUserProfile(user.uid, { achievements: {} });
        
        // ★★★ 5. Очищаем уведомления о достижениях ★★★
        for (const ach of ACHIEVEMENTS_CONFIG) {
            localStorage.removeItem('achievement_notified_' + ach.id);
        }

        // ★★★ 6. СОХРАНЯЕМ ТОЛЬКО PREMIUM И ЛОКАЛЬНЫЕ ТРЕНИРОВКИ ★★★
        const hasPremiumStatus = localStorage.getItem(PREMIUM_KEY) === 'true';
        const premiumValue = hasPremiumStatus ? 'true' : null;
        const localWorkouts = localStorage.getItem('myCustomWorkouts');

        // ★★★ 7. КЛЮЧИ, КОТОРЫЕ НУЖНО СОХРАНИТЬ (ТОЛЬКО PREMIUM И ТРЕНИРОВКИ) ★★★
        const keysToPreserve = [
            'sportapp_premium',      // PREMIUM — СОХРАНЯЕМ
            'myCustomWorkouts'       // Локальные тренировки — СОХРАНЯЕМ
        ];

        // Получаем значения перед очисткой
        const preservedData = {};
        keysToPreserve.forEach(key => {
            const value = localStorage.getItem(key);
            if (value !== null) {
                preservedData[key] = value;
            }
        });

        // ★★★ 8. ПОЛНОСТЬЮ ОЧИЩАЕМ localStorage ★★★
        localStorage.clear();

        // ★★★ СБРАСЫВАЕМ СЧЁТЧИК ТРЕНИРОВОК ★★★
        localStorage.removeItem(WORKOUTS_COUNT_KEY);
        localStorage.removeItem(PREMIUM_OFFER_SHOWN_KEY);

// ★★★ 9. ВОССТАНАВЛИВАЕМ ТОЛЬКО PREMIUM И ЛОКАЛЬНЫЕ ТРЕНИРОВКИ ★★★
for (const [key, value] of Object.entries(preservedData)) {
    localStorage.setItem(key, value);
}

// ★★★ ЯВНО УДАЛЯЕМ ПОРЯДКИ СТРАНИЦ ★★★
localStorage.removeItem('statsLayout');
localStorage.removeItem('workoutsLayout');
localStorage.removeItem('worldStatsLayout');
localStorage.removeItem('blocksState');

        console.log('✅ Сохранены: PREMIUM, локальные тренировки');
        console.log('🗑️ Удалены: statsLayout, workoutsLayout, worldStatsLayout, themeColor, appThemeMode, themeColorCustom и все остальные настройки');

        // ★★★ 10. Перезагружаем страницу ★★★
        setTimeout(() => {
            window.location.reload();
        }, 500);
        
    } catch (error) {
        console.error('❌ Ошибка сброса прогресса:', error);
        showToast('❌ Ошибка при сбросе прогресса: ' + error.message);
    }
}

function confirmDeleteAccount() {
    showConfirmWithPasswordModal(
        'Удалить аккаунт?',
        'Это действие безвозвратно удалит ваш профиль и все данные.',
        deleteAccount,
        'Удалить'
    );
}

async function deleteAccount() {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return;
    }

    try {
        await firebase.firestore().collection('users').doc(user.uid).delete();

        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        if (workoutsResult.success) {
            const workouts = workoutsResult.data;
            for (const workout of workouts) {
                await firebase.firestore().collection('workouts').doc(workout.id).delete();
            }
        }

        await user.delete();

        localStorage.clear();

        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        console.error('Ошибка удаления аккаунта:', error);
        if (error.code === 'auth/requires-recent-login') {
            showToast('⚠️ Для удаления аккаунта требуется повторный вход.');
            await firebase.auth().signOut();
        } else {
            showToast('❌ Ошибка при удалении аккаунта: ' + error.message);
        }
    }
}

// ===================УНИВЕРСАЛЬНАЯ СИСТЕМА РЕДАКТИРОВАНИЯ СТРАНИЦ ===================
class PageEditor {
    constructor(config) {
        this.pageId = config.pageId;
        this.storageKey = config.storageKey;
        this.defaultLayout = config.defaultLayout || {};
        this.containers = config.containers || [];
        this.isEditing = false;
        this.sortableInstances = [];
        this.backupLayout = null;
        this.blockedClickHandler = null;

        this.editBtn = document.getElementById(config.editBtnId);
        this.saveBtn = document.getElementById(config.saveBtnId);
        this.cancelBtn = document.getElementById(config.cancelBtnId);
        this.resetBtn = document.getElementById(config.resetBtnId);
        this.actionsContainer = document.getElementById(config.actionsId);

        this.init();
    }

    init() {
        this.loadLayout();
        this.bindEvents();
    }

    bindEvents() {
        if (this.editBtn) this.editBtn.addEventListener('click', () => this.enableEdit());
        if (this.saveBtn) this.saveBtn.addEventListener('click', () => this.save());
        if (this.cancelBtn) this.cancelBtn.addEventListener('click', () => this.cancel());
        if (this.resetBtn) this.resetBtn.addEventListener('click', () => this.reset());
    }

    loadLayout() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            try {
                const layout = JSON.parse(saved);
                this.applyLayout(layout);
                return;
            } catch (e) {}
        }
        this.applyLayout(this.defaultLayout);
    }

    applyLayout(layout) {
        this.containers.forEach(container => {
            const element = document.getElementById(container.id);
            if (!element) return;

            const items = layout[container.id] || [];
            if (items.length === 0) return;

            const childMap = {};
            Array.from(element.children).forEach(child => {
                const id = child.dataset[container.dataAttr];
                if (id) childMap[id] = child;
            });

            items.forEach(id => {
                if (childMap[id]) {
                    element.appendChild(childMap[id]);
                }
            });
        });
    }

    getCurrentLayout() {
        const layout = {};
        this.containers.forEach(container => {
            const element = document.getElementById(container.id);
            if (!element) return;

            const items = [];
            Array.from(element.children).forEach(child => {
                const id = child.dataset[container.dataAttr];
                if (id) items.push(id);
            });
            layout[container.id] = items;
        });
        return layout;
    }

enableEdit() {
    this.isEditing = true;
    this.backupLayout = this.getCurrentLayout();

    this.containers.forEach(container => {
        const element = document.getElementById(container.id);
        if (element) {
            element.classList.add('editing');
        }
    });

    this.editBtn.style.display = 'none';
    this.actionsContainer.style.display = 'flex';

    this.blockNavigation();
    this.initSortables();

    showToast('✏️ Режим редактирования включен');
}

// ★★★ НОВЫЙ МЕТОД ДЛЯ ПРЕДОТВРАЩЕНИЯ СКРОЛЛА ★★★
_preventScroll(e) {
    // Разрешаем скролл только если пользователь не перетаскивает
    if (!e.target.closest('.sortable-chosen') && !e.target.closest('.sortable-ghost')) {
        return;
    }
    e.preventDefault();
}

disableEdit(save = false) {
    this.isEditing = false;
    
    // ★★★ ВОССТАНАВЛИВАЕМ СКРОЛЛ ★★★
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';

    this.containers.forEach(container => {
        const element = document.getElementById(container.id);
        if (element) {
            element.classList.remove('editing');
        }
    });

    this.editBtn.style.display = 'block';
    this.actionsContainer.style.display = 'none';

    this.unblockNavigation();
    this.destroySortables();

    if (!save && this.backupLayout) {
        this.applyLayout(this.backupLayout);
        this.backupLayout = null;
        showToast('↩️ Изменения отменены');
    }
}


    save() {
        const layout = this.getCurrentLayout();
        localStorage.setItem(this.storageKey, JSON.stringify(layout));
        this.backupLayout = null;
        this.disableEdit(true);
        showToast('✅ Изменения применены');
    }

    cancel() {
        this.disableEdit(false);
    }

reset() {
    showConfirmModal(
        'Сбросить порядок?',
        'Вернуть стандартный порядок элементов?',
        () => {
            // 1. Удаляем сохранённый лейаут
            localStorage.removeItem(this.storageKey);
            
            // 2. Отключаем режим редактирования
            this.disableEdit(false);
            
            // 3. Применяем дефолтный лейаут
            this.applyLayout(this.defaultLayout);
            
            showToast('🔄 Порядок сброшен к стандартному');
        },
        'Сбросить'
    );
}

blockNavigation() {
    document.addEventListener('click', this.blockedClickHandler = (e) => {
        // ВСЕГДА пропускаем клики по модальным окнам и их элементам
        if (e.target.closest('.modal-overlay') || 
            e.target.closest('.modal-content') ||
            e.target.closest('#confirmModal')) {
            return;
        }

        // ★★★ ПРОПУСКАЕМ ВСЕ КНОПКИ РЕДАКТИРОВАНИЯ ★★★
        if (e.target.closest('#editStatsBtn') ||
            e.target.closest('#editWorkoutsBtn') ||
            e.target.closest('#statsEditActions') ||
            e.target.closest('#workoutsEditActions') ||
            e.target.closest('#saveStatsBtn') ||
            e.target.closest('#saveWorkoutsBtn') ||
            e.target.closest('#cancelStatsBtn') ||
            e.target.closest('#cancelWorkoutsBtn') ||
            e.target.closest('#resetStatsBtn') ||
            e.target.closest('#resetWorkoutsBtn')) {
            return;
        }

        // Разрешаем перетаскивание
        if (e.target.closest('.section-drag') ||
            e.target.closest('.sortable-ghost') ||
            e.target.closest('.sortable-chosen')) {
            return;
        }

        // Блокируем навигацию и клики по элементам
        if (e.target.closest('.nav-item') ||
            e.target.closest('.tab-btn') ||
            e.target.closest('.item-card') ||
            e.target.closest('.btn-primary') ||
            e.target.closest('.btn-secondary') ||
            e.target.closest('.btn-danger') ||
            e.target.closest('.custom-workout .btn-primary') ||
            e.target.closest('.friend-delete-btn') ||
            e.target.closest('.workout-delete') ||
            e.target.closest('#editProfileBtn') ||
            e.target.closest('.settings-item')) {
            e.preventDefault();
            e.stopPropagation();
            showToast('⚠️ Сначала завершите редактирование страницы');
            return false;
        }
    }, true);
}

    unblockNavigation() {
        if (this.blockedClickHandler) {
            document.removeEventListener('click', this.blockedClickHandler, true);
            this.blockedClickHandler = null;
        }
    }

initSortables() {
    this.containers.forEach(container => {
        const element = document.getElementById(container.id);
        if (!element) return;

        let handle = container.handle || '.section-drag';
        let filter = container.filter || null;
        
        if (['catalogGridStrength', 'catalogGridFitness', 'catalogGridPremium', 'myWorkoutsList'].includes(container.id)) {
            filter = '.workout-delete';
            handle = null;
        }

        if (container.id === 'statsSummary') {
            handle = '.stat-card';
        }
        if (container.id === 'exerciseMuscleStats' || container.id === 'categoriesStats') {
            handle = '.stat-item';
        }

        const s = new Sortable(element, {
            animation: 150,
            handle: handle,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            forceFallback: true,
            filter: filter,
            preventOnFilter: false,
            delay: 300,
            delayOnTouchOnly: true,
            touchStartThreshold: 10,
            scroll: true,
            scrollSensitivity: 50,
            scrollSpeed: 15,
            bubbleScroll: true
        });
        this.sortableInstances.push(s);
    });
}

    destroySortables() {
        this.sortableInstances.forEach(s => s.destroy());
        this.sortableInstances = [];
    }
}

// ===================ЕДИНЫЙ РЕДАКТОР СТАТИСТИКИ ===================
window.statsEditor = new PageEditor({
    pageId: 'page-stats',
    storageKey: 'statsLayout',
    editBtnId: 'editStatsBtn',
    saveBtnId: 'saveStatsBtn',
    cancelBtnId: 'cancelStatsBtn',
    resetBtnId: 'resetStatsBtn',
    actionsId: 'statsEditActions',
    containers: [
        // Личная статистика
        { id: 'statsSummary', dataAttr: 'statId', handle: '.stat-card' },
        { id: 'statsBlocksContainer', dataAttr: 'blockId', handle: '.section-drag' },
        { id: 'exerciseMuscleStats', dataAttr: 'muscleName', handle: '.stat-item' },
        { id: 'categoriesStats', dataAttr: 'categoryName', handle: '.stat-item' },
        // Мировая статистика
        { id: 'globalStatsContainer', dataAttr: 'statId', handle: '.stat-card' },  // ★ ДОБАВИЛИ
        { id: 'worldStatsBlocksContainer', dataAttr: 'blockId', handle: '.section-drag' }
    ],
    defaultLayout: {
        statsSummary: ['minutes', 'workouts', 'exercises'],
        statsBlocksContainer: ['muscles', 'categories', 'calendar', 'weekly-load', 'history', 'world-leaderboard', 'friends-leaderboard'],
        exerciseMuscleStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы'],
        categoriesStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'],
        globalStatsContainer: ['minutes', 'workouts', 'exercises'],  // ★ ДОБАВИЛИ
        worldStatsBlocksContainer: ['community-goal', 'community-achievements', 'world-leaderboard', 'friends-leaderboard']
    }
});
// ===================ЕДИНЫЙ РЕДАКТОР тренировок ===================
window.workoutsEditor = new PageEditor({
    pageId: 'page-workouts',
    storageKey: 'workoutsLayout',
    editBtnId: 'editWorkoutsBtn',
    saveBtnId: 'saveWorkoutsBtn',
    cancelBtnId: 'cancelWorkoutsBtn',
    resetBtnId: 'resetWorkoutsBtn',
    actionsId: 'workoutsEditActions',
    containers: [
        { id: 'workoutsBlocksContainer', dataAttr: 'blockId', handle: '.section-drag' },
        { id: 'catalogGridStrength', dataAttr: 'category' },
        { id: 'catalogGridFitness', dataAttr: 'category' },
        { id: 'catalogGridPremium', dataAttr: 'category' },
        { id: 'myWorkoutsList', dataAttr: 'workoutId', filter: '.workout-delete' }
    ],
    defaultLayout: getDefaultWorkoutsLayout()
});

document.getElementById('resetWorkoutsBtn')?.addEventListener('click', function() {
    showConfirmModal(
        'Сбросить порядок?',
        'Вернуть стандартный порядок элементов на странице тренировок?',
        function() {
            const defaultLayout = getDefaultWorkoutsLayout();
            saveWorkoutsLayout(defaultLayout);
            applySavedWorkoutsOrder();
            if (window.workoutsEditor) {
                window.workoutsEditor.destroySortables();
                window.workoutsEditor.initSortables();
            }
            showToast('🔄 Порядок сброшен к стандартному');
        },
        'Сбросить'
    );
});

document.getElementById('resetStatsBtn')?.addEventListener('click', function() {
    showConfirmModal(
        'Сбросить порядок?',
        'Вернуть стандартный порядок элементов на странице статистики?',
        function() {
            const defaultLayout = getDefaultStatsLayout();
            saveStatsLayout(defaultLayout);
            applySavedStatsOrder();
            if (window.statsEditor) {
                window.statsEditor.destroySortables();
                window.statsEditor.initSortables();
            }
            showToast('🔄 Порядок сброшен к стандартному');
        },
        'Сбросить'
    );
});

// ===================АККОРДЕОН ===================
function initAccordion() {
    document.querySelectorAll('.section-block').forEach(block => {
        const header = block.querySelector('.section-header');
        if (!header) return;

        if (header._accordionHandler) {
            header.removeEventListener('click', header._accordionHandler);
        }

        const handler = function(e) {
            if (e.target.closest('.section-drag')) return;
            block.classList.toggle('open');
        };

        header._accordionHandler = handler;
        header.addEventListener('click', handler);
    });
}

// ===================ОТКРЫТИЕ ВСЕХ БЛОКОВ ДЛЯ НОВЫХ ПОЛЬЗОВАТЕЛЕЙ ===================
function initProfileBlocks() {
    const isNewUser = localStorage.getItem('profileBlocksInitialized') !== 'true';
    if (isNewUser) {
        setTimeout(() => {
            const blocks = document.querySelectorAll('.section-block');
            blocks.forEach(block => block.classList.add('open'));
            localStorage.setItem('profileBlocksInitialized', 'true');
            saveBlocksState();
        }, 500);
    } else {
        setTimeout(loadBlocksState, 500);
    }
}

// ===================СОХРАНЕНИЕ СОСТОЯНИЯ БЛОКОВ ===================
function saveBlocksState() {
    const blocks = document.querySelectorAll('.section-block');
    const state = {};
    blocks.forEach((block, index) => {
        const id = block.dataset.blockId || index;
        state[id] = block.classList.contains('open');
    });
    localStorage.setItem('blocksState', JSON.stringify(state));
}

function loadBlocksState() {
    const saved = localStorage.getItem('blocksState');
    if (!saved) return;

    try {
        const state = JSON.parse(saved);
        const blocks = document.querySelectorAll('.section-block');
        blocks.forEach((block, index) => {
            const id = block.dataset.blockId || index;
            if (state[id] === true) {
                block.classList.add('open');
            }
        });
    } catch (e) {}
}

window.addEventListener('load', function() {
    setTimeout(loadBlocksState, 500);
});

// ===================СТРАНИЦА ФИНИШ ===================
function showFinishPage(exercisesCount, completedCount, seconds, xpEarned) {
    document.getElementById('finishExercises').textContent = `${completedCount}/${exercisesCount}`;
    
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('finishMinutes').textContent = `${mins}:${secs}`;
    document.getElementById('finishXp').textContent = '+' + xpEarned.toFixed(1) + ' XP';
    
    document.querySelectorAll('#finishStars i').forEach(star => star.classList.remove('active'));
    
    // ★★★ ВСЕГДА ОДНА КНОПКА "Закончить" ★★★
    const finishBtnContainer = document.querySelector('.finish-btn-container');
    if (!finishBtnContainer) {
        // Если контейнера нет — создаём
        const finishContent = document.querySelector('.finish-content');
        const oldBtn = document.getElementById('finishDoneBtn');
        if (oldBtn) oldBtn.remove();
        
        const container = document.createElement('div');
        container.className = 'finish-btn-container';
        container.style.cssText = 'display: flex; gap: 0.5rem; width: 100%; margin-top: 1rem;';
        finishContent.appendChild(container);
    }
    
    const container = document.querySelector('.finish-btn-container');
    container.innerHTML = '';
    
    const finishBtn = document.createElement('button');
    finishBtn.className = 'btn btn-primary finish-btn';
    finishBtn.id = 'finishDoneBtn';
    finishBtn.textContent = 'Закончить';

    finishBtn.onclick = function() {
        // ★★★ ЕСЛИ 0 УПРАЖНЕНИЙ — НЕ СОХРАНЯЕМ ★★★
        if (completedCount === 0) {
            showToast('⚠️ Выполнено 0 упражнений.');
            
            sessionExercises = [];
            sessionCompleted = new Set();
            sessionCompletedSets = {};
            sessionSeconds = 0;
            sessionWorkoutTitle = '';
            sessionCategory = '';
            sessionWorkoutIcon = null;
            
            window.navigateTo('workouts');
            return;
        }
        
        if (!preventDoubleClick('finishDoneBtn', 3000)) {
            showToast('⏳ Подождите, тренировка уже сохраняется...');
            return;
        }

        const btn = this;
        btn.disabled = true;
        btn.textContent = 'Закончить';
        btn.style.opacity = '1';

        // ★★★ УВЕЛИЧИВАЕМ СЧЁТЧИК ТРЕНИРОВОК ★★★
        const workoutsCount = incrementWorkoutsCount();
        const showPremium = shouldShowPremiumOffer();

        // ★★★ ОСТАВЛЯЕМ ОРИГИНАЛЬНУЮ ЛОГИКУ ★★★
        const xpText = document.getElementById('finishXp').textContent;
        const xpEarned2 = parseFloat(xpText) || 0;

        let finalCategory = sessionCategory;
        if (!finalCategory || finalCategory === 'Без категории') {
            const title = sessionWorkoutTitle || '';
            if (title.includes('Руки')) finalCategory = 'Руки';
            else if (title.includes('Плечи')) finalCategory = 'Плечи';
            else if (title.includes('Пресс')) finalCategory = 'Пресс';
            else if (title.includes('Грудь')) finalCategory = 'Грудь';
            else if (title.includes('Спина')) finalCategory = 'Спина';
            else if (title.includes('Ноги')) finalCategory = 'Ноги';
            else if (title.includes('Кардио')) finalCategory = 'Кардио';
            else if (title.includes('Растяжка')) finalCategory = 'Гибкость';
            else if (title.includes('Пилатес') || title.includes('Кроссфит') || title.includes('Всё тело')) finalCategory = 'Всё тело';
            else if (title.includes('Мужская сила') || title.includes('Женское счастье')) finalCategory = 'Ягодицы';
            else finalCategory = 'Без категории';
        }

        const workoutExercises = sessionExercises.map((ex, index) => ({
            ...ex,
            icon: ex.icon || null,
            completed: sessionCompleted.has(index)
        }));

        const workoutIcon = sessionWorkoutIcon || null;

        const workoutData = {
            title: sessionWorkoutTitle || 'Тренировка',
            date: new Date().toISOString(),
            durationSeconds: sessionSeconds,
            exercises: workoutExercises,
            xpEarned: xpEarned2,
            category: finalCategory,
            icon: workoutIcon
        };

        (async function() {
            const user = await getFirebaseUser();
            if (user) {
                const result = await saveWorkoutToFirestore(user.uid, workoutData);
                if (result.success) {
                    const profileResult = await getUserProfile(user.uid);
                    if (profileResult.success) {
                        const currentXp = profileResult.data.totalXp || 0;
                        await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned2 });
                    }
                    showToast('💾 Тренировка сохранена');
                    await updateAchievementsAfterWorkout();
                } else {
                    addPendingWorkout(workoutData);
                    showToast('⚠️ Тренировка сохранена локально, синхронизация позже');
                }
            } else {
                addPendingWorkout(workoutData);
                showToast('⚠️ Тренировка сохранена локально');
            }

            sessionExercises = [];
            sessionCompleted = new Set();
            sessionSeconds = 0;
            sessionWorkoutTitle = '';
            sessionCategory = '';
            sessionWorkoutIcon = null;

            // ★★★ ПЕРЕХОДИМ НА ТРЕНИРОВКИ ★★★
            window.navigateTo('workouts');

            // ★★★ ПОКАЗЫВАЕМ PREMIUM ЧЕРЕЗ НЕКОТОРОЕ ВРЕМЯ ★★★
            if (showPremium) {
                markPremiumOfferShown();
                setTimeout(() => {
                    openPremiumModal();
                }, 800);
            }
        })();
    };
    container.appendChild(finishBtn);
    
    window.navigateTo('finish');
}

// ===================ЗВЁЗДЫ ===================
document.querySelectorAll('#finishStars i').forEach(star => {
    star.addEventListener('click', function() {
        const value = parseInt(this.dataset.value);
        document.querySelectorAll('#finishStars i').forEach(s => {
            s.classList.toggle('active', parseInt(s.dataset.value) <= value);
        });
    });
});

// ===================КНОПКА "ЗАКОНЧИТЬ" ===================
document.getElementById('finishDoneBtn')?.addEventListener('click', async function() {
    if (!preventDoubleClick('finishDoneBtn', 3000)) {
        showToast('⏳ Подождите, тренировка уже сохраняется...');
        return;
    }

    const btn = this;
    btn.disabled = true;
    btn.textContent = 'Закончить';
    btn.style.opacity = '1';

    try {
        const xpText = document.getElementById('finishXp').textContent;
        const xpEarned = parseFloat(xpText) || 0;

        let finalCategory = sessionCategory;
        if (!finalCategory || finalCategory === 'Без категории') {
            const title = sessionWorkoutTitle || '';
            if (title.includes('Руки')) finalCategory = 'Руки';
            else if (title.includes('Плечи')) finalCategory = 'Плечи';
            else if (title.includes('Пресс')) finalCategory = 'Пресс';
            else if (title.includes('Грудь')) finalCategory = 'Грудь';
            else if (title.includes('Спина')) finalCategory = 'Спина';
            else if (title.includes('Ноги')) finalCategory = 'Ноги';
            else if (title.includes('Кардио')) finalCategory = 'Кардио';
            else if (title.includes('Растяжка')) finalCategory = 'Гибкость';
            else if (title.includes('Пилатес') || title.includes('Кроссфит') || title.includes('Всё тело')) finalCategory = 'Всё тело';
            else if (title.includes('Мужская сила') || title.includes('Женское счастье')) finalCategory = 'Ягодицы';
            else finalCategory = 'Без категории';
        }

        const workoutExercises = sessionExercises.map((ex, index) => ({
            ...ex,
            icon: ex.icon || null,
            completed: sessionCompleted.has(index)
        }));

        // ИКОНКА ТРЕНИРОВКИ — ИСПОЛЬЗУЕМ СОХРАНЁННУЮ В СЕССИИ
        const workoutIcon = sessionWorkoutIcon || null;

        const workoutData = {
            title: sessionWorkoutTitle || 'Тренировка',
            date: new Date().toISOString(),
            durationSeconds: sessionSeconds,
            exercises: workoutExercises,
            xpEarned: xpEarned,
            category: finalCategory,
            icon: workoutIcon
        };

        console.log('Сохраняем тренировку с иконкой:', workoutData.icon);

        const user = await getFirebaseUser();
        if (user) {
            const result = await saveWorkoutToFirestore(user.uid, workoutData);
            if (result.success) {
                const profileResult = await getUserProfile(user.uid);
                if (profileResult.success) {
                    const currentXp = profileResult.data.totalXp || 0;
                    await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
                }
                showToast('💾 Тренировка сохранена');
                await updateAchievementsAfterWorkout();
                await updateProfileStreak();
            } else {
                addPendingWorkout(workoutData);
                showToast('⚠️ Тренировка сохранена локально, синхронизация позже');
            }
        } else {
            addPendingWorkout(workoutData);
            showToast('⚠️ Тренировка сохранена локально');
        }

        sessionExercises = [];
        sessionCompleted = new Set();
        sessionSeconds = 0;
        sessionWorkoutTitle = '';
        sessionCategory = '';
        sessionWorkoutIcon = null;
        
        window.navigateTo('workouts');
        
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        showToast('❌ Ошибка сохранения тренировки');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Закончить';
        btn.style.opacity = '1';
    }
});

// =================== ПОЛУЧЕНИЕ ИКОНКИ УПРАЖНЕНИЯ ===================
function getExerciseIcon(exerciseName) {
    // ★★★ СНАЧАЛА ИЩЕМ В ОТДЕЛЬНОМ КАТАЛОГЕ ★★★
    if (typeof EXERCISES_CATALOG !== 'undefined') {
        const found = EXERCISES_CATALOG.find(e => e.name === exerciseName);
        if (found && found.icon) {
            return found.icon;
        }
    }
    
    // ★★★ ПОТОМ В exercisesData (как fallback) ★★★
    for (const parent in exercisesData) {
        if (typeof exercisesData[parent] === 'object') {
            for (const subCategory in exercisesData[parent]) {
                if (typeof exercisesData[parent][subCategory] === 'object') {
                    if (exercisesData[parent][subCategory]._premium) continue;
                    for (const level in exercisesData[parent][subCategory]) {
                        const levelData = exercisesData[parent][subCategory][level];
                        if (Array.isArray(levelData)) {
                            const found = levelData.find(e => e.name === exerciseName);
                            if (found && found.icon) return found.icon;
                        } else if (levelData && typeof levelData === 'object' && levelData._exercises) {
                            const found = levelData._exercises.find(e => e.name === exerciseName);
                            if (found && found.icon) return found.icon;
                        }
                    }
                }
            }
        }
    }
    
    // ★★★ ЕСЛИ НЕ НАШЛИ — ОПРЕДЕЛЯЕМ ПО КАТЕГОРИИ ★★★
    // Ищем категорию упражнения в каталоге
    if (typeof EXERCISES_CATALOG !== 'undefined') {
        const found = EXERCISES_CATALOG.find(e => e.name === exerciseName);
        if (found && found.category) {
            const categoryIconMap = {
                'Грудь': 'breast',
                'Спина': 'back',
                'Ноги': 'legs',
                'Плечи': 'shoulder',
                'Пресс': 'press',
                'Руки': 'bodybuilding',
                'Всё тело': 'WholeBody',
                'Кардио': 'cardio',
                'Растяжка': 'stretching',
                'Растяжка позвоночника': 'stretching',
                'Зарядка': 'charging',
                'Пилатес': 'Pilates',
                'Кроссфит': 'crossfit',
                'Мужская сила': 'men',
                'Женское счастье': 'woman'
            };
                        return categoryIconMap[found.category] || null;
        }
    }
    
    return null;
}

// =================== ФУНКЦИЯ ПОЛУЧЕНИЯ КАТЕГОРИИ ПО ИКОНКЕ ===================
function getCategoryByIcon(icon) {
    if (!icon) return null;
    return ICON_TO_CATEGORY[icon] || 'Без категории';
}

// ===================ПРОФИЛЬ ДРУГА ===================
let currentFriendId = null;
let currentFriendData = null;

async function openFriendProfile(friendId) {
    currentFriendId = friendId;
    
    try {
        const result = await getUserProfile(friendId);
        if (!result.success) {
            showToast('❌ Не удалось загрузить данные друга');
            return;
        }
        
        currentFriendData = result.data;
        
        const achievements = currentFriendData.achievements || {};
        updateAchievementsUI('friendAchievements', achievements);
        
        const visible = getAchievementsVisibility();
        const container = document.getElementById('friendAchievements');
        if (container) {
            container.classList.toggle('hidden', !visible);
        }
        
        let workouts = [];
        let totalSeconds = 0;
        let totalExercises = 0;
        
        try {
            const workoutsResult = await getUserWorkoutsFromFirestore(friendId);
            if (workoutsResult.success) {
                workouts = workoutsResult.data.filter(w => !(w.title || '').includes('Зарядка'));
                totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
                totalExercises = workouts.reduce((sum, w) => {
                    const completed = w.exercises?.filter(e => e.completed === true).length || 0;
                    return sum + completed;
                }, 0);
            }
        } catch (error) {
            console.warn('⚠️ Ошибка загрузки тренировок друга:', error);
        }
        
        const name = currentFriendData.displayName || 'Пользователь';
        document.getElementById('friendProfileName').textContent = name;
        document.getElementById('friendProfileEmail').textContent = currentFriendData.email || 'email не указан';
        
        const xp = currentFriendData.totalXp || 0;
        const currentLevel = getCurrentLevel(xp);
        const progress = getXpProgress(xp);
        const nextLevel = getNextLevel(xp);
        
        // ★★★ ОКРУГЛЯЕМ XP ДО ЦЕЛОГО ★★★
        const xpRounded = Math.round(xp);
        const progressText = nextLevel ? `${xpRounded}/${nextLevel.minXp} XP` : `${xpRounded}+ XP`;
        
        document.getElementById('friendLevelLvl').textContent = currentLevel.id + ' LVL';
        document.getElementById('friendLevelTitle').textContent = currentLevel.name;
        document.getElementById('friendLevelProgressText').textContent = progressText;
        document.getElementById('friendLevelFill').style.width = progress + '%';
        
        document.getElementById('friendTotalWorkouts').textContent = workouts.length;
        document.getElementById('friendTotalMinutes').textContent = Math.floor(totalSeconds / 60);
        document.getElementById('friendTotalExercises').textContent = totalExercises;
        
        openModal('friendProfileModal');
        
        checkDailyTasksAfterFriendProfile(friendId);
        
    } catch (error) {
        console.error('Ошибка загрузки профиля друга:', error);
        showToast('❌ Ошибка загрузки профиля друга');
    }
}

document.getElementById('friendProfileCloseBtn')?.addEventListener('click', function() {
    closeModal('friendProfileModal');
    currentFriendId = null;
    currentFriendData = null;
});

document.getElementById('friendRemoveBtn')?.addEventListener('click', function() {
    if (!currentFriendId || !currentFriendData) {
        showToast('❌ Данные друга не загружены');
        return;
    }
    
    const friendName = currentFriendData.displayName || 'Пользователь';
    
    showConfirmModal(
        'Удалить друга?',
        `Вы уверены, что хотите удалить ${friendName} из друзей?`,
        async function() {
            const result = await removeFriendFromList(currentFriendId);
            if (result.success) {
                closeModal('friendProfileModal');
                currentFriendId = null;
                currentFriendData = null;
                await renderFriendsInProfile();
                showToast(`✅ ${result.friendName || friendName} удалён из друзей`);
            }
        },
        'Удалить'
    );
});

async function removeFriendFromList(friendId) {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return false;
    }
    
    try {
        const friendProfile = await getUserProfile(friendId);
        const friendName = friendProfile.success ? friendProfile.data.displayName : 'Пользователь';
        
        // ★★★ ПРОВЕРЯЕМ, ЕСТЬ ЛИ ДРУГ В СПИСКЕ ★★★
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const currentFriends = userDoc.data()?.friends || [];
        
        if (!currentFriends.includes(friendId)) {
            showToast('⚠️ Этот пользователь уже не в друзьях');
            return false;
        }
        
        const updatedFriends = currentFriends.filter(id => id !== friendId);
        await firebase.firestore().collection('users').doc(user.uid).update({ friends: updatedFriends });
        
        const friendDoc = await firebase.firestore().collection('users').doc(friendId).get();
        const friendFriends = friendDoc.data()?.friends || [];
        const updatedFriendFriends = friendFriends.filter(id => id !== user.uid);
        await firebase.firestore().collection('users').doc(friendId).update({ friends: updatedFriendFriends });
        
        const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
        const updatedShown = shownFriendNotifications.filter(id => id !== friendId);
        localStorage.setItem('shownFriendNotifications', JSON.stringify(updatedShown));
        
        const prevFriends = JSON.parse(localStorage.getItem('prevFriendsList') || '[]');
        const updatedPrev = prevFriends.filter(f => f.id !== friendId);
        localStorage.setItem('prevFriendsList', JSON.stringify(updatedPrev));
        
        return { success: true, friendName: friendName };
    } catch (error) {
        console.error('Ошибка удаления друга:', error);
        
        // ★★★ ЕСЛИ ДРУГ УЖЕ УДАЛЁН ★★★
        if (error.code === 'not-found') {
            showToast('⚠️ Этот пользователь уже не в друзьях');
            await renderFriendsInProfile();
            return false;
        }
        
        showToast('❌ Ошибка при удалении друга');
        return false;
    }
}

// ===================ОБНОВЛЕНИЕ ТОЛЬКО СТРАНИЦ С УВЕДОМЛЕНИЯМИ ===================
function refreshNotificationData() {
    renderFriendsInProfile();
    loadWorldLeaderboard();
    loadFriendsLeaderboard();
    loadProfile();
    
    console.log('✅ Страницы с уведомлениями обновлены');
}

// =================== ЕДИНЫЙ ОБРАБОТЧИК ВСЕХ КЛИКОВ ===================
document.addEventListener('click', function(e) {
    // 1. Сохранение состояния блоков (аккордеон)
    const header = e.target.closest('.section-header');
    if (header) {
        const block = header.closest('.section-block');
        if (block) {
            setTimeout(saveBlocksState, 100);
        }
    }

    // 2. Клик по навигации (нижнее меню)
    const navItem = e.target.closest('.nav-item');
    if (navItem) {
        setTimeout(refreshNotificationData, 300);
        return;
    }
    
    // 3. Клик по ЛЮБОЙ вкладке (статистика, тренировки, профиль)
    const tabBtn = e.target.closest('.tab-btn, .profile-tab-btn');
    if (tabBtn) {
        const tab = tabBtn.dataset.tab;
        if (!tab) return;
        
        const page = tabBtn.closest('.page');
        if (!page) return;
        
        // ★★★ ПЕРЕКЛЮЧАЕМ ВКЛАДКИ ★★★
        if (page.id === 'page-workouts') {
            TabManager.workouts(tab);
        } else if (page.id === 'page-stats') {
            switchStatsTab(tab);   // ← ИСПОЛЬЗУЕМ switchStatsTab ВМЕСТО TabManager.stats
        } else if (page.id === 'page-profile') {
            TabManager.profile(tab);
        }
        
        // ★★★ ОБНОВЛЯЕМ УВЕДОМЛЕНИЯ ★★★
        setTimeout(refreshNotificationData, 300);
        return;
    }
    
    // 4. Кнопка "Завершить тренировку"
    const finishBtn = e.target.closest('#finishDoneBtn');
    if (finishBtn) {
        setTimeout(refreshNotificationData, 1000);
        return;
    }
});

// =================== МОДАЛЬНОЕ ОКНО "ПРАВИЛА" ===================

function showRulesModal() {
    // Сбрасываем все чекбоксы при открытии
    const checkboxes = document.querySelectorAll('#rulesModal .rule-checkbox');
    checkboxes.forEach(cb => cb.checked = false);
    
    openModal('rulesModal');
}

function areAllRulesChecked() {
    const checkboxes = document.querySelectorAll('#rulesModal .rule-checkbox');
    let allChecked = true;
    
    checkboxes.forEach(cb => {
        if (!cb.checked) {
            allChecked = false;
        }
    });
    
    return allChecked;
}

function handleRulesAccept() {
    if (areAllRulesChecked()) {
        // Все правила приняты - закрываем окно
        closeModal('rulesModal');
        showToast('✅ Спасибо за честность! Приятных тренировок!');
        console.log('✅ Все правила приняты, модальное окно закрыто');
    } else {
        // Не все правила приняты - показываем тост
        showToast('⚠️ Примите все правила, чтобы продолжить');
        console.log('⚠️ Не все правила приняты');
    }
}

// =================== ИНИЦИАЛИЗАЦИЯ ===================

// Привязываем обработчик к кнопке "Принять"
document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('rulesAcceptBtn');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', handleRulesAccept);
    }
});

// ★★★ ИСПРАВЛЕНО: переключение ТОЛЬКО по чекбоксу ★★★
// Убираем обработчик клика по тексту, оставляем только нативный change для чекбоксов
document.addEventListener('change', function(event) {
    if (event.target.classList.contains('rule-checkbox')) {
        // Чекбокс переключился автоматически
        console.log(`✅ Правило ${event.target.dataset.rule}: ${event.target.checked}`);
    }
});

// =================== УПРАВЛЕНИЕ ТЕМОЙ (СВЕТЛАЯ/ТЁМНАЯ/СИСТЕМНАЯ) ===================

// Ключ для localStorage
const THEME_MODE_KEY = 'appThemeMode';

// ★★★ ПЕРЕМЕННАЯ ДЛЯ ХРАНЕНИЯ ВРЕМЕННОГО ВЫБОРА ★★★
let tempTheme = null;

// ★★★ СЛУШАТЕЛЬ СИСТЕМНОЙ ТЕМЫ ★★★
let systemThemeListener = null;

/**
 * Получить текущую тему пользователя
 */
function getThemeMode() {
    return localStorage.getItem(THEME_MODE_KEY) || 'system';
}

/**
 * Получить системную тему (dark/light)
 */
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Определить, какая тема должна быть применена
 */
function getEffectiveTheme() {
    const mode = getThemeMode();
    if (mode === 'system') {
        return getSystemTheme();
    }
    return mode;
}

/**
 * Обновить UI в зависимости от темы
 */
function updateThemeUI() {
    const mode = getThemeMode();
    const effectiveTheme = getEffectiveTheme();
    
    const themeStatus = document.getElementById('themeStatus');
    const themeIcon = document.getElementById('themeIcon');
    const themeIconElement = themeIcon?.querySelector('i');
    
    // ★★★ ПРИМЕНЯЕМ КЛАСС К BODY ★★★
    document.body.classList.remove('theme-dark-mode');
    if (effectiveTheme === 'dark') {
        document.body.classList.add('theme-dark-mode');
    }
    
    // ★★★ ОБНОВЛЯЕМ СТАТУС В НАСТРОЙКАХ ★★★
    if (themeStatus) {
        if (mode === 'system') {
            themeStatus.textContent = `Системная`;
        } else {
            themeStatus.textContent = mode === 'light' ? 'Светлая' : 'Тёмная';
        }
    }
    
    // ★★★ ОБНОВЛЯЕМ ИКОНКУ ★★★
    if (themeIconElement) {
        if (mode === 'system') {
            themeIconElement.className = 'fa-solid fa-cloud-sun-rain';
        } else if (mode === 'light') {
            themeIconElement.className = 'fa-solid fa-sun';
        } else {
            themeIconElement.className = 'fa-solid fa-moon';
        }
    }
}

/**
 * Настроить слушатель системной темы
 */
function setupSystemThemeListener() {
    // Удаляем старый слушатель, если есть
    if (systemThemeListener) {
        systemThemeListener.removeEventListener('change', handleSystemThemeChange);
        systemThemeListener = null;
    }
    
    // Создаём новый слушатель
    systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeListener.addEventListener('change', handleSystemThemeChange);
}

/**
 * Обработчик изменения системной темы
 */
function handleSystemThemeChange(e) {
    const mode = getThemeMode();
    // Обновляем UI только если выбрана системная тема
    if (mode === 'system') {
        updateThemeUI();
        console.log(`🔄 Системная тема изменилась: ${e.matches ? 'Тёмная 🌙' : 'Светлая ☀️'}`);
    }
}

/**
 * Открыть модальное окно выбора темы
 */
function toggleThemeModal() {
    const currentTheme = getThemeMode();
    
    // ★★★ СОХРАНЯЕМ ТЕКУЩУЮ ТЕМУ КАК ВРЕМЕННУЮ ★★★
    tempTheme = currentTheme;
    
    // Убираем активный класс у всех вариантов
    document.querySelectorAll('.theme-option').forEach(el => {
        el.classList.remove('theme-option-active');
    });
    
    // Добавляем активный класс выбранной теме
    const selectedOption = document.querySelector(`.theme-option[data-theme="${currentTheme}"]`);
    if (selectedOption) {
        selectedOption.classList.add('theme-option-active');
    }
    
    openModal('themeModal');
}

/**
 * Выбрать тему (временно, без сохранения)
 */
function selectTheme(theme) {
    // ★★★ СОХРАНЯЕМ ТОЛЬКО В ВРЕМЕННУЮ ПЕРЕМЕННУЮ ★★★
    tempTheme = theme;
    
    // Обновляем выделение в модалке
    document.querySelectorAll('.theme-option').forEach(el => {
        el.classList.remove('theme-option-active');
    });
    
    const selectedOption = document.querySelector(`.theme-option[data-theme="${theme}"]`);
    if (selectedOption) {
        selectedOption.classList.add('theme-option-active');
    }
}

/**
 * ★★★ ПРИМЕНИТЬ ТЕМУ (ПРИ НАЖАТИИ "ГОТОВО") ★★★
 */
function applyTheme() {
    if (tempTheme) {
        const currentTheme = getThemeMode();
        
        // ★★★ ПРОВЕРЯЕМ, ИЗМЕНИЛАСЬ ЛИ ТЕМА ★★★
        if (tempTheme !== currentTheme) {
            // Тема реально изменилась - сохраняем
            localStorage.setItem(THEME_MODE_KEY, tempTheme);
            
            // ★★★ ОБНОВЛЯЕМ UI ★★★
            updateThemeUI();
            
            // ★★★ НАСТРАИВАЕМ СЛУШАТЕЛЬ ДЛЯ СИСТЕМНОЙ ТЕМЫ ★★★
            setupSystemThemeListener();
            
            // ★★★ ПОКАЗЫВАЕМ ТОСТ ТОЛЬКО ПРИ РЕАЛЬНОМ ИЗМЕНЕНИИ ★★★
            const themeName = tempTheme === 'system' ? 'Системную' : (tempTheme === 'light' ? 'Светлую' : 'Тёмную');
            showToast(`✅ Тема изменена на ${themeName}`);
            console.log(`✅ Применена тема: ${themeName}`);
        } else {
            console.log('ℹ️ Тема не изменилась');
        }
    }
    
    // Закрываем модалку
    closeModal('themeModal');
}

// =================== РЕДАКТИРОВАНИЕ ПОЧТЫ И ПАРОЛЯ ===================

/**
 * Редактирование почты
 */
function editEmail() {
    const user = firebase.auth().currentUser;
    if (!user) {
        showToast('❌ Вы не авторизованы');
        return;
    }
    
    const currentEmail = user.email || '';
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'editEmailModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">Изменить почту</div>
            <p class="modal-text" style="margin-bottom: 1rem;">
                Введите новый email. На него придёт письмо для подтверждения.
            </p>
            <div class="form-group" style="text-align:left; margin-bottom: 1rem;">
                <label class="form-label">Новая почта</label>
                <input type="email" id="newEmailInput" class="form-input" placeholder="example@mail.ru" value="${currentEmail}" maxlength="50" />
            </div>
            <div class="form-group" style="text-align:left; margin-bottom: 1rem;">
                <label class="form-label">Пароль для подтверждения</label>
                <input type="password" id="emailConfirmPassword" class="form-input" placeholder="Введите пароль" maxlength="20" />
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-secondary" id="editEmailCancel" style="flex:1;">Отмена</button>
                <button class="btn btn-primary" id="editEmailSave" style="flex:1;">Сохранить</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    document.getElementById('editEmailCancel').addEventListener('click', function() {
        overlay.remove();
    });
    
    document.getElementById('editEmailSave').addEventListener('click', async function() {
        const newEmail = document.getElementById('newEmailInput').value.trim();
        const password = document.getElementById('emailConfirmPassword').value.trim();
        
        const emailInput = document.getElementById('newEmailInput');
        const passwordInput = document.getElementById('emailConfirmPassword');
        
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');
        
        let hasError = false;
        let errorMessage = '';
        
        if (!newEmail) {
            emailInput.classList.add('error');
            hasError = true;
            errorMessage = 'Введите email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            emailInput.classList.add('error');
            hasError = true;
            errorMessage = 'Неверный формат email';
        }
        
        if (!password) {
            passwordInput.classList.add('error');
            hasError = true;
            if (!errorMessage) errorMessage = 'Введите пароль';
        }
        
        if (hasError) {
            showToast('⚠️ ' + errorMessage);
            return;
        }
        
        if (newEmail === currentEmail) {
            showToast('ℹ️ Почта не изменилась');
            return;
        }
        
        try {
            // ★★★ 1. ПЕРЕАУТЕНТИФИКАЦИЯ ★★★
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
            await user.reauthenticateWithCredential(credential);
            
            // ★★★ 2. СОХРАНЯЕМ СТАРЫЙ EMAIL (на всякий случай) ★★★
            const oldEmail = user.email;
            
            // ★★★ 3. ОТПРАВЛЯЕМ ПИСЬМО ПОДТВЕРЖДЕНИЯ ★★★
            await user.verifyBeforeUpdateEmail(newEmail);
            
            // ★★★ 4. СОХРАНЯЕМ ВРЕМЕННЫЕ ДАННЫЕ ★★★
            localStorage.setItem('pendingEmailChange', newEmail);
            localStorage.setItem('pendingEmailChangeTime', String(Date.now()));
            localStorage.setItem('pendingOldEmail', oldEmail);
            
            // ★★★ 5. ЗАКРЫВАЕМ ПЕРВУЮ МОДАЛКУ ★★★
            overlay.remove();
            
            // ★★★ 6. ПОКАЗЫВАЕМ МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ ★★★
            showEmailVerificationModal(newEmail);
            
        } catch (error) {
            console.error('Ошибка изменения почты:', error);
            
            let message = 'Ошибка изменения почты';
            
            switch (error.code) {
                case 'auth/invalid-credential':
                case 'auth/wrong-password':
                    message = 'Неверный пароль';
                    passwordInput.classList.add('error');
                    break;
                case 'auth/email-already-in-use':
                    message = 'Эта почта уже используется';
                    emailInput.classList.add('error');
                    break;
                case 'auth/requires-recent-login':
                    message = 'Требуется повторный вход. Выйдите и зайдите снова.';
                    break;
                case 'auth/network-request-failed':
                    message = 'Проверьте интернет-соединение';
                    break;
                case 'auth/too-many-requests':
                    message = 'Слишком много попыток. Подождите.';
                    break;
                case 'auth/invalid-email':
                    message = 'Неверный формат email';
                    emailInput.classList.add('error');
                    break;
                case 'auth/operation-not-allowed':
                    message = 'Операция запрещена. Обратитесь к администратору.';
                    break;
                default:
                    message = error.message || 'Ошибка изменения почты';
            }
            
            showToast('❌ ' + message);
        }
    });
}

/**
 * Показать модальное окно подтверждения почты
 */
function showEmailVerificationModal(newEmail) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'emailVerificationModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div style="text-align: center; margin-bottom: 0.5rem;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">📧</div>
                <div class="modal-title">Подтвердите почту</div>
                <p class="modal-text" style="margin-bottom: 1rem;">
                    Вам пришло письмо на <strong>${newEmail}</strong>
                </p>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-secondary" id="emailVerifyCancel" style="flex:1;">Отмена</button>
                <button class="btn btn-primary" id="emailVerifyConfirm" style="flex:1;">Продолжить</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // ★★★ КНОПКА "ОТМЕНА" - ВОЗВРАЩАЕМ СТАРУЮ ПОЧТУ ★★★
    document.getElementById('emailVerifyCancel').addEventListener('click', async function() {
        const oldEmail = localStorage.getItem('pendingOldEmail');
        const user = firebase.auth().currentUser;
        
        if (user && oldEmail) {
            try {
                // ★★★ ВОЗВРАЩАЕМ СТАРУЮ ПОЧТУ ★★★
                await user.updateEmail(oldEmail);
                await updateUserProfile(user.uid, { email: oldEmail });
                document.getElementById('profileEmailDisplay').textContent = oldEmail;
                showToast('✅ Почта возвращена на ' + oldEmail);
            } catch (error) {
                console.error('Ошибка возврата почты:', error);
                showToast('⚠️ Не удалось вернуть старую почту. Перезайдите в аккаунт.');
            }
        }
        
        localStorage.removeItem('pendingEmailChange');
        localStorage.removeItem('pendingEmailChangeTime');
        localStorage.removeItem('pendingOldEmail');
        overlay.remove();
    });
    
    // ★★★ КНОПКА "ПРОДОЛЖИТЬ" - ПРОВЕРЯЕМ ПОДТВЕРЖДЕНИЕ ★★★
    document.getElementById('emailVerifyConfirm').addEventListener('click', async function() {
        const btn = this;
        btn.disabled = true;
        btn.textContent = 'Проверка...';
        
        try {
            const user = firebase.auth().currentUser;
            
            if (!user) {
                showToast('❌ Пользователь не найден');
                btn.disabled = false;
                btn.textContent = 'Продолжить';
                return;
            }
            
            // ★★★ ПЕРЕЗАГРУЖАЕМ ПОЛЬЗОВАТЕЛЯ ★★★
            await user.reload();
            
            // ★★★ ПРОВЕРЯЕМ, ПОДТВЕРЖДЕНА ЛИ НОВАЯ ПОЧТА ★★★
            // ★★★ ВАЖНО: проверяем, что email совпадает с новым И подтверждён ★★★
            if (user.email === newEmail && user.emailVerified) {
                // ★★★ ПОЧТА ПОДТВЕРЖДЕНА - ОБНОВЛЯЕМ FIRESTORE ★★★
                try {
                    await updateUserProfile(user.uid, { email: newEmail });
                    document.getElementById('profileEmailDisplay').textContent = newEmail;
                    
                    localStorage.removeItem('pendingEmailChange');
                    localStorage.removeItem('pendingEmailChangeTime');
                    localStorage.removeItem('pendingOldEmail');
                    
                    overlay.remove();
                    showToast('✅ Почта успешно изменена на ' + newEmail);
                    
                } catch (error) {
                    console.error('Ошибка обновления профиля:', error);
                    showToast('❌ Ошибка обновления профиля');
                    btn.disabled = false;
                    btn.textContent = 'Продолжить';
                }
            } else {
                // ★★★ ПОЧТА НЕ ПОДТВЕРЖДЕНА ★★★
                showToast('⚠️ Подтвердите почту! Проверьте письмо');
                btn.disabled = false;
                btn.textContent = 'Продолжить';
            }
            
        } catch (error) {
            console.error('Ошибка проверки почты:', error);
            showToast('❌ Ошибка проверки почты');
            btn.disabled = false;
            btn.textContent = 'Продолжить';
        }
    });
}

/**
 * Редактирование пароля
 */
function editPassword() {
    const user = firebase.auth().currentUser;
    if (!user) {
        showToast('❌ Вы не авторизованы');
        return;
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'editPasswordModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">Изменить пароль</div>
            <p class="modal-text" style="margin-bottom: 1rem;">
                Введите текущий пароль и новый пароль.
            </p>
            <div class="form-group" style="text-align:left; margin-bottom: 0.8rem;">
                <label class="form-label">Текущий пароль</label>
                <input type="password" id="currentPasswordInput" class="form-input" placeholder="Введите текущий пароль" maxlength="20" />
            </div>
            <div class="form-group" style="text-align:left; margin-bottom: 0.8rem;">
                <label class="form-label">Новый пароль</label>
                <input type="password" id="newPasswordInput" class="form-input" placeholder="Минимум 6 символов" maxlength="20" />
            </div>
            <div class="form-group" style="text-align:left; margin-bottom: 1rem;">
                <label class="form-label">Подтвердите новый пароль</label>
                <input type="password" id="confirmPasswordInput" class="form-input" placeholder="Повторите новый пароль" maxlength="20" />
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-secondary" id="editPasswordCancel" style="flex:1;">Отмена</button>
                <button class="btn btn-primary" id="editPasswordSave" style="flex:1;">Сохранить</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    document.getElementById('editPasswordCancel').addEventListener('click', function() {
        overlay.remove();
    });
    
    document.getElementById('editPasswordSave').addEventListener('click', async function() {
        const currentPassword = document.getElementById('currentPasswordInput').value.trim();
        const newPassword = document.getElementById('newPasswordInput').value.trim();
        const confirmPassword = document.getElementById('confirmPasswordInput').value.trim();
        
        const currentInput = document.getElementById('currentPasswordInput');
        const newInput = document.getElementById('newPasswordInput');
        const confirmInput = document.getElementById('confirmPasswordInput');
        
        [currentInput, newInput, confirmInput].forEach(inp => inp.classList.remove('error'));
        
        let hasError = false;
        let errorMessage = '';
        
        if (!currentPassword) {
            currentInput.classList.add('error');
            hasError = true;
            errorMessage = 'Введите текущий пароль';
        }
        
        if (!newPassword || newPassword.length < 6) {
            newInput.classList.add('error');
            hasError = true;
            if (!errorMessage) errorMessage = 'Пароль должен быть минимум 6 символов';
        }
        
        if (newPassword !== confirmPassword) {
            confirmInput.classList.add('error');
            hasError = true;
            if (!errorMessage) errorMessage = 'Пароли не совпадают';
        }
        
        if (newPassword === currentPassword) {
            newInput.classList.add('error');
            hasError = true;
            if (!errorMessage) errorMessage = 'Новый пароль совпадает с текущим';
        }
        
        if (hasError) {
            showToast('⚠️ ' + errorMessage);
            return;
        }
        
        try {
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
            await user.reauthenticateWithCredential(credential);
            await user.updatePassword(newPassword);
            
            showToast('✅ Пароль обновлён!');
            overlay.remove();
            
        } catch (error) {
            console.error('Ошибка изменения пароля:', error);
            console.log('Код ошибки:', error.code);
            console.log('Сообщение:', error.message);
            
            let message = 'Ошибка изменения пароля';
            
            // ★★★ ОБНОВЛЁННАЯ ОБРАБОТКА ОШИБОК ★★★
            switch (error.code) {
                case 'auth/invalid-credential':
                case 'auth/wrong-password':
                    message = 'Неверный текущий пароль';
                    currentInput.classList.add('error');
                    break;
                case 'auth/requires-recent-login':
                    message = 'Требуется повторный вход. Выйдите и зайдите снова.';
                    break;
                case 'auth/weak-password':
                    message = 'Пароль слишком простой. Минимум 6 символов.';
                    newInput.classList.add('error');
                    break;
                case 'auth/network-request-failed':
                    message = 'Проверьте интернет-соединение';
                    break;
                case 'auth/too-many-requests':
                    message = 'Слишком много попыток. Подождите.';
                    break;
                case 'auth/user-not-found':
                    message = 'Пользователь не найден';
                    break;
                default:
                    message = error.message || 'Ошибка изменения пароля';
            }
            
            showToast('❌ ' + message);
        }
    });
}
// =================== ДОСТИЖЕНИЯ ===================
const ACHIEVEMENTS_CONFIG = [
    {
        id: 'friendly',
        icon: 'fa-solid fa-user-group',
        name: 'Дружелюбный',
        description: 'Добавить 10 человек в друзья',
        check: async (userId, profile, workouts) => {
            const friends = profile.friends || [];
            return friends.length >= 10;
        }
    },
    {
        id: 'marathoner',
        icon: 'fa-solid fa-dumbbell',
        name: 'Марафонец',
        description: 'Выполнить 100 тренировок',  // ← ИЗМЕНЕНО (было 50)
        check: async (userId, profile, workouts) => {
            const filtered = workouts.filter(w => {
                const icon = getWorkoutIcon(w);
                return icon && icon !== 'charging';
            });
            return filtered.length >= 100;  // ← ИЗМЕНЕНО (было 50)
        }
    },
    {
        id: 'unstoppable',
        icon: 'fa-solid fa-fire',
        name: 'Неудержимый',
        description: 'Выполнить 21 дневную серию тренировок',  // ← ИЗМЕНЕНО (было 14)
        check: async (userId, profile, workouts) => {
            const streak = profile.streakDays || 0;
            return streak >= 21;  // ← ИЗМЕНЕНО (было 14)
        }
    },
    {
        id: 'ironEndurance',
        icon: 'fa-solid fa-stopwatch',
        name: 'Железная выдержка',
        description: 'Тренироваться 1000 минут суммарно',
        check: async (userId, profile, workouts) => {
            const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
            const minutes = Math.floor(totalSeconds / 60);
            return minutes >= 1000;
        }
    },
    {
        id: 'masterOfStyles',
        icon: 'fa-solid fa-award',
        name: 'Мастер всех стилей',
        description: 'Выполнить по 10 тренировок в каждой категорий',
        check: async (userId, profile, workouts) => {
            const categories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
            const counts = {};
            categories.forEach(c => counts[c] = 0);
            workouts.forEach(w => {
                const icon = getWorkoutIcon(w);
                const cat = getCategoryByIcon(icon);
                if (cat && counts[cat] !== undefined) {
                    counts[cat] = (counts[cat] || 0) + 1;
                }
            });
            return categories.every(c => (counts[c] || 0) >= 10);
        }
    }
];

// =================== ДОСТИЖЕНИЯ ===================
async function checkAllAchievements(userId) {
    try {
        // Получаем профиль и тренировки
        const profileResult = await getUserProfile(userId);
        if (!profileResult.success) return null;
        const profile = profileResult.data;
        const workoutsResult = await getUserWorkoutsFromFirestore(userId);
        const workouts = workoutsResult.success ? workoutsResult.data : [];

        // Проверяем каждое достижение
        const results = {};
        for (const ach of ACHIEVEMENTS_CONFIG) {
            const unlocked = await ach.check(userId, profile, workouts);
            results[ach.id] = unlocked;
        }

        // Обновляем Firestore
        const currentAchievements = profile.achievements || {};
        let changed = false;
        let newUnlocked = [];
        for (const id in results) {
            if (currentAchievements[id] !== results[id]) {
                changed = true;
                // Если стало true (было false) - новое достижение
                if (results[id] === true && currentAchievements[id] !== true) {
                    newUnlocked.push(id);
                }
                currentAchievements[id] = results[id];
            }
        }
        if (changed) {
            await updateUserProfile(userId, { achievements: currentAchievements });
            
    // ★★★ ПОКАЗЫВАЕМ УВЕДОМЛЕНИЯ И СОХРАНЯЕМ СОБЫТИЯ ДЛЯ НОВЫХ ДОСТИЖЕНИЙ ★★★
    for (const id of newUnlocked) {
        const ach = ACHIEVEMENTS_CONFIG.find(a => a.id === id);
        if (ach) {
            // Сохраняем событие о новом достижении
            await saveUserEvent(userId, 'achievement_unlocked', {
                achievementId: ach.id,
                achievementName: ach.name,
                achievementIcon: ach.icon
            });
            
            // Показываем уведомление
            showAchievementNotification(id);
        }
    }
        }

        return results;
    } catch (error) {
        console.error('Ошибка проверки достижений:', error);
        return null;
    }
}

function renderAchievements() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const visible = getAchievementsVisibility();
    const container = document.getElementById('achievementsContainer');
    if (container) {
        container.classList.toggle('hidden', !visible);
    }
    if (!visible) return;

    getUserProfile(user.uid).then(result => {
        if (!result.success) return;
        const achievements = result.data.achievements || {};
        const icons = document.querySelectorAll('.achievement-icon');
        icons.forEach(el => {
            const id = el.dataset.achievement;
            const unlocked = achievements[id] === true;
            el.classList.remove('unlocked', 'locked');
            el.classList.add(unlocked ? 'unlocked' : 'locked');
        });
    });
}

function openAchievementsModal() {
    const user = firebase.auth().currentUser;
    if (!user) {
        showToast('⚠️ Авторизуйтесь, чтобы увидеть достижения');
        return;
    }
    getUserProfile(user.uid).then(async (result) => {
        if (!result.success) return;
        const profile = result.data;
        const achievements = profile.achievements || {};
        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        const workouts = workoutsResult.success ? workoutsResult.data : [];

        // Собираем прогресс для каждого достижения
        const progressList = [];
        for (const ach of ACHIEVEMENTS_CONFIG) {
            let progress = '';
            let isUnlocked = achievements[ach.id] === true;
            // Для каждого достижения вычисляем прогресс (для отображения в модалке)
switch (ach.id) {
    case 'friendly': {
        const friends = profile.friends || [];
        progress = `${friends.length}/10`;
        break;
    }
    case 'marathoner': {
        const filtered = workouts.filter(w => getWorkoutIcon(w) !== 'charging');
        progress = `${filtered.length}/100`;  // ← ИЗМЕНЕНО (было /50)
        break;
    }
    case 'unstoppable': {
        const streak = profile.streakDays || 0;
        progress = `${streak}/21`;  // ← ИЗМЕНЕНО (было /14)
        break;
    }
    case 'ironEndurance': {
        const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
        const minutes = Math.floor(totalSeconds / 60);
        progress = `${minutes}/1000`;
        break;
    }
    case 'masterOfStyles': {
        const categories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        const counts = {};
        categories.forEach(c => counts[c] = 0);
        workouts.forEach(w => {
            const icon = getWorkoutIcon(w);
            const cat = getCategoryByIcon(icon);
            if (cat && counts[cat] !== undefined) {
                counts[cat] = (counts[cat] || 0) + 1;
            }
        });
        const done = categories.filter(c => (counts[c] || 0) >= 10).length;
        progress = `${done}/${categories.length}`;
        break;
    }
    default: progress = '';
}
            progressList.push({
                ...ach,
                unlocked: isUnlocked,
                progress: progress
            });
        }

// Рендерим модалку
const list = document.getElementById('achievementsList');
if (!list) return;
list.innerHTML = progressList.map(ach => `
    <div class="achievement-modal-item">
        <div class="achievement-modal-icon ${ach.unlocked ? 'unlocked' : 'locked'}">
            <i class="${ach.icon}"></i>
        </div>
        <div class="achievement-modal-info">
            <div class="achievement-modal-name">${ach.name}</div>
            <div class="achievement-modal-desc">${ach.description}</div>
        </div>
        <div class="achievement-modal-progress">
            <div class="achievement-modal-progress-text ${ach.unlocked ? 'unlocked' : 'locked'}">
                ${ach.progress}
            </div>
        </div>
    </div>
`).join('');

        openModal('achievementsModal');
    });
}

// Обёртка для вызова проверки достижений после завершения тренировки
async function updateAchievementsAfterWorkout() {
    const user = await getFirebaseUser();
    if (!user) return;
    await checkAllAchievements(user.uid);
    renderAchievements();
}

// =================== УВЕДОМЛЕНИЕ О ДОСТИЖЕНИИ ===================
function showAchievementNotification(achievementId) {
    const ach = ACHIEVEMENTS_CONFIG.find(a => a.id === achievementId);
    if (!ach) return;
    
    // Проверяем, не показывали ли уже уведомление для этого достижения
    const notificationKey = 'achievement_notified_' + achievementId;
    if (localStorage.getItem(notificationKey) === 'true') return;
    
    // Показываем уведомление
    showNotification(
        '🏆',
        `Новое достижение: ${ach.name}!`,
        null,
        true,
        function() {
            window.navigateTo('profile');
            TabManager.profile('my');
        }
    );
    
    // Отмечаем, что уведомление показано
    localStorage.setItem(notificationKey, 'true');
}

// =================== НАСТРОЙКА: СКРЫТИЕ ДОСТИЖЕНИЙ ===================
const ACHIEVEMENTS_VISIBILITY_KEY = 'achievementsVisible';

function getAchievementsVisibility() {
    return localStorage.getItem(ACHIEVEMENTS_VISIBILITY_KEY) !== 'false';
}

function updateAchievementsVisibilityUI(visible) {
    const statusEl = document.getElementById('achievementsStatus');
    if (statusEl) {
        statusEl.textContent = visible ? 'Показаны' : 'Скрыты';
    }
    const container = document.getElementById('achievementsContainer');
    if (container) {
        container.classList.toggle('hidden', !visible);
    }
}

function loadAchievementsVisibility() {
    const visible = getAchievementsVisibility();
    updateAchievementsVisibilityUI(visible);
}

function toggleAchievementsVisibility() {
    const current = getAchievementsVisibility();
    const newState = !current;

    showConfirmModal(
        newState ? 'Показать достижения в профиле?' : 'Скрыть достижения в профиле?',
        newState
            ? 'Достижения снова появятся в вашем профиле, и профиле друзей.'
            : 'Достижения будут скрыты в вашем профиле, и профиле друзей.',
        function() {
            localStorage.setItem(ACHIEVEMENTS_VISIBILITY_KEY, String(newState));
            updateAchievementsVisibilityUI(newState);
            showToast(`✅ Достижения ${newState ? 'показаны' : 'скрыты'}`);
        },
        newState ? 'Показать' : 'Скрыть'
    );
}

// =================== ОБНОВЛЕНИЕ ДОСТИЖЕНИЙ В ЛЮБОМ КОНТЕЙНЕРЕ ===================
function updateAchievementsUI(containerId, achievements) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn('Контейнер ' + containerId + ' не найден');
        return;
    }
    // Получаем все иконки достижений внутри контейнера
    const icons = container.querySelectorAll('.achievement-icon');
    icons.forEach(el => {
        const id = el.dataset.achievement;
        const unlocked = achievements && achievements[id] === true;
        el.classList.remove('unlocked', 'locked');
        el.classList.add(unlocked ? 'unlocked' : 'locked');
    });
}

function openLevelInfoModal() {
    const user = firebase.auth().currentUser;
    if (!user) {
        showToast('❌ Авторизуйтесь');
        return;
    }
    getUserProfile(user.uid).then(result => {
        if (!result.success) return;
        const profile = result.data;
        const xp = profile.totalXp || 0;
        const currentLevel = getCurrentLevel(xp);
        const progress = getXpProgress(xp);
        const nextLevel = getNextLevel(xp);
        
        // ★★★ ОКРУГЛЯЕМ XP ДО ЦЕЛОГО ★★★
        const xpRounded = Math.round(xp);
        const progressText = nextLevel ? `${xpRounded}/${nextLevel.minXp} XP` : `${xpRounded}+ XP`;

        document.getElementById('levelInfoLvl').textContent = currentLevel.id + ' LVL';
        document.getElementById('levelInfoTitle').textContent = currentLevel.name;
        document.getElementById('levelInfoProgress').textContent = progressText;
        document.getElementById('levelInfoFill').style.width = progress + '%';

        openModal('levelInfoModal');
    });
}

document.getElementById('levelInfoOkBtn')?.addEventListener('click', function() {
    closeModal('levelInfoModal');
    openAchievementsModal();
});

// ===== ЕЖЕДНЕВНЫЕ ЗАДАНИЯ =====
let dailyTasks = { 1: false, 2: false, 3: false };

// Сохранить состояние ежедневных заданий в localStorage
function saveDailyTasks() {
    localStorage.setItem(DAILY_TASKS_KEY, JSON.stringify(dailyTasks));
}

// Загрузить состояние ежедневных заданий из localStorage
function loadDailyTasks() {
    const saved = localStorage.getItem(DAILY_TASKS_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const key in parsed) {
                if (dailyTasks.hasOwnProperty(key)) {
                    dailyTasks[key] = parsed[key];
                }
            }
        } catch (e) {
            console.warn('Ошибка загрузки ежедневных заданий:', e);
        }
    }
    updateDailyUI();
}

function updateDailyModalIcons() {
    for (let i = 1; i <= 3; i++) {
        const icon = document.getElementById('modalDailyIcon' + i);
        if (icon) {
            if (dailyTasks[i]) {
                icon.className = 'fa-regular fa-square-check';
            } else {
                icon.className = 'fa-regular fa-square';
            }
        }
    }
}

// ===== ПЕРВЫЕ ЗАДАНИЯ =====
const tasks = {
    1: false,  // Первый шаг
    2: false,  // Статистика
    3: false,  // Индивидуальность
    4: false,  // Новые знакомства
    5: false   // Оформление
};

// Ключ для localStorage
const TASKS_STORAGE_KEY = 'sportapp_tasks';

// app.js
function loadTasks() {
    const saved = localStorage.getItem(TASKS_STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const key in parsed) {
                if (tasks.hasOwnProperty(key)) {
                    tasks[key] = parsed[key];
                }
            }
        } catch (e) {
            console.warn('Ошибка загрузки заданий:', e);
        }
    }
    
    // ★★★ СТРОГАЯ ЛОГИКА ★★★
    if (checkAllTasksCompleted()) {
        // Все первые задания выполнены → показываем ЕЖЕДНЕВНЫЕ
        showDailyTasks();
        hideTasks();  // ← СКРЫВАЕМ ПЕРВЫЕ
    } else {
        // Не все выполнены → показываем ПЕРВЫЕ
        showTasks();
        hideDailyTasks();  // ← СКРЫВАЕМ ЕЖЕДНЕВНЫЕ
    }
    
    updateTasksUI();
}

// app.js
function hideTasks() {
    const tasksBlock = document.getElementById('tasks-block');
    if (tasksBlock) {
        tasksBlock.style.display = 'none';
    }
}

function hideDailyTasks() {
    const dailyTasksBlock = document.getElementById('daily-tasks-block');
    if (dailyTasksBlock) {
        dailyTasksBlock.style.display = 'none';
    }
}

function showTasks() {
    const tasksBlock = document.getElementById('tasks-block');
    const dailyTasksBlock = document.getElementById('daily-tasks-block');
    
    if (tasksBlock) {
        tasksBlock.style.display = 'block';
        tasksBlock.classList.add('open');
    }
    
    if (dailyTasksBlock) {
        dailyTasksBlock.style.display = 'none';
    }
    
    saveBlocksState();
}

function showDailyTasks() {
    const tasksBlock = document.getElementById('tasks-block');
    const dailyTasksBlock = document.getElementById('daily-tasks-block');
    
    if (tasksBlock) {
        tasksBlock.style.display = 'none';
    }
    
    if (dailyTasksBlock) {
        dailyTasksBlock.style.display = 'block';
        dailyTasksBlock.classList.add('open');
    }
    
    renderDailyTasks();
    saveBlocksState();
}

// Сохранить состояние заданий в localStorage
function saveTasks() {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function toggleTask(taskId) {
    // ★★★ ПРОВЕРЯЕМ, НЕ ВЫПОЛНЕНО ЛИ УЖЕ ЗАДАНИЕ ★★★
    if (tasks[taskId]) {
        showToast('ℹ️ Задание уже выполнено');
        return;
    }
    
    // ★★★ ОТКРЫВАЕМ МОДАЛКУ С ПОДСКАЗКОЙ ★★★
    openTaskHelpModal(taskId);
}

// Обновить интерфейс ежедневных заданий
function updateDailyUI() {
    for (let i = 1; i <= 3; i++) {
        const icon = document.getElementById('dailyTaskIcon' + i);
        if (icon) {
            if (dailyTasks[i]) {
                icon.className = 'fa-regular fa-square-check';
                icon.style.color = 'var(--accent)';
            } else {
                icon.className = 'fa-regular fa-square';
                icon.style.color = 'var(--light-grey)';
            }
        }
    }
}

function updateTasksUI() {
    for (let i = 1; i <= 5; i++) {
        const icon = document.getElementById('taskIcon' + i);
        if (icon) {
            if (tasks[i]) {
                icon.className = 'fa-regular fa-square-check';
                icon.style.color = ''; // убираем инлайн-стиль, чтобы работал CSS
            } else {
                icon.className = 'fa-regular fa-square';
                icon.style.color = ''; // убираем инлайн-стиль
            }
        }
    }
}

// Начисление XP за задание
async function addTaskXp() {
    const user = await getFirebaseUser();
    if (!user) return;
    
    try {
        const profileResult = await getUserProfile(user.uid);
        if (profileResult.success) {
            const currentXp = profileResult.data.totalXp || 0;
            await updateUserProfile(user.uid, { totalXp: currentXp + 10 });
        }
    } catch (error) {
        console.error('Ошибка начисления XP:', error);
    }
    
    // ★★★ ПРОВЕРЯЕМ, ВСЕ ЛИ ЗАДАНИЯ ВЫПОЛНЕНЫ ★★★
    if (checkAllTasksCompleted()) {
        // Все первые задания выполнены → показываем ЕЖЕДНЕВНЫЕ
        showDailyTasks();
        hideTasks();
        
        // ★★★ ПОКАЗЫВАЕМ УВЕДОМЛЕНИЕ ★★★
        showNotification(
            '🎉',
            'Теперь вам доступны ежедневные задания!',
            null,
            true,
            function() {
                window.navigateTo('profile');
                TabManager.profile('my');
                setTimeout(function() {
                    showDailyTasks();
                }, 300);
            }
        );
    }
}

// Проверка всех заданий (для отладки)
function checkAllTasksCompleted() {
    return Object.values(tasks).every(function(v) { return v === true; });
}

// Загружаем задания при инициализации
loadTasks();


// ===== ЕЖЕДНЕВНЫЕ ЗАДАНИЯ =====
// Конфигурация блоков заданий
const DAILY_TASKS_CONFIG = {
    // Блок 1: Упражнения (физические)
    exercise: {
        items: [
            { id: 'exercise_1', name: 'Приседания', baseValue: 15, unit: 'раз', icon: 'fa-solid fa-dumbbell' },
            { id: 'exercise_2', name: 'Отжимания', baseValue: 10, unit: 'раз', icon: 'fa-solid fa-dumbbell' },
            { id: 'exercise_3', name: 'Подтягивания', baseValue: 5, unit: 'раз', icon: 'fa-solid fa-dumbbell' },
            { id: 'exercise_4', name: 'Скручивания', baseValue: 20, unit: 'раз', icon: 'fa-solid fa-dumbbell' },
            { id: 'exercise_5', name: 'Выпады', baseValue: 10, unit: 'на каждую ногу', icon: 'fa-solid fa-dumbbell' },
            { id: 'exercise_6', name: 'Бёрпи', baseValue: 8, unit: 'раз', icon: 'fa-solid fa-dumbbell' },
            { id: 'exercise_7', name: 'Планка', baseValue: 30, unit: 'сек', icon: 'fa-solid fa-dumbbell' }
        ],
        maxPerDay: null
    },
    // Блок 2: Друзья
    friends: {
        items: [
            { id: 'friends_1', name: 'Дружный', description: 'Выполнить совместную тренировку', icon: 'fa-solid fa-user-group' },
            { id: 'friends_2', name: 'Дружелюбный', description: 'Посмотреть профиль друга', icon: 'fa-solid fa-user-group' },
            { id: 'friends_3', name: 'Общительный', description: 'Добавить друга в друзья', icon: 'fa-solid fa-user-plus' }
        ],
        maxPerDay: 1
    },
    // Блок 3: Статистика
    stats: {
        exercises: {
            items: [
                { id: 'stats_ex_1', name: 'Спортсмен', target: 15, icon: 'fa-solid fa-chart-bar' },
                { id: 'stats_ex_2', name: 'Спортсмен', target: 20, icon: 'fa-solid fa-chart-bar' },
                { id: 'stats_ex_3', name: 'Спортсмен', target: 25, icon: 'fa-solid fa-chart-bar' },
                { id: 'stats_ex_4', name: 'Спортсмен', target: 30, icon: 'fa-solid fa-chart-bar' }
            ],
            maxPerDay: 1
        },
        time: {
            items: [
                { id: 'stats_time_1', name: 'Атлет', target: 30, icon: 'fa-solid fa-stopwatch' },
                { id: 'stats_time_2', name: 'Атлет', target: 45, icon: 'fa-solid fa-stopwatch' },
                { id: 'stats_time_3', name: 'Атлет', target: 60, icon: 'fa-solid fa-stopwatch' }
            ],
            maxPerDay: 1
        }
    },
    // Блок 4: Умная статистика
    smartStats: {
        items: [
            { id: 'smart_1', name: 'Упражнения на {category}', description: 'Выполнить {count} упражнений на {category}', icon: 'fa-solid fa-trophy' },
            { id: 'smart_2', name: 'Тренировка {category}', description: 'Выполнить тренировку {category}', icon: 'fa-solid fa-trophy' }
        ],
        maxPerDay: 1
    }
};

// Ключи для localStorage
const DAILY_TASKS_KEY = 'sportapp_daily_tasks';
const DAILY_DATE_KEY = 'sportapp_daily_date';


// ===== ФУНКЦИИ ДЛЯ ЕЖЕДНЕВНЫХ ЗАДАНИЙ =====

// Получить уровень пользователя
function getUserLevel() {
    const xp = parseFloat(localStorage.getItem('userXp')) || 0;
    const level = getCurrentLevel(xp);
    return level.id || 1;
}

// Рассчитать целевое значение для упражнения
function calculateExerciseTarget(baseValue, userLevel) {
    const result = (baseValue * (1 + userLevel)) / 2;
    return Math.ceil(result);
}

// Получить категорию с наименьшим количеством тренировок
function getLeastTrainedCategory(statsData) {
    if (!statsData || !statsData.categoryCounts) {
        const categories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        return categories[Math.floor(Math.random() * categories.length)];
    }
    
    // ★★★ НАХОДИМ МИНИМАЛЬНОЕ ЗНАЧЕНИЕ ★★★
    let minCount = Infinity;
    for (const [category, count] of Object.entries(statsData.categoryCounts)) {
        if (count < minCount) {
            minCount = count;
        }
    }
    
    // ★★★ СОБИРАЕМ ВСЕ КАТЕГОРИИ С МИНИМАЛЬНЫМ ЗНАЧЕНИЕМ ★★★
    const minCategories = [];
    for (const [category, count] of Object.entries(statsData.categoryCounts)) {
        if (count === minCount) {
            minCategories.push(category);
        }
    }
    
    // ★★★ ДОБАВЛЯЕМ КАТЕГОРИИ, КОТОРЫХ НЕТ В СТАТИСТИКЕ (ТОЖЕ 0) ★★★
    const allCategories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
    for (const cat of allCategories) {
        if (!statsData.categoryCounts[cat]) {
            minCategories.push(cat);
        }
    }
    
    // ★★★ ВЫБИРАЕМ СЛУЧАЙНУЮ ИЗ ВСЕХ С МИНИМАЛЬНЫМ ЗНАЧЕНИЕМ ★★★
    const randomIndex = Math.floor(Math.random() * minCategories.length);
    const result = minCategories[randomIndex];
    
    console.log('📊 getLeastTrainedCategory:');
    console.log('  - minCount:', minCount);
    console.log('  - minCategories:', minCategories);
    console.log('  - выбрано:', result);
    
    return result || 'Ноги';
}

// Получить категорию с наименьшим количеством упражнений
function getLeastExercisedCategory(statsData) {
    if (!statsData || !statsData.exerciseCounts) {
        const categories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        return categories[Math.floor(Math.random() * categories.length)];
    }
    
    // ★★★ НАХОДИМ МИНИМАЛЬНОЕ ЗНАЧЕНИЕ ★★★
    let minCount = Infinity;
    for (const [category, count] of Object.entries(statsData.exerciseCounts)) {
        if (count < minCount) {
            minCount = count;
        }
    }
    
    // ★★★ СОБИРАЕМ ВСЕ КАТЕГОРИИ С МИНИМАЛЬНЫМ ЗНАЧЕНИЕМ ★★★
    const minCategories = [];
    for (const [category, count] of Object.entries(statsData.exerciseCounts)) {
        if (count === minCount) {
            minCategories.push(category);
        }
    }
    
    // ★★★ ДОБАВЛЯЕМ КАТЕГОРИИ, КОТОРЫХ НЕТ В СТАТИСТИКЕ (ТОЖЕ 0) ★★★
    const allCategories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
    for (const cat of allCategories) {
        if (!statsData.exerciseCounts[cat]) {
            minCategories.push(cat);
        }
    }
    
    // ★★★ ВЫБИРАЕМ СЛУЧАЙНУЮ ИЗ ВСЕХ С МИНИМАЛЬНЫМ ЗНАЧЕНИЕМ ★★★
    const randomIndex = Math.floor(Math.random() * minCategories.length);
    const result = minCategories[randomIndex];
    
    console.log('📊 getLeastExercisedCategory:');
    console.log('  - minCount:', minCount);
    console.log('  - minCategories:', minCategories);
    console.log('  - выбрано:', result);
    
    return result || 'Руки';
}

function collectAvailableTasks(userLevel, statsData) {
    const tasks = [];
    const userLevelNum = userLevel || 1;
    
    // 1. Блок Упражнения — берём иконки из конфига
    DAILY_TASKS_CONFIG.exercise.items.forEach(item => {
        const target = calculateExerciseTarget(item.baseValue, userLevelNum);
        tasks.push({
            id: item.id,
            type: 'exercise',
            block: 'exercise',
            name: item.name,
            description: `${target} ${item.unit}`,
            target: target,
            icon: item.icon, // ← БЕРЁМ ИЗ КОНФИГА
            completed: false,
            baseValue: item.baseValue,
            unit: item.unit
        });
    });
    
    // 2. Блок Друзья — берём иконки из конфига
    DAILY_TASKS_CONFIG.friends.items.forEach(item => {
        tasks.push({
            id: item.id,
            type: 'friends',
            block: 'friends',
            name: item.name,
            description: item.description,
            target: null,
            icon: item.icon, // ← БЕРЁМ ИЗ КОНФИГА
            completed: false
        });
    });
    
    // 3. Блок Статистика - Упражнения — берём иконки из конфига
    const statsExercises = DAILY_TASKS_CONFIG.stats.exercises.items;
    const randomExercise = statsExercises[Math.floor(Math.random() * statsExercises.length)];
    tasks.push({
        id: randomExercise.id,
        type: 'stats_exercise',
        block: 'stats_exercise',
        name: randomExercise.name,
        description: `Выполнить ${randomExercise.target} упражнений`,
        target: randomExercise.target,
        icon: randomExercise.icon, // ← БЕРЁМ ИЗ КОНФИГА
        completed: false
    });
    
    // 4. Блок Статистика - Время — берём иконки из конфига
    const statsTime = DAILY_TASKS_CONFIG.stats.time.items;
    const randomTime = statsTime[Math.floor(Math.random() * statsTime.length)];
    tasks.push({
        id: randomTime.id,
        type: 'stats_time',
        block: 'stats_time',
        name: randomTime.name,
        description: `Тренироваться ${randomTime.target} минут`,
        target: randomTime.target,
        icon: randomTime.icon, // ← БЕРЁМ ИЗ КОНФИГА
        completed: false
    });
    
    // 5. Блок Умная статистика — берём иконки из конфига
    const smartTasks = [];
    
    const leastExercisedCategory = getLeastExercisedCategory(statsData);
    const exerciseCounts = [5, 10, 15];
    const randomCount = exerciseCounts[Math.floor(Math.random() * exerciseCounts.length)];
    smartTasks.push({
        id: 'smart_exercise_' + Date.now(),
        type: 'smart_exercise',
        block: 'smart_stats',
        name: `${randomCount} упражнений на ${leastExercisedCategory}`,
        description: `Выполнить ${randomCount} упражнений на ${leastExercisedCategory}`,
        target: randomCount,
        category: leastExercisedCategory,
        icon: DAILY_TASKS_CONFIG.smartStats.items[0].icon,
        completed: false
    });
    
    const leastTrainedCategory = getLeastTrainedCategory(statsData);
    smartTasks.push({
        id: 'smart_workout_' + Date.now(),
        type: 'smart_workout',
        block: 'smart_stats',
        name: `Тренировка ${leastTrainedCategory}`,
        description: `Выполнить тренировку ${leastTrainedCategory}`,
        target: null,
        category: leastTrainedCategory,
        icon: DAILY_TASKS_CONFIG.smartStats.items[1].icon,
        completed: false
    });
    
    const randomSmart = smartTasks[Math.floor(Math.random() * smartTasks.length)];
    tasks.push(randomSmart);
    
    return tasks;
}

// Выбрать финальный набор заданий
function selectDailyTasks(tasks, hasPremium) {
    const count = hasPremium ? 5 : 3;
    const selected = [];
    const usedBlocks = {
        friends: false,
        smart_stats: false,
        stats_exercise: false,
        stats_time: false,
        exercise: 0  // ★★★ СЧЁТЧИК УПРАЖНЕНИЙ ★★★
    };
    
    // Максимальное количество упражнений
    const maxExercise = hasPremium ? 2 : 1;  // ★★★ БЕЗ PREMIUM — 1, С PREMIUM — 2 ★★★
    
    // Перемешиваем задания
    const shuffled = [...tasks].sort(() => Math.random() - 0.5);
    
    for (const task of shuffled) {
        // Проверяем ограничения по блокам
        if (task.block === 'friends' && usedBlocks.friends) continue;
        if (task.block === 'smart_stats' && usedBlocks.smart_stats) continue;
        if (task.block === 'stats_exercise' && usedBlocks.stats_exercise) continue;
        if (task.block === 'stats_time' && usedBlocks.stats_time) continue;
        
        // ★★★ ПРОВЕРКА ДЛЯ УПРАЖНЕНИЙ ★★★
        if (task.block === 'exercise' && usedBlocks.exercise >= maxExercise) continue;
        
        selected.push(task);
        
        // Отмечаем использованные блоки
        if (task.block === 'friends') usedBlocks.friends = true;
        if (task.block === 'smart_stats') usedBlocks.smart_stats = true;
        if (task.block === 'stats_exercise') usedBlocks.stats_exercise = true;
        if (task.block === 'stats_time') usedBlocks.stats_time = true;
        if (task.block === 'exercise') usedBlocks.exercise++;  // ★★★ УВЕЛИЧИВАЕМ СЧЁТЧИК ★★★
        
        if (selected.length >= count) break;
    }
    
    // Если не хватило заданий - добираем из оставшихся
    if (selected.length < count) {
        for (const task of shuffled) {
            if (!selected.includes(task)) {
                // Проверяем ограничения и для добирания
                if (task.block === 'exercise' && usedBlocks.exercise >= maxExercise) continue;
                if (task.block === 'friends' && usedBlocks.friends) continue;
                if (task.block === 'smart_stats' && usedBlocks.smart_stats) continue;
                if (task.block === 'stats_exercise' && usedBlocks.stats_exercise) continue;
                if (task.block === 'stats_time' && usedBlocks.stats_time) continue;
                
                selected.push(task);
                if (task.block === 'exercise') usedBlocks.exercise++;
                if (selected.length >= count) break;
            }
        }
    }
    
    return selected;
}

// Генерировать ежедневные задания
async function generateDailyTasks() {
    try {
        console.log('🔄 Генерация ежедневных заданий...');
        
        // Получаем уровень пользователя
        const user = await getFirebaseUser();
        let userLevel = 1;
        let statsData = null;
        
        if (user) {
            const profileResult = await getUserProfile(user.uid);
            if (profileResult.success) {
                const xp = profileResult.data.totalXp || 0;
                userLevel = getCurrentLevel(xp).id || 1;
                console.log('👤 Уровень пользователя:', userLevel);
            }
            
            // Получаем статистику для умной статистики
            const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
            if (workoutsResult.success) {
                statsData = {
                    categoryCounts: {},
                    exerciseCounts: {}
                };
                
                const workouts = workoutsResult.data.filter(w => getWorkoutIcon(w) !== 'charging');
                workouts.forEach(w => {
                    const icon = getWorkoutIcon(w);
                    const category = getCategoryByIcon(icon);
                    if (category && category !== 'Зарядка') {
                        statsData.categoryCounts[category] = (statsData.categoryCounts[category] || 0) + 1;
                    }
                    (w.exercises || []).forEach(ex => {
                        if (ex.completed) {
                            const exIcon = ex.icon || getExerciseIcon(ex.name);
                            const exCategory = getCategoryByIcon(exIcon);
                            if (exCategory && exCategory !== 'Зарядка') {
                                statsData.exerciseCounts[exCategory] = (statsData.exerciseCounts[exCategory] || 0) + 1;
                            }
                        }
                    });
                });
                console.log('📊 Статистика загружена');
            }
        }
        
        const hasPremium = localStorage.getItem(PREMIUM_KEY) === 'true';
        console.log('👑 Premium:', hasPremium);
        
        // Собираем все доступные задания
        const allTasks = collectAvailableTasks(userLevel, statsData);
        console.log('📋 Всего доступных заданий:', allTasks.length);
        
        // Выбираем финальный набор
        const selectedTasks = selectDailyTasks(allTasks, hasPremium);
        console.log('✅ Выбрано заданий:', selectedTasks.length);
        
        // Сохраняем
        dailyTasksList = selectedTasks.map(task => ({
            ...task,
            completed: false
        }));
        
        // Создаём объект для быстрого доступа к статусу
        dailyTasksCompleted = {};
        dailyTasksList.forEach(task => {
            dailyTasksCompleted[task.id] = false;
        });
        
        const today = new Date().toISOString().split('T')[0];
        dailyTasksDate = today;
        
        // Сохраняем в localStorage
        saveDailyTasksToStorage();
        
        // Обновляем UI
        renderDailyTasks();
        
        console.log('✅ Ежедневные задания сгенерированы:', dailyTasksList.length);
        
    } catch (error) {
        console.error('❌ Ошибка генерации ежедневных заданий:', error);
    }
}

// Сохранить ежедневные задания в localStorage
function saveDailyTasksToStorage() {
    const data = {
        tasks: dailyTasksList,
        completed: dailyTasksCompleted,
        date: dailyTasksDate
    };
    localStorage.setItem(DAILY_TASKS_KEY, JSON.stringify(data));
    localStorage.setItem(DAILY_DATE_KEY, dailyTasksDate);
}

// Загрузить ежедневные задания из localStorage
function loadDailyTasksFromStorage() {
    const saved = localStorage.getItem(DAILY_TASKS_KEY);
    if (saved) {
        try {
            const data = JSON.parse(saved);
            dailyTasksList = data.tasks || [];
            dailyTasksCompleted = data.completed || {};
            dailyTasksDate = data.date || '';
            
            // Восстанавливаем completed из объекта
            dailyTasksList.forEach(task => {
                if (dailyTasksCompleted[task.id] !== undefined) {
                    task.completed = dailyTasksCompleted[task.id];
                }
            });
            
            return true;
        } catch (e) {
            console.warn('Ошибка загрузки ежедневных заданий:', e);
        }
    }
    return false;
}

// Проверить, нужно ли обновить задания
function shouldRefreshDailyTasks() {
    const today = new Date().toISOString().split('T')[0];
    const savedDate = localStorage.getItem(DAILY_DATE_KEY);
    
    if (!savedDate || savedDate !== today) {
        return true;
    }
    
    // Проверяем, есть ли задания
    const saved = localStorage.getItem(DAILY_TASKS_KEY);
    if (!saved) {
        return true;
    }
    
    try {
        const data = JSON.parse(saved);
        return !data.tasks || data.tasks.length === 0;
    } catch (e) {
        return true;
    }
}

// Инициализация ежедневных заданий
async function initDailyTasks() {
    console.log('🔄 Инициализация ежедневных заданий...');
    
    if (shouldRefreshDailyTasks()) {
        console.log('📅 Требуется обновление заданий');
        await generateDailyTasks();
    } else {
        console.log('📂 Загружаем задания из localStorage');
        loadDailyTasksFromStorage();
        renderDailyTasks();
    }
}

// Рендерить ежедневные задания в интерфейсе
function renderDailyTasks() {
    const container = document.getElementById('dailyTasksContainer');
    if (!container) {
        console.warn('⚠️ Контейнер dailyTasksContainer не найден');
        return;
    }
    
    if (!dailyTasksList || dailyTasksList.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="box-shadow: none;">
                <span class="empty-icon">📋</span>
                <h3 class="empty-title">Нет заданий</h3>
                <p class="empty-text">Задания не сгенерированы</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    dailyTasksList.forEach((task) => {
        const isCompleted = task.completed || false;
        const iconClass = isCompleted ? 'fa-regular fa-square-check' : 'fa-regular fa-square';
        const iconColor = isCompleted ? 'var(--accent)' : 'var(--light-grey)';
        
        let displayName = task.name;
        let displayDesc = task.description;
        
        // Кликабельны все ежедневные задания (кроме выполненных)
        const isClickable = !isCompleted;
        const cursorStyle = isClickable ? 'cursor: pointer;' : 'cursor: default;';
        
        // ДЛЯ ВСЕХ ЕЖЕДНЕВНЫХ ЗАДАНИЙ ИСПОЛЬЗУЕМ dailyTaskHelpModal
        let clickHandler = '';
        if (isClickable) {
            clickHandler = `onclick="openDailyTaskHelpModal('${task.id}')"`;
        }
        
        if (task.type === 'exercise') {
            displayName = task.name;
            displayDesc = `Выполнить ${task.target} ${task.unit}`;
        }
        else if (task.type === 'smart_exercise') {
            const template = DAILY_TASKS_CONFIG.smartStats.items[0];
            if (template) {
                displayName = template.name.replace('{category}', task.category);
                displayDesc = template.description
                    .replace('{count}', task.target)
                    .replace('{category}', task.category);
            }
        }
        else if (task.type === 'smart_workout') {
            const template = DAILY_TASKS_CONFIG.smartStats.items[1];
            if (template) {
                displayName = template.name.replace('{category}', task.category);
                displayDesc = template.description.replace('{category}', task.category);
            }
        }
        else if (task.type === 'friends') {
            const configItem = DAILY_TASKS_CONFIG.friends.items.find(item => item.id === task.id);
            if (configItem) {
                displayName = configItem.name;
                displayDesc = configItem.description;
            }
        }
        else if (task.type === 'stats_exercise') {
            const configItem = DAILY_TASKS_CONFIG.stats.exercises.items.find(item => item.id === task.id);
            if (configItem) {
                displayName = configItem.name;
                displayDesc = `Выполнить ${task.target} упражнений`;
            }
        }
        else if (task.type === 'stats_time') {
            const configItem = DAILY_TASKS_CONFIG.stats.time.items.find(item => item.id === task.id);
            if (configItem) {
                displayName = configItem.name;
                displayDesc = `Тренироваться ${task.target} минут`;
            }
        }
        
        html += `
            <div class="settings-item" style="${cursorStyle}" ${clickHandler} data-task-id="${task.id}">
                <div class="settings-icon"><i class="${task.icon || 'fa-solid fa-tasks'}"></i></div>
                <div class="settings-info">
                    <div class="settings-title">${displayName}</div>
                    <div class="settings-desc">${displayDesc}</div>
                </div>
                <div class="settings-action task-checkbox" style="pointer-events: none; cursor: default;">
                    <i class="${iconClass}" id="dailyTaskStatus_${task.id}" style="color: ${iconColor};"></i>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Начисление XP за ежедневное задание
async function addDailyTaskXp() {
    console.log('🔥🔥🔥 addDailyTaskXp ВЫЗВАНА!');
    
    const user = await getFirebaseUser();
    if (!user) {
        console.warn('⚠️ Пользователь не найден');
        return;
    }
    console.log('👤 Пользователь:', user.uid);
    
    try {
        const profileResult = await getUserProfile(user.uid);
        console.log('📊 Профиль получен:', profileResult);
        
        if (profileResult.success) {
            const currentXp = profileResult.data.totalXp || 0;
            const newXp = currentXp + 10;
            console.log(`📊 Текущий XP: ${currentXp}, Новый XP: ${newXp}`);
            
            await updateUserProfile(user.uid, { totalXp: newXp });
            console.log('✅ Начислено +10 XP за ежедневное задание');
            
            // ★★★ ЖДЁМ 1 СЕКУНДУ, ПОКА FIRESTORE ОБНОВИТСЯ ★★★
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // ★★★ ПОЛУЧАЕМ СВЕЖИЕ ДАННЫЕ ★★★
            const freshProfile = await firebase.firestore()
                .collection('users')
                .doc(user.uid)
                .get();
            
            if (freshProfile.exists) {
                const data = freshProfile.data();
                const xp = data.totalXp || 0;
                console.log(`📊 Фактический XP в Firestore: ${xp}`);
                
                const currentLevel = getCurrentLevel(xp);
                const progress = getXpProgress(xp);
                const nextLevel = getNextLevel(xp);
                const xpRounded = Math.round(xp);
                let progressText = nextLevel ? `${xpRounded}/${nextLevel.minXp} XP` : `${xpRounded}+ XP`;
                
                document.getElementById('levelLvl').textContent = currentLevel.id + ' LVL';
                document.getElementById('levelTitle').textContent = currentLevel.name;
                document.getElementById('levelProgressText').textContent = progressText;
                document.getElementById('levelFill').style.width = progress + '%';
                
                console.log(`✅ Профиль принудительно обновлён: ${xpRounded} XP`);
            }
        } else {
            console.error('❌ Не удалось получить профиль');
        }
    } catch (error) {
        console.error('❌ Ошибка начисления XP:', error);
    }
}

// ===== ТРИГГЕРЫ ДЛЯ ВЫПОЛНЕНИЯ ЗАДАНИЙ =====
async function completeDailyTaskIfExists(taskId) {
    if (!dailyTasksList || dailyTasksList.length === 0) return false;
    
    var task = dailyTasksList.find(function(t) { return t.id === taskId; });
    if (!task || task.completed) return false;
    
    task.completed = true;
    dailyTasksCompleted[task.id] = true;
    saveDailyTasksToStorage();
    renderDailyTasks();
    
    await addDailyTaskXp();
    
    showToast('✅ Ежедневное задание выполнено!');
    
    var allCompleted = dailyTasksList.every(function(t) { return t.completed; });
    if (allCompleted) {
        showNotification(
            '🎉',
            'Все ежедневные задания выполнены! Отличная работа!',
            null,
            true,
            function() {
                window.navigateTo('profile');
                TabManager.profile('my');
                setTimeout(function() { loadProfile(); }, 300);
            }
        );
    }
    
    return true;
}

function checkDailyTasksAfterWorkout(workoutData) {
    // ★★★ ЕСЛИ ПЕРВЫЕ ЗАДАНИЯ НЕ ВЫПОЛНЕНЫ — ЕЖЕДНЕВНЫЕ НЕ АКТИВНЫ ★★★
    if (!checkAllTasksCompleted()) {
        console.log('⏭️ Первые задания не выполнены, ежедневные не активны');
        return;
    }
    
    if (!dailyTasksList || dailyTasksList.length === 0) return;
    
    // ★★★ СЧИТАЕМ ВЫПОЛНЕННЫЕ УПРАЖНЕНИЯ ★★★
    const completedExercises = workoutData.exercises?.filter(function(e) { 
        return e.completed; 
    }).length || 0;
    
    // ★★★ СЧИТАЕМ ДЛИТЕЛЬНОСТЬ В МИНУТАХ ★★★
    const durationMinutes = Math.floor((workoutData.durationSeconds || 0) / 60);
    
    // ★★★ СЧИТАЕМ УПРАЖНЕНИЯ ПО КАТЕГОРИЯМ (для smart_exercise) ★★★
    const categoryCounts = {};
    workoutData.exercises?.forEach(function(e) {
        if (e.completed) {
            const icon = e.icon || getExerciseIcon(e.name);
            const category = getCategoryByIcon(icon);
            if (category && category !== 'Зарядка') {
                if (!categoryCounts[category]) {
                    categoryCounts[category] = 0;
                }
                categoryCounts[category]++;
            }
        }
    });
    
    // ★★★ СЧИТАЕМ ПОВТОРЕНИЯ ПО ФИЗИЧЕСКИМ УПРАЖНЕНИЯМ ★★★
    const exerciseRepsData = {};
    workoutData.exercises?.forEach(function(e) {
        if (e.completed) {
            // Проверяем, есть ли это упражнение в конфиге ежедневных заданий
            const isDailyExercise = DAILY_TASKS_CONFIG.exercise.items.some(function(item) {
                return e.name.toLowerCase().includes(item.name.toLowerCase());
            });
            
            if (isDailyExercise) {
                const sets = parseInt(e.sets) || 0;
                const repsStr = String(e.reps || '');
                let repsValue = 0;
                
                // Проверяем, секунды это или повторения
                if (repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд')) {
                    repsValue = parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
                } else {
                    repsValue = parseFloat(repsStr) || 0;
                }
                
                const totalReps = sets * repsValue;
                
                if (!exerciseRepsData[e.name]) {
                    exerciseRepsData[e.name] = 0;
                }
                exerciseRepsData[e.name] += totalReps;
            }
        }
    });
    
    // ★★★ ОБНОВЛЯЕМ ДНЕВНОЙ ПРОГРЕСС ★★★
    const dailyProgress = updateDailyProgress(completedExercises, durationMinutes, categoryCounts, exerciseRepsData);
    
    console.log('📊 Дневной прогресс: упражнений = ' + dailyProgress.exercises + ', минут = ' + dailyProgress.minutes);
    console.log('📊 По категориям:', dailyProgress.categories);
    console.log('📊 По упражнениям:', dailyProgress.exerciseReps);
    
    // ★★★ ПРОВЕРЯЕМ ЗАДАНИЯ ★★★
    dailyTasksList.forEach(function(task) {
        if (task.completed) return;
        
        // ★★★ ФИЗИЧЕСКИЕ УПРАЖНЕНИЯ (СУММАРНО ЗА ДЕНЬ) ★★★
        if (task.type === 'exercise') {
            const totalReps = dailyProgress.exerciseReps[task.name] || 0;
            console.log('📊 ' + task.name + ': totalReps за день = ' + totalReps + ', нужно = ' + task.target);
            
            if (totalReps >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Статистика - упражнения (суммарно за день)
        if (task.type === 'stats_exercise') {
            if (dailyProgress.exercises >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Статистика - время (суммарно за день)
        if (task.type === 'stats_time') {
            if (dailyProgress.minutes >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Умная статистика - упражнения на категорию (суммарно за день)
        if (task.type === 'smart_exercise') {
            const categoryProgress = dailyProgress.categories[task.category] || 0;
            console.log('📊 Прогресс по категории "' + task.category + '": ' + categoryProgress + '/' + task.target);
            
            if (categoryProgress >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Умная статистика - тренировка категории (за 1 тренировку)
        if (task.type === 'smart_workout') {
            if (workoutData.category?.toLowerCase().includes(task.category?.toLowerCase())) {
                completeDailyTaskIfExists(task.id);
            }
        }
    });
}

function checkDailyTasksAfterCoopWorkout(workoutData) {
    // ★★★ ЕСЛИ ПЕРВЫЕ ЗАДАНИЯ НЕ ВЫПОЛНЕНЫ — ЕЖЕДНЕВНЫЕ НЕ АКТИВНЫ ★★★
    if (!checkAllTasksCompleted()) {
        console.log('⏭️ Первые задания не выполнены, ежедневные не активны');
        return;
    }
    
    if (!dailyTasksList || dailyTasksList.length === 0) return;
    
    // ★★★ СЧИТАЕМ ВЫПОЛНЕННЫЕ УПРАЖНЕНИЯ ★★★
    const completedExercises = workoutData.exercises?.filter(function(e) { 
        return e.completed; 
    }).length || 0;
    
    // ★★★ СЧИТАЕМ ДЛИТЕЛЬНОСТЬ В МИНУТАХ ★★★
    const durationMinutes = Math.floor((workoutData.durationSeconds || 0) / 60);
    
    // ★★★ СЧИТАЕМ УПРАЖНЕНИЯ ПО КАТЕГОРИЯМ ★★★
    const categoryCounts = {};
    workoutData.exercises?.forEach(function(e) {
        if (e.completed) {
            const icon = e.icon || getExerciseIcon(e.name);
            const category = getCategoryByIcon(icon);
            if (category && category !== 'Зарядка') {
                if (!categoryCounts[category]) {
                    categoryCounts[category] = 0;
                }
                categoryCounts[category]++;
            }
        }
    });
    
    // ★★★ СЧИТАЕМ ПОВТОРЕНИЯ ПО ФИЗИЧЕСКИМ УПРАЖНЕНИЯМ ★★★
    const exerciseRepsData = {};
    workoutData.exercises?.forEach(function(e) {
        if (e.completed) {
            const isDailyExercise = DAILY_TASKS_CONFIG.exercise.items.some(function(item) {
                return e.name.toLowerCase().includes(item.name.toLowerCase());
            });
            
            if (isDailyExercise) {
                const sets = parseInt(e.sets) || 0;
                const repsStr = String(e.reps || '');
                let repsValue = 0;
                
                if (repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд')) {
                    repsValue = parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
                } else {
                    repsValue = parseFloat(repsStr) || 0;
                }
                
                const totalReps = sets * repsValue;
                
                if (!exerciseRepsData[e.name]) {
                    exerciseRepsData[e.name] = 0;
                }
                exerciseRepsData[e.name] += totalReps;
            }
        }
    });
    
    // ★★★ ОБНОВЛЯЕМ ДНЕВНОЙ ПРОГРЕСС ★★★
    const dailyProgress = updateDailyProgress(completedExercises, durationMinutes, categoryCounts, exerciseRepsData);
    
    console.log('📊 Дневной прогресс (совместная): упражнений = ' + dailyProgress.exercises + ', минут = ' + dailyProgress.minutes);
    console.log('📊 По категориям:', dailyProgress.categories);
    console.log('📊 По упражнениям:', dailyProgress.exerciseReps);
    
    // ★★★ ПРОВЕРЯЕМ ЗАДАНИЯ ★★★
    dailyTasksList.forEach(function(task) {
        if (task.completed) return;
        
        // friends_1 — совместная тренировка
        if (task.id === 'friends_1' || task.name.includes('Совместная тренировка')) {
            completeDailyTaskIfExists(task.id);
        }
        
        // ★★★ ФИЗИЧЕСКИЕ УПРАЖНЕНИЯ (СУММАРНО ЗА ДЕНЬ) ★★★
        if (task.type === 'exercise') {
            const totalReps = dailyProgress.exerciseReps[task.name] || 0;
            console.log('📊 ' + task.name + ': totalReps за день = ' + totalReps + ', нужно = ' + task.target);
            
            if (totalReps >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Статистика - упражнения (суммарно за день)
        if (task.type === 'stats_exercise') {
            if (dailyProgress.exercises >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Статистика - время (суммарно за день)
        if (task.type === 'stats_time') {
            if (dailyProgress.minutes >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Умная статистика - упражнения на категорию (суммарно за день)
        if (task.type === 'smart_exercise') {
            const categoryProgress = dailyProgress.categories[task.category] || 0;
            console.log('📊 Прогресс по категории "' + task.category + '": ' + categoryProgress + '/' + task.target);
            
            if (categoryProgress >= task.target) {
                completeDailyTaskIfExists(task.id);
            }
        }
        
        // Умная статистика - тренировка категории (за 1 тренировку)
        if (task.type === 'smart_workout') {
            if (workoutData.category?.toLowerCase().includes(task.category?.toLowerCase())) {
                completeDailyTaskIfExists(task.id);
            }
        }
    });
}

// Триггер: открытие профиля друга
function checkDailyTasksAfterFriendProfile(friendId) {
    // ★★★ ЕСЛИ ПЕРВЫЕ ЗАДАНИЯ НЕ ВЫПОЛНЕНЫ — ЕЖЕДНЕВНЫЕ НЕ АКТИВНЫ ★★★
    if (!checkAllTasksCompleted()) {
        console.log('⏭️ Первые задания не выполнены, ежедневные не активны');
        return;
    }
    
    if (!dailyTasksList || dailyTasksList.length === 0) return;
    
    dailyTasksList.forEach(function(task) {
        if (task.completed) return;
        
        if (task.id === 'friends_2' || task.name.includes('Профиль друга')) {
            completeDailyTaskIfExists(task.id);
        }
    });
}

// Триггер: добавление друга
function checkDailyTasksAfterAddFriend() {
    // ★★★ ЕСЛИ ПЕРВЫЕ ЗАДАНИЯ НЕ ВЫПОЛНЕНЫ — ЕЖЕДНЕВНЫЕ НЕ АКТИВНЫ ★★★
    if (!checkAllTasksCompleted()) {
        console.log('⏭️ Первые задания не выполнены, ежедневные не активны');
        return;
    }
    
    if (!dailyTasksList || dailyTasksList.length === 0) return;
    
    dailyTasksList.forEach(function(task) {
        if (task.completed) return;
        
        if (task.id === 'friends_3' || task.name.includes('Новый друг')) {
            completeDailyTaskIfExists(task.id);
        }
    });
}

// ★★★ ВЫБОР СВОБОДНОГО ЦВЕТА ★★★
function applyCustomColor() {
    const colorPicker = document.getElementById('customColorPicker');
    const color = colorPicker.value;
    
    // Сохраняем как custom цвет
    localStorage.setItem('themeColor', color);
    localStorage.setItem('themeColorCustom', 'true');
    
    // Применяем
    applyColorToTheme(color);
    closeModal('colorModal');
    showToast(`✅ Цвет изменён на ${color}`);
}

function applyColorToTheme(color) {
    const isDarkMode = document.body.classList.contains('theme-dark-mode') ||
                      localStorage.getItem('appThemeMode') === 'dark' ||
                      (localStorage.getItem('appThemeMode') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // ★★★ УБИРАЕМ ВСЕ КЛАССЫ ТЕМ ★★★
    document.body.className = '';
    
    // ★★★ ДОБАВЛЯЕМ КАСТОМНЫЙ ЦВЕТ КАК CSS ПЕРЕМЕННУЮ ★★★
    document.body.style.setProperty('--accent', color);
    document.body.style.setProperty('--accent-dark', darkenColor(color, 30));
    document.body.style.setProperty('--accent-light', lightenColor(color, 85));
    
    if (isDarkMode) {
        document.body.classList.add('theme-dark-mode');
    }
}

// ★★★ УТЕМНЕНИЕ ЦВЕТА ★★★
function darkenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max((num >> 16) - amt, 0);
    const G = Math.max((num >> 8 & 0x00FF) - amt, 0);
    const B = Math.max((num & 0x0000FF) - amt, 0);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
}

// ★★★ ОСВЕТЛЕНИЕ ЦВЕТА ★★★
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min((num >> 16) + amt, 255);
    const G = Math.min((num >> 8 & 0x00FF) + amt, 255);
    const B = Math.min((num & 0x0000FF) + amt, 255);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
}

// ★★★ ОТКРЫТЬ ПАЛИТРУ ★★★
function openPaletteModal() {
    const currentColor = localStorage.getItem('themeColor') || '#DC143C';
    const picker = document.getElementById('customColorPicker');
    if (picker) {
        picker.value = currentColor;
    }
    openModal('paletteModal');
}

// ★★★ ПРИМЕНИТЬ ЦВЕТ ИЗ ПАЛИТРЫ ★★★
function applyPaletteColor() {
    const colorPicker = document.getElementById('customColorPicker');
    const color = colorPicker.value;
    
    // ★★★ ПРОВЕРЯЕМ, ИЗМЕНИЛСЯ ЛИ ЦВЕТ ★★★
    const currentColor = localStorage.getItem('themeColor') || '#DC143C';
    const colorChanged = color !== currentColor;
    
    if (colorChanged) {
        // ★★★ СОХРАНЯЕМ КАК КАСТОМНЫЙ ЦВЕТ ★★★
        localStorage.setItem('themeColor', color);
        localStorage.setItem('themeColorCustom', 'true');
        
        // ★★★ ПРИМЕНЯЕМ ★★★
        applyColorToTheme(color);
        
        // ★★★ ПОКАЗЫВАЕМ ТОСТ ★★★
        showToast(`✅ Цвет изменён`);
        
        // ★★★ ЗАДАНИЕ 5: ОФОРМЛЕНИЕ ★★★
        if (!tasks[5]) {
            tasks[5] = true;
            saveTasks();
            updateTasksUI();
            showToast('✅ Задание "Оформление" выполнено!');
            addTaskXp();
        }
    } else {
        showToast('ℹ️ Цвет не изменён');
    }
    
    // ★★★ ОБНОВЛЯЕМ СТАТУС ★★★
    updateColorStatus(color);
    
    // ★★★ ОБНОВЛЯЕМ АКТИВНЫЕ КНОПКИ ★★★
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('color-btn-active', btn.dataset.color === color);
    });
    
    closeModal('paletteModal');
}

function openPaletteWithPremiumCheck() {
    closeModal('colorModal');
    if (hasPremium()) {
        openPaletteModal();
    } else {
        openModal('premiumModal');
    }
}

// =================== ПРЕМИУМ СТАТИСТИКА: НАГРУЗОЧНЫЙ ИНДЕКС ПО НЕДЕЛЯМ ===================

let weeklyLoadStartDate = new Date();
weeklyLoadStartDate.setDate(1);
weeklyLoadStartDate.setMonth(weeklyLoadStartDate.getMonth() - 1);

function calculateTrainingLoad(workout) {
    let totalLoad = 0;
    if (workout.exercises) {
        workout.exercises.forEach(ex => {
            const sets = parseInt(ex.sets) || 0;
            const repsStr = String(ex.reps || '');
            if (repsStr.includes('сек') || repsStr.includes('с')) {
                const secs = parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
                totalLoad += sets * (secs / 10);
            } else {
                const reps = parseFloat(repsStr) || 0;
                totalLoad += sets * reps;
            }
        });
    }
    const durationBonus = (workout.durationSeconds || 0) / 60;
    totalLoad += durationBonus * 0.5;
    return Math.round(totalLoad);
}

function getWeeksInRange(startDate, endDate) {
    const weeks = [];
    
    // Находим первый понедельник, который >= startDate
    let current = new Date(startDate);
    const day = current.getDay();
    const diff = (day === 0) ? 6 : day - 1;
    current.setDate(current.getDate() - diff);
    
    while (current < startDate) {
        current.setDate(current.getDate() + 7);
    }
    
    if (current > startDate) {
        current.setDate(current.getDate() - 7);
    }
    
    while (current <= endDate) {
        const weekEnd = new Date(current);
        weekEnd.setDate(weekEnd.getDate() + 6);
        
        const weekStart = new Date(current);
        const weekFinish = new Date(weekEnd);
        
        const hasOverlap = weekStart <= endDate && weekFinish >= startDate;
        
        if (hasOverlap) {
            weeks.push({
                start: new Date(weekStart),
                end: new Date(weekFinish),
                key: weekStart.toISOString().split('T')[0]
            });
        }
        
        current.setDate(current.getDate() + 7);
    }
    
    return weeks;
}

function formatWeekDate(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    return `${d}.${m}`;
}

function renderWeeklyLoadChart(weeklyData, weeks) {
    const container = document.getElementById('weeklyLoadChart');
    if (!container) return;

    const values = Object.values(weeklyData).filter(v => v > 0);
    const maxLoad = Math.max(0, ...values);
    const chartHeight = 180;

    let html = `<div style="position:relative; padding:0.5rem;  background-image: 
        linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
        background-size: 20px 20px; border-radius:12px; min-height:${chartHeight + 40}px;">`;

    html += `<div style="display:flex; align-items:flex-end; gap:0.5rem; height:${chartHeight}px; padding-top:0.5rem;">`;

    weeks.forEach((week) => {
        const load = weeklyData[week.key] || 0;
        const percent = maxLoad > 0 ? (load / maxLoad) * 100 : 0;
        const barHeight = Math.max(4, (percent / 100) * (chartHeight - 20));
        const label = `${formatWeekDate(week.start)}-${formatWeekDate(week.end)}`;
        const percentDisplay = Math.round((load / maxLoad) * 100);
        const showInside = barHeight > 30;

html += `
    <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:0.2rem; height:100%; justify-content:flex-end;">
        <span style="font-size:0.7rem; font-weight:700; color:var(--accent);">${load > 0 ? load : ''}</span>
        <div style="width:100%; height:${barHeight}px; background:var(--accent); border-radius:6px 6px 0 0; min-height:4px; display:flex; align-items:flex-start; justify-content:center; padding-top:4px;">
            ${load > 0 && showInside ? `<span style="font-size:0.6rem; font-weight:700; color:var(--white);">${percentDisplay}%</span>` : ''}
        </div>
        <span style="font-size:0.55rem; color:var(--slate); text-align:center; line-height:1.2;">${label}</span>
    </div>
`;
    });

    html += `</div>`;

    const avg = values.length > 0 ? Math.round(values.reduce((a,b) => a+b, 0) / values.length) : 0;
    const total = values.reduce((a,b) => a+b, 0);
    const minValue = values.length > 0 ? Math.min(...values) : 0;

    html += `
        <div class="weekly-load-info">
            <span>Всего: ${total}</span>
            <span>Средний: ${avg}</span>
            <span>Макс: ${maxLoad}</span>
            <span>Минимум: ${minValue}</span>
        </div>
    `;

    html += `</div>`;
    container.innerHTML = html;
}

async function loadPremiumStats() {
    // ★★★ УБИРАЕМ ПРОВЕРКУ PREMIUM ★★★
    const user = await getFirebaseUser();
    if (!user) return;

    const result = await getUserWorkoutsFromFirestore(user.uid);
    if (!result.success) return;

    const workouts = result.data.filter(w => {
        const icon = getWorkoutIcon(w);
        return icon && icon !== 'charging';
    });

    const workoutLoads = {};
    workouts.forEach(w => {
        const date = new Date(w.date);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(date);
        monday.setDate(diff);
        const weekKey = monday.toISOString().split('T')[0];
        const load = calculateTrainingLoad(w);
        if (workoutLoads[weekKey]) {
            workoutLoads[weekKey] += load;
        } else {
            workoutLoads[weekKey] = load;
        }
    });

    const now = new Date();
    const offset = window._monthOffset || 0;
    now.setMonth(now.getMonth() + offset);
    
    const monthStart = new Date(now);
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    
    const monthEnd = new Date(now);
    monthEnd.setDate(1);
    monthEnd.setMonth(monthEnd.getMonth() + 1);
    monthEnd.setDate(monthEnd.getDate() - 1);
    monthEnd.setHours(23, 59, 59, 999);
    
    const startDate = new Date(now);
    startDate.setDate(1);
    startDate.setDate(startDate.getDate() - 7);
    
    const endDate = new Date(now);
    endDate.setDate(1);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(endDate.getDate() - 1);
    endDate.setDate(endDate.getDate() + 7);

    const weeks = getWeeksInRange(startDate, endDate);

    const filteredWeeks = weeks.filter(week => {
        const weekStart = week.start;
        const weekEnd = week.end;
        return weekStart <= monthEnd && weekEnd >= monthStart;
    });

    const filteredLoads = {};
    filteredWeeks.forEach(week => {
        if (workoutLoads[week.key]) {
            filteredLoads[week.key] = workoutLoads[week.key];
        } else {
            filteredLoads[week.key] = 0;
        }
    });

    renderWeeklyLoadChart(filteredLoads, filteredWeeks);

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const titleEl = document.getElementById('weeklyLoadTitle');
if (titleEl) {
    titleEl.textContent = monthNames[now.getMonth()] + ' ' + now.getFullYear();
}

    const block = document.getElementById('weekly-load-block');
    if (block) block.style.display = 'block';
}

function changeWeeklyLoadMonth(delta) {
    if (typeof window._monthOffset === 'undefined') {
        window._monthOffset = 0;
    }
    window._monthOffset += delta;

    const user = firebase.auth().currentUser;
    if (!user) return;

    getUserWorkoutsFromFirestore(user.uid).then(result => {
        if (!result.success) return;
        const workouts = result.data.filter(w => {
        const icon = getWorkoutIcon(w);
        return icon && icon !== 'charging';
    });

        const workoutLoads = {};
        workouts.forEach(w => {
            const date = new Date(w.date);
            const day = date.getDay();
            const diff = date.getDate() - day + (day === 0 ? -6 : 1);
            const monday = new Date(date);
            monday.setDate(diff);
            const weekKey = monday.toISOString().split('T')[0];
            const load = calculateTrainingLoad(w);
            if (workoutLoads[weekKey]) {
                workoutLoads[weekKey] += load;
            } else {
                workoutLoads[weekKey] = load;
            }
        });

        const now = new Date();
        now.setMonth(now.getMonth() + window._monthOffset);
        
        // ★★★ ТОЧНЫЕ ГРАНИЦЫ МЕСЯЦА ★★★
        const monthStart = new Date(now);
        monthStart.setDate(1);
        monthStart.setHours(0, 0, 0, 0);
        
        const monthEnd = new Date(now);
        monthEnd.setDate(1);
        monthEnd.setMonth(monthEnd.getMonth() + 1);
        monthEnd.setDate(monthEnd.getDate() - 1);
        monthEnd.setHours(23, 59, 59, 999);
        
        // ★★★ РАСШИРЕННЫЙ ДИАПАЗОН ★★★
        const startDate = new Date(now);
        startDate.setDate(1);
        startDate.setDate(startDate.getDate() - 7);
        
        const endDate = new Date(now);
        endDate.setDate(1);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(endDate.getDate() - 1);
        endDate.setDate(endDate.getDate() + 7);

        const weeks = getWeeksInRange(startDate, endDate);

        // ★★★ ФИЛЬТРУЕМ НЕДЕЛИ: ОСТАВЛЯЕМ ТОЛЬКО ТЕ, КОТОРЫЕ ПЕРЕСЕКАЮТСЯ С МЕСЯЦЕМ ★★★
        const filteredWeeks = weeks.filter(week => {
            const weekStart = week.start;
            const weekEnd = week.end;
            return weekStart <= monthEnd && weekEnd >= monthStart;
        });

        const filteredLoads = {};
        filteredWeeks.forEach(week => {
            if (workoutLoads[week.key]) {
                filteredLoads[week.key] = workoutLoads[week.key];
            } else {
                filteredLoads[week.key] = 0;
            }
        });

        renderWeeklyLoadChart(filteredLoads, filteredWeeks);

const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const titleEl = document.getElementById('weeklyLoadTitle');
if (titleEl) {
    titleEl.textContent = monthNames[now.getMonth()] + ' ' + now.getFullYear();
}
    });
}

// ★★★ СОХРАНЕНИЕ ВЕСА В ИСХОДНЫЕ ДАННЫЕ ★★★
function saveExerciseWeightToSource(index, newWeight) {
    const workoutTitle = sessionWorkoutTitle || '';
    const cleanTitle = workoutTitle.replace(' (совместно)', '');
    
    let saved = false;
    
    // 1. Проверяем личные тренировки
    const allWorkouts = getMyWorkouts();
    for (const workout of allWorkouts) {
        if (workout.title === cleanTitle) {
            if (workout.exercises && workout.exercises[index]) {
                workout.exercises[index].weight = newWeight;
                saveMyWorkouts(allWorkouts);
                saved = true;
                break;
            }
        }
    }
    
    // 2. Если не нашли в личных — ищем в готовых
    if (!saved) {
        for (const parent in exercisesData) {
            if (typeof exercisesData[parent] === 'object') {
                for (const category in exercisesData[parent]) {
                    if (typeof exercisesData[parent][category] === 'object') {
                        for (const level in exercisesData[parent][category]) {
                            if (level === '_premium') continue;
                            const levelData = exercisesData[parent][category][level];
                            let exercisesArray = null;
                            let titleFromData = '';
                            
                            if (Array.isArray(levelData)) {
                                exercisesArray = levelData;
                                titleFromData = category + ' ' + level;
                            } else if (levelData && typeof levelData === 'object' && levelData._exercises) {
                                exercisesArray = levelData._exercises;
                                titleFromData = levelData._title || category + ' ' + level;
                            }
                            
                            if (exercisesArray && exercisesArray[index]) {
                                if (titleFromData === cleanTitle || category === cleanTitle) {
                                    exercisesArray[index].weight = newWeight;
                                    saveExercisesData();
                                    saved = true;
                                    break;
                                }
                            }
                        }
                        if (saved) break;
                    }
                    if (saved) break;
                }
                if (saved) break;
            }
        }
    }
}

// =================== УНИВЕРСАЛЬНАЯ МОДАЛКА УПРАЖНЕНИЯ ===================

// Состояние модалки
let universalModalState = {
    mode: 'create', // 'create' | 'edit'
    source: 'edit', // 'edit' | 'session'
    index: null,
    exercises: null,
    callback: null
};

function openUniversalExerciseModal(mode = 'create', source = 'edit', index = null, exercises = null, callback = null) {
    const modal = document.getElementById('exerciseUniversalModal');
    if (!modal) return;
    
    // Сохраняем состояние
    universalModalState.mode = mode;
    universalModalState.source = source;
    universalModalState.index = index;
    universalModalState.exercises = exercises;
    universalModalState.callback = callback;
    
    // ★★★ ПОКАЗЫВАЕМ/СКРЫВАЕМ БЛОК ВЫБОРА ЗНАЧКА ★★★
    const iconPickerBlock = document.getElementById('universalIconPickerBlock');
    if (iconPickerBlock) {
        iconPickerBlock.style.display = (source === 'session') ? 'none' : 'block';
    }
    
    // ★★★ ВСЕГДА ПОКАЗЫВАЕМ ВЕС ★★★
    const weightGroup = document.getElementById('universalWeightGroup');
    if (weightGroup) {
        weightGroup.style.display = 'block';
    }
    
    // Устанавливаем заголовок
    const title = document.getElementById('exerciseUniversalTitle');
    if (title) {
        title.textContent = mode === 'create' ? 'СОЗДАТЬ УПРАЖНЕНИЕ' : 'РЕДАКТИРОВАТЬ УПРАЖНЕНИЕ';
    }
    
    // Очищаем ошибки
    document.querySelectorAll('#exerciseUniversalModal input').forEach(inp => inp.classList.remove('error'));
    
    // Если редактируем — заполняем поля
    if (mode === 'edit' && index !== null && exercises && exercises[index]) {
        const ex = exercises[index];
        document.getElementById('exerciseUniversalName').value = ex.name || '';
        document.getElementById('exerciseUniversalSets').value = ex.sets || 3;
        
        const repsStr = String(ex.reps || '');
        const isSeconds = isTimeBased(repsStr);
        let repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 12;
        if (isNaN(repsValue) || repsValue < 1) repsValue = 12;
        if (repsValue > 60) repsValue = 60;
        document.getElementById('exerciseUniversalReps').value = repsValue;
        
        // ★★★ УСТАНАВЛИВАЕМ ВЕС ★★★
        const weightDisplay = document.getElementById('exerciseUniversalWeightDisplay');
        if (weightDisplay) {
            weightDisplay.textContent = (ex.weight || 0) + ' кг';
        }
        
        // ★★★ ВОССТАНАВЛИВАЕМ ЗНАЧОК (ЕСЛИ ЕСТЬ) ★★★
        if (source !== 'session' && ex.icon) {
            document.querySelectorAll('#universalIconPicker .icon-option').forEach(el => {
                el.classList.toggle('icon-option-active', el.dataset.icon === ex.icon);
            });
        }
        
        // Устанавливаем тип
        setExerciseTypeUniversal(isSeconds ? 'seconds' : 'reps');
    } else {
        // Создание — сбрасываем поля
        document.getElementById('exerciseUniversalName').value = '';
        document.getElementById('exerciseUniversalSets').value = 3;
        document.getElementById('exerciseUniversalReps').value = 12;
        document.getElementById('exerciseUniversalWeightDisplay').textContent = '0 кг';
        setExerciseTypeUniversal('reps');
        
        // ★★★ ВЫБИРАЕМ ЗНАЧОК ПО УМОЛЧАНИЮ ★★★
        if (source !== 'session') {
            const defaultIcon = 'bodybuilding';
            document.querySelectorAll('#universalIconPicker .icon-option').forEach(el => {
                el.classList.toggle('icon-option-active', el.dataset.icon === defaultIcon);
            });
        }
    }
    
    // Показываем модалку
    modal.style.display = 'flex';
}

// Закрыть универсальную модалку
function closeUniversalExerciseModal() {
    document.getElementById('exerciseUniversalModal').style.display = 'none';
    universalModalState = { mode: 'create', source: 'edit', index: null, exercises: null, callback: null };
}

// ★★★ КОРРЕКТИРОВКА ВЕСА ★★★
function adjustUniversalWeight(delta) {
    const display = document.getElementById('exerciseUniversalWeightDisplay');
    let val = parseFloat(display.textContent.replace(' кг', '')) || 0;
    val = val + delta;
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    display.textContent = val + ' кг';
}

// Переключить тип (повторения / секунды)
function toggleExerciseTypeUniversal(type) {
    const label = document.getElementById('exerciseUniversalRepsLabel');
    if (label) {
        label.textContent = type === 'seconds' ? 'Секунды' : 'Повторения';
    }
    
    // Обновляем активную кнопку
    document.querySelectorAll('#exerciseUniversalModal .toggle-btn').forEach(btn => {
        btn.classList.toggle('toggle-btn-active', btn.dataset.type === type);
        if (btn.dataset.type === type) {
            btn.style.background = 'var(--white)';
            btn.style.color = 'var(--slate)';
        } else {
            btn.style.background = 'transparent';
            btn.style.color = 'var(--slate)';
        }
    });
}

// Установить тип без обновления UI кнопок (для загрузки данных)
function setExerciseTypeUniversal(type) {
    const label = document.getElementById('exerciseUniversalRepsLabel');
    if (label) {
        label.textContent = type === 'seconds' ? 'Секунды' : 'Повторения';
    }
    
    document.querySelectorAll('#exerciseUniversalModal .toggle-btn').forEach(btn => {
        const isActive = btn.dataset.type === type;
        btn.classList.toggle('toggle-btn-active', isActive);
        if (isActive) {
            btn.style.background = 'var(--white)';
            btn.style.color = 'var(--slate)';
        } else {
            btn.style.background = 'transparent';
            btn.style.color = 'var(--slate)';
        }
    });
}

// ★★★ ВЫБОР ЗНАЧКА ★★★
document.querySelectorAll('#universalIconPicker .icon-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('#universalIconPicker .icon-option').forEach(e => e.classList.remove('icon-option-active'));
        this.classList.add('icon-option-active');
    });
});

// Сохранить упражнение из универсальной модалки
document.getElementById('exerciseUniversalSaveBtn')?.addEventListener('click', function() {
    const name = document.getElementById('exerciseUniversalName').value.trim();
    const sets = document.getElementById('exerciseUniversalSets').value.trim();
    const reps = document.getElementById('exerciseUniversalReps').value.trim();
    const weightDisplay = document.getElementById('exerciseUniversalWeightDisplay');
    let weight = parseFloat(weightDisplay.textContent.replace(' кг', '')) || 0;
    
    const nameInput = document.getElementById('exerciseUniversalName');
    const setsInput = document.getElementById('exerciseUniversalSets');
    const repsInput = document.getElementById('exerciseUniversalReps');
    
    [nameInput, setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    
    let hasError = false;
    let errorMessage = '';
    
    if (!name) {
        nameInput.classList.add('error');
        hasError = true;
        errorMessage = 'Введите название упражнения';
    }
    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) {
        setsInput.classList.add('error');
        hasError = true;
        if (!errorMessage) errorMessage = 'Подходы должны быть от 1 до 5';
    }
    if (!reps || parseInt(reps) < 1 || parseInt(reps) > 60) {
        repsInput.classList.add('error');
        hasError = true;
        if (!errorMessage) errorMessage = 'Повторения должны быть от 1 до 60';
    }
    
    if (hasError) {
        showToast('⚠️ ' + errorMessage);
        return;
    }
    
    // Определяем тип
    const activeBtn = document.querySelector('#exerciseUniversalModal .toggle-btn-active');
    const isSeconds = activeBtn ? activeBtn.dataset.type === 'seconds' : false;
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;
    
    // ★★★ ПОЛУЧАЕМ ВЫБРАННЫЙ ЗНАЧОК (ЕСЛИ БЛОК ВИДЕН) ★★★
    let icon = null;
    const iconPickerBlock = document.getElementById('universalIconPickerBlock');
    if (iconPickerBlock && iconPickerBlock.style.display !== 'none') {
        const selectedIcon = document.querySelector('#universalIconPicker .icon-option-active');
        if (selectedIcon) {
            icon = selectedIcon.dataset.icon;
        }
    }
    
    // Создаём объект упражнения
    const exercise = {
        name: name,
        sets: parseInt(sets),
        reps: repsDisplay,
        weight: weight
    };
    
    // Добавляем иконку, если она есть
    if (icon) {
        exercise.icon = icon;
    }
    
    // ★★★ СОХРАНЯЕМ В ЗАВИСИМОСТИ ОТ РЕЖИМА ★★★
    if (universalModalState.mode === 'edit' && universalModalState.index !== null && universalModalState.exercises) {
        // Редактирование
        universalModalState.exercises[universalModalState.index] = exercise;
        
        // ★★★ ЕСЛИ ИЗ СЕССИИ — СОХРАНЯЕМ В ИСХОДНЫЙ ИСТОЧНИК ★★★
        if (universalModalState.source === 'session') {
            saveExerciseToSource(universalModalState.index, exercise);
        }
        
        // Если есть колбэк — вызываем
        if (typeof universalModalState.callback === 'function') {
            universalModalState.callback(universalModalState.index, exercise);
        }
        
        showToast('✅ Упражнение обновлено');
    } else {
        // Создание
        if (universalModalState.exercises) {
            universalModalState.exercises.push(exercise);
        }
        
        // Если есть колбэк — вызываем
        if (typeof universalModalState.callback === 'function') {
            universalModalState.callback(null, exercise);
        }
        
        showToast('✅ Упражнение создано');
    }
    
    closeUniversalExerciseModal();
});

// Отмена в универсальной модалке
document.getElementById('exerciseUniversalCancelBtn')?.addEventListener('click', function() {
    closeUniversalExerciseModal();
});

// Открыть модалку для создания упражнения (из редактирования тренировки)
function openCreateExerciseModal() {
    // Используем editExercises как массив
    openUniversalExerciseModal('create', 'edit', null, editExercises, function(index, exercise) {
        // После создания обновляем UI
        renderEditExercises();
        // Сохраняем в localStorage
        if (editIsCustom || editWorkoutId === 'new') {
            const nameInput = document.getElementById('editWorkoutName');
            if (nameInput) localStorage.setItem('temp_edit_name', nameInput.value);
            localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
            localStorage.setItem('temp_edit_category', editCategory);
            localStorage.setItem('temp_edit_level', editLevel);
            localStorage.setItem('temp_edit_isCustom', editIsCustom);
            localStorage.setItem('temp_edit_id', editWorkoutId || '');
        }
    });
}

// Открыть модалку для редактирования упражнения (из сессии)
function openSessionEditExerciseModal(index) {
    if (index === undefined || index === null || !sessionExercises || !sessionExercises[index]) {
        showToast('⚠️ Упражнение не найдено');
        return;
    }
    openUniversalExerciseModal('edit', 'session', index, sessionExercises, function(index, exercise) {
        // После редактирования обновляем UI сессии
        renderSessionExercise();
        renderSessionProgress();
        
        // ★★★ СОХРАНЯЕМ ИЗМЕНЕНИЯ В ИСХОДНЫЕ ДАННЫЕ ★★★
        if (currentSessionId && sessionData) {
            // Обновляем в sessionData.exercises
            if (sessionData.exercises && sessionData.exercises[index]) {
                sessionData.exercises[index] = { ...exercise };
            }
            // Обновляем в coopExercises
            if (coopExercises && coopExercises[index]) {
                coopExercises[index] = { ...exercise };
            }
            // Обновляем в sessionExercises
            if (sessionExercises && sessionExercises[index]) {
                sessionExercises[index] = { ...exercise };
            }
            
            // ★★★ СОХРАНЯЕМ В ИСХОДНЫЙ ИСТОЧНИК ★★★
            saveExerciseToSource(index, exercise);
            
            // Обновляем прогресс
            updateCoopProgress(sessionCompleted.size, false);
        } else {
            // ★★★ ДЛЯ ОБЫЧНОЙ СЕССИИ (НЕ СОВМЕСТНОЙ) ★★★
            saveExerciseToSource(index, exercise);
        }
        
        showToast('✅ Упражнение обновлено');
    });
}

// ★★★ НОВАЯ ФУНКЦИЯ: СОХРАНЕНИЕ УПРАЖНЕНИЯ В ИСХОДНЫЙ ИСТОЧНИК ★★★
function saveExerciseToSource(index, exercise) {
    if (index === undefined || index === null) return;
    
    const workoutTitle = sessionWorkoutTitle || '';
    const cleanTitle = workoutTitle.replace(' (совместно)', '').trim();
    
    let saved = false;
    
    // ★★★ 1. ПРОВЕРЯЕМ ЛИЧНЫЕ ТРЕНИРОВКИ (myCustomWorkouts) ★★★
    const allWorkouts = getMyWorkouts();
    for (const workout of allWorkouts) {
        if (workout.title === cleanTitle) {
            if (workout.exercises && workout.exercises[index]) {
                workout.exercises[index] = { ...exercise };
                saveMyWorkouts(allWorkouts);
                saved = true;
                console.log('✅ Сохранено в личные тренировки:', workout.title);
                break;
            }
        }
    }
    
    // ★★★ 2. ЕСЛИ НЕ НАШЛИ В ЛИЧНЫХ — ИЩЕМ В ГОТОВЫХ (exercisesData) ★★★
    if (!saved) {
        for (const parent in exercisesData) {
            if (typeof exercisesData[parent] === 'object') {
                for (const category in exercisesData[parent]) {
                    if (typeof exercisesData[parent][category] === 'object') {
                        for (const level in exercisesData[parent][category]) {
                            if (level === '_premium' || level === '_restTime') continue;
                            
                            const levelData = exercisesData[parent][category][level];
                            let exercisesArray = null;
                            let titleFromData = '';
                            
                            if (Array.isArray(levelData)) {
                                exercisesArray = levelData;
                                titleFromData = category + ' ' + level;
                            } else if (levelData && typeof levelData === 'object' && levelData._exercises) {
                                exercisesArray = levelData._exercises;
                                titleFromData = levelData._title || category + ' ' + level;
                            }
                            
                            if (exercisesArray && exercisesArray[index]) {
                                // Проверяем совпадение по названию тренировки
                                const isMatch = 
                                    titleFromData === cleanTitle || 
                                    category === cleanTitle ||
                                    cleanTitle.includes(category) ||
                                    category.includes(cleanTitle);
                                
                                if (isMatch) {
                                    exercisesArray[index] = { ...exercise };
                                    saveExercisesData();
                                    saved = true;
                                    console.log('✅ Сохранено в готовые тренировки:', titleFromData);
                                    break;
                                }
                            }
                        }
                        if (saved) break;
                    }
                    if (saved) break;
                }
                if (saved) break;
            }
        }
    }
    
    // ★★★ 3. ЕСЛИ НЕ НАШЛИ — СОХРАНЯЕМ В СЕССИЮ (КАК FALLBACK) ★★★
    if (!saved) {
        // Сохраняем в sessionExercises (уже есть)
        // И в sessionData.exercises
        if (sessionData && sessionData.exercises && sessionData.exercises[index]) {
            sessionData.exercises[index] = { ...exercise };
        }
        if (coopExercises && coopExercises[index]) {
            coopExercises[index] = { ...exercise };
        }
        console.log('⚠️ Не найдено исходное место, сохранено только в сессии');
    }
}

// =================== МОДАЛКА ТРЕНИРОВОК ЗА ДЕНЬ ===================
async function openDayWorkoutsModal(year, month, day) {
    const dateObj = new Date(year, month, day);
    const dateStr = dateObj.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    document.getElementById('dayWorkoutsDate').textContent = dateStr;
    
    const container = document.getElementById('dayWorkoutsList');
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Загрузка...</div>';
    
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Авторизуйтесь, чтобы увидеть тренировки</div>';
            openModal('dayWorkoutsModal');
            return;
        }
        
        const result = await getUserWorkoutsFromFirestore(user.uid);
        if (!result.success) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Ошибка загрузки тренировок</div>';
            openModal('dayWorkoutsModal');
            return;
        }
        
        const targetDate = new Date(year, month, day);
        targetDate.setHours(0, 0, 0, 0);
        const nextDay = new Date(targetDate);
        nextDay.setDate(nextDay.getDate() + 1);
        
        const dayWorkouts = result.data.filter(w => {
            const workoutDate = new Date(w.date);
            return workoutDate >= targetDate && workoutDate < nextDay;
        });
        
        const filteredWorkouts = dayWorkouts.filter(w => {
            const icon = getWorkoutIcon(w);
            return icon && icon !== 'charging';
        });
        
        if (filteredWorkouts.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">В этот день тренировок не было :(</div>';
        } else {
            filteredWorkouts.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            container.innerHTML = filteredWorkouts.map(w => {
                const totalEx = w.exercises?.length || 0;
                const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
                const xpEarned = w.xpEarned || 0;
                const minutes = Math.floor((w.durationSeconds || 0) / 60);
                const detailsText = `${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned.toFixed(1)} XP`;
                const workoutTime = new Date(w.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
                
                return `
                    <div class="history-item" style="margin-bottom:0.5rem;">
                        <div class="history-item-header">
                            <strong class="history-item-title">${w.title || 'Тренировка'}</strong>
                            <span class="history-item-date">${workoutTime}</span>
                        </div>
                        <div class="history-item-details">${detailsText}</div>
                    </div>
                `;
            }).join('');
        }
        
    } catch (error) {
        console.error('Ошибка загрузки тренировок за день:', error);
        container.innerHTML = '<div style="text-align:center;color:#EF4444;padding:1rem;">Ошибка загрузки</div>';
    }
    
    openModal('dayWorkoutsModal');
}


function openDailyTaskHelpModal(taskId) {
    const task = dailyTasksList.find(t => t.id === taskId);
    if (!task) {
        showToast('⚠️ Задание не найдено');
        return;
    }

    // Проверяем, не выполнено ли уже
    if (task.completed) {
        showToast('ℹ️ Задание уже выполнено');
        return;
    }

    // ДЛЯ БЛОКА EXERCISE - ОСОБАЯ ЛОГИКА
    if (task.block === 'exercise') {
        // Заполняем модалку для упражнения
        document.getElementById('dailyTaskHelpTitle').textContent = task.name;
        document.getElementById('dailyTaskHelpIcon').innerHTML = `<i class="${task.icon || 'fa-solid fa-dumbbell'}" style="color: var(--accent);"></i>`;
        document.getElementById('dailyTaskHelpText').textContent = `Для прохождения задания "${task.name}" нужно выполнить упражнение ${task.name} ${task.target} ${task.unit}.`;
        
        document.getElementById('dailyTaskHelpActionBtn').onclick = function() {
            closeModal('dailyTaskHelpModal');
            startTaskSession(taskId);
        };
        
        openModal('dailyTaskHelpModal');
        return;
    }

    // ДЛЯ ЗАДАНИЙ ИЗ БЛОКА FRIENDS
    if (task.block === 'friends') {
        let title = task.name;
        let icon = task.icon || 'fa-solid fa-user-group';
        let text = '';
        let action = null;
        
        if (task.id === 'friends_1') {
            text = 'Для прохождения задания "Дружный" нужно выбрать любую тренировку, нажать на кнопку "Совместная", выбрать друга и выполнить совместную тренировку.';
            action = function() {
                closeModal('dailyTaskHelpModal');
                TabManager.workouts('ready');
                window.navigateTo('workouts');
            };
        } else if (task.id === 'friends_2') {
            text = 'Для прохождения задания "Дружелюбный" нужно перейти на страницу друзей и открыть профиль любого друга.';
            action = function() {
                closeModal('dailyTaskHelpModal');
                TabManager.profile('friends');
                window.navigateTo('profile');
                setTimeout(() => renderFriendsInProfile(), 300);
            };
        } else if (task.id === 'friends_3') {
            text = 'Для прохождения задания "Общительный" нужно перейти на страницу друзей и добавить друга в друзья.';
            action = function() {
                closeModal('dailyTaskHelpModal');
                TabManager.profile('friends');
                window.navigateTo('profile');
                setTimeout(() => renderFriendsInProfile(), 300);
            };
        }
        
        document.getElementById('dailyTaskHelpTitle').textContent = title;
        document.getElementById('dailyTaskHelpIcon').innerHTML = `<i class="${icon}" style="color: var(--accent);"></i>`;
        document.getElementById('dailyTaskHelpText').textContent = text;
        document.getElementById('dailyTaskHelpActionBtn').onclick = action;
        
        openModal('dailyTaskHelpModal');
        return;
    }

    // ДЛЯ ЗАДАНИЙ ИЗ БЛОКА STATS_EXERCISE
    if (task.block === 'stats_exercise') {
        document.getElementById('dailyTaskHelpTitle').textContent = 'Спортсмен';
        document.getElementById('dailyTaskHelpIcon').innerHTML = `<i class="fa-solid fa-chart-bar" style="color: var(--accent);"></i>`;
        document.getElementById('dailyTaskHelpText').textContent = `Для прохождения задания "Спортсмен" нужно выполнить ${task.target} упражнений.`;
        document.getElementById('dailyTaskHelpActionBtn').onclick = function() {
            closeModal('dailyTaskHelpModal');
            TabManager.workouts('ready');
            window.navigateTo('workouts');
        };
        
        openModal('dailyTaskHelpModal');
        return;
    }

    // ДЛЯ ЗАДАНИЙ ИЗ БЛОКА STATS_TIME
    if (task.block === 'stats_time') {
        document.getElementById('dailyTaskHelpTitle').textContent = 'Атлет';
        document.getElementById('dailyTaskHelpIcon').innerHTML = `<i class="fa-solid fa-stopwatch" style="color: var(--accent);"></i>`;
        document.getElementById('dailyTaskHelpText').textContent = `Для прохождения задания "Атлет" нужно тренироваться ${task.target} минут.`;
        document.getElementById('dailyTaskHelpActionBtn').onclick = function() {
            closeModal('dailyTaskHelpModal');
            TabManager.workouts('ready');
            window.navigateTo('workouts');
        };
        
        openModal('dailyTaskHelpModal');
        return;
    }

    // ДЛЯ ЗАДАНИЙ ИЗ БЛОКА SMART_STATS
    if (task.block === 'smart_stats') {
        if (task.type === 'smart_exercise') {
            document.getElementById('dailyTaskHelpTitle').textContent = `Упражнения на ${task.category}`;
            document.getElementById('dailyTaskHelpIcon').innerHTML = `<i class="fa-solid fa-trophy" style="color: var(--accent);"></i>`;
            document.getElementById('dailyTaskHelpText').textContent = `Для прохождения задания "Упражнения на ${task.category}" нужно выполнить ${task.target} упражнений, которые относятся к группе мышц "${task.category}".`;
            document.getElementById('dailyTaskHelpActionBtn').onclick = function() {
                closeModal('dailyTaskHelpModal');
                const categoryMap = {
                    'Руки': 'Руки',
                    'Плечи': 'Плечи',
                    'Пресс': 'Пресс',
                    'Грудь': 'Грудь',
                    'Спина': 'Спина',
                    'Ноги': 'Ноги',
                    'Ягодицы': 'Ягодицы',
                    'Кардио': 'Кардио',
                    'Гибкость': 'Растяжка',
                    'Всё тело': 'Всё тело'
                };
                const category = categoryMap[task.category] || task.category;
                window.navigateTo('level-select', { category: category });
            };
        } else if (task.type === 'smart_workout') {
            document.getElementById('dailyTaskHelpTitle').textContent = `Тренировка ${task.category}`;
            document.getElementById('dailyTaskHelpIcon').innerHTML = `<i class="fa-solid fa-trophy" style="color: var(--accent);"></i>`;
            document.getElementById('dailyTaskHelpText').textContent = `Для прохождения задания "Тренировка ${task.category}" нужно выполнить любую готовую тренировку из категории "${task.category}".`;
            document.getElementById('dailyTaskHelpActionBtn').onclick = function() {
                closeModal('dailyTaskHelpModal');
                const categoryMap = {
                    'Руки': 'Руки',
                    'Плечи': 'Плечи',
                    'Пресс': 'Пресс',
                    'Грудь': 'Грудь',
                    'Спина': 'Спина',
                    'Ноги': 'Ноги',
                    'Ягодицы': 'Ягодицы',
                    'Кардио': 'Кардио',
                    'Гибкость': 'Растяжка',
                    'Всё тело': 'Всё тело'
                };
                const category = categoryMap[task.category] || task.category;
                window.navigateTo('level-select', { category: category });
            };
        }
        
        openModal('dailyTaskHelpModal');
        return;
    }
}

// =================== ФУНКЦИЯ START TASK SESSION ===================
function startTaskSession(taskId) {
    const task = dailyTasksList.find(t => t.id === taskId);
    if (!task) {
        showToast('⚠️ Задание не найдено');
        return;
    }

    const isSeconds = task.unit === 'сек' || task.unit === 'seconds' || task.unit === 'секунд';
    const target = task.target;

    const exercise = {
        name: task.name,
        sets: 1,
        reps: isSeconds ? target + ' секунд' : target,
        weight: 0,
        icon: null
    };

    // Сбрасываем таймеры
    if (taskExerciseTimerInterval) {
        clearInterval(taskExerciseTimerInterval);
        taskExerciseTimerInterval = null;
    }
    taskSessionSeconds = 0;
    if (taskTimerInterval) {
        clearInterval(taskTimerInterval);
        taskTimerInterval = null;
    }

    taskSessionData = {
        taskId: taskId,
        task: task,
        exercise: exercise,
        target: target,
        isSeconds: isSeconds,
        startTime: Date.now(),
        elapsedSeconds: 0,
        remainingSeconds: isSeconds ? target : 0,
        isActive: true
    };

    console.log('📊 taskSessionData создан:', taskSessionData);

    // Обновляем UI
    const nameEl = document.getElementById('taskExerciseName');
    const detailsEl = document.getElementById('taskExerciseDetails');
    
    if (nameEl) nameEl.textContent = task.name;
    if (detailsEl) {
        const detailsText = isSeconds ? `${target} секунд` : `${target} повторений`;
        detailsEl.textContent = detailsText;
    }

    // УПРАВЛЕНИЕ ТАЙМЕРОМ И КНОПКОЙ
    const timerWrapper = document.getElementById('taskExerciseTimerWrapper');
    const finishBtn = document.getElementById('taskFinishBtn');

    if (isSeconds) {
        console.log('⏱️ Временное упражнение: показываем таймер');
        // ДЛЯ СЕКУНД — ПОКАЗЫВАЕМ ТАЙМЕР, КНОПКА ПОКАЗЫВАЕТ СТАРТ
        if (timerWrapper) timerWrapper.style.display = 'flex';
        if (finishBtn) {
            finishBtn.textContent = 'СТАРТ';
            finishBtn.style.background = 'var(--accent)';
            finishBtn.disabled = false;
        }
        updateTaskExerciseTimerDisplay();
    } else {
        console.log('📌 Упражнение с повторениями: скрываем таймер');
        // ДЛЯ ПОВТОРЕНИЙ — СКРЫВАЕМ ТАЙМЕР, КНОПКА ПОКАЗЫВАЕТ ФИНИШ
        if (timerWrapper) timerWrapper.style.display = 'none';
        if (finishBtn) {
            finishBtn.textContent = 'ФИНИШ';
            finishBtn.style.background = 'var(--accent)';
            finishBtn.disabled = false;
        }
    }

    renderTaskProgress();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('page-active'));
    document.getElementById('page-task-session').classList.add('page-active');
    document.getElementById('bottomNav').style.display = 'none';

    startTaskTimer();
    
    console.log('✅ Специальная сессия запущена:', task.name);
}

// =================== ФУНКЦИЯ ОБНОВЛЕНИЯ ТАЙМЕРА УПРАЖНЕНИЯ ===================
function updateTaskExerciseTimerDisplay() {
    const display = document.getElementById('taskExerciseTimer');
    if (!display) return;
    
    if (!taskSessionData) {
        display.textContent = '00:00';
        return;
    }
    
    if (taskSessionData.isSeconds) {
        const rem = Math.max(0, taskSessionData.remainingSeconds);
        const mins = String(Math.floor(rem / 60)).padStart(2, '0');
        const secs = String(rem % 60).padStart(2, '0');
        display.textContent = `${mins}:${secs}`;
    } else {
        const elapsed = taskSessionData.elapsedSeconds || 0;
        const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const secs = String(elapsed % 60).padStart(2, '0');
        display.textContent = `${mins}:${secs}`;
    }
}


// Обработчики кнопок
document.getElementById('taskQuitBtn').addEventListener('click', function() {
    if (taskSessionData) {
        clearInterval(taskSessionData.timerInterval);
        taskSessionData = null;
        showToast('❌ Задание не выполнено');
        // Переход на профиль (вкладка "Мой")
        TabManager.profile('my');
        window.navigateTo('profile');
        document.getElementById('bottomNav').style.display = 'block';
    }
});

document.getElementById('taskFinishBtn').addEventListener('click', function() {
    if (!taskSessionData) return;
    clearInterval(taskSessionData.timerInterval);

    // Определяем фактическое время (для повторений)
    let actualSeconds = 0;
    if (taskSessionData.isSeconds) {
        // сколько прошло: target - remaining
        actualSeconds = taskSessionData.target - taskSessionData.remainingSeconds;
    } else {
        actualSeconds = taskSessionData.elapsedSeconds;
    }

    // Открываем модалку выбора количества
    openTaskResultModal(taskSessionData, actualSeconds);
});

function openTaskResultModal(sessionData, actualSeconds) {
    const oldModal = document.getElementById('taskResultModal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'taskResultModal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title" style="text-align:center;">${sessionData.exercise.name}</div>
            <p class="modal-text" style="margin: 0.5rem 0 1.5rem 0; text-align:center;">
                Сколько повторений вы выполнили?
            </p>
            <div style="display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:1.5rem;">
                <button class="btn btn-secondary" id="taskResultDec" style="width:40px; height:40px; border-radius:10px; font-size:1.5rem; padding:0; display:flex; align-items:center; justify-content:center;">−</button>
                <span id="taskResultValue" style="font-size:2.5rem; font-weight:700; min-width:4rem; text-align:center; color:var(--accent);">${sessionData.target}</span>
                <button class="btn btn-secondary" id="taskResultInc" style="width:40px; height:40px; border-radius:10px; font-size:1.5rem; padding:0; display:flex; align-items:center; justify-content:center;">+</button>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-secondary" id="taskResultCancel" style="flex:1;">Отмена</button>
                <button class="btn btn-primary" id="taskResultConfirm" style="flex:1;">Продолжить</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    let currentValue = sessionData.target;
    const minValue = 0;
    const maxValue = 999;

    document.getElementById('taskResultDec').addEventListener('click', function(e) {
        e.stopPropagation();
        currentValue = Math.max(minValue, currentValue - 1);
        document.getElementById('taskResultValue').textContent = currentValue;
    });
    
    document.getElementById('taskResultInc').addEventListener('click', function(e) {
        e.stopPropagation();
        currentValue = Math.min(maxValue, currentValue + 1);
        document.getElementById('taskResultValue').textContent = currentValue;
    });

    document.getElementById('taskResultCancel').addEventListener('click', function() {
        modal.remove();
        if (taskSessionData) {
            taskSessionData.isActive = true;
            startTaskTimer();
        }
        const finishBtn = document.getElementById('taskFinishBtn');
        if (finishBtn) {
            finishBtn.textContent = 'ФИНИШ';
            finishBtn.style.background = 'var(--accent)';
            finishBtn.disabled = false;
        }
    });

    document.getElementById('taskResultConfirm').addEventListener('click', async function() {
        const entered = currentValue;
        const target = sessionData.target;
        const isCompleted = entered >= target;
        const taskId = sessionData.taskId;
        const exercise = sessionData.exercise;
        const exerciseName = exercise.name;

        modal.remove();

        if (taskSessionData) {
            taskSessionData.isActive = false;
            if (taskSessionData.timerInterval) {
                clearInterval(taskSessionData.timerInterval);
                taskSessionData.timerInterval = null;
            }
            taskSessionData = null;
        }
        stopTaskTimer();
        if (taskExerciseTimerInterval) {
            clearInterval(taskExerciseTimerInterval);
            taskExerciseTimerInterval = null;
        }

        const tempExercise = {
            name: exercise.name,
            sets: 1,
            reps: entered,
            weight: 0,
            icon: exercise.icon || null
        };

        let durationSeconds = actualSeconds || 0;

        // ★★★ 1. НАЧИСЛЯЕМ XP ★★★
        const xpForExercise = calculateExerciseXP(tempExercise, 1);
        await addSingleExerciseToStats(tempExercise, durationSeconds, xpForExercise);
        console.log('✅ XP за упражнение начислено:', xpForExercise);

        // ★★★ 2. ОБНОВЛЯЕМ ДНЕВНОЙ ПРОГРЕСС (СУММИРУЕМ) ★★★
        const dailyProgress = updateDailyProgressForExercise(exerciseName, entered);
        console.log('📊 Дневной прогресс по упражнению "' + exerciseName + '": ' + dailyProgress.exerciseReps[exerciseName] + '/' + target);

        // ★★★ 3. ПРОВЕРЯЕМ, ВЫПОЛНЕНО ЛИ ЗАДАНИЕ ★★★
        if (dailyProgress.exerciseReps[exerciseName] >= target) {
            await completeDailyTaskIfExists(taskId);
            showToast('✅ Задание "' + exerciseName + '" выполнено!');
        } else {
            const remaining = target - dailyProgress.exerciseReps[exerciseName];
            showToast('📊 Выполнено ' + dailyProgress.exerciseReps[exerciseName] + ' из ' + target + '. Осталось ' + remaining);
        }

        TabManager.profile('my');
        window.navigateTo('profile');
        document.getElementById('bottomNav').style.display = 'block';
    });
}

// Функция добавления одного упражнения в статистику (без тренировки)
async function addSingleExerciseToStats(exercise, durationSeconds, xpEarned) {
    const user = await getFirebaseUser();
    if (!user) return;

    // Получаем текущий профиль
    const profileResult = await getUserProfile(user.uid);
    if (profileResult.success) {
        const currentXp = profileResult.data.totalXp || 0;
        await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
    }

    // Добавляем упражнение как отдельную запись в workout
    const workoutData = {
        title: 'Одиночное упражнение: ' + exercise.name,
        date: new Date().toISOString(),
        durationSeconds: durationSeconds,
        exercises: [{ ...exercise, completed: true }],
        xpEarned: xpEarned,
        category: 'Одиночное',
        icon: exercise.icon,
        isSingle: true
    };

    const result = await saveWorkoutToFirestore(user.uid, workoutData);
    if (!result.success) {
        addPendingWorkout(workoutData);
    }
}

function openTaskHelpModal(taskId) {
    const isCompleted = tasks[taskId] === true;
    
    const configs = {
        1: {
            title: 'Первый шаг',
            icon: 'fa-solid fa-dumbbell',
            text: 'Для прохождения задания "Первый шаг" нужно перейти на страницу тренировок и выполнить любую тренировку.',
            completedText: 'Задание "Первый шаг" выполнено!',
            action: function() {
                closeModal('taskHelpModal');
                TabManager.workouts('ready');
                window.navigateTo('workouts');
            }
        },
        2: {
            title: 'Статистика',
            icon: 'fa-solid fa-chart-bar',
            text: 'Для прохождения задания "Статистика" нужно перейти на страницу статистики и посмотреть свои результаты.',
            completedText: 'Задание "Статистика" выполнено!',
            action: function() {
                closeModal('taskHelpModal');
                TabManager.stats('personal');
                window.navigateTo('stats');
            }
        },
        3: {
            title: 'Индивидуальность',
            icon: 'fa-solid fa-drafting-compass',
            text: 'Для прохождения задания "Индивидуальность" нужно перейти на страницу личных тренировок и создать свою собственную тренировку.',
            completedText: 'Задание "Индивидуальность" выполнено!',
            action: function() {
                closeModal('taskHelpModal');
                TabManager.workouts('my');
                window.navigateTo('workouts');
            }
        },
        4: {
            title: 'Новые знакомства',
            icon: 'fa-solid fa-user-plus',
            text: 'Для прохождения задания "Новые знакомства" нужно перейти на страницу друзей и добавить друга в друзья.',
            completedText: 'Задание "Новые знакомства" выполнено!',
            action: function() {
                closeModal('taskHelpModal');
                TabManager.profile('friends');
                window.navigateTo('profile');
                setTimeout(() => renderFriendsInProfile(), 300);
            }
        },
        5: {
            title: 'Оформление',
            icon: 'fa-solid fa-palette',
            text: 'Для прохождения задания "Оформление" нужно изменить акцентный цвет приложения в дополнительных настройках.',
            completedText: 'Задание "Оформление" выполнено!',
            action: function() {
                closeModal('taskHelpModal');
                TabManager.profile('my');
                window.navigateTo('profile');
                setTimeout(() => {
                    const settingsBlock = document.getElementById('settings-block-main');
                    if (settingsBlock) {
                        settingsBlock.classList.add('open');
                        saveBlocksState();
                    }
                }, 300);
            }
        }
    };

    const config = configs[taskId];
    if (!config) {
        console.warn('⚠️ Задание с id ' + taskId + ' не найдено');
        return;
    }

    const titleEl = document.getElementById('taskHelpTitle');
    const iconEl = document.getElementById('taskHelpIcon');
    const textEl = document.getElementById('taskHelpText');
    const actionBtn = document.getElementById('taskHelpActionBtn');
    const cancelBtn = document.getElementById('taskHelpCancelBtn');

    if (!titleEl || !iconEl || !textEl) {
        console.error('❌ Элементы модалки не найдены!');
        showToast('⚠️ Ошибка отображения подсказки');
        return;
    }

    titleEl.textContent = config.title;
    iconEl.innerHTML = `<i class="${config.icon}" style="color: var(--accent);"></i>`;
    
    if (isCompleted) {
        textEl.textContent = config.completedText;
        if (actionBtn) actionBtn.style.display = 'none';
        if (cancelBtn) {
            cancelBtn.textContent = 'Понятно';
            cancelBtn.className = 'btn btn-primary';
            cancelBtn.onclick = function() {
                closeModal('taskHelpModal');
            };
        }
    } else {
        textEl.textContent = config.text;
        if (actionBtn) {
            actionBtn.style.display = 'block';
            actionBtn.onclick = config.action;
        }
        if (cancelBtn) {
            cancelBtn.textContent = 'Отмена';
            cancelBtn.className = 'btn btn-secondary';
            cancelBtn.onclick = function() {
                closeModal('taskHelpModal');
            };
        }
    }

    openModal('taskHelpModal');
}

document.getElementById('taskQuitBtn')?.addEventListener('click', function() {
    if (!taskSessionData) {
        showToast('❌ Задание не выполнено');
        return;
    }
    
    stopTaskTimer();
    if (taskExerciseTimerInterval) {
        clearInterval(taskExerciseTimerInterval);
        taskExerciseTimerInterval = null;
    }
    taskSessionData.isActive = false;
    
    showToast('❌ Задание не выполнено');
    
    taskSessionData = null;
    taskSessionSeconds = 0;
    
    TabManager.profile('my');
    window.navigateTo('profile');
    document.getElementById('bottomNav').style.display = 'block';
});

// Отладка - переопределяем openTaskResultModal
const originalOpenTaskResultModal = window.openTaskResultModal;
window.openTaskResultModal = function(...args) {
    console.trace('🔴 Вызвана openTaskResultModal!');
    console.log('📊 Аргументы:', args);
    // Проверяем, откуда вызвана
    if (taskSessionData && taskSessionData.isSeconds) {
        console.warn('⚠️ openTaskResultModal вызвана для временного упражнения! Это ошибка!');
        return;
    }
    originalOpenTaskResultModal(...args);
};

// =================== ОБРАБОТЧИК КНОПКИ taskFinishBtn (ПОЛНОСТЬЮ ИСПРАВЛЕННЫЙ) ===================
document.getElementById('taskFinishBtn')?.addEventListener('click', function() {
    const btn = this;
    
    console.log('🔵 Нажата кнопка taskFinishBtn');
    console.log('📊 taskSessionData:', taskSessionData);
    
    // ★★★ ПРОВЕРЯЕМ, ЕСТЬ ЛИ ДАННЫЕ СЕССИИ ★★★
    if (!taskSessionData) {
        console.warn('⚠️ Нет данных сессии');
        return;
    }
    
    // ★★★ ДЛЯ УПРАЖНЕНИЙ НА ПОВТОРЕНИЯ — КНОПКА ФИНИШ → ОТКРЫВАЕМ МОДАЛКУ ★★★
    if (!taskSessionData.isSeconds) {
        console.log('📌 Повторения: открываем модалку');
        // Останавливаем основной таймер
        stopTaskTimer();
        
        let actualSeconds = taskSessionData.elapsedSeconds || 0;
        openTaskResultModal(taskSessionData, actualSeconds);
        return;
    }
    
    // ★★★ ДЛЯ УПРАЖНЕНИЙ СО ВРЕМЕНЕМ — СТАРТ/СТОП (МОДАЛКА НЕ ОТКРЫВАЕТСЯ) ★★★
    if (taskSessionData.isSeconds) {
        console.log('⏱️ Время: режим СТАРТ/СТОП');
        
        if (btn.textContent === 'СТАРТ') {
            console.log('▶️ Запускаем таймер');
            // ЗАПУСКАЕМ ТАЙМЕР
            btn.textContent = 'СТОП';
            btn.style.background = 'var(--danger)';
            
            // Если время обнулилось - сбрасываем
            if (taskSessionData.remainingSeconds <= 0) {
                taskSessionData.remainingSeconds = taskSessionData.target;
            }
            
            if (taskExerciseTimerInterval) {
                clearInterval(taskExerciseTimerInterval);
            }
            taskExerciseTimerInterval = setInterval(() => {
                if (!taskSessionData || !taskSessionData.isActive) return;
                
                taskSessionData.remainingSeconds = Math.max(0, taskSessionData.remainingSeconds - 1);
                updateTaskExerciseTimerDisplay();
                
                // ЕСЛИ ВРЕМЯ ВЫШЛО — АВТОМАТИЧЕСКИ ЗАВЕРШАЕМ
                if (taskSessionData.remainingSeconds <= 0) {
                    console.log('⏰ Время вышло! Автоматическое завершение');
                    clearInterval(taskExerciseTimerInterval);
                    taskExerciseTimerInterval = null;
                    btn.textContent = 'СТАРТ';
                    btn.style.background = 'var(--accent)';
                    
// АВТОМАТИЧЕСКИ ВЫПОЛНЯЕМ ЗАДАНИЕ (БЕЗ МОДАЛКИ)
(async function() {
    const taskId = taskSessionData.taskId;
    const exercise = taskSessionData.exercise;
    const exerciseName = exercise.name;
    const target = taskSessionData.target;
    
    const tempExercise = {
        name: exercise.name,
        sets: 1,
        reps: exercise.reps,
        weight: 0,
        icon: exercise.icon || null
    };
    
    const xpForExercise = calculateExerciseXP(tempExercise, 1);
    await addSingleExerciseToStats(tempExercise, taskSessionData.target, xpForExercise);
    console.log('✅ XP за упражнение начислено:', xpForExercise);
    
    // ★★★ ОБНОВЛЯЕМ ДНЕВНОЙ ПРОГРЕСС ★★★
    const dailyProgress = updateDailyProgressForExercise(exerciseName, target);
    console.log('📊 Дневной прогресс по упражнению "' + exerciseName + '": ' + dailyProgress.exerciseReps[exerciseName] + '/' + target);
    
    // ★★★ ПРОВЕРЯЕМ, ВЫПОЛНЕНО ЛИ ЗАДАНИЕ ★★★
    if (dailyProgress.exerciseReps[exerciseName] >= target) {
        await completeDailyTaskIfExists(taskId);
        showToast('✅ Задание "' + exerciseName + '" выполнено!');
    } else {
        const remaining = target - dailyProgress.exerciseReps[exerciseName];
showToast('❌ Задание не выполнено.');    }
    
    stopTaskTimer();
    taskSessionData.isActive = false;
    taskSessionData = null;
    taskSessionSeconds = 0;
    
    TabManager.profile('my');
    window.navigateTo('profile');
    document.getElementById('bottomNav').style.display = 'block';
})();
                }
            }, 1000);
            
        } else if (btn.textContent === 'СТОП') {
            console.log('⏹️ Останавливаем таймер');
            // ОСТАНАВЛИВАЕМ ТАЙМЕР
            btn.textContent = 'СТАРТ';
            btn.style.background = 'var(--accent)';
            if (taskExerciseTimerInterval) {
                clearInterval(taskExerciseTimerInterval);
                taskExerciseTimerInterval = null;
            }
        }
        // ★★★ ВАЖНО: ЗДЕСЬ НЕТ ВЫЗОВА openTaskResultModal ★★★
        return;
    }
});

function renderTaskProgress() {
    const container = document.getElementById('taskSessionProgress');
    if (!container) return;
    container.innerHTML = '';
    const dash = document.createElement('div');
    dash.className = 'progress-dash progress-dash-active';
    container.appendChild(dash);
}

function startTaskTimer() {
    if (taskTimerInterval) {
        clearInterval(taskTimerInterval);
        taskTimerInterval = null;
    }
    taskTimerInterval = setInterval(() => {
        taskSessionSeconds++;
        updateTaskTimerDisplay2();
        
        // ДЛЯ ПОВТОРЕНИЙ — ОБНОВЛЯЕМ elapsedSeconds
        if (taskSessionData && !taskSessionData.isSeconds) {
            taskSessionData.elapsedSeconds = taskSessionSeconds;
            updateTaskExerciseTimerDisplay();
        }
    }, 1000);
}

function updateTaskTimerDisplay2() {
    const timer = document.getElementById('taskSessionTimer');
    if (!timer) return;
    const mins = String(Math.floor(taskSessionSeconds / 60)).padStart(2, '0');
    const secs = String(taskSessionSeconds % 60).padStart(2, '0');
    timer.textContent = `${mins}:${secs}`;
}

function stopTaskTimer() {
    if (taskTimerInterval) {
        clearInterval(taskTimerInterval);
        taskTimerInterval = null;
    }
}

// =================== ОБРАБОТЧИК КНОПКИ СТАРТ/СТОП ===================
document.getElementById('taskStartStopBtn')?.addEventListener('click', function() {
    const btn = this;
    
    if (btn.textContent === 'СТАРТ') {
        btn.textContent = 'СТОП';
        btn.style.background = 'var(--danger)';
        
        if (taskSessionData && taskSessionData.isSeconds && taskSessionData.remainingSeconds <= 0) {
            taskSessionData.remainingSeconds = taskSessionData.target;
        }
        if (taskSessionData && !taskSessionData.isSeconds) {
            taskSessionData.startTime = Date.now();
        }
        
        if (taskExerciseTimerInterval) {
            clearInterval(taskExerciseTimerInterval);
        }
        taskExerciseTimerInterval = setInterval(() => {
            if (!taskSessionData || !taskSessionData.isActive) return;
            
            if (taskSessionData.isSeconds) {
                taskSessionData.remainingSeconds = Math.max(0, taskSessionData.remainingSeconds - 1);
                updateTaskExerciseTimerDisplay();
                
                // ★★★ ЕСЛИ ВРЕМЯ ВЫШЛО ★★★
                if (taskSessionData.remainingSeconds <= 0) {
                    clearInterval(taskExerciseTimerInterval);
                    taskExerciseTimerInterval = null;
                    btn.textContent = 'СТАРТ';
                    btn.style.background = 'var(--accent)';
                    
                    // ★★★ ВЫПОЛНЯЕМ ЗАДАНИЕ (АСИНХРОННО) ★★★
                    (async function() {
                        const taskId = taskSessionData.taskId;
                        const exercise = taskSessionData.exercise;
                        
                        // 1. Сначала сохраняем упражнение и ждём
    const tempExercise = {
        name: exercise.name,
        sets: 1,
        reps: exercise.reps,
        weight: 0,
        icon: exercise.icon || null
    };
                        
                        const xpForExercise = calculateExerciseXP(tempExercise, 1);
                        await addSingleExerciseToStats(tempExercise, taskSessionData.target, xpForExercise);
                        console.log('✅ XP за упражнение начислено:', xpForExercise);
                        
                        // 2. Теперь начисляем XP за задание (+10) и ЖДЁМ
                        await completeDailyTaskIfExists(taskId);
                        
                        // Останавливаем основной таймер
                        stopTaskTimer();
                        
                        // Очищаем данные
                        taskSessionData.isActive = false;
                        taskSessionData = null;
                        taskSessionSeconds = 0;
                        
                        // Переход на профиль
                        TabManager.profile('my');
                        window.navigateTo('profile');
                        document.getElementById('bottomNav').style.display = 'block';
                    })();
                }
            } else {
                taskSessionData.elapsedSeconds = Math.floor((Date.now() - taskSessionData.startTime) / 1000);
                updateTaskExerciseTimerDisplay();
            }
        }, 1000);
        
    } else {
        btn.textContent = 'СТАРТ';
        btn.style.background = 'var(--accent)';
        if (taskExerciseTimerInterval) {
            clearInterval(taskExerciseTimerInterval);
            taskExerciseTimerInterval = null;
        }
    }
});

// app.js - обновляем getDailyProgress()
function getDailyProgress() {
    const today = new Date().toISOString().split('T')[0];
    const saved = localStorage.getItem(DAILY_PROGRESS_KEY);
    
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.date !== today) {
                const newData = { 
                    date: today, 
                    exercises: 0, 
                    minutes: 0,
                    categories: {},
                    exerciseReps: {}  // ★★★ ДОБАВЛЯЕМ ДЛЯ ФИЗИЧЕСКИХ УПРАЖНЕНИЙ ★★★
                };
                localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newData));
                return newData;
            }
            if (!data.categories) {
                data.categories = {};
            }
            if (!data.exerciseReps) {
                data.exerciseReps = {};  // ★★★ ДОБАВЛЯЕМ ★★★
            }
            return data;
        } catch (e) {
            console.warn('Ошибка загрузки дневного прогресса:', e);
        }
    }
    
    const newData = { 
        date: today, 
        exercises: 0, 
        minutes: 0,
        categories: {},
        exerciseReps: {}  // ★★★ ДОБАВЛЯЕМ ★★★
    };
    localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newData));
    return newData;
}

// app.js - обновляем updateDailyProgress()
function updateDailyProgress(exercisesCompleted, durationMinutes, exercisesWithCategories, exerciseRepsData) {
    const progress = getDailyProgress();
    progress.exercises += exercisesCompleted;
    progress.minutes += durationMinutes;
    
    // Обновляем прогресс по категориям (для smart_exercise)
    if (exercisesWithCategories) {
        for (const [category, count] of Object.entries(exercisesWithCategories)) {
            if (!progress.categories[category]) {
                progress.categories[category] = 0;
            }
            progress.categories[category] += count;
        }
    }
    
    // ★★★ ОБНОВЛЯЕМ ПРОГРЕСС ПО ФИЗИЧЕСКИМ УПРАЖНЕНИЯМ ★★★
    if (exerciseRepsData) {
        for (const [exerciseName, reps] of Object.entries(exerciseRepsData)) {
            if (!progress.exerciseReps[exerciseName]) {
                progress.exerciseReps[exerciseName] = 0;
            }
            progress.exerciseReps[exerciseName] += reps;
        }
    }
    
    localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(progress));
    return progress;
}

// Получить прогресс по конкретной категории за день
function getDailyCategoryProgress(category) {
    const progress = getDailyProgress();
    return progress.categories[category] || 0;
}

// Сбросить дневной прогресс (принудительно)
function resetDailyProgress() {
    const today = new Date().toISOString().split('T')[0];
    const newData = { date: today, exercises: 0, minutes: 0 };
    localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newData));
    return newData;
}

// app.js - добавить новую функцию

function updateDailyProgressForExercise(exerciseName, totalReps) {
    const today = new Date().toISOString().split('T')[0];
    let progress = getDailyProgress();
    
    // Проверяем, не изменилась ли дата
    if (progress.date !== today) {
        progress = { date: today, exercises: 0, minutes: 0, categories: {}, exerciseReps: {} };
    }
    
    // Добавляем повторения
    if (!progress.exerciseReps[exerciseName]) {
        progress.exerciseReps[exerciseName] = 0;
    }
    progress.exerciseReps[exerciseName] += totalReps;
    
    // Добавляем общее количество упражнений (для stats_exercise)
    progress.exercises += 1;
    
    localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(progress));
    return progress;
}

// =================== ИСТОРИЯ ДРУЗЕЙ ===================

// Переменные для фильтра
let selectedFriendForHistory = 'all';
let tempSelectedFriendForHistory = 'all';

/*** Получить историю тренировок всех друзей (с учётом их настроек видимости)*/
async function getFriendsWorkoutHistory() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    try {
        const friendsResult = await getFriendsList();
        if (!friendsResult.success || friendsResult.data.length === 0) {
            return { success: true, data: [] };
        }
        
        const allHistory = [];
        
        for (const friend of friendsResult.data) {
            const friendProfile = await getUserProfile(friend.id);
            if (!friendProfile.success) continue;
            
            // ★★★ ПРОВЕРЯЕМ, РАЗРЕШАЕТ ЛИ ДРУГ ВИДЕТЬ СВОЮ ИСТОРИЮ ★★★
            if (friendProfile.data.friendsHistoryVisible === false) {
                continue;
            }
            
            const workoutsResult = await getUserWorkoutsFromFirestore(friend.id);
            if (workoutsResult.success && workoutsResult.data.length > 0) {
                const filteredWorkouts = workoutsResult.data.filter(w => {
                    const icon = getWorkoutIcon(w);
                    return icon && icon !== 'charging';
                });
                
                filteredWorkouts.forEach(w => {
                    allHistory.push({
                        friendName: friend.displayName || 'Пользователь',
                        friendId: friend.id,
                        friendAvatar: (friend.displayName || 'П')[0].toUpperCase(),
                        ...w
                    });
                });
            }
        }
        
        allHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        return { success: true, data: allHistory };
        
    } catch (error) {
        console.error('Ошибка получения истории друзей:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Сгруппировать историю по друзьям
 */
function groupHistoryByFriend(history) {
    const grouped = {};
    
    history.forEach(item => {
        const key = item.friendId;
        if (!grouped[key]) {
            grouped[key] = {
                friendId: item.friendId,
                friendName: item.friendName,
                friendAvatar: item.friendAvatar,
                workouts: []
            };
        }
        grouped[key].workouts.push(item);
    });
    
    return Object.values(grouped);
}

/**
 * Форматирование даты: сегодня, вчера, X дней назад (до 7 дней), потом DD.MM.YYYY
 */
function formatRelativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffDays = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'сегодня';
    if (diffDays === 1) return 'вчера';
    if (diffDays <= 7) return `${diffDays} дня назад`;
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

/**
 * Обновить отображение выбранного друга в кнопке
 */
function updateSelectedFriendName() {
    const nameEl = document.getElementById('selectedFriendName');
    if (!nameEl) return;
    
    if (selectedFriendForHistory === 'all') {
        nameEl.textContent = 'Все';
        return;
    }
    
    getFriendsList().then(result => {
        if (result.success) {
            const friend = result.data.find(f => f.id === selectedFriendForHistory);
            if (friend) {
                nameEl.textContent = friend.displayName || 'Пользователь';
            } else {
                nameEl.textContent = 'Все';
                selectedFriendForHistory = 'all';
            }
        }
    });
}

/**
 * Открыть модалку выбора друга для истории
 */
function openFriendHistoryFilterModal() {
    const oldModal = document.getElementById('friendHistoryFilterModal');
    if (oldModal) oldModal.remove();
    
    tempSelectedFriendForHistory = selectedFriendForHistory;
    
    getFriendsList().then(result => {
        const friends = result.success ? result.data : [];
        
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'friendHistoryFilterModal';
        overlay.innerHTML = `
            <div class="modal-content" style="max-width: 400px;">
                <div class="modal-title">Выберите друга</div>
                <div class="scroll-wrapper" style="max-height: 300px; overflow-y: auto; margin-bottom: 0.5rem;">
                    <!-- Блок "Все" -->
                    <div class="friend-itemMOD" data-friend-id="all" onclick="selectFriendHistoryFilter('all')" style="cursor: pointer; border: 1px solid #E2E8F0; transition: border-color 0.2s ease;">
                        <div class="friend-avatar" style="background: var(--accent-light); color: var(--accent);">
                            <i class="fa-solid fa-users" style="font-size: 1rem;"></i>
                        </div>
                        <div class="friend-info">
                            <strong>Все</strong>
                            <span>Показать всех друзей</span>
                        </div>
                        <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                    
                    <!-- Реальные друзья -->
                    ${friends.map(f => {
                        const level = getCurrentLevel(f.totalXp || 0).id;
                        const xp = Math.round(f.totalXp || 0);
                        return `
                            <div class="friend-itemMOD" data-friend-id="${f.id}" onclick="selectFriendHistoryFilter('${f.id}')" style="cursor: pointer; border: 1px solid #E2E8F0; transition: border-color 0.2s ease;">
                                <div class="friend-avatar">${(f.displayName || 'П')[0].toUpperCase()}</div>
                                <div class="friend-info">
                                    <strong>${f.displayName || 'Пользователь'}</strong>
                                    <span>Уровень ${level} · ${xp} XP</span>
                                </div>
                                <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="closeFriendHistoryFilterModal()" style="flex: 1;">Отмена</button>
                    <button class="btn btn-primary" id="applyFriendFilterBtn" style="flex: 1;">Применить</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.style.display = 'flex';
        
        document.getElementById('applyFriendFilterBtn').addEventListener('click', function() {
            applyFriendHistoryFilter();
        });
    });
}

function closeFriendHistoryFilterModal() {
    const modal = document.getElementById('friendHistoryFilterModal');
    if (modal) modal.remove();
}

function selectFriendHistoryFilter(friendId) {
    tempSelectedFriendForHistory = friendId;
    
    document.querySelectorAll('#friendHistoryFilterModal .friend-itemMOD').forEach(el => {
        const isSelected = el.dataset.friendId === friendId;
        el.style.border = isSelected ? '2px solid var(--accent)' : '1px solid #E2E8F0';
        el.style.background = isSelected ? 'var(--light)' : 'var(--light)';
    });
}

function applyFriendHistoryFilter() {
    selectedFriendForHistory = tempSelectedFriendForHistory;
    closeFriendHistoryFilterModal();
    updateSelectedFriendName();
    renderFriendsHistory();
}

async function renderFriendsHistory() {
    const container = document.getElementById('friendsHistoryContainer');
    if (!container) return;
    
    if (!isFriendsHistoryVisible()) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🔒</span>
                <h3 class="empty-title">История скрыта</h3>
                <p class="empty-text">Вы скрыли историю друзей. Включите в настройках, чтобы видеть.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Загрузка...</div>';
    
    try {
        // ★★★ ПОЛУЧАЕМ ТРЕНИРОВКИ ДРУЗЕЙ ★★★
        const workoutsResult = await getFriendsWorkoutHistory();
        // ★★★ ПОЛУЧАЕМ СОБЫТИЯ ДРУЗЕЙ (LVL И ДОСТИЖЕНИЯ) ★★★
        const eventsResult = await getFriendsEvents();
        
        // Объединяем и сортируем
        let allItems = [];
        
        // Добавляем тренировки
        if (workoutsResult.success) {
            let filteredData = workoutsResult.data;
            if (selectedFriendForHistory !== 'all') {
                filteredData = filteredData.filter(item => item.friendId === selectedFriendForHistory);
            }
            filteredData.forEach(w => {
                allItems.push({
                    type: 'workout',
                    timestamp: new Date(w.date).getTime() / 1000,
                    friendName: w.friendName,
                    friendAvatar: w.friendAvatar,
                    friendId: w.friendId,
                    data: w
                });
            });
        }
        
        // ★★★ ДОБАВЛЯЕМ СОБЫТИЯ (LVL И ДОСТИЖЕНИЯ) ★★★
        if (eventsResult.success) {
            let filteredData = eventsResult.data;
            if (selectedFriendForHistory !== 'all') {
                filteredData = filteredData.filter(item => item.friendId === selectedFriendForHistory);
            }
            filteredData.forEach(event => {
                allItems.push({
                    type: event.type,
                    timestamp: event.timestamp?.seconds || 0,
                    friendName: event.friendName,
                    friendAvatar: event.friendAvatar,
                    friendId: event.friendId,
                    data: event.data
                });
            });
        }
        
        // Сортируем по времени (новые сверху)
        allItems.sort((a, b) => b.timestamp - a.timestamp);
        
        if (allItems.length === 0) {
            const friendName = selectedFriendForHistory !== 'all' 
                ? 'у этого друга' 
                : 'у ваших друзей';
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📋</span>
                    <h3 class="empty-title">Нет активности</h3>
                    <p class="empty-text">Пока нет активности ${friendName}.</p>
                </div>
            `;
            return;
        }
        
        // ★★★ РЕНДЕРИМ ★★★
        let html = '';
        let currentFriend = '';
        
allItems.forEach(item => {
    // Если это новый пользователь — закрываем старую группу и открываем новую
    if (currentFriend !== item.friendId) {
        // Закрываем предыдущую группу и контейнер событий
        if (currentFriend !== '') {
            html += `</div></div>`; // Закрываем events и group
        }
        
        currentFriend = item.friendId;
        
        // Открываем новую группу
        html += `<div class="friend-history-group">`;
        
        // Аватар + имя
        html += `
            <div class="friend-history-header">
                <div class="friend-history-avatar">${item.friendAvatar}</div>
                <span class="friend-history-name">${item.friendName}</span>
            </div>
        `;
        
        // Открываем контейнер событий
        html += `<div class="friend-history-events">`;
    }
    
    const relativeDate = formatRelativeDateFromTimestamp(item.timestamp);
    
    if (item.type === 'workout') {
        // Тренировка
        const w = item.data;
        const totalEx = w.exercises?.length || 0;
        const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
        const xpEarned = w.xpEarned || 0;
        const minutes = Math.floor((w.durationSeconds || 0) / 60);
        
        html += `
            <div class="history-item">
                <div class="history-item-header">
                    <strong class="history-item-title" style="font-size:0.75rem;">${w.title || 'Тренировка'}</strong>
                    <span class="history-item-date" style="font-size:0.65rem;">${relativeDate}</span>
                </div>
                <div class="history-item-details" style="font-size:0.65rem;">
                    ${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned.toFixed(1)} XP
                </div>
            </div>
        `;
    } else if (item.type === 'level_up') {
        // Новый уровень
        const level = item.data.level || '?';
        const levelName = item.data.levelName || '';
        html += `
            <div class="history-item" style="border-left-color: var(--gold);">
                <div class="history-item-header">
                    <strong class="history-item-title" style="font-size:0.75rem;">Новый уровень</strong>
                    <span class="history-item-date" style="font-size:0.65rem;">${relativeDate}</span>
                </div>
                <div class="history-item-details" style="font-size:0.65rem;">
                    Достиг ${level} уровня - "${levelName}"
                </div>
            </div>
        `;
    } else if (item.type === 'achievement_unlocked') {
        // Новое достижение
        const achName = item.data.achievementName || 'Достижение';
        html += `
            <div class="history-item" style="border-left-color: var(--gold);">
                <div class="history-item-header">
                    <strong class="history-item-title" style="font-size:0.75rem;">Новое достижение</strong>
                    <span class="history-item-date" style="font-size:0.65rem;">${relativeDate}</span>
                </div>
                <div class="history-item-details" style="font-size:0.65rem;">
                    Получил достижение - "${achName}"
                </div>
            </div>
        `;
    }
});

// Закрываем последнюю группу после цикла
if (currentFriend !== '') {
    html += `</div></div>`; // Закрываем events и group
}

container.innerHTML = html;
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Ошибка рендера истории друзей:', error);
        container.innerHTML = `<div style="text-align:center;color:#EF4444;padding:1rem;">Ошибка загрузки</div>`;
    }
}

// Добавьте эту функцию для обновления истории после завершения тренировки
function refreshFriendsHistory() {
    const friendsTab = document.getElementById('profileTab-friends');
    if (friendsTab && friendsTab.classList.contains('profile-tab-content-active')) {
        renderFriendsHistory();
    }
}

function formatRelativeDateFromTimestamp(timestamp) {
    if (!timestamp) return 'недавно';
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffDays = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'сегодня';
    if (diffDays === 1) return 'вчера';
    if (diffDays <= 7) return `${diffDays} дня назад`;
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
}

// =================== ИСТОРИЯ ДРУЗЕЙ - ВИДИМОСТЬ ===================

const FRIENDS_HISTORY_VISIBILITY_KEY = 'friendsHistoryVisible';

/**
 * Получить настройку видимости истории друзей
 */
function isFriendsHistoryVisible() {
    return localStorage.getItem(FRIENDS_HISTORY_VISIBILITY_KEY) !== 'false';
}

function updateFriendsHistoryStatusUI(visible) {
    const statusEl = document.getElementById('friendsHistoryStatus');
    if (statusEl) {
        statusEl.textContent = visible ? 'Показана' : 'Скрыта';
    }
    
    // ★★★ УБИРАЕМ СКРЫТИЕ БЛОКА ★★★
    // Блок всегда виден, но внутри будет показываться разный контент
    const block = document.getElementById('friends-history-block');
    if (block) {
        block.style.display = 'block'; // Всегда показываем блок
    }
    
    // Обновляем контент внутри блока
    renderFriendsHistory();
}

function toggleFriendsHistoryVisibility() {
    const current = isFriendsHistoryVisible();
    const newState = !current;

    showConfirmModal(
        newState ? 'Показать историю друзей?' : 'Скрыть историю друзей?',
        newState
            ? 'Ваша история тренировок снова будет видна друзьям, и вы будете видеть их историю.'
            : 'Ваша история тренировок будет скрыта от друзей, и вы не будете видеть их историю.',
        async function() {
            localStorage.setItem(FRIENDS_HISTORY_VISIBILITY_KEY, String(newState));
            updateFriendsHistoryStatusUI(newState);
            
            const user = await getFirebaseUser();
            if (user) {
                await updateUserProfile(user.uid, { 
                    friendsHistoryVisible: newState 
                });
            }
            
            // ★★★ ПРОСТО ОБНОВЛЯЕМ КОНТЕНТ, БЛОК НЕ СКРЫВАЕТСЯ ★★★
            renderFriendsHistory();
            
            showToast(`✅ История друзей ${newState ? 'показана' : 'скрыта'}`);
        },
        newState ? 'Показать' : 'Скрыть'
    );
}

/**
 * Загрузить настройку видимости из профиля пользователя
 */
async function loadFriendsHistoryVisibilityFromProfile() {
    const user = await getFirebaseUser();
    if (!user) return;
    
    try {
        const profileResult = await getUserProfile(user.uid);
        if (profileResult.success && profileResult.data.friendsHistoryVisible !== undefined) {
            const visible = profileResult.data.friendsHistoryVisible;
            localStorage.setItem(FRIENDS_HISTORY_VISIBILITY_KEY, String(visible));
            updateFriendsHistoryStatusUI(visible);
        } else {
            // Если в профиле нет настройки, используем localStorage
            const visible = isFriendsHistoryVisible();
            updateFriendsHistoryStatusUI(visible);
        }
    } catch (error) {
        console.warn('Ошибка загрузки настройки видимости истории:', error);
        const visible = isFriendsHistoryVisible();
        updateFriendsHistoryStatusUI(visible);
    }
}

// =================== СОХРАНЕНИЕ СОБЫТИЙ В FIRESTORE ===================

/**
 * Сохранить событие в Firestore
 */
async function saveUserEvent(userId, type, data) {
    try {
        await firebase.firestore().collection('userEvents').add({
            userId: userId,
            type: type,
            data: data,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(`✅ Событие "${type}" сохранено`);
    } catch (error) {
        console.error('❌ Ошибка сохранения события:', error);
    }
}

/**
 * Получить события пользователя (для его друзей) - БЕЗ СОРТИРОВКИ
 */
async function getUserEvents(userId, limit = 30) {
    try {
        // ★★★ УБИРАЕМ orderBy, ЧТОБЫ НЕ ТРЕБОВАТЬ ИНДЕКС ★★★
        const snapshot = await firebase.firestore()
            .collection('userEvents')
            .where('userId', '==', userId)
            .limit(limit)
            .get();
        
        const events = [];
        snapshot.forEach(doc => {
            events.push({ id: doc.id, ...doc.data() });
        });
        
        // ★★★ СОРТИРУЕМ ВРУЧНУЮ ★★★
        events.sort((a, b) => {
            const timeA = a.timestamp?.seconds || 0;
            const timeB = b.timestamp?.seconds || 0;
            return timeB - timeA;
        });
        
        return { success: true, data: events };
    } catch (error) {
        console.error('❌ Ошибка получения событий:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Получить события для всех друзей
 */
async function getFriendsEvents() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    
    try {
        const friendsResult = await getFriendsList();
        if (!friendsResult.success || friendsResult.data.length === 0) {
            return { success: true, data: [] };
        }
        
        const allEvents = [];
        const friendIds = friendsResult.data.map(f => f.id);
        
        // Получаем события для всех друзей
        for (const friendId of friendIds) {
            const result = await getUserEvents(friendId);
            if (result.success) {
                // Добавляем имя друга к каждому событию
                const friend = friendsResult.data.find(f => f.id === friendId);
                const friendName = friend?.displayName || 'Пользователь';
                const friendAvatar = (friendName)[0].toUpperCase();
                
                result.data.forEach(event => {
                    allEvents.push({
                        ...event,
                        friendName: friendName,
                        friendAvatar: friendAvatar,
                        friendId: friendId
                    });
                });
            }
        }
        
        // Сортируем по времени
        allEvents.sort((a, b) => {
            const timeA = a.timestamp?.seconds || 0;
            const timeB = b.timestamp?.seconds || 0;
            return timeB - timeA;
        });
        
        return { success: true, data: allEvents };
        
    } catch (error) {
        console.error('❌ Ошибка получения событий друзей:', error);
        return { success: false, error: error.message };
    }
}

// =================== СЧЕТЧИК PREMIUM ПОЛЬЗОВАТЕЛЕЙ ===================
async function getPremiumUsersCount() {
    try {
        const snapshot = await firebase.firestore()
            .collection('users')
            .get();
        
        let premiumCount = 0;
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.premium === true) {
                premiumCount++;
            }
        });
        
        return premiumCount;
    } catch (error) {
        console.error('Ошибка подсчета PREMIUM пользователей:', error);
        return 0;
    }
}

async function updatePremiumCounter() {
    try {
        const user = await getFirebaseUser();
        if (!user) {
            console.warn('⚠️ Пользователь не авторизован');
            return 0;
        }
        
        const snapshot = await firebase.firestore()
            .collection('users')
            .get();
        
        let premiumCount = 0;
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.premium === true) {
                premiumCount++;
            }
        });
        
        // ★★★ ОБНОВЛЯЕМ ВСЕ ЭЛЕМЕНТЫ С СЧЕТЧИКОМ ★★★
        const counterElements = document.querySelectorAll('#premiumCounter');
        counterElements.forEach(el => {
            el.textContent = `PREMIUM оформили: ${premiumCount} пользователей`;
        });
        
        console.log(`📊 PREMIUM пользователей: ${premiumCount}`);
        return premiumCount;
    } catch (error) {
        console.error('Ошибка обновления счетчика PREMIUM:', error);
        return 0;
    }
}

// =================== СТРАНИЦА: ВЫБОР ИНВЕНТАРЯ ===================

// Массив выбранного инвентаря
let selectedInventory = [];

/**
 * Обновить текст с выбранным инвентарём
 */
function updateInventoryText() {
    const textEl = document.getElementById('selectedInventoryText');
    if (!textEl) return;
    
    if (selectedInventory.length === 0) {
        textEl.textContent = 'Ничего из перечисленного';
        return;
    }
    
    const names = {
        'dumbbells': 'Гантели',
        'barbell': 'Штанга',
        'mat': 'Коврик',
        'pullup': 'Турник'
    };
    
    const selectedNames = selectedInventory.map(item => names[item] || item);
    textEl.textContent = selectedNames.join(' · ');
}

/**
 * Показать страницу выбора инвентаря (для вызова через консоль)
 */
function showInventoryPage() {
    // Сбрасываем выбор
    selectedInventory = [];
    document.querySelectorAll('.inventory-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    updateInventoryText();
    
    // Показываем страницу
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = 'none';
    });
    
    const target = document.getElementById('page-inventory');
    if (target) {
        target.classList.add('page-active');
        target.style.display = 'block';
    }
    
    // Скрываем нижнюю навигацию
    document.getElementById('bottomNav').style.display = 'none';
}

// ★★★ ОБРАБОТЧИК ФОРМЫ ★★★
document.getElementById('inventoryForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    localStorage.setItem('userInventory', JSON.stringify(selectedInventory));

    // ★★★ СОХРАНЯЕМ В FIRESTORE ★★★
    try {
        const user = await getFirebaseUser();
        if (user) {
            await updateUserProfile(user.uid, {
                inventory: selectedInventory
            });
        }
    } catch (error) {
        console.warn('Ошибка сохранения инвентаря:', error);
    }

    switchToPage('page-loading');
    document.getElementById('bottomNav').style.display = 'none';
});

// ★★★ ВОССТАНАВЛИВАЕМ СОХРАНЁННЫЙ ВЫБОР ПРИ ЗАГРУЗКЕ ★★★
function loadInventorySelection() {
    const saved = localStorage.getItem('userInventory');
    if (saved) {
        try {
            const items = JSON.parse(saved);
            if (Array.isArray(items)) {
                selectedInventory = items;
                // Отмечаем кнопки
                document.querySelectorAll('.inventory-btn').forEach(btn => {
                    if (items.includes(btn.dataset.inventory)) {
                        btn.classList.add('selected');
                    }
                });
                updateInventoryText();
            }
        } catch (e) {}
    }
}

// Загружаем сохранённый выбор при инициализации
document.addEventListener('DOMContentLoaded', function() {
    loadInventorySelection();
});

// =================== УПРАВЛЕНИЕ ЯЗЫКОМ ===================

// Ключ для localStorage
const LANGUAGE_KEY = 'appLanguage';

// ★★★ ПЕРЕМЕННАЯ ДЛЯ ХРАНЕНИЯ ВРЕМЕННОГО ВЫБОРА ★★★
let tempLanguage = null;

/**
 * Получить текущий язык приложения
 */
function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) || 'ru';
}

/**
 * Обновить UI статуса языка в настройках
 */
function updateLanguageUI() {
    const lang = getLanguage();
    const statusEl = document.getElementById('languageStatus');
    if (statusEl) {
        statusEl.textContent = lang === 'ru' ? 'Русский' : 'English';
    }
}

/**
 * Открыть модальное окно выбора языка
 */
function toggleLanguageModal() {
    const currentLang = getLanguage();
    
    // ★★★ СОХРАНЯЕМ ТЕКУЩИЙ ЯЗЫК КАК ВРЕМЕННЫЙ ★★★
    tempLanguage = currentLang;
    
document.querySelectorAll('#languageModal .language-option').forEach(el => {
    el.classList.remove('language-option-active');
});

const selectedOption = document.querySelector(`#languageModal .language-option[data-language="${currentLang}"]`);
if (selectedOption) {
    selectedOption.classList.add('language-option-active');
}
    
    openModal('languageModal');
}

/**
 * Выбрать язык (временно, без сохранения)
 */
function selectLanguage(lang) {
    // ★★★ СОХРАНЯЕМ ТОЛЬКО В ВРЕМЕННУЮ ПЕРЕМЕННУЮ ★★★
    tempLanguage = lang;
    
document.querySelectorAll('#languageModal .language-option').forEach(el => {
    el.classList.remove('language-option-active');
});

const selectedOption = document.querySelector(`#languageModal .language-option[data-language="${lang}"]`);
if (selectedOption) {
    selectedOption.classList.add('language-option-active');
}
}

/**
 * ★★★ ПРИМЕНИТЬ ЯЗЫК (ПРИ НАЖАТИИ "ГОТОВО") ★★★
 * Логика смены языка не реализована — только сохранение выбора.
 */
function applyLanguage() {
    if (tempLanguage) {
        const currentLang = getLanguage();
        
        // ★★★ ПРОВЕРЯЕМ, ИЗМЕНИЛСЯ ЛИ ЯЗЫК ★★★
        if (tempLanguage !== currentLang) {
            // Язык реально изменился - сохраняем
            localStorage.setItem(LANGUAGE_KEY, tempLanguage);
            
            // ★★★ ОБНОВЛЯЕМ UI ★★★
            updateLanguageUI();
            
            // ★★★ ПОКАЗЫВАЕМ ТОСТ ТОЛЬКО ПРИ РЕАЛЬНОМ ИЗМЕНЕНИИ ★★★
            const langName = tempLanguage === 'ru' ? 'Русский' : 'English';
            showToast(`✅ Язык изменён на ${langName}`);
            console.log(`✅ Применён язык: ${langName}`);
        } else {
            console.log('ℹ️ Язык не изменился');
        }
    }
    
    // Закрываем модалку
    closeModal('languageModal');
}

// =================== МОДАЛКА: УПРАЖНЕНИЯ ПО ГРУППАМ МЫШЦ ===================

// ★★★ КОНФИГУРАЦИЯ ТЕКСТОВ ДЛЯ РАЗНЫХ БЛОКОВ ★★★
const MUSCLE_MODAL_CONFIG = {
    muscles: {
        title: 'Упражнения по группам мышц',
        text1: 'Этот блок показывает, сколько упражнений вы выполнили на каждую группу мышц за всё время тренировок.',
        text2: 'Это помогает понять, какие мышцы вы прорабатываете чаще, а какие - отстают и требуют больше внимания.',
        text3: 'Если какая-то группа мышц заполнена слабо - добавьте в свою программу больше упражнений на неё. Так вы сделаете тренировки сбалансированными и будете развиваться равномерно.'
    },
    categories: {
        title: 'Тренировки по категориям',
        text1: 'Этот блок показывает, сколько тренировок вы выполнили по каждой категории за всё время.',
        text2: 'Это помогает понять, какие типы тренировок вы выбираете чаще, а какие - остаются без внимания.',
        text3: 'Если какая-то категория заполнена слабо - попробуйте добавить её в свой план. Разнообразие тренировок помогает развиваться гармонично и не застревать на одном месте.'
    },
    weeklyLoad: {
        title: 'Нагрузочный индекс',
        text1: 'Этот блок показывает, насколько интенсивно вы тренировались каждую неделю месяца.',
        text2: 'Индекс рассчитывается из количества подходов, повторений и общей длительности тренировок. Чем выше индекс - тем больше нагрузки получил ваш организм.',
        text3: 'Следите за тем, чтобы нагрузка росла постепенно. Резкие скачки могут привести к перетренированности, а слишком низкий индекс - к застою в прогрессе.'
    },
    // ★★★ НОВЫЙ БЛОК: РЕДКОСТЬ ДОСТИЖЕНИЙ ★★★
    communityAchievements: {
        title: 'Редкость достижений',
        text1: 'Этот блок показывает, у какого процента пользователей SportApp есть каждое достижение.',
        text2: 'Золотая иконка - достижение есть у вас. Серая иконка - вы его ещё не получили. Процент рядом показывает, насколько достижение распространено среди всех пользователей.',
        text3: 'Чем меньше процент - тем реже встречается достижение. Соберите все пять и станьте одним из немногих, кто прошёл весь путь!'
    }
};

/**
 * Открыть модалку с описанием блока статистики
 * @param {string} type - тип блока: 'muscles' или 'categories'
 */
function openMuscleGroupsModal(type = 'muscles') {
    const config = MUSCLE_MODAL_CONFIG[type];
    
    // ★★★ ЕСЛИ КЛЮЧА НЕТ — НИЧЕГО НЕ ДЕЛАЕМ ★★★
    if (!config) {
        console.warn('⚠️ Нет конфига для модалки:', type);
        return;
    }

    const titleEl = document.getElementById('muscleModalTitle');
    const text1El = document.getElementById('muscleModalText1');
    const text2El = document.getElementById('muscleModalText2');
    const text3El = document.getElementById('muscleModalText3');

    if (titleEl) titleEl.textContent = config.title;
    if (text1El) text1El.textContent = config.text1;
    if (text2El) text2El.textContent = config.text2;
    if (text3El) text3El.textContent = config.text3;

    openModal('muscleGroupsModal');
}

// Экспорт в window для вызова из консоли и из HTML
window.openMuscleGroupsModal = openMuscleGroupsModal;

// =================== ИНВЕНТАРЬ (МОДАЛКА В НАСТРОЙКАХ) ===================

/**
 * Открыть модалку "Инвентарь" в настройках
 */
function openInventoryModal() {
    // ★★★ СИНХРОНИЗИРУЕМ СОСТОЯНИЕ КНОПОК С ТЕКУЩИМ ВЫБОРОМ ★★★
    document.querySelectorAll('#inventoryModal .inventory-btn').forEach(btn => {
        const inventory = btn.dataset.inventory;
        if (selectedInventory.includes(inventory)) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    openModal('inventoryModal');
}


/**
 * Сохранить выбор инвентаря из модалки
 */
async function saveInventoryFromModal() {
    // ★★★ СОХРАНЯЕМ В localStorage ★★★
    localStorage.setItem('userInventory', JSON.stringify(selectedInventory));
    console.log('📦 Сохранённый инвентарь:', selectedInventory);

    // ★★★ ОБНОВЛЯЕМ СТАТУС В НАСТРОЙКАХ ★★★
    updateInventoryStatus();

    // ★★★ СОХРАНЯЕМ В FIRESTORE ★★★
    try {
        const user = await getFirebaseUser();
        if (user) {
            await updateUserProfile(user.uid, {
                inventory: selectedInventory
            });
            console.log('✅ Инвентарь сохранён в Firestore');
        }
    } catch (error) {
        console.warn('⚠️ Не удалось сохранить инвентарь в Firestore:', error);
    }

    showToast('✅ Инвентарь сохранён');
    closeModal('inventoryModal');
}

/**
 * Обновить статус инвентаря в настройках (текст под пунктом)
 */
function updateInventoryStatus() {
    const statusEl = document.getElementById('inventoryStatus');
    if (!statusEl) return;

    if (selectedInventory.length === 0) {
        statusEl.textContent = 'Ничего из перечисленного';
        return;
    }

    const names = {
        'dumbbells': 'Гантели',
        'barbell': 'Штанга',
        'mat': 'Коврик',
        'pullup': 'Турник'
    };

    const selectedNames = selectedInventory.map(item => names[item] || item);
    statusEl.textContent = selectedNames.join(' · ');
}

/**
 * ★★★ ОБНОВЛЯЕМ ФУНКЦИЮ toggleInventory ★★★
 * Она уже есть, но добавим обновление текста в модалке
 */
function toggleInventory(btn) {
    const inventory = btn.dataset.inventory;
    const index = selectedInventory.indexOf(inventory);

    if (index !== -1) {
        // Убираем выделение
        selectedInventory.splice(index, 1);
        btn.classList.remove('selected');
    } else {
        // Добавляем выделение
        selectedInventory.push(inventory);
        btn.classList.add('selected');
    }

    // ★★★ ОБНОВЛЯЕМ ОБА ТЕКСТА: И В РЕГИСТРАЦИИ, И В МОДАЛКЕ ★★★
    updateInventoryText();          // для шага 5 регистрации
}

/**
 * ★★★ ЗАГРУЗКА ИНВЕНТАРЯ ИЗ FIRESTORE ПРИ СТАРТЕ ★★★
 * Вызывается при загрузке профиля
 */
async function loadInventoryFromProfile() {
    try {
        const user = await getFirebaseUser();
        if (!user) return;

        const profileResult = await getUserProfile(user.uid);
        if (profileResult.success && profileResult.data.inventory) {
            // ★★★ ВОССТАНАВЛИВАЕМ ВЫБОР ИЗ ПРОФИЛЯ ★★★
            selectedInventory = profileResult.data.inventory;

            // Сохраняем в localStorage для быстрого доступа
            localStorage.setItem('userInventory', JSON.stringify(selectedInventory));

            // Обновляем UI
            document.querySelectorAll('.inventory-btn').forEach(btn => {
                if (selectedInventory.includes(btn.dataset.inventory)) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            updateInventoryText();
            updateInventoryStatus();
        }
    } catch (error) {
        console.warn('⚠️ Ошибка загрузки инвентаря из профиля:', error);
    }
}

// Экспорт в window
window.openInventoryModal = openInventoryModal;
window.saveInventoryFromModal = saveInventoryFromModal;

// =================== ГЛОБАЛЬНЫЕ АГРЕГАТЫ ===================
async function loadGlobalStats() {
    const container = document.getElementById('globalStatsContainer');
    if (!container) return;

    const ids = ['globalTotalMinutes', 'globalTotalWorkouts', 'globalTotalExercises'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '...';
    });

    try {
        const user = await getFirebaseUser();
        if (!user) {
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '—';
            });
            return;
        }

        // ★★★ СЧИТАЕМ ТРЕНИРОВКИ / МИНУТЫ / УПРАЖНЕНИЯ ★★★
        const workoutsSnapshot = await firebase.firestore()
            .collection('workouts')
            .get();

        let totalWorkouts = 0;
        let totalMinutes = 0;
        let totalExercises = 0;

        workoutsSnapshot.forEach(doc => {
            const data = doc.data();

            // Исключаем зарядку и одиночные упражнения
            const icon = data.icon || null;
            if (!icon || icon === 'charging' || data.isSingle === true) return;

            totalWorkouts++;
            totalMinutes += Math.floor((data.durationSeconds || 0) / 60);

            if (Array.isArray(data.exercises)) {
                totalExercises += data.exercises.filter(e => e.completed === true).length;
            }
        });

        // ★★★ ОБНОВЛЯЕМ UI ★★★
        const minutesEl = document.getElementById('globalTotalMinutes');
        const workoutsEl = document.getElementById('globalTotalWorkouts');
        const exercisesEl = document.getElementById('globalTotalExercises');

        if (minutesEl) minutesEl.textContent = formatBigNumber(totalMinutes);
        if (workoutsEl) workoutsEl.textContent = formatBigNumber(totalWorkouts);
        if (exercisesEl) exercisesEl.textContent = formatBigNumber(totalExercises);

        console.log(`📊 Глобальные агрегаты: ${totalWorkouts} трен., ${totalMinutes} мин, ${totalExercises} упр.`);

    } catch (error) {
        console.error('❌ Ошибка загрузки глобальных агрегатов:', error);
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '—';
        });
    }
}

// Форматирование больших чисел: 1234 → 1 234, 12345 → 12,3K, 1234567 → 1,2M
function formatBigNumber(num) {
    if (num === undefined || num === null || isNaN(num)) return '0';
    const n = Number(num);
    if (n < 1000) return String(n);
    if (n < 10000) return n.toLocaleString('ru-RU');
    if (n < 1000000) return (n / 1000).toFixed(1).replace('.', ',') + 'K';
    return (n / 1000000).toFixed(1).replace('.', ',') + 'M';
}

// =================== ПЛАШКА: ПОЛЬЗОВАТЕЛИ ===================
async function loadGlobalUsersCount() {
    const el = document.getElementById('globalTotalUsers');
    if (!el) return;
    el.textContent = '...';

    try {
        const user = await getFirebaseUser();
        if (!user) { el.textContent = '—'; return; }

        let total = 0;

        // ★★★ ПРОБУЕМ count() ★★★
        try {
            const snap = await firebase.firestore()
                .collection('users')
                .count()
                .get();
            total = snap.data().count;
        } catch (e) {
            // ★★★ FALLBACK: обычный get() ★★★
            console.warn('count() не сработал, используем get():', e);
            const snap = await firebase.firestore()
                .collection('users')
                .get();
            total = snap.size;
        }

        el.textContent = formatBigNumber(total);
        console.log(`👥 Всего пользователей: ${total}`);

    } catch (error) {
        console.error('❌ Ошибка загрузки пользователей:', error);
        el.textContent = '—';
    }
}

// =================== ДОСТИЖЕНИЯ СООБЩЕСТВА ===================
async function loadCommunityAchievements() {
    const container = document.getElementById('communityAchievementsContainer');
    if (!container) return;

    const achievementsMap = {
        friendly: 'communityPercFriendly',
        marathoner: 'communityPercMarathoner',
        unstoppable: 'communityPercUnstoppable',
        ironEndurance: 'communityPercIronEndurance',
        masterOfStyles: 'communityPercMasterOfStyles'
    };

    // Показываем загрузку
    Object.values(achievementsMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '...';
    });

    try {
        const user = await getFirebaseUser();
        if (!user) {
            Object.values(achievementsMap).forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '—';
            });
            return;
        }

        // ★★★ 1. ПОЛУЧАЕМ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ ★★★
        const snapshot = await firebase.firestore()
            .collection('users')
            .get();

        const totalUsers = snapshot.size;

        if (totalUsers === 0) {
            Object.values(achievementsMap).forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '0%';
            });
            return;
        }

        // ★★★ 2. СЧИТАЕМ СКОЛЬКО У КОГО ЕСТЬ + СВОИ ДОСТИЖЕНИЯ ★★★
        const counts = {
            friendly: 0,
            marathoner: 0,
            unstoppable: 0,
            ironEndurance: 0,
            masterOfStyles: 0
        };

        let myAchievements = {};

        snapshot.forEach(doc => {
            const data = doc.data();
            const ach = data.achievements || {};

            // Если это текущий пользователь — сохраняем его достижения
            if (doc.id === user.uid) {
                myAchievements = ach;
            }

            for (const key in counts) {
                if (ach[key] === true) {
                    counts[key]++;
                }
            }
        });

        // ★★★ 3. ОБНОВЛЯЕМ ПРОЦЕНТЫ И ЦВЕТ ИКОНОК ★★★
        for (const [key, count] of Object.entries(counts)) {
            const percent = Math.round((count / totalUsers) * 100);
            const elId = achievementsMap[key];
            const el = document.getElementById(elId);

            // Обновляем процент
            if (el) el.textContent = percent + '%';

            // ★★★ ОБНОВЛЯЕМ ЦВЕТ ИКОНКИ ★★★
            const tile = el?.closest('.community-achievement-tile');
            const icon = tile?.querySelector('.community-achievement-icon');
            if (icon) {
                const hasIt = myAchievements[key] === true;
                icon.classList.toggle('unlocked', hasIt);
                icon.classList.toggle('locked', !hasIt);
            }
        }

        console.log(`🏆 Достижения сообщества (${totalUsers} юзеров):`, counts);
        console.log(`🏆 Мои достижения:`, myAchievements);

    } catch (error) {
        console.error('❌ Ошибка загрузки достижений сообщества:', error);
        Object.values(achievementsMap).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '—';
        });
    }
}

// =================== ОБЩАЯ ЦЕЛЬ СООБЩЕСТВА ===================
const COMMUNITY_GOAL = {
    target: 100, // число в цели
    reward: 40, // награда в ХП
    topCount: 10,
    
    // ★★★ ГЕТТЕР: собирается автоматически ★★★
    get title() {
        return `Выполнить ${this.target} тренировок`;
    }
};

// =================== ПРОГРЕСС ОБЩЕЙ ЦЕЛИ ===================
async function loadCommunityGoal() {
    const progressEl = document.getElementById('communityGoalProgress');
    const fillEl = document.getElementById('communityGoalFill');
    if (!progressEl || !fillEl) return;

    // ★★★ ПОДСТАВЛЯЕМ ЧИСЛА ИЗ КОНФИГА ★★★
    const titleEl = document.getElementById('communityGoalTitle');
    if (titleEl) titleEl.textContent = COMMUNITY_GOAL.title;

    const rewardTextEl = document.getElementById('communityGoalRewardText');
    if (rewardTextEl) rewardTextEl.textContent = `+${COMMUNITY_GOAL.reward} XP`;

    progressEl.textContent = '... / ' + COMMUNITY_GOAL.target;
    fillEl.style.width = '0%';

    try {
        const user = await getFirebaseUser();
        if (!user) {
            progressEl.textContent = '— / ' + COMMUNITY_GOAL.target;
            return;
        }

        const snapshot = await firebase.firestore()
            .collection('workouts')
            .get();

        let totalWorkouts = 0;
        snapshot.forEach(doc => {
            const data = doc.data();
            const icon = data.icon || null;
            if (!icon || icon === 'charging' || data.isSingle === true) return;
            totalWorkouts++;
        });

        const percent = Math.min(100, Math.round((totalWorkouts / COMMUNITY_GOAL.target) * 100));

        progressEl.textContent = `${totalWorkouts} / ${COMMUNITY_GOAL.target}`;
        fillEl.style.width = percent + '%';

        console.log(`🎯 Общая цель: ${totalWorkouts} / ${COMMUNITY_GOAL.target} (${percent}%)`);

    } catch (error) {
        console.error('❌ Ошибка загрузки общей цели:', error);
        progressEl.textContent = '— / ' + COMMUNITY_GOAL.target;
    }
}

// =================== ТОП-10 ВКЛАДЧИКОВ ===================
async function loadCommunityGoalTop() {
    const container = document.getElementById('communityGoalTop');
    if (!container) return;

    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Загрузка...</div>';

    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Авторизуйтесь</div>';
            return;
        }

        // ★★★ СЧИТАЕМ ТРЕНИРОВКИ ПО ПОЛЬЗОВАТЕЛЯМ ★★★
        const snapshot = await firebase.firestore()
            .collection('workouts')
            .get();

        const counts = {};
        snapshot.forEach(doc => {
            const data = doc.data();
            const icon = data.icon || null;
            if (!icon || icon === 'charging' || data.isSingle === true) return;
            const userId = data.userId;
            if (!userId) return;
            counts[userId] = (counts[userId] || 0) + 1;
        });

        // ★★★ СОРТИРУЕМ И БЕРЁМ ТОП-10 ★★★
        const sorted = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, COMMUNITY_GOAL.topCount);

        if (sorted.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:1rem;">Пока нет тренировок</div>';
            return;
        }

        // ★★★ ЗАГРУЖАЕМ ПРОФИЛИ ★★★
        const topUsers = [];
        for (const [userId, count] of sorted) {
            let name = 'Пользователь';
            let xp = 0;
            let achievements = {};
            try {
                const profileResult = await getUserProfile(userId);
                if (profileResult.success) {
                    name = profileResult.data.displayName || 'Пользователь';
                    xp = profileResult.data.totalXp || 0;
                    achievements = profileResult.data.achievements || {};
                }
            } catch (e) {}
            topUsers.push({ id: userId, name, count, xp, achievements });
        }

        // ★★★ РЕНДЕРИМ ★★★
        const visible = getAchievementsVisibility();
        container.innerHTML = topUsers.map((u, index) => {
            const position = index + 1;
            const isCurrentUser = u.id === user.uid;

            let infoHtml = '';
            if (visible) {
                const achievementIcons = [
                    { id: 'friendly', icon: 'fa-solid fa-user-group' },
                    { id: 'marathoner', icon: 'fa-solid fa-dumbbell' },
                    { id: 'unstoppable', icon: 'fa-solid fa-fire' },
                    { id: 'ironEndurance', icon: 'fa-solid fa-stopwatch' },
                    { id: 'masterOfStyles', icon: 'fa-solid fa-award' }
                ];
                infoHtml = achievementIcons.map(a => {
                    const unlocked = u.achievements[a.id] === true;
                    return `<span class="achievement-icon-top ${unlocked ? 'unlocked' : 'locked'}"><i class="${a.icon}"></i></span>`;
                }).join('');
            } else {
                const level = getCurrentLevel(u.xp).id;
                infoHtml = `<span style="font-size:0.6rem; color:var(--slate);">Уровень ${level}</span>`;
            }

            return `
                <div class="item-card-light ${isCurrentUser ? 'current-user' : ''}">
                    <div class="item-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                        <span style="font-size:1rem;font-weight:700;color:var(--accent);">${position}</span>
                    </div>
                    <div class="item-info" style="text-align:left;">
                        <h3 class="item-title">${u.name}</h3>
                        <p class="item-desc">${infoHtml}</p>
                    </div>
                    <div class="item-xp">${u.count}</div>
                </div>
            `;
        }).join('');

        console.log(`🏆 Топ-${COMMUNITY_GOAL.topCount} вкладчиков загружен`);

    } catch (error) {
        console.error('❌ Ошибка загрузки топ-10:', error);
        container.innerHTML = '<div style="text-align:center;color:#EF4444;padding:1rem;">Ошибка загрузки</div>';
    }
}

// =================== НАГРАДА ЗА ОБЩУЮ ЦЕЛЬ ===================
// Срабатывает при входе в приложение. Если цель достигнута и пользователь в топ-10
// и ещё не получал награду — начисляем XP + показываем SMS.

async function checkAndGiveCommunityGoalReward() {
    try {
        const user = await getFirebaseUser();
        if (!user) return;

        // ★★★ 1. ПОЛУЧАЕМ ПРОФИЛЬ ★★★
        const profileResult = await getUserProfile(user.uid);
        if (!profileResult.success) return;
        const profile = profileResult.data;

        // ★★★ 2. ПРОВЕРЯЕМ, НЕ ПОЛУЧАЛ ЛИ УЖЕ НАГРАДУ ★★★
        // Храним в Firestore в поле communityGoalReward
        if (profile.communityGoalReward === COMMUNITY_GOAL.target) {
            console.log('ℹ️ Награда за общую цель уже получена');
            return;
        }

        // ★★★ 3. СЧИТАЕМ ОБЩИЙ ПРОГРЕСС ★★★
        const snapshot = await firebase.firestore()
            .collection('workouts')
            .get();

        const counts = {};
        let totalWorkouts = 0;
        snapshot.forEach(doc => {
            const data = doc.data();
            const icon = data.icon || null;
            if (!icon || icon === 'charging' || data.isSingle === true) return;

            totalWorkouts++;
            const userId = data.userId;
            if (!userId) return;
            counts[userId] = (counts[userId] || 0) + 1;
        });

        // ★★★ 4. ЕСЛИ ЦЕЛЬ НЕ ДОСТИГНУТА — ВЫХОДИМ ★★★
        if (totalWorkouts < COMMUNITY_GOAL.target) {
            console.log(`⏳ Цель ещё не достигнута: ${totalWorkouts}/${COMMUNITY_GOAL.target}`);
            return;
        }

        // ★★★ 5. ПРОВЕРЯЕМ, ВХОДИТ ЛИ ПОЛЬЗОВАТЕЛЬ В ТОП-10 ★★★
        const sorted = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, COMMUNITY_GOAL.topCount);

        const isInTop = sorted.some(([userId]) => userId === user.uid);
        if (!isInTop) {
            console.log('ℹ️ Вы не в топ-10, награда не начисляется');
            // Помечаем, что награда обработана (чтобы не проверять каждый раз)
            await updateUserProfile(user.uid, {
                communityGoalReward: COMMUNITY_GOAL.target
            });
            return;
        }

        // ★★★ 6. НАЧИСЛЯЕМ НАГРАДУ ★★★
        const currentXp = profile.totalXp || 0;
        await updateUserProfile(user.uid, {
            totalXp: currentXp + COMMUNITY_GOAL.reward,
            communityGoalReward: COMMUNITY_GOAL.target   // ← флаг «получена»
        });

        console.log(`🏆 Награда за общую цель: +${COMMUNITY_GOAL.reward} XP`);

        // ★★★ 7. ПОКАЗЫВАЕМ SMS С НАГРАДОЙ ★★★
        showNotification(
            '🏆',
            `Вы вошли в топ-${COMMUNITY_GOAL.topCount} вкладчиков! Награда: +${COMMUNITY_GOAL.reward} XP`,
            null
        );

    } catch (error) {
        console.error('❌ Ошибка выдачи награды:', error);
    }
}

function openCommunityGoalModal() {
    // ★★★ ПОДСТАВЛЯЕМ ЧИСЛА ИЗ КОНФИГА ★★★
    const titleEl = document.getElementById('communityGoalModalTitle');
    if (titleEl) titleEl.textContent = 'Общая цель сообщества';

    const rewardTextEl = document.getElementById('communityGoalRewardText');
    if (rewardTextEl) rewardTextEl.textContent = `+${COMMUNITY_GOAL.reward} XP`;

    openModal('communityGoalModal');
    loadCommunityGoalTop();
}

window.openCommunityGoalModal = openCommunityGoalModal;

window.selectGTOGender = function(gender) {
    const category = 'ГТО';
    
    // ★★★ ПРОВЕРКА PREMIUM ★★★
    if (!hasPremium()) {
        openModal('premiumModal');
        return;
    }
    
    window.navigateTo('level-select', { 
        category: category,
        parentCategory: 'Особые',
        gtoGender: gender
    });
};

// =================== ГТО: ВОЗРАСТНЫЕ КАТЕГОРИИ (15 СТУПЕНЕЙ) ===================
const GTO_AGE_MAP = {
    '1 СТУПЕНЬ':  '6 - 7 лет',
    '2 СТУПЕНЬ':  '8 - 9 лет',
    '3 СТУПЕНЬ':  '10 - 11 лет',
    '4 СТУПЕНЬ':  '12 - 13 лет',
    '5 СТУПЕНЬ':  '14 - 15 лет',
    '6 СТУПЕНЬ':  '16 - 17 лет',
    '7 СТУПЕНЬ':  '18 - 19 лет',
    '8 СТУПЕНЬ':  '20 - 24 года',
    '9 СТУПЕНЬ':  '25 - 29 лет',
    '10 СТУПЕНЬ': '30 - 34 года',
    '11 СТУПЕНЬ': '35 - 39 лет',
    '12 СТУПЕНЬ': '40 - 44 года',
    '13 СТУПЕНЬ': '45 - 49 лет',
    '14 СТУПЕНЬ': '50 - 54 года',
    '15 СТУПЕНЬ': '55 - 59 лет'
};

// =================== СЕРИЯ ТРЕНИРОВОК ===================
async function calculateStreak(userId) {
    try {
        const result = await getUserWorkoutsFromFirestore(userId);
        if (!result.success) return 0;
        
        const workouts = result.data.filter(w => {
            const icon = getWorkoutIcon(w);
            return icon && icon !== 'charging' && !w.isSingle;
        });
        
        if (workouts.length === 0) return 0;
        
        // Собираем уникальные даты (YYYY-MM-DD)
        const dates = new Set();
        workouts.forEach(w => {
            const d = new Date(w.date);
            const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
            dates.add(key);
        });
        
        // Считаем серию подряд идущих дней, начиная с сегодня/вчера
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        let streak = 0;
        let current = new Date(today);
        
        // Если сегодня нет тренировки — проверяем со вчера
        const todayKey = `${current.getFullYear()}-${String(current.getMonth()+1).padStart(2,'0')}-${String(current.getDate()).padStart(2,'0')}`;
        if (!dates.has(todayKey)) {
            current.setDate(current.getDate() - 1);
        }
        
        // Идём назад по дням, пока есть тренировки
        while (true) {
            const key = `${current.getFullYear()}-${String(current.getMonth()+1).padStart(2,'0')}-${String(current.getDate()).padStart(2,'0')}`;
            if (dates.has(key)) {
                streak++;
                current.setDate(current.getDate() - 1);
            } else {
                break;
            }
        }
        
        return streak;
        
    } catch (error) {
        console.error('❌ Ошибка подсчёта серии:', error);
        return 0;
    }
}

// =================== ОТОБРАЖЕНИЕ СЕРИИ ===================
async function updateProfileStreak() {
    const user = await getFirebaseUser();
    if (!user) return;
    
    const streakEl = document.getElementById('profileStreakValue');
    const streakContainer = document.getElementById('profileStreak');
    if (!streakEl || !streakContainer) return;
    
    const streak = await calculateStreak(user.uid);
    streakEl.textContent = streak;

    // ★★★ СОХРАНЯЕМ В FIRESTORE ★★★
    const profileResult = await getUserProfile(user.uid);
    if (profileResult.success && profileResult.data.streakDays !== streak) {
        await updateUserProfile(user.uid, { streakDays: streak });
    }
        
    // Если 0 — приглушаем цвет
    if (streak === 0) {
        streakContainer.classList.add('zero');
    } else {
        streakContainer.classList.remove('zero');
    }
    
    console.log(`🔥 Серия: ${streak} дней`);
    return streak;
}

// =================== МОДАЛКА: СЕРИЯ ТРЕНИРОВОК ===================
async function openStreakModal() {
    const user = await getFirebaseUser();
    if (!user) return;
    
    const streak = await calculateStreak(user.uid);
    
    // ★★★ ЗАПОЛНЯЕМ ЗНАЧЕНИЕ ★★★
    const valueEl = document.getElementById('streakModalValue');
    if (valueEl) valueEl.textContent = streak;
    
    // ★★★ МЕНЯЕМ ТЕКСТ В ЗАВИСИМОСТИ ОТ СЕРИИ ★★★
    const text1 = document.getElementById('streakModalText1');
    const text2 = document.getElementById('streakModalText2');
    const text3 = document.getElementById('streakModalText3');
    
if (streak === 0) {
    if (text1) text1.textContent = 'У вас пока нет активной серии.';
    if (text2) text2.textContent = 'Выполните тренировку сегодня, чтобы начать серию.';
    if (text3) text3.textContent = 'Тренируйтесь каждый день — серия будет расти.';
} else if (streak < 21) {
    if (text1) text1.textContent = `Вы тренируетесь ${streak} ${declOfNum(streak, ['день', 'дня', 'дней'])} подряд!`;
    if (text2) text2.textContent = 'До достижения "21 день подряд" осталось совсем немного.';
    if (text3) text3.textContent = 'Не пропускайте дни, чтобы не сбросить серию.';
} else {
    if (text1) text1.textContent = `Невероятно! ${streak} ${declOfNum(streak, ['день', 'дня', 'дней'])} подряд!`;
    if (text2) text2.textContent = 'Вы настоящий чемпион дисциплины.';
    if (text3) text3.textContent = 'Так держать! Продолжайте тренироваться каждый день.';
}
    
    openModal('streakModal');
}

// ★★★ СКЛОНЕНИЕ СЛОВ ★★★
function declOfNum(n, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
}

window.openStreakModal = openStreakModal;

// =================== ИНВЕНТАРЬ ДЛЯ ФИЛЬТРАЦИИ УПРАЖНЕНИЙ ===================

/**
 * Получить инвентарь пользователя из localStorage
 */
function getUserInventoryFromStorage() {
    try {
        const saved = localStorage.getItem('userInventory');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (e) {
        console.warn('Ошибка получения инвентаря:', e);
    }
    return [];
}

/**
 * Фильтровать упражнения по инвентарю
 * Если у упражнения нет поля equipment — показываем всегда
 * Если есть — показываем только если инвентарь подходит
 */
function filterExercisesByInventory(userInventory) {
    if (typeof EXERCISES_CATALOG === 'undefined') return [];
    
    return EXERCISES_CATALOG.filter(ex => {
        // Если у упражнения нет requirements — показываем всегда
        if (!ex.equipment || !Array.isArray(ex.equipment) || ex.equipment.length === 0) {
            return true;
        }
        
        // Если у пользователя нет инвентаря — показываем только bodyweight
        if (userInventory.length === 0) {
            return ex.equipment.includes('bodyweight') || ex.equipment.includes('none');
        }
        
        // Показываем, если хотя бы одно требование есть у пользователя
        return ex.equipment.some(item => 
            userInventory.includes(item) || item === 'bodyweight' || item === 'none'
        );
    });
}