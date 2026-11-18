// =================== ОТДЕЛЬНЫЙ КАТАЛОГ УПРАЖНЕНИЙ ===================
// Количество кадров зависит от сложности движения.
const EXERCISE_PHOTO_PLACEHOLDER = '*фото будет добавлено позже*';

// Папки соответствуют категориям каталога.
function getExerciseImageFolder(category, exerciseName) {
    const folders = {
        'Грудь': 'Chest', 'Спина': 'Back', 'Ноги': 'legs', 'Ягодицы': 'legs',
        'Плечи': 'Shoulders', 'Пресс': 'Abs', 'Руки': 'Arms', 'Кардио': 'Cardio',
        'Растяжка': 'Stretching', 'Пилатес': 'Pilates', 'Йога': 'Yoga',
        'Всё тело': 'FullBody', 'Фитнес': 'Fitness', 'ГТО': 'GTO'
    };
    if (folders[category]) return folders[category];
    const name = String(exerciseName || '').toLowerCase();
    if (/отжиман|жим|разводк|сведени|груд/.test(name)) return 'Chest';
    if (/тяга|подтяг|лодочк|супермен|спин/.test(name)) return 'Back';
    if (/присед|выпад|ног|икр|ягодиц|мостик|степ-ап/.test(name)) return 'legs';
    if (/плеч|дельт/.test(name)) return 'Shoulders';
    if (/пресс|скручив|планк|живот|вакуум|твист|складк/.test(name)) return 'Abs';
    if (/бицепс|трицепс|рук|молот|сгибан/.test(name)) return 'Arms';
    if (/бег|прыж|берпи|бёрпи|кардио|джек/.test(name)) return 'Cardio';
    if (/растяж|наклон|шпагат|мобил/.test(name)) return 'Stretching';
    return 'FullBody';
}

// Преобразует русское название в латинский slug для имени файла.
function toExerciseImageSlug(exerciseName) {
    const source = String(exerciseName || '').toLowerCase().trim();
    const wordMap = [
        [/б[её]рпи|бурпи/g, 'burpee'], [/отжимания/g, 'push-ups'], [/отжимание/g, 'push-up'],
        [/приседания/g, 'squats'], [/приседание/g, 'squat'], [/выпады/g, 'lunges'],
        [/выпад/g, 'lunge'], [/планка/g, 'plank'], [/скручивания/g, 'crunches'],
        [/скручивание/g, 'crunch'], [/подтягивания/g, 'pull-ups'], [/подтягивание/g, 'pull-up'],
        [/жим/g, 'press'], [/разводка/g, 'fly'], [/махи/g, 'raises'],
        [/подъём|подъем/g, 'raise'], [/бег/g, 'running'], [/прыжки/g, 'jumps'],
        [/прыжок/g, 'jump'], [/ходьба/g, 'walking'], [/растяжка/g, 'stretch'],
        [/наклоны/g, 'bends'], [/наклон/g, 'bend'], [/лодочка/g, 'superman'],
        [/мостик/g, 'bridge'], [/велосипед/g, 'bicycle'], [/ножницы/g, 'scissors'],
        [/складка/g, 'fold'], [/вакуум/g, 'vacuum'], [/твист/g, 'twist'],
        [/повороты/g, 'rotations'], [/вращения/g, 'circles'], [/удержание/g, 'hold'],
        [/на месте/g, 'in-place'], [/лёжа|лежа/g, 'lying'], [/стоя/g, 'standing'],
        [/сидя/g, 'seated'], [/с коленей|от коленей/g, 'kneeling'],
        [/широким хватом/g, 'wide-grip'], [/узким хватом/g, 'close-grip'],
        [/с хлопком/g, 'clap'], [/на одной руке/g, 'one-arm'],
        [/с ногами на возвышении/g, 'feet-elevated'], [/без веса/g, 'bodyweight'],
        [/с гантелями|с гантелью/g, 'dumbbell'], [/с задержкой/g, 'pause'],
        [/обратные/g, 'reverse'], [/боковая/g, 'side'], [/глубокий/g, 'deep'],
        [/высоким подниманием колен/g, 'high-knees'],
        [/захлёстом голеней|захлестом голеней/g, 'butt-kicks'],
        [/джампинг джек/g, 'jumping-jacks'], [/горные лыжи/g, 'mountain-skiers']
    ];
    let slug = source;
    for (const [pattern, value] of wordMap) slug = slug.replace(pattern, value);
    const transliteration = {
        а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'yo', ж:'zh', з:'z',
        и:'i', й:'y', к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r',
        с:'s', т:'t', у:'u', ф:'f', х:'h', ц:'ts', ч:'ch', ш:'sh',
        щ:'shch', ъ:'', ы:'y', ь:'', э:'e', ю:'yu', я:'ya'
    };
    slug = Array.from(slug, char => transliteration[char] ?? char).join('');
    return slug.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, '-');
}

function getExercisePhotoSlots(exerciseName, category) {
    const name = String(exerciseName || '').toLowerCase();
    let count = 2;
    if (/б[её]рпи|бурпи/.test(name)) count = 4;
    else if (/прыжк|джампинг|горные лыжи|альпинист|скалолаз|комплекс|комбинирован|перекат|выпады с прыжком/.test(name)) count = 3;

    const folder = getExerciseImageFolder(category, exerciseName);
    const slug = toExerciseImageSlug(exerciseName);
    return Array.from({ length: count }, (_, index) =>
        `images/exercises/${folder}/${slug}-${index + 1}.png`
    );
}

