function printPowsOf2(number) {
    if (typeof number != 'number') {
        console.log(`"${number}" - "incorrect type"`)

        return
    }

    const powers = []
    for (let i = 1; i <= number; i *= 2) {
        powers.push(i)
    }

    console.log(`${number} - ${powers.join(', ')}`)
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
