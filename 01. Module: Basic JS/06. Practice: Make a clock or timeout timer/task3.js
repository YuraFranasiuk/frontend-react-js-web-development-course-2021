function timer(seconds) {
    let remaining = seconds;

    const intervalID = setInterval(() => {
        if (remains === 0) {
            clearInterval(intervalID);
        }

        console.log(`Timer: ${remaining--}`);
    }, 1000);

    return intervalID;
}

timer(5);
