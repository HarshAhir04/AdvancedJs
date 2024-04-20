//function scope for the inside a function and another inside a function scope level
function one() {
    const val1 = 10;
    function two() {
        console.log(val1);
    }
    two();
}
one();
// two();

//in the conrol flow scope for the if condition
const username = "harsh";
if (username === "harsh") {
    const fullname = "ahir";
    if (true) {
        console.log(username);
    }
};
// console.log(fullname);
console.log(username);

//hoisting in the javascript
//in this method the function called before the declaration of the function is valid for that declaration
//interesting questions
addnum();
function addnum(num) {
    return num + 10;
};
// addnum();

// console.log(sub());
//variable expression
// console.log(add(5));
const add = function addnum2(num1) {
    return num1 + 20;
};
console.log(add(5));