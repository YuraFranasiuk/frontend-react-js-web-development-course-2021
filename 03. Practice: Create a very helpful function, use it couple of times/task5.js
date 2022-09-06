const convert = (bytes) => {
    return `${(bytes / 1_000_000).toFixed(2)} Mb`;
};

console.log(convert.call(null, 10000));
