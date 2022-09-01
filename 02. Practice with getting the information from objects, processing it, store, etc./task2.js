function isEvenArray(initialArray) {
    return initialArray.every(value => value % 2 === 0) ? 'Yes' : 'No';
}

console.log(isEvenArray([1, 2, 3, 9]));
console.log(isEvenArray([2, 4, 6]));
