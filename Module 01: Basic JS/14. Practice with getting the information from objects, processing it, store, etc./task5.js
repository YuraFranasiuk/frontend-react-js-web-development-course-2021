function removeObj(arrayOfObj, keyName, value) {
    arrayOfObj.forEach((item, index, array) => {
        if (item[keyName] === value) {
            array.splice(index, 1);
        }
    });
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);

console.log(arr);
