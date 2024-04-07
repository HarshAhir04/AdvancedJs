//Array in javascript
let myarray = [1, 2, 3, true, "harsh"];
console.log(myarray);

let newarray = new Array("yes","no","harsh","reason");
console.log(newarray);
console.log(typeof myarray);
console.log(typeof newarray);

console.warn("Array is not a object in javascript");

console.log(myarray.flat());

//array methods
//push method add the elements in the last in the array
//pop method remove the elements in the last in the array
console.log(myarray.push(4));
console.log(myarray.push(5));
console.log(myarray.pop());
console.log(myarray);

//unshift method add the elements in the first in the array
//shift method remove the elements in the first in the array
console.log(myarray.unshift(6));
console.log(myarray.unshift(7));
console.log(myarray.shift());
console.log(myarray);

//to answer a true or false in array includs methos is used
console.log(myarray.includes(1));

//indexOf method return the index of the element
console.log(myarray.indexOf(3));

//interesting questions
const newArr = myarray.join();
console.log(newArr);
console.log(typeof newArr);
console.log(myarray);

//another interesting question based on the slice and splice method
//slice method is the give the elements from the array
//splice method is the remove the elements from the array

const newArr2 = [1,2,3,4,5];
console.log("A ", newArr2);

const newArr3 = newArr2.slice(1,3);
console.log("B ", newArr3);
console.log("A ", newArr2);

const newArr4 = newArr2.splice(1,3);
console.log("C ", newArr4);
console.log("A ", newArr2);