//numbers and its method in javascript
const score = 500;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 23.456;
console.log(anotherNumber.toPrecision(2));
console.log(anotherNumber.toPrecision(1));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

//Math function and and its method in javascript

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//important formula for the random number
const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));