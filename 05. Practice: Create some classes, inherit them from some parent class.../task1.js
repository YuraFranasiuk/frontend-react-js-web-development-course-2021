function Calculator() {
    this.sum = (left, right) => left + right;
    this.subtract = (left, right) => left - right;

    return this;
}

function AdvancedCalculator() {
    Calculator.call(this);

    this.multiply = (left, right) => left * right;
    this.divide = (left, right) => left / right;

    return this;
}
