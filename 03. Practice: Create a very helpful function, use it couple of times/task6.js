const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const testArgs = ['sushi', 'hiking'];

function logPersonNameAndInterests(...args) {
    console.log(`${this.getFullName()} loves: ${args[0].join(', ')}`);
}

logPersonNameAndInterests.call(Person, testArgs);
