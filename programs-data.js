// ============================================================
// PROGRAM WORKOUTS — готовые тренировки для программ SportApp
// Загружается после exercises-catalog.js и до app.js.
// ============================================================

const PROGRAM_WORKOUTS = {
    fullbody_90: {
        durationDays: 90,
        workoutsPerWeek: 3,
        weekPattern: [true, false, true, false, true, false, false],
        // Пн — самая лёгкая тренировка, Ср — средняя, Пт — самая тяжёлая.
        weeklyPlan: [
            {
                title: 'Грудь · плечи · трицепс',
                label: 'Грудь, плечи и трицепс',
                exercises: [
                    { name: 'Отжимания от пола', sets: [2, 2, 2, 3], reps: [8, 10, 10, 12] },
                    { name: 'Жим гантелей сидя', sets: [2, 2, 3, 3], reps: [10, 10, 12, 12] },
                    { name: 'Разводка гантелей в стороны стоя', sets: [2, 2, 2, 3], reps: [10, 10, 12, 12] },
                    { name: 'Французский жим с гантелью стоя', sets: [2, 2, 3, 3], reps: [10, 10, 12, 12] },
                    { name: 'Планка на локтях', sets: [2, 2, 3, 3], reps: ['20 сек', '25 сек', '30 сек', '40 сек'] }
                ]
            },
            null,
            {
                title: 'Ноги · ягодицы · пресс',
                label: 'Ноги, ягодицы и пресс',
                exercises: [
                    { name: 'Приседания с гантелями', sets: [2, 2, 3, 3], reps: [10, 10, 12, 12] },
                    { name: 'Румынская тяга с гантелями', sets: [2, 2, 3, 3], reps: [10, 10, 12, 12] },
                    { name: 'Выпады с гантелями', sets: [2, 2, 3, 3], reps: [8, 10, 10, 12] },
                    { name: 'Подъём на носки с гантелями', sets: [2, 3, 3, 4], reps: [12, 15, 15, 18] },
                    { name: 'Подъём ног лёжа', sets: [2, 2, 3, 3], reps: [10, 12, 15, 15] }
                ]
            },
            null,
            {
                title: 'Спина · бицепс · корпус',
                label: 'Спина, бицепс и корпус',
                exercises: [
                    { name: 'Тяга гантелей к поясу в наклоне', sets: [3, 3, 4, 4], reps: [10, 12, 12, 15] },
                    { name: 'Лодочка с задержкой', sets: [3, 3, 3, 4], reps: [10, 12, 12, 15] },
                    { name: 'Сгибание рук с гантелями стоя', sets: [3, 3, 4, 4], reps: [10, 12, 12, 15] },
                    { name: 'Молотковые сгибания', sets: [3, 3, 4, 4], reps: [10, 12, 12, 15] },
                    { name: 'Велосипед лёжа', sets: [3, 3, 4, 4], reps: [24, 30, 36, 40] }
                ]
            },
            null,
            null
        ],
        phases: [
            { weeks: '1–3', name: 'Адаптация', description: 'Небольшой объём, освоение техники и спокойный темп.' },
            { weeks: '4–6', name: 'Развитие', description: 'Постепенно добавляются подходы и повторения.' },
            { weeks: '7–9', name: 'Укрепление', description: 'Рабочий объём растёт, упражнения выполняются увереннее.' },
            { weeks: '10–13', name: 'Продвинутый этап', description: 'Максимальный плановый объём программы без обязательной работы до отказа.' }
        ]
    }
};

function buildProgramWorkout(programId, dayNumber) {
    const program = PROGRAM_WORKOUTS[programId];
    if (!program || !Array.isArray(program.weeklyPlan)) return null;

    const dayIndex = (dayNumber - 1) % 7;
    const dayPlan = program.weeklyPlan[dayIndex];
    if (!dayPlan) return null;

    const weekNumber = Math.ceil(dayNumber / 7);
    const phaseIndex = weekNumber <= 3 ? 0 : weekNumber <= 6 ? 1 : weekNumber <= 9 ? 2 : 3;

    const exercises = dayPlan.exercises.map(item => {
        const catalogExercise = EXERCISES_CATALOG.find(ex => ex.name === item.name);
        if (!catalogExercise) {
            console.warn('[SportApp] Не найдено упражнение программы:', item.name);
            return null;
        }
        return {
            ...catalogExercise,
            sets: item.sets[phaseIndex],
            reps: item.reps[phaseIndex],
            weight: catalogExercise.weight || 0
        };
    }).filter(Boolean);

    if (!exercises.length) return null;

    return {
        title: dayPlan.title,
        category: 'Всё тело',
        icon: 'WholeBody',
        exercises
    };
}
