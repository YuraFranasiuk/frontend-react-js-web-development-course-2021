function isString(callback, value) {
    if (typeof value !== 'string') {
        throw 'value must be a type of "string"';
    }

    if (typeof callback !== 'function') {
        throw 'callback must be a type of "function"';
    }

    return callback(value);
}
