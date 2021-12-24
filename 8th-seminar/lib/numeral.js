const numeral = require('numeral');

const string = numeral(1000).format('0,0');
console.log(string);
