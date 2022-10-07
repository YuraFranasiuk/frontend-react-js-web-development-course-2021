const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

function compose(...fns) {
    return (arg) => fns.reduceRight(
        (res, func) => func(res), arg
    );
}

function modifyArray(func) {
    return (array) => array.map(func);
}

function printArray(separator) {
    return (array) => {
        const wordsWithSeparator = array.join(separator);
        console.log(
            `Result: ${wordsWithSeparator} length: ${wordsWithSeparator.length}`
        );

        return array;
    };
}

const capitalizeAllFirst = compose(
    printArray('-'),
    modifyArray(str => str.charAt(0).toUpperCase() +
                            str.substring(1).toLowerCase())
);

const allToLower = compose(
    printArray(' - '),
    modifyArray(str => str.toLowerCase())
);

capitalizeAllFirst(arr);
allToLower(arr);
