const _ = require("lodash");

const add = (num1, num2) => {
    return _.add(num1, num2);
}

const sub = (num1, num2) => {
    return _.subtract(num1, num2);
}

const mult = (num1, num2) => {
    return _.multiply(num1, num2);
}

const div = (num1, num2) => {
    return _.divide(num1, num2);
}

module.exports = {
    add, sub, mult, div
}
