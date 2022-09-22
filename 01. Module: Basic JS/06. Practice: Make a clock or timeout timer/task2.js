function clock() {
    const normalizeTimeFormat = (time) => time > 9 ? time.toString() : `0${time}`;

    return setInterval(() => {
        const date = new Date();

        const hours = normalizeTimeFormat(date.getHours());
        const minutes = normalizeTimeFormat(date.getMinutes());
        const seconds = normalizeTimeFormat(date.getSeconds());

        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}

clock();
