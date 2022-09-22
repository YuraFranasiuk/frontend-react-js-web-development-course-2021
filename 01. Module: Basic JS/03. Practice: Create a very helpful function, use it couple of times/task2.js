const car = {
    name: "Tesla",
    model: "X",
};

function showCarInfo() {
    console.log(this.name);
    console.log(this.model);
}

showCarInfo.bind(car)();
