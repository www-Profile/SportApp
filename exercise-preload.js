// Priorities: first exercises, selected workout, then the remaining catalog.
const exercisePhotos = (() => {
    const ready = new Set();
    const loading = new Map();
    const queues = [new Set(), new Set(), new Set()];
    const catalog = new Map(EXERCISES_CATALOG.map(ex => [ex.name, ex]));
    const first = [];
    function visit(value) {
        if (Array.isArray(value)) {
            if (value[0]?.name) first.push(value[0]);
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
    "images/exercises/Arms/avstraliyskie-pull-ups-1.png",
    "images/exercises/Arms/avstraliyskie-pull-ups-2.png",
    "images/exercises/Arms/dumbbell-biceps-curl-1.png",
    "images/exercises/Arms/dumbbell-biceps-curl-2.png",
    "images/exercises/Arms/frantsuzskiy-press-dumbbell-seated-1.png",
    "images/exercises/Arms/frantsuzskiy-press-dumbbell-seated-2.png",
    "images/exercises/Arms/molotkovye-sgibaniya-1.png",
    "images/exercises/Arms/molotkovye-sgibaniya-2.png",
    "images/exercises/Arms/negativnye-pull-ups-obratnym-hvatom-1.png",
    "images/exercises/Arms/negativnye-pull-ups-obratnym-hvatom-2.png",
    "images/exercises/Arms/plank-na-vytyanutyh-rukah-1.png",
    "images/exercises/Arms/plank-na-vytyanutyh-rukah-2.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-1.png",
    "images/exercises/Arms/plank-s-kasaniem-plech-2.png",
    "images/exercises/Arms/push-ups-close-grip-kneeling-1.png",
    "images/exercises/Arms/push-ups-close-grip-kneeling-2.png",
    "images/exercises/Arms/push-ups-kneeling-1.png",
    "images/exercises/Arms/push-ups-kneeling-2.png",
    "images/exercises/Arms/push-ups-ot-steny-1.png",
    "images/exercises/Arms/push-ups-ot-steny-2.png",
    "images/exercises/Arms/reverse-push-ups-ot-stula-1.png",
    "images/exercises/Arms/reverse-push-ups-ot-stula-2.png",
    "images/exercises/Arms/sgibanie-ruk-dumbbell-standing-1.png",
    "images/exercises/Arms/sgibanie-ruk-dumbbell-standing-2.png",
    "images/exercises/Arms/sgibanie-ruk-hvatom-molot-seated-1.png",
    "images/exercises/Arms/sgibanie-ruk-hvatom-molot-seated-2.png",
    "images/exercises/Arms/vis-na-turnike-1.png",
    "images/exercises/Arms/vis-na-turnike-2.png",
    "images/exercises/Back/pull-ups-1.png",
    "images/exercises/Back/pull-ups-2.png",
    "images/exercises/Back/superman-1.png",
    "images/exercises/Back/superman-2.png",
    "images/exercises/Cardio/running-in-place-1.png",
    "images/exercises/Cardio/running-in-place-2.png",
    "images/exercises/Stretching/butterfly-stretch-1.png",
    "images/exercises/Stretching/butterfly-stretch-2.png"
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
        const images = ex?.images?.length ? ex.images : catalog.get(ex?.name)?.images;
        return Array.isArray(images) ? images.filter(s => typeof s === 'string' && s.trim() && !s.startsWith('*')) : [];
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
        async startup(custom = [], includeCatalog = true) {
            await index();
            const paths = [...(includeCatalog ? first : []), ...custom.map(w => w?.exercises?.[0])].flatMap(sources);
            return (await request(paths.filter(p => available.has(p)), 0)).every(Boolean);
        },
        async workout(exercises) {
            await index();
            for (const path of queues[1]) queues[2].add(path);
            queues[1].clear();
            await request(exercises.flatMap(sources).filter(p => available.has(p)), 1);
        },
        async background() {
            if (backgroundStarted) return;
            backgroundStarted = true;
            await index();
            request([...available], 2);
        }
    };
})();
