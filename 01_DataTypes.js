function newFunction() {
    let x = 1;
    let y = 2;
    let z = x + y;
    return z;
}
console.log(newFunction());

let name = "harsh";
let age = 21;
let sentence = `hello, my name is ${name} and I am ${age} years old`;
console.log(sentence);

let y=null;
console.log(y);

let z=undefined;
console.log(z);

let k=Symbol("hello");
console.log(k);

//object 

let person={
    name:"harsh",
    age:21
}
console.table(person)
console.log(typeof person);

//interview question is type of null
console.log(typeof null);