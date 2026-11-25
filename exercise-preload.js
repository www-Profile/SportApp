// Priorities: first exercises, selected workout, then the remaining catalog.
const exercisePhotos = (() => {
    const ready = new Set();
    const loading = new Map();
    const queues = [new Set(), new Set(), new Set()];
    const photosByName = new Map();
    function addExercise(exercise) {
        if (!exercise?.name || !exercise.images?.length) return;
        const key = exerciseNameKey(exercise.name);
        if (!photosByName.has(key)) photosByName.set(key, []);
        const entries = photosByName.get(key);
        if (!entries.some(images => images.join('|') === exercise.images.join('|'))) {
            entries.push(exercise.images);
        }
    }
    EXERCISES_CATALOG.forEach(addExercise);
    const first = [];
    function visit(value) {
        if (Array.isArray(value)) {
            if (value[0]?.name) first.push(value[0]);
            value.forEach(addExercise);
        } else if (value && typeof value === 'object') {
            Object.values(value).forEach(visit);
        }
    }
    visit(exercisesData);
    for (const program of Object.values(PROGRAM_WORKOUTS)) {
        for (const day of program.weeklyPlan || []) {
            const opening = day?.exercises?.[0];
            if (!opening) continue;
            first.push(opening);
            for (const name of opening.variants || []) first.push({name});
        }
    }

    // Also works on static hosts that serve the Jekyll source without processing it.
    const bundled = [
    "images/exercises/Arms/almaznye-push-ups-1.png",
    "images/exercises/Arms/almaznye-push-ups-2.png",
    "images/exercises/Arms/almaznye-push-ups-feet-elevated-1.png",
    "images/exercises/Arms/almaznye-push-ups-feet-elevated-2.png",
    "images/exercises/Arms/avstraliyskie-pull-ups-1.png",
    "images/exercises/Arms/avstraliyskie-pull-ups-2.png",
    "images/exercises/Arms/avstraliyskie-pull-ups-nogi-na-vozvyshenii-1.png",
    "images/exercises/Arms/avstraliyskie-pull-ups-nogi-na-vozvyshenii-2.png",
    "images/exercises/Arms/dumbbell-biceps-curl-1.png",
    "images/exercises/Arms/dumbbell-biceps-curl-2.png",
    "images/exercises/Arms/frantsuzskiy-press-dumbbell-seated-1.png",
    "images/exercises/Arms/frantsuzskiy-press-dumbbell-seated-2.png",
    "images/exercises/Arms/frantsuzskiy-press-dumbbell-standing-1.png",
    "images/exercises/Arms/frantsuzskiy-press-dumbbell-standing-2.png",
    "images/exercises/Arms/kontsentrirovannye-sgibaniya-1.png",
    "images/exercises/Arms/kontsentrirovannye-sgibaniya-2.png",
    "images/exercises/Arms/molotkovye-sgibaniya-1.png",
    "images/exercises/Arms/molotkovye-sgibaniya-2.png",
    "images/exercises/Arms/negativnye-pull-ups-obratnym-hvatom-1.png",
    "images/exercises/Arms/negativnye-pull-ups-obratnym-hvatom-2.png",
    "images/exercises/Arms/plank-na-vytyanutyh-rukah-1.png",
    "images/exercises/Arms/plank-na-vytyanutyh-rukah-2.png",
    "images/exercises/Arms/plank-one-arm-1.png",
    "images/exercises/Arms/plank-one-arm-2.png",
    "images/exercises/Arms/plank-one-arm-4.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-1.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-2.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-cycle-1.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-cycle-2.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-cycle-4.png",
    "images/exercises/Arms/plank-s-raiseom-ruk-1.png",
    "images/exercises/Arms/plank-s-raiseom-ruk-2.png",
    "images/exercises/Arms/plank-s-raiseom-ruk-4.png",
    "images/exercises/Arms/psevdo-plansh-push-ups-1.png",
    "images/exercises/Arms/psevdo-plansh-push-ups-2.png",
    "images/exercises/Arms/pull-ups-close-grip-1.png",
    "images/exercises/Arms/pull-ups-close-grip-2.png",
    "images/exercises/Arms/pull-ups-neytralnym-hvatom-1.png",
    "images/exercises/Arms/pull-ups-neytralnym-hvatom-2.png",
    "images/exercises/Arms/pull-ups-s-otyagoshcheniem-1.png",
    "images/exercises/Arms/pull-ups-s-otyagoshcheniem-2.png",
    "images/exercises/Arms/push-ups-close-grip-1.png",
    "images/exercises/Arms/push-ups-close-grip-2.png",
    "images/exercises/Arms/push-ups-close-grip-kneeling-1.png",
    "images/exercises/Arms/push-ups-close-grip-kneeling-2.png",
    "images/exercises/Arms/push-ups-kneeling-1.png",
    "images/exercises/Arms/push-ups-kneeling-2.png",
    "images/exercises/Arms/push-ups-one-arm-negativnye-1.png",
    "images/exercises/Arms/push-ups-one-arm-negativnye-2.png",
    "images/exercises/Arms/push-ups-one-arm-negativnye-3.png",
    "images/exercises/Arms/push-ups-one-arm-negativnye-4.png",
    "images/exercises/Arms/push-ups-ot-steny-1.png",
    "images/exercises/Arms/push-ups-ot-steny-2.png",
    "images/exercises/Arms/push-ups-s-kasaniem-plecha-1.png",
    "images/exercises/Arms/push-ups-s-kasaniem-plecha-2.png",
    "images/exercises/Arms/push-ups-s-kasaniem-plecha-3.png",
    "images/exercises/Arms/push-ups-s-kasaniem-plecha-4.png",
    "images/exercises/Arms/push-ups-s-pauzoy-vnizu-1.png",
    "images/exercises/Arms/push-ups-s-pauzoy-vnizu-2.png",
    "images/exercises/Arms/razminka-krugovye-vrashcheniya-rukami-1.png",
    "images/exercises/Arms/razminka-krugovye-vrashcheniya-rukami-2.png",
    "images/exercises/Arms/razminka-krugovye-vrashcheniya-rukami-3.png",
    "images/exercises/Arms/razminka-krugovye-vrashcheniya-rukami-4.png",
    "images/exercises/Arms/razminka-raises-gantelyami-1.png",
    "images/exercises/Arms/razminka-raises-gantelyami-2.png",
    "images/exercises/Arms/razminka-raises-rukami-1.png",
    "images/exercises/Arms/razminka-raises-rukami-2.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-1.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-2.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-3.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-4.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-dumbbell-1.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-dumbbell-2.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-dumbbell-3.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-dumbbell-4.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-i-rukami-1.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-i-rukami-2.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-i-rukami-3.png",
    "images/exercises/Arms/razminka-vrashchenie-plechami-i-rukami-4.png",
    "images/exercises/Arms/reverse-push-ups-ot-stula-1.png",
    "images/exercises/Arms/reverse-push-ups-ot-stula-2.png",
    "images/exercises/Arms/reverse-push-ups-ot-stula-feet-elevated-1.png",
    "images/exercises/Arms/reverse-push-ups-ot-stula-feet-elevated-2.png",
    "images/exercises/Arms/sgibanie-ruk-dumbbell-seated-1.png",
    "images/exercises/Arms/sgibanie-ruk-dumbbell-seated-2.png",
    "images/exercises/Arms/sgibanie-ruk-dumbbell-standing-1.png",
    "images/exercises/Arms/sgibanie-ruk-dumbbell-standing-2.png",
    "images/exercises/Arms/sgibanie-ruk-hvatom-molot-seated-1.png",
    "images/exercises/Arms/sgibanie-ruk-hvatom-molot-seated-2.png",
    "images/exercises/Arms/vis-na-turnike-1.png",
    "images/exercises/Arms/vis-na-turnike-2.png",
    "images/exercises/Arms/vyhod-siloy-na-perekladinu-1.png",
    "images/exercises/Arms/vyhod-siloy-na-perekladinu-2.png",
    "images/exercises/Arms/vyhod-siloy-na-perekladinu-3.png",
    "images/exercises/Arms/vyhod-siloy-na-perekladinu-4.png",
    "images/exercises/Back/pull-ups-1.png",
    "images/exercises/Back/pull-ups-2.png",
    "images/exercises/Back/superman-1.png",
    "images/exercises/Back/superman-2.png",
    "images/exercises/Cardio/running-in-place-1.png",
    "images/exercises/Cardio/running-in-place-2.png",
    "images/exercises/Chest/push-ups-clap-1.png",
    "images/exercises/Chest/push-ups-clap-2.png",
    "images/exercises/Chest/push-ups-clap-3.png",
    "images/exercises/Chest/push-ups-clap-4.png",
    "images/exercises/Chest/push-ups-feet-elevated-1.png",
    "images/exercises/Chest/push-ups-feet-elevated-2.png",
    "images/exercises/FullBody/burpee-1.png",
    "images/exercises/FullBody/burpee-2.png",
    "images/exercises/FullBody/burpee-3.png",
    "images/exercises/FullBody/burpee-4.png",
    "images/exercises/FullBody/burpee-5.png",
    "images/exercises/FullBody/burpee-6.png",
    "images/exercises/Shoulders/avstraliyskie-pull-ups-shirokiy-hvat-1.png",
    "images/exercises/Shoulders/avstraliyskie-pull-ups-shirokiy-hvat-2.png",
    "images/exercises/Shoulders/fly-ganteley-v-bende-1.png",
    "images/exercises/Shoulders/fly-ganteley-v-bende-2.png",
    "images/exercises/Shoulders/fly-ganteley-v-bende-seated-1.png",
    "images/exercises/Shoulders/fly-ganteley-v-bende-seated-2.png",
    "images/exercises/Shoulders/fly-ganteley-v-storony-seated-1.png",
    "images/exercises/Shoulders/fly-ganteley-v-storony-seated-2.png",
    "images/exercises/Shoulders/fly-ganteley-v-storony-standing-1.png",
    "images/exercises/Shoulders/fly-ganteley-v-storony-standing-2.png",
    "images/exercises/Shoulders/pike-push-ups-1.png",
    "images/exercises/Shoulders/pike-push-ups-2.png",
    "images/exercises/Shoulders/pike-push-ups-feet-elevated-1.png",
    "images/exercises/Shoulders/pike-push-ups-feet-elevated-2.png",
    "images/exercises/Shoulders/pike-push-ups-na-kolenyah-1.png",
    "images/exercises/Shoulders/pike-push-ups-na-kolenyah-2.png",
    "images/exercises/Shoulders/pike-push-ups-s-pauzoy-1.png",
    "images/exercises/Shoulders/pike-push-ups-s-pauzoy-2.png",
    "images/exercises/Shoulders/pike-push-ups-s-pauzoy-gluboko-1.png",
    "images/exercises/Shoulders/pike-push-ups-s-pauzoy-gluboko-2.png",
    "images/exercises/Shoulders/plank-s-kasaniem-plech-medlennaya-1.png",
    "images/exercises/Shoulders/plank-s-kasaniem-plech-medlennaya-2.png",
    "images/exercises/Shoulders/plank-s-kasaniem-plech-medlennaya-3.png",
    "images/exercises/Shoulders/plank-s-kasaniem-plech-medlennaya-4.png",
    "images/exercises/Shoulders/press-arnolda-1.png",
    "images/exercises/Shoulders/press-arnolda-2.png",
    "images/exercises/Shoulders/press-arnolda-3.png",
    "images/exercises/Shoulders/press-arnolda-seated-1.png",
    "images/exercises/Shoulders/press-arnolda-seated-2.png",
    "images/exercises/Shoulders/press-arnolda-seated-3.png",
    "images/exercises/Shoulders/press-ganteley-seated-1.png",
    "images/exercises/Shoulders/press-ganteley-seated-2.png",
    "images/exercises/Shoulders/press-ganteley-standing-1.png",
    "images/exercises/Shoulders/press-ganteley-standing-2.png",
    "images/exercises/Shoulders/press-odnoy-ganteli-seated-1.png",
    "images/exercises/Shoulders/press-odnoy-ganteli-seated-2.png",
    "images/exercises/Shoulders/pull-ups-s-vyhodom-1.png",
    "images/exercises/Shoulders/pull-ups-s-vyhodom-2.png",
    "images/exercises/Shoulders/pull-ups-s-vyhodom-3.png",
    "images/exercises/Shoulders/pull-ups-wide-grip-1.png",
    "images/exercises/Shoulders/pull-ups-wide-grip-2.png",
    "images/exercises/Shoulders/pull-ups-wide-grip-s-otyagoshcheniem-1.png",
    "images/exercises/Shoulders/pull-ups-wide-grip-s-otyagoshcheniem-2.png",
    "images/exercises/Shoulders/pull-ups-za-golovu-1.png",
    "images/exercises/Shoulders/pull-ups-za-golovu-2.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-s-oporoy-1.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-s-oporoy-2.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-s-oporoy-odnoy-nogoy-1.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-s-oporoy-odnoy-nogoy-2.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-u-steny-1.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-u-steny-2.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-u-steny-polnaya-1.png",
    "images/exercises/Shoulders/push-ups-v-stoyke-u-steny-polnaya-2.png",
    "images/exercises/Shoulders/raise-ruk-pered-soboy-dumbbell-1.png",
    "images/exercises/Shoulders/raise-ruk-pered-soboy-dumbbell-2.png",
    "images/exercises/Shoulders/raises-gantelyami-pered-soboy-1.png",
    "images/exercises/Shoulders/raises-gantelyami-pered-soboy-2.png",
    "images/exercises/Shoulders/razvedenie-ganteley-v-bende-1.png",
    "images/exercises/Shoulders/razvedenie-ganteley-v-bende-2.png",
    "images/exercises/Shoulders/razvedenie-ganteley-v-storony-standing-1.png",
    "images/exercises/Shoulders/razvedenie-ganteley-v-storony-standing-2.png",
    "images/exercises/Shoulders/tyaga-k-podborodku-dumbbell-1.png",
    "images/exercises/Shoulders/tyaga-k-podborodku-dumbbell-2.png",
    "images/exercises/Shoulders/vrashchenie-plechami-1.png",
    "images/exercises/Shoulders/vrashchenie-plechami-2.png",
    "images/exercises/Shoulders/vrashchenie-plechami-3.png",
    "images/exercises/Shoulders/vrashchenie-plechami-4.png",
    "images/exercises/Shoulders/vrashchenie-plechami-dumbbell-1.png",
    "images/exercises/Shoulders/vrashchenie-plechami-dumbbell-2.png",
    "images/exercises/Shoulders/vrashchenie-plechami-dumbbell-3.png",
    "images/exercises/Shoulders/vrashchenie-plechami-dumbbell-4.png",
    "images/exercises/Stretching/butterfly-stretch-1.png",
    "images/exercises/Stretching/butterfly-stretch-2.png",
    "images/exercises/Abs/plank-one-arm-1.png",
    "images/exercises/Abs/plank-one-arm-2.png",
    "images/exercises/Abs/side-plank-1.png",
    "images/exercises/Abs/side-plank-2.png",
    "images/exercises/Abs/side-plank-4.png",
    "images/exercises/Abs/side-plank-na-levuyu-1.png",
    "images/exercises/Abs/side-plank-na-levuyu-2.png",
    "images/exercises/Abs/side-plank-na-levuyu-storonu-1.png",
    "images/exercises/Abs/side-plank-na-levuyu-storonu-2.png",
    "images/exercises/Abs/side-plank-na-pravuyu-1.png",
    "images/exercises/Abs/side-plank-na-pravuyu-2.png",
    "images/exercises/Abs/side-plank-na-pravuyu-storonu-1.png",
    "images/exercises/Abs/side-plank-na-pravuyu-storonu-2.png",
    "images/exercises/FullBody/plank-one-arm-1.png",
    "images/exercises/FullBody/plank-one-arm-2.png",
    "images/exercises/FullBody/side-plank-na-levuyu-1.png",
    "images/exercises/FullBody/side-plank-na-levuyu-2.png",
    "images/exercises/FullBody/side-plank-na-levuyu-storonu-1.png",
    "images/exercises/FullBody/side-plank-na-levuyu-storonu-2.png",
    "images/exercises/FullBody/side-plank-na-pravuyu-1.png",
    "images/exercises/FullBody/side-plank-na-pravuyu-2.png",
    "images/exercises/FullBody/side-plank-na-pravuyu-storonu-1.png",
    "images/exercises/FullBody/side-plank-na-pravuyu-storonu-2.png",
    "images/exercises/GTO/side-plank-1.png",
    "images/exercises/GTO/side-plank-2.png",
    "images/exercises/GTO/side-plank-na-levuyu-1.png",
    "images/exercises/GTO/side-plank-na-levuyu-2.png",
    "images/exercises/GTO/side-plank-na-pravuyu-1.png",
    "images/exercises/GTO/side-plank-na-pravuyu-2.png",
    "images/exercises/Pilates/side-plank-1.png",
    "images/exercises/Pilates/side-plank-2.png",
    "images/exercises/Pilates/side-plank-na-levuyu-1.png",
    "images/exercises/Pilates/side-plank-na-levuyu-2.png",
    "images/exercises/Pilates/side-plank-na-pravuyu-1.png",
    "images/exercises/Pilates/side-plank-na-pravuyu-2.png"
];
    let available;
    async function readIndex() {
        try {
            const r = await fetch('exercise-image-index.json', {signal: AbortSignal.timeout(5000)});
            if (!r.ok) throw Error();
            const paths = await r.json();
            if (Array.isArray(paths) && paths.length) return new Set(paths);
        } catch {}
        return new Set(bundled);
    }
    let indexPromise;
    const index = () => indexPromise ||= readIndex().then(paths => available = paths);
    function sources(ex) {
        const candidates = [ex?.images, ...(photosByName.get(exerciseNameKey(ex?.name)) || [])];
        for (const images of candidates) {
            if (!Array.isArray(images)) continue;
            const paths = images.filter(path => typeof path === 'string' &&
                (available.has(path) || /^(?:https?:|blob:|data:image\/)/i.test(path)));
            if (paths.length) return paths;
        }
        return [];
    }

    function sideFrames(ex) {
        return (TIMED_EXERCISE_SIDE_FRAMES.get(exerciseNameKey(ex?.name)) || [])
            .filter(path => available.has(path));
    }

    function preloadSources(ex) {
        return [...sources(ex), ...sideFrames(ex)];
    }

    const jobs = new Map();
    function enqueue(path, priority) {
        if (ready.has(path)) return Promise.resolve(true);
        if (!jobs.has(path)) {
            let resolve;
            const promise = new Promise(done => resolve = done);
            jobs.set(path, {promise, resolve});
        }
        if (!loading.has(path)) {
            const old = queues.findIndex(q => q.has(path));
            if (old < 0 || priority < old) {
                if (old >= 0) queues[old].delete(path);
                queues[priority].add(path);
            }
        }
        return jobs.get(path).promise;
    }

    let nextBackground = 0;
    let wake;
    function pump() {
        clearTimeout(wake);
        while (loading.size < 3) {
            const priority = queues.findIndex(q => q.size);
            if (priority < 0) return;
            if (priority === 2) {
                if (document.hidden || loading.size) return;
                const delay = nextBackground - Date.now();
                if (delay > 0) { wake = setTimeout(pump, delay); return; }
            }
            const path = queues[priority].values().next().value;
            queues[priority].delete(path);
            const img = new Image();
            loading.set(path, img);
            const finish = ok => {
                clearTimeout(timeout);
                img.onload = img.onerror = null;
                if (ok) ready.add(path);
                else img.removeAttribute('src');
                loading.delete(path);
                jobs.get(path).resolve(ok);
                jobs.delete(path);
                if (priority === 2) nextBackground = Date.now() + 800;
                pump();
            };
            const timeout = setTimeout(() => finish(false), 20000);
            img.onload = () => finish(true);
            img.onerror = () => finish(false);
            img.fetchPriority = priority === 2 ? 'low' : 'auto';
            img.src = path;
        }
    }
    document.addEventListener('visibilitychange', pump);
    function request(paths, priority) {
        const tasks = [...new Set(paths)].map(p => enqueue(p, priority));
        pump();
        return Promise.all(tasks);
    }
    let backgroundStarted = false;
    return {
        async gallery(exercise, timed, completedSets) {
            await index();
            const paths = sources(exercise);
            if (!timed) return paths;
            const sides = sideFrames(exercise);
            if (!sides.length) {
                const hold = TIMED_EXERCISE_HOLD_FRAMES.get(exerciseNameKey(exercise?.name));
                return available.has(hold) ? [hold] : paths.slice(0, 1);
            }
            const indexForSet = Math.max(0, Math.trunc(Number(completedSets) || 0)) % sides.length;
            return [sides[indexForSet]];
        },
        async startup(custom = [], includeCatalog = true) {
            await index();
            const paths = [...(includeCatalog ? first : []), ...custom.map(w => w?.exercises?.[0])].flatMap(preloadSources);
            return (await request(paths.filter(p => available.has(p)), 0)).every(Boolean);
        },
        async workout(exercises) {
            await index();
            for (const path of queues[1]) queues[2].add(path);
            queues[1].clear();
            await request(exercises.flatMap(preloadSources).filter(p => available.has(p)), 1);
        },
        async background() {
            if (backgroundStarted) return;
            backgroundStarted = true;
            await index();
            request([...available], 2);
        }
    };
})();
