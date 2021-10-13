const sum = require('./sum');
const calculator = require('./calculator');

const result = sum(1, 3);
console.log('sum result: ', result);

console.log('add result: ', calculator.add(4, 2));
console.log('subtract result: ', calculator.subtract(4, 2));
console.log('multiply result: ', calculator.multiply(4, 2));
console.log('divide result: ', calculator.divide(4, 2));
