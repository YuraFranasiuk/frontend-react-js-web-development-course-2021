function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];

    const sum = initialArray.reduce((previousValue, currentValue) => {
        return typeof currentValue == 'number' ? previousValue + currentValue : previousValue;
    }, 0);

    console.log(sum);
}

calculateSumOfArray();
