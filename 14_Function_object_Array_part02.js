//how to use a function as the add to cart using the spread or the rest operator
//to convert the value in the arry with the use of the spread operator in function 
function addtoCart(...num1){
    return num1;
};
console.log(addtoCart(1, 2, 3, 4, 5));

function addtoCart_02(val1,val2,...val3){
    return val3;
};
console.log(addtoCart_02(1, 2, 3, 4, 5));

//use the object as the parameter in the javascript function
const user = {
    username:"harsh",
    password:123
};

function getUserInfo(info){
    return `username is ${info.username} and password is ${info.password}`
}
console.log(getUserInfo(user));

//we use a object and the array as the argument in the javascipt 
console.log(getUserInfo({username:"Shubham",password:456}));

//we use a object and the array as the argument in the javascipt 
const myarray = [100,200,300,400,500];
function getArray(element){
    return `the second element in the array is ${element[1]}`;
};
console.log(getArray(myarray));