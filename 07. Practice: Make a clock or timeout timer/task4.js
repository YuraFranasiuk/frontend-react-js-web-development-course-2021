class Person {
    #autoClearNameTimerID = null;
    #clearNameTime = 5000;

    constructor(name) {
        this.name = name;

        this.#autoClearNameTimerID = setTimeout(() => {
            this.name = null;
        }, this.#clearNameTime);
    }

    stopAutoClearNameTimer() {
        if (this.#autoClearNameTimerID !== null) {
            clearTimeout(this.#autoClearNameTimerID);
        }
    }
}
