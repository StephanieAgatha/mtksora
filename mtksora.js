// mtksora.js
const _ = require('lodash');

const multiply = (a, b) => {
    return a * b;
};

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
};

module.exports = { multiply, add, subtract, divide };
