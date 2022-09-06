const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const compose = (...fns) => (arg) => fns.reduceRight(
    (res, func) => func(res), arg
);

const modifyArray = (func) => (array) =>  array.map(func);

const printArray = (separator) => (array) => {
    const wordsWithSeparator = array.join(separator);
    console.log(
        `Result: ${wordsWithSeparator} length: ${wordsWithSeparator.length}`
    );

    return array;
};

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
