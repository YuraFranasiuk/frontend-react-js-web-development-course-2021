function filterArray(initialArray) {
    return initialArray.filter(value => typeof value === 'string');
}

console.log(filterArray([2, 'string', 3, , , 'test']));
