//this keywords in the javascript
const user = {
    username: "harsh",
    password: 123,
    login: function () {
        console.log(`${this.username},wellcome to the website`);
        console.log(this);
    }
};
// console.log(user.login());
user.login();
console.log(this);

user.username = "bhumit";
user.login();

//Arrow Function in the javascipt
function chai(){
    let username = "harsh";
    console.log(this);
};
chai();

const chai_01 = () => {
    let username = "harsh";
    console.log(this);
};
chai_01();

//we create a two type of arrow function
//1) explicit return arrow function (simple arrow function)
const addNum = (num1, num2) => {
    return num1 + num2;
};
console.log(addNum(10, 20));

//2) implicit return arrow function most use in the single line and react js
const addNum_01 = (num1, num2) => (num1 + num2);
console.log(addNum_01(10, 20));

//return a object in the arrow function with the implicit return
const add = () => ({username: "harsh"});
console.log(add());