const EXERCISES_CATALOG = [
    // ====================================================================
    // БЛОК 1: БЕЗ ИНВЕНТАРЯ (ВЕС ТЕЛА) — доступно всегда
    // ====================================================================

    // ===== ГРУДЬ =====
    { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'Грудь'), category: 'Грудь', sets: 4, reps: 20, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания широким хватом', images: getExercisePhotoSlots('Отжимания широким хватом', 'Грудь'), category: 'Грудь', sets: 4, reps: 15, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'Грудь'), category: 'Грудь', sets: 4, reps: 10, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении', 'Грудь'), category: 'Грудь', sets: 4, reps: 15, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с коленей', images: getExercisePhotoSlots('Отжимания с коленей', 'Грудь'), category: 'Грудь', sets: 4, reps: 15, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания от стены', images: getExercisePhotoSlots('Отжимания от стены', 'Грудь'), category: 'Грудь', sets: 4, reps: 20, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с узкой постановкой рук', images: getExercisePhotoSlots('Отжимания с узкой постановкой рук', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания с паузой внизу', images: getExercisePhotoSlots('Отжимания с паузой внизу', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания в алмаз', images: getExercisePhotoSlots('Отжимания в алмаз', 'Грудь'), category: 'Грудь', sets: 4, reps: 10, weight: 0, icon: 'breast', equipment: 'none' },
    { name: 'Отжимания на одной руке', images: getExercisePhotoSlots('Отжимания на одной руке', 'Грудь'), category: 'Грудь', sets: 4, reps: 6, weight: 0, icon: 'breast', equipment: 'none' },

    // ===== СПИНА =====
    { name: 'Лодочка', images: getExercisePhotoSlots('Лодочка', 'Спина'), category: 'Спина', sets: 4, reps: 15, weight: 0, icon: 'back', equipment: 'none' },
    { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'Спина'), category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'none' },
    { name: 'Супермен', images: getExercisePhotoSlots('Супермен', 'Спина'), category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'none' },

    // ===== НОГИ =====
    { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'Ноги'), category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'Ноги'), category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Приседания у стены', images: getExercisePhotoSlots('Приседания у стены', 'Ноги'), category: 'Ноги', sets: 4, reps: '45 сек', weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Приседания с задержкой', images: getExercisePhotoSlots('Приседания с задержкой', 'Ноги'), category: 'Ноги', sets: 4, reps: '30 сек', weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Подъём на носки стоя', images: getExercisePhotoSlots('Подъём на носки стоя', 'Ноги'), category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'none' },
    { name: 'Махи ногой назад', images: getExercisePhotoSlots('Махи ногой назад', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'none' },

    // ===== ПЛЕЧИ =====
    { name: 'Отжимания в стойке у стены', images: getExercisePhotoSlots('Отжимания в стойке у стены', 'Плечи'), category: 'Плечи', sets: 4, reps: 8, weight: 0, icon: 'shoulder', equipment: 'none' },
    { name: 'Отжимания в стойке с опорой', images: getExercisePhotoSlots('Отжимания в стойке с опорой', 'Плечи'), category: 'Плечи', sets: 4, reps: 8, weight: 0, icon: 'shoulder', equipment: 'none' },

    // ===== ПРЕСС =====
    { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Скручивания с вытянутыми руками', images: getExercisePhotoSlots('Скручивания с вытянутыми руками', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Обратные скручивания', images: getExercisePhotoSlots('Обратные скручивания', 'Пресс'), category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Подъём ног лёжа', images: getExercisePhotoSlots('Подъём ног лёжа', 'Пресс'), category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'Пресс'), category: 'Пресс', sets: 4, reps: '30 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках', 'Пресс'), category: 'Пресс', sets: 4, reps: '30 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'Пресс'), category: 'Пресс', sets: 4, reps: '30 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч', 'Пресс'), category: 'Пресс', sets: 4, reps: 16, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Пресс'), category: 'Пресс', sets: 4, reps: '20 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка', images: getExercisePhotoSlots('Боковая планка', 'Пресс'), category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка на правую сторону', images: getExercisePhotoSlots('Боковая планка на правую сторону', 'Пресс'), category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка на левую сторону', images: getExercisePhotoSlots('Боковая планка на левую сторону', 'Пресс'), category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'Пресс'), category: 'Пресс', sets: 4, reps: '25 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Твист сидя', images: getExercisePhotoSlots('Твист сидя', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Русский твист', images: getExercisePhotoSlots('Русский твист', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Подъём таза лёжа', images: getExercisePhotoSlots('Подъём таза лёжа', 'Пресс'), category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Вакуум живота стоя', images: getExercisePhotoSlots('Вакуум живота стоя', 'Пресс'), category: 'Пресс', sets: 4, reps: '10 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Вакуум живота лёжа', images: getExercisePhotoSlots('Вакуум живота лёжа', 'Пресс'), category: 'Пресс', sets: 4, reps: '10 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Вакуум живота сидя', images: getExercisePhotoSlots('Вакуум живота сидя', 'Пресс'), category: 'Пресс', sets: 4, reps: '10 сек', weight: 0, icon: 'press', equipment: 'none' },
    { name: 'Книжка (складывание)', images: getExercisePhotoSlots('Книжка (складывание)', 'Пресс'), category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'none' },

    // ===== РУКИ =====
    { name: 'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом', 'Руки'), category: 'Руки', sets: 4, reps: 15, weight: 0, icon: 'bodybuilding', equipment: 'none' },
    { name: 'Алмазные отжимания', images: getExercisePhotoSlots('Алмазные отжимания', 'Руки'), category: 'Руки', sets: 4, reps: 10, weight: 0, icon: 'bodybuilding', equipment: 'none' },
    { name: 'Отжимания на одной руке на правую руку', images: getExercisePhotoSlots('Отжимания на одной руке на правую руку', 'Руки'), category: 'Руки', sets: 4, reps: 6, weight: 0, icon: 'bodybuilding', equipment: 'none' },
    { name: 'Отжимания на одной руке на левую руку', images: getExercisePhotoSlots('Отжимания на одной руке на левую руку', 'Руки'), category: 'Руки', sets: 4, reps: 6, weight: 0, icon: 'bodybuilding', equipment: 'none' },

    // ===== ВСЁ ТЕЛО =====
    { name: 'Бёрпи', images: getExercisePhotoSlots('Бёрпи', 'Всё тело'), category: 'Всё тело', sets: 4, reps: 15, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх', 'Всё тело'), category: 'Всё тело', sets: 4, reps: 12, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Бёрпи упрощённые', images: getExercisePhotoSlots('Бёрпи упрощённые', 'Всё тело'), category: 'Всё тело', sets: 4, reps: 15, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Всё тело'), category: 'Всё тело', sets: 4, reps: 15, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Бег с высоким подниманием колен', images: getExercisePhotoSlots('Бег с высоким подниманием колен', 'Всё тело'), category: 'Всё тело', sets: 4, reps: '20 сек', weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Всё тело'), category: 'Всё тело', sets: 4, reps: 20, weight: 0, icon: 'WholeBody', equipment: 'none' },
    { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Всё тело'), category: 'Всё тело', sets: 4, reps: 20, weight: 0, icon: 'WholeBody', equipment: 'none' },

    // ====================================================================
    // ФИТНЕС (без инвентаря)
    // ====================================================================

    // ===== КАРДИО =====
    { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'Кардио'), category: 'Кардио', sets: 3, reps: '30 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Бег на месте с высокими коленями', images: getExercisePhotoSlots('Бег на месте с высокими коленями', 'Кардио'), category: 'Кардио', sets: 3, reps: '30 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Бег на месте с захлёстом голеней', images: getExercisePhotoSlots('Бег на месте с захлёстом голеней', 'Кардио'), category: 'Кардио', sets: 3, reps: '30 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кардио'), category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки со сменой ног', images: getExercisePhotoSlots('Прыжки со сменой ног', 'Кардио'), category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки ноги вместе-врозь', images: getExercisePhotoSlots('Прыжки ноги вместе-врозь', 'Кардио'), category: 'Кардио', sets: 3, reps: 20, icon: 'cardio', equipment: 'none' },
    { name: 'Бёрпи упрощённые', images: getExercisePhotoSlots('Бёрпи упрощённые', 'Кардио'), category: 'Кардио', sets: 3, reps: 10, icon: 'cardio', equipment: 'none' },
    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кардио'), category: 'Кардио', sets: 3, reps: 15, icon: 'cardio', equipment: 'none' },
    { name: 'Ходьба с высоким подниманием колен', images: getExercisePhotoSlots('Ходьба с высоким подниманием колен', 'Кардио'), category: 'Кардио', sets: 3, reps: '20 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Ходьба с захлёстом голеней', images: getExercisePhotoSlots('Ходьба с захлёстом голеней', 'Кардио'), category: 'Кардио', sets: 3, reps: '20 сек', icon: 'cardio', equipment: 'none' },
    { name: 'Степ-ап (шаги на платформу)', images: getExercisePhotoSlots('Степ-ап (шаги на платформу)', 'Кардио'), category: 'Кардио', sets: 3, reps: 15, icon: 'cardio', equipment: 'none' },
    { name: 'Звезда (прыжки с разведением рук и ног)', images: getExercisePhotoSlots('Звезда (прыжки с разведением рук и ног)', 'Кардио'), category: 'Кардио', sets: 3, reps: 15, icon: 'cardio', equipment: 'none' },

    // ===== РАСТЯЖКА =====
    { name: 'Наклоны к ногам сидя', images: getExercisePhotoSlots('Наклоны к ногам сидя', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Наклоны к ногам стоя', images: getExercisePhotoSlots('Наклоны к ногам стоя', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Глубокий наклон к ногам', images: getExercisePhotoSlots('Глубокий наклон к ногам', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка шеи', images: getExercisePhotoSlots('Растяжка шеи', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка шеи с руками', images: getExercisePhotoSlots('Растяжка шеи с руками', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка шеи с сопротивлением', images: getExercisePhotoSlots('Растяжка шеи с сопротивлением', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка рук за спиной', images: getExercisePhotoSlots('Растяжка рук за спиной', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка трицепса', images: getExercisePhotoSlots('Растяжка трицепса', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка плеч (замок)', images: getExercisePhotoSlots('Растяжка плеч (замок)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка плеч за спиной', images: getExercisePhotoSlots('Растяжка плеч за спиной', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Наклоны в стороны', images: getExercisePhotoSlots('Наклоны в стороны', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Боковые наклоны с руками', images: getExercisePhotoSlots('Боковые наклоны с руками', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Боковые наклоны с захватом', images: getExercisePhotoSlots('Боковые наклоны с захватом', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины (кошка-корова)', images: getExercisePhotoSlots('Растяжка спины (кошка-корова)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины (скручивание)', images: getExercisePhotoSlots('Растяжка спины (скручивание)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины на полу (скручивание)', images: getExercisePhotoSlots('Растяжка спины на полу (скручивание)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка позвоночника (мост)', images: getExercisePhotoSlots('Растяжка позвоночника (мост)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка ног (шпагат)', images: getExercisePhotoSlots('Растяжка ног (шпагат)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Продольный шпагат', images: getExercisePhotoSlots('Продольный шпагат', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поперечный шпагат', images: getExercisePhotoSlots('Поперечный шпагат', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Складка с захватом стоп', images: getExercisePhotoSlots('Складка с захватом стоп', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка задней поверхности бедра', images: getExercisePhotoSlots('Растяжка задней поверхности бедра', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Бабочка', images: getExercisePhotoSlots('Бабочка', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Ягодичный мостик (статический)', images: getExercisePhotoSlots('Ягодичный мостик (статический)', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка'), category: 'Растяжка', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },

    // ===== РАСТЯЖКА ПОЗВОНОЧНИКА =====
    { name: 'Наклоны вперёд сидя', images: getExercisePhotoSlots('Наклоны вперёд сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Глубокий наклон вперёд с захватом ног', images: getExercisePhotoSlots('Глубокий наклон вперёд с захватом ног', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Глубокий наклон с захватом стоп', images: getExercisePhotoSlots('Глубокий наклон с захватом стоп', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '35 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Кошка-корова', images: getExercisePhotoSlots('Кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: 10, icon: 'stretching', equipment: 'none' },
    { name: 'Кошка-корова с задержкой', images: getExercisePhotoSlots('Кошка-корова с задержкой', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: 15, icon: 'stretching', equipment: 'none' },
    { name: 'Скручивание лёжа (позвоночник)', images: getExercisePhotoSlots('Скручивание лёжа (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Скручивание позвоночника сидя', images: getExercisePhotoSlots('Скручивание позвоночника сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '30 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '20 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Наклоны в стороны стоя', images: getExercisePhotoSlots('Наклоны в стороны стоя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'none' },
    { name: 'Растяжка спины на фитболе', images: getExercisePhotoSlots('Растяжка спины на фитболе', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '25 сек', icon: 'stretching', equipment: 'mat' },

    // ===== ЗАРЯДКА =====
    { name: 'Наклоны головы', images: getExercisePhotoSlots('Наклоны головы', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Наклоны головы с сопротивлением', images: getExercisePhotoSlots('Наклоны головы с сопротивлением', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },
    { name: 'Вращение плечами', images: getExercisePhotoSlots('Вращение плечами', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Наклоны туловища', images: getExercisePhotoSlots('Наклоны туловища', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },
    { name: 'Приседания', images: getExercisePhotoSlots('Приседания', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 15, icon: 'charging', equipment: 'none' },
    { name: 'Махи ногами', images: getExercisePhotoSlots('Махи ногами', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },
    { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Планка', images: getExercisePhotoSlots('Планка', 'Зарядка'), category: 'Зарядка', sets: 3, reps: '20 сек', icon: 'charging', equipment: 'none' },
    { name: 'Планка с подъемом рук', images: getExercisePhotoSlots('Планка с подъемом рук', 'Зарядка'), category: 'Зарядка', sets: 3, reps: '30 сек', icon: 'charging', equipment: 'none' },
    { name: 'Выпады на месте', images: getExercisePhotoSlots('Выпады на месте', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 10, icon: 'charging', equipment: 'none' },
    { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, icon: 'charging', equipment: 'none' },

    // ===== ПИЛАТЕС =====
    { name: 'Сотня (дыхание + руки)', images: getExercisePhotoSlots('Сотня (дыхание + руки)', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 10, icon: 'Pilates', equipment: 'none' },
    { name: 'Сотня с вытянутыми ногами', images: getExercisePhotoSlots('Сотня с вытянутыми ногами', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Скручивание с подъемом ног', images: getExercisePhotoSlots('Скручивание с подъемом ног', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Скручивание с подъемом ног и рук', images: getExercisePhotoSlots('Скручивание с подъемом ног и рук', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 20, icon: 'Pilates', equipment: 'none' },
    { name: 'Подъем таза лёжа', images: getExercisePhotoSlots('Подъем таза лёжа', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Подъем таза на правую ногу', images: getExercisePhotoSlots('Подъем таза на правую ногу', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Подъем таза на левую ногу', images: getExercisePhotoSlots('Подъем таза на левую ногу', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Мостик с подъемом ноги', images: getExercisePhotoSlots('Мостик с подъемом ноги', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Мостик с подъемом ноги на правую ногу', images: getExercisePhotoSlots('Мостик с подъемом ноги на правую ногу', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Мостик с подъемом ноги на левую ногу', images: getExercisePhotoSlots('Мостик с подъемом ноги на левую ногу', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '30 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка с подъемом ноги', images: getExercisePhotoSlots('Планка с подъемом ноги', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '35 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка с подъемом ноги на правую ногу', images: getExercisePhotoSlots('Планка с подъемом ноги на правую ногу', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '40 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Планка с подъемом ноги на левую ногу', images: getExercisePhotoSlots('Планка с подъемом ноги на левую ногу', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '40 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка', images: getExercisePhotoSlots('Боковая планка', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги', images: getExercisePhotoSlots('Боковая планка с подъемом ноги', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '25 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги на правую сторону', images: getExercisePhotoSlots('Боковая планка с подъемом ноги на правую сторону', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '25 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги на левую сторону', images: getExercisePhotoSlots('Боковая планка с подъемом ноги на левую сторону', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '25 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Лодочка', images: getExercisePhotoSlots('Лодочка', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 12, icon: 'Pilates', equipment: 'none' },
    { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 15, icon: 'Pilates', equipment: 'none' },
    { name: 'Боковые наклоны сидя', images: getExercisePhotoSlots('Боковые наклоны сидя', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 10, icon: 'Pilates', equipment: 'none' },
    { name: 'Растяжка позвоночника (кошка)', images: getExercisePhotoSlots('Растяжка позвоночника (кошка)', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 10, icon: 'Pilates', equipment: 'none' },
    { name: 'Растяжка в позе голубя', images: getExercisePhotoSlots('Растяжка в позе голубя', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },
    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Пилатес'), category: 'Пилатес', sets: 3, reps: '20 сек', icon: 'Pilates', equipment: 'none' },

    // ====================================================================
    // БЛОК 2: ГАНТЕЛИ
    // ====================================================================

    // ===== ГРУДЬ =====
    { name: 'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Разводка гантелей лёжа', images: getExercisePhotoSlots('Разводка гантелей лёжа', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Разводка гантелей на наклонной скамье', images: getExercisePhotoSlots('Разводка гантелей на наклонной скамье', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Жим одной гантели лёжа', images: getExercisePhotoSlots('Жим одной гантели лёжа', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Пуловер с гантелью', images: getExercisePhotoSlots('Пуловер с гантелью', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },
    { name: 'Жим Свенда', images: getExercisePhotoSlots('Жим Свенда', 'Грудь'), category: 'Грудь', sets: 4, reps: 12, weight: 0, icon: 'breast', equipment: 'dumbbells' },

    // ===== СПИНА =====
    { name: 'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне', 'Спина'), category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Тяга гантели к поясу', images: getExercisePhotoSlots('Тяга гантели к поясу', 'Спина'), category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Тяга гантели к поясу с упором', images: getExercisePhotoSlots('Тяга гантели к поясу с упором', 'Спина'), category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Тяга двух гантелей к поясу', images: getExercisePhotoSlots('Тяга двух гантелей к поясу', 'Спина'), category: 'Спина', sets: 4, reps: 12, weight: 0, icon: 'back', equipment: 'dumbbells' },
    { name: 'Шраги с гантелями', images: getExercisePhotoSlots('Шраги с гантелями', 'Спина'), category: 'Спина', sets: 4, reps: 15, weight: 0, icon: 'back', equipment: 'dumbbells' },

    // ===== НОГИ =====
    { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Ноги'), category: 'Ноги', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Приседания с гантелями глубокие', images: getExercisePhotoSlots('Приседания с гантелями глубокие', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Фронтальные приседания с гантелями', images: getExercisePhotoSlots('Фронтальные приседания с гантелями', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады с гантелями на правую ногу', images: getExercisePhotoSlots('Выпады с гантелями на правую ногу', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады с гантелями на левую ногу', images: getExercisePhotoSlots('Выпады с гантелями на левую ногу', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады назад с гантелями', images: getExercisePhotoSlots('Выпады назад с гантелями', 'Ноги'), category: 'Ноги', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Выпады в стороны с гантелями', images: getExercisePhotoSlots('Выпады в стороны с гантелями', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Болгарские сплит-приседания на правую ногу', images: getExercisePhotoSlots('Болгарские сплит-приседания на правую ногу', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Болгарские сплит-приседания на левую ногу', images: getExercisePhotoSlots('Болгарские сплит-приседания на левую ногу', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 10, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Мёртвая тяга с гантелями', images: getExercisePhotoSlots('Мёртвая тяга с гантелями', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 12, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Подъём на носки с гантелями', images: getExercisePhotoSlots('Подъём на носки с гантелями', 'Ноги'), category: 'Ноги', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 20, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на правую ногу', images: getExercisePhotoSlots('Ягодичный мостик на правую ногу', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на левую ногу', images: getExercisePhotoSlots('Ягодичный мостик на левую ногу', 'Ягодицы'), category: 'Ягодицы', sets: 4, reps: 15, weight: 0, icon: 'legs', equipment: 'dumbbells' },

    // ===== ПЛЕЧИ =====
    { name: 'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим Арнольда', images: getExercisePhotoSlots('Жим Арнольда', 'Плечи'), category: 'Плечи', sets: 4, reps: 10, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим Арнольда сидя', images: getExercisePhotoSlots('Жим Арнольда сидя', 'Плечи'), category: 'Плечи', sets: 4, reps: 10, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в стороны стоя', images: getExercisePhotoSlots('Разводка гантелей в стороны стоя', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в стороны сидя', images: getExercisePhotoSlots('Разводка гантелей в стороны сидя', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в наклоне', images: getExercisePhotoSlots('Разводка гантелей в наклоне', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Разводка гантелей в наклоне сидя', images: getExercisePhotoSlots('Разводка гантелей в наклоне сидя', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Тяга к подбородку с гантелями', images: getExercisePhotoSlots('Тяга к подбородку с гантелями', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Подъём рук перед собой с гантелями', images: getExercisePhotoSlots('Подъём рук перед собой с гантелями', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },
    { name: 'Жим одной гантели сидя', images: getExercisePhotoSlots('Жим одной гантели сидя', 'Плечи'), category: 'Плечи', sets: 4, reps: 12, weight: 0, icon: 'shoulder', equipment: 'dumbbells' },

    // ===== ПРЕСС =====
    { name: 'Скручивания с гантелью', images: getExercisePhotoSlots('Скручивания с гантелью', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'dumbbells' },
    { name: 'Твист сидя с гантелью', images: getExercisePhotoSlots('Твист сидя с гантелью', 'Пресс'), category: 'Пресс', sets: 4, reps: 20, weight: 0, icon: 'press', equipment: 'dumbbells' },
    { name: 'Твист корпуса с гантелью', images: getExercisePhotoSlots('Твист корпуса с гантелью', 'Пресс'), category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'dumbbells' },

    // ===== РУКИ =====
    { name: 'Сгибание рук с гантелями', images: getExercisePhotoSlots('Сгибание рук с гантелями', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями стоя', images: getExercisePhotoSlots('Сгибание рук с гантелями стоя', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями сидя', images: getExercisePhotoSlots('Сгибание рук с гантелями сидя', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями на скамье Скотта', images: getExercisePhotoSlots('Сгибание рук с гантелями на скамье Скотта', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Французский жим с гантелью стоя', images: getExercisePhotoSlots('Французский жим с гантелью стоя', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Французский жим с гантелью сидя', images: getExercisePhotoSlots('Французский жим с гантелью сидя', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Французский жим с гантелями лёжа', images: getExercisePhotoSlots('Французский жим с гантелями лёжа', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Сгибание рук с гантелями хватом молот', images: getExercisePhotoSlots('Сгибание рук с гантелями хватом молот', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Разгибание рук с гантелью из-за головы', images: getExercisePhotoSlots('Разгибание рук с гантелью из-за головы', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Обратные отжимания от стула с весом', images: getExercisePhotoSlots('Обратные отжимания от стула с весом', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Жим лёжа узким хватом', images: getExercisePhotoSlots('Жим лёжа узким хватом', 'Руки'), category: 'Руки', sets: 4, reps: 12, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },

    // ===== ЗАРЯДКА (с гантелями) =====
    { name: 'Вращение плечами с гантелями', images: getExercisePhotoSlots('Вращение плечами с гантелями', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Наклоны туловища с гантелями', images: getExercisePhotoSlots('Наклоны туловища с гантелями', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 15, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Вращение корпусом с гантелью', images: getExercisePhotoSlots('Вращение корпусом с гантелью', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 12, weight: 0, icon: 'charging', equipment: 'dumbbells' },
    { name: 'Твист корпуса с гантелью', images: getExercisePhotoSlots('Твист корпуса с гантелью', 'Зарядка'), category: 'Зарядка', sets: 3, reps: 15, weight: 0, icon: 'charging', equipment: 'dumbbells' },

    // ===== ПИЛАТЕС (с гантелями) =====
    { name: 'Сотня с отягощением', images: getExercisePhotoSlots('Сотня с отягощением', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 20, weight: 0, icon: 'Pilates', equipment: 'dumbbells' },
    { name: 'Подъем таза с гантелью', images: getExercisePhotoSlots('Подъем таза с гантелью', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 15, weight: 0, icon: 'Pilates', equipment: 'dumbbells' },
    { name: 'Ножницы ногами с утяжелением', images: getExercisePhotoSlots('Ножницы ногами с утяжелением', 'Пилатес'), category: 'Пилатес', sets: 3, reps: 20, weight: 0, icon: 'Pilates', equipment: 'dumbbells' },

    // ====================================================================
    // БЛОК 4: ТУРНИК
    // ====================================================================

    // ===== СПИНА =====
    { name: 'Подтягивания', images: getExercisePhotoSlots('Подтягивания', 'Спина'), category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом', 'Спина'), category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания узким хватом', images: getExercisePhotoSlots('Подтягивания узким хватом', 'Спина'), category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания обратным хватом', images: getExercisePhotoSlots('Подтягивания обратным хватом', 'Спина'), category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания нейтральным хватом', images: getExercisePhotoSlots('Подтягивания нейтральным хватом', 'Спина'), category: 'Спина', sets: 4, reps: 10, weight: 0, icon: 'back', equipment: 'pullup' },
    { name: 'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением', 'Спина'), category: 'Спина', sets: 4, reps: 8, weight: 0, icon: 'back', equipment: 'pullup' },

    // ===== ПРЕСС =====
    { name: 'Подъём ног в висе', images: getExercisePhotoSlots('Подъём ног в висе', 'Пресс'), category: 'Пресс', sets: 4, reps: 15, weight: 0, icon: 'press', equipment: 'pullup' },
    { name: 'Подъём ног в висе с весом', images: getExercisePhotoSlots('Подъём ног в висе с весом', 'Пресс'), category: 'Пресс', sets: 4, reps: 12, weight: 0, icon: 'press', equipment: 'pullup' },

    // ===== РАСТЯЖКА ПОЗВОНОЧНИКА =====
    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', sets: 3, reps: '15 сек', icon: 'stretching', equipment: 'pullup' },

    // ====================================================================
    // PREMIUM
    // ====================================================================

    // ===== КРОССФИТ =====
    { name: 'Бёрпи с отжиманием', images: getExercisePhotoSlots('Бёрпи с отжиманием', 'Кроссфит'), category: 'Кроссфит', sets: 4, reps: 15, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх', 'Кроссфит'), category: 'Кроссфит', sets: 4, reps: 12, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'Кроссфит'), category: 'Кроссфит', sets: 4, reps: 12, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'Кроссфит'), category: 'Кроссфит', sets: 4, reps: 15, weight: 0, icon: 'crossfit', equipment: 'none' },
    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кроссфит'), category: 'Кроссфит', sets: 4, reps: 20, weight: 0, icon: 'crossfit', equipment: 'none' },

    // ===== МУЖСКАЯ СИЛА =====
    { name: 'Кегель для мужчин', images: getExercisePhotoSlots('Кегель для мужчин', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 20, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на правую ногу', images: getExercisePhotoSlots('Ягодичный мостик на правую ногу', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Ягодичный мостик на левую ногу', images: getExercisePhotoSlots('Ягодичный мостик на левую ногу', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Боковая планка с подъемом ноги', images: getExercisePhotoSlots('Боковая планка с подъемом ноги', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: '25 сек', weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 12, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Выпады с прыжком на правую ногу', images: getExercisePhotoSlots('Выпады с прыжком на правую ногу', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Выпады с прыжком на левую ногу', images: getExercisePhotoSlots('Выпады с прыжком на левую ногу', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'none' },
    { name: 'Боковые выпады с гантелью на правую ногу', images: getExercisePhotoSlots('Боковые выпады с гантелью на правую ногу', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },
    { name: 'Боковые выпады с гантелью на левую ногу', images: getExercisePhotoSlots('Боковые выпады с гантелью на левую ногу', 'Мужская сила'), category: 'Мужская сила', sets: 4, reps: 15, weight: 0, icon: 'men', equipment: 'dumbbells' },

    // ===== ЖЕНСКОЕ СЧАСТЬЕ =====
    { name: 'Кегель для женщин', images: getExercisePhotoSlots('Кегель для женщин', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 20, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 20, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Ягодичный мостик на правую ногу', images: getExercisePhotoSlots('Ягодичный мостик на правую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Ягодичный мостик на левую ногу', images: getExercisePhotoSlots('Ягодичный мостик на левую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 20, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Боковая планка на правую сторону', images: getExercisePhotoSlots('Боковая планка на правую сторону', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: '30 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Боковая планка на левую сторону', images: getExercisePhotoSlots('Боковая планка на левую сторону', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: '30 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Планка с подъемом ноги на правую ногу', images: getExercisePhotoSlots('Планка с подъемом ноги на правую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: '40 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Планка с подъемом ноги на левую ногу', images: getExercisePhotoSlots('Планка с подъемом ноги на левую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: '40 сек', weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Выпады с прыжком на правую ногу', images: getExercisePhotoSlots('Выпады с прыжком на правую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Выпады с прыжком на левую ногу', images: getExercisePhotoSlots('Выпады с прыжком на левую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'none' },
    { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Боковые выпады с гантелью на правую ногу', images: getExercisePhotoSlots('Боковые выпады с гантелью на правую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },
    { name: 'Боковые выпады с гантелью на левую ногу', images: getExercisePhotoSlots('Боковые выпады с гантелью на левую ногу', 'Женское счастье'), category: 'Женское счастье', sets: 4, reps: 15, weight: 0, icon: 'woman', equipment: 'dumbbells' },

    // ===== ДОПОЛНИТЕЛЬНЫЕ УПРАЖНЕНИЯ ДЛЯ ГОТОВЫХ ПРОГРАММ =====
    { name: 'Альпинист', images: getExercisePhotoSlots('Альпинист', 'Кардио'), category: 'Кардио', sets: 3, reps: 20, weight: 0, icon: 'cardio', equipment: 'none' },
    { name: 'Поза кобры', images: getExercisePhotoSlots('Поза кобры', 'Растяжка'), category: 'Растяжка', sets: 2, reps: '20 сек', weight: 0, icon: 'stretching', equipment: 'none' },
    { name: 'Ходьба на месте с высоким подниманием колен', images: getExercisePhotoSlots('Ходьба на месте с высоким подниманием колен', 'Кардио'), category: 'Кардио', sets: 3, reps: '30 сек', weight: 0, icon: 'cardio', equipment: 'none' },
    { name: 'Джампинг джек', images: getExercisePhotoSlots('Джампинг джек', 'Кардио'), category: 'Кардио', sets: 3, reps: 20, weight: 0, icon: 'cardio', equipment: 'none' },
    { name: 'Ходьба на месте', images: getExercisePhotoSlots('Ходьба на месте', 'Кардио'), category: 'Кардио', sets: 2, reps: '40 сек', weight: 0, icon: 'cardio', equipment: 'none' },
    { name: 'Шаги в сторону', images: getExercisePhotoSlots('Шаги в сторону', 'Кардио'), category: 'Кардио', sets: 2, reps: '30 сек', weight: 0, icon: 'cardio', equipment: 'none' },
    { name: 'Повороты корпуса стоя', images: getExercisePhotoSlots('Повороты корпуса стоя', 'Растяжка'), category: 'Растяжка', sets: 2, reps: 20, weight: 0, icon: 'stretching', equipment: 'none' },
    { name: 'Концентрированные сгибания', images: getExercisePhotoSlots('Концентрированные сгибания', 'Руки'), category: 'Руки', sets: 3, reps: 10, weight: 0, icon: 'bodybuilding', equipment: 'dumbbells' },
    { name: 'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке', 'Пресс'), category: 'Пресс', sets: 2, reps: '15 сек', weight: 0, icon: 'press', equipment: 'none' },
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
                {name:'Отжимания от стены', images: getExercisePhotoSlots('Отжимания от стены'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула', images: getExercisePhotoSlots('Обратные отжимания от стула'),category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом с коленей', images: getExercisePhotoSlots('Отжимания узким хватом с коленей'),category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Руки',reps:'16',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Сгибание рук с гантелями стоя', images: getExercisePhotoSlots('Сгибание рук с гантелями стоя'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук хватом молот сидя', images: getExercisePhotoSlots('Сгибание рук хватом молот сидя'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью сидя', images: getExercisePhotoSlots('Французский жим с гантелью сидя'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула', images: getExercisePhotoSlots('Обратные отжимания от стула'),category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Руки',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Руки',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Негативные подтягивания обратным хватом', images: getExercisePhotoSlots('Негативные подтягивания обратным хватом'),category:'Руки',reps:'5',sets:'3',weight:0,icon:'back'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула', images: getExercisePhotoSlots('Обратные отжимания от стула'),category:'Руки',reps:'10',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Сгибание рук с гантелями стоя', images: getExercisePhotoSlots('Сгибание рук с гантелями стоя'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью сидя', images: getExercisePhotoSlots('Французский жим с гантелью сидя'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Руки',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Руки',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Руки',reps:'25 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: вращение плечами и руками', images: getExercisePhotoSlots('Разминка: вращение плечами и руками'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом'),category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Алмазные отжимания', images: getExercisePhotoSlots('Алмазные отжимания'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула', images: getExercisePhotoSlots('Обратные отжимания от стула'),category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу', images: getExercisePhotoSlots('Отжимания с паузой внизу'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Руки',reps:'20',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания с касанием плеча', images: getExercisePhotoSlots('Отжимания с касанием плеча'),category:'Руки',reps:'16',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами с гантелями', images: getExercisePhotoSlots('Разминка: вращение плечами с гантелями'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук с гантелями стоя', images: getExercisePhotoSlots('Сгибание рук с гантелями стоя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Концентрированные сгибания', images: getExercisePhotoSlots('Концентрированные сгибания'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук хватом молот сидя', images: getExercisePhotoSlots('Сгибание рук хватом молот сидя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя', images: getExercisePhotoSlots('Французский жим с гантелью стоя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы', images: getExercisePhotoSlots('Разгибание рук с гантелью из-за головы'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом'),category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания обратным хватом', images: getExercisePhotoSlots('Подтягивания обратным хватом'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом', images: getExercisePhotoSlots('Подтягивания узким хватом'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания нейтральным хватом', images: getExercisePhotoSlots('Подтягивания нейтральным хватом'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Негативные подтягивания', images: getExercisePhotoSlots('Негативные подтягивания'),category:'Руки',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Руки',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом'),category:'Руки',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами с гантелями', images: getExercisePhotoSlots('Разминка: вращение плечами с гантелями'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук с гантелями стоя', images: getExercisePhotoSlots('Сгибание рук с гантелями стоя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания обратным хватом', images: getExercisePhotoSlots('Подтягивания обратным хватом'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом', images: getExercisePhotoSlots('Подтягивания узким хватом'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Концентрированные сгибания', images: getExercisePhotoSlots('Концентрированные сгибания'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя', images: getExercisePhotoSlots('Французский жим с гантелью стоя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы', images: getExercisePhotoSlots('Разгибание рук с гантелью из-за головы'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Руки',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Руки',reps:'5',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Алмазные отжимания с ногами на возвышении', images: getExercisePhotoSlots('Алмазные отжимания с ногами на возвышении'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Обратные отжимания от стула с ногами на возвышении', images: getExercisePhotoSlots('Обратные отжимания от стула с ногами на возвышении'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу (глубоко)', images: getExercisePhotoSlots('Отжимания с паузой внизу (глубоко)'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Руки',reps:'40 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания с касанием плеча (медленно)', images: getExercisePhotoSlots('Отжимания с касанием плеча (медленно)'),category:'Руки',reps:'16',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук с гантелями сидя', images: getExercisePhotoSlots('Сгибание рук с гантелями сидя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Концентрированные сгибания', images: getExercisePhotoSlots('Концентрированные сгибания'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Сгибание рук хватом молот сидя', images: getExercisePhotoSlots('Сгибание рук хватом молот сидя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя', images: getExercisePhotoSlots('Французский жим с гантелью стоя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы', images: getExercisePhotoSlots('Разгибание рук с гантелью из-за головы'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Руки',reps:'5',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: махи руками', images: getExercisePhotoSlots('Разминка: махи руками'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом с паузой', images: getExercisePhotoSlots('Подтягивания узким хватом с паузой'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания обратным хватом', images: getExercisePhotoSlots('Подтягивания обратным хватом'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания нейтральным хватом', images: getExercisePhotoSlots('Подтягивания нейтральным хватом'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Руки',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)', images: getExercisePhotoSlots('Австралийские подтягивания (ноги на возвышении)'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Руки',reps:'5',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Руки',reps:'15',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями'),category:'Руки',reps:'12',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом с паузой', images: getExercisePhotoSlots('Подтягивания узким хватом с паузой'),category:'Руки',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Руки',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Сгибание рук с гантелями сидя', images: getExercisePhotoSlots('Сгибание рук с гантелями сидя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Молотковые сгибания', images: getExercisePhotoSlots('Молотковые сгибания'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Концентрированные сгибания', images: getExercisePhotoSlots('Концентрированные сгибания'),category:'Руки',reps:'10',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Французский жим с гантелью стоя', images: getExercisePhotoSlots('Французский жим с гантелью стоя'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Разгибание рук с гантелью из-за головы', images: getExercisePhotoSlots('Разгибание рук с гантелью из-за головы'),category:'Руки',reps:'12',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Руки',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Пресс': {
            '1 LVL': {
                none: [
                {name:'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Обратные скручивания', images: getExercisePhotoSlots('Обратные скручивания'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях'),category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя', images: getExercisePhotoSlots('Вакуум живота стоя'),category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'},
                {name:'Подъём таза лёжа', images: getExercisePhotoSlots('Подъём таза лёжа'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'}
                ],
                dumbbells: [
                {name:'Скручивания с гантелью', images: getExercisePhotoSlots('Скручивания с гантелью'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Обратные скручивания', images: getExercisePhotoSlots('Обратные скручивания'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя', images: getExercisePhotoSlots('Вакуум живота стоя'),category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'}
                ],
                pullup: [
                {name:'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе'),category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Пресс',reps:'15 сек',sets:'3',weight:0,icon:'press'},
                {name:'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Обратные скручивания', images: getExercisePhotoSlots('Обратные скручивания'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя', images: getExercisePhotoSlots('Вакуум живота стоя'),category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'}
                ],
                dumbbells_pullup: [
                {name:'Скручивания с гантелью', images: getExercisePhotoSlots('Скручивания с гантелью'),category:'Пресс',reps:'15',sets:'3',weight:0,icon:'press'},
                {name:'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе'),category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Пресс',reps:'15 сек',sets:'3',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Вакуум живота стоя', images: getExercisePhotoSlots('Вакуум живота стоя'),category:'Пресс',reps:'10 сек',sets:'3',weight:0,icon:'press'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Скручивания с вытянутыми руками', images: getExercisePhotoSlots('Скручивания с вытянутыми руками'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист', images: getExercisePhotoSlots('Русский твист'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём таза лёжа', images: getExercisePhotoSlots('Подъём таза лёжа'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Скручивания с гантелью', images: getExercisePhotoSlots('Скручивания с гантелью'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп', images: getExercisePhotoSlots('Подъём ног с гантелью между стоп'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Обратные скручивания с гантелью', images: getExercisePhotoSlots('Обратные скручивания с гантелью'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног в висе', images: getExercisePhotoSlots('Подъём ног в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Скручивания с вытянутыми руками', images: getExercisePhotoSlots('Скручивания с вытянутыми руками'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист', images: getExercisePhotoSlots('Русский твист'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Велосипед лёжа', images: getExercisePhotoSlots('Велосипед лёжа'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём ног в висе', images: getExercisePhotoSlots('Подъём ног в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Скручивания с гантелью', images: getExercisePhotoSlots('Скручивания с гантелью'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп', images: getExercisePhotoSlots('Подъём ног с гантелью между стоп'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка', images: getExercisePhotoSlots('V-складка'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Подъём прямых ног под 45°', images: getExercisePhotoSlots('Подъём прямых ног под 45°'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с подъёмом ног', images: getExercisePhotoSlots('Russian twist с подъёмом ног'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers лёжа', images: getExercisePhotoSlots('Windshield wipers лёжа'),category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Подъём таза с опорой на руки', images: getExercisePhotoSlots('Подъём таза с опорой на руки'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги'),category:'Пресс',reps:'25 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'V-складка с гантелью', images: getExercisePhotoSlots('V-складка с гантелью'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп под 45°', images: getExercisePhotoSlots('Подъём ног с гантелью между стоп под 45°'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с гантелью', images: getExercisePhotoSlots('Russian twist с гантелью'),category:'Пресс',reps:'25',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers лёжа', images: getExercisePhotoSlots('Windshield wipers лёжа'),category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Подъём таза с опорой на руки', images: getExercisePhotoSlots('Подъём таза с опорой на руки'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног в висе с отягощением', images: getExercisePhotoSlots('Подъём ног в висе с отягощением'),category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе'),category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка', images: getExercisePhotoSlots('V-складка'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с подъёмом ног', images: getExercisePhotoSlots('Russian twist с подъёмом ног'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Пресс',reps:'12',sets:'3',weight:0,icon:'press'},
                {name:'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе'),category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка с гантелью', images: getExercisePhotoSlots('V-складка с гантелью'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Russian twist с гантелью', images: getExercisePhotoSlots('Russian twist с гантелью'),category:'Пресс',reps:'25',sets:'4',weight:0,icon:'press'},
                {name:'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью'),category:'Пресс',reps:'20',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног с гантелью между стоп', images: getExercisePhotoSlots('Подъём ног с гантелью между стоп'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Пресс',reps:'30 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Ноги': {
            '1 LVL': {
                none: [
                {name:'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады на месте', images: getExercisePhotoSlots('Выпады на месте'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик'),category:'Ягодицы',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём на носки', images: getExercisePhotoSlots('Подъём на носки'),category:'Ноги',reps:'20',sets:'3',weight:0,icon:'legs'},
                {name:'Махи ногой назад', images: getExercisePhotoSlots('Махи ногой назад'),category:'Ягодицы',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания у стены', images: getExercisePhotoSlots('Приседания у стены'),category:'Ноги',reps:'25 сек',sets:'3',weight:0,icon:'legs'}
                ],
                dumbbells: [
                {name:'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями'),category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью'),category:'Ягодицы',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём на носки с гантелями', images: getExercisePhotoSlots('Подъём на носки с гантелями'),category:'Ноги',reps:'20',sets:'3',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью'),category:'Ягодицы',reps:'12',sets:'3',weight:0,icon:'legs'}
                ],
                pullup: [
                {name:'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады на месте', images: getExercisePhotoSlots('Выпады на месте'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе'),category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик'),category:'Ягодицы',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём на носки', images: getExercisePhotoSlots('Подъём на носки'),category:'Ноги',reps:'20',sets:'3',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Ноги',reps:'15 сек',sets:'3',weight:0,icon:'legs'}
                ],
                dumbbells_pullup: [
                {name:'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями'),category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе'),category:'Пресс',reps:'8',sets:'3',weight:0,icon:'press'},
                {name:'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью'),category:'Ягодицы',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Ноги',reps:'15 сек',sets:'3',weight:0,icon:'legs'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания', images: getExercisePhotoSlots('Болгарские сплит-приседания'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки (медленно)', images: getExercisePhotoSlots('Подъём на носки (медленно)'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания у стены', images: getExercisePhotoSlots('Приседания у стены'),category:'Ноги',reps:'40 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны', images: getExercisePhotoSlots('Выпады в стороны'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Махи ногой назад (медленно)', images: getExercisePhotoSlots('Махи ногой назад (медленно)'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells: [
                {name:'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью'),category:'Ягодицы',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки с гантелями', images: getExercisePhotoSlots('Подъём на носки с гантелями'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны с гантелями', images: getExercisePhotoSlots('Выпады в стороны с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'}
                ],
                pullup: [
                {name:'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе'),category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания', images: getExercisePhotoSlots('Болгарские сплит-приседания'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания у стены', images: getExercisePhotoSlots('Приседания у стены'),category:'Ноги',reps:'40 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Ноги',reps:'25 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Махи ногой назад (медленно)', images: getExercisePhotoSlots('Махи ногой назад (медленно)'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе'),category:'Пресс',reps:'10',sets:'4',weight:0,icon:'press'},
                {name:'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью'),category:'Ягодицы',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки с гантелями', images: getExercisePhotoSlots('Подъём на носки с гантелями'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Ноги',reps:'25 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)'),category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с прыжком', images: getExercisePhotoSlots('Болгарские сплит-приседания с прыжком'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания у стены (глубоко)', images: getExercisePhotoSlots('Приседания у стены (глубоко)'),category:'Ноги',reps:'60 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой', images: getExercisePhotoSlots('Подъём на носки одной ногой'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки на одной ноге', images: getExercisePhotoSlots('Прыжки на одной ноге'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны глубоко', images: getExercisePhotoSlots('Выпады в стороны глубоко'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Махи ногой назад (медленно, амплитудно)', images: getExercisePhotoSlots('Махи ногой назад (медленно, амплитудно)'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells: [
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями глубокие', images: getExercisePhotoSlots('Приседания с гантелями глубокие'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга на одной ноге с гантелью', images: getExercisePhotoSlots('Румынская тяга на одной ноге с гантелью'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью'),category:'Ягодицы',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой с гантелью', images: getExercisePhotoSlots('Подъём на носки одной ногой с гантелью'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады в стороны с гантелями', images: getExercisePhotoSlots('Выпады в стороны с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Пистолетик (с опорой)', images: getExercisePhotoSlots('Пистолетик (с опорой)'),category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'}
                ],
                pullup: [
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)'),category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Подъём ног в висе с отягощением', images: getExercisePhotoSlots('Подъём ног в висе с отягощением'),category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с прыжком', images: getExercisePhotoSlots('Болгарские сплит-приседания с прыжком'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге'),category:'Ягодицы',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Ноги',reps:'30 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой', images: getExercisePhotoSlots('Подъём на носки одной ногой'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Прыжки на одной ноге', images: getExercisePhotoSlots('Прыжки на одной ноге'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом'),category:'Ноги',reps:'12',sets:'3',weight:0,icon:'legs'},
                {name:'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Приседания с гантелями глубокие', images: getExercisePhotoSlots('Приседания с гантелями глубокие'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём ног в висе с отягощением', images: getExercisePhotoSlots('Подъём ног в висе с отягощением'),category:'Пресс',reps:'8',sets:'4',weight:0,icon:'press'},
                {name:'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Румынская тяга на одной ноге с гантелью', images: getExercisePhotoSlots('Румынская тяга на одной ноге с гантелью'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'legs'},
                {name:'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью'),category:'Ягодицы',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Ноги',reps:'30 сек',sets:'4',weight:0,icon:'legs'},
                {name:'Подъём на носки одной ногой с гантелью', images: getExercisePhotoSlots('Подъём на носки одной ногой с гантелью'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'}
                ]
            }
        },
        'Плечи': {
            '1 LVL': {
                none: [
                {name:'Вращение плечами', images: getExercisePhotoSlots('Вращение плечами'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Отжимания от стены', images: getExercisePhotoSlots('Отжимания от стены'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания на коленях', images: getExercisePhotoSlots('Pike-отжимания на коленях'),category:'Плечи',reps:'8',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Плечи',reps:'25 сек',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Вращение плечами с гантелями', images: getExercisePhotoSlots('Вращение плечами с гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подъём рук перед собой с гантелями', images: getExercisePhotoSlots('Подъём рук перед собой с гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Вращение плечами', images: getExercisePhotoSlots('Вращение плечами'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Плечи',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Плечи',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Pike-отжимания на коленях', images: getExercisePhotoSlots('Pike-отжимания на коленях'),category:'Плечи',reps:'8',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Плечи',reps:'25 сек',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Вращение плечами с гантелями', images: getExercisePhotoSlots('Вращение плечами с гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Плечи',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Плечи',reps:'15 сек',sets:'3',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'16',sets:'3',weight:0,icon:'shoulder'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: вращение плечами и руками', images: getExercisePhotoSlots('Разминка: вращение плечами и руками'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания', images: getExercisePhotoSlots('Pike-отжимания'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены', images: getExercisePhotoSlots('Отжимания в стойке у стены'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке с опорой', images: getExercisePhotoSlots('Отжимания в стойке с опорой'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с паузой', images: getExercisePhotoSlots('Pike-отжимания с паузой'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом'),category:'Плечи',reps:'15',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'20',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами с гантелями', images: getExercisePhotoSlots('Разминка: вращение плечами с гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим Арнольда', images: getExercisePhotoSlots('Жим Арнольда'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в наклоне', images: getExercisePhotoSlots('Разведение гантелей в наклоне'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Тяга к подбородку с гантелями', images: getExercisePhotoSlots('Тяга к подбородку с гантелями'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подъём рук перед собой с гантелями', images: getExercisePhotoSlots('Подъём рук перед собой с гантелями'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'20',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания за голову', images: getExercisePhotoSlots('Подтягивания за голову'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания обратным хватом', images: getExercisePhotoSlots('Подтягивания обратным хватом'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Pike-отжимания', images: getExercisePhotoSlots('Pike-отжимания'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены', images: getExercisePhotoSlots('Отжимания в стойке у стены'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Австралийские подтягивания (широкий хват)', images: getExercisePhotoSlots('Австралийские подтягивания (широкий хват)'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Плечи',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка с касанием плеч', images: getExercisePhotoSlots('Планка с касанием плеч'),category:'Плечи',reps:'20',sets:'4',weight:0,icon:'shoulder'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами с гантелями', images: getExercisePhotoSlots('Разминка: вращение плечами с гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Жим Арнольда', images: getExercisePhotoSlots('Жим Арнольда'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в наклоне', images: getExercisePhotoSlots('Разведение гантелей в наклоне'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подтягивания за голову', images: getExercisePhotoSlots('Подтягивания за голову'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Тяга к подбородку с гантелями', images: getExercisePhotoSlots('Тяга к подбородку с гантелями'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Плечи',reps:'25 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены (полная)', images: getExercisePhotoSlots('Отжимания в стойке у стены (полная)'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с ногами на возвышении', images: getExercisePhotoSlots('Pike-отжимания с ногами на возвышении'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке с опорой одной ногой', images: getExercisePhotoSlots('Отжимания в стойке с опорой одной ногой'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с паузой (глубоко)', images: getExercisePhotoSlots('Pike-отжимания с паузой (глубоко)'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Плечи',reps:'5',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка с касанием плеч (медленная)', images: getExercisePhotoSlots('Планка с касанием плеч (медленная)'),category:'Плечи',reps:'24',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Плечи',reps:'40 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания с касанием плеча (медленно)', images: getExercisePhotoSlots('Отжимания с касанием плеча (медленно)'),category:'Плечи',reps:'16',sets:'4',weight:0,icon:'shoulder'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим Арнольда сидя', images: getExercisePhotoSlots('Жим Арнольда сидя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим одной гантели сидя', images: getExercisePhotoSlots('Жим одной гантели сидя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разводка гантелей в наклоне сидя', images: getExercisePhotoSlots('Разводка гантелей в наклоне сидя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Тяга к подбородку с гантелями', images: getExercisePhotoSlots('Тяга к подбородку с гантелями'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Отжимания в стойке у стены (полная)', images: getExercisePhotoSlots('Отжимания в стойке у стены (полная)'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: махи руками', images: getExercisePhotoSlots('Разминка: махи руками'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом с отягощением', images: getExercisePhotoSlots('Подтягивания широким хватом с отягощением'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания за голову', images: getExercisePhotoSlots('Подтягивания за голову'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания с выходом', images: getExercisePhotoSlots('Подтягивания с выходом'),category:'Плечи',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Плечи',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)', images: getExercisePhotoSlots('Австралийские подтягивания (ноги на возвышении)'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания в стойке у стены (полная)', images: getExercisePhotoSlots('Отжимания в стойке у стены (полная)'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Pike-отжимания с ногами на возвышении', images: getExercisePhotoSlots('Pike-отжимания с ногами на возвышении'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Плечи',reps:'15',sets:'3',weight:0,icon:'shoulder'},
                {name:'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Подтягивания широким хватом с отягощением', images: getExercisePhotoSlots('Подтягивания широким хватом с отягощением'),category:'Плечи',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Жим Арнольда сидя', images: getExercisePhotoSlots('Жим Арнольда сидя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Подтягивания за голову', images: getExercisePhotoSlots('Подтягивания за голову'),category:'Плечи',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Разводка гантелей в наклоне сидя', images: getExercisePhotoSlots('Разводка гантелей в наклоне сидя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Тяга к подбородку с гантелями', images: getExercisePhotoSlots('Тяга к подбородку с гантелями'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'bodybuilding'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Плечи',reps:'30 сек',sets:'4',weight:0,icon:'shoulder'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Грудь': {
            '1 LVL': {
                none: [
                {name:'Круговые вращения руками', images: getExercisePhotoSlots('Круговые вращения руками'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от стены', images: getExercisePhotoSlots('Отжимания от стены'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от пола (частичные)', images: getExercisePhotoSlots('Отжимания от пола (частичные)'),category:'Грудь',reps:'8',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания узким хватом от коленей', images: getExercisePhotoSlots('Отжимания узким хватом от коленей'),category:'Грудь',reps:'10',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Круговые вращения руками', images: getExercisePhotoSlots('Круговые вращения руками'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа', images: getExercisePhotoSlots('Разводка гантелей лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Жим одной гантели лёжа', images: getExercisePhotoSlots('Жим одной гантели лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Круговые вращения руками', images: getExercisePhotoSlots('Круговые вращения руками'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Грудь',reps:'10',sets:'3',weight:0,icon:'breast'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Грудь',reps:'15 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от пола (частичные)', images: getExercisePhotoSlots('Отжимания от пола (частичные)'),category:'Грудь',reps:'8',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Круговые вращения руками', images: getExercisePhotoSlots('Круговые вращения руками'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Грудь',reps:'10',sets:'3',weight:0,icon:'breast'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Грудь',reps:'15 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа', images: getExercisePhotoSlots('Разводка гантелей лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Грудь',reps:'25 сек',sets:'3',weight:0,icon:'breast'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания широким хватом', images: getExercisePhotoSlots('Отжимания широким хватом'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу', images: getExercisePhotoSlots('Отжимания с паузой внизу'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания от коленей медленные', images: getExercisePhotoSlots('Отжимания от коленей медленные'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа', images: getExercisePhotoSlots('Разводка гантелей лёжа'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье', images: getExercisePhotoSlots('Разводка гантелей на наклонной скамье'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Пуловер с гантелью', images: getExercisePhotoSlots('Пуловер с гантелью'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим одной гантели лёжа', images: getExercisePhotoSlots('Жим одной гантели лёжа'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания с выходом', images: getExercisePhotoSlots('Подтягивания с выходом'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания широким хватом', images: getExercisePhotoSlots('Отжимания широким хватом'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу', images: getExercisePhotoSlots('Отжимания с паузой внизу'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Грудь',reps:'25 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей лёжа', images: getExercisePhotoSlots('Разводка гантелей лёжа'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания с выходом', images: getExercisePhotoSlots('Подтягивания с выходом'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Пуловер с гантелью', images: getExercisePhotoSlots('Пуловер с гантелью'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Грудь',reps:'25 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье', images: getExercisePhotoSlots('Разводка гантелей на наклонной скамье'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с ногами на возвышении (высоко)', images: getExercisePhotoSlots('Отжимания с ногами на возвышении (высоко)'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с паузой внизу (глубоко)', images: getExercisePhotoSlots('Отжимания с паузой внизу (глубоко)'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания в алмаз', images: getExercisePhotoSlots('Отжимания в алмаз'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания', images: getExercisePhotoSlots('Pike-отжимания'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье', images: getExercisePhotoSlots('Разводка гантелей на наклонной скамье'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Жим одной гантели лёжа', images: getExercisePhotoSlots('Жим одной гантели лёжа'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Пуловер с гантелью', images: getExercisePhotoSlots('Пуловер с гантелью'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания', images: getExercisePhotoSlots('Pike-отжимания'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Отжимания на брусьях с отягощением', images: getExercisePhotoSlots('Отжимания на брусьях с отягощением'),category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания с выходом', images: getExercisePhotoSlots('Подтягивания с выходом'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)', images: getExercisePhotoSlots('Австралийские подтягивания (ноги на возвышении)'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания', images: getExercisePhotoSlots('Pike-отжимания'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Грудь',reps:'40 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: круговые вращения руками', images: getExercisePhotoSlots('Разминка: круговые вращения руками'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Разминка: вращение плечами', images: getExercisePhotoSlots('Разминка: вращение плечами'),category:'Грудь',reps:'15',sets:'3',weight:0,icon:'breast'},
                {name:'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на брусьях с отягощением', images: getExercisePhotoSlots('Отжимания на брусьях с отягощением'),category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Разводка гантелей на наклонной скамье', images: getExercisePhotoSlots('Разводка гантелей на наклонной скамье'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Пуловер с гантелью', images: getExercisePhotoSlots('Пуловер с гантелью'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Pike-отжимания', images: getExercisePhotoSlots('Pike-отжимания'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания'),category:'Грудь',reps:'8',sets:'4',weight:0,icon:'breast'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Грудь',reps:'30 сек',sets:'4',weight:0,icon:'breast'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ]
            }
        },
        'Спина': {
            '1 LVL': {
                none: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Супермен', images: getExercisePhotoSlots('Супермен'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу', images: getExercisePhotoSlots('Гиперэкстензия на полу'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Y-T-W подъёмы лёжа', images: getExercisePhotoSlots('Y-T-W подъёмы лёжа'),category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Пловец', images: getExercisePhotoSlots('Пловец'),category:'Спина',reps:'15',sets:'3',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'25 сек',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу', images: getExercisePhotoSlots('Тяга гантели к поясу'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга двух гантелей к поясу', images: getExercisePhotoSlots('Тяга двух гантелей к поясу'),category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Шраги с гантелями', images: getExercisePhotoSlots('Шраги с гантелями'),category:'Спина',reps:'15',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу', images: getExercisePhotoSlots('Гиперэкстензия на полу'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'25 сек',sets:'3',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Негативные подтягивания', images: getExercisePhotoSlots('Негативные подтягивания'),category:'Спина',reps:'5',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Супермен', images: getExercisePhotoSlots('Супермен'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'25 сек',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу', images: getExercisePhotoSlots('Тяга гантели к поясу'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Шраги с гантелями', images: getExercisePhotoSlots('Шраги с гантелями'),category:'Спина',reps:'15',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу', images: getExercisePhotoSlots('Гиперэкстензия на полу'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Супермен с задержкой', images: getExercisePhotoSlots('Супермен с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Гиперэкстензия на полу', images: getExercisePhotoSlots('Гиперэкстензия на полу'),category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Y-T-W подъёмы лёжа', images: getExercisePhotoSlots('Y-T-W подъёмы лёжа'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Reverse snow angel', images: getExercisePhotoSlots('Reverse snow angel'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Пловец медленный', images: getExercisePhotoSlots('Пловец медленный'),category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу с упором', images: getExercisePhotoSlots('Тяга гантели к поясу с упором'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями', images: getExercisePhotoSlots('Шраги с гантелями'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Гиперэкстензия с весом', images: getExercisePhotoSlots('Гиперэкстензия с весом'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Тяга одной гантели в упоре', images: getExercisePhotoSlots('Тяга одной гантели в упоре'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания', images: getExercisePhotoSlots('Подтягивания'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом', images: getExercisePhotoSlots('Подтягивания узким хватом'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания обратным хватом', images: getExercisePhotoSlots('Подтягивания обратным хватом'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания', images: getExercisePhotoSlots('Подтягивания'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантели к поясу с упором', images: getExercisePhotoSlots('Тяга гантели к поясу с упором'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями', images: getExercisePhotoSlots('Шраги с гантелями'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'20 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания', images: getExercisePhotoSlots('Разминка: потягивания'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Гиперэкстензия с задержкой', images: getExercisePhotoSlots('Гиперэкстензия с задержкой'),category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Reverse snow angel', images: getExercisePhotoSlots('Reverse snow angel'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Y-T-W подъёмы с задержкой', images: getExercisePhotoSlots('Y-T-W подъёмы с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Пловец медленный', images: getExercisePhotoSlots('Пловец медленный'),category:'Спина',reps:'25',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Супермен с задержкой (10 сек)', images: getExercisePhotoSlots('Супермен с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания с касанием плеча (медленно)', images: getExercisePhotoSlots('Отжимания с касанием плеча (медленно)'),category:'Спина',reps:'16',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ],
                dumbbells: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания', images: getExercisePhotoSlots('Разминка: потягивания'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями ', images: getExercisePhotoSlots('Шраги с гантелями '),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Тяга одной гантели в упоре', images: getExercisePhotoSlots('Тяга одной гантели в упоре'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Гиперэкстензия с весом', images: getExercisePhotoSlots('Гиперэкстензия с весом'),category:'Спина',reps:'20',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ],
                pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания', images: getExercisePhotoSlots('Разминка: потягивания'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой', images: getExercisePhotoSlots('Подтягивания широким хватом с паузой'),category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания узким хватом', images: getExercisePhotoSlots('Подтягивания узким хватом'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания за голову', images: getExercisePhotoSlots('Подтягивания за голову'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания (ноги на возвышении)', images: getExercisePhotoSlots('Австралийские подтягивания (ноги на возвышении)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: наклоны туловища', images: getExercisePhotoSlots('Разминка: наклоны туловища'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Разминка: потягивания', images: getExercisePhotoSlots('Разминка: потягивания'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой', images: getExercisePhotoSlots('Подтягивания широким хватом с паузой'),category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Шраги с гантелями', images: getExercisePhotoSlots('Шраги с гантелями'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'40 сек',sets:'4',weight:0,icon:'back'},
                {name:'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'stretching'}
                ]
            }
        },
        'Всё тело': {
            '1 LVL': {
                none: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Выпады на месте', images: getExercisePhotoSlots('Выпады на месте'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях'),category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Лодочка', images: getExercisePhotoSlots('Лодочка'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Тяга гантели к поясу', images: getExercisePhotoSlots('Тяга гантели к поясу'),category:'Спина',reps:'12',sets:'3',weight:0,icon:'back'},
                {name:'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках'),category:'Пресс',reps:'25 сек',sets:'3',weight:0,icon:'press'},
                {name:'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'}
                ],
                pullup: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Выпады на месте', images: getExercisePhotoSlots('Выпады на месте'),category:'Ноги',reps:'10',sets:'3',weight:0,icon:'legs'},
                {name:'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях'),category:'Пресс',reps:'20 сек',sets:'3',weight:0,icon:'press'},
                {name:'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'}
                ],
                dumbbells_pullup: [
                {name:'Потягивание вверх', images: getExercisePhotoSlots('Потягивание вверх'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'3',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'3',weight:0,icon:'breast'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Спина',reps:'10',sets:'3',weight:0,icon:'back'},
                {name:'Жим гантелей сидя', images: getExercisePhotoSlots('Жим гантелей сидя'),category:'Плечи',reps:'12',sets:'3',weight:0,icon:'shoulder'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'15 сек',sets:'3',weight:0,icon:'back'},
                {name:'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'}
                ]
            },
            '2 LVL': {
                none: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Бёрпи', images: getExercisePhotoSlots('Бёрпи'),category:'Всё тело',reps:'12',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек'),category:'Всё тело',reps:'20',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи'),category:'Всё тело',reps:'20',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'},
                {name:'Подъём таза лёжа', images: getExercisePhotoSlots('Подъём таза лёжа'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'}
                ],
                dumbbells: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Планка на прямых руках', images: getExercisePhotoSlots('Планка на прямых руках'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса'),category:'Ноги',reps:'20',sets:'4',weight:0,icon:'legs'},
                {name:'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола'),category:'Грудь',reps:'15',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания', images: getExercisePhotoSlots('Подтягивания'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях'),category:'Пресс',reps:'40 сек',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей лёжа', images: getExercisePhotoSlots('Жим гантелей лёжа'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Подтягивания', images: getExercisePhotoSlots('Подтягивания'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом', images: getExercisePhotoSlots('Подтягивания широким хватом'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'25 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой'),category:'Спина',reps:'15',sets:'4',weight:0,icon:'back'}
                ]
            },
            '3 LVL': {
                none: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: круговые движения тазом и руками', images: getExercisePhotoSlots('Разминка: круговые движения тазом и руками'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)'),category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх'),category:'Всё тело',reps:'12',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Горные лыжи (быстро)', images: getExercisePhotoSlots('Горные лыжи (быстро)'),category:'Всё тело',reps:'25',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'V-складка', images: getExercisePhotoSlots('V-складка'),category:'Пресс',reps:'15',sets:'4',weight:0,icon:'press'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями глубокие', images: getExercisePhotoSlots('Приседания с гантелями глубокие'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Разведение гантелей в стороны стоя', images: getExercisePhotoSlots('Разведение гантелей в стороны стоя'),category:'Плечи',reps:'12',sets:'4',weight:0,icon:'shoulder'},
                {name:'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'V-складка с гантелью', images: getExercisePhotoSlots('V-складка с гантелью'),category:'Пресс',reps:'12',sets:'4',weight:0,icon:'press'},
                {name:'Арка-холд', images: getExercisePhotoSlots('Арка-холд'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                pullup: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: махи руками', images: getExercisePhotoSlots('Разминка: махи руками'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)'),category:'Ноги',reps:'6',sets:'4',weight:0,icon:'legs'},
                {name:'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой', images: getExercisePhotoSlots('Подтягивания широким хватом с паузой'),category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком'),category:'Грудь',reps:'12',sets:'4',weight:0,icon:'breast'},
                {name:'Отжимания на одной руке (негативные)', images: getExercisePhotoSlots('Отжимания на одной руке (негативные)'),category:'Грудь',reps:'5',sets:'4',weight:0,icon:'breast'},
                {name:'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием'),category:'Ноги',reps:'15',sets:'4',weight:0,icon:'legs'},
                {name:'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх'),category:'Всё тело',reps:'12',sets:'4',weight:0,icon:'WholeBody'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'},
                {name:'Лодочка с задержкой (10 сек)', images: getExercisePhotoSlots('Лодочка с задержкой (10 сек)'),category:'Спина',reps:'12',sets:'4',weight:0,icon:'back'}
                ],
                dumbbells_pullup: [
                {name:'Разминка: потягивания и наклоны туловища', images: getExercisePhotoSlots('Разминка: потягивания и наклоны туловища'),category:'Всё тело',reps:'15',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями'),category:'Всё тело',reps:'12',sets:'3',weight:0,icon:'WholeBody'},
                {name:'Приседания с гантелями глубокие', images: getExercisePhotoSlots('Приседания с гантелями глубокие'),category:'Ноги',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Подтягивания с отягощением', images: getExercisePhotoSlots('Подтягивания с отягощением'),category:'Спина',reps:'8',sets:'4',weight:0,icon:'back'},
                {name:'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями'),category:'Ягодицы',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Подтягивания широким хватом с паузой', images: getExercisePhotoSlots('Подтягивания широким хватом с паузой'),category:'Спина',reps:'6',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей на наклонной скамье', images: getExercisePhotoSlots('Жим гантелей на наклонной скамье'),category:'Грудь',reps:'10',sets:'4',weight:0,icon:'breast'},
                {name:'Тяга гантелей к поясу в наклоне', images: getExercisePhotoSlots('Тяга гантелей к поясу в наклоне'),category:'Спина',reps:'10',sets:'4',weight:0,icon:'back'},
                {name:'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя'),category:'Плечи',reps:'10',sets:'4',weight:0,icon:'shoulder'},
                {name:'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину'),category:'Спина',reps:'5',sets:'4',weight:0,icon:'back'},
                {name:'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями'),category:'Ягодицы',reps:'12',sets:'4',weight:0,icon:'legs'},
                {name:'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике'),category:'Спина',reps:'30 сек',sets:'4',weight:0,icon:'back'},
                {name:'Dragon flag (негативные)', images: getExercisePhotoSlots('Dragon flag (негативные)'),category:'Пресс',reps:'5',sets:'4',weight:0,icon:'press'}
                ]
            }
        }
    },
    'Фитнес': {
'Зарядка': {
    '1 LVL': [
        { name: 'Наклоны головы', images: getExercisePhotoSlots('Наклоны головы', 'Зарядка'), category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
        { name: 'Вращение плечами', images: getExercisePhotoSlots('Вращение плечами', 'Зарядка'), category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
        { name: 'Круговые движения руками', images: getExercisePhotoSlots('Круговые движения руками', 'Зарядка'), category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
        { name: 'Наклоны туловища в стороны', images: getExercisePhotoSlots('Наклоны туловища в стороны', 'Зарядка'), category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' },
        { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Зарядка'), category: 'Зарядка', reps: '10', sets: '3', weight: 0, icon: 'charging' },
        { name: 'Махи ногами', images: getExercisePhotoSlots('Махи ногами', 'Зарядка'), category: 'Зарядка', reps: '12', sets: '3', weight: 0, icon: 'charging' }
    ]
},

        'Кардио': {
            '1 LVL': {
                none: [
                    { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен', images: getExercisePhotoSlots('Ходьба с высоким подниманием колен', 'Кардио'), category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки со сменой ног', images: getExercisePhotoSlots('Прыжки со сменой ног', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи упрощённые', images: getExercisePhotoSlots('Бёрпи упрощённые', 'Кардио'), category: 'Кардио', reps: '8', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки ноги вместе-врозь', images: getExercisePhotoSlots('Прыжки ноги вместе-врозь', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' }
                ],
                dumbbells: [
                    { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен с гантелями', images: getExercisePhotoSlots('Ходьба с высоким подниманием колен с гантелями', 'Кардио'), category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки со сменой ног', images: getExercisePhotoSlots('Прыжки со сменой ног', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' }
                ],
                pullup: [
                    { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кардио'), category: 'Кардио', reps: '5', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен', images: getExercisePhotoSlots('Ходьба с высоким подниманием колен', 'Кардио'), category: 'Кардио', reps: '20 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кардио'), category: 'Кардио', reps: '15 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи упрощённые', images: getExercisePhotoSlots('Бёрпи упрощённые', 'Кардио'), category: 'Кардио', reps: '8', sets: '3', weight: 0, icon: 'cardio' }
                ],
                dumbbells_pullup: [
                    { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кардио'), category: 'Кардио', reps: '5', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кардио'), category: 'Кардио', reps: '15 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки со сменой ног', images: getExercisePhotoSlots('Прыжки со сменой ног', 'Кардио'), category: 'Кардио', reps: '15', sets: '3', weight: 0, icon: 'cardio' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', images: getExercisePhotoSlots('Бег на месте (быстро)', 'Кардио'), category: 'Кардио', reps: '45 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', reps: '30', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи', images: getExercisePhotoSlots('Бёрпи', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кардио'), category: 'Кардио', reps: '20', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Скакалка (без скакалки)', images: getExercisePhotoSlots('Скакалка (без скакалки)', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки ноги вместе-врозь', images: getExercisePhotoSlots('Прыжки ноги вместе-врозь', 'Кардио'), category: 'Кардио', reps: '20', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бег с захлёстом голеней', images: getExercisePhotoSlots('Бег с захлёстом голеней', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '4', weight: 0, icon: 'cardio' }
                ],
                dumbbells: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями в стороны', images: getExercisePhotoSlots('Махи гантелями в стороны', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кардио'), category: 'Кардио', reps: '10', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте с гантелями', images: getExercisePhotoSlots('Прыжки на месте с гантелями', 'Кардио'), category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' }
                ],
                pullup: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кардио'), category: 'Кардио', reps: '8', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', images: getExercisePhotoSlots('Бег на месте (быстро)', 'Кардио'), category: 'Кардио', reps: '45 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', reps: '30', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с подтягиванием', images: getExercisePhotoSlots('Бёрпи с подтягиванием', 'Кардио'), category: 'Кардио', reps: '8', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кардио'), category: 'Кардио', reps: '20', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кардио'), category: 'Кардио', reps: '25 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кардио'), category: 'Кардио', reps: '8', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями в стороны', images: getExercisePhotoSlots('Махи гантелями в стороны', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кардио'), category: 'Кардио', reps: '10', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кардио'), category: 'Кардио', reps: '15', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кардио'), category: 'Кардио', reps: '25 сек', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Кардио'), category: 'Кардио', reps: '12', sets: '4', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кардио'), category: 'Кардио', reps: '25', sets: '4', weight: 0, icon: 'cardio' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', images: getExercisePhotoSlots('Разминка: прыжки на месте', 'Кардио'), category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', images: getExercisePhotoSlots('Бег на месте (быстро)', 'Кардио'), category: 'Кардио', reps: '60 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', reps: '35', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с отжиманием', images: getExercisePhotoSlots('Бёрпи с отжиманием', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кардио'), category: 'Кардио', reps: '20', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек (быстро)', images: getExercisePhotoSlots('Джампинг Джек (быстро)', 'Кардио'), category: 'Кардио', reps: '30', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кардио'), category: 'Кардио', reps: '25', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Скакалка (быстрая)', images: getExercisePhotoSlots('Скакалка (быстрая)', 'Кардио'), category: 'Кардио', reps: '45 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Ходьба с высоким подниманием колен', images: getExercisePhotoSlots('Ходьба с высоким подниманием колен', 'Кардио'), category: 'Кардио', reps: '45 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки ноги вместе-врозь', images: getExercisePhotoSlots('Прыжки ноги вместе-врозь', 'Кардио'), category: 'Кардио', reps: '30', sets: '5', weight: 0, icon: 'cardio' }
                ],
                dumbbells: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', images: getExercisePhotoSlots('Разминка: прыжки на месте', 'Кардио'), category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх (быстро)', images: getExercisePhotoSlots('Толчки гантелей вверх (быстро)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями в стороны', images: getExercisePhotoSlots('Махи гантелями в стороны', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями (быстро)', images: getExercisePhotoSlots('Приседания с гантелями (быстро)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Румынская тяга с гантелями (быстро)', images: getExercisePhotoSlots('Румынская тяга с гантелями (быстро)', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа с гантелями', images: getExercisePhotoSlots('Прыжки из приседа с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Джампинг Джек (быстро)', images: getExercisePhotoSlots('Джампинг Джек (быстро)', 'Кардио'), category: 'Кардио', reps: '30', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Махи гантелями перед собой (быстро)', images: getExercisePhotoSlots('Махи гантелями перед собой (быстро)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' }
                ],
                pullup: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', images: getExercisePhotoSlots('Разминка: прыжки на месте', 'Кардио'), category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кардио'), category: 'Кардио', reps: '10', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Подтягивания с хлопком', images: getExercisePhotoSlots('Подтягивания с хлопком', 'Кардио'), category: 'Кардио', reps: '6', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину', 'Кардио'), category: 'Кардио', reps: '5', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бег на месте (быстро)', images: getExercisePhotoSlots('Бег на месте (быстро)', 'Кардио'), category: 'Кардио', reps: '60 сек', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с подтягиванием', images: getExercisePhotoSlots('Бёрпи с подтягиванием', 'Кардио'), category: 'Кардио', reps: '10', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кардио'), category: 'Кардио', reps: '35', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кардио'), category: 'Кардио', reps: '25', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кардио'), category: 'Кардио', reps: '20', sets: '5', weight: 0, icon: 'cardio' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: бег на месте', images: getExercisePhotoSlots('Разминка: бег на месте', 'Кардио'), category: 'Кардио', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Разминка: прыжки на месте', images: getExercisePhotoSlots('Разминка: прыжки на месте', 'Кардио'), category: 'Кардио', reps: '20', sets: '3', weight: 0, icon: 'cardio' },
                    { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кардио'), category: 'Кардио', reps: '10', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Толчки гантелей вверх (быстро)', images: getExercisePhotoSlots('Толчки гантелей вверх (быстро)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину', 'Кардио'), category: 'Кардио', reps: '5', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Приседания с гантелями (быстро)', images: getExercisePhotoSlots('Приседания с гантелями (быстро)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Бёрпи с подтягиванием', images: getExercisePhotoSlots('Бёрпи с подтягиванием', 'Кардио'), category: 'Кардио', reps: '8', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Кардио'), category: 'Кардио', reps: '15', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' },
                    { name: 'Прыжки из приседа с гантелями', images: getExercisePhotoSlots('Прыжки из приседа с гантелями', 'Кардио'), category: 'Кардио', reps: '12', sets: '5', weight: 0, icon: 'cardio' }
                ]
            }
        },

        'Пилатес': {
            '1 LVL': {
                none: [
                    { name: 'Сотня (дыхание + руки)', images: getExercisePhotoSlots('Сотня (дыхание + руки)', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', images: getExercisePhotoSlots('Скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза лёжа', images: getExercisePhotoSlots('Подъём таза лёжа', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Боковые наклоны сидя', images: getExercisePhotoSlots('Боковые наклоны сидя', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', images: getExercisePhotoSlots('Растяжка позвоночника (кошка)', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ],
                dumbbells: [
                    { name: 'Сотня с гантелью', images: getExercisePhotoSlots('Сотня с гантелью', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', images: getExercisePhotoSlots('Скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью', images: getExercisePhotoSlots('Подъём таза с гантелью', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', images: getExercisePhotoSlots('Ножницы с гантелью между стоп', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на коленях с гантелью', images: getExercisePhotoSlots('Планка на коленях с гантелью', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Боковые наклоны сидя с гантелью', images: getExercisePhotoSlots('Боковые наклоны сидя с гантелью', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', images: getExercisePhotoSlots('Растяжка позвоночника (кошка)', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ],
                pullup: [
                    { name: 'Сотня (дыхание + руки)', images: getExercisePhotoSlots('Сотня (дыхание + руки)', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', images: getExercisePhotoSlots('Скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Пилатес'), category: 'Пилатес', reps: '8', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Пилатес'), category: 'Пилатес', reps: '15 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', images: getExercisePhotoSlots('Растяжка позвоночника (кошка)', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ],
                dumbbells_pullup: [
                    { name: 'Сотня с гантелью', images: getExercisePhotoSlots('Сотня с гантелью', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', images: getExercisePhotoSlots('Скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Пилатес'), category: 'Пилатес', reps: '8', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью', images: getExercisePhotoSlots('Подъём таза с гантелью', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Пилатес'), category: 'Пилатес', reps: '15 сек', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', images: getExercisePhotoSlots('Ножницы с гантелью между стоп', 'Pilates'), category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Растяжка позвоночника (кошка)', images: getExercisePhotoSlots('Растяжка позвоночника (кошка)', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с вытянутыми ногами', images: getExercisePhotoSlots('Сотня с вытянутыми ногами', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', images: getExercisePhotoSlots('Скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза на правую ногу', images: getExercisePhotoSlots('Подъём таза на правую ногу', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза на левую ногу', images: getExercisePhotoSlots('Подъём таза на левую ногу', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами', 'Пилатес'), category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Мостик с подъёмом ноги', images: getExercisePhotoSlots('Мостик с подъёмом ноги', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'Пилатес'), category: 'Пилатес', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с гантелью и вытянутыми ногами', images: getExercisePhotoSlots('Сотня с гантелью и вытянутыми ногами', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью', images: getExercisePhotoSlots('Скручивание с гантелью', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью', images: getExercisePhotoSlots('Подъём таза с гантелью', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', images: getExercisePhotoSlots('Ножницы с гантелью между стоп', 'Пилатес'), category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Мостик с подъёмом ноги и гантелью', images: getExercisePhotoSlots('Мостик с подъёмом ноги и гантелью', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Пилатес'), category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью', images: getExercisePhotoSlots('Планка с гантелью', 'Пилатес'), category: 'Пилатес', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью на правую', images: getExercisePhotoSlots('Боковая планка с гантелью на правую', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью на левую', images: getExercisePhotoSlots('Боковая планка с гантелью на левую', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                pullup: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с вытянутыми ногами', images: getExercisePhotoSlots('Сотня с вытянутыми ногами', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём ног в висе', images: getExercisePhotoSlots('Подъём ног в висе', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног', images: getExercisePhotoSlots('Скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами', images: getExercisePhotoSlots('Ножницы ногами', 'Пилатес'), category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Пилатес'), category: 'Пилатес', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'Пилатес'), category: 'Пилатес', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую', 'Пилатес'), category: 'Пилатес', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с гантелью и вытянутыми ногами', images: getExercisePhotoSlots('Сотня с гантелью и вытянутыми ногами', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём ног в висе', images: getExercisePhotoSlots('Подъём ног в висе', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью', images: getExercisePhotoSlots('Скручивание с гантелью', 'Пилатес'), category: 'Пилатес', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', images: getExercisePhotoSlots('Ножницы с гантелью между стоп', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Пилатес'), category: 'Пилатес', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью', images: getExercisePhotoSlots('Планка с гантелью', 'Pilates'), category: 'Pilates', reps: '35 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью на правую', images: getExercisePhotoSlots('Боковая планка с гантелью на правую', 'Pilates'), category: 'Pilates', reps: '20 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', images: getExercisePhotoSlots('Разминка: скручивание с подъёмом ног', 'Пилатес'), category: 'Пилатес', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с отягощением', images: getExercisePhotoSlots('Сотня с отягощением', 'Пилатес'), category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног и рук', images: getExercisePhotoSlots('Скручивание с подъёмом ног и рук', 'Пилатес'), category: 'Пилатес', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'Pilates'), category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с подъёмом ноги', images: getExercisePhotoSlots('Подъём таза с подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы ногами с подъёмом таза', images: getExercisePhotoSlots('Ножницы ногами с подъёмом таза', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с подъёмом ноги', images: getExercisePhotoSlots('Планка с подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке', 'Pilates'), category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Pilates'), category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', images: getExercisePhotoSlots('Разминка: скручивание с подъёмом ног', 'Pilates'), category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с двумя гантелями', images: getExercisePhotoSlots('Сотня с двумя гантелями', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью и подъёмом ног', images: getExercisePhotoSlots('Скручивание с гантелью и подъёмом ног', 'Pilates'), category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка с гантелью', images: getExercisePhotoSlots('V-складка с гантелью', 'Pilates'), category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём таза с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Подъём таза с гантелью и подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Ножницы с гантелью между стоп', images: getExercisePhotoSlots('Ножницы с гантелью между стоп', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Pilates'), category: 'Pilates', reps: '25', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Боковая планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с гантелью и подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой (гантель в руках)', images: getExercisePhotoSlots('Лодочка с задержкой (гантель в руках)', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках с гантелью', images: getExercisePhotoSlots('Стойка на лопатках с гантелью', 'Pilates'), category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                pullup: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', images: getExercisePhotoSlots('Разминка: скручивание с подъёмом ног', 'Pilates'), category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Pilates'), category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Pilates'), category: 'Pilates', reps: '8', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с отягощением', images: getExercisePhotoSlots('Сотня с отягощением', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с подъёмом ног и рук', images: getExercisePhotoSlots('Скручивание с подъёмом ног и рук', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'Pilates'), category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Pilates'), category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с подъёмом ноги', images: getExercisePhotoSlots('Планка с подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка на одной руке', images: getExercisePhotoSlots('Планка на одной руке', 'Pilates'), category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Pilates'), category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: сотня', images: getExercisePhotoSlots('Разминка: сотня', 'Пилатес'), category: 'Пилатес', reps: '10', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Разминка: скручивание с подъёмом ног', images: getExercisePhotoSlots('Разминка: скручивание с подъёмом ног', 'Pilates'), category: 'Pilates', reps: '12', sets: '3', weight: 0, icon: 'Pilates' },
                    { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Pilates'), category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Pilates'), category: 'Pilates', reps: '8', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Сотня с двумя гантелями', images: getExercisePhotoSlots('Сотня с двумя гантелями', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'V-складка с гантелью', images: getExercisePhotoSlots('V-складка с гантелью', 'Pilates'), category: 'Pilates', reps: '12', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Скручивание с гантелью и подъёмом ног', images: getExercisePhotoSlots('Скручивание с гантелью и подъёмом ног', 'Pilates'), category: 'Pilates', reps: '15', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Pilates'), category: 'Pilates', reps: '30 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Pilates'), category: 'Pilates', reps: '25', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Pilates'), category: 'Pilates', reps: '40 сек', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Лодочка с задержкой (гантель в руках)', images: getExercisePhotoSlots('Лодочка с задержкой (гантель в руках)', 'Pilates'), category: 'Pilates', reps: '20', sets: '4', weight: 0, icon: 'Pilates' },
                    { name: 'Стойка на лопатках с гантелью', images: getExercisePhotoSlots('Стойка на лопатках с гантелью', 'Pilates'), category: 'Pilates', reps: '25 сек', sets: '4', weight: 0, icon: 'Pilates' }
                ]
            }
        },

        'Растяжка': {
            '1 LVL': {
                none: [
                    { name: 'Наклоны к ногам сидя', images: getExercisePhotoSlots('Наклоны к ногам сидя', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', images: getExercisePhotoSlots('Растяжка шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной', images: getExercisePhotoSlots('Растяжка рук за спиной', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны', images: getExercisePhotoSlots('Наклоны в стороны', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', images: getExercisePhotoSlots('Растяжка спины (кошка-корова)', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса', images: getExercisePhotoSlots('Растяжка трицепса', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Наклоны к ногам сидя с гантелью', images: getExercisePhotoSlots('Наклоны к ногам сидя с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', images: getExercisePhotoSlots('Растяжка шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', images: getExercisePhotoSlots('Растяжка трицепса с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', images: getExercisePhotoSlots('Растяжка спины (кошка-корова)', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной с гантелью', images: getExercisePhotoSlots('Растяжка рук за спиной с гантелью', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Наклоны к ногам сидя', images: getExercisePhotoSlots('Наклоны к ногам сидя', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', images: getExercisePhotoSlots('Растяжка шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной', images: getExercisePhotoSlots('Растяжка рук за спиной', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны', images: getExercisePhotoSlots('Наклоны в стороны', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', images: getExercisePhotoSlots('Растяжка спины (кошка-корова)', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Наклоны к ногам сидя с гантелью', images: getExercisePhotoSlots('Наклоны к ногам сидя с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи', images: getExercisePhotoSlots('Растяжка шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', images: getExercisePhotoSlots('Растяжка трицепса с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (кошка-корова)', images: getExercisePhotoSlots('Растяжка спины (кошка-корова)', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам', images: getExercisePhotoSlots('Глубокий наклон к ногам', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', images: getExercisePhotoSlots('Растяжка шеи с руками', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч (замок)', images: getExercisePhotoSlots('Растяжка плеч (замок)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с руками', images: getExercisePhotoSlots('Боковые наклоны с руками', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', images: getExercisePhotoSlots('Растяжка спины (скручивание)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка ног (шпагат)', images: getExercisePhotoSlots('Растяжка ног (шпагат)', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра', images: getExercisePhotoSlots('Растяжка задней поверхности бедра', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка', images: getExercisePhotoSlots('Бабочка', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам с гантелью', images: getExercisePhotoSlots('Глубокий наклон к ногам с гантелью', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', images: getExercisePhotoSlots('Растяжка шеи с руками', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', images: getExercisePhotoSlots('Растяжка трицепса с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью', images: getExercisePhotoSlots('Боковые наклоны с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', images: getExercisePhotoSlots('Растяжка спины (скручивание)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', images: getExercisePhotoSlots('Поза голубя с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра с гантелью', images: getExercisePhotoSlots('Растяжка задней поверхности бедра с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка с гантелью', images: getExercisePhotoSlots('Бабочка с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка рук за спиной с гантелью', images: getExercisePhotoSlots('Растяжка рук за спиной с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам', images: getExercisePhotoSlots('Глубокий наклон к ногам', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', images: getExercisePhotoSlots('Растяжка шеи с руками', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч (замок)', images: getExercisePhotoSlots('Растяжка плеч (замок)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с руками', images: getExercisePhotoSlots('Боковые наклоны с руками', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', images: getExercisePhotoSlots('Растяжка спины (скручивание)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра', images: getExercisePhotoSlots('Растяжка задней поверхности бедра', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка', images: getExercisePhotoSlots('Бабочка', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон к ногам с гантелью', images: getExercisePhotoSlots('Глубокий наклон к ногам с гантелью', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с руками', images: getExercisePhotoSlots('Растяжка шеи с руками', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', images: getExercisePhotoSlots('Растяжка трицепса с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью', images: getExercisePhotoSlots('Боковые наклоны с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание)', images: getExercisePhotoSlots('Растяжка спины (скручивание)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', images: getExercisePhotoSlots('Поза голубя с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка задней поверхности бедра с гантелью', images: getExercisePhotoSlots('Растяжка задней поверхности бедра с гантелью', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Бабочка с гантелью', images: getExercisePhotoSlots('Бабочка с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка'), category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с захватом ног', images: getExercisePhotoSlots('Глубокий наклон с захватом ног', 'Растяжка'), category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с сопротивлением', images: getExercisePhotoSlots('Растяжка шеи с сопротивлением', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч за спиной', images: getExercisePhotoSlots('Растяжка плеч за спиной', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с захватом', images: getExercisePhotoSlots('Боковые наклоны с захватом', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', images: getExercisePhotoSlots('Растяжка позвоночника (мост)', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', images: getExercisePhotoSlots('Продольный шпагат', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', images: getExercisePhotoSlots('Поперечный шпагат', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп', images: getExercisePhotoSlots('Складка с захватом стоп', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка'), category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', images: getExercisePhotoSlots('Глубокий наклон с гантелью', 'Растяжка'), category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с сопротивлением', images: getExercisePhotoSlots('Растяжка шеи с сопротивлением', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', images: getExercisePhotoSlots('Растяжка трицепса с гантелью', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью (глубоко)', images: getExercisePhotoSlots('Боковые наклоны с гантелью (глубоко)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', images: getExercisePhotoSlots('Растяжка позвоночника (мост)', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', images: getExercisePhotoSlots('Продольный шпагат', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', images: getExercisePhotoSlots('Поперечный шпагат', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп с гантелью', images: getExercisePhotoSlots('Складка с захватом стоп с гантелью', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание) с гантелью', images: getExercisePhotoSlots('Растяжка спины (скручивание) с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка'), category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', images: getExercisePhotoSlots('Вис на турнике (глубокий)', 'Растяжка'), category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка шеи с сопротивлением', images: getExercisePhotoSlots('Растяжка шеи с сопротивлением', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка плеч за спиной', images: getExercisePhotoSlots('Растяжка плеч за спиной', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны в висе', images: getExercisePhotoSlots('Боковые наклоны в висе', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', images: getExercisePhotoSlots('Растяжка позвоночника (мост)', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', images: getExercisePhotoSlots('Продольный шпагат', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', images: getExercisePhotoSlots('Поперечный шпагат', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп', images: getExercisePhotoSlots('Складка с захватом стоп', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка'), category: 'Растяжка', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка'), category: 'Растяжка', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', images: getExercisePhotoSlots('Вис на турнике (глубокий)', 'Растяжка'), category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', images: getExercisePhotoSlots('Глубокий наклон с гантелью', 'Растяжка'), category: 'Растяжка', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка трицепса с гантелью', images: getExercisePhotoSlots('Растяжка трицепса с гантелью', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Боковые наклоны с гантелью (глубоко)', images: getExercisePhotoSlots('Боковые наклоны с гантелью (глубоко)', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка позвоночника (мост)', images: getExercisePhotoSlots('Растяжка позвоночника (мост)', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Продольный шпагат', images: getExercisePhotoSlots('Продольный шпагат', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поперечный шпагат', images: getExercisePhotoSlots('Поперечный шпагат', 'Растяжка'), category: 'Растяжка', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Складка с захватом стоп с гантелью', images: getExercisePhotoSlots('Складка с захватом стоп с гантелью', 'Растяжка'), category: 'Растяжка', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка'), category: 'Растяжка', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            }
        },

        'Растяжка позвоночника': {
            '1 LVL': {
                none: [
                    { name: 'Наклоны вперёд сидя', images: getExercisePhotoSlots('Наклоны вперёд сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', images: getExercisePhotoSlots('Кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа', images: getExercisePhotoSlots('Скручивание лёжа', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя', images: getExercisePhotoSlots('Наклоны в стороны стоя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Наклоны вперёд сидя с гантелью', images: getExercisePhotoSlots('Наклоны вперёд сидя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', images: getExercisePhotoSlots('Кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', images: getExercisePhotoSlots('Скручивание лёжа с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Наклоны вперёд сидя', images: getExercisePhotoSlots('Наклоны вперёд сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', images: getExercisePhotoSlots('Кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа', images: getExercisePhotoSlots('Скручивание лёжа', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Наклоны вперёд сидя с гантелью', images: getExercisePhotoSlots('Наклоны вперёд сидя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова', images: getExercisePhotoSlots('Кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', images: getExercisePhotoSlots('Скручивание лёжа с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза ребёнка', images: getExercisePhotoSlots('Поза ребёнка', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны с гантелью', images: getExercisePhotoSlots('Наклоны в стороны с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' }
                ]
            },
            '2 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с захватом ног', images: getExercisePhotoSlots('Глубокий наклон вперёд с захватом ног', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', images: getExercisePhotoSlots('Кошка-корова с задержкой', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа (позвоночник)', images: getExercisePhotoSlots('Скручивание лёжа (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', images: getExercisePhotoSlots('Скручивание позвоночника сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя глубоко', images: getExercisePhotoSlots('Наклоны в стороны стоя глубоко', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с гантелью', images: getExercisePhotoSlots('Глубокий наклон вперёд с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', images: getExercisePhotoSlots('Кошка-корова с задержкой', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', images: getExercisePhotoSlots('Скручивание лёжа с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', images: getExercisePhotoSlots('Поза голубя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью в стороны', images: getExercisePhotoSlots('Наклоны с гантелью в стороны', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', images: getExercisePhotoSlots('Скручивание позвоночника сидя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', images: getExercisePhotoSlots('Поза лука с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание) с гантелью', images: getExercisePhotoSlots('Растяжка спины (скручивание) с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с захватом ног', images: getExercisePhotoSlots('Глубокий наклон вперёд с захватом ног', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', images: getExercisePhotoSlots('Кошка-корова с задержкой', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа (позвоночник)', images: getExercisePhotoSlots('Скручивание лёжа (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя', images: getExercisePhotoSlots('Поза голубя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', images: getExercisePhotoSlots('Скручивание позвоночника сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон вперёд с гантелью', images: getExercisePhotoSlots('Глубокий наклон вперёд с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Кошка-корова с задержкой', images: getExercisePhotoSlots('Кошка-корова с задержкой', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа с гантелью', images: getExercisePhotoSlots('Скручивание лёжа с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя с гантелью', images: getExercisePhotoSlots('Поза голубя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью в стороны', images: getExercisePhotoSlots('Наклоны с гантелью в стороны', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', images: getExercisePhotoSlots('Скручивание позвоночника сидя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', images: getExercisePhotoSlots('Поза лука с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            },
            '3 LVL': {
                none: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с захватом стоп', images: getExercisePhotoSlots('Глубокий наклон с захватом стоп', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', images: getExercisePhotoSlots('Скручивание позвоночника сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое', images: getExercisePhotoSlots('Скручивание лёжа глубокое', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', images: getExercisePhotoSlots('Поза голубя глубокая', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны в стороны стоя глубоко', images: getExercisePhotoSlots('Наклоны в стороны стоя глубоко', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза плуга', images: getExercisePhotoSlots('Поза плуга', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', images: getExercisePhotoSlots('Глубокий наклон с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', images: getExercisePhotoSlots('Скручивание позвоночника сидя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', images: getExercisePhotoSlots('Поза лука с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью глубоко', images: getExercisePhotoSlots('Наклоны с гантелью глубоко', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое с гантелью', images: getExercisePhotoSlots('Скручивание лёжа глубокое с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', images: getExercisePhotoSlots('Поза голубя глубокая', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках с гантелью', images: getExercisePhotoSlots('Стойка на лопатках с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Растяжка спины (скручивание) с гантелью', images: getExercisePhotoSlots('Растяжка спины (скручивание) с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', images: getExercisePhotoSlots('Вис на турнике (глубокий)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с захватом стоп', images: getExercisePhotoSlots('Глубокий наклон с захватом стоп', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда', images: getExercisePhotoSlots('Поза верблюда', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя', images: getExercisePhotoSlots('Скручивание позвоночника сидя', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках', images: getExercisePhotoSlots('Стойка на лопатках', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука', images: getExercisePhotoSlots('Поза лука', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое', images: getExercisePhotoSlots('Скручивание лёжа глубокое', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', images: getExercisePhotoSlots('Поза голубя глубокая', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза плуга', images: getExercisePhotoSlots('Поза плуга', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '20 сек', sets: '4', weight: 0, icon: 'stretching' }
                ],
                dumbbells_pullup: [
                    { name: 'Разминка: наклоны головы и шеи', images: getExercisePhotoSlots('Разминка: наклоны головы и шеи', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Разминка: кошка-корова', images: getExercisePhotoSlots('Разминка: кошка-корова', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '15', sets: '3', weight: 0, icon: 'stretching' },
                    { name: 'Вис на турнике (глубокий)', images: getExercisePhotoSlots('Вис на турнике (глубокий)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '40 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Глубокий наклон с гантелью', images: getExercisePhotoSlots('Глубокий наклон с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза верблюда с гантелью', images: getExercisePhotoSlots('Поза верблюда с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание позвоночника сидя с гантелью', images: getExercisePhotoSlots('Скручивание позвоночника сидя с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Наклоны с гантелью глубоко', images: getExercisePhotoSlots('Наклоны с гантелью глубоко', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза лука с гантелью', images: getExercisePhotoSlots('Поза лука с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Скручивание лёжа глубокое с гантелью', images: getExercisePhotoSlots('Скручивание лёжа глубокое с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '35 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Поза голубя глубокая', images: getExercisePhotoSlots('Поза голубя глубокая', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Стойка на лопатках с гантелью', images: getExercisePhotoSlots('Стойка на лопатках с гантелью', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '25 сек', sets: '4', weight: 0, icon: 'stretching' },
                    { name: 'Мост (позвоночник)', images: getExercisePhotoSlots('Мост (позвоночник)', 'Растяжка позвоночника'), category: 'Растяжка позвоночника', reps: '30 сек', sets: '4', weight: 0, icon: 'stretching' }
                ]
            }
        }
    },
    'Особые': {
    'Кроссфит': {
        '1 LVL': {
            none: [
                { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи упрощённые', images: getExercisePhotoSlots('Бёрпи упрощённые', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Кроссфит'), category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ],
            dumbbells: [
                { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Кроссфит'), category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ],
            pullup: [
                { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кроссфит'), category: 'Кроссфит', reps: '5', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кроссфит'), category: 'Кроссфит', reps: '15 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Кроссфит'), category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ],
            dumbbells_pullup: [
                { name: 'Джампинг Джек', images: getExercisePhotoSlots('Джампинг Джек', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кроссфит'), category: 'Кроссфит', reps: '5', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кроссфит'), category: 'Кроссфит', reps: '15 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Кроссфит'), category: 'Кроссфит', reps: '20 сек', sets: '3', weight: 0, icon: 'crossfit' }
            ]
        },
        '2 LVL': {
            none: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи', images: getExercisePhotoSlots('Бёрпи', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кроссфит'), category: 'Кроссфит', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания узким хватом', images: getExercisePhotoSlots('Отжимания узким хватом', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Скакалка (без скакалки)', images: getExercisePhotoSlots('Скакалка (без скакалки)', 'Кроссфит'), category: 'Кроссфит', reps: '30 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бег на месте (быстро)', images: getExercisePhotoSlots('Бег на месте (быстро)', 'Кроссфит'), category: 'Кроссфит', reps: '45 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            dumbbells: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Махи гантелями перед собой', images: getExercisePhotoSlots('Махи гантелями перед собой', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа с гантелями', images: getExercisePhotoSlots('Прыжки из приседа с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью', images: getExercisePhotoSlots('Планка с гантелью', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            pullup: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с подтягиванием', images: getExercisePhotoSlots('Бёрпи с подтягиванием', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи', images: getExercisePhotoSlots('Бёрпи', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи', images: getExercisePhotoSlots('Горные лыжи', 'Кроссфит'), category: 'Кроссфит', reps: '25', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Кроссфит'), category: 'Кроссфит', reps: '25 сек', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх', images: getExercisePhotoSlots('Толчки гантелей вверх', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с подтягиванием', images: getExercisePhotoSlots('Бёрпи с подтягиванием', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '4', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью', images: getExercisePhotoSlots('Планка с гантелью', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '4', weight: 0, icon: 'crossfit' }
            ]
        },
        '3 LVL': {
            none: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', images: getExercisePhotoSlots('Разминка: бег на месте быстро', 'Кроссфит'), category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с отжиманием', images: getExercisePhotoSlots('Бёрпи с отжиманием', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с прыжком вверх', images: getExercisePhotoSlots('Бёрпи с прыжком вверх', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи (быстро)', images: getExercisePhotoSlots('Горные лыжи (быстро)', 'Кроссфит'), category: 'Кроссфит', reps: '30', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Скакалка (быстрая)', images: getExercisePhotoSlots('Скакалка (быстрая)', 'Кроссфит'), category: 'Кроссфит', reps: '60 сек', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с подъёмом рук', images: getExercisePhotoSlots('Планка с подъёмом рук', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            dumbbells: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', images: getExercisePhotoSlots('Разминка: бег на месте быстро', 'Кроссфит'), category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх (быстро)', images: getExercisePhotoSlots('Толчки гантелей вверх (быстро)', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Жим гантелей стоя', images: getExercisePhotoSlots('Жим гантелей стоя', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа с гантелями', images: getExercisePhotoSlots('Прыжки из приседа с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Махи гантелями перед собой (быстро)', images: getExercisePhotoSlots('Махи гантелями перед собой (быстро)', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            pullup: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', images: getExercisePhotoSlots('Разминка: бег на месте быстро', 'Кроссфит'), category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Подтягивания с хлопком', images: getExercisePhotoSlots('Подтягивания с хлопком', 'Кроссфит'), category: 'Кроссфит', reps: '6', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину', 'Кроссфит'), category: 'Кроссфит', reps: '5', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Быстрые подтягивания', images: getExercisePhotoSlots('Быстрые подтягивания', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с подтягиванием', images: getExercisePhotoSlots('Бёрпи с подтягиванием', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'Кроссфит'), category: 'Кроссфит', reps: '20', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Горные лыжи (быстро)', images: getExercisePhotoSlots('Горные лыжи (быстро)', 'Кроссфит'), category: 'Кроссфит', reps: '30', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'Кроссфит'), category: 'Кроссфит', reps: '8', sets: '5', weight: 0, icon: 'crossfit' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: джампинг джек и прыжки', images: getExercisePhotoSlots('Разминка: джампинг джек и прыжки', 'Кроссфит'), category: 'Кроссфит', reps: '25', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Разминка: бег на месте быстро', images: getExercisePhotoSlots('Разминка: бег на месте быстро', 'Кроссфит'), category: 'Кроссфит', reps: '45 сек', sets: '3', weight: 0, icon: 'crossfit' },
                { name: 'Подтягивания с хлопком', images: getExercisePhotoSlots('Подтягивания с хлопком', 'Кроссфит'), category: 'Кроссфит', reps: '6', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выход силой на перекладину', images: getExercisePhotoSlots('Выход силой на перекладину', 'Кроссфит'), category: 'Кроссфит', reps: '5', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Толчки гантелей вверх (быстро)', images: getExercisePhotoSlots('Толчки гантелей вверх (быстро)', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '10', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Бёрпи с гантелями', images: getExercisePhotoSlots('Бёрпи с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Кроссфит'), category: 'Кроссфит', reps: '15', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Прыжки из приседа с гантелями', images: getExercisePhotoSlots('Прыжки из приседа с гантелями', 'Кроссфит'), category: 'Кроссфит', reps: '12', sets: '5', weight: 0, icon: 'crossfit' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Кроссфит'), category: 'Кроссфит', reps: '40 сек', sets: '5', weight: 0, icon: 'crossfit' }
            ]
        },
        '_premium': true
    },

    'Мужская сила': {
        '1 LVL': {
            none: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Выпады на месте (на каждую ногу)', images: getExercisePhotoSlots('Выпады на месте (на каждую ногу)', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '3', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад', images: getExercisePhotoSlots('Махи ногой назад', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Отведение ноги в сторону стоя', images: getExercisePhotoSlots('Отведение ноги в сторону стоя', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ],
            dumbbells: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями', images: getExercisePhotoSlots('Выпады с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад с гантелью', images: getExercisePhotoSlots('Махи ногой назад с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ],
            pullup: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Мужская сила'), category: 'Мужская сила', reps: '8', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Выпады на месте', images: getExercisePhotoSlots('Выпады на месте', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '3', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Мужская сила'), category: 'Мужская сила', reps: '15 сек', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ],
            dumbbells_pullup: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями', images: getExercisePhotoSlots('Приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Мужская сила'), category: 'Мужская сила', reps: '8', sets: '3', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Мужская сила'), category: 'Мужская сила', reps: '15 сек', sets: '3', weight: 0, icon: 'men' },
                { name: 'Планка на вытянутых руках', images: getExercisePhotoSlots('Планка на вытянутых руках', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '3', weight: 0, icon: 'men' }
            ]
        },
        '2 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания', images: getExercisePhotoSlots('Болгарские сплит-приседания', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногами в сторону', images: getExercisePhotoSlots('Махи ногами в сторону', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Отведение ноги назад стоя на четвереньках', images: getExercisePhotoSlots('Отведение ноги назад стоя на четвереньках', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги', images: getExercisePhotoSlots('Планка с подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания у стены', images: getExercisePhotoSlots('Приседания у стены', 'Мужская сила'), category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (глубокие)', images: getExercisePhotoSlots('Приседания с гантелями (глубокие)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями (тяжёлая)', images: getExercisePhotoSlots('Румынская тяга с гантелями (тяжёлая)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад с гантелью', images: getExercisePhotoSlots('Махи ногой назад с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Отведение ноги в сторону с гантелью', images: getExercisePhotoSlots('Отведение ноги в сторону с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания', images: getExercisePhotoSlots('Болгарские сплит-приседания', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги', images: getExercisePhotoSlots('Планка с подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (глубокие)', images: getExercisePhotoSlots('Приседания с гантелями (глубокие)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга с гантелями (тяжёлая)', images: getExercisePhotoSlots('Румынская тяга с гантелями (тяжёлая)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями', images: getExercisePhotoSlots('Становая тяга с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Мужская сила'), category: 'Мужская сила', reps: '25 сек', sets: '4', weight: 0, icon: 'men' }
            ]
        },
        '3 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)', 'Мужская сила'), category: 'Мужская сила', reps: '6', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания с выпрыгиванием (глубоко)', images: getExercisePhotoSlots('Приседания с выпрыгиванием (глубоко)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с прыжком', images: getExercisePhotoSlots('Болгарские сплит-приседания с прыжком', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком (глубоко)', images: getExercisePhotoSlots('Выпады с прыжком (глубоко)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Отведение ноги назад на четвереньках (медленно)', images: getExercisePhotoSlots('Отведение ноги назад на четвереньках (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковые выпады глубокие', images: getExercisePhotoSlots('Боковые выпады глубокие', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания у стены (глубоко)', images: getExercisePhotoSlots('Приседания у стены (глубоко)', 'Мужская сила'), category: 'Мужская сила', reps: '60 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги (медленно)', images: getExercisePhotoSlots('Планка с подъёмом ноги (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (очень глубокие)', images: getExercisePhotoSlots('Приседания с гантелями (очень глубокие)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями (тяжёлая)', images: getExercisePhotoSlots('Становая тяга с гантелями (тяжёлая)', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга на одной ноге с гантелью', images: getExercisePhotoSlots('Румынская тяга на одной ноге с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью (медленно)', images: getExercisePhotoSlots('Ягодичный мостик с гантелью (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Махи ногой назад с гантелью (медленно)', images: getExercisePhotoSlots('Махи ногой назад с гантелью (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Боковая планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с гантелью и подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '3', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)', 'Мужская сила'), category: 'Мужская сила', reps: '6', sets: '4', weight: 0, icon: 'men' },
                { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с прыжком', images: getExercisePhotoSlots('Болгарские сплит-приседания с прыжком', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём ног в висе с отягощением', images: getExercisePhotoSlots('Подъём ног в висе с отягощением', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с прыжком (глубоко)', images: getExercisePhotoSlots('Выпады с прыжком (глубоко)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Приседания у стены (глубоко)', images: getExercisePhotoSlots('Приседания у стены (глубоко)', 'Мужская сила'), category: 'Мужская сила', reps: '60 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с подъёмом ноги (медленно)', images: getExercisePhotoSlots('Планка с подъёмом ноги (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '3', weight: 0, icon: 'men' },
                { name: 'Приседания с гантелями (очень глубокие)', images: getExercisePhotoSlots('Приседания с гантелями (очень глубокие)', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Становая тяга с гантелями (тяжёлая)', images: getExercisePhotoSlots('Становая тяга с гантелями (тяжёлая)', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Румынская тяга на одной ноге с гантелью', images: getExercisePhotoSlots('Румынская тяга на одной ноге с гантелью', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Мужская сила'), category: 'Мужская сила', reps: '10', sets: '4', weight: 0, icon: 'men' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Мужская сила'), category: 'Мужская сила', reps: '12', sets: '4', weight: 0, icon: 'men' },
                { name: 'Ягодичный мостик с гантелью (медленно)', images: getExercisePhotoSlots('Ягодичный мостик с гантелью (медленно)', 'Мужская сила'), category: 'Мужская сила', reps: '20', sets: '4', weight: 0, icon: 'men' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Мужская сила'), category: 'Мужская сила', reps: '15', sets: '4', weight: 0, icon: 'men' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Мужская сила'), category: 'Мужская сила', reps: '30 сек', sets: '4', weight: 0, icon: 'men' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Мужская сила'), category: 'Мужская сила', reps: '40 сек', sets: '4', weight: 0, icon: 'men' }
            ]
        },
        '_premium': true
    },

    'Женское счастье': {
        '1 LVL': {
            none: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие', images: getExercisePhotoSlots('Приседания плие', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад', images: getExercisePhotoSlots('Махи ногой назад', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону стоя', images: getExercisePhotoSlots('Отведение ноги в сторону стоя', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Женское счастье'), category: 'Женское счастье', reps: '25 сек', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' }
            ],
            dumbbells: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью', images: getExercisePhotoSlots('Махи ногой назад с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону с гантелью', images: getExercisePhotoSlots('Отведение ноги в сторону с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'Женское счастье'), category: 'Женское счастье', reps: '25 сек', sets: '3', weight: 0, icon: 'woman' }
            ],
            pullup: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие', images: getExercisePhotoSlots('Приседания плие', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Женское счастье'), category: 'Женское счастье', reps: '8', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик', images: getExercisePhotoSlots('Ягодичный мостик', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад', images: getExercisePhotoSlots('Махи ногой назад', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Женское счастье'), category: 'Женское счастье', reps: '15 сек', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' }
            ],
            dumbbells_pullup: [
                { name: 'Круговые движения тазом', images: getExercisePhotoSlots('Круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью', images: getExercisePhotoSlots('Приседания плие с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Женское счастье'), category: 'Женское счастье', reps: '8', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью', images: getExercisePhotoSlots('Махи ногой назад с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Женское счастье'), category: 'Женское счастье', reps: '15 сек', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Скручивания с гантелью', images: getExercisePhotoSlots('Скручивания с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' }
            ]
        },
        '2 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие (глубоко)', images: getExercisePhotoSlots('Приседания плие (глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания', images: getExercisePhotoSlots('Болгарские сплит-приседания', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногами в сторону', images: getExercisePhotoSlots('Махи ногами в сторону', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую', 'Женское счастье'), category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую', 'Женское счастье'), category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги назад стоя на четвереньках', images: getExercisePhotoSlots('Отведение ноги назад стоя на четвереньках', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Скручивания с вытянутыми руками', images: getExercisePhotoSlots('Скручивания с вытянутыми руками', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (глубоко)', images: getExercisePhotoSlots('Приседания плие с гантелью (глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью', images: getExercisePhotoSlots('Махи ногой назад с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону с гантелью', images: getExercisePhotoSlots('Отведение ноги в сторону с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с гантелью', images: getExercisePhotoSlots('Планка с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие (глубоко)', images: getExercisePhotoSlots('Приседания плие (глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Женское счастье'), category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания', images: getExercisePhotoSlots('Болгарские сплит-приседания', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Австралийские подтягивания', images: getExercisePhotoSlots('Австралийские подтягивания', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком', images: getExercisePhotoSlots('Выпады с прыжком', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Женское счастье'), category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Скручивания с вытянутыми руками', images: getExercisePhotoSlots('Скручивания с вытянутыми руками', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом и махи', images: getExercisePhotoSlots('Разминка: круговые движения тазом и махи', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (глубоко)', images: getExercisePhotoSlots('Приседания плие с гантелью (глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём колен в висе', images: getExercisePhotoSlots('Подъём колен в висе', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга с гантелями', images: getExercisePhotoSlots('Румынская тяга с гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Женское счастье'), category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', images: getExercisePhotoSlots('Ягодичный мостик с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Женское счастье'), category: 'Женское счастье', reps: '25 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' }
            ]
        },
        '3 LVL': {
            none: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)', 'Женское счастье'), category: 'Женское счастье', reps: '6', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с выпрыгиванием', images: getExercisePhotoSlots('Приседания плие с выпрыгиванием', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с прыжком', images: getExercisePhotoSlots('Болгарские сплит-приседания с прыжком', 'Женское счастье'), category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с прыжком (глубоко)', images: getExercisePhotoSlots('Выпады с прыжком (глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге (медленно)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковые выпады глубокие', images: getExercisePhotoSlots('Боковые выпады глубокие', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Скручивания с подъёмом ног', images: getExercisePhotoSlots('Скручивания с подъёмом ног', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с подъёмом ноги', images: getExercisePhotoSlots('Планка с подъёмом ноги', 'Женское счастье'), category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с подъёмом ноги на правую', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги на правую', 'Женское счастье'), category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с подъёмом ноги на левую', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги на левую', 'Женское счастье'), category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (очень глубоко)', images: getExercisePhotoSlots('Приседания плие с гантелью (очень глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга на одной ноге с гантелью', images: getExercisePhotoSlots('Румынская тяга на одной ноге с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью (медленно)', images: getExercisePhotoSlots('Ягодичный мостик с гантелью (медленно)', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Махи ногой назад с гантелью (медленно)', images: getExercisePhotoSlots('Махи ногой назад с гантелью (медленно)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Отведение ноги в сторону с гантелью (медленно)', images: getExercisePhotoSlots('Отведение ноги в сторону с гантелью (медленно)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '25', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Женское счастье'), category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с гантелью и подъёмом ноги', 'Женское счастье'), category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            pullup: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи ногами', images: getExercisePhotoSlots('Разминка: махи ногами', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Пистолетик (присед на одной ноге)', images: getExercisePhotoSlots('Пистолетик (присед на одной ноге)', 'Женское счастье'), category: 'Женское счастье', reps: '6', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Женское счастье'), category: 'Женское счастье', reps: '8', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с прыжком', images: getExercisePhotoSlots('Болгарские сплит-приседания с прыжком', 'Женское счастье'), category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём ног в висе с отягощением', images: getExercisePhotoSlots('Подъём ног в висе с отягощением', 'Женское счастье'), category: 'Женское счастье', reps: '8', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с выпрыгиванием', images: getExercisePhotoSlots('Приседания плие с выпрыгиванием', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик на одной ноге (медленно)', images: getExercisePhotoSlots('Ягодичный мостик на одной ноге (медленно)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Женское счастье'), category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с подъёмом ноги', images: getExercisePhotoSlots('Планка с подъёмом ноги', 'Женское счастье'), category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'Женское счастье'), category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' }
            ],
            dumbbells_pullup: [
                { name: 'Разминка: круговые движения тазом', images: getExercisePhotoSlots('Разминка: круговые движения тазом', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Разминка: махи гантелями', images: getExercisePhotoSlots('Разминка: махи гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '3', weight: 0, icon: 'woman' },
                { name: 'Приседания плие с гантелью (очень глубоко)', images: getExercisePhotoSlots('Приседания плие с гантелью (очень глубоко)', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Подъём прямых ног в висе', images: getExercisePhotoSlots('Подъём прямых ног в висе', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Румынская тяга на одной ноге с гантелью', images: getExercisePhotoSlots('Румынская тяга на одной ноге с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '10', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Windshield wipers в висе', images: getExercisePhotoSlots('Windshield wipers в висе', 'Женское счастье'), category: 'Женское счастье', reps: '8', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Болгарские сплит-приседания с гантелями', images: getExercisePhotoSlots('Болгарские сплит-приседания с гантелями', 'Женское счастье'), category: 'Женское счастье', reps: '12', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью (медленно)', images: getExercisePhotoSlots('Ягодичный мостик с гантелью (медленно)', 'Женское счастье'), category: 'Женское счастье', reps: '20', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Выпады с гантелями (шагающие)', images: getExercisePhotoSlots('Выпады с гантелями (шагающие)', 'Женское счастье'), category: 'Женское счастье', reps: '15', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Русский твист с гантелью', images: getExercisePhotoSlots('Русский твист с гантелью', 'Женское счастье'), category: 'Женское счастье', reps: '25', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Вис на турнике', images: getExercisePhotoSlots('Вис на турнике', 'Женское счастье'), category: 'Женское счастье', reps: '30 сек', sets: '4', weight: 0, icon: 'woman' },
                { name: 'Планка с гантелью и подъёмом ноги', images: getExercisePhotoSlots('Планка с гантелью и подъёмом ноги', 'Женское счастье'), category: 'Женское счастье', reps: '40 сек', sets: '4', weight: 0, icon: 'woman' }
            ]
        },
        '_premium': true
    },

'ГТО': {
    _gender: true,
    _premium: true,

    'Женский': {
        '1 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей', 'ГТО'), category: 'ГТО', reps: '5', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', images: getExercisePhotoSlots('Наклон вперёд сидя', 'ГТО'), category: 'ГТО', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'ГТО'), category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', images: getExercisePhotoSlots('Лодочка', 'ГТО'), category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'ГТО'), category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '2 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей', 'ГТО'), category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', images: getExercisePhotoSlots('Наклон вперёд сидя', 'ГТО'), category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'ГТО'), category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', images: getExercisePhotoSlots('Лодочка', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '3 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '50 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '20', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'ГТО'), category: 'ГТО', reps: '20', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '4 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '60 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола (частичные)', images: getExercisePhotoSlots('Отжимания от пола (частичные)', 'ГТО'), category: 'ГТО', reps: '6', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '25', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки с места (выпрыгивания)', images: getExercisePhotoSlots('Прыжки с места (выпрыгивания)', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'ГТО'), category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '5 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '30', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '14', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую', 'ГТО'), category: 'ГТО', reps: '20 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую', 'ГТО'), category: 'ГТО', reps: '20 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '6 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '80 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении', 'ГТО'), category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '35', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '16', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '30 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '7 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '40', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', images: getExercisePhotoSlots('Наклон вперёд стоя глубоко', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'ГТО'), category: 'ГТО', reps: '30 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '8 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'ГТО'), category: 'ГТО', reps: '8', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'ГТО'), category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', images: getExercisePhotoSlots('Наклон вперёд стоя глубоко', 'ГТО'), category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', images: getExercisePhotoSlots('Подъём прямых ног лёжа под 45°', 'ГТО'), category: 'ГТО', reps: '15', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', images: getExercisePhotoSlots('V-складка с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '45 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'ГТО'), category: 'ГТО', reps: '6', sets: '5', weight: 0, icon: 'breast' }
        ],
        '9 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '16', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'ГТО'), category: 'ГТО', reps: '8', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'ГТО'), category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', images: getExercisePhotoSlots('Наклон вперёд стоя глубоко', 'ГТО'), category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног с задержкой', images: getExercisePhotoSlots('Подъём прямых ног с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', images: getExercisePhotoSlots('V-складка с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Боковая планка с подъёмом ноги', images: getExercisePhotoSlots('Боковая планка с подъёмом ноги', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '5', weight: 0, icon: 'press' }
        ],
        '10 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '90 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '35', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '35 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка', images: getExercisePhotoSlots('Боковая планка', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ]
    },

    'Мужской': {
        '1 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей', 'ГТО'), category: 'ГТО', reps: '8', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', images: getExercisePhotoSlots('Наклон вперёд сидя', 'ГТО'), category: 'ГТО', reps: '15 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'ГТО'), category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', images: getExercisePhotoSlots('Лодочка', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'ГТО'), category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '2 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от коленей', images: getExercisePhotoSlots('Отжимания от коленей', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '18', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд сидя', images: getExercisePhotoSlots('Наклон вперёд сидя', 'ГТО'), category: 'ГТО', reps: '20 сек', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Скручивания лёжа', images: getExercisePhotoSlots('Скручивания лёжа', 'ГТО'), category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'ГТО'), category: 'ГТО', reps: '20', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка', images: getExercisePhotoSlots('Лодочка', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на коленях', images: getExercisePhotoSlots('Планка на коленях', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '3 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '50 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола (частичные)', images: getExercisePhotoSlots('Отжимания от пола (частичные)', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '25', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '10', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки на месте', images: getExercisePhotoSlots('Прыжки на месте', 'ГТО'), category: 'ГТО', reps: '25', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'ГТО'), category: 'ГТО', reps: '30 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '4 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '60 сек', sets: '3', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '30', sets: '3', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'press' },
            { name: 'Прыжки с места (выпрыгивания)', images: getExercisePhotoSlots('Прыжки с места (выпрыгивания)', 'ГТО'), category: 'ГТО', reps: '12', sets: '3', weight: 0, icon: 'WholeBody' },
            { name: 'Лодочка с задержкой', images: getExercisePhotoSlots('Лодочка с задержкой', 'ГТО'), category: 'ГТО', reps: '15', sets: '3', weight: 0, icon: 'back' },
            { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'ГТО'), category: 'ГТО', reps: '35 сек', sets: '3', weight: 0, icon: 'press' }
        ],
        '5 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '70 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '35', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '10', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка на локтях', images: getExercisePhotoSlots('Планка на локтях', 'ГТО'), category: 'ГТО', reps: '45 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на правую', images: getExercisePhotoSlots('Боковая планка на правую', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка на левую', images: getExercisePhotoSlots('Боковая планка на левую', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
        ],
        '6 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '80 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '40', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'ГТО'), category: 'ГТО', reps: '6', sets: '4', weight: 0, icon: 'breast' }
        ],
        '7 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '25', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'ГТО'), category: 'ГТО', reps: '10', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'ГТО'), category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', images: getExercisePhotoSlots('Наклон вперёд стоя глубоко', 'ГТО'), category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', images: getExercisePhotoSlots('Подъём прямых ног лёжа под 45°', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '22', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', images: getExercisePhotoSlots('V-складка с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '45 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'ГТО'), category: 'ГТО', reps: '8', sets: '4', weight: 0, icon: 'breast' }
        ],
        '8 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '30', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'ГТО'), category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'ГТО'), category: 'ГТО', reps: '25', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', images: getExercisePhotoSlots('Наклон вперёд стоя глубоко', 'ГТО'), category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', images: getExercisePhotoSlots('Подъём прямых ног лёжа под 45°', 'ГТО'), category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '25', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', images: getExercisePhotoSlots('V-складка с задержкой', 'ГТО'), category: 'ГТО', reps: '15', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '50 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'ГТО'), category: 'ГТО', reps: '10', sets: '5', weight: 0, icon: 'breast' }
        ],
        '9 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '100 сек', sets: '5', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '25', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Отжимания с хлопком', images: getExercisePhotoSlots('Отжимания с хлопком', 'ГТО'), category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'breast' },
            { name: 'Приседания с выпрыгиванием', images: getExercisePhotoSlots('Приседания с выпрыгиванием', 'ГТО'), category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя глубоко', images: getExercisePhotoSlots('Наклон вперёд стоя глубоко', 'ГТО'), category: 'ГТО', reps: '20', sets: '5', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа под 45°', images: getExercisePhotoSlots('Подъём прямых ног лёжа под 45°', 'ГТО'), category: 'ГТО', reps: '18', sets: '5', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '22', sets: '5', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка с задержкой', images: getExercisePhotoSlots('V-складка с задержкой', 'ГТО'), category: 'ГТО', reps: '12', sets: '5', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '45 сек', sets: '5', weight: 0, icon: 'press' },
            { name: 'Псевдо-планш отжимания', images: getExercisePhotoSlots('Псевдо-планш отжимания', 'ГТО'), category: 'ГТО', reps: '8', sets: '5', weight: 0, icon: 'breast' }
        ],
        '10 СТУПЕНЬ': [
            { name: 'Бег на месте', images: getExercisePhotoSlots('Бег на месте', 'ГТО'), category: 'ГТО', reps: '90 сек', sets: '4', weight: 0, icon: 'cardio' },
            { name: 'Отжимания от пола', images: getExercisePhotoSlots('Отжимания от пола', 'ГТО'), category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Отжимания с ногами на возвышении', images: getExercisePhotoSlots('Отжимания с ногами на возвышении', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'breast' },
            { name: 'Приседания без веса', images: getExercisePhotoSlots('Приседания без веса', 'ГТО'), category: 'ГТО', reps: '40', sets: '4', weight: 0, icon: 'legs' },
            { name: 'Наклон вперёд стоя', images: getExercisePhotoSlots('Наклон вперёд стоя', 'ГТО'), category: 'ГТО', reps: '20', sets: '4', weight: 0, icon: 'stretching' },
            { name: 'Подъём прямых ног лёжа', images: getExercisePhotoSlots('Подъём прямых ног лёжа', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'press' },
            { name: 'Прыжки из приседа', images: getExercisePhotoSlots('Прыжки из приседа', 'ГТО'), category: 'ГТО', reps: '18', sets: '4', weight: 0, icon: 'WholeBody' },
            { name: 'V-складка', images: getExercisePhotoSlots('V-складка', 'ГТО'), category: 'ГТО', reps: '15', sets: '4', weight: 0, icon: 'press' },
            { name: 'Планка с подъёмом ног', images: getExercisePhotoSlots('Планка с подъёмом ног', 'ГТО'), category: 'ГТО', reps: '40 сек', sets: '4', weight: 0, icon: 'press' },
            { name: 'Боковая планка', images: getExercisePhotoSlots('Боковая планка', 'ГТО'), category: 'ГТО', reps: '25 сек', sets: '4', weight: 0, icon: 'press' }
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