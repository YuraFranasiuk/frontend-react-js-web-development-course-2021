function findUser(initialObject) {
    const users = [];

    for (const [name, data] of Object.entries(initialObject)) {
        if (data.age >= 10 && data.city === 'London') {
            users.push(`"${name}"`);
        }
    }

    return users;
}

console.log(findUser({
    Max: { age: 23, city: 'London' },
    Mike: { age: 20, city: 'NY' }
}));
