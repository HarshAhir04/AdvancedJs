//primitive data types
// 7 types
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. object

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userEmai;

const id = Symbol('123');
const anotheraddress = Symbol('123');

console.log(id === anotheraddress);

const bignumber = 4984943947347384732472n;

//javascript is a dynamic language
// 1. it can change the type of data
// 2. it can change the value of data
// 3. it can change the reference of data

//non primitive data types (reference data types)
// 1. array
// 2. function
// 3. object

const heroes = ['shaktiman', 'thor', 'spiderman', 'ironman'];

const superman = {
    name: 'clark',
    age: 29
}

const newfunction = function () {
    console.log('hello advanced javascript');
}

console.log(typeof newfunction);
console.log(typeof superman);
console.log(typeof heroes);
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmai);
console.log(typeof id);
console.log(typeof bignumber);