function unicFn(initialArray) {
    return [...new Set(initialArray)]
}

console.log(unicFn([2, 3, 1, 3, 3, 7]));
