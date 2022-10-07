function timer(seconds) {
    let remaining = seconds;

    const intervalID = setInterval(() => {
        if (remaining === 0) {
            clearInterval(intervalID);
        }

        console.log(`Timer: ${remaining--}`);
    }, 1000);

    return intervalID;
}

timer(5);
